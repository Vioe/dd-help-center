<template>
  <div v-if="pageState === 'over'" class="help-center">
    <div class="cont-box">
      <div class="info-intro">
        <div v-for="(item, index) in pageList.list" :key="index">
          <div v-html="item.info"></div>
          <div
            :id="`videoContainer_${item.videoIndex}`"
            v-if="item.video"
            class="video-container"
            :style="{ height: videoHeight[index]}"
          >
            <video
              v-show="videoShowArr[item.videoIndex]"
              :id="`myVideo_${item.videoIndex}`"
              class="video"
              :src="item.video.src"
              preload="auto"
              :controls="true"
              :autoplay="false"
              :poster="item.video.poster"
              @play="onPlay"
              @pause="onPause"
              @fullscreenchange="onFullscreenchange"
              @ended="onEnded"
              @error="onError"
              :data-index="item.videoIndex"
            ></video>
            <div v-show="!videoShowArr[item.videoIndex]" class="video-cover">
              <template v-if="item.isStart">
                <div class="video-cover-image">
                  <div
                    class="show-pic"
                    :style="item.video.poster? { background: `url(${item.video.poster}) no-repeat center`, backgroundSize: 'cover'}:''"
                  ></div>
                </div>
                <div
                  class="cover-shadow"
                  @click="onContinuePlayHandle"
                  :data-index="item.videoIndex"
                >
                  <img class="video-play-icon" src="../assets/btn_video_play.svg" />
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="isDingtalk"
        class="footer-height"
        :class="{ 'security-padding-bottom' : isIphoneX }"
      >
        <div class="footer-tab" :class="{ 'security-padding-bottom' : isIphoneX }">
          <div class="footer-left">
            <div v-if="options.uaType == 'web-view'" class="share-icon" @click="share">
              <img class="icon-img" src="../assets/share_icon.svg" alt />
              <div class="icon-text">分享</div>
            </div>
            <div v-else class="share-btn" @click="share">分享</div>
          </div>
          <div
            class="try-btn"
            @click="goServiceOrHome"
          >{{options.uaType == 'web-view' ? '问题没有解决？点我联系客服' : '去试一试'}}</div>
        </div>
      </div>
    </div>
  </div>
  <page-state
    v-else
    :state="pageState"
    @onPageErrorClickEvent="onPageErrorHandler"
    :title="pageTitle"
    :desc="pageDesc"
  />
</template>

<script>
import PageState from '@/components/PageState';
import { HelpCenterBiz } from '@/http/api/HelpCenterBiz';
import Util from '@/utils/util';
import { biz } from 'dingtalk-jsapi';
import { webViewUrl, shareIcon, logoIcon, shareImg } from '@/global/constants';
import { pageStateInitData, pageState } from '@/global/pageState'
let pageInfoDefault = {
  list: [],
  videoList: [],
  pepInfo: null,
  dingTalkFileInfo: null,
  pptInfo: null,
  videoShowArr: [],
  status: {}, //1播放中，0暂停
}

export default {
  components: { PageState },
  props: {},
  data: () => ({
    ...pageStateInitData,
    ddApp: false,
    isDingtalk: false,
    detailInfo: null,
    videoHeight: [],
    ...pageInfoDefault,
    customImg: '',
    pageList: '',
    isIphoneX: Util.isIphoneX(),
    options: {},
    showText: ''
  }),
  created() {
    this.initPage();
  },
  destroyed() {
  },
  methods: {
    ...pageState,
    initPage() {
      // 钉钉webview 安卓
      const isMiniProgram = window.deviceEnv.indexOf('miniprogram') > -1;
      // 钉钉webview ios
      const isDDWeb = window.deviceEnv.indexOf('dd-web') > -1;
      this.ddApp = isMiniProgram || isDDWeb;
      this.isDingtalk = window.deviceEnv.indexOf('dingtalk') > -1 || this.ddApp;
      // 重置数据
      let pageInfoDefaultCopy = Util.deepCopy(pageInfoDefault)
      for (let key in pageInfoDefaultCopy) {
        this[key] = pageInfoDefaultCopy[key]
      }
      document.documentElement.scrollTop = document.body.scrollTop = 0;
      this.deviceEnvInH5();
    },
    /**
     * 获取内容
     */
    requestPageList() {
      HelpCenterBiz.getHelpInfo({ menuId: this.options.menuId }).then(res => {
        console.log('res', res);
        let result = Util.deepCopy(res);
        if (Util.isEmpty(result) || Util.isEmpty(result.dealContent)) {
          this.processPageEmpty(true);
          return;
        }
        this.pageList = this.resetInfo(result);
        this.pageState = 'over';
        this.$nextTick(() => {
          console.log('this.videoList', Object.keys(this.videoList))
          for (let key of Object.keys(this.videoList)) {
            let index = parseInt(key) + 1;
            let videoContainerEle = document.getElementById(`videoContainer_${index}`)
            if (videoContainerEle) {
              let videoContainerWidth = videoContainerEle.offsetWidth;
              this.videoHeight.push(`${this.videoList[key].width > this.videoList[key].height ? videoContainerWidth * 0.5625 + 'px' : videoContainerWidth * 1.477 + 'px'}`)
            }
          }
        })
      }, err => {
        this.processPageError(err);
      });
    },
    resetInfo(result) {
      if (result.videoInfo && result.videoInfo.videos) {
        this.videoList = result.videoInfo.videos.map(item => {
          return {
            src: item.videoUrl,
            poster: item.coverUrl || '',
            width: item.width,
            height: item.height,
            isStart: true
          }
        });
      }

      let content = result.dealContent;
      // let reg = /\{VIDEO-?\d+\}|\{AUDIO-?\d+\}/g;
      let reg = /\{VIDEO-?\d+\}/g;
      let s = content.split(reg);

      if (s.length == 1) {
        result.list = [{ info: s[0] }];
      } else {
        let t = content.match(reg);
        let infoList = [];
        s.forEach((item, index) => {
          let i = {
            info: item,
          };
          if (!t[index]) {
            infoList.push(i);
          } else {
            if (t[index].includes('VIDEO')) {
              i.videoIndex = t[index].replace(/[^0-9]/ig, "");
              i.video = this.videoList[i.videoIndex - 1];
              i.isStart = true;
            }
            infoList.push(i);
          }
        })
        result.list = infoList;
      }

      console.warn('视频列表 videoList', this.videoList);
      return result;
    },
    /**
     * 页面出错
     */
    onPageErrorHandler() {
      this.initPage();
    },
    /**
     * 设备环境为h5
     */
    deviceEnvInH5() {
      const href = window.location.href;
      this.options = {
        menuId: Util.getUrlParameterByName('menuId', href),
        corpId: Util.getUrlParameterByName('corpId', href) || '',
        uaType: Util.getUrlParameterByName('uaType', href) || '',
        barTitle: Util.getUrlParameterByName('barTitle', href) || ''
      }
      window.document.title =  this.options.barTitle;
      this.requestPageList();
    },
    /**
    * 分享
    */
    share() {
      const shareTitle = this.pageList.title || '在电脑上如何使用幼师贝壳？';
      const shareContent = '产品使用遇到问题？进入帮助中心看看吧，你想要的答案这里都有~';
      const iosShareImage = shareImg || '';
      const androidShareImage = shareIcon || '';
      if (this.options.uaType == 'web-view') {
        dd.postMessage({ actionType: 'share', shareInfo: { shareTitle, shareContent, iosShareImage, androidShareImage } });
      } else {
        const href = window.location.href;
        const curDomainUrl = href.indexOf('?')> -1 ? href.split('?')[0] : webViewUrl;
        biz.util.share({
          title: shareTitle,
          content: shareContent,
          url: `${curDomainUrl}?menuId=${this.options.menuId}&uaType=h5&barTitle=${this.options.barTitle}`,
          image: shareIcon,
          onlyShare: true,
          onSuccess: () => {
            console.log('share success');
          },
          onFail: (err) => {
            console.log('share err', err);
          }
        });
      }
    },
    /**
     * 去首页或联系客服
     */
    goServiceOrHome() {
      if (this.options.uaType == 'web-view') {
        dd.postMessage({ actionType: 'customerService' });
      } else {
        // 跳转到小程序首页
        const redirectUrl = `pages/index/index`;
        const openUrl = `dingtalk://dingtalkclient/action/open_micro_app?corpId=${this.options.corpId || ''}&appId=20576&page=${encodeURIComponent(redirectUrl)}`;
        biz.navigation.replace({
          url: openUrl,// 新的页面链接
          onSuccess() { },
          onFail() { }
        });
      }
    },
    timeupdate(e) {
    },
    onPlay(e) {
      console.log('play', e.target.dataset);
      let index = e.target.dataset.index;

      console.warn(`播放视频 ${index}`);

      this.$set(this.status, `myVideo_${index}`, 1)
      this.pauseOtherVideo(index);
    },
    onPause(e) {
      let index = e.target.dataset.index;

      this.$set(this.status, `myVideo_${index}`, 0)
    },
    onFullscreenchange(e) {
      console.log('fullscreenchange!! 参数是' + JSON.stringify(e));
    },
    onEnded(e) {
      console.log('ended');
    },
    onError(e) {
      console.log('video error', e);
    },
    onContinuePlayHandle(e) {
      let index = e.currentTarget.dataset.index;
      this.$set(this.videoShowArr, index, true)
      this.pausePlay(true, index);
    },
    pausePlay(isPlay, index) {
      let videoContext = document.getElementById(`myVideo_${index}`);

      if (isPlay) {
        console.warn(`点击遮罩，播放视频 ${index}`);
        this.pauseOtherVideo(index);
        videoContext.play();
      } else {
        videoContext.pause();
      }
    },
    pauseOtherVideo(activeIndex) {
      //播放当前选中的视频时，暂停其他视频
      if (Util.isNotEmpty(this.videoList)) {
        for (let index = 1, len = this.videoList.length; index <= len; index++) {
          if (activeIndex != index && this.status[`myVideo_${index}`] == 1) {
            console.warn(`暂停视频 ${index}`);
            let video = document.getElementById(`myVideo_${index}`);
            video.pause();
          }
        }
      }
    },
  }
}
</script>
<style lang="less" scoped>
.help-center {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  text-align: center;
  padding: 16px;
}

.help-center /deep/ img {
  max-width: 100%;
  border: 0;
  -ms-interpolation-mode: bicubic;
  vertical-align: middle;
}

.help-center /deep/ video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.footer-height {
  height: 60px;
  box-sizing: content-box;
}

.footer-tab {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  border-top: 1px solid rgba(25, 31, 37, 0.12);
  background: #ffffff;
  box-sizing: content-box;
}

.share-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 51px;
  margin-left: 4px;
}

.icon-img {
  width: 24px;
  height: 24px;
}

.icon-text {
  padding-top: 4px;
  font-size: 14px;
  color: rgba(25, 31, 37, 0.72);
}

.share-btn {
  font-weight: 500;
  color: rgba(25, 31, 37, 1);
  font-size: 15px;
  text-align: center;
  width: 132px;
  height: 42px;
  line-height: 42px;
  background: rgba(242, 244, 245, 1);
  border-radius: 21px;
  border: 1px solid rgba(17, 31, 44, 0.08);
  margin-right: 16px;
}

.try-btn {
  flex: 1;
  height: 42px;
  background: rgba(0, 137, 255, 1);
  border-radius: 21px;
  line-height: 42px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
}

.video-container {
  margin: 24px 0;
  position: relative;
  width: 100%;
  background: #000;
  overflow: hidden;
}

.video-cover {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.video-cover-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.video-cover-image .show-pic {
  width: 100%;
  height: 100%;
}

.video-play-icon {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  margin: auto;
}
</style>