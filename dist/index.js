(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["commom"] = factory();
	else
		root["commom"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * [isFunction 判断是否为Function]
 * @param  {[type]}  arg [description]
 * @return {Boolean}     [description]
 */
function isFunction(arg) {
    return typeof arg == "function";
}

/**
 * [isObject 判断是否为Object]
 * @param  {[type]}  arg [description]
 * @return {Boolean}     [description]
 */
function isObject(arg) {
    return Object.prototype.toString.call(arg) == "[object Object]";
}

/**
 * [isArray 判断是否为Array]
 * @param  {[type]}  arg [description]
 * @return {Boolean}     [description]
 */
function isArray(arg) {
    return (typeof arg === "undefined" ? "undefined" : _typeof(arg)) == "object" && arg.constructor == Array;
}

/**
 * [isEmtryObject 判断Object是否为空对象]
 * @param  {[Object]}  obj [obj]
 * @return {Boolean}     [description]
 */
function isEmtryObject(obj) {
    if (!obj || !isObject(obj)) {
        obj = {};
    }
    for (key in obj) {
        return false;
    }
    return true;
}

/**
 * [setCookie 设置cookie]
 * @param {[String]} name  [cookie变量名]
 * @param {[String]} value [cokkie值]
 * @param {[Number]} day   [保存时间，单位：小时]
 */
function setCookie(name, value, day) {
    var exp = new Date(),
        day = !isNaN(day) ? day : 1;

    exp.setTime(exp.getTime() + day * 60 * 60 * 1000); //有效期1小时 
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

/**
 * [getCookie 获取cookie]
 * @param  {[String]} name [cookie name]
 * @return {[type]}      [description]
 */
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return null;
}

/**
 * [deleteCookie 删除cookie]
 * @param  {[String]} name [name]
 * @return {[type]}      [description]
 */
function deleteCookie(name) {
    setCookie(name, '', -1);
}

/**
 * [formatTimeStamp 时间格式化转换]
 * @param  {[Number]} str    [时间戳]
 * @param  {[String]} format [时间格式，[YY|YYYY]年 [mm|m]月 [dd|d]天 [hh|h]时 [ii|i]分 [ss|s]秒]
 * @return {[type]}        [description]
 */
function formatTimeStamp(str, format) {
    str = parseInt(str);
    var D = false;
    if (isNaN(str)) {
        D = new Date();
    } else {
        D = new Date(str);
    }
    var ret = "";
    if (D && !isNaN(D.getTime())) {
        var fullyear = D.getFullYear();
        var month = D.getMonth() + 1;
        var date = D.getDate();
        var hours = D.getHours();
        var minute = D.getMinutes();
        var second = D.getSeconds();
        var doublemonth = month > 9 ? month : "0" + month;
        var doubledate = date > 9 ? date : "0" + date;
        var doubleyear = fullyear.toString().substr(2);
        var doublehours = hours > 9 ? hours : "0" + hours;
        var doubleminues = minute > 9 ? minute : "0" + minute;
        var doublesecond = second > 9 ? second : "0" + second;
        ret = format;
        ret = ret.replace(/YYYY/g, fullyear);
        ret = ret.replace(/YY/g, doubleyear);
        ret = ret.replace(/mm/g, doublemonth);
        ret = ret.replace(/m/g, month);
        ret = ret.replace(/dd/g, doubledate);
        ret = ret.replace(/d/g, date);
        ret = ret.replace(/hh/g, doublehours);
        ret = ret.replace(/h/g, hours);
        ret = ret.replace(/ii/g, doubleminues);
        ret = ret.replace(/i/g, minute);
        ret = ret.replace(/ss/g, doublesecond);
        ret = ret.replace(/s/g, second);
    }
    return ret;
}

/**
 * [objectAssign Object合并覆盖]
 * @param  {[Object]} obj1 [被覆盖对象]
 * @param  {[Object]} obj2 [覆盖对象]
 * @return {[type]}      [description]
 */
function objectAssign(obj1, obj2) {
    if (Object.assign && Object.assign.call) {
        obj1 = Object.assign(obj1, obj2);
    } else {
        for (var k in obj2) {
            if (isObject(obj2[k])) {
                obj2[k] = objectAssign(obj1[k], obj2[k]);
            } else {
                obj1[k] = obj2[k];
            }
        }
    }
    return obj1;
}

/**
 * [getQueryString 获取url请求参数]
 * @param  {[String]} name [参数名]
 */
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return r[2];return null;
}
/**
 * supportCss3   css3属性检测
 */
var supportCss3 = function () {
    var div = document.createElement('div'),
        vendors = 'Ms O Moz Webkit'.split(' '),
        len = vendors.length;

    return function (prop) {
        var result = [];
        if (prop in div.style) {
            result.push(prop);
        } else {
            prop = prop.replace(/^[a-z]/, function (val) {
                return val.toUpperCase();
            });
            while (len--) {
                if (vendors[len] + prop in div.style) {
                    result.push(vendors[len] + prop);
                }
            }
        }
        return JSON.stringify(result);
    };
}();
function transformImageSize(size, imgsrc) {
    var reg = /(.*?)\/([\w\d]*?)(\_?(\d*?)x\d*?)?\.(jpg|png|gif|jpeg)$/gi;
    var arr = reg.exec(imgsrc) || [];

    if (imgsrc && typeof imgsrc == "string" && !isNaN(size) && size >= 0 && arr.length > 0) {
        var info = {
            address: arr[1],
            name: arr[2],
            size: arr[4] || 0,
            type: arr[5]
        };

        if (info.address && info.name && info.type && size !== info.size) {
            if (size == 0) {
                imgsrc = info.address + "/" + (info.name + info.type);
            } else {
                imgsrc = info.address + "/" + info.name + "_" + size + "x" + size + "." + info.type;
            }
        }
    }
    return imgsrc;
}
module.exports = {
    isObject: isObject,
    isArray: isArray,
    isFunction: isFunction,
    isEmtryObject: isEmtryObject,
    setCookie: setCookie,
    getCookie: getCookie,
    deleteCookie: deleteCookie,
    objectAssign: objectAssign,
    formatTimeStamp: formatTimeStamp,
    getQueryString: getQueryString,
    supportCss3: supportCss3,
    transformImageSize: transformImageSize
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(0);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(3);

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _extends({
    browser: _index2.default
}, _index6.default, _index4.default);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function Browser() {
    var ua = window.navigator.userAgent.toLocaleLowerCase(),
        result = null,
        isIos,
        isAndroid,
        isIpad,
        isIphone,
        isWeixin,
        isQQ,
        isUc,
        isSafari,
        isWeibo,
        isLizhi;
    isIos = /mac\s+os\s+x/gi.test(ua);
    isAndroid = /android/gi.test(ua);
    isIphone = /iphone/gi.test(ua);
    isIpad = /ipad/gi.test(ua);
    isLizhi = /lizhi/gi.test(ua);
    isWeixin = /micromessenger/gi.test(ua);
    isWeibo = /weibo/gi.test(ua);
    isUc = /ucbrowser/gi.test(ua);
    return {
        isIos: isIos,
        isAndroid: isAndroid,
        isIphone: isIphone,
        isIpad: isIpad,
        isLizhi: isLizhi,
        isWeixin: isWeixin,
        isUc: isUc,
        isWeibo: isWeibo
    };
}
var browser = Browser();
module.exports = _extends({}, browser);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(0);

window.debug = util.getQueryString("debug") || util.getCookie('debug') || false;

/**
 * [log 日志打印]
 * @return {[type]} [description]
 */
function log() {
    var arr = Array.prototype.slice.call(arguments);
    for (var i = 0; i < arr.length; i++) {
        if (!isFunction(arr[i]) && (isObject(arr[i]) || isArray(arr[i]))) {
            try {
                arr[i] = JSON.stringify(arr[i]);
            } catch (e) {
                console.log(e);
            }
        }
    }
    if (window.debug) {
        setTimeout(function () {
            alert(arr.join('-----------------------------------\n'));
        }, 10);
    } else {
        console.log(arr.join('-----------------------------------\n'));
    }
}

/**
 * [debugTarget debug模式开关]
 * @return {[type]} [description]
 */
function debugTarget() {
    this.bindEvent();
}

debugTarget.prototype = {
    debugStart: window.debug,
    clicks: 0,
    openDebug: function openDebug() {
        util.setCookie('debug', true);
        window.debug = true;
    },
    closeDebug: function closeDebug() {
        util.deleteCookie('debug');
        window.debug = false;
    },
    triggerDebug: function triggerDebug() {
        var self = this;
        if (window.debug) {
            self.closeDebug();
        } else {
            self.openDebug();
        }
    },
    bindEvent: function bindEvent() {
        var $_body = document.body,
            timre = null,
            self = this;
        $_body.addEventListener("touchstart", function (event) {
            clearTimeout(timer);
            if (clicks == 7) {
                self.triggerDebug();
            } else {
                clicks++;
                timer = setTimeout(function () {
                    clicks = 0;
                }, 600);
            }
        }, false);
    }
};

var debugTarget_init = new debugTarget();

module.exports = {
    log: log
};

/***/ })
/******/ ]);
});