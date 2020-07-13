const getCheckCodeCodeMixin = {
  data: () => ({
    getCheckCodeStatus: 0, // 获取验证码状态
    getCodeMap: ['获取验证码', '重新获取'],
    timeCountdown: 60,
    isProcessing: false, // 提交处理中状态
    checkCode: null // 验证码
  }),
  computed: {
    disabled() {
      return this.isProcessing ? true : !this.checkCode
    }
  },
  destroyed() {
    clearInterval(this.countdownInterval)
    this.countdownInterval = null
  },
  methods: {
    // 60s倒计时
    setTimeCountdown() {
      if (!this.countdownInterval) {
        this.countdownInterval = setInterval(() => {
          if (this.timeCountdown > 0) {
            this.timeCountdown -= 1
          } else {
            clearInterval(this.countdownInterval)
            this.countdownInterval = null
            this.timeCountdown = 60
            this.getCheckCodeStatus = 1
          }
        }, 1000)
      }
    }
  }
}

// const pageState = {
//   methods: {
//     /**
//    * 错误界面统一处理
//    * @param {Number} code
//    */
//     processPageError(code = {}, isReload = true, pageTitle = '数据加载失败', pageDesc = '点击重新尝试') {
//       if (code == Config.requestRejectType.multipleRequest) {
//         console.warn('重复请求，不做处理');
//         return;
//       }
//       // ToastHelper.hideLoading();
//       const data = {
//         isLoading: false,
//         isLastPage: true,
//       };

//       if (isReload) {
//         dd.stopPullDownRefresh();
//         if (code.resultCode == '-2') {
//           this.setData({
//             ...data,
//             pageState: 'netError',
//             pageTitle: '网络连接已断开，\n请检查网络设置哦～',
//             pageDesc: '点击重新尝试'
//           });
//         } else if (code.resultCode == '-1') {
//           this.setData({
//             ...data,
//             pageState: 'error',
//             pageTitle: '服务器出错',
//             pageDesc: '请稍后尝试'
//           });
//         } else if (code.resultCode == '-3') {
//           console.error(code.resultMessage);
//           console.error('------ 不做处理 ---------- ');
//           this.setData({
//             pageState: '',
//             isLoading: false
//           });
//         } else {
//           this.setData({
//             ...data,
//             pageState: 'error',
//             pageTitle,
//             pageDesc
//           });
//         }
//       } else {
//         this.setData({
//           isLoading: false,
//           showMoreError: true
//         });
//       }
//     },

//     /**
//      * 空界面统一处理
//      * @param {Boolean} isReload
//      */
//     processPageEmpty(isReload, pageTitle = '这里是空的哦', pageDesc = '') {//pageDesc = '请稍后再尝试'
//       ToastHelper.hideLoading();
//       const data = {
//         isLoading: false,
//         isLastPage: true,
//         showMoreError: false,
//         pageState: 'nodata',
//         pageTitle,
//         pageDesc,
//       };

//       if (isReload) {
//         this.setData({
//           ...data,
//           pageList: []
//         });
//       } else {
//         this.setData({
//           ...data
//         });
//       }
//     },

//     /**
//      * 请求成功处理
//      * @param {isLastPage} Boolean
//      */
//     processPageDone(isReload, isLastPage, pageList = []) {
//       const data = {
//         isLoading: false,
//         isLastPage,
//         showMoreError: false,
//         pageState: 'over',
//       };

//       if (isReload) {
//         this.setData({
//           ...data,
//           pageList
//         });
//       } else {
//         this.setData({
//           ...data,
//         });
//         this.$spliceData({
//           pageList: [this.data.pageList.length, 0, ...pageList]
//         });
//       }
//     },
//   }
// }

export { getCheckCodeCodeMixin }
