const isDev = process.env.NODE_ENV === 'development' || false;


// let rootDomain = 'https://apikindergartending.babybus.com';//正式环境地址
let rootDomain = 'http://test.dingtalk.babybus.com';//内测环境地址 
let imgUrl = 'https://apikindergartending.babybus.com'; //正式环境的地址

rootDomain = isDev ? '/api' : rootDomain;

// const webViewUrl = `${rootDomain}/index.html`; // 内测

const webViewUrl = `${rootDomain}/s/ea`; // 外测 & 正式

const logoIcon = `${imgUrl}/Content/images/ElectronicAlbum/logo.png`; // 外测 & 正式

const shareIcon = `${imgUrl}/Content/images/ElectronicAlbum/shareicon.png`; // 外测 & 正式

export {
  rootDomain,
  webViewUrl,
  shareIcon,
  logoIcon
};


