(function(e){function t(t){for(var i,r,s=t[0],c=t[1],d=t[2],p=0,u=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(u.length)u.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},o={app:0},a=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1836:function(e,t,n){},2800:function(e,t,n){"use strict";var i=n("8924"),o=n.n(i);o.a},"2f44":function(e,t,n){e.exports=n.p+"static/img/data_blank_default.0c0e0be0.png"},"33f6":function(e,t,n){},"36a2":function(e,t,n){e.exports=n.p+"static/img/btn_video_play.16fc1e38.svg"},"3b5b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("a133"),n("ed0d"),n("f09c"),n("e117");var i=n("0261"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelpCenter")],1)},a=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return"over"===e.pageState?i("div",{staticClass:"help-center"},[i("div",{staticClass:"cont-box"},[i("div",{staticClass:"info-intro"},e._l(e.pageList.list,(function(t,o){return i("div",{key:o},[i("div",{domProps:{innerHTML:e._s(t.info)}}),t.video?i("div",{staticClass:"video-container",style:{height:e.videoHeight[o]},attrs:{id:"videoContainer_"+t.videoIndex}},[i("video",{directives:[{name:"show",rawName:"v-show",value:e.videoShowArr[t.videoIndex],expression:"videoShowArr[item.videoIndex]"}],staticClass:"video",attrs:{id:"myVideo_"+t.videoIndex,src:t.video.src,preload:"auto",controls:!0,autoplay:!1,poster:t.video.poster,"data-index":t.videoIndex},on:{play:e.onPlay,pause:e.onPause,fullscreenchange:e.onFullscreenchange,ended:e.onEnded,error:e.onError}}),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.videoShowArr[t.videoIndex],expression:"!videoShowArr[item.videoIndex]"}],staticClass:"video-cover"},[t.isStart?[i("div",{staticClass:"video-cover-image"},[i("div",{staticClass:"show-pic",style:t.video.poster?{background:"url("+t.video.poster+") no-repeat center",backgroundSize:"cover"}:""})]),i("div",{staticClass:"cover-shadow",attrs:{"data-index":t.videoIndex},on:{click:e.onContinuePlayHandle}},[i("img",{staticClass:"video-play-icon",attrs:{src:n("36a2")}})])]:e._e()],2)]):e._e()])})),0),e.isDingtalk?i("div",{staticClass:"footer-height",class:{"security-padding-bottom":e.isIphoneX}},[i("div",{staticClass:"footer-tab",class:{"security-padding-bottom":e.isIphoneX}},[i("div",{staticClass:"footer-left"},["web-view"==e.options.uaType?i("div",{staticClass:"share-icon",on:{click:e.share}},[i("img",{staticClass:"icon-img",attrs:{src:n("fe90"),alt:""}}),i("div",{staticClass:"icon-text"},[e._v("分享")])]):i("div",{staticClass:"share-btn",on:{click:e.share}},[e._v("分享")])]),i("div",{staticClass:"try-btn",on:{click:e.goServiceOrHome}},[e._v(e._s("web-view"==e.options.uaType?"问题没有解决？点我联系客服":"去试一试"))])])]):e._e()])]):i("page-state",{attrs:{state:e.pageState,title:e.pageTitle,desc:e.pageDesc},on:{onPageErrorClickEvent:e.onPageErrorHandler}})},s=[],c=(n("b4fb"),n("fe59"),n("b130"),n("ecb4"),n("2eeb"),n("fe8a"),n("33a2"),n("e35a"),n("90aa"),n("f4e3"),n("5e9f"),n("0d7a"),n("08ba"),n("d0f5")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"state-wrapper"},["loading"===e.state?n("div",{staticClass:"state-content-loading"},[n("div",{staticClass:"page-tip-container page-tip-container-loading",style:"padding-top:"+e.loadingTop+"vw"},[n("div",{staticClass:"loader"})])]):"nodata"===e.state?n("div",[n("div",{staticClass:"page-tip-container",style:"padding-top:"+e.nodataTop+"vw;"},[e._m(0),n("div",{staticClass:"page-tip page-title"},[e.keyword.length?n("div",[n("p",{staticClass:"text"},[e._v("没找到“")]),n("p",{staticClass:"keyword"},[e._v(e._s(e.keyword))]),n("p",{staticClass:"text"},[e._v("”相关结果")])]):n("div",[n("p",{staticClass:"text"},[e._v(e._s(e.title?e.title:"没有数据"))])])]),n("div",{staticClass:"page-tip page-desc"},[n("p",{staticClass:"text"},[e._v(e._s(e.desc))])])])]):"error"===e.state?n("div",[n("div",{staticClass:"page-tip-container",style:"padding-top:"+e.errorTop+"vw;",on:{click:e._onPageErrorHandler}},[e._m(1),n("div",{staticClass:"page-tip page-title"},[n("p",{staticClass:"text"},[e._v(e._s(e.title))])]),n("div",{staticClass:"page-tip page-desc"},[n("p",{staticClass:"text"},[e._v(e._s(e.desc))])])])]):e._e()])},l=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page-nodata-image"},[i("img",{staticClass:"image",attrs:{src:n("2f44")}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page-error-image",attrs:{"a:else":""}},[i("img",{attrs:{src:n("e077")}})])}],p=(n("513c"),{name:"",props:{state:{type:String,default:""},loadingTop:{type:Number,default:60},loadingBottom:{type:Number,default:0},errorTop:{type:Number,default:30},errorBottom:{type:Number,default:0},nodataTop:{type:Number,default:30},nodataBottom:{type:Number,default:0},title:{type:String,default:""},desc:{type:String,default:""},isCustomizeHeader:{type:Boolean,default:!1},keyword:{type:String,default:""}},data:function(){return{}},methods:{_onPageErrorHandler:function(){this.$emit("onPageErrorClickEvent")}}}),u=p,f=(n("9a7b"),n("9ca4")),v=Object(f["a"])(u,d,l,!1,null,"783de5f8",null),g=v.exports,h=(n("e18c"),n("382a")),m=n("e8cf"),y=n("82ae"),b=n.n(y),w=b.a.create({timeout:1e4,withCredentials:!0,headers:{}});w.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e.response.data)})),w.interceptors.response.use((function(e){return"0"===e.data.resultCode?e.data.data:Promise.reject(e.data)}),(function(e){return e.response?Promise.reject(e.response.data):Promise.reject(e)}));var x=w,C=n("ca00"),k=n.n(C),_=!1,E="http://test.dingtalk.babybus.com",I="https://apikindergartending.babybus.com";E=_?"/api":E;var P="".concat(E,"/index.html"),S=("".concat(I,"/Content/images/ElectronicAlbum/logo.png"),"".concat(I,"/Content/images/ElectronicAlbum/shareicon.png")),T=function(){function e(){Object(h["a"])(this,e)}return Object(m["a"])(e,null,[{key:"getHelpInfo",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return x.post("".concat(E,"/DingTalkSupportPc/GetSupportContent"),e).then((function(e){return Promise.resolve(e)}),(function(e){return Promise.reject(e)}))}}]),e}(),O=n("842b"),L={isLoading:!1,isLastPage:!1,showMoreError:!1,pageState:"loading",pageTitle:"",pageDesc:""},j={processPageEmpty:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"这里是空的哦",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"请稍后再尝试";console.log("页面数据为空"),e?(this.showMoreError=!1,this.isLastPage=!0,this.isLoading=!1,this.pageState="nodata",this.pageTitle=t,this.pageDesc=n,this.pageList=[]):(this.showMoreError=!1,this.isLastPage=!0,this.isLoading=!1,this.pageState="over")},processPageError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"数据加载失败",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"点击重新尝试";t?-2==e.resultCode?(this.isLastPage=!0,this.isLoading=!1,this.pageState="netError",this.pageTitle="网络连接已断开，\n请检查网络设置哦～",this.pageDesc="点击重新尝试"):(this.isLastPage=!0,this.isLoading=!1,this.pageState="error",this.pageTitle=n,this.pageDesc=i):(this.isLoading=!1,this.showMoreError=!0)}},H={list:[],videoList:[],pepInfo:null,dingTalkFileInfo:null,pptInfo:null,videoShowArr:[],status:{}},M={components:{PageState:g},props:{},data:function(){return Object(c["a"])(Object(c["a"])(Object(c["a"])({},L),{},{ddApp:!1,isDingtalk:!1,detailInfo:null,videoHeight:[]},H),{},{customImg:"",pageList:"",isIphoneX:k.a.isIphoneX(),options:{},showText:""})},created:function(){this.initPage()},destroyed:function(){},methods:Object(c["a"])(Object(c["a"])({},j),{},{initPage:function(){var e=window.deviceEnv.indexOf("miniprogram")>-1,t=window.deviceEnv.indexOf("dd-web")>-1;this.ddApp=e||t,this.isDingtalk=window.deviceEnv.indexOf("dingtalk")>-1||this.ddApp;var n=k.a.deepCopy(H);for(var i in n)this[i]=n[i];document.documentElement.scrollTop=document.body.scrollTop=0,this.deviceEnvInH5()},requestPageList:function(){var e=this;T.getHelpInfo({menuId:this.options.menuId}).then((function(t){console.log("res",t);var n=k.a.deepCopy(t);k.a.isEmpty(n)||k.a.isEmpty(n.dealContent)?e.processPageEmpty(!0):(e.pageList=e.resetInfo(n),e.pageState="over",e.$nextTick((function(){console.log("this.videoList",Object.keys(e.videoList));for(var t=0,n=Object.keys(e.videoList);t<n.length;t++){var i=n[t],o=parseInt(i)+1,a=document.getElementById("videoContainer_".concat(o));if(a){var r=a.offsetWidth;e.videoHeight.push("".concat(e.videoList[i].width>e.videoList[i].height?.5625*r+"px":1.477*r+"px"))}}})))}),(function(t){e.processPageError(t)}))},resetInfo:function(e){var t=this;e.videoInfo&&e.videoInfo.videos&&(this.videoList=e.videoInfo.videos.map((function(e){return{src:e.videoUrl,poster:e.coverUrl||"",width:e.width,height:e.height,isStart:!0}})));var n=e.dealContent,i=/\{VIDEO-?\d+\}/g,o=n.split(i);if(1==o.length)e.list=[{info:o[0]}];else{var a=n.match(i),r=[];o.forEach((function(e,n){var i={info:e};a[n]?(a[n].includes("VIDEO")&&(i.videoIndex=a[n].replace(/[^0-9]/gi,""),i.video=t.videoList[i.videoIndex-1],i.isStart=!0),r.push(i)):r.push(i)})),e.list=r}return console.warn("视频列表 videoList",this.videoList),e},onPageErrorHandler:function(){this.initPage()},deviceEnvInH5:function(){window.document.title="帮助中心";var e=window.location.href;this.options={menuId:k.a.getUrlParameterByName("menuId",e),corpId:k.a.getUrlParameterByName("corpId",e)||"",uaType:k.a.getUrlParameterByName("uaType",e)||""},this.requestPageList()},share:function(){var e=this.pageList.title||"在电脑上如何使用幼师贝壳？",t="产品使用遇到问题？进入帮助中心看看吧，你想要的答案这里都有~";"web-view"==this.options.uaType?dd.postMessage({actionType:"share",shareInfo:{shareTitle:e,shareContent:t}}):O["biz"].util.share({title:e,content:t,url:"".concat(P,"?menuId=").concat(this.options.menuId),image:S,onlyShare:!0,onSuccess:function(){console.log("share success")},onFail:function(e){console.log("share err",e)}})},goServiceOrHome:function(){if("web-view"==this.options.uaType)dd.postMessage({actionType:"customerService"});else{var e="pages/index/index",t="dingtalk://dingtalkclient/action/open_micro_app?corpId=".concat(this.options.corpId||"","&appId=20576&page=").concat(encodeURIComponent(e));O["biz"].navigation.replace({url:t,onSuccess:function(){},onFail:function(){}})}},timeupdate:function(e){},onPlay:function(e){console.log("play",e.target.dataset);var t=e.target.dataset.index;console.warn("播放视频 ".concat(t)),this.$set(this.status,"myVideo_".concat(t),1),this.pauseOtherVideo(t)},onPause:function(e){var t=e.target.dataset.index;this.$set(this.status,"myVideo_".concat(t),0)},onFullscreenchange:function(e){console.log("fullscreenchange!! 参数是"+JSON.stringify(e))},onEnded:function(e){console.log("ended")},onError:function(e){console.log("video error",e)},onContinuePlayHandle:function(e){var t=e.currentTarget.dataset.index;this.$set(this.videoShowArr,t,!0),this.pausePlay(!0,t)},pausePlay:function(e,t){var n=document.getElementById("myVideo_".concat(t));e?(console.warn("点击遮罩，播放视频 ".concat(t)),this.pauseOtherVideo(t),n.play()):n.pause()},pauseOtherVideo:function(e){if(k.a.isNotEmpty(this.videoList))for(var t=1,n=this.videoList.length;t<=n;t++)if(e!=t&&1==this.status["myVideo_".concat(t)]){console.warn("暂停视频 ".concat(t));var i=document.getElementById("myVideo_".concat(t));i.pause()}}})},D=M,N=(n("7763"),Object(f["a"])(D,r,s,!1,null,"3bfbbf9a",null)),z=N.exports,A={name:"App",components:{HelpCenter:z}},U=A,$=(n("2800"),Object(f["a"])(U,o,a,!1,null,"6d9b8d40",null)),B=$.exports;n("a262"),n("33f6");i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(B)}}).$mount("#app")},7763:function(e,t,n){"use strict";var i=n("3b5b"),o=n.n(i);o.a},8924:function(e,t,n){},"9a7b":function(e,t,n){"use strict";var i=n("1836"),o=n.n(i);o.a},a262:function(e,t){(function(e,t){var n=t.documentElement,i=e.devicePixelRatio||1;function o(){t.body?t.body.style.fontSize=12*i+"px":t.addEventListener("DOMContentLoaded",o)}function a(){var e=Math.min(n.clientWidth,414)/7.5;n.style.fontSize=e+"px"}if(o(),a(),e.addEventListener("resize",a),e.addEventListener("pageshow",(function(e){e.persisted&&a()})),i>=2){var r=t.createElement("body"),s=t.createElement("div");s.style.border=".5px solid transparent",r.appendChild(s),n.appendChild(r),1===s.offsetHeight&&n.classList.add("hairlines"),n.removeChild(r)}})(window,document)},ca00:function(e,t,n){n("98e0"),n("e50e"),n("e18c"),n("33a2"),n("84c2"),n("e35a"),n("1c2e"),n("34d9"),n("96db"),n("f4e3"),n("5e9f"),n("0d7a"),n("6db4"),n("af86"),n("1fb3");var i=n("1381");function o(e){if("undefined"==typeof e||!e&&"undefined"!=typeof e&&0!=e||null==e)return!0;if("number"===typeof e)return!1;for(var t in e)return!1;return!0}function a(e){var t=e.constructor===Array?[]:{};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function r(e){return JSON.parse(JSON.stringify(e))}function s(e){return!o(e)}function c(e,t){if(!t)return"";e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),i=n.exec(t);return i?i[2]?decodeURIComponent(i[2].replace(/\+/g," ")):"":null}function d(e){var t="?";for(var n in e)if(e[n]=null==e[n]?"":e[n],"array"==typeof e[n]||"object"==i(e[n]))for(var o in e[n])t+=o+"="+e[n][o]+"&";else t+=n+"="+e[n]+"&";return t.substr(0,t.length-1)}function l(e){return o(e)?{}:JSON.parse(decodeURIComponent(e))}function p(e){return o(e)?"":encodeURIComponent(JSON.stringify(e))}function u(){var e=(new Date).getTime();return"undefined"!==typeof performance&&"function"===typeof performance.now&&(e+=performance.now()),"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)}))}function f(e,t){e=e.split("."),t=t.split(".");var n=Math.max(e.length,t.length);while(e.length<n)e.push("0");while(t.length<n)t.push("0");for(var i=0;i<n;i++){var o=parseInt(e[i]),a=parseInt(t[i]);if(o>a)return 1;if(o<a)return-1}return 0}function v(e,t){if("number"===typeof e&&"number"===typeof t)return Math.floor(Math.random()*(t-e+1)+e)}function g(e){return Array.from(new Set(e))}function h(e,t,n){var i,o,a,r,s,c=function c(){var d=(new Date).getTime()-r;d<t&&d>=0?i=setTimeout(c,t-d):(i=null,n||(s=e.apply(a,o),i||(a=o=null)))};return function(){a=this,o=arguments,r=(new Date).getTime();var d=n&&!i;return i||(i=setTimeout(c,t)),d&&(s=e.apply(a,o),a=o=null),s}}function m(e,t,n){var i,o,a,r=null,s=0;n||(n={});var c=function(){s=!1===n.leading?0:(new Date).getTime(),r=null,a=e.apply(i,o),r||(i=o=null)};return function(){var d=(new Date).getTime();s||!1!==n.leading||(s=d);var l=t-(d-s);return i=this,o=arguments,l<=0||l>t?(r&&(clearTimeout(r),r=null),s=d,a=e.apply(i,o),r||(i=o=null)):r||!1===n.trailing||(r=setTimeout(c,l)),a}}function y(e){return e.replace(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g,"")}function b(e,t){for(var n="",i=0,o=0;o<e.length;o++){if(null!=e[o].match(/[^\x00-\xff]/gi)?i+=2:i+=1,i>t)break;n+=e[o]}return n}function w(e){var t=/\s+/g;return e.trim().replace(t," ")}function x(){return/iphone/gi.test(window.navigator.userAgent)&&window.screen.height>=812}function C(){document.body.addEventListener("touchmove",(function(e){e.preventDefault()}),{passive:!1})}function k(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}e.exports={isEmpty:o,isNotEmpty:s,getUrlParameterByName:c,generateUUID:u,urlParamCombine:d,objectToString:p,stringToObject:l,copy:a,deepCopy:r,versionCompare:f,randomRange:v,toSetUniq:g,debounce:h,throttle:m,clearEmoji:y,truncate:b,resetBlank:w,isIphoneX:x,preventTouchMove:C,isMobile:k}},e077:function(e,t,n){e.exports=n.p+"static/img/error_default.b3d7d9df.png"},fe90:function(e,t,n){e.exports=n.p+"static/img/share_icon.6561419d.svg"}});
//# sourceMappingURL=app.fd68b94c.js.map