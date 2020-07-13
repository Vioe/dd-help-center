<template>
  <div class="template-wrapper">
    <div class="template-list" :style="`transform: translate3d(-${ 100 * curIndex }%, 0, 0); `">
      <!-- 内容列表 -->
      <div
        class="template animated"
        :style="`backgroundImage: url(${templateInfo[item.backgroundPicID].background} );`"
        v-for="(item, pageIndex) of eAMImageList"
        :key="pageIndex"
      >
        <template v-if="pageIndex >= curIndex - 1 && pageIndex <= curIndex + 5">
          <!-- 图片 -->
          <div
            v-for="picItem of item.picList"
            :key="picItem.fileID"
            class="photo-wrapper animated delay-1s"
            :class="[curIndex === pageIndex ? 'fadeIn' : 'fadeOut', item.picList.length < 2 ? 'photo-single ' : 'photo-double']"
          >
            <template v-if="item.picList.length < 2">
              <div
                v-if="picItem.ratio > 1"
                class="photo photo-single-h"
                :style="`backgroundImage: url(${picItem.picPreviewThumb});height: ${maxHSWidth / picItem.ratio }rem;`"
              ></div>
              <div
                v-if="picItem.ratio < 1"
                class="photo photo-single-v"
                :style="`backgroundImage: url(${picItem.picPreviewThumb});width: ${maxVSHeight * picItem.ratio }rem;`"
              ></div>
              <div
                v-if="picItem.ratio === 1"
                class="photo photo-single-s"
                :style="`backgroundImage: url(${picItem.picPreviewThumb});`"
              ></div>
            </template>
            <template v-else>
              <div
                v-if="picItem.ratio > 1"
                class="photo photo-double-h"
                :style="`backgroundImage: url(${picItem.picPreviewThumb});height: ${maxHDWidth / picItem.ratio }rem;`"
              ></div>
              <div
                v-if="picItem.ratio < 1"
                class="photo photo-double-v"
                :style="`backgroundImage: url(${picItem.picPreviewThumb});width: ${maxVDHeight * picItem.ratio }rem;`"
              ></div>
              <div
                v-if="picItem.ratio === 1"
                class="photo photo-double-s"
                :style="`backgroundImage: url(${picItem.picPreviewThumb});`"
              ></div>
            </template>
          </div>
          <!-- 背景图标 -->
          <div
            class="template-icon animated"
            :class="[ curIndex === pageIndex ? iconItem.classValue : 'fadeOut']"
            :style="iconItem.styleValue"
            v-for="iconItem of templateInfo[item.backgroundPicID].iconList"
            :key="iconItem.materialID"
          ></div>

          <!-- 封面封底信息 -->
          <div
            v-if="templateInfo[item.backgroundPicID].textInfo.contentStyle"
            class="text-content animated slow"
            :class="{ 'fadeInDown' : curIndex === pageIndex }"
            :style="templateInfo[item.backgroundPicID].textInfo.contentStyle"
          >
            <div
              class="animated"
              :class="[curIndex === pageIndex ? templateInfo[item.backgroundPicID].textInfo.title.classValue : '']"
              :style="templateInfo[item.backgroundPicID].textInfo.title.styleValue"
            >{{ item.title }}</div>
            <div
              class="animated"
              :class="[curIndex === pageIndex ? templateInfo[item.backgroundPicID].textInfo.subtitle.classValue : '']"
              :style="templateInfo[item.backgroundPicID].textInfo.subtitle.styleValue"
            >{{ item.subtitle }}</div>
            <div
              class="animated"
              :class="[curIndex === pageIndex ? templateInfo[item.backgroundPicID].textInfo.description.classValue : '']"
              :style="templateInfo[item.backgroundPicID].textInfo.description.styleValue"
            >{{ item.description }}</div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Template',
  components: {},
  props: {
    eAlbumInfo: {
      type: Object,
      default: () => { }
    },
    templateInfo: {
      type: Object,
      default: () => { }
    },
    onAppLife: {
      type: String,
      default: 'show'
    }
  },
  data: () => ({
    // 单位 rem (1rem = 50px)  
    maxHSWidth: 6.62, // 横图最大宽度(单图)
    maxVSHeight: 10.38, // 竖图最大高度(单图)
    maxHDWidth: 5.24, // 横图最大宽度(双图)
    maxVDHeight: 5.46, // 竖图最大高度(双图)
    curIndex: 0, // 当前页面索引
    eAMImageList: [], // 影集图片信息
    autoPlayEAlbumTimer: null, // 定时器
    playEnded: false
  }),
  created() {
    this.initData();
  },
  mounted() {
    this.autoPlayEAlbum();
  },
  destroyed() {
    clearInterval(this.autoPlayEAlbumTimer);
    this.autoPlayEAlbumTimer = null;
  },
  watch: {
    onAppLife(newVal) {
      if (newVal === 'show') {
        this.autoPlayEAlbum();
      } else {
        clearTimeout(this.autoPlayEAlbumTimer);
        this.autoPlayEAlbumTimer = null;
        this.curIndex = 0;
      }
    },
    curIndex(newVal) {
      if (newVal >= this.eAMImageList.length - 1) {
        clearInterval(this.autoPlayEAlbumTimer);
        this.autoPlayEAlbumTimer = null;
        setTimeout(() => {
          this.$emit('onPlayEnded');
        }, 2500);
      }
    },
    eAlbumInfo: {
      handler() {
        this.initData();
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    initData() {
      this.eAMImageList = this.eAlbumInfo.pictureList;
    },
    /**
     * 自动轮播
     */
    autoPlayEAlbum() {
      this.autoPlayEAlbumTimer = setInterval(() => {
        this.curIndex += 1;
      }, 2800);
    }
  },
}
</script>
<style lang="less" scoped>
.template-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.template-wrapper .template-list {
  display: flex;
  flex-wrap: nowrap;
  width: auto;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.template-wrapper .template {
  position: relative;
  flex: 0 0 100%;
  height: 100%;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.template-wrapper .template-icon {
  position: absolute;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  animation-delay: 0.8s;
}

/* 图片部分 */

.photo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 1;
}

.template-wrapper .photo-single {
  position: absolute;
  top: calc(50% - 14px);
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.template-wrapper .photo {
  max-height: calc(81% + 10px);
  border: 5px solid rgba(255, 255, 255, 1);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(221, 221, 221, 1);
}

.template-wrapper .photo-single-h {
  width: 6.62rem;
}

.template-wrapper .photo-single-v {
  max-width: 5.82rem;
  height: 10.38rem;
}

.template-wrapper .photo-single-s {
  width: 6.62rem;
  height: 6.62rem;
}

.template-wrapper .photo-double {
  position: absolute;
  transform: translate3d(0, -50%, 0);
}

.template-wrapper .photo-double-h {
  width: 5.24rem;
}

.template-wrapper .photo-double-v {
  height: 5.46rem;
}

.template-wrapper .photo-double-s {
  width: 4.05rem;
  height: 4.05rem;
}

.template-wrapper .photo-double:nth-of-type(1) {
  top: calc(50% - 20.6%);
  left: 30px;
}

.template-wrapper .photo-double:nth-of-type(2) {
  top: calc(50% + 20.6%);
  right: 30px;
}
</style>