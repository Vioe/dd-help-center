// 阿里云图片缩放文档： https://help.aliyun.com/document_detail/44688.html
import Util from './util';

let dpr = window.devicePixelRatio;
dpr = dpr || 2; //设备像素比，默认dpr为2
console.warn('设备dpr：', dpr);

/**
 * 获取云图片缩略图
 * 阿里云图片缩放参数config 配置如
 * {
 *    format: 'jpg',
 *    m: 'm_mfit',
 *    w: 300,
 *    h: 300,
 *    q: 'Q_80',
 * }
 * format:图片格式; m:指定缩略的模式; w:指定目标缩略图的宽度; h:指定目标缩略图的高度; q:决定图片的质量
 * 
 * 缩略的模式如下：默认为 lfit。
 *    lfit：等比缩放，限制在指定w与h的矩形内的最大图片。
 *    mfit：等比缩放，延伸出指定w与h的矩形框外的最小图片。
 *    fill：固定宽高，将延伸出指定w与h的矩形框外的最小图片进行居中裁剪。
 *    pad：固定宽高，缩略填充。
 *    fixed：固定宽高，强制缩略。
 */
export default class ImgThumb {
  constructor() { }

  /**
   * @param {String} picUrl 原图地址（未拼压缩参数）
   */
  static getThumbUrl(picUrl, config) {
    // const baiduPicDomain = ['bdbbtimeimg.babybus.com', 'video-baidu.kidvideo.cn', 'videopic-baidu.kidvideo.cn', 'educate-res.kidvideo.cn'];
    // const qiniuPicDomain = ['bbtimeimg.babybus.com', 'bbtimevideo.babybus.com'];

    const aliyunDomain = ['aliyuncs.com', 'dingdingphoto.babybus.com'];

    if (Util.isEmpty(picUrl) || Util.isEmpty(config)) {
      return picUrl;
    }

    // const isBaidu = baiduPicDomain.find(item => picUrl.indexOf(item) > -1);
    // const isQiniu = qiniuPicDomain.find(item => picUrl.indexOf(item) > -1);
    const isAliyun = !!aliyunDomain.find(item => picUrl.indexOf(item) > -1);

    // if (!isBaidu && !isQiniu && !isAliyun) {
    if (!isAliyun) {
      return picUrl;
    }

    if (isAliyun) {
      if (Util.isNotEmpty(config)) {
        if (picUrl.indexOf('x-oss-process=') > -1) {
          return picUrl;
        } else if (typeof config === 'string') {
          return `${picUrl}${config}`;
        } else {
          config.format = config.format || 'jpg';
          config.m = config.m ? `,m_${config.m}` : ',m_mfit';
          config.w = config.w ? `,w_${parseInt(config.w / 2 * dpr)}` : '';//阿里云不支持小数点，小数点会导致缩略图出错
          config.h = config.h ? `,h_${parseInt(config.h / 2 * dpr)}` : '';
          config.q = config.q || 'Q_80'; //默认Q_80（绝对质量Q，相对质量q）

          let resizeStr = `/resize${config.m}${config.w}${config.h}`;
          let qualityStr = `/quality,${config.q}`;
          let formatStr = `/format,${config.format}`;

          return `${picUrl}?x-oss-process=image${resizeStr}${qualityStr}${formatStr}`;
        }
      }
    }
    // else if (isBaidu) {
    //   if (picUrl.indexOf('@') > -1) {
    //     //如果地址本身带有百度参数，就不用再加参数进去
    //     return picUrl;
    //   }
    //   if (Util.isNotEmpty(config)) {
    //     if (typeof config === 'string') {
    //       return `${picUrl}${config}`;
    //     }
    //   }
    // } else if (isQiniu) {
    //   if (picUrl.indexOf('?imageView') > -1 || picUrl.indexOf('/q/') > -1 || picUrl.indexOf('?vframe') > -1) {
    //     return picUrl;
    //   }
    //   if (picUrl.indexOf('?') > -1) {
    //     picUrl = picUrl.split('?')[0];
    //   }

    //   if (Util.isNotEmpty(config)) {
    //     if (typeof config === 'string') {
    //       return `${picUrl}${config}`;
    //     }
    //   }
    // }
  }
}