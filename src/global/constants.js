const isDev = process.env.NODE_ENV === 'development' || false;


// let rootDomain = 'http://dingtalk.babybus.com';//正式环境地址
let rootDomain = 'http://test.dingtalk.babybus.com';//内测环境地址 

rootDomain = isDev ? '/api' : rootDomain;

const webViewUrl = `${rootDomain}/static/share/support/index.html`; // 外测 & 正式

const logoIcon = `http://dingfile.babybus.com/DingFile/DingBusFile/20200716/de378841273d43a19bd0616170a1ee0e.png`; // 外测 & 正式

const shareIcon = `http://dingfile.babybus.com/DingFile/DingBusFile/20200716/e9e4df88b6e64602b26f5c74a0cf45fc.png`; // 外测 & 正式

const shareImg = 'http://dingfile.babybus.com/DingFile/DingBusFile/20200716/146cd0196cbb48c28a056e6540ef6ce7.png'; // 外测 & 正式 //todo 还没给图

export {
  rootDomain,
  webViewUrl,
  shareIcon,
  logoIcon,
  shareImg
};


