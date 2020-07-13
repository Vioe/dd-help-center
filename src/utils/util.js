function isEmpty(obj) {
  if (typeof obj == 'undefined' || !obj && typeof obj != 'undefined' && obj != 0 || obj == null) {
    return true;
  }
  if (typeof obj === 'number') {
    return false;
  }
  for (let i in obj) {
    return false;
  }
  return true;
}

/**
 * 浅拷贝
 * PS：只拷贝对象第一层级的属性，第二层级没有
 */
function copy(src) {
  var dst = src.constructor === Array ? [] : {};
  for (var prop in src) {
    if (src.hasOwnProperty(prop)) {
      dst[prop] = src[prop];
    }
  }
  return dst;
}

/**
 * 深拷贝
 * PS：对象中包含 函数对象function 将丢失
 */
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function isNotEmpty(obj) {
  return !isEmpty(obj);
}

/**
 * 获取url参数
 */
function getUrlParameterByName(name, url) {
  if (!url) {
    return '';
  }
  name = name.replace(/[\[\]]/g, '\\$&');
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

/**
 * 拼接url参数
 */
function urlParamCombine(arr) {
  let param = '?';
  for (let key in arr) {
    arr[key] = arr[key] == null ? '' : arr[key];
    if (typeof arr[key] == 'array' || typeof arr[key] == 'object') {
      for (let k in arr[key]) {
        param += k + '=' + arr[key][k] + '&';
      }
    } else {
      param += key + '=' + arr[key] + '&';
    }
  }
  return param.substr(0, param.length - 1);
}

/** json字符串转换为object实体 */
function stringToObject(str) {
  if (isEmpty(str)) {
    return {};
  }
  return JSON.parse(decodeURIComponent(str));
}

function objectToString(obj) {
  if (isEmpty(obj)) {
    return '';
  }
  return encodeURIComponent(JSON.stringify(obj));
}

function generateUUID() {
  // Public Domain/MIT
  let d = new Date().getTime();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now(); //use high-precision timer if available
  }
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
}

/**
 * Compares two software version numbers (e.g. "1.7.1" or "1.2b").
 *
 * This function was born in http://stackoverflow.com/a/6832721.
 *
 * @param {string} v1 The first version to be compared.
 * @param {string} v2 The second version to be compared.
 * @param {object} [options] Optional flags that affect comparison behavior:
 */
function versionCompare(v1, v2) {
  v1 = v1.split('.');
  v2 = v2.split('.');
  var len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }

  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i]);
    var num2 = parseInt(v2[i]);

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }

  return 0;
}

/**
 * 获取随机数；
 * min:开始范围;
 * max:结束范围;
 *
 * 如:获取1~10里面的随机数, random(1,10);
 *
 * */
function randomRange(min, max) {
  if ('number' !== typeof min || 'number' !== typeof max) return;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * 获取随机数；
 * min:开始范围;
 * max:结束范围;
 *
 * 如:获取1~10里面的随机数, random(1,10);
 *
 * */
function commentsTo(min, max) {
  if ('number' !== typeof min || 'number' !== typeof max) return;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function toSetUniq(arr) {
  return Array.from(new Set(arr));
}

/**
 * 防反跳。func函数在最后一次调用时刻的wait毫秒之后执行！
 * @param func 执行函数
 * @param wait 时间间隔
 * @param immediate 为true，debounce会在wai 时间间隔的开始调用这个函数
 * @returns {Function}
 */
function debounce(func, wait, immediate) {
  var timeout, args, context, timestamp, result;

  var later = function () {
    var last = new Date().getTime() - timestamp; // timestamp会实时更新

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function () {
    context = this;
    args = arguments;
    timestamp = new Date().getTime();
    var callNow = immediate && !timeout;

    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }
    return result;
  };
}

/**
 * 创建并返回一个像节流阀一样的函数，当重复调用函数的时候，最多每隔 wait毫秒调用一次该函数
 * @param func 执行函数
 * @param wait 时间间隔
 * @param options 如果你想禁用第一次首先执行的话，传递{leading: false}，
 *                如果你想禁用最后一次执行的话，传递{trailing: false}
 * @returns {Function}
 */
function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function () {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function () {
    var now = new Date().getTime();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}

function clearEmoji(string) {
  return string.replace(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g, '');
}
// [string=''] (string): 要截断的字符串。
// [options={}] (Object): 选项对象。
// [options.length=30] (number): 允许的最大长度。
// [options.omission='...'] (string): 超出后的代替字符。
function truncate(val, length) {
  var returnValue = '';
  var byteValLen = 0;
  for (var i = 0; i < val.length; i++) {
    if (val[i].match(/[^\x00-\xff]/ig) != null)
      byteValLen += 2;
    else
      byteValLen += 1;
    if (byteValLen > length)
      break;
    returnValue += val[i];
  }
  return returnValue;
}
// 去掉头尾空格，中间多个空格只保留一个
function resetBlank(value) {
  var regEx = /\s+/g;
  return value.trim().replace(regEx, ' ');
}

// 是否iphoneX
function isIphoneX() {
  return /iphone/gi.test(window.navigator.userAgent) && window.screen.height >= 812
};

// 禁止页面滚动
function preventTouchMove() {
  document.body.addEventListener('touchmove', function (e) {
    e.preventDefault(); //阻止默认的处理方式
  }, { passive: false }); //passive 参数不能省略，用来兼容ios和android
}


function isMobile() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

module.exports = {
  isEmpty: isEmpty,
  isNotEmpty: isNotEmpty,
  getUrlParameterByName: getUrlParameterByName,
  generateUUID: generateUUID,
  urlParamCombine: urlParamCombine,
  objectToString: objectToString,
  stringToObject: stringToObject,
  copy: copy, //浅复制
  deepCopy: deepCopy, //深复制
  versionCompare: versionCompare, //版本比较
  randomRange: randomRange, //随机数
  toSetUniq: toSetUniq, //数组去重
  debounce: debounce,
  throttle: throttle,
  clearEmoji: clearEmoji,
  truncate,
  resetBlank,
  isIphoneX,
  preventTouchMove,
  isMobile
};