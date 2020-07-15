
const pageStateInitData = {
	isLoading: false,
	isLastPage: false,
	showMoreError: false,
	pageState: 'loading',
	pageTitle: '',
	pageDesc: '',
}

const pageState = {
	/**
	 * 分页页面为空 界面处理
	 * @param {Boolean} isReload
	 */
	processPageEmpty (isReload, pageTitle = '这里是空的哦', pageDesc = '请稍后再尝试') {
		console.log('页面数据为空')
		if (isReload) {
			this.showMoreError = false
			this.isLastPage = true
			this.isLoading = false
			this.pageState = 'nodata'
			this.pageTitle = pageTitle
			this.pageDesc = pageDesc
			this.pageList = []
		} else {
			this.showMoreError = false
			this.isLastPage = true
			this.isLoading = false
			this.pageState = 'over'
		}
	},

	/**
	 * 错误界面统一处理
	 * @param {Number} code
	 */
	processPageError (code = {}, isReload = true, pageTitle = '数据加载失败', pageDesc = '点击重新尝试') {
		// if (code == Config.requestRejectType.multipleRequest) {
		//   console.warn('重复请求，不做处理');
		//   return;
		// }

		// ToastHelper.hideLoading();
		if (isReload) {
			if (code.resultCode == -2) {
				this.isLastPage = true
				this.isLoading = false
				this.pageState = 'netError'
				this.pageTitle = '网络连接已断开，\n请检查网络设置哦～'
				this.pageDesc = '点击重新尝试'
			} else {
				this.isLastPage = true
				this.isLoading = false
				this.pageState = 'error'
				this.pageTitle = pageTitle
				this.pageDesc = pageDesc
			}
		} else {
			this.isLoading = false
			this.showMoreError = true
		}
	},
}

export {
	pageStateInitData,
	pageState,
}
