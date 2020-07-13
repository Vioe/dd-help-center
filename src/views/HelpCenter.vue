<template>
  <div v-if="state === 'over'" class="help-center">
    <div class="cont-box">
      <!-- <div class="main">
        <div class="info-intro">
          <div v-for="(item, index) in pepInfo.list" :key="index">
            <div v-html="item.info"></div>
            <div v-if="item.audio" class="audio-container">
              <audio
                :id="`myAudio_${item.audioIndex}`"
                :poster="item.audio.poster"
                :name="item.audio.AudioName"
                :author="item.audio.author"
                :src="item.audio.AudioUrl"
                controls
                @error="audioError"
                @play="audioPlay"
                @pause="audioPause"
                @ended="audioEnded"
                :data-index="item.audioIndex"
              ></audio>
            </div>
            <div
              :id="`videoContainer_${item.videoIndex}`"
              v-if="item.video"
              class="video-container"
              :style="{ height: videoHeight}"
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
      </div>-->
      <div v-html="pageList"></div>
    </div>
  </div>
  <page-state
    v-else
    :state="state"
    @onPageErrorClickEvent="onPageErrorHandler"
    :title="pageTitle"
    :desc="pageDesc"
  />
</template>

<script>
import PageState from '@/components/PageState';
import { HelpCenterBiz } from '@/http/api/HelpCenterBiz';
import Util from '@/utils/util'
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
    pageTitle: '数据加载失败',
    pageDesc: '点击重新尝试',
    state: 'over',
    ddApp: false,
    isDingtalk: false,
    detailInfo: null,
    videoHeight: '386px',
    ...pageInfoDefault,
    customImg: '',
    pageList: ''
  }),
  created() {
    console.log('哈哈哈哈哈');
    this.init();
  },
  destroyed() {
  },
  methods: {
    init() {
      let pageInfoDefaultCopy = Util.deepCopy(pageInfoDefault)
      for (let key in pageInfoDefaultCopy) {
        this[key] = pageInfoDefaultCopy[key]
      }

      document.documentElement.scrollTop = document.body.scrollTop = 0;
      this.requestPageList();
    },
    requestPageList() {
      HelpCenterBiz.getHelpInfo({ menuId: 14 }).then(res => {
        console.log('res', res);
        res = Util.deepCopy(res);
        if (Util.isEmpty(res)) {
          return;
        }
        // let result = this.resetInfo(res);
        this.pageList = res.content;
        // console.log('result:', result)
      }, err => {

      })
    },
    resetInfo(result) {
      if (result.videoUrl) {
        this.videoList = JSON.parse(result.videoUrl).map(item => {
          return {
            src: item.VideoUrl,
            poster: item.CoverUrl,
            isStart: true
          }
        });
      }
      // if (result.audioUrl !== '') {
      //   this.audioList = JSON.parse(result.audioUrl).map(item => {
      //     return { ...item, author: '幼儿园教案', poster: '' }
      //   });
      // }

      let content = result.content;
      let reg = /\{video-?\d+\}|\{audio-?\d+\}/g;
      let s = content.split(reg);
      console.log('s===========', s);

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
            if (t[index].includes('AUDIO')) {
              i.audioIndex = t[index].replace(/[^0-9]/ig, "");
              i.audio = this.audioList[i.audioIndex - 1];
            }
            infoList.push(i)
          }
        })
        result.list = infoList;
      }

      console.warn('视频列表 videoList', this.videoList);
      return result;
    },
    onPageErrorHandler() {

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
  // background: red;
  // color: #ffffff;
  padding: 16px 16px 0;
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
  -o-object-fit: cover;
  object-fit: cover;
}
</style>