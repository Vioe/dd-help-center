const isDev = process.env.NODE_ENV === 'development' || false;


let rootDomain = 'http://dingtalk.babybus.com';//正式环境地址
// let rootDomain = 'http://test.dingtalk.babybus.com';//内测环境地址 

rootDomain = isDev ? '/api' : rootDomain;

const webViewUrl = `${rootDomain}/static/share/support/index.html`; // 外测 & 正式

const logoIcon = `http://dingfile.babybus.com/DingFile/DingBusFile/20200716/de378841273d43a19bd0616170a1ee0e.png`; // 外测 & 正式

const shareIcon = `http://dingfile.babybus.com/DingFile/DingBusFile/20200716/e9e4df88b6e64602b26f5c74a0cf45fc.png`; // 外测 & 正式

const shareImg = 'http://dingfile.babybus.com/DingFile/DingBusFile/20200916/266cdc650bb04896aadf089a4f3358e3.png'; // 外测 & 正式 

export {
  rootDomain,
  webViewUrl,
  shareIcon,
  logoIcon,
  shareImg
};


