<template>
  <div class="state-wrapper">
    <div class="state-content-loading" v-if="state === 'loading'">
      <div class="page-tip-container page-tip-container-loading">
        <div class="loader"></div>
      </div>
    </div>

    <!-- 没数据 -->
    <div v-else-if="state === 'nodata'">
      <div class="page-tip-container">
        <div class="page-nodata-image">
          <img class="image" src="@/assets/default_data_blank.png" />
        </div>
        <div class="page-tip page-title">
          <div v-if="keyword.length">
            <p class="text">没找到“</p>
            <p class="keyword">{{ keyword }}</p>
            <p class="text">”相关结果</p>
          </div>
          <div v-else>
            <p class="text">{{ title ? title : '没有数据' }}</p>
          </div>
        </div>
        <div class="page-tip page-desc">
          <p class="text">{{ desc }}</p>
        </div>
      </div>
    </div>

    <!-- 页面出错提示模板 -->
    <div v-else-if="state === 'error'">
      <div class="page-tip-container" @click="_onPageErrorHandler">
        <div a:else class="page-error-image">
          <img src="@/assets/default_error.png" />
        </div>
        <div class="page-tip page-title">
          <p class="text">{{ title }}</p>
        </div>
        <div class="page-tip page-desc">
          <p class="text">{{ desc }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: '',
  props: {
    //状态 :loading、nodata、error
    state: {
      type: String,
      default: ''
    },
    // //定位 margin-top位置
    // loadingTop: {
    //   type: Number,
    //   default: 60
    // },
    // loadingBottom: {
    //   type: Number,
    //   default: 0
    // },
    // errorTop: {
    //   type: Number,
    //   default: 20
    // },
    // errorBottom: {
    //   type: Number,
    //   default: 0
    // },
    // nodataTop: {
    //   type: Number,
    //   default: 30
    // },
    // nodataBottom: {
    //   type: Number,
    //   default: 0
    // },
    //标题
    title: {
      type: String,
      default: ''
    },
    //描述
    desc: {
      type: String,
      default: ''
    },
    isCustomizeHeader: {
      type: Boolean,
      default: false
    }, //是否自定义出错信息头部
    //无数据- 关键词
    keyword: {
      type: String,
      default: ''
    },
  },
  data: () => ({}),
  /**
   * 组件的方法列表
   */
  methods: {
    _onPageErrorHandler() {
      this.$emit('onPageErrorClickEvent');
    }
  }
}
</script>
<style lang="less" scoped>
/*
  loading 加载中 动画
*/

.state-wrapper {
  height: 100%;
}

.state-content-loading {
  height: 100%;
}

.page-tip-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
}

.page-tip-container-loading {
  padding-top: 0;
  justify-content: center;
}

.loader {
  width: 30px;
  height: 30px;
  animation: circle infinite 1s linear;
  border: 3px solid rgba(0, 194, 255, 1);
  border-top-color: transparent;
  border-radius: 50%;
}

@keyframes circle {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* 无数据 */

.page-nodata-image {
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
}

.page-nodata-image img {
  width: 116px;
  height: 116px;
}

.page-tip {
  position: relative;
  text-align: center;
  width: 100%;
  padding-top: 10px;
}

.page-tip .keyword {
  color: rgba(0, 194, 255, 1);
}

.page-title {
  margin-top: 10px;
  font-size: 17px;
  color: rgba(25, 31, 37, 1);
  font-weight: bold;
}

.page-desc {
  font-size: 14px;
  color: rgba(25, 31, 37, 0.56);
  line-height: 1.5;
}

/* 页面错误 */

.page-error-image {
  position: relative;
  width: 100%;
  padding-top: 56px;
  display: flex;
  justify-content: center;
}

.page-error-image img {
  width: 116px;
  height: 116px;
}
</style>