(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse || !wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"MesCloudTest","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destory', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destory', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      appOptions.onShow.apply(vm, args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      appOptions.onHide.apply(vm, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch.call(vm, args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou'){//百度、快手 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    // NOTE 此处将 != 修改为 !==。涉及地方太多恐怕测试不到，如果出现数据对比问题，将其修改回来。
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"MesCloudTest","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"MesCloudTest","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"MesCloudTest","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"MesCloudTest","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/*!**************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages.json ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 12);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e26) {throw _e26;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e27) {didErr = true;err = _e27;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct;} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;function t(e) {return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;}function n(e, t, n) {return e(n = { path: t, exports: {}, require: function require(e, t) {return function () {throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");}(null == t && n.path);} }, n.exports), n.exports;}var s = n(function (e, t) {var n;e.exports = (n = n || function (e, t) {var n = Object.create || function () {function e() {}return function (t) {var n;return e.prototype = t, n = new e(), e.prototype = null, n;};}(),s = {},r = s.lib = {},o = r.Base = { extend: function extend(e) {var t = n(this);return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {t.$super.init.apply(this, arguments);}), t.init.prototype = t, t.$super = this, t;}, create: function create() {var e = this.extend();return e.init.apply(e, arguments), e;}, init: function init() {}, mixIn: function mixIn(e) {for (var t in e) {e.hasOwnProperty(t) && (this[t] = e[t]);}e.hasOwnProperty("toString") && (this.toString = e.toString);}, clone: function clone() {return this.init.prototype.extend(this);} },i = r.WordArray = o.extend({ init: function init(e, n) {e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length;}, toString: function toString(e) {return (e || c).stringify(this);}, concat: function concat(e) {var t = this.words,n = e.words,s = this.sigBytes,r = e.sigBytes;if (this.clamp(), s % 4) for (var o = 0; o < r; o++) {var i = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;t[s + o >>> 2] |= i << 24 - (s + o) % 4 * 8;} else for (o = 0; o < r; o += 4) {t[s + o >>> 2] = n[o >>> 2];}return this.sigBytes += r, this;}, clamp: function clamp() {var t = this.words,n = this.sigBytes;t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);}, clone: function clone() {var e = o.clone.call(this);return e.words = this.words.slice(0), e;}, random: function random(t) {for (var n, s = [], r = function r(t) {t = t;var n = 987654321,s = 4294967295;return function () {var r = ((n = 36969 * (65535 & n) + (n >> 16) & s) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s;return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);};}, o = 0; o < t; o += 4) {var a = r(4294967296 * (n || e.random()));n = 987654071 * a(), s.push(4294967296 * a() | 0);}return new i.init(s, t);} }),a = s.enc = {},c = a.Hex = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;s.push((o >>> 4).toString(16)), s.push((15 & o).toString(16));}return s.join("");}, parse: function parse(e) {for (var t = e.length, n = [], s = 0; s < t; s += 2) {n[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;}return new i.init(n, t / 2);} },u = a.Latin1 = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;s.push(String.fromCharCode(o));}return s.join("");}, parse: function parse(e) {for (var t = e.length, n = [], s = 0; s < t; s++) {n[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;}return new i.init(n, t);} },h = a.Utf8 = { stringify: function stringify(e) {try {return decodeURIComponent(escape(u.stringify(e)));} catch (e) {throw new Error("Malformed UTF-8 data");}}, parse: function parse(e) {return u.parse(unescape(encodeURIComponent(e)));} },l = r.BufferedBlockAlgorithm = o.extend({ reset: function reset() {this._data = new i.init(), this._nDataBytes = 0;}, _append: function _append(e) {"string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;}, _process: function _process(t) {var n = this._data,s = n.words,r = n.sigBytes,o = this.blockSize,a = r / (4 * o),c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * o,u = e.min(4 * c, r);if (c) {for (var h = 0; h < c; h += o) {this._doProcessBlock(s, h);}var l = s.splice(0, c);n.sigBytes -= u;}return new i.init(l, u);}, clone: function clone() {var e = o.clone.call(this);return e._data = this._data.clone(), e;}, _minBufferSize: 0 }),d = (r.Hasher = l.extend({ cfg: o.extend(), init: function init(e) {this.cfg = this.cfg.extend(e), this.reset();}, reset: function reset() {l.reset.call(this), this._doReset();}, update: function update(e) {return this._append(e), this._process(), this;}, finalize: function finalize(e) {return e && this._append(e), this._doFinalize();}, blockSize: 16, _createHelper: function _createHelper(e) {return function (t, n) {return new e.init(n).finalize(t);};}, _createHmacHelper: function _createHmacHelper(e) {return function (t, n) {return new d.HMAC.init(e, n).finalize(t);};} }), s.algo = {});return s;}(Math), n);}),r = (n(function (e, t) {var n;e.exports = (n = s, function (e) {var t = n,s = t.lib,r = s.WordArray,o = s.Hasher,i = t.algo,a = [];!function () {for (var t = 0; t < 64; t++) {a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;}}();var c = i.MD5 = o.extend({ _doReset: function _doReset() {this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);}, _doProcessBlock: function _doProcessBlock(e, t) {for (var n = 0; n < 16; n++) {var s = t + n,r = e[s];e[s] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);}var o = this._hash.words,i = e[t + 0],c = e[t + 1],f = e[t + 2],p = e[t + 3],g = e[t + 4],m = e[t + 5],y = e[t + 6],_ = e[t + 7],w = e[t + 8],v = e[t + 9],S = e[t + 10],k = e[t + 11],T = e[t + 12],P = e[t + 13],I = e[t + 14],A = e[t + 15],E = o[0],b = o[1],O = o[2],U = o[3];E = u(E, b, O, U, i, 7, a[0]), U = u(U, E, b, O, c, 12, a[1]), O = u(O, U, E, b, f, 17, a[2]), b = u(b, O, U, E, p, 22, a[3]), E = u(E, b, O, U, g, 7, a[4]), U = u(U, E, b, O, m, 12, a[5]), O = u(O, U, E, b, y, 17, a[6]), b = u(b, O, U, E, _, 22, a[7]), E = u(E, b, O, U, w, 7, a[8]), U = u(U, E, b, O, v, 12, a[9]), O = u(O, U, E, b, S, 17, a[10]), b = u(b, O, U, E, k, 22, a[11]), E = u(E, b, O, U, T, 7, a[12]), U = u(U, E, b, O, P, 12, a[13]), O = u(O, U, E, b, I, 17, a[14]), E = h(E, b = u(b, O, U, E, A, 22, a[15]), O, U, c, 5, a[16]), U = h(U, E, b, O, y, 9, a[17]), O = h(O, U, E, b, k, 14, a[18]), b = h(b, O, U, E, i, 20, a[19]), E = h(E, b, O, U, m, 5, a[20]), U = h(U, E, b, O, S, 9, a[21]), O = h(O, U, E, b, A, 14, a[22]), b = h(b, O, U, E, g, 20, a[23]), E = h(E, b, O, U, v, 5, a[24]), U = h(U, E, b, O, I, 9, a[25]), O = h(O, U, E, b, p, 14, a[26]), b = h(b, O, U, E, w, 20, a[27]), E = h(E, b, O, U, P, 5, a[28]), U = h(U, E, b, O, f, 9, a[29]), O = h(O, U, E, b, _, 14, a[30]), E = l(E, b = h(b, O, U, E, T, 20, a[31]), O, U, m, 4, a[32]), U = l(U, E, b, O, w, 11, a[33]), O = l(O, U, E, b, k, 16, a[34]), b = l(b, O, U, E, I, 23, a[35]), E = l(E, b, O, U, c, 4, a[36]), U = l(U, E, b, O, g, 11, a[37]), O = l(O, U, E, b, _, 16, a[38]), b = l(b, O, U, E, S, 23, a[39]), E = l(E, b, O, U, P, 4, a[40]), U = l(U, E, b, O, i, 11, a[41]), O = l(O, U, E, b, p, 16, a[42]), b = l(b, O, U, E, y, 23, a[43]), E = l(E, b, O, U, v, 4, a[44]), U = l(U, E, b, O, T, 11, a[45]), O = l(O, U, E, b, A, 16, a[46]), E = d(E, b = l(b, O, U, E, f, 23, a[47]), O, U, i, 6, a[48]), U = d(U, E, b, O, _, 10, a[49]), O = d(O, U, E, b, I, 15, a[50]), b = d(b, O, U, E, m, 21, a[51]), E = d(E, b, O, U, T, 6, a[52]), U = d(U, E, b, O, p, 10, a[53]), O = d(O, U, E, b, S, 15, a[54]), b = d(b, O, U, E, c, 21, a[55]), E = d(E, b, O, U, w, 6, a[56]), U = d(U, E, b, O, A, 10, a[57]), O = d(O, U, E, b, y, 15, a[58]), b = d(b, O, U, E, P, 21, a[59]), E = d(E, b, O, U, g, 6, a[60]), U = d(U, E, b, O, k, 10, a[61]), O = d(O, U, E, b, f, 15, a[62]), b = d(b, O, U, E, v, 21, a[63]), o[0] = o[0] + E | 0, o[1] = o[1] + b | 0, o[2] = o[2] + O | 0, o[3] = o[3] + U | 0;}, _doFinalize: function _doFinalize() {var t = this._data,n = t.words,s = 8 * this._nDataBytes,r = 8 * t.sigBytes;n[r >>> 5] |= 128 << 24 - r % 32;var o = e.floor(s / 4294967296),i = s;n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {var h = c[u];c[u] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);}return a;}, clone: function clone() {var e = o.clone.call(this);return e._hash = this._hash.clone(), e;} });function u(e, t, n, s, r, o, i) {var a = e + (t & n | ~t & s) + r + i;return (a << o | a >>> 32 - o) + t;}function h(e, t, n, s, r, o, i) {var a = e + (t & s | n & ~s) + r + i;return (a << o | a >>> 32 - o) + t;}function l(e, t, n, s, r, o, i) {var a = e + (t ^ n ^ s) + r + i;return (a << o | a >>> 32 - o) + t;}function d(e, t, n, s, r, o, i) {var a = e + (n ^ (t | ~s)) + r + i;return (a << o | a >>> 32 - o) + t;}t.MD5 = o._createHelper(c), t.HmacMD5 = o._createHmacHelper(c);}(Math), n.MD5);}), n(function (e, t) {var n, r, o;e.exports = (r = (n = s).lib.Base, o = n.enc.Utf8, void (n.algo.HMAC = r.extend({ init: function init(e, t) {e = this._hasher = new e.init(), "string" == typeof t && (t = o.parse(t));var n = e.blockSize,s = 4 * n;t.sigBytes > s && (t = e.finalize(t)), t.clamp();for (var r = this._oKey = t.clone(), i = this._iKey = t.clone(), a = r.words, c = i.words, u = 0; u < n; u++) {a[u] ^= 1549556828, c[u] ^= 909522486;}r.sigBytes = i.sigBytes = s, this.reset();}, reset: function reset() {var e = this._hasher;e.reset(), e.update(this._iKey);}, update: function update(e) {return this._hasher.update(e), this;}, finalize: function finalize(e) {var t = this._hasher,n = t.finalize(e);return t.reset(), t.finalize(this._oKey.clone().concat(n));} })));}), n(function (e, t) {e.exports = s.HmacMD5;}));function o(e) {return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();}function i(e) {return "object" === o(e);}var a = /*#__PURE__*/function (_Error) {_inherits(a, _Error);var _super = _createSuper(a);function a(e, t) {var _this;_classCallCheck(this, a);_this = _super.call(this, e), _this.code = t;return _this;}return a;}( /*#__PURE__*/_wrapNativeSuper(Error));function c(e) {return e && "string" == typeof e ? JSON.parse(e) : e;}var u = "development" === "development",h = "mp-weixin",l = c({
    "address": [
        "127.0.0.1",
        "192.168.137.1",
        "192.168.2.105"
    ],
    "debugPort": 54031,
    "initialLaunchType": "local",
    "servePort": 54032
}
),d = c([{"provider":"tencent","spaceName":"zctmes","spaceId":"tcb-ecxw1hs9f19080-6d00j26b1957e"}]),f = true;var p = "";try {{var _e2 = __webpack_require__(/*! uni-stat-config */ 13).default || __webpack_require__(/*! uni-stat-config */ 13);p = _e2.appid;}} catch (e) {}var g = {};function m(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var n, s;return n = g, s = e, Object.prototype.hasOwnProperty.call(n, s) || (g[e] = t), g[e];}"app-plus" === h && (g = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});var y = ["invoke", "success", "fail", "complete"],_ = m("_globalUniCloudInterceptor");function w(e, t) {_[e] || (_[e] = {}), i(t) && Object.keys(t).forEach(function (n) {y.indexOf(n) > -1 && function (e, t, n) {var s = _[e][t];s || (s = _[e][t] = []), -1 === s.indexOf(n) && "function" == typeof n && s.push(n);}(e, n, t[n]);});}function v(e, t) {_[e] || (_[e] = {}), i(t) ? Object.keys(t).forEach(function (n) {y.indexOf(n) > -1 && function (e, t, n) {var s = _[e][t];if (!s) return;var r = s.indexOf(n);r > -1 && s.splice(r, 1);}(e, n, t[n]);}) : delete _[e];}function S(e, t) {return e && 0 !== e.length ? e.reduce(function (e, n) {return e.then(function () {return n(t);});}, Promise.resolve()) : Promise.resolve();}function k(e, t) {return _[e] && _[e][t] || [];}function T(e, t) {return t ? function (n) {var _this2 = this;var s = "callFunction" === t && "DCloud-clientDB" === (n && n.name);var r;r = this.isReady ? Promise.resolve() : this.initUniCloud, n = n || {};var o = r.then(function () {return s ? Promise.resolve() : S(k(t, "invoke"), n);}).then(function () {return e.call(_this2, n);}).then(function (e) {return s ? Promise.resolve(e) : S(k(t, "success"), e).then(function () {return S(k(t, "complete"), e);}).then(function () {return Promise.resolve(e);});}, function (e) {return s ? Promise.reject(e) : S(k(t, "fail"), e).then(function () {return S(k(t, "complete"), e);}).then(function () {return Promise.reject(e);});});if (!(n.success || n.fail || n.complete)) return o;o.then(function (e) {n.success && n.success(e), n.complete && n.complete(e);}).catch(function (e) {n.fail && n.fail(e), n.complete && n.complete(e);});} : function (t) {if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);e.call(this, t).then(function (e) {t.success && t.success(e), t.complete && t.complete(e);}, function (e) {t.fail && t.fail(e), t.complete && t.complete(e);});};}var P = /*#__PURE__*/function (_Error2) {_inherits(P, _Error2);var _super2 = _createSuper(P);function P(e) {var _this3;_classCallCheck(this, P);_this3 = _super2.call(this, e.message), _this3.errMsg = e.message || "", Object.defineProperties(_assertThisInitialized(_this3), { code: { get: function get() {return e.code;} }, requestId: { get: function get() {return e.requestId;} }, message: { get: function get() {return this.errMsg;}, set: function set(e) {this.errMsg = e;} } });return _this3;}return P;}( /*#__PURE__*/_wrapNativeSuper(Error));var _e3 = (0, _uniI18n.initVueI18n)({ "zh-Hans": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, "zh-Hant": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, en: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" } }, "zh-Hans"),I = _e3.t,A = _e3.setLocale,E = _e3.getLocale;var b, O;function U() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;var t = "";for (; t.length < e;) {t += Math.random().toString(32).substring(2);}return t.substring(0, e);}function C() {var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),e = _uni$getSystemInfoSyn.deviceId;return { PLATFORM: h, OS: O, APPID: p, LOCALE: E(), DEVICEID: e, CLIENT_SDK_VERSION: "1.0.8" };}function D() {if ("n" === x()) {try {b = plus.runtime.getDCloudId();} catch (e) {b = "";}return b;}return b || (b = U(32), uni.setStorage({ key: "__DC_CLOUD_UUID", data: b })), b;}function x() {var _appPlus$h5$mpWeixi;return (_appPlus$h5$mpWeixi = { "app-plus": "n", h5: "h5", "mp-weixin": "wx" }, _defineProperty(_appPlus$h5$mpWeixi, ["y", "a", "p", "mp-ali"].reverse().join(""), "ali"), _defineProperty(_appPlus$h5$mpWeixi, "mp-baidu", "bd"), _defineProperty(_appPlus$h5$mpWeixi, "mp-toutiao", "tt"), _defineProperty(_appPlus$h5$mpWeixi, "mp-qq", "qq"), _defineProperty(_appPlus$h5$mpWeixi, "quickapp-native", "qn"), _appPlus$h5$mpWeixi)[h];}var R = { sign: function sign(e, t) {var n = "";return Object.keys(e).sort().forEach(function (t) {e[t] && (n = n + "&" + t + "=" + e[t]);}), n = n.slice(1), r(n, t).toString();}, wrappedRequest: function wrappedRequest(e, t) {return new Promise(function (n, s) {t(Object.assign(e, { complete: function complete(e) {e || (e = {}), u && "h5" === h && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];if (!e.statusCode || e.statusCode >= 400) return s(new P({ code: "SYS_ERR", message: e.errMsg || "request:fail", requestId: t }));var r = e.data;if (r.error) return s(new P({ code: r.error.code, message: r.error.message, requestId: t }));r.result = r.data, r.requestId = t, delete r.data, n(r);} }));});} };var q = { request: function request(e) {return uni.request(e);}, uploadFile: function uploadFile(e) {return uni.uploadFile(e);}, setStorageSync: function setStorageSync(e, t) {return uni.setStorageSync(e, t);}, getStorageSync: function getStorageSync(e) {return uni.getStorageSync(e);}, removeStorageSync: function removeStorageSync(e) {return uni.removeStorageSync(e);}, clearStorageSync: function clearStorageSync() {return uni.clearStorageSync();} };var F = /*#__PURE__*/function () {function F(e) {_classCallCheck(this, F);["spaceId", "clientSecret"].forEach(function (t) {if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error(I("uniCloud.init.paramRequired", { param: t }));}), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = q, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;}_createClass(F, [{ key: "setAccessToken", value: function setAccessToken(e) {this.accessToken = e;} }, { key: "requestWrapped", value: function requestWrapped(e) {return R.wrappedRequest(e, this.adapter.request);} }, { key: "requestAuth", value: function requestAuth(e) {return this.requestWrapped(e);} }, { key: "request", value: function request(e, t) {var _this4 = this;return Promise.resolve().then(function () {return _this4.hasAccessToken ? t ? _this4.requestWrapped(e) : _this4.requestWrapped(e).catch(function (t) {return new Promise(function (e, n) {!t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();}).then(function () {return _this4.getAccessToken();}).then(function () {var t = _this4.rebuildRequest(e);return _this4.request(t, !0);});}) : _this4.getAccessToken().then(function () {var t = _this4.rebuildRequest(e);return _this4.request(t, !0);});});} }, { key: "rebuildRequest", value: function rebuildRequest(e) {var t = Object.assign({}, e);return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = R.sign(t.data, this.config.clientSecret), t;} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),s = { "Content-Type": "application/json" };return "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = R.sign(n, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: s };} }, { key: "getAccessToken", value: function getAccessToken() {var _this5 = this;if ("pending" === this._getAccessTokenPromiseStatus) return this._getAccessTokenPromise;this._getAccessTokenPromiseStatus = "pending";return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then(function (e) {return new Promise(function (t, n) {e.result && e.result.accessToken ? (_this5.setAccessToken(e.result.accessToken), _this5._getAccessTokenPromiseStatus = "fulfilled", t(_this5.accessToken)) : (_this5._getAccessTokenPromiseStatus = "rejected", n(new P({ code: "AUTH_FAILED", message: "获取accessToken失败" })));});}, function (e) {return _this5._getAccessTokenPromiseStatus = "rejected", Promise.reject(e);}), this._getAccessTokenPromise;} }, { key: "authorize", value: function authorize() {this.getAccessToken();} }, { key: "callFunction", value: function callFunction(e) {var t = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };return this.request(this.setupRequest(t));} }, { key: "getOSSUploadOptionsFromPath", value: function getOSSUploadOptionsFromPath(e) {var t = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref) {var _this6 = this;var e = _ref.url,t = _ref.formData,n = _ref.name,s = _ref.filePath,r = _ref.fileType,o = _ref.onUploadProgress;return new Promise(function (i, a) {var c = _this6.adapter.uploadFile({ url: e, formData: t, name: n, filePath: s, fileType: r, header: { "X-OSS-server-side-encrpytion": "AES256" }, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new P({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {a(new P({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof o && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "reportOSSUpload", value: function reportOSSUpload(e) {var t = { method: "serverless.file.resource.report", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFile", value: function uploadFile(_ref2) {var _this7 = this;var e = _ref2.filePath,t = _ref2.cloudPath,_ref2$fileType = _ref2.fileType,n = _ref2$fileType === void 0 ? "image" : _ref2$fileType,s = _ref2.onUploadProgress,r = _ref2.config;if (!t) throw new P({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var o = r && r.envType || this.config.envType;var i, a;return this.getOSSUploadOptionsFromPath({ env: o, filename: t }).then(function (t) {var r = t.result;i = r.id, a = "https://" + r.cdnDomain + "/" + r.ossPath;var o = { url: "https://" + r.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: r.accessKeyId, Signature: r.signature, host: r.host, id: i, key: r.ossPath, policy: r.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: n };return _this7.uploadFileToOSS(Object.assign({}, o, { onUploadProgress: s }));}).then(function () {return _this7.reportOSSUpload({ id: i });}).then(function (t) {return new Promise(function (n, s) {t.success ? n({ success: !0, filePath: e, fileID: a }) : s(new P({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref3) {var e = _ref3.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };return this.request(this.setupRequest(t));} }, { key: "getTempFileURL", value: function getTempFileURL() {var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref4.fileList;return new Promise(function (t, n) {Array.isArray(e) && 0 !== e.length || n(new P({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t({ fileList: e.map(function (e) {return { fileID: e, tempFileURL: e };}) });});} }, { key: "hasAccessToken", get: function get() {return !!this.accessToken;} }]);return F;}();var L = { init: function init(e) {var t = new F(e),n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t.customAuth = t.auth, t;} },N = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";var M;!function (e) {e.local = "local", e.none = "none", e.session = "session";}(M || (M = {}));var $ = function $() {};var j = function j() {var e;if (!Promise) {e = function e() {}, e.promise = {};var _t = function _t() {throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');};return Object.defineProperty(e.promise, "then", { get: _t }), Object.defineProperty(e.promise, "catch", { get: _t }), e;}var t = new Promise(function (t, n) {e = function e(_e4, s) {return _e4 ? n(_e4) : t(s);};});return e.promise = t, e;};function K(e) {return void 0 === e;}function B(e) {return "[object Null]" === Object.prototype.toString.call(e);}var H;function W(e) {var t = (n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]);var n;var _iterator = _createForOfIteratorHelper(t),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _e5 = _step.value;var _t2 = _e5.isMatch,_n = _e5.genAdapter,_s = _e5.runtime;if (_t2()) return { adapter: _n(), runtime: _s };}} catch (err) {_iterator.e(err);} finally {_iterator.f();}}!function (e) {e.WEB = "web", e.WX_MP = "wx_mp";}(H || (H = {}));var z = { adapter: null, runtime: void 0 },V = ["anonymousUuidKey"];var J = /*#__PURE__*/function (_$) {_inherits(J, _$);var _super3 = _createSuper(J);function J() {var _this8;_classCallCheck(this, J);_this8 = _super3.call(this), z.adapter.root.tcbObject || (z.adapter.root.tcbObject = {});return _this8;}_createClass(J, [{ key: "setItem", value: function setItem(e, t) {z.adapter.root.tcbObject[e] = t;} }, { key: "getItem", value: function getItem(e) {return z.adapter.root.tcbObject[e];} }, { key: "removeItem", value: function removeItem(e) {delete z.adapter.root.tcbObject[e];} }, { key: "clear", value: function clear() {delete z.adapter.root.tcbObject;} }]);return J;}($);function Y(e, t) {switch (e) {case "local":return t.localStorage || new J();case "none":return new J();default:return t.sessionStorage || new J();}}var X = /*#__PURE__*/function () {function X(e) {_classCallCheck(this, X);if (!this._storage) {this._persistence = z.adapter.primaryStorage || e.persistence, this._storage = Y(this._persistence, z.adapter);var _t3 = "access_token_".concat(e.env),_n2 = "access_token_expire_".concat(e.env),_s2 = "refresh_token_".concat(e.env),_r = "anonymous_uuid_".concat(e.env),_o = "login_type_".concat(e.env),_i = "user_info_".concat(e.env);this.keys = { accessTokenKey: _t3, accessTokenExpireKey: _n2, refreshTokenKey: _s2, anonymousUuidKey: _r, loginTypeKey: _o, userInfoKey: _i };}}_createClass(X, [{ key: "updatePersistence", value: function updatePersistence(e) {if (e === this._persistence) return;var t = "local" === this._persistence;this._persistence = e;var n = Y(e, z.adapter);for (var _e6 in this.keys) {var _s3 = this.keys[_e6];if (t && V.includes(_e6)) continue;var _r2 = this._storage.getItem(_s3);K(_r2) || B(_r2) || (n.setItem(_s3, _r2), this._storage.removeItem(_s3));}this._storage = n;} }, { key: "setStore", value: function setStore(e, t, n) {if (!this._storage) return;var s = { version: n || "localCachev1", content: t },r = JSON.stringify(s);try {this._storage.setItem(e, r);} catch (e) {throw e;}} }, { key: "getStore", value: function getStore(e, t) {try {if (!this._storage) return;} catch (e) {return "";}t = t || "localCachev1";var n = this._storage.getItem(e);if (!n) return "";if (n.indexOf(t) >= 0) {return JSON.parse(n).content;}return "";} }, { key: "removeStore", value: function removeStore(e) {this._storage.removeItem(e);} }]);return X;}();var G = {},Q = {};function Z(e) {return G[e];}var ee = function ee(e, t) {_classCallCheck(this, ee);this.data = t || null, this.name = e;};var te = /*#__PURE__*/function (_ee) {_inherits(te, _ee);var _super4 = _createSuper(te);function te(e, t) {var _this9;_classCallCheck(this, te);_this9 = _super4.call(this, "error", { error: e, data: t }), _this9.error = e;return _this9;}return te;}(ee);var ne = new ( /*#__PURE__*/function () {function _class() {_classCallCheck(this, _class);this._listeners = {};}_createClass(_class, [{ key: "on", value: function on(e, t) {return function (e, t, n) {n[e] = n[e] || [], n[e].push(t);}(e, t, this._listeners), this;} }, { key: "off", value: function off(e, t) {return function (e, t, n) {if (n && n[e]) {var _s4 = n[e].indexOf(t);-1 !== _s4 && n[e].splice(_s4, 1);}}(e, t, this._listeners), this;} }, { key: "fire", value: function fire(e, t) {if (e instanceof te) return console.error(e.error), this;var n = "string" == typeof e ? new ee(e, t || {}) : e;var s = n.name;if (this._listens(s)) {n.target = this;var _e7 = this._listeners[s] ? _toConsumableArray(this._listeners[s]) : [];var _iterator2 = _createForOfIteratorHelper(_e7),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _t4 = _step2.value;_t4.call(this, n);}} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}}return this;} }, { key: "_listens", value: function _listens(e) {return this._listeners[e] && this._listeners[e].length > 0;} }]);return _class;}())();function se(e, t) {ne.on(e, t);}function re(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};ne.fire(e, t);}function oe(e, t) {ne.off(e, t);}var ie = "loginStateChanged",ae = "loginStateExpire",ce = "loginTypeChanged",ue = "anonymousConverted",he = "refreshAccessToken";var le;!function (e) {e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";}(le || (le = {}));var de = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],fe = { "X-SDK-Version": "1.3.5" };function pe(e, t, n) {var s = e[t];e[t] = function (t) {var r = {},o = {};n.forEach(function (n) {var _n$call = n.call(e, t),s = _n$call.data,i = _n$call.headers;Object.assign(r, s), Object.assign(o, i);});var i = t.data;return i && function () {var e;if (e = i, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, i), r);else for (var _e8 in r) {i.append(_e8, r[_e8]);}}(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), o), s.call(e, t);};}function ge() {var e = Math.random().toString(16).slice(2);return { data: { seqId: e }, headers: _objectSpread(_objectSpread({}, fe), {}, { "x-seqid": e }) };}var me = /*#__PURE__*/function () {function me() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, me);var t;this.config = e, this._reqClass = new z.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"), restrictedMethods: ["post"] }), this._cache = Z(this.config.env), this._localCache = (t = this.config.env, Q[t]), pe(this._reqClass, "post", [ge]), pe(this._reqClass, "upload", [ge]), pe(this._reqClass, "download", [ge]);}_createClass(me, [{ key: "post", value: function () {var _post = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this._reqClass.post(e);case 2:return _context.abrupt("return", _context.sent);case 3:case "end":return _context.stop();}}}, _callee, this);}));function post(_x) {return _post.apply(this, arguments);}return post;}() }, { key: "upload", value: function () {var _upload = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(e) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return this._reqClass.upload(e);case 2:return _context2.abrupt("return", _context2.sent);case 3:case "end":return _context2.stop();}}}, _callee2, this);}));function upload(_x2) {return _upload.apply(this, arguments);}return upload;}() }, { key: "download", value: function () {var _download = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(e) {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return this._reqClass.download(e);case 2:return _context3.abrupt("return", _context3.sent);case 3:case "end":return _context3.stop();}}}, _callee3, this);}));function download(_x3) {return _download.apply(this, arguments);}return download;}() }, { key: "refreshAccessToken", value: function () {var _refreshAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var e, t;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());_context4.prev = 1;_context4.next = 4;return this._refreshAccessTokenPromise;case 4:e = _context4.sent;_context4.next = 10;break;case 7:_context4.prev = 7;_context4.t0 = _context4["catch"](1);t = _context4.t0;case 10:if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {_context4.next = 12;break;}throw t;case 12:return _context4.abrupt("return", e);case 13:case "end":return _context4.stop();}}}, _callee4, this, [[1, 7]]);}));function refreshAccessToken() {return _refreshAccessToken2.apply(this, arguments);}return refreshAccessToken;}() }, { key: "_refreshAccessToken", value: function () {var _refreshAccessToken3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var _this$_cache$keys, e, t, n, s, r, o, i, a, _e9, _e10, _t5, _s5;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, n = _this$_cache$keys.refreshTokenKey, s = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;this._cache.removeStore(e), this._cache.removeStore(t);o = this._cache.getStore(n);if (o) {_context5.next = 5;break;}throw new Error("未登录CloudBase");case 5:i = { refresh_token: o };_context5.next = 8;return this.request("auth.fetchAccessTokenWithRefreshToken", i);case 8:a = _context5.sent;if (!a.data.code) {_context5.next = 21;break;}_e9 = a.data.code;if (!("SIGN_PARAM_INVALID" === _e9 || "REFRESH_TOKEN_EXPIRED" === _e9 || "INVALID_REFRESH_TOKEN" === _e9)) {_context5.next = 20;break;}if (!(this._cache.getStore(s) === le.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e9)) {_context5.next = 19;break;}_e10 = this._cache.getStore(r);_t5 = this._cache.getStore(n);_context5.next = 17;return this.send("auth.signInAnonymously", { anonymous_uuid: _e10, refresh_token: _t5 });case 17:_s5 = _context5.sent;return _context5.abrupt("return", (this.setRefreshToken(_s5.refresh_token), this._refreshAccessToken()));case 19:re(ae), this._cache.removeStore(n);case 20:throw new Error("\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code));case 21:if (!a.data.access_token) {_context5.next = 23;break;}return _context5.abrupt("return", (re(he), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), { accessToken: a.data.access_token, accessTokenExpire: a.data.access_token_expire }));case 23:a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken());case 24:case "end":return _context5.stop();}}}, _callee5, this);}));function _refreshAccessToken() {return _refreshAccessToken3.apply(this, arguments);}return _refreshAccessToken;}() }, { key: "getAccessToken", value: function () {var _getAccessToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var _this$_cache$keys2, e, t, n, s, r, o;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, n = _this$_cache$keys2.refreshTokenKey;if (this._cache.getStore(n)) {_context6.next = 3;break;}throw new Error("refresh token不存在，登录状态异常");case 3:s = this._cache.getStore(e), r = this._cache.getStore(t), o = !0;_context6.t0 = this._shouldRefreshAccessTokenHook;if (!_context6.t0) {_context6.next = 9;break;}_context6.next = 8;return this._shouldRefreshAccessTokenHook(s, r);case 8:_context6.t0 = !_context6.sent;case 9:_context6.t1 = _context6.t0;if (!_context6.t1) {_context6.next = 12;break;}o = !1;case 12:return _context6.abrupt("return", (!s || !r || r < Date.now()) && o ? this.refreshAccessToken() : { accessToken: s, accessTokenExpire: r });case 13:case "end":return _context6.stop();}}}, _callee6, this);}));function getAccessToken() {return _getAccessToken.apply(this, arguments);}return getAccessToken;}() }, { key: "request", value: function () {var _request = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(e, t, n) {var s, r, o, _e11, i, _e12, _e13, a, c, u, h, l, d, f, p, g;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:s = "x-tcb-trace_".concat(this.config.env);r = "application/x-www-form-urlencoded";o = _objectSpread({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t);if (!(-1 === de.indexOf(e))) {_context7.next = 10;break;}_e11 = this._cache.keys.refreshTokenKey;_context7.t0 = this._cache.getStore(_e11);if (!_context7.t0) {_context7.next = 10;break;}_context7.next = 9;return this.getAccessToken();case 9:o.access_token = _context7.sent.accessToken;case 10:if ("storage.uploadFile" === e) {i = new FormData();for (_e12 in i) {i.hasOwnProperty(_e12) && void 0 !== i[_e12] && i.append(_e12, o[_e12]);}r = "multipart/form-data";} else {r = "application/json;charset=UTF-8", i = {};for (_e13 in o) {void 0 !== o[_e13] && (i[_e13] = o[_e13]);}}a = { headers: { "content-type": r } };n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress);c = this._localCache.getStore(s);c && (a.headers["X-TCB-Trace"] = c);u = t.parse, h = t.inQuery, l = t.search;d = { env: this.config.env };u && (d.parse = !0), h && (d = _objectSpread(_objectSpread({}, h), d));f = function (e, t) {var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var s = /\?/.test(t);var r = "";for (var _e14 in n) {"" === r ? !s && (t += "?") : r += "&", r += "".concat(_e14, "=").concat(encodeURIComponent(n[_e14]));}return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);}(N, "//tcb-api.tencentcloudapi.com/web", d);l && (f += l);_context7.next = 22;return this.post(_objectSpread({ url: f, data: i }, a));case 22:p = _context7.sent;g = p.header && p.header["x-tcb-trace"];if (!(g && this._localCache.setStore(s, g), 200 !== Number(p.status) && 200 !== Number(p.statusCode) || !p.data)) {_context7.next = 26;break;}throw new Error("network request error");case 26:return _context7.abrupt("return", p);case 27:case "end":return _context7.stop();}}}, _callee7, this);}));function request(_x4, _x5, _x6) {return _request.apply(this, arguments);}return request;}() }, { key: "send", value: function () {var _send = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(e) {var t,n,_n3,_args8 = arguments;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:t = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};_context8.next = 3;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 3:n = _context8.sent;if (!("ACCESS_TOKEN_EXPIRED" === n.data.code && -1 === de.indexOf(e))) {_context8.next = 13;break;}_context8.next = 7;return this.refreshAccessToken();case 7:_context8.next = 9;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 9:_n3 = _context8.sent;if (!_n3.data.code) {_context8.next = 12;break;}throw new Error("[".concat(_n3.data.code, "] ").concat(_n3.data.message));case 12:return _context8.abrupt("return", _n3.data);case 13:if (!n.data.code) {_context8.next = 15;break;}throw new Error("[".concat(n.data.code, "] ").concat(n.data.message));case 15:return _context8.abrupt("return", n.data);case 16:case "end":return _context8.stop();}}}, _callee8, this);}));function send(_x7) {return _send.apply(this, arguments);}return send;}() }, { key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys3 = this._cache.keys,t = _this$_cache$keys3.accessTokenKey,n = _this$_cache$keys3.accessTokenExpireKey,s = _this$_cache$keys3.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);} }]);return me;}();var ye = {};function _e(e) {return ye[e];}var we = /*#__PURE__*/function () {function we(e) {_classCallCheck(this, we);this.config = e, this._cache = Z(e.env), this._request = _e(e.env);}_createClass(we, [{ key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys4 = this._cache.keys,t = _this$_cache$keys4.accessTokenKey,n = _this$_cache$keys4.accessTokenExpireKey,s = _this$_cache$keys4.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);} }, { key: "setAccessToken", value: function setAccessToken(e, t) {var _this$_cache$keys5 = this._cache.keys,n = _this$_cache$keys5.accessTokenKey,s = _this$_cache$keys5.accessTokenExpireKey;this._cache.setStore(n, e), this._cache.setStore(s, t);} }, { key: "refreshUserInfo", value: function () {var _refreshUserInfo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {var _yield$this$_request$, e;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$ = _context9.sent;e = _yield$this$_request$.data;return _context9.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context9.stop();}}}, _callee9, this);}));function refreshUserInfo() {return _refreshUserInfo.apply(this, arguments);}return refreshUserInfo;}() }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e);} }]);return we;}();var ve = /*#__PURE__*/function () {function ve(e) {_classCallCheck(this, ve);if (!e) throw new Error("envId is not defined");this._envId = e, this._cache = Z(this._envId), this._request = _e(this._envId), this.setUserInfo();}_createClass(ve, [{ key: "linkWithTicket", value: function linkWithTicket(e) {if ("string" != typeof e) throw new Error("ticket must be string");return this._request.send("auth.linkWithTicket", { ticket: e });} }, { key: "linkWithRedirect", value: function linkWithRedirect(e) {e.signInWithRedirect();} }, { key: "updatePassword", value: function updatePassword(e, t) {return this._request.send("auth.updatePassword", { oldPassword: t, newPassword: e });} }, { key: "updateEmail", value: function updateEmail(e) {return this._request.send("auth.updateEmail", { newEmail: e });} }, { key: "updateUsername", value: function updateUsername(e) {if ("string" != typeof e) throw new Error("username must be a string");return this._request.send("auth.updateUsername", { username: e });} }, { key: "getLinkedUidList", value: function () {var _getLinkedUidList = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var _yield$this$_request$2, e, t, n;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:_context10.next = 2;return this._request.send("auth.getLinkedUidList", {});case 2:_yield$this$_request$2 = _context10.sent;e = _yield$this$_request$2.data;t = !1;n = e.users;return _context10.abrupt("return", (n.forEach(function (e) {e.wxOpenId && e.wxPublicId && (t = !0);}), { users: n, hasPrimaryUid: t }));case 7:case "end":return _context10.stop();}}}, _callee10, this);}));function getLinkedUidList() {return _getLinkedUidList.apply(this, arguments);}return getLinkedUidList;}() }, { key: "setPrimaryUid", value: function setPrimaryUid(e) {return this._request.send("auth.setPrimaryUid", { uid: e });} }, { key: "unlink", value: function unlink(e) {return this._request.send("auth.unlink", { platform: e });} }, { key: "update", value: function () {var _update = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11(e) {var t, n, s, r, o, i, _yield$this$_request$3, a;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:t = e.nickName;n = e.gender;s = e.avatarUrl;r = e.province;o = e.country;i = e.city;_context11.next = 8;return this._request.send("auth.updateUserInfo", { nickName: t, gender: n, avatarUrl: s, province: r, country: o, city: i });case 8:_yield$this$_request$3 = _context11.sent;a = _yield$this$_request$3.data;this.setLocalUserInfo(a);case 11:case "end":return _context11.stop();}}}, _callee11, this);}));function update(_x8) {return _update.apply(this, arguments);}return update;}() }, { key: "refresh", value: function () {var _refresh = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {var _yield$this$_request$4, e;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:_context12.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$4 = _context12.sent;e = _yield$this$_request$4.data;return _context12.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context12.stop();}}}, _callee12, this);}));function refresh() {return _refresh.apply(this, arguments);}return refresh;}() }, { key: "setUserInfo", value: function setUserInfo() {var _this10 = this;var e = this._cache.keys.userInfoKey,t = this._cache.getStore(e);["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {_this10[e] = t[e];}), this.location = { country: t.country, province: t.province, city: t.city };} }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e), this.setUserInfo();} }]);return ve;}();var Se = /*#__PURE__*/function () {function Se(e) {_classCallCheck(this, Se);if (!e) throw new Error("envId is not defined");this._cache = Z(e);var _this$_cache$keys6 = this._cache.keys,t = _this$_cache$keys6.refreshTokenKey,n = _this$_cache$keys6.accessTokenKey,s = _this$_cache$keys6.accessTokenExpireKey,r = this._cache.getStore(t),o = this._cache.getStore(n),i = this._cache.getStore(s);this.credential = { refreshToken: r, accessToken: o, accessTokenExpire: i }, this.user = new ve(e);}_createClass(Se, [{ key: "isAnonymousAuth", get: function get() {return this.loginType === le.ANONYMOUS;} }, { key: "isCustomAuth", get: function get() {return this.loginType === le.CUSTOM;} }, { key: "isWeixinAuth", get: function get() {return this.loginType === le.WECHAT || this.loginType === le.WECHAT_OPEN || this.loginType === le.WECHAT_PUBLIC;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return Se;}();var ke = /*#__PURE__*/function (_we) {_inherits(ke, _we);var _super5 = _createSuper(ke);function ke() {_classCallCheck(this, ke);return _super5.apply(this, arguments);}_createClass(ke, [{ key: "signIn", value: function () {var _signIn = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {var _this$_cache$keys7, e, t, n, s, r, _e15;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:this._cache.updatePersistence("local");_this$_cache$keys7 = this._cache.keys;e = _this$_cache$keys7.anonymousUuidKey;t = _this$_cache$keys7.refreshTokenKey;n = this._cache.getStore(e) || void 0;s = this._cache.getStore(t) || void 0;_context13.next = 8;return this._request.send("auth.signInAnonymously", { anonymous_uuid: n, refresh_token: s });case 8:r = _context13.sent;if (!(r.uuid && r.refresh_token)) {_context13.next = 20;break;}this._setAnonymousUUID(r.uuid);this.setRefreshToken(r.refresh_token);_context13.next = 14;return this._request.refreshAccessToken();case 14:re(ie);re(ce, { env: this.config.env, loginType: le.ANONYMOUS, persistence: "local" });_e15 = new Se(this.config.env);_context13.next = 19;return _e15.user.refresh();case 19:return _context13.abrupt("return", _e15);case 20:throw new Error("匿名登录失败");case 21:case "end":return _context13.stop();}}}, _callee13, this);}));function signIn() {return _signIn.apply(this, arguments);}return signIn;}() }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14(e) {var _this$_cache$keys8, t, n, s, r, o;return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:_this$_cache$keys8 = this._cache.keys;t = _this$_cache$keys8.anonymousUuidKey;n = _this$_cache$keys8.refreshTokenKey;s = this._cache.getStore(t);r = this._cache.getStore(n);_context14.next = 7;return this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s, refresh_token: r, ticket: e });case 7:o = _context14.sent;if (!o.refresh_token) {_context14.next = 16;break;}this._clearAnonymousUUID();this.setRefreshToken(o.refresh_token);_context14.next = 13;return this._request.refreshAccessToken();case 13:re(ue, { env: this.config.env });re(ce, { loginType: le.CUSTOM, persistence: "local" });return _context14.abrupt("return", { credential: { refreshToken: o.refresh_token } });case 16:throw new Error("匿名转化失败");case 17:case "end":return _context14.stop();}}}, _callee14, this);}));function linkAndRetrieveDataWithTicket(_x9) {return _linkAndRetrieveDataWithTicket.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "_setAnonymousUUID", value: function _setAnonymousUUID(e) {var _this$_cache$keys9 = this._cache.keys,t = _this$_cache$keys9.anonymousUuidKey,n = _this$_cache$keys9.loginTypeKey;this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, le.ANONYMOUS);} }, { key: "_clearAnonymousUUID", value: function _clearAnonymousUUID() {this._cache.removeStore(this._cache.keys.anonymousUuidKey);} }]);return ke;}(we);var Te = /*#__PURE__*/function (_we2) {_inherits(Te, _we2);var _super6 = _createSuper(Te);function Te() {_classCallCheck(this, Te);return _super6.apply(this, arguments);}_createClass(Te, [{ key: "signIn", value: function () {var _signIn2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15(e) {var t, n;return _regenerator.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:if (!("string" != typeof e)) {_context15.next = 2;break;}throw new Error("ticket must be a string");case 2:t = this._cache.keys.refreshTokenKey;_context15.next = 5;return this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t) || "" });case 5:n = _context15.sent;if (!n.refresh_token) {_context15.next = 15;break;}this.setRefreshToken(n.refresh_token);_context15.next = 10;return this._request.refreshAccessToken();case 10:re(ie);re(ce, { env: this.config.env, loginType: le.CUSTOM, persistence: this.config.persistence });_context15.next = 14;return this.refreshUserInfo();case 14:return _context15.abrupt("return", new Se(this.config.env));case 15:throw new Error("自定义登录失败");case 16:case "end":return _context15.stop();}}}, _callee15, this);}));function signIn(_x10) {return _signIn2.apply(this, arguments);}return signIn;}() }]);return Te;}(we);var Pe = /*#__PURE__*/function (_we3) {_inherits(Pe, _we3);var _super7 = _createSuper(Pe);function Pe() {_classCallCheck(this, Pe);return _super7.apply(this, arguments);}_createClass(Pe, [{ key: "signIn", value: function () {var _signIn3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16(e, t) {var n, s, r, o, i;return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:if (!("string" != typeof e)) {_context16.next = 2;break;}throw new Error("email must be a string");case 2:n = this._cache.keys.refreshTokenKey;_context16.next = 5;return this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t, refresh_token: this._cache.getStore(n) || "" });case 5:s = _context16.sent;r = s.refresh_token;o = s.access_token;i = s.access_token_expire;if (!r) {_context16.next = 22;break;}this.setRefreshToken(r);if (!(o && i)) {_context16.next = 15;break;}this.setAccessToken(o, i);_context16.next = 17;break;case 15:_context16.next = 17;return this._request.refreshAccessToken();case 17:_context16.next = 19;return this.refreshUserInfo();case 19:re(ie);re(ce, { env: this.config.env, loginType: le.EMAIL, persistence: this.config.persistence });return _context16.abrupt("return", new Se(this.config.env));case 22:throw s.code ? new Error("\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: [".concat(s.code, "] ").concat(s.message)) : new Error("邮箱登录失败");case 23:case "end":return _context16.stop();}}}, _callee16, this);}));function signIn(_x11, _x12) {return _signIn3.apply(this, arguments);}return signIn;}() }, { key: "activate", value: function () {var _activate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee17(e) {return _regenerator.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:return _context17.abrupt("return", this._request.send("auth.activateEndUserMail", { token: e }));case 1:case "end":return _context17.stop();}}}, _callee17, this);}));function activate(_x13) {return _activate.apply(this, arguments);}return activate;}() }, { key: "resetPasswordWithToken", value: function () {var _resetPasswordWithToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee18(e, t) {return _regenerator.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:return _context18.abrupt("return", this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t }));case 1:case "end":return _context18.stop();}}}, _callee18, this);}));function resetPasswordWithToken(_x14, _x15) {return _resetPasswordWithToken.apply(this, arguments);}return resetPasswordWithToken;}() }]);return Pe;}(we);var Ie = /*#__PURE__*/function (_we4) {_inherits(Ie, _we4);var _super8 = _createSuper(Ie);function Ie() {_classCallCheck(this, Ie);return _super8.apply(this, arguments);}_createClass(Ie, [{ key: "signIn", value: function () {var _signIn4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee19(e, t) {var n, s, r, o, i;return _regenerator.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:if (!("string" != typeof e)) {_context19.next = 2;break;}throw new Error("username must be a string");case 2:"string" != typeof t && (t = "", console.warn("password is empty"));n = this._cache.keys.refreshTokenKey;_context19.next = 6;return this._request.send("auth.signIn", { loginType: le.USERNAME, username: e, password: t, refresh_token: this._cache.getStore(n) || "" });case 6:s = _context19.sent;r = s.refresh_token;o = s.access_token_expire;i = s.access_token;if (!r) {_context19.next = 23;break;}this.setRefreshToken(r);if (!(i && o)) {_context19.next = 16;break;}this.setAccessToken(i, o);_context19.next = 18;break;case 16:_context19.next = 18;return this._request.refreshAccessToken();case 18:_context19.next = 20;return this.refreshUserInfo();case 20:re(ie);re(ce, { env: this.config.env, loginType: le.USERNAME, persistence: this.config.persistence });return _context19.abrupt("return", new Se(this.config.env));case 23:throw s.code ? new Error("\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: [".concat(s.code, "] ").concat(s.message)) : new Error("用户名密码登录失败");case 24:case "end":return _context19.stop();}}}, _callee19, this);}));function signIn(_x16, _x17) {return _signIn4.apply(this, arguments);}return signIn;}() }]);return Ie;}(we);var Ae = /*#__PURE__*/function () {function Ae(e) {_classCallCheck(this, Ae);this.config = e, this._cache = Z(e.env), this._request = _e(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), se(ce, this._onLoginTypeChanged);}_createClass(Ae, [{ key: "anonymousAuthProvider", value: function anonymousAuthProvider() {return new ke(this.config);} }, { key: "customAuthProvider", value: function customAuthProvider() {return new Te(this.config);} }, { key: "emailAuthProvider", value: function emailAuthProvider() {return new Pe(this.config);} }, { key: "usernameAuthProvider", value: function usernameAuthProvider() {return new Ie(this.config);} }, { key: "signInAnonymously", value: function () {var _signInAnonymously = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee20() {return _regenerator.default.wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:return _context20.abrupt("return", new ke(this.config).signIn());case 1:case "end":return _context20.stop();}}}, _callee20, this);}));function signInAnonymously() {return _signInAnonymously.apply(this, arguments);}return signInAnonymously;}() }, { key: "signInWithEmailAndPassword", value: function () {var _signInWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee21(e, t) {return _regenerator.default.wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:return _context21.abrupt("return", new Pe(this.config).signIn(e, t));case 1:case "end":return _context21.stop();}}}, _callee21, this);}));function signInWithEmailAndPassword(_x18, _x19) {return _signInWithEmailAndPassword.apply(this, arguments);}return signInWithEmailAndPassword;}() }, { key: "signInWithUsernameAndPassword", value: function signInWithUsernameAndPassword(e, t) {return new Ie(this.config).signIn(e, t);} }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee22(e) {return _regenerator.default.wrap(function _callee22$(_context22) {while (1) {switch (_context22.prev = _context22.next) {case 0:this._anonymousAuthProvider || (this._anonymousAuthProvider = new ke(this.config)), se(ue, this._onAnonymousConverted);_context22.next = 3;return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);case 3:return _context22.abrupt("return", _context22.sent);case 4:case "end":return _context22.stop();}}}, _callee22, this);}));function linkAndRetrieveDataWithTicket(_x20) {return _linkAndRetrieveDataWithTicket2.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "signOut", value: function () {var _signOut = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee23() {var _this$_cache$keys10, e, t, n, s, r;return _regenerator.default.wrap(function _callee23$(_context23) {while (1) {switch (_context23.prev = _context23.next) {case 0:if (!(this.loginType === le.ANONYMOUS)) {_context23.next = 2;break;}throw new Error("匿名用户不支持登出操作");case 2:_this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, n = _this$_cache$keys10.accessTokenExpireKey, s = this._cache.getStore(e);if (s) {_context23.next = 5;break;}return _context23.abrupt("return");case 5:_context23.next = 7;return this._request.send("auth.logout", { refresh_token: s });case 7:r = _context23.sent;return _context23.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), re(ie), re(ce, { env: this.config.env, loginType: le.NULL, persistence: this.config.persistence }), r));case 9:case "end":return _context23.stop();}}}, _callee23, this);}));function signOut() {return _signOut.apply(this, arguments);}return signOut;}() }, { key: "signUpWithEmailAndPassword", value: function () {var _signUpWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee24(e, t) {return _regenerator.default.wrap(function _callee24$(_context24) {while (1) {switch (_context24.prev = _context24.next) {case 0:return _context24.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t }));case 1:case "end":return _context24.stop();}}}, _callee24, this);}));function signUpWithEmailAndPassword(_x21, _x22) {return _signUpWithEmailAndPassword.apply(this, arguments);}return signUpWithEmailAndPassword;}() }, { key: "sendPasswordResetEmail", value: function () {var _sendPasswordResetEmail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee25(e) {return _regenerator.default.wrap(function _callee25$(_context25) {while (1) {switch (_context25.prev = _context25.next) {case 0:return _context25.abrupt("return", this._request.send("auth.sendPasswordResetEmail", { email: e }));case 1:case "end":return _context25.stop();}}}, _callee25, this);}));function sendPasswordResetEmail(_x23) {return _sendPasswordResetEmail.apply(this, arguments);}return sendPasswordResetEmail;}() }, { key: "onLoginStateChanged", value: function onLoginStateChanged(e) {var _this11 = this;se(ie, function () {var t = _this11.hasLoginState();e.call(_this11, t);});var t = this.hasLoginState();e.call(this, t);} }, { key: "onLoginStateExpired", value: function onLoginStateExpired(e) {se(ae, e.bind(this));} }, { key: "onAccessTokenRefreshed", value: function onAccessTokenRefreshed(e) {se(he, e.bind(this));} }, { key: "onAnonymousConverted", value: function onAnonymousConverted(e) {se(ue, e.bind(this));} }, { key: "onLoginTypeChanged", value: function onLoginTypeChanged(e) {var _this12 = this;se(ce, function () {var t = _this12.hasLoginState();e.call(_this12, t);});} }, { key: "getAccessToken", value: function () {var _getAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee26() {return _regenerator.default.wrap(function _callee26$(_context26) {while (1) {switch (_context26.prev = _context26.next) {case 0:_context26.next = 2;return this._request.getAccessToken();case 2:_context26.t0 = _context26.sent.accessToken;_context26.t1 = this.config.env;return _context26.abrupt("return", { accessToken: _context26.t0, env: _context26.t1 });case 5:case "end":return _context26.stop();}}}, _callee26, this);}));function getAccessToken() {return _getAccessToken2.apply(this, arguments);}return getAccessToken;}() }, { key: "hasLoginState", value: function hasLoginState() {var e = this._cache.keys.refreshTokenKey;return this._cache.getStore(e) ? new Se(this.config.env) : null;} }, { key: "isUsernameRegistered", value: function () {var _isUsernameRegistered = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee27(e) {var _yield$this$_request$5, t;return _regenerator.default.wrap(function _callee27$(_context27) {while (1) {switch (_context27.prev = _context27.next) {case 0:if (!("string" != typeof e)) {_context27.next = 2;break;}throw new Error("username must be a string");case 2:_context27.next = 4;return this._request.send("auth.isUsernameRegistered", { username: e });case 4:_yield$this$_request$5 = _context27.sent;t = _yield$this$_request$5.data;return _context27.abrupt("return", t && t.isRegistered);case 7:case "end":return _context27.stop();}}}, _callee27, this);}));function isUsernameRegistered(_x24) {return _isUsernameRegistered.apply(this, arguments);}return isUsernameRegistered;}() }, { key: "getLoginState", value: function getLoginState() {return Promise.resolve(this.hasLoginState());} }, { key: "signInWithTicket", value: function () {var _signInWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee28(e) {return _regenerator.default.wrap(function _callee28$(_context28) {while (1) {switch (_context28.prev = _context28.next) {case 0:return _context28.abrupt("return", new Te(this.config).signIn(e));case 1:case "end":return _context28.stop();}}}, _callee28, this);}));function signInWithTicket(_x25) {return _signInWithTicket.apply(this, arguments);}return signInWithTicket;}() }, { key: "shouldRefreshAccessToken", value: function shouldRefreshAccessToken(e) {this._request._shouldRefreshAccessTokenHook = e.bind(this);} }, { key: "getUserInfo", value: function getUserInfo() {return this._request.send("auth.getUserInfo", {}).then(function (e) {return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, { requestId: e.seqId });});} }, { key: "getAuthHeader", value: function getAuthHeader() {var _this$_cache$keys11 = this._cache.keys,e = _this$_cache$keys11.refreshTokenKey,t = _this$_cache$keys11.accessTokenKey,n = this._cache.getStore(e);return { "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + n };} }, { key: "_onAnonymousConverted", value: function _onAnonymousConverted(e) {var t = e.data.env;t === this.config.env && this._cache.updatePersistence(this.config.persistence);} }, { key: "_onLoginTypeChanged", value: function _onLoginTypeChanged(e) {var _e$data = e.data,t = _e$data.loginType,n = _e$data.persistence,s = _e$data.env;s === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t));} }, { key: "currentUser", get: function get() {var e = this.hasLoginState();return e && e.user || null;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return Ae;}();var Ee = function Ee(e, t) {t = t || j();var n = _e(this.config.env),s = e.cloudPath,r = e.filePath,o = e.onUploadProgress,_e$fileType = e.fileType,i = _e$fileType === void 0 ? "image" : _e$fileType;return n.send("storage.getUploadMetadata", { path: s }).then(function (e) {var _e$data2 = e.data,a = _e$data2.url,c = _e$data2.authorization,u = _e$data2.token,h = _e$data2.fileId,l = _e$data2.cosFileId,d = e.requestId,f = { key: s, signature: c, "x-cos-meta-fileid": l, success_action_status: "201", "x-cos-security-token": u };n.upload({ url: a, data: f, file: r, name: s, fileType: i, onUploadProgress: o }).then(function (e) {201 === e.statusCode ? t(null, { fileID: h, requestId: d }) : t(new Error("STORAGE_REQUEST_FAIL: ".concat(e.data)));}).catch(function (e) {t(e);});}).catch(function (e) {t(e);}), t.promise;},be = function be(e, t) {t = t || j();var n = _e(this.config.env),s = e.cloudPath;return n.send("storage.getUploadMetadata", { path: s }).then(function (e) {t(null, e);}).catch(function (e) {t(e);}), t.promise;},Oe = function Oe(_ref5, t) {var e = _ref5.fileList;if (t = t || j(), !e || !Array.isArray(e)) return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };var _iterator3 = _createForOfIteratorHelper(e),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _t6 = _step3.value;if (!_t6 || "string" != typeof _t6) return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };}} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}var n = { fileid_list: e };return _e(this.config.env).send("storage.batchDeleteFile", n).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.delete_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},Ue = function Ue(_ref6, t) {var e = _ref6.fileList;t = t || j(), e && Array.isArray(e) || t(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });var n = [];var _iterator4 = _createForOfIteratorHelper(e),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var _s6 = _step4.value;"object" == typeof _s6 ? (_s6.hasOwnProperty("fileID") && _s6.hasOwnProperty("maxAge") || t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n.push({ fileid: _s6.fileID, max_age: _s6.maxAge })) : "string" == typeof _s6 ? n.push({ fileid: _s6 }) : t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });}} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}var s = { file_list: n };return _e(this.config.env).send("storage.batchGetDownloadUrl", s).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.download_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},Ce = /*#__PURE__*/function () {var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee29(_ref7, t) {var e, n, s, r;return _regenerator.default.wrap(function _callee29$(_context29) {while (1) {switch (_context29.prev = _context29.next) {case 0:e = _ref7.fileID;_context29.next = 3;return Ue.call(this, { fileList: [{ fileID: e, maxAge: 600 }] });case 3:n = _context29.sent.fileList[0];if (!("SUCCESS" !== n.code)) {_context29.next = 6;break;}return _context29.abrupt("return", t ? t(n) : new Promise(function (e) {e(n);}));case 6:s = _e(this.config.env);r = n.download_url;if (!(r = encodeURI(r), !t)) {_context29.next = 10;break;}return _context29.abrupt("return", s.download({ url: r }));case 10:_context29.t0 = t;_context29.next = 13;return s.download({ url: r });case 13:_context29.t1 = _context29.sent;(0, _context29.t0)(_context29.t1);case 15:case "end":return _context29.stop();}}}, _callee29, this);}));return function Ce(_x26, _x27) {return _ref8.apply(this, arguments);};}(),De = function De(_ref9, o) {var e = _ref9.name,t = _ref9.data,n = _ref9.query,s = _ref9.parse,r = _ref9.search;var i = o || j();var a;try {a = t ? JSON.stringify(t) : "";} catch (e) {return Promise.reject(e);}if (!e) return Promise.reject(new Error("函数名不能为空"));var c = { inQuery: n, parse: s, search: r, function_name: e, request_data: a };return _e(this.config.env).send("functions.invokeFunction", c).then(function (e) {if (e.code) i(null, e);else {var _t7 = e.data.response_data;if (s) i(null, { result: _t7, requestId: e.requestId });else try {_t7 = JSON.parse(e.data.response_data), i(null, { result: _t7, requestId: e.requestId });} catch (e) {i(new Error("response data must be json"));}}return i.promise;}).catch(function (e) {i(e);}), i.promise;},xe = { timeout: 15e3, persistence: "session" },Re = {};var qe = /*#__PURE__*/function () {function qe(e) {_classCallCheck(this, qe);this.config = e || this.config, this.authObj = void 0;}_createClass(qe, [{ key: "init", value: function init(e) {switch (z.adapter || (this.requestClient = new z.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD") })), this.config = _objectSpread(_objectSpread({}, xe), e), !0) {case this.config.timeout > 6e5:console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;break;case this.config.timeout < 100:console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;}return new qe(this.config);} }, { key: "auth", value: function auth() {var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref10.persistence;if (this.authObj) return this.authObj;var t = e || z.adapter.primaryStorage || xe.persistence;var n;return t !== this.config.persistence && (this.config.persistence = t), function (e) {var t = e.env;G[t] = new X(e), Q[t] = new X(_objectSpread(_objectSpread({}, e), {}, { persistence: "local" }));}(this.config), n = this.config, ye[n.env] = new me(n), this.authObj = new Ae(this.config), this.authObj;} }, { key: "on", value: function on(e, t) {return se.apply(this, [e, t]);} }, { key: "off", value: function off(e, t) {return oe.apply(this, [e, t]);} }, { key: "callFunction", value: function callFunction(e, t) {return De.apply(this, [e, t]);} }, { key: "deleteFile", value: function deleteFile(e, t) {return Oe.apply(this, [e, t]);} }, { key: "getTempFileURL", value: function getTempFileURL(e, t) {return Ue.apply(this, [e, t]);} }, { key: "downloadFile", value: function downloadFile(e, t) {return Ce.apply(this, [e, t]);} }, { key: "uploadFile", value: function uploadFile(e, t) {return Ee.apply(this, [e, t]);} }, { key: "getUploadMetadata", value: function getUploadMetadata(e, t) {return be.apply(this, [e, t]);} }, { key: "registerExtension", value: function registerExtension(e) {Re[e.name] = e;} }, { key: "invokeExtension", value: function () {var _invokeExtension = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee30(e, t) {var n;return _regenerator.default.wrap(function _callee30$(_context30) {while (1) {switch (_context30.prev = _context30.next) {case 0:n = Re[e];if (n) {_context30.next = 3;break;}throw Error("\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C"));case 3:_context30.next = 5;return n.invoke(t, this);case 5:return _context30.abrupt("return", _context30.sent);case 6:case "end":return _context30.stop();}}}, _callee30, this);}));function invokeExtension(_x28, _x29) {return _invokeExtension.apply(this, arguments);}return invokeExtension;}() }, { key: "useAdapters", value: function useAdapters(e) {var _ref11 = W(e) || {},t = _ref11.adapter,n = _ref11.runtime;t && (z.adapter = t), n && (z.runtime = n);} }]);return qe;}();var Fe = new qe();function Le(e, t, n) {void 0 === n && (n = {});var s = /\?/.test(t),r = "";for (var o in n) {"" === r ? !s && (t += "?") : r += "&", r += o + "=" + encodeURIComponent(n[o]);}return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;}var Ne = /*#__PURE__*/function () {function Ne() {_classCallCheck(this, Ne);}_createClass(Ne, [{ key: "post", value: function post(e) {var t = e.url,n = e.data,s = e.headers;return new Promise(function (e, r) {q.request({ url: Le("https:", t), data: n, method: "POST", header: s, success: function success(t) {e(t);}, fail: function fail(e) {r(e);} });});} }, { key: "upload", value: function upload(e) {return new Promise(function (t, n) {var s = e.url,r = e.file,o = e.data,i = e.headers,a = e.fileType,c = q.uploadFile({ url: Le("https:", s), name: "file", formData: Object.assign({}, o), filePath: r, fileType: a, header: i, success: function success(e) {var n = { statusCode: e.statusCode, data: e.data || {} };200 === e.statusCode && o.success_action_status && (n.statusCode = parseInt(o.success_action_status, 10)), t(n);}, fail: function fail(e) {u && "mp-alipay" === h && console.warn("支付宝小程序开发工具上传腾讯云时无法准确判断是否上传成功，请使用真机测试"), n(new Error(e.errMsg || "uploadFile:fail"));} });"function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {e.onUploadProgress({ loaded: t.totalBytesSent, total: t.totalBytesExpectedToSend });});});} }]);return Ne;}();var Me = { setItem: function setItem(e, t) {q.setStorageSync(e, t);}, getItem: function getItem(e) {return q.getStorageSync(e);}, removeItem: function removeItem(e) {q.removeStorageSync(e);}, clear: function clear() {q.clearStorageSync();} };var $e = { genAdapter: function genAdapter() {return { root: {}, reqClass: Ne, localStorage: Me, primaryStorage: "local" };}, isMatch: function isMatch() {return !0;}, runtime: "uni_app" };Fe.useAdapters($e);var je = Fe,Ke = je.init;je.init = function (e) {e.env = e.spaceId;var t = Ke.call(this, e);t.config.provider = "tencent", t.config.spaceId = e.spaceId;var n = t.auth;return t.auth = function (e) {var t = n.call(this, e);return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {t[e] = T(t[e]).bind(t);}), t;}, t.customAuth = t.auth, t;};var Be = /*#__PURE__*/function (_F) {_inherits(Be, _F);var _super9 = _createSuper(Be);function Be() {_classCallCheck(this, Be);return _super9.apply(this, arguments);}_createClass(Be, [{ key: "getAccessToken", value: function getAccessToken() {var _this13 = this;return new Promise(function (e, t) {var n = "Anonymous_Access_token";_this13.setAccessToken(n), e(n);});} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),s = { "Content-Type": "application/json" };"auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = R.sign(n, this.config.clientSecret);var r = C(),o = r.APPID,i = r.PLATFORM,a = r.DEVICEID,c = r.CLIENT_SDK_VERSION;return s["x-client-platform"] = i, s["x-client-appid"] = o, s["x-client-device-id"] = a, s["x-client-version"] = c, s["x-client-token"] = q.getStorageSync("uni_id_token"), { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: JSON.parse(JSON.stringify(s)) };} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref12) {var _this14 = this;var e = _ref12.url,t = _ref12.formData,n = _ref12.name,s = _ref12.filePath,r = _ref12.fileType,o = _ref12.onUploadProgress;return new Promise(function (i, a) {var c = _this14.adapter.uploadFile({ url: e, formData: t, name: n, filePath: s, fileType: r, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new P({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {a(new P({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof o && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "uploadFile", value: function uploadFile(_ref13) {var _this15 = this;var e = _ref13.filePath,t = _ref13.cloudPath,_ref13$fileType = _ref13.fileType,n = _ref13$fileType === void 0 ? "image" : _ref13$fileType,s = _ref13.onUploadProgress;if (!t) throw new P({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var r;return this.getOSSUploadOptionsFromPath({ cloudPath: t }).then(function (t) {var _t$result = t.result,o = _t$result.url,i = _t$result.formData,a = _t$result.name,c = _t$result.fileUrl;r = c;var u = { url: o, formData: i, name: a, filePath: e, fileType: n };return _this15.uploadFileToOSS(Object.assign({}, u, { onUploadProgress: s }));}).then(function () {return _this15.reportOSSUpload({ cloudPath: t });}).then(function (t) {return new Promise(function (n, s) {t.success ? n({ success: !0, filePath: e, fileID: r }) : s(new P({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }]);return Be;}(F);var He = { init: function init(e) {var t = new Be(e),n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t.customAuth = t.auth, t;} };var We, ze;function Ve(_ref14) {var e = _ref14.name,t = _ref14.data,n = _ref14.spaceId,s = _ref14.provider;We || (We = C(), ze = { ak: p, p: "android" === O ? "a" : "i", ut: x(), uuid: D() });var r = JSON.parse(JSON.stringify(t || {})),o = e,i = n,a = { tencent: "t", aliyun: "a" }[s];{var _e16 = Object.assign({}, ze, { fn: o, sid: i, pvd: a });Object.assign(r, { clientInfo: We, uniCloudClientInfo: encodeURIComponent(JSON.stringify(_e16)) });var _uni$getSystemInfoSyn2 = uni.getSystemInfoSync(),_t8 = _uni$getSystemInfoSyn2.deviceId;r.uniCloudDeviceId = _t8;}if (!r.uniIdToken) {var _e17 = q.getStorageSync("uni_id_token") || q.getStorageSync("uniIdToken");_e17 && (r.uniIdToken = _e17);}return r;}function Je(_ref15) {var _this16 = this;var e = _ref15.name,t = _ref15.data;var n = this.localAddress,s = this.localPort,r = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider],o = this.config.spaceId,i = "http://".concat(n, ":").concat(s, "/system/check-function"),a = "http://".concat(n, ":").concat(s, "/cloudfunctions/").concat(e);return new Promise(function (t, n) {q.request({ method: "POST", url: i, data: { name: e, platform: h, provider: r, spaceId: o }, timeout: 3e3, success: function success(e) {t(e);}, fail: function fail() {t({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });} });}).then(function () {var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref16.data;var _ref17 = e || {},t = _ref17.code,n = _ref17.message;return { code: 0 === t ? 0 : t || "SYS_ERR", message: n || "SYS_ERR" };}).then(function (_ref18) {var n = _ref18.code,s = _ref18.message;if (0 !== n) {switch (n) {case "MODULE_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "FUNCTION_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "ACTION_ENCRYPTED":console.error(s || "需要访问加密的uni-clientDB-action，自动切换为云端环境");break;case "NETWORK_ERROR":{var _e18 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";throw console.error(_e18), new Error(_e18);}case "SWITCH_TO_CLOUD":break;default:{var _e19 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(s, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");throw console.error(_e19), new Error(_e19);}}return _this16._originCallFunction({ name: e, data: t });}return new Promise(function (n, s) {var i = Ve({ name: e, data: t, provider: _this16.config.provider, spaceId: o });q.request({ method: "POST", url: a, data: { provider: r, platform: h, param: i }, success: function success() {var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref19.statusCode,t = _ref19.data;return !e || e >= 400 ? s(new P({ code: t.code || "SYS_ERR", message: t.message || "request:fail" })) : n({ result: t });}, fail: function fail(e) {s(new P({ code: e.code || e.errCode || "SYS_ERR", message: e.message || e.errMsg || "request:fail" }));} });});});}var Ye = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];var Xe = /[\\^$.*+?()[\]{}|]/g,Ge = RegExp(Xe.source);function Qe(e, t, n) {return e.replace(new RegExp((s = t) && Ge.test(s) ? s.replace(Xe, "\\$&") : s, "g"), n);var s;}function Ze(_ref20) {var e = _ref20.functionName,t = _ref20.result,n = _ref20.logPvd;if (this.config.useDebugFunction && t && t.requestId) {var _s7 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t.requestId });console.log("[".concat(n, "-request]").concat(_s7, "[/").concat(n, "-request]"));}}function et(e) {var t = e.callFunction,n = function n(e) {var _this17 = this;var n = e.name;e.data = Ve({ name: n, data: e.data, provider: this.config.provider, spaceId: this.config.spaceId });var s = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider];return t.call(this, e).then(function (e) {return Ze.call(_this17, { functionName: n, result: e, logPvd: s }), Promise.resolve(e);}, function (t) {return Ze.call(_this17, { functionName: n, result: t, logPvd: s }), t && t.message && (t.message = function () {var _ref21 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref21$message = _ref21.message,e = _ref21$message === void 0 ? "" : _ref21$message,_ref21$extraInfo = _ref21.extraInfo,t = _ref21$extraInfo === void 0 ? {} : _ref21$extraInfo,_ref21$formatter = _ref21.formatter,n = _ref21$formatter === void 0 ? [] : _ref21$formatter;for (var _s8 = 0; _s8 < n.length; _s8++) {var _n$_s = n[_s8],_r3 = _n$_s.rule,_o2 = _n$_s.content,i = _n$_s.mode,_a = e.match(_r3);if (!_a) continue;var _c = _o2;for (var _e20 = 1; _e20 < _a.length; _e20++) {_c = Qe(_c, "{$".concat(_e20, "}"), _a[_e20]);}for (var _e21 in t) {_c = Qe(_c, "{".concat(_e21, "}"), t[_e21]);}switch (i) {case "replace":return _c;case "append":default:return e + _c;}}return e;}({ message: "[".concat(e.name, "]: ").concat(t.message), formatter: Ye, extraInfo: { functionName: n } })), Promise.reject(t);});};e.callFunction = function (t) {var s;return u && e.debugInfo && !e.debugInfo.forceRemote && d ? (e._originCallFunction || (e._originCallFunction = n), s = Je.call(this, t)) : s = n.call(this, t), Object.defineProperty(s, "result", { get: function get() {return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};} }), s;};}var tt = Symbol("CLIENT_DB_INTERNAL");function nt(e, t) {return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = tt, e.__v_raw = void 0, new Proxy(e, { get: function get(e, n, s) {return n in e || "string" != typeof n ? e[n] : t.get(e, n, s);} });}function st(e) {return e && st(e.__v_raw) || e;}function rt(e) {switch (o(e = st(e))) {case "array":return e.map(function (e) {return rt(e);});case "object":return e._internalType === tt || Object.keys(e).forEach(function (t) {e[t] = rt(e[t]);}), e;case "regexp":return { $regexp: { source: e.source, flags: e.flags } };case "date":return { $date: e.toISOString() };default:return e;}}function ot() {var e = q.getStorageSync("uni_id_token") || "",t = e.split(".");if (!e || 3 !== t.length) return { uid: null, role: [], permission: [], tokenExpired: 0 };var n;try {n = JSON.parse((s = t[1], decodeURIComponent(atob(s).split("").map(function (e) {return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);}).join(""))));} catch (e) {throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);}var s;return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n;}var it = t(n(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 });var n = "chooseAndUploadFile:ok",s = "chooseAndUploadFile:fail";function r(e, t) {return e.tempFiles.forEach(function (e, n) {e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));}), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {return e.path;})), e;}function o(e, t, _ref22) {var s = _ref22.onChooseFile,r = _ref22.onUploadProgress;return t.then(function (e) {if (s) {var _t9 = s(e);if (void 0 !== _t9) return Promise.resolve(_t9).then(function (t) {return void 0 === t ? e : t;});}return e;}).then(function (t) {return !1 === t ? { errMsg: n, tempFilePaths: [], tempFiles: [] } : function (e, t) {var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;var r = arguments.length > 3 ? arguments[3] : undefined;(t = Object.assign({}, t)).errMsg = n;var o = t.tempFiles,i = o.length;var a = 0;return new Promise(function (n) {for (; a < s;) {c();}function c() {var s = a++;if (s >= i) return void (!o.find(function (e) {return !e.url && !e.errMsg;}) && n(t));var u = o[s];e.uploadFile({ filePath: u.path, cloudPath: u.cloudPath, fileType: u.fileType, onUploadProgress: function onUploadProgress(e) {e.index = s, e.tempFile = u, e.tempFilePath = u.path, r && r(e);} }).then(function (e) {u.url = e.fileID, s < i && c();}).catch(function (e) {u.errMsg = e.errMsg || e.message, s < i && c();});}});}(e, t, 5, r);});}t.initChooseAndUploadFile = function (e) {return function () {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { type: "all" };return "image" === t.type ? o(e, function (e) {var t = e.count,n = e.sizeType,_e$sourceType = e.sourceType,o = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,i = e.extension;return new Promise(function (e, a) {uni.chooseImage({ count: t, sizeType: n, sourceType: o, extension: i, success: function success(t) {e(r(t, "image"));}, fail: function fail(e) {a({ errMsg: e.errMsg.replace("chooseImage:fail", s) });} });});}(t), t) : "video" === t.type ? o(e, function (e) {var t = e.camera,n = e.compressed,o = e.maxDuration,_e$sourceType2 = e.sourceType,i = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,a = e.extension;return new Promise(function (e, c) {uni.chooseVideo({ camera: t, compressed: n, maxDuration: o, sourceType: i, extension: a, success: function success(t) {var n = t.tempFilePath,s = t.duration,o = t.size,i = t.height,a = t.width;e(r({ errMsg: "chooseVideo:ok", tempFilePaths: [n], tempFiles: [{ name: t.tempFile && t.tempFile.name || "", path: n, size: o, type: t.tempFile && t.tempFile.type || "", width: a, height: i, duration: s, fileType: "video", cloudPath: "" }] }, "video"));}, fail: function fail(e) {c({ errMsg: e.errMsg.replace("chooseVideo:fail", s) });} });});}(t), t) : o(e, function (e) {var t = e.count,n = e.extension;return new Promise(function (e, o) {var i = uni.chooseFile;if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (i = wx.chooseMessageFile), "function" != typeof i) return o({ errMsg: s + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });i({ type: "all", count: t, extension: n, success: function success(t) {e(r(t));}, fail: function fail(e) {o({ errMsg: e.errMsg.replace("chooseFile:fail", s) });} });});}(t), t);};};}));var at = "manual";function ct(e) {return { props: { localdata: { type: Array, default: function _default() {return [];} }, options: { type: [Object, Array], default: function _default() {return {};} }, collection: { type: String, default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: !1 }, gettree: { type: [Boolean, String], default: !1 }, gettreepath: { type: [Boolean, String], default: !1 }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: !1 }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: !1 } }, data: function data() {return { mixinDatacomLoading: !1, mixinDatacomHasMore: !1, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} };}, created: function created() {var _this18 = this;this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(function () {var e = [];return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {e.push(_this18[t]);}), e;}, function (e, t) {if (_this18.loadtime === at) return;var n = !1;var s = [];for (var _r4 = 2; _r4 < e.length; _r4++) {e[_r4] !== t[_r4] && (s.push(e[_r4]), n = !0);}e[0] !== t[0] && (_this18.mixinDatacomPage.current = _this18.pageCurrent), _this18.mixinDatacomPage.size = _this18.pageSize, _this18.onMixinDatacomPropsChange(n, s);});}, methods: { onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {}, mixinDatacomEasyGet: function mixinDatacomEasyGet() {var _this19 = this;var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref23$getone = _ref23.getone,e = _ref23$getone === void 0 ? !1 : _ref23$getone,t = _ref23.success,n = _ref23.fail;this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then(function (n) {_this19.mixinDatacomLoading = !1;var _n$result = n.result,s = _n$result.data,r = _n$result.count;_this19.getcount && (_this19.mixinDatacomPage.count = r), _this19.mixinDatacomHasMore = s.length < _this19.pageSize;var o = e ? s.length ? s[0] : void 0 : s;_this19.mixinDatacomResData = o, t && t(o);}).catch(function (e) {_this19.mixinDatacomLoading = !1, _this19.mixinDatacomErrorMessage = e, n && n(e);}));}, mixinDatacomGet: function mixinDatacomGet() {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var n = e.database();var s = t.action || this.action;s && (n = n.action(s));var r = t.collection || this.collection;n = n.collection(r);var o = t.where || this.where;o && Object.keys(o).length && (n = n.where(o));var i = t.field || this.field;i && (n = n.field(i));var a = t.foreignKey || this.foreignKey;a && (n = n.foreignKey(a));var c = t.groupby || this.groupby;c && (n = n.groupBy(c));var u = t.groupField || this.groupField;u && (n = n.groupField(u));!0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());var h = t.orderby || this.orderby;h && (n = n.orderBy(h));var l = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,f = void 0 !== t.getcount ? t.getcount : this.getcount,p = void 0 !== t.gettree ? t.gettree : this.gettree,g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,m = { getCount: f },y = { limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel, startWith: void 0 !== t.startwith ? t.startwith : this.startwith };return p && (m.getTree = y), g && (m.getTreePath = y), n = n.skip(d * (l - 1)).limit(d).get(m), n;} } };}function ut(_x30, _x31) {return _ut.apply(this, arguments);}function _ut() {_ut = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee32(e, t) {var n, _e28, s;return _regenerator.default.wrap(function _callee32$(_context32) {while (1) {switch (_context32.prev = _context32.next) {case 0:n = "http://".concat(e, ":").concat(t, "/system/ping");_context32.prev = 1;_context32.next = 4;return s = { url: n, timeout: 500 }, new Promise(function (e, t) {q.request(_objectSpread(_objectSpread({}, s), {}, { success: function success(t) {e(t);}, fail: function fail(e) {t(e);} }));});case 4:_e28 = _context32.sent;return _context32.abrupt("return", !(!_e28.data || 0 !== _e28.data.code));case 8:_context32.prev = 8;_context32.t0 = _context32["catch"](1);return _context32.abrupt("return", !1);case 11:case "end":return _context32.stop();}}}, _callee32, null, [[1, 8]]);}));return _ut.apply(this, arguments);}var ht = new ( /*#__PURE__*/function () {function _class2() {_classCallCheck(this, _class2);}_createClass(_class2, [{ key: "init", value: function init(e) {var t = {};var n = !1 !== e.debugFunction && u && ("h5" === h && navigator.userAgent.indexOf("HBuilderX") > 0 || "app-plus" === h);switch (e.provider) {case "tencent":t = je.init(Object.assign(e, { useDebugFunction: n }));break;case "aliyun":t = L.init(Object.assign(e, { useDebugFunction: n }));break;case "private":t = He.init(Object.assign(e, { useDebugFunction: n }));break;default:throw new Error("未提供正确的provider参数");}var s = l;u && s && !s.code && (t.debugInfo = s);var r = Promise.resolve();var o;o = 1, r = new Promise(function (e, t) {setTimeout(function () {e();}, o);}), t.isReady = !1, t.isDefault = !1;var i = t.auth();t.initUniCloud = r.then(function () {return i.getLoginState();}).then(function (e) {return e ? Promise.resolve() : i.signInAnonymously();}).then(function () {if (u && t.debugInfo) {var _t$debugInfo = t.debugInfo,_e22 = _t$debugInfo.address,_n4 = _t$debugInfo.servePort;return function () {var _ref24 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee31(e, t) {var n, _s9, _r5;return _regenerator.default.wrap(function _callee31$(_context31) {while (1) {switch (_context31.prev = _context31.next) {case 0:_s9 = 0;case 1:if (!(_s9 < e.length)) {_context31.next = 11;break;}_r5 = e[_s9];_context31.next = 5;return ut(_r5, t);case 5:if (!_context31.sent) {_context31.next = 8;break;}n = _r5;return _context31.abrupt("break", 11);case 8:_s9++;_context31.next = 1;break;case 11:return _context31.abrupt("return", { address: n, port: t });case 12:case "end":return _context31.stop();}}}, _callee31);}));return function (_x32, _x33) {return _ref24.apply(this, arguments);};}()(_e22, _n4);}return Promise.resolve();}).then(function () {var _ref25 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref25.address,n = _ref25.port;if (!u) return Promise.resolve();if (e) t.localAddress = e, t.localPort = n;else if (t.debugInfo) {var _e23 = console["app-plus" === h ? "error" : "warn"];"remote" === t.debugInfo.initialLaunchType ? (t.debugInfo.forceRemote = !0, _e23("当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs")) : _e23("无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs");}}).then(function () {return function () {if (!u || "h5" !== h) return;if (uni.getStorageSync("__LAST_DCLOUD_APPID") === p) return;uni.setStorageSync("__LAST_DCLOUD_APPID", p), uni.removeStorageSync("uni_id_token") && (console.warn("检测到当前项目与上次运行到此端口的项目不一致，自动清理uni-id保存的token信息（仅开发调试时生效）"), uni.removeStorageSync("uni_id_token"), uni.removeStorageSync("uni_id_token_expired"));}(), new Promise(function (e) {"quickapp-native" === h ? (O = "android", uni.getStorage({ key: "__DC_CLOUD_UUID", success: function success(t) {b = t.data ? t.data : U(32), e();} })) : setTimeout(function () {O = uni.getSystemInfoSync().platform, b = uni.getStorageSync("__DC_CLOUD_UUID") || U(32), e();}, 0);});}).then(function () {t.isReady = !0;}), et(t), function (e) {var t = e.uploadFile;e.uploadFile = function (e) {var _this20 = this;var n;return n = this.isReady ? Promise.resolve() : this.initUniCloud, n.then(function () {return t.call(_this20, e);});};}(t), function (e) {e.database = function () {if (this._database) return this._database;var t = {};var n = {};function s(_ref26) {var s = _ref26.action,r = _ref26.command,o = _ref26.multiCommand;return S(k("database", "invoke")).then(function () {return e.callFunction({ name: "DCloud-clientDB", data: { action: s, command: r, multiCommand: o } });}).then(function (e) {var _e$result = e.result,s = _e$result.code,r = _e$result.message,o = _e$result.token,i = _e$result.tokenExpired,_e$result$systemInfo = _e$result.systemInfo,c = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;if (c) for (var _e24 = 0; _e24 < c.length; _e24++) {var _c$_e = c[_e24],_t10 = _c$_e.level,_n5 = _c$_e.message,_s10 = _c$_e.detail,_r6 = console["app-plus" === h && "warn" === _t10 ? "error" : _t10] || console.log;var _o3 = "[System Info]" + _n5;_s10 && (_o3 = "".concat(_o3, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_s10)), _r6(_o3);}if (s) {var _e25 = new a(r, s);return n.error && n.error.forEach(function (t) {t(_e25);}), Promise.reject(_e25);}o && i && (t.refreshToken && t.refreshToken.forEach(function (e) {e({ token: o, tokenExpired: i });}), n.refreshToken && n.refreshToken.forEach(function (e) {e({ token: o, tokenExpired: i });}));var u = e.result.affectedDocs;return "number" == typeof u && Object.defineProperty(e.result, "affectedDocs", { get: function get() {return console.warn("affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"), u;} }), S(k("database", "success"), e).then(function () {return S(k("database", "complete"), e);}).then(function () {return Promise.resolve(e);});}, function (e) {var t = new a(e.message, e.code || "SYSTEM_ERROR");return n.error && n.error.forEach(function (e) {e(t);}), /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB"), S(k("database", "fail"), e).then(function () {return S(k("database", "complete"), e);}).then(function () {return Promise.reject(e);});});}this.isDefault && (n = m("_globalUniCloudDatabaseCallback"));var r = /*#__PURE__*/function () {function r(e, t) {_classCallCheck(this, r);this.content = e, this.prevStage = t, this.udb = null;}_createClass(r, [{ key: "toJSON", value: function toJSON() {var e = this;var t = [e.content];for (; e.prevStage;) {e = e.prevStage, t.push(e.content);}return { $db: t.reverse().map(function (e) {return { $method: e.$method, $param: rt(e.$param) };}) };} }, { key: "getAction", value: function getAction() {var e = this.toJSON().$db.find(function (e) {return "action" === e.$method;});return e && e.$param && e.$param[0];} }, { key: "getCommand", value: function getCommand() {return { $db: this.toJSON().$db.filter(function (e) {return "action" !== e.$method;}) };} }, { key: "get", value: function get() {return this._send("get", Array.from(arguments));} }, { key: "add", value: function add() {return this._send("add", Array.from(arguments));} }, { key: "remove", value: function remove() {return this._send("remove", Array.from(arguments));} }, { key: "update", value: function update() {return this._send("update", Array.from(arguments));} }, { key: "end", value: function end() {return this._send("end", Array.from(arguments));} }, { key: "set", value: function set() {throw new Error("clientDB禁止使用set方法");} }, { key: "_send", value: function _send(e, t) {var n = this.getAction(),r = this.getCommand();return r.$db.push({ $method: e, $param: rt(t) }), s({ action: n, command: r });} }, { key: "useAggregate", get: function get() {var e = this,t = !1;for (; e.prevStage;) {e = e.prevStage;var _n6 = e.content.$method;if ("aggregate" === _n6 || "pipeline" === _n6) {t = !0;break;}}return t;} }, { key: "count", get: function get() {if (!this.useAggregate) return function () {return this._send("count", Array.from(arguments));};var e = this;return function () {return c({ $method: "count", $param: rt(Array.from(arguments)) }, e);};} }, { key: "multiSend", get: function get() {} }]);return r;}();var o = ["db.Geo", "db.command", "command.aggregate"];function i(e, t) {return o.indexOf("".concat(e, ".").concat(t)) > -1;}function c(e, t) {return nt(new r(e, t), { get: function get(e, t) {var n = "db";return e && e.content && (n = e.content.$method), i(n, t) ? c({ $method: t }, e) : function () {return c({ $method: t, $param: rt(Array.from(arguments)) }, e);};}, set: function set(e, t, n) {e[t] = n;} });}function u(_ref27) {var e = _ref27.path,t = _ref27.method;return /*#__PURE__*/function () {function _class3() {_classCallCheck(this, _class3);this.param = Array.from(arguments);}_createClass(_class3, [{ key: "toJSON", value: function toJSON() {return { $newDb: [].concat(_toConsumableArray(e.map(function (e) {return { $method: e };})), [{ $method: t, $param: this.param }]) };} }]);return _class3;}();}var l = { auth: { on: function on(e, n) {t[e] = t[e] || [], t[e].indexOf(n) > -1 || t[e].push(n);}, off: function off(e, n) {t[e] = t[e] || [];var s = t[e].indexOf(n);-1 !== s && t[e].splice(s, 1);} }, on: function on(e, t) {n[e] = n[e] || [], n[e].indexOf(t) > -1 || n[e].push(t);}, off: function off(e, t) {n[e] = n[e] || [];var s = n[e].indexOf(t);-1 !== s && n[e].splice(s, 1);}, env: nt({}, { get: function get(e, t) {return { $env: t };} }), Geo: nt({}, { get: function get(e, t) {return u({ path: ["Geo"], method: t });} }), getCloudEnv: function getCloudEnv(e) {if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");return { $env: e.replace("$cloudEnv_", "") };}, multiSend: function multiSend() {var e = Array.from(arguments);return s({ multiCommand: e.map(function (e) {var t = e.getAction(),n = e.getCommand();if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");return { action: t, command: n };}) }).then(function (t) {for (var _n7 = 0; _n7 < e.length; _n7++) {var _s11 = e[_n7];_s11.udb && "function" == typeof _s11.udb.setResult && _s11.udb.setResult(t.result.dataList[_n7]);}return Promise.resolve(t);}, function (t) {for (var _n8 = 0; _n8 < e.length; _n8++) {var _s12 = e[_n8];_s12.udb && "function" == typeof _s12.udb.setResult && _s12.udb.setResult(t);}return Promise.reject(t);});}, get serverDate() {return u({ path: [], method: "serverDate" });}, get RegExp() {return u({ path: [], method: "RegExp" });} },d = nt(l, { get: function get(e, t) {return i("db", t) ? c({ $method: t }) : function () {return c({ $method: t, $param: rt(Array.from(arguments)) });};} });return this._database = d, d;};}(t), function (e) {e.getCurrentUserInfo = ot, e.chooseAndUploadFile = it.initChooseAndUploadFile(e), Object.assign(e, { get mixinDatacom() {return ct(e);} });}(t);return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {t[e] && (t[e] = T(t[e], e));}), t.init = this.init, t;} }]);return _class2;}())();(function () {{var e = d;var t = {};if (1 === e.length) t = e[0], ht = ht.init(t), ht.isDefault = !0;else {var _t11 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo"];var _n9;_n9 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : f ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", _t11.forEach(function (e) {ht[e] = function () {return console.error(_n9), Promise.reject(new P({ code: "SYS_ERR", message: _n9 }));};});}Object.assign(ht, { get mixinDatacom() {return ct(ht);} }), ht.addInterceptor = w, ht.removeInterceptor = v, u && "h5" === h && (window.uniCloud = ht);}})();var lt = ht;var _default2 = lt;exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 9 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 10);

/***/ }),
/* 10 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 11);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 11 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 12 */
/*!**************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.esm.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.initVueI18n = initVueI18n;exports.I18n = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isObject = function isObject(val) {return val !== null && typeof val === 'object';};var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format) {
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var _char = format[position++];
    if (_char === '{') {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      _char = format[position++];
      while (_char !== undefined && _char !== '}') {
        sub += _char;
        _char = format[position++];
      }
      var isClosed = _char === '}';
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    } else
    if (_char === '%') {
      // when found rails i18n syntax, skip text capture
      if (format[position] !== '{') {
        text += _char;
      }
    } else
    {
      text += _char;
    }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = Array.isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') !== -1) {
      return 'zh-Hans';
    }
    if (locale.indexOf('-hant') !== -1) {
      return 'zh-Hant';
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return 'zh-Hant';
    }
    return 'zh-Hans';
  }
  var lang = startsWith(locale, ['en', 'fr', 'es']);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref) {var locale = _ref.locale,fallbackLocale = _ref.fallbackLocale,messages = _ref.messages,watcher = _ref.watcher,formater = _ref.formater;_classCallCheck(this, I18n);
    this.locale = 'en';
    this.fallbackLocale = 'en';
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages;
    this.setLocale(locale);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      this.message = this.messages[this.locale];
      this.watchers.forEach(function (watcher) {
        watcher(_this.locale, oldLocale);
      });
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function initLocaleWatcher(appVm, i18n) {
  appVm.$i18n &&
  appVm.$i18n.vm.$watch('locale', function (newLocale) {
    i18n.setLocale(newLocale);
  }, {
    immediate: true });

}
function getDefaultLocale() {
  if (typeof navigator !== 'undefined') {
    return navigator.userLanguage || navigator.language;
  }
  if (typeof plus !== 'undefined') {
    // TODO 待调整为最新的获取语言代码
    return plus.os.language;
  }
  return uni.getSystemInfoSync().language;
}
function initVueI18n(messages) {var fallbackLocale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';var locale = arguments.length > 2 ? arguments[2] : undefined;
  var i18n = new I18n({
    locale: locale || fallbackLocale,
    fallbackLocale: fallbackLocale,
    messages: messages });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app-plus view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var appVm = getApp().$vm;
      if (!appVm.$t || !appVm.$i18n) {
        if (!locale) {
          i18n.setLocale(getDefaultLocale());
        }
        /* eslint-disable no-func-assign */
        _t = function t(key, values) {
          return i18n.t(key, values);
        };
      } else
      {
        initLocaleWatcher(appVm, i18n);
        /* eslint-disable no-func-assign */
        _t = function t(key, values) {
          var $i18n = appVm.$i18n;
          var silentTranslationWarn = $i18n.silentTranslationWarn;
          $i18n.silentTranslationWarn = true;
          var msg = appVm.$t(key, values);
          $i18n.silentTranslationWarn = silentTranslationWarn;
          if (msg !== key) {
            return msg;
          }
          return i18n.t(key, $i18n.locale, values);
        };
      }
    }
    return _t(key, values);
  };
  return {
    t: function t(key, values) {
      return _t(key, values);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    },
    mixin: {
      beforeCreate: function beforeCreate() {var _this3 = this;
        var unwatch = i18n.watchLocale(function () {
          _this3.$forceUpdate();
        });
        this.$once('hook:beforeDestroy', function () {
          unwatch();
        });
      },
      methods: {
        $$t: function $$t(key, values) {
          return _t(key, values);
        } } } };



}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 13 */
/*!******************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages.json?{"type":"stat"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__EC766A8" };exports.default = _default;

/***/ }),
/* 14 */
/*!*****************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/utils/util.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var formatTime = function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = 0;
  var minute = 0;
  var second = 0;
  return "".concat([year, month, day].map(formatNumber).join('/'), " ").concat([hour, minute, second].map(formatNumber).join(':'));
};

var formatDateTime = function formatDateTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return "".concat([year, month, day].map(formatNumber).join('/'), " ").concat([hour, minute, second].map(formatNumber).join(':'));
};

var formatNumber = function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : "0".concat(n);
};

function getTimeShortStrFromTime(tempTimeStr) //只接受Date Str对象
{
  var tempnow = new Date();
  var tempTime = new Date(tempTimeStr);
  var tempnowDate = tempnow.getFullYear() + "/" + (tempnow.getMonth() + 1) + "/" + tempnow.getDate();
  var tempTimeDate = tempTime.getFullYear() + "/" + (tempTime.getMonth() + 1) + "/" + tempTime.getDate();
  var ResStr = "";

  if (tempnowDate == tempTimeDate) {
    ResStr = fillZero(tempTime.getHours()) + ":" + fillZero(tempTime.getMinutes());
  } else {
    ResStr = fillZero(tempTime.getMonth() + 1) + "/" + fillZero(tempTime.getDate() + "");
  }

  return ResStr;

  function fillZero(tempInt) //补全前导0
  {
    if (tempInt < 10) {
      return "0" + tempInt.toString();
    } else {
      return tempInt.toString();
    }
  }
}

module.exports = {
  formatTime: formatTime,
  formatDateTime: formatDateTime,
  getTimeShortStrFromTime: getTimeShortStrFromTime };

/***/ }),
/* 15 */
/*!********************************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/App.css?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_App_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!./App.css?vue&type=style&index=0&lang=css& */ 16);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_App_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_App_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_App_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_App_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_App_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 16 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/App.css?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),
/* 17 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/*!*******************************************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskPage/taskPage.js?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_taskPage_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./taskPage.js?vue&type=script&lang=js& */ 23);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_taskPage_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_taskPage_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_taskPage_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_taskPage_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_taskPage_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 23 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskPage/taskPage.js?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}
var pmJSTools = __webpack_require__(/*! ../../utils/pmJSTools.js */ 24);
var pmSerTools = __webpack_require__(/*! ../../utils/pmSerTools.js */ 25);
var app = getApp();var _default =

{
  data: function data() {
    return {
      WaitSumCoun: "",
      topTips: false,
      topTipsStr: "" };

  },
  components: {},


  props: {},


  onLoad: function onLoad(options) {
  },

  methods: {

    onOpenEditPMCOIList: function onOpenEditPMCOIList() {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                uni.navigateTo({
                  url: '../taskList/taskList',
                  success: function success(res) {},
                  fail: function fail() {},
                  complete: function complete() {} });case 1:case "end":return _context.stop();}}}, _callee);}))();

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 24 */
/*!**********************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/utils/pmJSTools.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//通用的，不和云函数直接交互的js工具 V2020 08 27
var app = getApp(); //声明曝露函数给require方

module.exports = {
  GetSeqID: GetSeqID,
  IsNullOrEmpty: IsNullOrEmpty,
  GetErrMsgValue: GetErrMsgValue,
  GetStr: GetStr,
  GetSubObj: GetSubObj,
  GetSubObjStr: GetSubObjStr,
  lightOneControlFromList: lightOneControlFromList,
  lightOneControlFromList2: lightOneControlFromList2,
  getOneControlFromList: getOneControlFromList,
  getSqIDFromList: getSqIDFromList,
  getPropertiesFromVariant: getPropertiesFromVariant,
  getGeneralUnitList: getGeneralUnitList,
  getFileSuffix: getFileSuffix,
  replaceOneControlFromList: replaceOneControlFromList,
  getSeqIDfromArr: getSeqIDfromArr,
  getTimeShortStrFromTime: getTimeShortStrFromTime,
  calPMCOI: calPMCOI,
  DeleteFromList: DeleteFromList,
  dateAddDays: dateAddDays,
  inputvalidation: inputvalidation,
  getValueSqInList: getValueSqInList,
  getStrLeft: getStrLeft,
  getStrRight: getStrRight,
  lightOneControl: lightOneControl,
  unLightOneControl: unLightOneControl,
  calMyPMCOI: calMyPMCOI,
  getOneControlFromListByMy: getOneControlFromListByMy,
  calPMUser: calPMUser,
  getDistance: getDistance,
  UpdateProductStorge: UpdateProductStorge,
  getPMJobType: getPMJobType,
  GetNum: GetNum,
  GetStateStr: GetStateStr,
  getStrsubstring: getStrsubstring,
  DateChange: DateChange,
  stringToDate: stringToDate,
  getStrLeftFromFront: getStrLeftFromFront,
  getStrRightFromFront: getStrRightFromFront };
//函数对象号： 1， 获取动态ID号函数

function GetSeqID(typeStr, intCount) {
  var now = new Date();
  var year = now.getFullYear();
  year = year - 2000;
  if (year >= 26 && year <= 31) year = String.fromCharCode(year + 23);else year = String.fromCharCode(year + 65);
  var month = now.getMonth() + 1;
  if (month >= 26 && month <= 31) month = String.fromCharCode(month + 23);else month = String.fromCharCode(month + 65);
  var day = now.getDate();
  if (day >= 26 && day <= 31) day = String.fromCharCode(day + 23);else day = String.fromCharCode(day + 65);
  var hour = now.getHours();
  if (hour >= 26 && hour <= 31) hour = String.fromCharCode(hour + 23);else hour = String.fromCharCode(hour + 65);
  var minutes = now.getMinutes();
  if (minutes >= 26 && minutes <= 31) minutes = String.fromCharCode(minutes + 23);else {
    if (minutes == 58 || minutes == 59) minutes = String.fromCharCode(minutes - 3);else minutes = String.fromCharCode(minutes + 65);
  }
  var seconds = now.getSeconds();
  if (seconds >= 26 && seconds <= 31) seconds = String.fromCharCode(seconds + 23);else {
    if (seconds == 58 || seconds == 59) minutes = String.fromCharCode(seconds - 3);else seconds = String.fromCharCode(seconds + 65);
  }
  var ResStrList = [];

  for (var j = 0; j < intCount; j++) {
    //准备随机数
    var len = 6;
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZ2345678';
    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/

    var maxPos = $chars.length;
    var pwd = '';

    for (var i = 0; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }

    var ResStr = typeStr + year + month + day + hour + minutes + seconds + pwd;
    ResStrList.push(ResStr);
  }

  return ResStrList;
} //函数对象号： 2， 对象转换


function GetStr(ObjVale) {
  if (IsNullOrEmpty(ObjVale)) {
    return "";
  } else {
    return ObjVale.toString();
  }
} //函数对象号： 3， 过滤objVal为空的各种情形，减少判空复杂度


function IsNullOrEmpty(objVal) {
  //  过滤 ""; " "; null;undefined;  [];{};vNaN;
  if (objVal === undefined) {
    // 只能用 === 运算来测试某个值是否是未定义的
    return true;
  }

  if (objVal == null) {
    // 等同于 a === undefined || a === null
    return true;
  }

  if (objVal == "TypeError") {
    // 
    return true;
  } // 属于数字不应该是空，特别是0， 如果不加这一句，在下一句会被认为是空值。


  if (typeof objVal === 'number') {
    return false;
  }

  if (objVal == "" || objVal == null || objVal == undefined) {
    // "",null,undefined
    return true;
  }

  if (!objVal) {
    // "",null,undefined,NaN
    return true;
  } // Array


  if (objVal.length == 0) {
    // "",[]
    return true;
  }

  return false;
} //函数对象号： 4， 对ErrMsgStr进行整理，减少前端判断复杂度


function GetErrMsgValue(ErrMsgStr) {
  if (IsNullOrEmpty(ErrMsgStr)) {
    return "";
  } else {
    var TempS;

    try {
      TempS = ErrMsgStr.substring(ErrMsgStr.indexOf(":") + 1, ErrMsgStr.length);
    } catch (error) {
      //说明:TempS格式不符合至少有字符":ok"
      return TempS;
    }

    if (IsNullOrEmpty(TempS)) {
      return "";
    } else {
      var lastStr = TempS.toUpperCase();

      if (lastStr == "OK") {
        return lastStr;
      } else {
        return TempS;
      }
    }
  }
} //函数对象号： 5，检查对象是否存在 //和IsNullOrEmpty有很大同


function IsNotExist(objVal) {
  if (objVal === undefined) {
    // 只能用 === 运算来测试某个值是否是未定义的
    return true;
  } else {
    return false;
  }
} //函数对象号： 7，获取对象数组的长度  String 返回的是字符长度，不支持length的变量返回的是0


function GetLength(objVal) {
  if (IsNullOrEmpty(objVal)) {
    return 0;
  }

  var TempI = 0;

  try {
    TempI = objVal.length;
    return TempI;
  } catch (error) {
    return TempI;
  }
} //函数对象号： 8，探取子对象是否存在，如果存在则返回子对象，如不存在则返回“”，如存直接返回子变
// AA.BB.CC : 当BB为空空值程序直接报错被catch,这样逻辑性就复杂了。需要一个函数来自动处理。
// 这个函数要处理两种情况
//情况 1： AA.BB.CC : 当BB为空空值程序直接报错，容易产生错误。需要智能处理
//情况 2：AA[0][0].BB :但AA[0]为空，或AA[0][0]为空的智能处理
//TempList 应该是个数组： [rootObj,"子元素名"，“子元素名”，...]
//子元素名 为数值是就是类似：rootObj[0]含义


function GetSubObj(TempList) {
  if (IsNullOrEmpty(TempList)) //TempList不存在，直接返回一个空值回去。
    {
      return "";
    }

  try {
    if (IsNullOrEmpty(TempList[0])) //根元素不存在直接返回
      {
        return "";
      }

    var TempObj = TempList[0];

    for (var i = 1; i < TempList.length; i++) {
      if (!IsNullOrEmpty(TempList[i])) {
        if (!IsNullOrEmpty(TempObj[TempList[i]])) //不管是数组还是字符都一样
          {
            TempObj = TempObj[TempList[i]]; //指向下一层变量
          } else {
          return ""; //说明为空值，直接返回""
        }
      } else {
        return ""; //表达不正确放回空
      }
    }
  } catch (e) //任何错误直接返回空
  {
    return "";
  }

  return TempObj;
} //函数对象号： 9 参考 GetSubObj 和 GetStr


function GetSubObjStr(TempList) {
  return GetStr(GetSubObj(TempList));
} //函数对象号： 10 通过对象id值，实现从控件容器中高亮一个控件 (

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2020 11 28
       *@method 方法名 lightOneControlFromList 
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  用于高亮tap事件后的控件，同时消退其他控件的高亮状态
       *@mark 使用函数时的注意实现  这个只是界面，后端逻辑要特殊考虑，比如服务器端获得了数据，才可以点亮等
       *@param{参数类型}参数名 参数说明
       selectedID 被选择对象的 _id值
       TempList   所在数据对象清单
       isConverse 当提供这个参数，并且这个参数为true是，表示，直接置反
*/


function lightOneControlFromList(selectedID, TempList) {
  //不返回只做正确的设置
  var btnSelectedStyle = " box-shadow: 2px 2px 5px #000;"; //用于动态表达按钮选中的状态

  var btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;"; //用于动态表达按钮没有选中的状态

  if (!IsNullOrEmpty(selectedID) && !IsNullOrEmpty(TempList)) {
    if (TempList.length) {
      for (var i = 0; i < TempList.length; i++) {
        if (TempList[i]._id == selectedID) {
          TempList[i].selectedStyle = btnSelectedStyle;
        } else {
          TempList[i].selectedStyle = btnUnSelectedStyle;
        }
      }
    } else {
      if (TempList._id == selectedID) {
        TempList.selectedStyle = btnSelectedStyle;
      } else {
        TempList.selectedStyle = btnUnSelectedStyle;
      }
    }
  }
} //函数10的变体函数
//isConverse 当提供这个参数，并且这个参数为true是，表示，直接置反


function lightOneControlFromList2(selectedID, TempList, isConverse) {
  var btnSelectedStyle = " box-shadow: 2px 2px 5px #000;"; //用于动态表达按钮选中的状态

  var btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;"; //用于动态表达按钮没有选中的状态

  if (isConverse != true) {
    lightOneControlFromList(selectedID, TempList);
  } else {
    var tempPI = getOneControlFromList(selectedID, TempList);

    if (tempPI.selectedStyle == btnSelectedStyle) {
      tempPI.selectedStyle = btnUnSelectedStyle;
    } else {
      lightOneControlFromList(selectedID, TempList);
    }
  }
} //函数对象号： 11 根据id值，从控件ataList中获取一个控件

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2020 11 29
       *@method 方法名 getOneControlFromList 
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  通过id,获取控件数据
       *@mark
       *@param{参数类型}参数名 参数说明
       selectedID 被选择对象的 _id值
       TempList   所在数据对象清单
*/


function getOneControlFromList(selectedID, TempList) {
  if (!IsNullOrEmpty(selectedID) && !IsNullOrEmpty(TempList)) {
    if (TempList.length) {
      for (var i = 0; i < TempList.length; i++) {
        if (TempList[i]._id == selectedID) //遍历出来一个数据
          {
            return TempList[i];
          }
      }
    } else {
      if (TempList._id == selectedID) //只有一个数据时的数据
        {
          return TempList;
        }
    }
  }

  return ""; //没有找到返回一个安全的空值
} //函数对象号： 12 根据_id值，从控件ataList中获取一个控件在数据对象中的顺序值

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2020 12 03
       *@method 方法名 getSqIDFromList 
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  通过id,获取控件数据
       *@mark
       *@param{参数类型}参数名 参数说明
       selectedID 被选择对象的 _id值
       TempList   所在数据对象清单
*/


function getSqIDFromList(selectedID, TempList) {
  if (!IsNullOrEmpty(selectedID) && !IsNullOrEmpty(TempList)) {
    if (TempList.length) {
      for (var i = 0; i < TempList.length; i++) {
        if (TempList[i]._id == selectedID) //遍历出来一个数据
          {
            return i;
          }
      }
    } else {
      if (TempList._id == selectedID) //只有一个数据时的数据
        {
          return -1; //不是数组，不应该用来选择
        }
    }
  }

  return -1; //没有找到返回一个安全的值
} //函数对象号： 13 变量转变为属性清单


function getPropertiesFromVariant(tempVariant) {
  if (IsNullOrEmpty(tempVariant)) {
    return null;
  }

  var fillBlock = {};
  fillBlock.fillRemind = "";
  fillBlock.fillItemList = [];

  for (var Key in tempVariant) {
    var fillItem = {};
    fillItem.fillTitle = Key, fillItem.fillTitleRight = "默认后缀", fillItem.fillChartURL = "", //可为空
    fillItem.fillTip = "填写提示", fillItem.fillType = "TXT", //填写类型: TXT NUM LIST DATETIME
    fillItem.filleValue = JSON.stringify(tempVariant[Key]), fillItem.fillHelpList = [], //备选项
    fillItem.fillID = "", //填写项字段名，不在前端显示
    fillBlock.fillItemList.push(fillItem);
  }

  return fillBlock;
} //函数对象号： 14 获取最常见单位名称清单


function getGeneralUnitList() {
  var TempList = ["件", "个", "套", "箱", "袋", "克", "千克", "吨", "米", "千米", "毫升", "升", "立方米"];
  return TempList;
} //函数对象号： 15 获取文件名的后缀。很多时候需要截取后缀用于改名。 比如 XXXX.png ==> .png


function getFileSuffix(fileStr) {
  if (!IsNullOrEmpty(fileStr)) {
    var TempFileSuffix = fileStr.substring(fileStr.lastIndexOf("."));

    if (!IsNullOrEmpty(TempFileSuffix)) {
      return TempFileSuffix;
    }
  }

  return "";
} //函数对象号： 15 根据id值，从控件dataList中获取一个变量，并替换为一个新变量

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2020 12 25
       *@method 方法名 replaceOneControlFromList 
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  根据id值，从控件dataList中获取一个变量，并替换为一个新变量
       *@mark
       *@param{参数类型}参数名 参数说明
       selectedID 被选择对象的 _id值
       newVariant,新变量
       TempList   所在数据对象清单
*/


function replaceOneControlFromList(selectedID, newVariant, TempList) {
  if (!IsNullOrEmpty(selectedID) && !IsNullOrEmpty(TempList)) {
    if (TempList.length) {
      for (var i = 0; i < TempList.length; i++) {
        if (TempList[i]._id == selectedID) //遍历出来一个数据
          {
            TempList[i] = newVariant;
          }
      }
    } else {
      if (TempList._id == selectedID) //只有一个数据时的数据
        {
          TempList[i] = newVariant;
        }
    }
  }
} //函数对象号： 16 根据内容值，从数组中返回值所在位置。 如果不存在返回0

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2020 12 26
       *@method 方法名 getSeqIDfromArr
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  根据内容值，从数组中返回值所在位置。 如果不存在返回0
       *@mark
       *@param{参数类型}参数名 参数说明
       tempV 需要查询的变量值
       TempList   所在数据对象清单
*/


function getSeqIDfromArr(tempV, TempList) {
  if (IsNullOrEmpty(tempV)) {
    return 0;
  }

  if (IsNullOrEmpty(TempList)) {
    return 0;
  }

  for (var tempKey in TempList) {
    if (TempList[tempKey] == tempV) {
      return tempKey;
    }
  }

  return 0;
} //函数对象号： 17 返回时间值简短表达（今天以时间来表达，昨天及以前写为日期，不带年标识）

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2020 12 27
       *@method 方法名 getTimeShortStrFromTime
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  今天以时间来表达，昨天及以前写为日期，不带年标识
       *@mark
       *@param{参数类型}参数名 参数说明
       tempV 需要查询的变量值
       TempList   所在数据对象清单
*/


function getTimeShortStrFromTime(tempTimeStr) //只接受Date Str对象
{
  if (IsNullOrEmpty(tempTimeStr)) {
    return "";
  }

  var tempnow = new Date();
  var tempTime = new Date(tempTimeStr);
  var tempnowDate = tempnow.getFullYear() + "/" + (tempnow.getMonth() + 1) + "/" + tempnow.getDate();
  var tempTimeDate = tempTime.getFullYear() + "/" + (tempTime.getMonth() + 1) + "/" + tempTime.getDate();
  var ResStr = "";

  if (tempnowDate == tempTimeDate) {
    ResStr = fillZero(tempTime.getHours()) + ":" + fillZero(tempTime.getMinutes());
  } else {
    ResStr = fillZero(tempTime.getMonth() + 1) + "/" + fillZero(tempTime.getDate() + "");
  }

  return ResStr;

  function fillZero(tempInt) //补全前导0
  {
    if (tempInt < 10) {
      return "0" + tempInt.toString();
    } else {
      return tempInt.toString();
    }
  }
} //函数对象号： 18 PMCOI计算变量实现函数

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2020 12 28
       *@method 方法名 calPMCOI
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  计算PMCOI的所有需要本地计算或转换的变量值
       *@mark
       *@param{参数类型}参数名 参数说明
       tempV 需要查询的变量值
       TempList   所在数据对象清单
*/


function calPMCOI(PMCOI) //有一些字段是通过遍历PMCOIList,计算获得的，通过此函数完成。
{
  //PMState: "", //	状态	ONCREATE:创建中，UNPACKING:已拆单, RELEASE:已下达，NORELEASE:未下达，PRODUCTION:生产中，ENDPRODUCTION:生产结束
  PMCOI.calChangeTimeStr = getTimeShortStrFromTime(PMCOI.PMChangeTime);
  PMCOI.calZPublishTimeShort = getTimeShortStrFromTime(PMCOI.ZCTPublishTime);

  switch (PMCOI.PMOrderState) {
    case "ONCREATE":
      {
        PMCOI.calPMState = "创建中";
        PMCOI.calTaskStates = [{
          calStageName: "任务发布",
          calStageStyle: "background-color:lightgray; border-color: gray;" },
        {
          calStageName: "等待授权",
          calStageStyle: "background-color:lightgray; border-color: gray;" },
        {
          calStageName: "过程执行",
          calStageStyle: "background-color:lightgray; border-color: gray;" },
        {
          calStageName: "完工申请",
          calStageStyle: "background-color:lightgray; border-color: gray;" },
        {
          calStageName: "完工验收",
          calStageStyle: "background-color:lightgray; border-color: gray;" }];

        break;
      }

    case "NORELEASE":
      {
        // PMCOI.calPMState = "待发布"
        PMCOI.calPMState = "编辑中";
        PMCOI.calTaskStates = [{
          calStageName: "任务发布",
          calStageStyle: "background-color:lightgray; border-color: gray;" },
        {
          calStageName: "等待授权",
          calStageStyle: "background-color:lightgray; border-color: gray;" },
        {
          calStageName: "过程执行",
          calStageStyle: "background-color:lightgray; border-color: gray;" },
        {
          calStageName: "完工申请",
          calStageStyle: "background-color:lightgray; border-color: gray;" },
        {
          calStageName: "完工验收",
          calStageStyle: "background-color:lightgray; border-color: gray;" }];

        break;
      }

    case "RELEASE":
      {
        PMCOI.calPMState = "已发布";
        break;
      }

    case "ACCEPTED":
      {
        PMCOI.calPMState = "已发布";
        break;
      }
    //20210225

    case "PUBLISH":
      {
        PMCOI.calPMState = "已发布";
        PMCOI.calTaskStates = [{
          calStageName: "任务发布",
          calStageStyle: "background-color:lightgreen; border-color: gray;" },
        {
          calStageName: "等待授权",
          calStageStyle: "background-color:lightgray; border-color: gray;" },
        {
          calStageName: "过程执行",
          calStageStyle: "background-color:lightgray; border-color: gray;" },
        {
          calStageName: "完工申请",
          calStageStyle: "background-color:lightgray; border-color: gray;" },
        {
          calStageName: "完工验收",
          calStageStyle: "background-color:lightgray; border-color: gray;" }];

        break;
      }

    case "WaitAuthorize":
      {
        PMCOI.calPMState = "待授权";
        PMCOI.calTaskStates = [{
          calStageName: "任务发布",
          calStageStyle: "background-color:lightgreen; border-color: gray;" },
        {
          calStageName: "等待授权",
          calStageStyle: "background-color:lightgreen; border-color: gray;" },
        {
          calStageName: "过程执行",
          calStageStyle: "background-color:lightgray; border-color: gray;" },
        {
          calStageName: "完工申请",
          calStageStyle: "background-color:lightgray; border-color: gray;" },
        {
          calStageName: "完工验收",
          calStageStyle: "background-color:lightgray; border-color: gray;" }];

        break;
      }

    case "ALLOWED":
      {
        PMCOI.calPMState = "执行中";
        PMCOI.calTaskStates = [{
          calStageName: "任务发布",
          calStageStyle: "background-color:lightgreen; border-color: gray;" },
        {
          calStageName: "等待授权",
          calStageStyle: "background-color:lightgreen; border-color: gray;" },
        {
          calStageName: "过程执行",
          calStageStyle: "background-color:lightgreen; border-color: gray;" },
        {
          calStageName: "完工申请",
          calStageStyle: "background-color:lightgray; border-color: gray;" },
        {
          calStageName: "完工验收",
          calStageStyle: "background-color:lightgray; border-color: gray;" }];

        break;
      }

    case "UNACCEPTED":
      {
        PMCOI.calPMState = "待验收";
        PMCOI.calTaskStates = [{
          calStageName: "任务发布",
          calStageStyle: "background-color:lightgreen; border-color: gray;" },
        {
          calStageName: "等待授权",
          calStageStyle: "background-color:lightgreen; border-color: gray;" },
        {
          calStageName: "过程执行",
          calStageStyle: "background-color:lightgreen; border-color: gray;" },
        {
          calStageName: "完工申请",
          calStageStyle: "background-color:lightgreen; border-color: gray;" },
        {
          calStageName: "完工验收",
          calStageStyle: "background-color:lightgray; border-color: gray;" }];

        break;
      }

    case "ACCEPT":
      {
        PMCOI.calPMState = "验收";
        PMCOI.calTaskStates = [{
          calStageName: "任务发布",
          calStageStyle: "background-color:lightgreen; border-color: gray;" },
        {
          calStageName: "等待授权",
          calStageStyle: "background-color:lightgreen; border-color: gray;" },
        {
          calStageName: "过程执行",
          calStageStyle: "background-color:lightgreen; border-color: gray;" },
        {
          calStageName: "完工申请",
          calStageStyle: "background-color:lightgreen; border-color: gray;" },
        {
          calStageName: "完工验收",
          calStageStyle: "background-color:lightgreen; border-color: gray;" }];

        break;
      }

    case "PRODUCTION":
      {
        PMCOI.calPMState = "生产中";
        break;
      }

    case "ENDPRODUCTION":
      {
        PMCOI.calPMState = "生产结束";
        break;
      }

    case "UNPACKING":
      {
        //ZCT用不到
        PMCOI.calPMState = "已拆单";
        break;
      }

    default:
      {
        PMCOI.calPMState = "状态未知";
        break;
      }}
  //任务未发布时，ZCTCOILatit和ZCTCOILonggit为undefined


  if (IsNullOrEmpty(PMCOI.ZCTCOILatit) || IsNullOrEmpty(PMCOI.ZCTCOILongit)) {
    PMCOI.calTaskDistance = "KM"; //未发布时，距离为0
  } else {
    if (app.globalData.CurrentLatitude != 0 || app.globalData.CurrentLongitude != 0) {
      PMCOI.calTaskDistance = getDistance(app.globalData.CurrentLatitude, app.globalData.CurrentLongitude, PMCOI.ZCTCOILatit, PMCOI.ZCTCOILongit);
      PMCOI.calTaskDistance = Math.round(PMCOI.calTaskDistance);
      PMCOI.calTaskDistance = PMCOI.calTaskDistance > 100 ? ">100KM" : PMCOI.calTaskDistance + "KM";
    } else {
      PMCOI.calTaskDistance = "KM";
    }
  } //计算进度条

  /*PMCOI.calTaskStates = [
    {
      calStageName : "任务发布",
      calStageStyle : "background-color:lightgreen; border-color: gray;"
    },
    {
    calStageName : "等待授权",
    calStageStyle : "background-color:lightgreen; border-color: gray;",
    },
    {
    calStageName : "过程执行",
    calStageStyle : "background-color:lightgreen; border-color: gray;",
    },
    {
    calStageName : "完工申请",
    calStageStyle : "background-color:lightgray; border-color: gray;",
    },
    {
    calStageName : "完工验收",
    calStageStyle : "background-color:lightgray; border-color: gray;",
    }
    ]*/

} //函数对象号： 19 根据_id值，从数组TempList中删除一条_id字段为selectedID值的数据

/*方法说明
       *@CreatorAndTime 创建人 SE13 时间 2021 01 20
       *@method 方法名 DeleteFromList 
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  通过id,删除数组中的数据
       *@mark
       *@param{参数类型}参数名 参数说明
       selectedID 被选择对象的 _id值
       TempList   所在数据对象清单
*/


function DeleteFromList(selectedID, TempList) {
  if (!IsNullOrEmpty(selectedID) && !IsNullOrEmpty(TempList)) {
    if (TempList.length) {
      for (var i = 0; i < TempList.length; i++) {
        if (TempList[i]._id == selectedID) //遍历出来一个数据
          {
            TempList.splice(i, 1);
            return TempList;
          }
      }
    }
  }

  return TempList; //返回接收到的数组内容
} //函数对象号： 20 根据日期字符串 返回增加天数

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2021 01 20
       *@method 方法名 dateAddDays 
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  根据日期字符串 返回增加天数
       *@mark
       日期加天数的方法
       dataStr日期字符串
       dayCount 要增加的天数
       return 增加n天后的日期字符串
*/


function dateAddDays(dataStr, dayCount) {
  var strdate = GetStr(dataStr); //日期字符串

  var isdate = new Date(strdate.replace(/-/g, "/")); //把日期字符串转换成日期格式

  isdate = new Date((isdate / 1000 + 86400 * dayCount) * 1000); //日期加1天

  var pdate = isdate.getFullYear() + "-" + (isdate.getMonth() + 1) + "-" + isdate.getDate(); //把日期格式转换成字符串

  return pdate;
} //函数对象号： 21 输入验证（可根据需要新增case增加）

/*方法说明
       *@CreatorAndTime 创建人 SE13 时间 2021 02 2
       *@method 方法名 inputvalidation 
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明   正则表达式验证输入值val是否为特定类型type
       *@mark
       输入验证 eg:inputvalidation("123.5","正浮点数")  返回结果为return true
       val 输入的值
       type 类型
       return true(验证通过)；false(验证失败)
*/


function inputvalidation(val, type) {
  switch (type) {
    case "正浮点数":
      //大于0的整数和小数
      {
        if (!/^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/.test(val)) {
          return false;
        }

        return true;
      }

    case "非负浮点数":
      //非负浮点数（正浮点数 + 0）
      {
        if (!/^\d+(\.\d+)?$/.test(val)) {
          return false;
        }

        return true;
      }

    case "整数":
      {
        if (!/^-?\d+$/.test(val)) {
          return false;
        }

        return true;
      }

    case "验证非零的正整数":
      //验证非零的正整数
      {
        if (!/^\+?[1-9][0-9]*$/.test(val)) {
          return false;
        }

        return true;
      }

    case "验证非负整数":
      //验证非负整数（正整数 + 0）
      {
        if (!/^\d+$/.test(val)) {
          return false;
        }

        return true;
      }

    case "身份证号":
      //验证身份证号（15位或18位数字）
      {
        if (!/^\d{15}|\d{}18$/.test(val)) {
          return false;
        }

        return true;
      }

    /*case "Email地址": //验证Email地址
        {
          if (!/^\w+[-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(val)) {
            return false
          }
          return true
        }*/

    case "物料号名":
      //验证物料号码组合的合法性
      {
        if (IsNullOrEmpty(val)) {
          return "不能为空";
        }

        if (val.indexOf(":") < 0) {
          if (val.indexOf("：") < 0) {
            return "需要用:分隔物料号和物料名。";
          }
        }

        return "OK";
      }

    default:
      {
        return false;
      }}

} //函数对象号： 22 从属性页下拉框内容获得相同的值的顺序地址，用于切换赋值

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2021 02 12
       *@method 方法名 InputIntoList
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明   属性页下拉框，如果直接赋值不能直接显示。属性页下拉框通过数值地址来赋值的。
       *@mark
       inputValue: 输入值
       ValueList:  下拉清单对象
       return 返回数组地址值。 没有找到返回-1
*/


function getValueSqInList(inputValue, ValueList) {
  if (!IsNullOrEmpty(inputValue) && !IsNullOrEmpty(ValueList)) {
    if (ValueList.length) {
      for (var i = 0; i < ValueList.length; i++) {
        if (ValueList[i] == inputValue) //遍历出来一个数据
          {
            return i;
          }
      }
    } else {
      if (ValueList == inputValue) //只有一个数据时的数据
        {
          return -1; //不是数组，不应该用来选择
        }
    }
  }

  return -1; //没有找到返回一个安全的值
} //函数对象号： 23 根据标识字符，从字符串切出左边的一部分

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2021 02 17
       *@method 方法名 getStrLeft
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明    根据标识字符，从字符串切出左边的一部分 (注意从尾部向前搜索)
       *@mark
       tempStr:   长字符串
       tempMark:  标识字符串
       return:    字符串
*/


function getStrLeft(tempStr, tempMark) {
  if (!IsNullOrEmpty(tempStr)) {
    var tempRes = tempStr.substr(0, tempStr.lastIndexOf(tempMark));

    if (!IsNullOrEmpty(tempRes)) {
      return tempRes;
    } else {
      return tempStr;
    }
  }

  return "";
} //函数对象号： 24 根据标识字符，从字符串切出右边的一部分

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2021 02 17
       *@method 方法名 getStrRight
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明    根据标识字符，从字符串切出左边的一部分  (注意从尾部向前搜索)
       *@mark
       tempStr:   长字符串
       tempMark:  标识字符串
       return:    字符串
*/


function getStrRight(tempStr, tempMark) {
  if (!IsNullOrEmpty(tempStr)) {
    var tempRes = tempStr.substring(tempStr.lastIndexOf(tempMark) + tempMark.length);

    if (!IsNullOrEmpty(tempRes)) {
      return tempRes;
    } else {
      return tempStr;
    }
  }

  return "";
} //函数对象号： 25 浮起一个控件

/*方法说明
 *@CreatorAndTime 创建人 GM 时间 2021 02 17
 *@method 方法名 lightOneControl
 *@for 所属类名/或模块名  pmJSTool
 *@function 功能说明    浮起一个控件
 *@mark
 */


function lightOneControl(tempControl) {
  //不返回只做正确的设置
  var btnSelectedStyle = " box-shadow: 2px 2px 5px #000;"; //用于动态表达按钮选中的状态

  var btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;"; //用于动态表达按钮没有选中的状态

  tempControl.selectedStyle = btnSelectedStyle;
} //函数对象号： 25 按下一个控件

/*方法说明
 *@CreatorAndTime 创建人 GM 时间 2021 02 17
 *@method 方法名 unLightOneControl
 *@for 所属类名/或模块名  pmJSTool
 *@function 功能说明    浮起一个控件
 *@mark
 */


function unLightOneControl(tempControl) {
  //不返回只做正确的设置
  var btnSelectedStyle = " box-shadow: 2px 2px 5px #000;"; //用于动态表达按钮选中的状态

  var btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;"; //用于动态表达按钮没有选中的状态

  tempControl.selectedStyle = btnUnSelectedStyle;
} //函数对象号： 26 ZCTMyPMCOIList计算变量实现函数

/*方法说明
       *@CreatorAndTime 创建人 SE13 时间 2021 03 01
       *@method 方法名 calMyPMCOI
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  计算ZCTMyPMCOIList的所有需要本地计算或转换的变量值
       *@mark
       *@param{参数类型}参数名 参数说明
       tempV 需要查询的变量值
       TempList   所在数据对象清单
*/


function calMyPMCOI(PMCOI) //有一些字段是通过遍历PMCOIList,计算获得的，通过此函数完成。
{
  //calPMCOI(PMCOI)  //直接交给calPMCOI, 特殊的才需要这里编写
  //ZCTTaskState: "", //任务状态 TEMP:暂存 WATCH:关注, APPLY:申请, ALLOWED:授权, REFUSED: 拒绝，EXEC:执行, DELIVRY:交付, 验收：ACCEPT
  PMCOI.calChangeTimeStr = getTimeShortStrFromTime(PMCOI.ZCTChangeTime);

  switch (PMCOI.ZCTTaskState) {
    case "TEMP":
      {
        PMCOI.calPMState = "暂存";
        break;
      }

    case "WATCH":
      {
        PMCOI.calPMState = "关注";
        break;
      }

    case "APPLY":
      {
        PMCOI.calPMState = "申请";
        break;
      }

    case "ALLOWED":
      {
        PMCOI.calPMState = "执行中";
        break;
      }

    case "REFUSED":
      {
        PMCOI.calPMState = "拒绝";
        break;
      }

    case "EXEC":
      {
        PMCOI.calPMState = "执行";
        break;
      }

    case "DELIVRY":
      {
        PMCOI.calPMState = "交付";
        break;
      }

    case "RETURN":
      {
        PMCOI.calPMState = "交付退回";
        break;
      }

    case "ACCEPT":
      {
        PMCOI.calPMState = "验收";
        break;
      }

    default:
      {
        PMCOI.calPMState = "状态未知";
        break;
      }}


  if (!IsNullOrEmpty(PMCOI.PMCOI)) {
    calPMCOI(PMCOI.PMCOI);

    if (PMCOI.PMCOI.ZCTIsDeleted == "YES") {
      PMCOI.calPMState = "已撤销";
    }
  }
} //函数对象号： 27 根据id值，从控件myPMCOIList中获取一个控件

/*方法说明
       *@CreatorAndTime 创建人 SE13 时间 2021 03 01
       *@method 方法名 getOneControlFromListByMy 
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  通过id,获取控件数据，针对ZCTMyPMCOIList集合
       *@mark
       *@param{参数类型}参数名 参数说明
       selectedID 被选择对象的 _id值
       TempList   所在数据对象清单
*/


function getOneControlFromListByMy(selectedID, TempList) {
  if (!IsNullOrEmpty(selectedID) && !IsNullOrEmpty(TempList)) {
    if (TempList.length) {
      for (var i = 0; i < TempList.length; i++) {
        if (TempList[i].ZCTPMCOI_id == selectedID) //遍历出来一个数据
          {
            return TempList[i];
          }
      }
    } else {
      if (TempList.ZCTPMCOI_id == selectedID) //只有一个数据时的数据
        {
          return TempList;
        }
    }
  }

  return ""; //没有找到返回一个安全的空值
} //函数对象号： 28 PMUser计算前端可视变量的实现函数

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2020 2 28
       *@method 方法名 calPMUser
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  计算PMCOI的所有需要本地计算或转换的变量值
       *@mark
       *@param{参数类型}参数名 参数说明
       tempV 需要查询的变量值
       TempList   所在数据对象清单
*/


function calPMUser(PMUser) //有一些字段是通过遍历PMUserList,计算获得的，通过此函数完成。
{
  PMUser.calBindTimeShortStr = getTimeShortStrFromTime(PMUser.WXLastBindTime);
  var TempMainInfoStr = PMUser.PMUserName;

  if (!IsNullOrEmpty(PMUser.ZCTUserSex)) {
    TempMainInfoStr = TempMainInfoStr + " / " + PMUser.ZCTUserSex;
  }

  if (!IsNullOrEmpty(PMUser.ZCTBirthYear)) {
    var TempNow = new Date();
    var nowYear = TempNow.getFullYear();
    var TempBirthYear = new Date(PMUser.ZCTBirthYear).getFullYear();
    PMUser.calAges = nowYear - TempBirthYear;
    TempMainInfoStr = TempMainInfoStr + " / " + PMUser.calAges + "岁";
  }

  PMUser.calMainInfo = TempMainInfoStr;

  if (IsNullOrEmpty(PMUser.PMUserID)) {
    PMUser.IsRelated = false;
    PMUser.PMUserID = "***********";
  } else {
    if (PMUser.PMUserID == "***********") {
      PMUser.IsRelated = false;
    } else {
      PMUser.IsRelated = true;
    }
  }

  if (!IsNullOrEmpty(PMUser.relatedTime)) {
    PMUser.relatedTimeShort = this.getTimeShortStrFromTime(PMUser.relatedTime);
  }
} //函数对象号： 29 计算两位置点间的距离（KM）的实现函数

/*方法说明
       *@CreatorAndTime 创建人 SE11 时间 2021 3 10
       *@method 方法名 getDistance
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  计算两位置点间的距离（KM）
       *@mark
       *@param{参数类型}参数名 参数说明
       la1 纬度
       lo1 经度 
       la2 纬度
       lo2 经度
*/


function getDistance(la1, lo1, la2, lo2) {
  var La1 = la1 * Math.PI / 180.0;
  var La2 = la2 * Math.PI / 180.0;
  var La3 = La1 - La2;
  var Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0;
  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)));
  s = s * 6378.137;
  s = Math.round(s * 10000) / 10000;
  s = s.toFixed(2);
  return s;
} //函数对象号： 30 更新缓存中产品数据的实现函数

/*方法说明
       *@CreatorAndTime 创建人 SE24 时间 2021-3-11 10:24:14
       *@method 方法名 UpdateProductStorge
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  根据提交的产品号和名称更新缓存中的数据
       *@mark
       *@param{参数类型}参数名 参数说明
       *@param {String} TempProductID   //产品号
       *@param {String} TempProductName //产品名
*/


function UpdateProductStorge(TempProductID, TempProductName) {
  try {
    if (!IsNullOrEmpty(TempProductID) && !IsNullOrEmpty(TempProductName)) {
      //获取Storage缓存中的产品数据
      var TempStorageProductArr = new Array();
      var TempProductStr = wx.getStorageSync('ProductList'); //不存在本地缓存时，转换为空的数组

      if (IsNullOrEmpty(TempProductStr)) {
        //缓存新的产品
        var TempNewProduct = new Object();
        TempNewProduct.ProductID = TempProductID;
        TempNewProduct.ProductName = TempProductName;
        TempNewProduct.Date = new Date();
        TempStorageProductArr.push(TempNewProduct);
        var TempNewProductArr = JSON.stringify(TempStorageProductArr);
        wx.setStorageSync('ProductList', TempNewProductArr);
      } else {
        TempStorageProductArr = JSON.parse(TempProductStr);
        var TempThisProduct = TempStorageProductArr.find(function (e) {
          return e.ProductID == TempProductID;
        });

        if (!IsNullOrEmpty(TempThisProduct)) {
          //已存在此产品缓存信息
          if (TempThisProduct.ProductName != TempProductName) {
            //本次添加或编辑的产品名不同，进行修改
            for (var i = 0; i < TempStorageProductArr.length; i++) {
              if (TempStorageProductArr[i].ProductID == TempProductID) //查找出对应产品数据
                {
                  TempStorageProductArr[i].ProductName = TempProductName;
                  TempStorageProductArr[i].Date = new Date();
                }
            }

            var TempNewProductArr = JSON.stringify(TempStorageProductArr);
            wx.setStorageSync('ProductList', TempNewProductArr);
          }
        } else {
          //获取当前已缓存长度
          var TempArrCount = TempStorageProductArr.length;

          if (TempArrCount >= 500) {
            //大于500时，移除最早的，保存新的。
            //按照时间进行排序
            TempStorageProductArr.sort(function (a, b) {
              return a.Date > b.Date;
            }); //移除排序后最早的产品信息

            TempStorageProductArr.splice(0, 1); //缓存新的产品

            var TempNewProduct = new Object();
            TempNewProduct.ProductID = TempProductID;
            TempNewProduct.ProductName = TempProductName;
            TempNewProduct.Date = new Date();
            TempStorageProductArr.push(TempNewProduct);
            var TempNewProductArr = JSON.stringify(TempStorageProductArr);
            wx.setStorageSync('ProductList', TempNewProductArr);
          } else {
            //缓存新的产品
            var TempNewProduct = new Object();
            TempNewProduct.ProductID = TempProductID;
            TempNewProduct.ProductName = TempProductName;
            TempNewProduct.Date = new Date();
            TempStorageProductArr.push(TempNewProduct);
            var TempNewProductArr = JSON.stringify(TempStorageProductArr);
            wx.setStorageSync('ProductList', TempNewProductArr);
          }
        }
      }
    }
  } catch (e) {
    console.log(GetStr(e));
  }
} //函数对象号： 31 获取最常见工种类型清单


function getPMJobType() {
  var JobTypeList = ['普工', '技工', '组装工', '包装工', '焊工', '电工', '机加工', '冲压工', '电镀工', '注塑工', '喷塑工', '水工', '木工', '漆工', '学徒工', '质检工', '生产管理', '劳务管理', '其他'];
  return JobTypeList;
} //函数对象号：32 字符串转为数字


function GetNum(TempNum) {
  if (isNaN(TempNum)) {
    return 0;
  } else {
    return parseFloat(TempNum);
  }
} //函数对象号：33 字符串转为数字


function GetStateStr(TempState) {
  switch (TempState) {
    case "CREATION":
      return "等待生产";

    case "ONRPODUCITON":
      return "生产中，";

    case "CLOSE":
      return "生产结束";

    default:
      break;}

} //函数对象号： 34 截取设定位数的字符串 

/*方法说明 
       *@CreatorAndTime 创建人 SE13 时间 2021 04 15 
       *@method 方法名 getStrsubstring 
       *@for 所属类名/或模块名  pmJSTool 
       *@function 功能说明    截取设定位数的字符串 
       *@mark 
       tempStr:   长字符串 
       First:  从第几位开始截取 
       lenth:  截取长度 
       return:    字符串 
*/


function getStrsubstring(tempStr, First, lenth) {
  if (!IsNullOrEmpty(tempStr)) {
    var tempRes = tempStr.substring(First, lenth);

    if (!IsNullOrEmpty(tempRes)) {
      return tempRes;
    } else {
      return tempStr;
    }
  }

  return "";
}
/**
   * Creator:SE24,Date:2021-6-5 17:55:31
   * 将时间字符串转换成正常格式
   * @param {*} TempJsonDate 
   */


function DateChange(TempJsonDate) {
  if (IsNullOrEmpty(TempJsonDate) || TempJsonDate == "0001-01-01T00:00:00" || TempJsonDate == "0001-01-01T08:00:00") {
    return "";
  }

  if (TempJsonDate.length > 19) {
    var dateee = new Date(TempJsonDate).toJSON();
    var date = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
    date = date.replace(new RegExp(/-/gm), "/");
    return date;
  }

  var TempRegDate = RegExp(/Date/);

  if (!TempRegDate.test(TempJsonDate)) {
    TempJsonDate = TempJsonDate.replace(/T/, " ");
    TempJsonDate = TempJsonDate.replace(new RegExp(/-/gm), "/");
    return TempJsonDate;
  }

  if (TempJsonDate == "/Date(-62135596800000+0800)/") {
    return "";
  }

  var TempDate = new Date(parseInt(TempJsonDate.replace("/Date(", "").replace(")/", ""), 10));
  var TempMonth = TempDate.getMonth() + 1 < 10 ? "0" + (TempDate.getMonth() + 1) : TempDate.getMonth() + 1;
  var TempDay = TempDate.getDate() < 10 ? "0" + TempDate.getDate() : TempDate.getDate();
  var TempHours = TempDate.getHours() < 10 ? "0" + TempDate.getHours() : TempDate.getHours();
  var TempMinutes = TempDate.getMinutes() < 10 ? "0" + TempDate.getMinutes() : TempDate.getMinutes();
  var TempSeconds = TempDate.getSeconds() < 10 ? "0" + TempDate.getSeconds() : TempDate.getSeconds();
  return TempDate.getFullYear() + "/" + TempMonth + "/" + TempDay + " " + TempHours + ":" + TempMinutes + ":" + TempSeconds;
}
/**
   * Creator:SE7,Date:2021-6-30 17:55:31
   * 将字符串转换成日期格式
   * @param {*} TempJsonDate 
   */


function stringToDate(str) {
  var tempStrs = str.split(" ");
  var dateStrs = tempStrs[0].split("-");
  var year = parseInt(dateStrs[0], 10);
  var month = parseInt(dateStrs[1], 10);
  var day = parseInt(dateStrs[2], 10);
  var date = new Date(year, month, day, 0, 0, 0);
  return date;
}
/**
   * Creator:SE24,Date:2021-7-6 17:38:27
   *  根据标识字符，从字符串左边起第一个此字符开始，切出左边的一部分
   * @param {String} tempStr 
   * @param {String} tempMark 
   */


function getStrLeftFromFront(tempStr, tempMark) {
  if (!IsNullOrEmpty(tempStr)) {
    var tempRes = tempStr.substr(0, tempStr.indexOf(tempMark));

    if (!IsNullOrEmpty(tempRes)) {
      return tempRes;
    } else {
      return tempStr;
    }
  }

  return "";
}
/**
   * Creator:SE24,Date:2021-7-6 17:39:56
   *  根据标识字符，从字符串左边起第一个此字符开始，切出右边的一部分
   * @param {*} tempStr 
   * @param {*} tempMark 
   */


function getStrRightFromFront(tempStr, tempMark) {
  if (!IsNullOrEmpty(tempStr)) {
    var tempRes = tempStr.substring(tempStr.indexOf(tempMark) + tempMark.length);

    if (!IsNullOrEmpty(tempRes)) {
      return tempRes;
    } else {
      return tempStr;
    }
  }

  return "";
}

/***/ }),
/* 25 */
/*!***********************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/utils/pmSerTools.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uniCloud) {var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9);function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //有时上面会自动出现一些导入语句，原因未知，造成编译不通过。
//所有需要和云函数进行交互的操作写在这里
var pmJSTools = __webpack_require__(/*! ./pmJSTools.js */ 24);
var app = getApp();
var targetServerEnv = 'tcb-ecxw1hs9f19080-6d00j26b1957e'; //云环境ID
//测试环境
//const targetServerEnv = 'zctmes2021-test-9gyl6ila6a31bc71'
//正式环境 ==>
//const targetServerEnv = 'zctmes2021-4gbkpkah6976a0e1'
//声明曝露函数给require方

module.exports = {
  getCollectionsFromDB: getCollectionsFromDB,
  getResFromReturn: getResFromReturn,
  addOrUpdateToServer: addOrUpdateToServer,
  exeAccounts: exeAccounts,
  exePMCOI: exePMCOI,
  UploadFile: UploadFile,
  ExeMessage: ExeMessage,
  exePayment: exePayment,
  getPhoneNumber: getPhoneNumber,
  getAccount: getAccount };
//调用结果处理函数
//1, 对云函数返回的结果进行检查和统计格式确认，并将结果整合好给前端，简化前端代码处理的工作量
//2，errMsg 成功消息，result只保留OK的数值。
//3，让调用者获得如下结构： {errMsg,result}
//4，函数名是： get Result From Reurn data 的简称

function getResFromReturn(SerRes) {
  var errMsg = ""; // 用于返回

  var result = []; // 用于返回

  if (pmJSTools.IsNullOrEmpty(SerRes)) {
    //SerRes为空
    errMsg = "返回数据为空。";
    return {
      errMsg: errMsg,
      data: data };

  } else {
    if (pmJSTools.GetErrMsgValue(SerRes.errMsg) == "OK") {
      //调用正常的情况下
      if (pmJSTools.GetErrMsgValue(pmJSTools.GetSubObj([SerRes, "result", "errMsg"])) == "OK") {
        errMsg = "OK"; //简化，也是为了过滤前面的调用对象说明，减少误会
      } else {
        if (pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([SerRes, "result", "errMsg"]))) {
          //分别处理：SerRes.result.errMsg 为空的情况
          //情况1： 程序员重复调用（已经脱壳了）
          //情况2： 如开发说明中的：2.4.9.1   result:   {Data[]}
          //情况3： 如开发说明中的：2.4.9.2 result: {[errMsg，Data[]],...}
          //防错代码
          if (!pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([SerRes, "result", "result"]))) {
            errMsg = "制程代码规范要求： result和errMsg同时出现，现在有result，没有errMsg说明代码有错误。常见错误是errMsg拼写问题。";
          } else {
            errMsg = "OK"; //SerRes.result.errMsg 为空，可能是程序员重复调用 ，为了防止程序员重复调用
          }
        } else {
          errMsg = SerRes.result.errMsg; //errMsg不为OK,一直上传到最上调用层
        }
      }

      if (pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([SerRes, "result", "errMsg"]))) //不能直接用IsNullOrEmpty,undefined 表示不存在，为空还是存在的情况下
        {
          if (SerRes.result === undefined || SerRes.result == null) {
            errMsg = "代码： 返回结果是OK,但是result 是undefined 或 null,说明调用有问题。"; //因为errMsg 是OK，和它对应的result 不可以是 undefined ，或 null,否则证明有潜在错误。这是个防错设计
          } else {
            result = pmJSTools.GetSubObj([SerRes, "result"]);
          } //一般情况下，只要执行result = SerRes.result.result就可以，考虑到，程序员可能会搞不清楚是否要用getResFromReturn
          //为了防错，自动执行result = SerRes.result，防止过度调用造成错误。

        } else {
        result = pmJSTools.GetSubObj([SerRes, "result", "result"]); //忽略掉一层result,否则结构复杂
      }

      return {
        errMsg: errMsg,
        result: result };

    } else {
      //如果返回的结果不为OK,页必须返回错误结果，并且自动屏蔽获取的值。制程规定每一层函数必须为OK,下一层才能是OK,并且错误必须逐层传递到底层。
      errMsg = SerRes.errMsg; //一旦由错误，值不会传给调用者

      return {
        errMsg: errMsg,
        result: result };

    }
  }
} //函数对象号： 2， 获取多个集合的函数，中转到云函数，为未来切换数据库的可能做好准备。 getCollectionsFromServer
//DBConditions结构举例
function

getCollectionsFromDB(_x) {return _getCollectionsFromDB.apply(this, arguments);}function _getCollectionsFromDB() {_getCollectionsFromDB = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(DBConditions) {var serRes;return _regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;_context.next = 3;return (

              uniCloud.callFunction //await调用远程云函数
              ({
                config: {
                  env: targetServerEnv },

                name: 'getCollectionsFromServer',
                data: {
                  DBConditions: DBConditions } }));case 3:serRes = _context.sent;return _context.abrupt("return",


            getResFromReturn(serRes));case 7:_context.prev = 7;_context.t0 = _context["catch"](0);return _context.abrupt("return",

            getResFromReturn(_context.t0));case 10:case "end":return _context.stop();}}}, _callee, null, [[0, 7]]);}));return _getCollectionsFromDB.apply(this, arguments);}function



addOrUpdateToServer(_x2) {return _addOrUpdateToServer.apply(this, arguments);}















//函数对象号： 4, 账号类操作对象/exeAccounts
//funcType: 具体业务类型，dataList 参数清单
function _addOrUpdateToServer() {_addOrUpdateToServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(DBConditionsAndDataForExe) {var serRes;return _regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.prev = 0;_context2.next = 3;return wx.cloud.callFunction //await调用远程云函数
            ({ config: { env: targetServerEnv }, name: 'addOrUpdateToServer', data: { DBConditionsAndDataForExe: DBConditionsAndDataForExe } });case 3:serRes = _context2.sent;return _context2.abrupt("return", getResFromReturn(serRes));case 7:_context2.prev = 7;_context2.t0 = _context2["catch"](0);return _context2.abrupt("return", getResFromReturn(_context2.t0));case 10:case "end":return _context2.stop();}}}, _callee2, null, [[0, 7]]);}));return _addOrUpdateToServer.apply(this, arguments);}function
exeAccounts(_x3, _x4) {return _exeAccounts.apply(this, arguments);}




































//函数对象号： 5，交付订单类操作exePMCOI
//功能分类区域
///////////////////////////////////////////////////////////////////////////////
//功能1： 获取PMCOI数据                                                        //
//参数1： funcName= getPMCOI                                                 //
//返回：  funcName= PMCOI                                                    //
//////////////////////////////////////////////////////////////////////////////
//功能2: 创建PO                                                             //
//参数2： funcName= createPO，funcPra.PMCOIID不能为空，  funcPra.PMPO 不能为空//
/////////////////////////////////////////////////////////////////////////////
//功能3： 获取我发布的 PMCOIList                                             //
//参数： funcName= getPMCOIList                                            //
//返回：  funcName= funcPra.PMUser不能为空                                  //
//////////////////////////////////////////////////////////////////////////////
//功能4： 创建PMCOI                                                         //
//参数： funcName= createOnePMCOI                                            //
//返回：  funcName= funcPra.PMCOI不能为空                                  //
//////////////////////////////////////////////////////////////////////////////
function _exeAccounts() {_exeAccounts = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(funcName, funcPra) {var serRes;return _regeneratorRuntime.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.prev = 0;_context3.next = 3;return uniCloud.callFunction //await调用远程云函数
            ({ config: { env: targetServerEnv }, name: 'exeAccounts', data: { funcName: funcName, funcPra: funcPra } });case 3:serRes = _context3.sent;console.log("云exeAccounts调用结果");console.log(serRes);return _context3.abrupt("return", getResFromReturn(serRes));case 9:_context3.prev = 9;_context3.t0 = _context3["catch"](0);console.log("有错误");console.log(_context3.t0);return _context3.abrupt("return", getResFromReturn(_context3.t0));case 14:case "end":return _context3.stop();}}}, _callee3, null, [[0, 9]]);}));return _exeAccounts.apply(this, arguments);}function
exePMCOI(_x5, _x6) {return _exePMCOI.apply(this, arguments);}
































//函数对象号：6， 文件上传 这个函数统一管理上传文件，即使未来更换文件服务器也可以通过函数路由实现。
//根据fileType，代码确认远程文件夹
//localFilePath 本地路径
function _exePMCOI() {_exePMCOI = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(funcName, funcPra) {var btnSelectedStyle, btnUnSelectedStyle, serRes;return _regeneratorRuntime.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:btnSelectedStyle = " box-shadow: 2px 2px 5px #000;"; //用于动态表达按钮选中的状态
            btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;"; //用于动态表达按钮没有选中的状态
            console.log("需执行的方法名为：" + funcName);serRes = { errMsg: "", result: [] };_context4.prev = 4;_context4.next = 7;return uniCloud.callFunction //await调用远程云函数
            ({ config: { env: targetServerEnv }, name: 'exePMCOI', data: { funcName: funcName, funcPra: funcPra } });case 7:serRes = _context4.sent;console.log("云exePMCOI调用结果");console.log(serRes); // return getResFromReturn(serRes); //getResFromReturn整合和简化sertRes供前端使用。
            return _context4.abrupt("return", serRes);case 13:_context4.prev = 13;_context4.t0 = _context4["catch"](4);console.log("有错误");console.log(_context4.t0);return _context4.abrupt("return", getResFromReturn(_context4.t0));case 18:case "end":return _context4.stop();}}}, _callee4, null, [[4, 13]]);}));return _exePMCOI.apply(this, arguments);}function UploadFile(_x7, _x8, _x9) {return _UploadFile.apply(this, arguments);}







































































//函数对象号： 7, 订阅消息类操作对象/exeMessage 
//funcName: 具体业务类型，funcPra: 参数清单 
function _UploadFile() {_UploadFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(fileType, localFilePath, remotefileName) {var ResData, ServerFilePath, TempRes;return _regeneratorRuntime.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:ResData = { errMsg: "等待执行", result: [] }; //这样做的目的，就是为了防止程序员随意上传文件，搞乱服务器文件地址
            console.log("图片存放的位置为1" + ServerFilePath);ServerFilePath = "";_context5.t0 = fileType;_context5.next = _context5.t0 === "PMCOIProductPic" ? 6 : _context5.t0 === "PMPIProductPic" ? 8 : _context5.t0 === "ZCTRAWProPic" ? 10 : _context5.t0 === "ZCTRAWPurPic" ? 12 : _context5.t0 === "userphoto" ? 14 : _context5.t0 === "ZCTChatImages" ? 16 : 18;break;case 6:ServerFilePath = "PMCOIProductPic";return _context5.abrupt("break", 21);case 8:ServerFilePath = "PMPIProductPic";return _context5.abrupt("break", 21);case 10:ServerFilePath = "ZCTRAWProPic";return _context5.abrupt("break", 21);case 12:ServerFilePath = "ZCTRAWPurPic";return _context5.abrupt("break", 21);case 14:ServerFilePath = "userphoto";return _context5.abrupt("break", 21);case 16:ServerFilePath = "ZCTChatImages";return _context5.abrupt("break", 21);case 18:ResData.errMsg = "编程错误： 文件类型需要检查。";return _context5.abrupt("return", ResData);case 21:console.log("图片存放的位置为2" + ServerFilePath);if (pmJSTools.IsNullOrEmpty("ServerFilePath")) {_context5.next = 31;break;}_context5.next = 25;return uniCloud.uploadFile({ cloudPath: ServerFilePath + "/" + remotefileName, filePath: localFilePath //本地文件文件路径
            });case 25:TempRes = _context5.sent;ResData.errMsg = "OK";ResData.result = TempRes.fileID;return _context5.abrupt("return", ResData);case 31:ResData.errMsg = "编程问题：文件类型参数错误。清单pmSerTools.UploadFile中添加。";return _context5.abrupt("return", ResData);case 33:case "end":return _context5.stop();}}}, _callee5);}));return _UploadFile.apply(this, arguments);}function ExeMessage(_x10, _x11) {return _ExeMessage.apply(this, arguments);}






























//函数对象号： 8, 支付类操作对象/exePayment 
//funcName: 支付业务类型，funcPra: 参数清单 
function _ExeMessage() {_ExeMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(funcName, funcPra) {var serRes;return _regeneratorRuntime.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0: //功能分类区域 
            /////////////////////////////////////////////////////////////////////////////// 
            //功能： 关于ExeMessage的前端调用功能接口                                      //                                                 // 
            //参数1： funcName= GetTemplate_id，funcPra.functionName不能为空              // 
            //返回：                                                                     // 
            ////////////////////////////////////////////////////////////////////////////// 
            wx.showLoading({ title: '数据交互中...' });_context6.prev = 1;_context6.next = 4;return uniCloud.callFunction //await调用远程云函数 
            ({ config: { env: targetServerEnv }, name: 'ExeMessage', data: { funcName: funcName, funcPra: funcPra } });case 4:serRes = _context6.sent; //wx.hideLoading() //这种写法真机环境下会出错 
            wx.hideLoading({ fail: function fail(res) {} });return _context6.abrupt("return", getResFromReturn(serRes));case 9:_context6.prev = 9;_context6.t0 = _context6["catch"](1);return _context6.abrupt("return", getResFromReturn(_context6.t0));case 12:case "end":return _context6.stop();}}}, _callee6, null, [[1, 9]]);}));return _ExeMessage.apply(this, arguments);}function exePayment(_x12, _x13) {return _exePayment.apply(this, arguments);}














//函数对象号： 9, 获取登录微信手机号 
//cloudID: 用来向云函数换取手机号 
function _exePayment() {_exePayment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7(funcName, funcPra) {var serRes;return _regeneratorRuntime.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:_context7.prev = 0;_context7.next = 3;return uniCloud.callFunction //await调用远程云函数
            ({ config: { env: targetServerEnv }, name: 'exePayment', data: { funcName: funcName, funcPra: funcPra } });case 3:serRes = _context7.sent;console.log("云exeAccounts调用结果");console.log(serRes);return _context7.abrupt("return", getResFromReturn(serRes));case 9:_context7.prev = 9;_context7.t0 = _context7["catch"](0);console.log("有错误");console.log(_context7.t0);return _context7.abrupt("return", getResFromReturn(_context7.t0));case 14:case "end":return _context7.stop();}}}, _callee7, null, [[0, 9]]);}));return _exePayment.apply(this, arguments);}function
getPhoneNumber(_x14) {return _getPhoneNumber.apply(this, arguments);}
























//函数对象号： 10, 获取人员信息
function _getPhoneNumber() {_getPhoneNumber = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8(cloudID) {var serRes;return _regeneratorRuntime.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:_context8.prev = 0;_context8.next = 3;return wx.cloud.callFunction({ config: { env: targetServerEnv }, name: 'exeAccounts', data: { weRunData: wx.cloud.CloudID(cloudID), // 这个 CloudID 值到云函数端会被替换 
                obj: { shareInfo: wx.cloud.CloudID(cloudID) // 非顶层字段的 CloudID 不会被替换，会原样字符串展示 
                }, funcName: "getPhoneNumber" } });case 3:serRes = _context8.sent;console.log("云exeAccounts--getPhoneNumber调用结果");console.log(serRes);return _context8.abrupt("return", serRes);case 9:_context8.prev = 9;_context8.t0 = _context8["catch"](0);console.log("有错误");console.log(_context8.t0);return _context8.abrupt("return", _context8.t0);case 14:case "end":return _context8.stop();}}}, _callee8, null, [[0, 9]]);}));return _getPhoneNumber.apply(this, arguments);}function getAccount() {return _getAccount.apply(this, arguments);}function _getAccount() {_getAccount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee9() {var fancname, funcPra, resData, TempRes, myDate, myDateYear, TempPMUserAge, TemData;return _regeneratorRuntime.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.prev = 0;


            fancname = "getAccount";
            funcPra = {}; //获取时不需要赋值参数
            _context9.next = 5;return (
              this.exeAccounts(fancname, funcPra));case 5:resData = _context9.sent;
            TempRes = this.getResFromReturn(resData); //脱壳

            myDate = new Date();
            myDateYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)

            TempPMUserAge = parseFloat(myDateYear - pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTBirthYear"])));
            TemData = {
              _id: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "_id"])),
              PMUserID: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "PMUserID"])),
              PMUserName: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "PMUserName"])),
              WXOpenID: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "WXOpenID"])),
              ZCTJobType: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTJobType"])),
              ZCTJobPayType: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTJobPayType"])),
              ZCTUserSex: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTUserSex"])),
              PMPhoneNB: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "PMPhoneNB"])),
              ZCTBirthYear: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTBirthYear"])),
              ZCTReleaseNum: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTReleaseNum"])),
              ZCTReleaseAcceNum: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTReleaseAcceNum"])),
              ZCTReceiveOrderNum: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTReceiveOrderNum"])),
              ZCTDeliveryAcceNum: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTDeliveryAcceNum"])),
              PMUserAge: TempPMUserAge,
              ZCTUserPhoto: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTUserPhoto"])) };

            app.globalData.PMUserID = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "PMUserID"]));
            app.globalData.PMUserName = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "PMUserName"]));
            app.globalData.ZCTBirthYear = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTBirthYear"]));
            app.globalData.WXOpenID = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "WXOpenID"]));
            app.globalData.ZCTJobType = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTJobType"]));
            app.globalData.ZCTJobPayType = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTJobPayType"]));
            app.globalData.ZCTUserSex = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTUserSex"]));
            app.globalData.PMPhoneNB = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "PMPhoneNB"]));
            app.globalData.ZCTReleaseNum = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTReleaseNum"]));
            app.globalData.ZCTReleaseAcceNum = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTReleaseAcceNum"]));
            app.globalData.ZCTReceiveOrderNum = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTReceiveOrderNum"]));
            app.globalData.ZCTDeliveryAcceNum = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTDeliveryAcceNum"]));
            app.globalData.PMUserAge = TempPMUserAge;
            app.globalData._id = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "_id"]));
            app.globalData.ZCTUserPhoto = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTUserPhoto"]));if (!(

            TempRes.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempRes.result))) {_context9.next = 31;break;}
            //如果登录成功先把获取的值保存下来
            wx.setStorage({
              key: 'PMUserInfo',
              data: TemData });return _context9.abrupt("return",

            "OK");case 31:

            //如果登录不成功先把获取的值置空
            wx.setStorage({
              key: 'PMUserInfo',
              data: {
                PMUserID: "",
                PMUserName: "",
                WXOpenID: "",
                ZCTJobType: "",
                ZCTJobPayType: "",
                ZCTUserSex: "",
                PMPhoneNB: "",
                ZCTBirthYear: "",
                ZCTReleaseNum: "",
                ZCTReleaseAcceNum: "",
                ZCTReceiveOrderNum: "",
                ZCTDeliveryAcceNum: "",
                PMUserAge: "",
                _id: "" } });


            app.globalData.PMUserID = "";
            app.globalData.PMUserName = "";
            app.globalData.WXOpenID = "";
            app.globalData.ZCTJobType = "";
            app.globalData.ZCTJobPayType = "";
            app.globalData.ZCTUserSex = "";
            app.globalData.PMPhoneNB = "";
            app.globalData.ZCTBirthYear = "";
            app.globalData.ZCTReleaseNum = "";
            app.globalData.ZCTReleaseAcceNum = "";
            app.globalData.ZCTReceiveOrderNum = "";
            app.globalData.ZCTDeliveryAcceNum = "";
            app.globalData.PMUserAge = "";
            app.globalData._id = "";case 46:return _context9.abrupt("return",


            "NOK");case 49:_context9.prev = 49;_context9.t0 = _context9["catch"](0);return _context9.abrupt("return", _context9.t0);case 52:case "end":return _context9.stop();}}}, _callee9, this, [[0, 49]]);}));return _getAccount.apply(this, arguments);}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 8)["default"]))

/***/ }),
/* 26 */
/*!****************************************************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskPage/taskPage.css?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_taskPage_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!./taskPage.css?vue&type=style&index=0&lang=css& */ 27);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_taskPage_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_taskPage_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_taskPage_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_taskPage_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_taskPage_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 27 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskPage/taskPage.css?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/*!***************************************************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/propertyPage/propertyPage.js?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_propertyPage_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./propertyPage.js?vue&type=script&lang=js& */ 33);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_propertyPage_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_propertyPage_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_propertyPage_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_propertyPage_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_propertyPage_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 33 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/propertyPage/propertyPage.js?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, uniCloud) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));








var _pmSerTools = _interopRequireDefault(__webpack_require__(/*! ../../utils/pmSerTools.js */ 25));
var _pmJSTools = _interopRequireDefault(__webpack_require__(/*! ../../utils/pmJSTools.js */ 24));
var _util = _interopRequireDefault(__webpack_require__(/*! ../../utils/util.js */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}var _require = __webpack_require__(/*! ../../utils/pmJSTools.js */ 24),IsNullOrEmpty = _require.IsNullOrEmpty,DateChange = _require.DateChange,GetNum = _require.GetNum; // const pmJSTools = require("../../utils/pmJSTools.js").default;
// const pmSerTools = require("../../utils/pmSerTools.js").default;
// const util = require("../../utils/util.js").default;
var app = getApp();var wayIndex = -1;var school_area = '';
var grade = '';
var arrayHeight = 0; // miniprogram/pages/propertyPage/propertyPage.js
var _default =
{
  data: function data() {
    return {
      LastDateTime: Date.now(),
      dataType: "",

      mainTitle: "",
      subTips: "",
      hiddenName: false,

      btnCommandName: "确认",
      btnCommandName_id: "",

      upBtnTips: "",
      downBtnTips: "",
      ZCTProductURL: null,
      PicselectedStyle: " box-shadow: 2px 2px 5px #000;",

      PicPath: "",
      pmDialog: false,
      dialogMainTitle: "",
      dialogMainContent: "",
      dialogSubOperation: "",

      dialogMainOperation: "",

      IsFillHelp: false,

      IsFillHelpSwitch: true,

      IsFillHelpSwitchByPO: true,
      //默认按单数
      IsFillHelpSwitchByNum: false,
      //默认每单产量
      IsLastPIFillHelpSwitch: true,
      //是否使用标准工序创建
      IsPIlength: false,
      //是否有标准工序
      pmShowBtn: false,
      //提示消息弹框是否显示两个按钮。false：左边按钮隐藏；true:两个按钮都显示
      //编辑按钮的属性
      isConfButtonDisabled: true,
      //true 禁用按钮；false 启用按钮
      loadingMark: "",
      //按钮内是否有加载中的样式//loadingMark: "weui-loading",
      confirmBtnClass: 'weui-btn weui-btn_primary weui-btn_disabled',
      topTips: false,
      //顶部异常提醒
      topTipsStr: "",
      //顶部异常提醒
      fillBlock: {
        fillRemind: "填写提醒",
        autoFiller: "POAutoCreate",
        fillItemList: [{
          fillTitle: "填写内容",
          fillTitleRight: "默认后缀",
          fillChartURL: "",
          //可为空
          fillTip: "填写提示",
          fillType: "TXT",
          //填写类型: TXT NUM LIST DATETIME
          filleValue: "内容",
          fillHelpList: [],
          //备选项
          editable: true,
          fillID: "" //填写项字段名，不在前端显示
        }] },


      PMCOIDataEdit: {},
      //存放用来编辑的本条COI数据 
      inputValue: '',
      //【联想效果】点击联想结果项之后替换到文本框的值
      bindSource: [],
      //【联想效果】绑定到联想下拉框的数据，根据用户输入动态变化
      hideScroll: true,
      //【联想效果】是否隐藏联想下拉框
      PO: {},
      tempPOID: "",
      TempSourceTaskID: "",
      //分发来源COI任务ID
      TempSourceType: "",
      //分发来源类型
      TempSourcePositionID: "",
      //分发来源位置任务ID
      TempSourceCOIData: {},
      //分发来源COI数据
      TempTaskNum: 0,
      //分发来源任务数量
      TempPlanDeliDateShort: "",
      //分发来源计划交付时间
      TempSourceTaskStructure: {},
      //来源任务结构
      PMPIList: [],
      arrayHeight: 0,
      j: 0,
      M: 0,
      scrollTop: "",
      toView: "",
      autoFiller: false,
      theme: "",
      hide: false,
      PMCOI: "",
      PMInnerCustomerOrderItemID: "",
      PMCOIList: "" };

  },

  components: {},
  props: {},


  onLoad: function onLoad(options) {var _this = this;
    var that = this;
    this.dataType = options.dataType;
    // this.setData({
    // 	dataType: this.dataType
    // });
    that.datatype = this.dataType;
    switch (this.dataType) {
      case "PMPOEdit":
      case "POAddNew":{
          var btnSelectedStyle = " box-shadow: 2px 2px 5px #000;";

          var btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;";
          that.PicselectedStyle = btnUnSelectedStyle;
          if (this.dataType == "PMPOEdit") {
            // this.setData({
            // 	IsFillHelp: false,
            // 	
            // 	IsFillHelpSwitch: false
            // });
            that.IsFillHelp = false;
            that.IsFillHelpSwitch = false;
          } else {
            // this.setData({
            // 	IsFillHelp: true,
            // 	
            // 	IsFillHelpSwitch: true 

            // });
            that.IsFillHelp = true;
            that.IsFillHelpSwitch = true;
          }


          var PMCOI = {};
          var eventChannel = this.getOpenerEventChannel();
          eventChannel.on('PO', function (res) {
            _this.PO = res;
          });
          eventChannel.on('tempPOID', function (res) {
            _this.tempPOID = res;
          });
          eventChannel.on('PMCOI', function (PMCOI) {
            console.log(PMCOI);
            _this.mainTitle = PMCOI.PMInnerProductID + " " + PMCOI.PMInnerProductName;
            // this.setData({
            // 	mainTitle: this.mainTitle
            // });
            that.mainTitle = _this.mainTitle;
            var TempOrderNum = 0;

            if (_pmJSTools.default.IsNullOrEmpty(PMCOI.PMPOList)) {
              TempOrderNum = 0;
            } else {
              PMCOI.PMPOList.forEach(function (TempPO) {
                TempOrderNum = parseFloat(_pmJSTools.default.GetNum(TempOrderNum) + _pmJSTools.default.
                GetNum(TempPO.PMOrderNum));
              });
            }

            PMCOI.ZCTPlanNeedNum = parseFloat((_pmJSTools.default.GetNum(PMCOI.PMOrderNum) - _pmJSTools.default.
            GetNum(TempOrderNum)).toFixed(2));

            if (PMCOI.ZCTPlanNeedNum < 0) {
              PMCOI.ZCTPlanNeedNum = 0;
            }

            _this.subTips = "待计划:" + PMCOI.ZCTPlanNeedNum + "/总计划:" + PMCOI.PMOrderNum + "/完工:" +
            PMCOI.ZCTFinishedNum + "(" + PMCOI.PMOrderUnit + ")";
            // this.setData({
            // 	subTips: this.subTips
            // });
            that.subTips = _this.subTips;
            _this.PMCOI = PMCOI;

            if (_this.dataType == "POAddNew") {
              _this.GetLastALLPIData();
            }

            // this.setData({
            // 	ZCTProductURL: PMCOI.ZCTProductURL,
            // 	PMCOI: this.PMCOI
            // });
            that.ZCTProductURL = PMCOI.ZCTProductURL;
            that.PMCOI = _this.PMCOI;
            var fillBlock = {};
            fillBlock.fillRemind = "按照提示填写，生成新的生产计划";
            fillBlock.fillItemList = [];

            var fillItem1 = {};
            fillItem1.fillTitle = "计划单数(个)", fillItem1.fillChartURL = "",
            fillItem1.fillTip = "填写一次生成的订单数", fillItem1.fillType =
            "number", //填写类型: idcard,digit,number
            fillItem1.maxlength = "50", //
            // fillItem1.filleValue = null//
            fillItem1.fillHelpList = null, //
            fillItem1.fillHelpIndex = 0, //
            fillItem1.editable = true, fillItem1._id = "POAddPOs",
            fillBlock.fillItemList.push(fillItem1);
            var fillItem2 = {};
            fillItem2.fillTitle = "每单数量(" + PMCOI.PMOrderUnit + ")", fillItem2.fillChartURL =
            "", //可为空
            fillItem2.fillTip = "填写每个生产订单的数量", fillItem2.fillType =
            "digit", //填写类型: idcard,digit,number,DATETIME
            fillItem2.maxlength = "50", //
            // fillItem2.filleValue = null,
            fillItem2.fillHelpList = null,
            //fillItem2.fillHelpIndex = 0,
            fillItem2.editable = true, fillItem2._id = "POAddPONum",
            fillBlock.fillItemList.push(fillItem2);
            var fillItem3 = {};
            fillItem3.fillTitle = "首单计划完工日期", fillItem3.fillChartURL = "",
            fillItem3.fillTip = "请填写首单完工日期", fillItem3.fillType =
            "DATE", //填写类型: idcard,digit,number,DATETIME
            fillItem3.maxlength = "20", //
            fillItem3.fillHelpList = null,
            //fillItem3.fillHelpIndex = 0,
            fillItem3.startDate = new Date();
            fillItem3.endDate = new Date() + 5 * 365;
            fillItem3.editable = true, fillItem3._id = "POAddFirstDate",
            fillBlock.fillItemList.push(fillItem3);

            if (_this.dataType == 'POAddNew') {
              var fillItem4 = {};
              fillItem4.fillTitle = "相隔天数", fillItem4.fillChartURL = "",
              fillItem4.fillTip = "0表示当天", fillItem4.fillTip = "请选择计划完工时间策略", fillItem4.
              fillType = "number",
              fillItem4.maxlength = "50", //
              fillItem4.fillValue = null,
              fillItem4.fillHelpList = null,
              fillItem4.fillHelpIndex = 0,
              fillItem4.editable = true, fillItem4._id = "POAddDays",
              fillBlock.fillItemList.push(fillItem4);
            }

            if (_this.dataType == "PMPOEdit") {
              if (_this.PO != null) {
                fillItem1.fillValue = "1";
                fillItem1.filldisabled = true, fillItem2.fillValue = _this.PO.PMOrderNum,
                fillItem3.fillValue = _this.PO.ZCTlanStockInTimeShort;
              }
            }

            _this.fillBlock = fillBlock;
            that.fillBlock = _this.fillBlock;
            that.autoFiller = "PMPOEdit";
          });
          break;
        }

      case "PMCOIAddNew":{
          var btnSelectedStyle = " box-shadow: 2px 2px 5px #000;";

          var btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;";

          // this.setData({
          // 	PicselectedStyle: btnSelectedStyle //COI可修改浮起

          // });
          that.PicselectedStyle = btnSelectedStyle;
          var _eventChannel = this.getOpenerEventChannel();
          var that = this;
          _eventChannel.on('PMCOIList', function (PMCOIList) {
            that.PMCOIList = PMCOIList;

            console.log(PMCOIList);
            _this.mainTitle = "交付任务";
            // this.setData({
            // 	mainTitle: this.mainTitle
            // });
            that.mainTitle = _this.mainTitle;
            _this.subTips = "交付任务数据创建";
            // this.setData({
            // 	subTips: this.subTips
            // }); //交付任务创建，给个默认显示的图片
            that.subTips = _this.subTips;
            // this.setData({
            // 	ZCTProductURL: "http://zctmes2021-test-9gyl6ila6a31bc71.7a63-zctmes2021-test-9gyl6ila6a31bc71-1304681996/PMCOIProductPic/zanwutupian2.png"
            // });
            that.ZCTProductURL =
            "https://7463-tcb-ecxw1hs9f19080-6d00j26b1957e-1307375483.tcb.qcloud.la/age.jpg";
            var PMCOIData = [];
            _this.LoadPMCOIData(PMCOIData, "PMCOIAddNew");
          });
          break;
        }

      case "PMCOIEdit":
        //修改COI
        {
          var btnSelectedStyle = " box-shadow: 2px 2px 5px #000;"; //用于动态表达按钮选中的状态

          var btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;"; //用于动态表达按钮没有选中的状态

          // this.setData({
          // 	PicselectedStyle: btnSelectedStyle //COI可修改浮起

          // });
          that.PicselectedStyle = btnSelectedStyle;
          var _eventChannel2 = this.getOpenerEventChannel();
          var that = this;
          _eventChannel2.on('PMCOIList', function (PMCOIList) {
            that.PMCOIList = PMCOIList; //从调用方接下 that.data.PMCOIList， 准备返回使用。

            console.log(PMCOIList);
            _this.mainTitle = "交付任务";
            // this.setData({
            // 	mainTitle: this.mainTitle
            // });
            that.mainTitle = _this.mainTitle;
            _this.subTips = "交付任务数据编辑";
            // this.setData({
            // 	subTips: this.subTips
            // });
            that.subTips = _this.subTips;
            var PMCOIData = _pmJSTools.default.getOneControlFromList(options.PMCOI_id, _this.PMCOIList);
            _this.LoadPMCOIData(PMCOIData, "PMCOIEdit");
            _this.PMCOIDataEdit = PMCOIData; //将本条待编辑的COI,放到PMCOIDataEdit里面暂存
          });
          break;
        }

      case "PMCOIOpen":{
          var btnSelectedStyle = " box-shadow: 2px 2px 5px #000;"; //用于动态表达按钮选中的状态

          var btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;"; //用于动态表达按钮没有选中的状态

          // this.setData({
          // 	PicselectedStyle: btnSelectedStyle //COI可修改浮起

          // });
          that.PicselectedStyle = btnSelectedStyle;
          this.mainTitle = "交付任务";
          // this.setData({
          // 	mainTitle: this.mainTitle
          // });
          that.mainTitle = this.mainTitle;
          this.subTips = "交付任务数据编辑";
          // this.setData({
          // 	subTips: this.subTips
          // });
          that.subTips = this.subTips;
          var PMCOIData = _pmJSTools.default.getOneControlFromList(options.PMCOI_id, this.PMCOIList);
          this.LoadPMCOIData(PMCOIData, "PMCOIOpen");
        }
      //查看COI

      case "PMCOIShow":{
          var btnSelectedStyle = " box-shadow: 2px 2px 5px #000;"; //用于动态表达按钮选中的状态

          var btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;"; //用于动态表达按钮没有选中的状态

          // this.setData({
          // 	PicselectedStyle: btnSelectedStyle //COI可修改浮起

          // });
          that.PicselectedStyle = btnSelectedStyle; //COI可修改浮起
          var _eventChannel3 = this.getOpenerEventChannel();
          var that = this;
          _eventChannel3.on('PMCOIList', function (PMCOIList) {
            that.PMCOIList = PMCOIList; //从调用方接下 that.data.PMCOIList， 准备返回使用。

            console.log(PMCOIList);
            _this.mainTitle = "交付任务";
            // this.setData({
            // 	mainTitle: this.mainTitle
            // });
            that.mainTitle = _this.mainTitle;
            _this.subTips = "查看交付任务";
            // this.setData({
            // 	subTips: this.subTips
            // });
            that.subTips = _this.subTips;
            var PMCOIData = _pmJSTools.default.getOneControlFromList(options.PMCOI_id, _this.PMCOIList);
            _this.LoadPMCOIData(PMCOIData,
            "PMCOIShow"); // this.data.PMCOIDataEdit=PMCOIData //将本条待编辑的COI,放到PMCOIDataEdit里面暂存
          });
          break;
        }

      case "PMCOIDistribute":{
          //通过移交分发创建COI
          this.TempSourceTaskID = options.TaskID;
          this.TempSourceType = options.SourceType;
          this.TempSourcePositionID = options.PositionID;
          this.TempTaskNum = options.TaskNum;
          this.TempPlanDeliDateShort = options.PlanDeliDateShort;
          var TempJsonSourceTaskStructure = options.JsonSourceStructure;
          this.TempSourceTaskStructure = JSON.parse(TempJsonSourceTaskStructure);
          var _eventChannel4 = this.getOpenerEventChannel();
          _eventChannel4.on('PMCOI', function (res) {
            _this.TempSourceCOIData = res;

            if (_pmJSTools.default.IsNullOrEmpty(_this.TempSourceCOIData)) {
              var that = _this;
              // that.setData({
              // 	topTips: true,
              // 	topTipsStr: "未获取到来源交付任务信息"
              // });
              that.topTips = true;
              that.topTipsStr = "未获取到来源交付任务信息";
              setTimeout(function () {
                //时间限制
                // that.setData({
                // 	topTips: false,
                // 	topTipsStr: ""
                // });
                that.topTips = false;
                that.topTipsStr = "";
              }, 3000);
              return;
            }

            ;
            _this.LoadPMCOIData(_this.TempSourceCOIData, "PMCOIDistribute");
          });
          this.mainTitle = "交付任务";
          // this.setData({
          // 	mainTitle: this.mainTitle
          // });
          that.mainTitle = this.mainTitle;
          this.subTips = "交付任务数据创建";
          // this.setData({
          // 	subTips: this.subTips
          // }); //绑定失败，可以重复绑定
          that.subTips = this.subTips;
          // this.setData({
          // 	loadingMark: "",
          // 	isConfButtonDisabled: false,
          // 	//启用按钮
          // 	confirmBtnClass: "weui-btn weui-btn_primary"
          // });
          that.loadingMark = "";
          that.isConfButtonDisabled = false;
          that.confirmBtnClass = "weui-btn weui-btn_primary";
          break;
        }

      default:{
          break;
        }}

  },

  /**
      * 生命周期函数--监听页面初次渲染完成
      */
  onReady: function onReady() {},

  /**
                                   * 生命周期函数--监听页面显示
                                   */
  onShow: function onShow() {},

  /**
                                 * 生命周期函数--监听页面隐藏
                                 */
  onHide: function onHide() {},

  /**
                                 * 生命周期函数--监听页面卸载
                                 */
  onUnload: function onUnload() {},

  /**
                                     * 页面相关事件处理函数--监听用户下拉动作
                                     */
  onPullDownRefresh: function onPullDownRefresh() {},

  /**
                                                       * 页面上拉触底事件的处理函数
                                                       */
  onReachBottom: function onReachBottom() {},

  /**
                                               * 用户点击右上角分享
                                               */
  onShareAppMessage: function onShareAppMessage(event) {
    // 来自页面内转发按钮
    console.log(event.target);
    return {
      title: '制程通 制造管理',
      path: this.route + '?dataType=PMCOIEdit&PMCOI_id=' + event.currentTarget.id,
      imageUrl: this.ZCTProductURL };

  },
  methods: {
    //选择生产环境及任务相关图片，最多6张需做限制
    chooseImage: function chooseImage(e) {var _this2 = this;
      var that = this;
      var count = 6;
      var tempfillItem = _pmJSTools.default.getOneControlFromList("ZCTTaskPictureLst", this.fillBlock.fillItemList);

      if (!_pmJSTools.default.IsNullOrEmpty(tempfillItem.fillImgLst)) {
        count = count - tempfillItem.fillImgLst.length;
      }

      wx.chooseImage({
        count: count,
        sizeType: ['original', 'compressed'],
        // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'],
        // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          console.log(e);

          if (!_pmJSTools.default.IsNullOrEmpty(tempfillItem.fillImgLst) && tempfillItem.fillImgLst.
          length + res.tempFilePaths.length > 6) {

            // that.setData({
            // 	topTips: true,
            // 	topTipsStr: "最多只能上传6张图片！"
            // });
            that.topTips = true;
            that.topTipsStr = "最多只能上传6张图片！";

            setTimeout(function () {
              //时间限制
              // that.setData({
              // 	topTips: false,
              // 	topTipsStr: ""
              // });
              that.topTips = false;
              that.topTipsStr = "";
            }, 3000);
            return;
          } //判断当前图片是否大于6张，如果大于6张，则隐藏增加按钮


          if (tempfillItem.fillImgLst.length + res.tempFilePaths.length == 6) {
            tempfillItem.AddPic = false;
          } else {
            tempfillItem.AddPic = true;
          }

          tempfillItem.fillImgLst = tempfillItem.fillImgLst.concat(res.tempFilePaths);
          // this.setData({
          // 	fillBlock: this.fillBlock
          // }); //因为改变了值，设置按钮可以执行
          that.fillBlock = _this2.fillBlock; //因为改变了值，设置按钮可以执行
          // this.setData({
          // 	isConfButtonDisabled: false,
          // 	confirmBtnClass: "weui-btn weui-btn_primary" //设置为可以编辑
          that.isConfButtonDisabled = false;
          that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑
          // });
        } });

    },
    //查看生产环境及任务相关图片
    previewImage: function previewImage(e) {
      var tempfillItem = _pmJSTools.default.getOneControlFromList("ZCTTaskPictureLst", this.fillBlock.fillItemList);
      wx.previewImage({
        current: e.currentTarget.id,
        // 当前显示图片的http链接
        urls: tempfillItem.fillImgLst // 需要预览的图片http链接列表
      });

    },
    //长按删除图片
    deleteImage: function deleteImage(e) {
      var that = this;
      var tempfillItem = _pmJSTools.default.getOneControlFromList("ZCTTaskPictureLst", that.fillBlock.
      fillItemList); //var images = that.data.images;

      var index = tempfillItem.fillImgLst.indexOf(e.currentTarget.
      id); //e.currentTarget.dataset.index;//获取当前长按图片下标
      // tempfillItem.fillindex=index
      // that.setData({
      //   fillBlock: that.data.fillBlock
      // })
      that.fillBlock = that.data.fillBlock;
      wx.showModal({
        title: '提示',
        content: '确定要删除此图片吗？',
        success: function success(res) {
          if (res.confirm) {
            if (index != -1) {
              tempfillItem.fillImgLst.splice(index, 1);
            }
          } else if (res.cancel) {
            // tempfillItem.fillindex=-1
            // that.setData({
            //   fillBlock: that.data.fillBlock
            // })
            that.fillBlock = this.data.fillBlock;
            return false;
          } //  //将长按的图片背景色恢复
          // tempfillItem.fillindex=-1
          //判断当前新增图片按钮是否隐藏，如果隐藏了，修改为不隐藏（因为已经做了删除操作）


          if (tempfillItem.AddPic == false) {
            tempfillItem.AddPic = true;
          }

          // that.setData({
          // 	fillBlock: that.fillBlock
          // }); //因为改变了值，设置按钮可以执行
          that.fillBlock = that.fillBlock;
          // that.setData({
          // 	isConfButtonDisabled: false,
          // 	confirmBtnClass: "weui-btn weui-btn_primary" //设置为可以编辑

          // });
          that.isConfButtonDisabled = false;
          that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑
        } });

    },
    //选择产品图片
    onGetPic: function onGetPic(event) {
      // if (this.data.dataType == "POAddNew") {
      //   //PO的图片和PMCOI应该是一致的，所以不能改
      //   return;
      // }
      var that = this;
      uni.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function success(res) {
          that.ZCTProductURL = res.tempFilePaths;
          that.isConfButtonDisabled = false;
          that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑

          uniCloud.uploadFile({
            filePath: tempFilePaths,
            cloudPath: "PMCOIProductPic/",
            success: function success(res) {
              that.ZCTProductURL = res.tempFilePaths;
              that.isConfButtonDisabled = false;
              that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑
            },
            fail: function fail(res) {},
            complete: function complete() {} });

        } });

    },
    // onGetPic: function(event) {
    // 	var that = this;
    // 	// uni.chooseImage({
    // 	// 	sizeType: ['original', 'compressed'],
    // 	// 	sourceType: ['album', 'camera'],
    // 	// 	success: (res) => {
    // 	// 		//let tempFilePaths = "PMCOIProductPic/"+ res.tempFilePaths[0];
    // 	// 		let tempFilePaths = res.tempFilePaths[0];
    // 	// 		let str = res.tempFilePaths[0].substr(res.tempFilePaths[0].lastIndexOf('.'));

    // 	// 		//tempFilePaths.forEach((item) => {
    // 	// 		 uniCloud.uploadFile({
    // 	// 				filePath: tempFilePaths,
    // 	// 				cloudPath: "PMCOIProductPic/",
    // 	// 				success(res) {
    // 	// 					that.ZCTProductURL = res.tempFilePaths;
    // 	// 					that.isConfButtonDisabled = false;
    // 	// 					that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑
    // 	// 				},
    // 	// 				fail(res) {},
    // 	// 				complete() {}
    // 	// 			});
    // 	// 		//})
    // 	// 	}
    // 	// })


    // 	uni.chooseImage({
    // 		count: 1, //默认9
    // 		sizeType: ['original', 'compressed'],
    // 		sourceType: ['album', 'camera'],
    // 		success: (res) => {
    // 			let tiemr = new Date();
    // 			let address = tiemr.getFullYear() + '' + (tiemr.getMonth() + 1) + '' + tiemr
    // 				.getDate();
    // 			address = 'PMCOIProductPic/' + address + '/';
    // 			var imageSrc = res.tempFilePaths[0];
    // 			let str = res.tempFilePaths[0].substr(res.tempFilePaths[0].lastIndexOf('.'));
    // 			let nameStr = address + tiemr.getTime() + str;
    // 			let ossUrl = 'tcb-ecxw1hs9f19080-6d00j26b1957e';
    // 			uni.uploadFile({
    // 				url: ossUrl, //输入你的bucketname.endpoint
    // 				filePath: imageSrc,
    // 				fileType: 'image',
    // 				name: 'file',
    // 				success: (res) => {
    // 					if (res.statusCode == '200') {
    // 						consonle.log(ossUrl + nameStr);
    // 					} else {
    // 						consonle.log(res);
    // 					}
    // 				}
    // 			});
    // 		}
    // 	});
    // 	// 	//前端代码
    // 	// 	uni.chooseImage({
    // 	// 		count: 1,
    // 	// 		success(res) {
    // 	// 			console.log(res);
    // 	// 			if (res.tempFilePaths.length > 0) {
    // 	// 				let filePath = res.tempFilePaths[0]
    // 	// 				//进行上传操作

    // 	// 				// promise方式
    // 	// 				const result = uniCloud.uploadFile({
    // 	// 					filePath: filePath,
    // 	// 					cloudPath: 'a.jpg',
    // 	// 					onUploadProgress: function(progressEvent) {
    // 	// 						console.log(progressEvent);
    // 	// 						var percentCompleted = Math.round(
    // 	// 							(progressEvent.loaded * 100) / progressEvent.total
    // 	// 						);
    // 	// 					}
    // 	// 				});

    // 	// 				// callback方式，与promise方式二选一即可
    // 	// 				// uniCloud.uploadFile({
    // 	// 				// 	filePath: filePath,
    // 	// 				// 	cloudPath: 'a.jpg',
    // 	// 				// 	onUploadProgress: function(progressEvent) {
    // 	// 				// 		console.log(progressEvent);
    // 	// 				// 		var percentCompleted = Math.round(
    // 	// 				// 			(progressEvent.loaded * 100) / progressEvent.total
    // 	// 				// 		);
    // 	// 				// 	},
    // 	// 				// 	success() {},
    // 	// 				// 	fail() {},
    // 	// 				// 	complete() {}
    // 	// 				// });

    // 	// 			}
    // 	// 		}
    // 	// 	});
    // },

    //点选输入值入口
    bindListChange: function bindListChange(event) //一个函数实现动态点选功能共用
    {
      var that = this;
      console.log(event);
      var tempfillItem = _pmJSTools.default.getOneControlFromList(event.currentTarget.id, this.fillBlock.
      fillItemList); //为创建交付任务时，修改任务类型时才会去改变数据、重新加载表单。编辑和查看修改交付任务不做任何操作

      if (this.subTips == "交付任务数据创建" && tempfillItem.fillTitle == "任务类型") {
        tempfillItem.fillHelpIndex = event.detail.value;
        tempfillItem.fillValue = tempfillItem.fillHelpList[tempfillItem.fillHelpIndex];
        // this.setData({
        // 	fillBlock: this.fillBlock
        // });
        that.fillBlock = this.fillBlock;
        var PMCOIData = [];

        if (tempfillItem.fillValue == "劳务") {
          this.LoadPMCOIDataLabor(PMCOIData, "PMCOIAddNew");
        } else {
          this.LoadPMCOIDataOrdedrProduction(PMCOIData, "PMCOIAddNew");
        }
      } else {
        tempfillItem.fillHelpIndex = event.detail.value;
        tempfillItem.fillValue = tempfillItem.fillHelpList[tempfillItem.fillHelpIndex];
        // this.setData({
        // 	fillBlock: this.fillBlock
        // });
        that.fillBlock = this.fillBlock;
        this.onAutoHelpFill(event); //因为改变了值，设置按钮可以执行

        // this.setData({
        // 	isConfButtonDisabled: false,
        // 	confirmBtnClass: "weui-btn weui-btn_primary" //设置为可以编辑

        // });
        that.isConfButtonDisabled = false;
        that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑
      }
    },
    //日期输入值函数入口
    bindDateChange: function bindDateChange(event) //一个函数实现动态点选功能共用
    {
      var that = this;
      console.log(event);
      var tempfillItem = _pmJSTools.default.getOneControlFromList(event.currentTarget.id, this.fillBlock.fillItemList);
      tempfillItem.fillValue = event.detail.value.replace(/-/g,
      "/"); //pciker选的日期格式是 year-month-day 和常见的year/month/day 不同，有点烦人，所以作此修改

      // this.setData({
      // 	fillBlock: this.fillBlock
      // }); //因为改变了值，设置按钮可以执行
      that.fillBlock = this.fillBlock;
      // this.setData({
      // 	isConfButtonDisabled: false,
      // 	confirmBtnClass: "weui-btn weui-btn_primary" //设置为可以编辑
      // });
      that.isConfButtonDisabled = false;
      that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑

    },
    //时间输入值函数入口
    bindTimeChange: function bindTimeChange(event) //一个函数实现动态点选功能共用
    {
      var that = this;
      console.log(event);
      var tempfillItem = _pmJSTools.default.getOneControlFromList(event.currentTarget.id, this.fillBlock.fillItemList);
      tempfillItem.fillValue = event.detail.value;
      // this.setData({
      // 	fillBlock: this.fillBlock
      // }); //因为改变了值，设置按钮可以执行
      that.fillBlock = this.fillBlock;
      // this.setData({
      // 	isConfButtonDisabled: false,
      // 	confirmBtnClass: "weui-btn weui-btn_primary" //设置为可以编辑

      // });
      that.isConfButtonDisabled = false;
      that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑
    },
    //文本输入值函数入口
    bindTxtChange: function bindTxtChange(event) //一个函数实现动态点选功能共用
    {
      var that = this;
      console.log(event);
      var tempfillItem = _pmJSTools.default.getOneControlFromList(event.currentTarget.id, this.fillBlock.fillItemList);
      var nickNameOld = event.detail.value;
      tempfillItem.fillValue = nickNameOld.replace(/\s+/g, '');
      // this.setData({
      // 	fillBlock: this.fillBlock
      // });
      that.fillBlock = this.fillBlock;
      this.onAutoHelpFill(event); //因为改变了值，设置按钮可以执行

      // this.setData({
      // 	isConfButtonDisabled: false,
      // 	confirmBtnClass: "weui-btn weui-btn_primary" //设置为可以编辑

      // });
      that.isConfButtonDisabled = false;
      that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑
      if (event.currentTarget.id == "PMInnerProductID") {
        //当前输入的为产品号，进行联想
        var TempInputProductID = event.detail.value; //匹配的结果

        var newSource = [];

        if (TempInputProductID != "") {
          //获取缓存中产品信息
          var TempStorageProductArr = new Array();
          var TempProductStr = wx.getStorageSync('ProductList'); //存在本地缓存时进行联想

          if (!_pmJSTools.default.IsNullOrEmpty(TempProductStr)) {
            TempStorageProductArr = JSON.parse(TempProductStr); // 对于数组array进行遍历，功能函数中的参数 `e`就是遍历时的数组元素值。

            TempStorageProductArr.forEach(function (e) {
              // 用户输入的字符串如果在数组中某个元素中出现，将该元素存到newSource中
              if (e.ProductID.indexOf(TempInputProductID) != -1) {
                newSource.push(e.ProductID + ":" + e.ProductName);
              }
            }); // 如果匹配结果存在，那么将其返回，相反则返回空数组

            if (newSource.length != 0) {
              // this.setData({
              // 	// 匹配结果存在，显示自动联想词下拉列表
              // 	hideScroll: false,
              // 	bindSource: newSource,
              // 	arrayHeight: newSource.length * 71
              // });
              that.hideScroll = false;
              that.bindSource = newSource;
              that.arrayHeight = newSource.length * 71;
            } else {
              // this.setData({
              // 	// 匹配无结果，不现实下拉列表
              // 	hideScroll: true,
              // 	bindSource: []
              // });
              that.hideScroll = true;
              that.bindSource = [];
            }
          }
        } else {
          // this.setData({
          // 	// 匹配无结果，不现实下拉列表
          // 	hideScroll: true,
          // 	bindSource: []
          // });
          that.hideScroll = true;
          that.bindSource = [];
        }
      }

      if (event.currentTarget.id == "ZCTFeesInstructions") //如果是“填写费用及相关说明”，修改对应已输入的字数inputNumWords
        {
          var tempfillItem = _pmJSTools.default.getOneControlFromList(event.currentTarget.id, this.fillBlock.
          fillItemList);
          var nickNameOld = event.detail.value;
          nickNameOld = nickNameOld.replace(/\s+/g, '');
          tempfillItem.inputNumWords = nickNameOld.length; //修改费用及相关说明已输入的字数

          // this.setData({
          // 	fillBlock: this.fillBlock
          // });
          that.fillBlock = this.fillBlock;
        }
    },
    // 用户点击选择某个联想字符串时，获取该联想词，并清空提醒联想词数组
    itemtap: function itemtap(e) {
      var that = this;
      var TempSelectValue = e.target.id; //选择项的值

      var TempSelectProductId = ""; //选择项的产品号

      var TempSelectProductName = ""; //选择项的产品名称

      var TempAIndex = TempSelectValue.indexOf(':');

      if (TempAIndex == -1) {
        //联想结果中没有分号
        TempSelectProductId = TempSelectValue;
      } else {
        TempSelectProductId = TempSelectValue.substring(0, TempAIndex);
        TempSelectProductName = TempSelectValue.substring(TempAIndex + 1, TempSelectValue.length);
      }

      var TempProductIdIndex = 0; //产品号在fillBlock.fillItemList中的下标

      var TempProductNameIndex = 0; //产品名称在fillBlock.fillItemList中的下标

      var TempIsFindId = false; //是否找到产品号输入框

      var TempIsFindName = false; //是否找到产品名称输入框

      for (var i = 0; i < this.fillBlock.fillItemList.length; i++) {
        if (this.fillBlock.fillItemList[i]._id == "PMInnerProductID") //遍历找到产品名称输入框的下标
          {
            TempProductIdIndex = i;
            TempIsFindId = true;
          }

        if (this.fillBlock.fillItemList[i]._id == "PMInnerProductName") {
          TempProductNameIndex = i;
          TempIsFindName = true;
        }
      }

      if (TempIsFindId) {
        //找到了产品号输入框，进行赋值
        var TempPMInnerProductIdObj = 'fillBlock.fillItemList[' + TempProductIdIndex +
        '].fillValue'; //给产品名赋值

        // this.setData({ //[TempPMInnerProductIdObj]: TempSelectProductId
        // });
        //try fix
        var _TempSelectProductId = TempSelectProductId;var _TempSelectProductId2 = _slicedToArray(_TempSelectProductId, 1);TempPMInnerProductIdObj = _TempSelectProductId2[0];
      }

      if (TempIsFindName) {
        //找到了产品名称输入框，进行赋值
        var TempPMInnerProductNameObj = 'fillBlock.fillItemList[' + TempProductNameIndex +
        '].fillValue'; //给产品名赋值

        // this.setData({ //[TempPMInnerProductNameObj]: TempSelectProductName
        // });
        //try fix
        var _TempSelectProductNam = TempSelectProductName;var _TempSelectProductNam2 = _slicedToArray(_TempSelectProductNam, 1);TempPMInnerProductNameObj = _TempSelectProductNam2[0];
      }

      // this.setData({
      // 	// 当用户选择某个联想词，隐藏下拉列表
      // 	hideScroll: true,
      // 	bindSource: []
      // });
      that.hideScroll = true;
      that.bindSource = [];
    },
    //命令按钮函数入口(新增或编辑的实现)
    bindButtonTap: function () {var _bindButtonTap = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(event) {var _this3 = this;var that, funcPra, TempUnit, tempItem, unittitle, DS, TempDN, TempDateSelect, TempDateNow, TempDateSelect2, TempDateNow2, tempFileSuffix, remotefileName, tempUploadRes, tempfillItem, TempI, tempFileSuffixTaskP, upoderesult, TempPlanDate, TempPlanDateMonth, TempPlanDateDay, tempRes, temp_id, tempLst, tempPage, prevPage, tempPMPOList, tempPlannedNum, TempItem, TempDate, TempDateTime, TempFinDateTime, TempOrderSumNum, tempI, PMPO, TempOrderNum, TempIndex, TempPOProductNum, _tempPage, _prevPage, TempUnitTitle, TempPlanDeliDate, TempUpdateCOI, TempPoIndex, TempPIIndex, TempSPTIndex, TempSPT, index, _tempPage2, _prevPage2;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(





                this.dataType == "PMCOIAddNew" || this.dataType == "PMCOIEdit")) {_context.next = 152;break;}if (!(
                this.isConfButtonDisabled == true)) {_context.next = 3;break;}return _context.abrupt("return");case 3:

                //设置按钮为运行中状态

                that = this;
                that.loadingMark = "weui-loading";
                that.isConfButtonDisabled = true; //禁用按钮
                funcPra = {};
                funcPra.PMCOI = this.PMCOIDataEdit;
                wx.setStorage({
                  key: 'PMCOI',
                  data: funcPra.PMCOI });

                TempUnit = ""; //单位

                for (tempItem in this.fillBlock.fillItemList) {
                  unittitle = this.fillBlock.fillItemList[tempItem].fillTitle;

                  if (unittitle == "单位") {
                    TempUnit = this.fillBlock.fillItemList[tempItem].fillValue;
                  }
                } //funcPra.PMCOI = {} //准备一个空的PMCOI
                //通过控件获取的值自动进行输入值格式和正确性验证
                _context.t0 = _regenerator.default.keys(

                this.fillBlock.fillItemList);case 12:if ((_context.t1 = _context.t0()).done) {_context.next = 67;break;}tempItem = _context.t1.value;if (!(
                !this.fillBlock.fillItemList[tempItem].fillValue && this.fillBlock.
                fillItemList[tempItem].fillTitle != "费用及相关说明" && this.fillBlock.
                fillItemList[tempItem].fillTitle != "生产环境及任务相关图片")) {_context.next = 23;break;}
                that = this;
                that.topTips = true;
                that.topTipsStr = "请输入" + this.fillBlock.fillItemList[tempItem].fillTitle;
                setTimeout(function () {
                  //时间限制
                  that.topTips = false;
                  that.topTipsStr = "";
                }, 3000); //设置按钮为启用状态
                that.loadingMark = "";
                that.isConfButtonDisabled = false; //启用按钮
                that.confirmBtnClass = "weui-btn weui-btn_primary";return _context.abrupt("return");case 23:if (!(



                this.fillBlock.fillItemList[tempItem].fillTitle == "交付时间")) {_context.next = 39;break;}
                DS = new Date(this.fillBlock.fillItemList[tempItem].fillValue);
                TempDN = new Date();
                TempDateSelect = DS.getFullYear() + "/" + (DS.getMonth() + 1) + "/" +
                DS.getDate();
                TempDateNow = TempDN.getFullYear() + "/" + (TempDN.getMonth() + 1) +
                "/" + TempDN.getDate();
                TempDateSelect2 = Date.parse(TempDateSelect);
                TempDateNow2 = Date.parse(TempDateNow);if (!(

                TempDateNow2 > TempDateSelect2)) {_context.next = 39;break;}
                that = this;

                that.topTips = true;
                that.topTipsStr = "交付时间需要大于当前时间！";
                setTimeout(function () {

                  that.topTips = false;
                  that.topTipsStr = "";
                }, 3000); //设置按钮为启用状态

                that.loadingMark = "";
                that.isConfButtonDisabled = false;
                that.confirmBtnClass = "weui-btn weui-btn_primary";return _context.abrupt("return");case 39:if (!(




                this.fillBlock.fillItemList[tempItem].fillTitle == "需求数量" || this.fillBlock.
                fillItemList[tempItem].fillTitle == "数量")) {_context.next = 64;break;}if (
                _pmJSTools.default.inputvalidation(this.fillBlock.fillItemList[tempItem].
                fillValue, "正浮点数")) {_context.next = 51;break;}
                that = this;

                that.topTips = true;
                that.topTipsStr = this.fillBlock.fillItemList[tempItem].fillTitle +
                "：请输入数字！";
                setTimeout(function () {
                  //时间限制

                  that.topTips = false;
                  that.topTipsStr = "";
                }, 3000); //设置按钮为启用状态

                that.loadingMark = "";
                that.isConfButtonDisabled = false; //启用按钮
                that.confirmBtnClass = "weui-btn weui-btn_primary"; //按钮设置为可以编辑
                return _context.abrupt("return");case 51:

                console.log(TempUnit);if (!(

                TempUnit == "件" || TempUnit == "个" || TempUnit == "套" ||
                TempUnit == "箱" || TempUnit == "袋")) {_context.next = 62;break;}if (
                _pmJSTools.default.inputvalidation(this.fillBlock.fillItemList[
                tempItem].fillValue, "验证非零的正整数")) {_context.next = 62;break;}
                that = this;

                that.topTips = true;
                that.topTipsStr = this.fillBlock.fillItemList[tempItem].
                fillTitle + "：请输入大于0的整数";
                setTimeout(function () {

                  that.topTips = false;
                  that.topTipsStr = "";
                }, 3000); //设置按钮为启用状态

                that.loadingMark = "";
                that.isConfButtonDisabled = false; //启用按钮
                that.confirmBtnClass = "weui-btn weui-btn_primary"; //按钮设置为可以编辑
                return _context.abrupt("return");case 62:



                funcPra.PMCOI[this.fillBlock.fillItemList[tempItem]._id] = parseFloat(
                _pmJSTools.default.GetNum(this.fillBlock.fillItemList[tempItem].
                fillValue)); //准备发往云端的值
                return _context.abrupt("continue", 12);case 64:




                funcPra.PMCOI[this.fillBlock.fillItemList[tempItem]._id] = this.fillBlock.
                fillItemList[tempItem].fillValue; //准备发往云端的值
                _context.next = 12;break;case 67: //提前再客户端获取一个动态ID值。


                if (this.dataType == "PMCOIAddNew") //新增COI时才需要赋值PMInnerCustomerOrderItemID
                  {
                    funcPra.PMCOI.PMInnerCustomerOrderItemID = _pmJSTools.default.GetSubObj([_pmJSTools.default.
                    GetSeqID("COI", 1), 0]);

                    funcPra.PMCOI.PMCreater = app.globalData.PMUserID;
                    funcPra.PMCOI.PMUserID = app.globalData._id;
                    funcPra.PMCOI.ZCTCreaterName = app.globalData.PMUserName;
                  }

                //上传产品图片
                //在执行数据上传前，先上传图片
                //上传不成功不影响后续执行，可以后面再加图片。
                if (_pmJSTools.default.IsNullOrEmpty(this.ZCTProductURL)) {_context.next = 104;break;}
                //注意： 如何是点选的图片会放在this.data.ZCTProductURL[0]里

                tempFileSuffix = _pmJSTools.default.getFileSuffix(this.ZCTProductURL[0]);if (!(

                tempFileSuffix != "" && tempFileSuffix.length !=
                1)) {_context.next = 89;break;}

                remotefileName = _pmJSTools.default.GetSeqID("", 1) + "-" + funcPra.PMCOI.
                PMInnerCustomerOrderItemID +
                tempFileSuffix; //配置远程文件名，使用PMInnerCustomerOrderItemID防重
                _context.next = 74;return (
                  _pmSerTools.default.UploadFile("PMCOIProductPic", this.
                  ZCTProductURL[0], remotefileName));case 74:tempUploadRes = _context.sent;if (!(

                tempUploadRes.errMsg == "OK")) {_context.next = 79;break;}
                funcPra.PMCOI.ZCTProductURL = tempUploadRes.
                result; //图片上传成功后，把云图片地址赋值给变量
                _context.next = 87;break;case 79:
                that = this;

                that.topTips = true;
                that.topTipsStr = "上传图片失败" + tempUploadRes.errMsg;
                setTimeout(function () {
                  //时间限制
                  that.topTips = false;
                  that.topTipsStr = "";
                }, 3000); //设置按钮为启用状态

                that.loadingMark = "";
                that.isConfButtonDisabled = false; //启用按钮
                that.confirmBtnClass = "weui-btn weui-btn_primary";return _context.abrupt("return");case 87:_context.next = 102;break;case 89:if (!(



                tempFileSuffix.length ==
                1)) {_context.next = 102;break;}if (!(



                funcPra.PMCOI.PMOrderProType == "订单生产" && this.ZCTProductURL ==
                "https://7463-tcb-ecxw1hs9f19080-6d00j26b1957e-1307375483.tcb.qcloud.la/age.jpg")) {_context.next = 101;break;}

                that = this;
                that.topTips = true;
                that.topTipsStr = "请选择产品图片！";
                setTimeout(function () {
                  //时间限制
                  // that.setData({
                  // 	topTips: false,
                  // 	topTipsStr: ""
                  // });
                  that.topTips = false;
                  that.topTipsStr = "";
                }, 3000); //设置按钮为启用状态

                that.loadingMark = "";
                that.isConfButtonDisabled = false; //启用按钮
                that.confirmBtnClass = "weui-btn weui-btn_primary";return _context.abrupt("return");case 101:


                funcPra.PMCOI.ZCTProductURL = this.ZCTProductURL;case 102:_context.next = 112;break;case 104:




                that = this;
                that.topTips = true;
                that.topTipsStr = "上传图片失败,请选择产品图片!";
                setTimeout(function () {
                  //时间限制
                  that.topTips = false;
                  that.topTipsStr = "";
                }, 3000); //设置按钮为启用状态
                that.loadingMark = "";
                that.isConfButtonDisabled = false; //启用按钮
                that.confirmBtnClass = "weui-btn weui-btn_primary";return _context.abrupt("return");case 112:


                //上传【生产环境及任务相关图片】
                funcPra.PMCOI.ZCTTaskPictureLst = [];
                tempfillItem = _pmJSTools.default.getOneControlFromList("ZCTTaskPictureLst", this.
                fillBlock.fillItemList);if (

                _pmJSTools.default.IsNullOrEmpty(tempfillItem.fillImgLst)) {_context.next = 139;break;}if (!(
                tempfillItem.fillImgLst.length > 6)) {_context.next = 124;break;}
                that = this;

                that.topTips = true;
                that.topTipsStr = "最多只能上传6张图片！";
                setTimeout(function () {
                  //时间限制

                  that.topTips = false;
                  that.topTipsStr = "";
                }, 3000); //设置按钮为启用状态

                that.loadingMark = "";
                that.isConfButtonDisabled = false; //启用按钮
                that.confirmBtnClass = "weui-btn weui-btn_primary";return _context.abrupt("return");case 124:



                TempI = 0;case 125:if (!(TempI < tempfillItem.fillImgLst.length)) {_context.next = 139;break;}

                tempFileSuffixTaskP = _pmJSTools.default.getStrsubstring(tempfillItem.
                fillImgLst[TempI], 0, 1);if (!(

                tempFileSuffixTaskP != "" && tempFileSuffixTaskP !=
                "c")) {_context.next = 135;break;}

                remotefileName = _pmJSTools.default.GetSeqID("", 1) + "-" + funcPra.PMCOI.
                PMInnerCustomerOrderItemID +
                tempFileSuffixTaskP; //配置远程文件名，使用PMInnerCustomerOrderItemID防重
                _context.next = 131;return (
                  _pmSerTools.default.UploadFile("PMCOIProductPic",
                  tempfillItem.fillImgLst[TempI], remotefileName));case 131:tempUploadRes = _context.sent;

                if (tempUploadRes.errMsg == "OK") {
                  //图片上传成功后，把云图片地址赋值给变量
                  upoderesult = tempUploadRes.result;
                  funcPra.PMCOI.ZCTTaskPictureLst.push(upoderesult);
                }_context.next = 136;break;case 135:

                if (tempFileSuffixTaskP == "c") {
                  funcPra.PMCOI.ZCTTaskPictureLst.push(tempfillItem.fillImgLst[
                  TempI]);
                }case 136:TempI++;_context.next = 125;break;case 139:




                if (funcPra.PMCOI.PMOrderProType == "劳务") {
                  funcPra.PMCOI.PMInnerProductID = funcPra.PMCOI.
                  PMInnerCustomerOrderItemID; //如果是劳务类型的，则任务号即为COI号
                } //计划交付时间格式处理


                TempPlanDate = new Array();
                TempPlanDate = funcPra.PMCOI.ZCTPlanDeliDateShort.split(
                "/");

                TempPlanDateMonth = TempPlanDate[1].length > 1 ? TempPlanDate[1] : "0" +
                TempPlanDate[1];
                TempPlanDateDay = TempPlanDate[2].length > 1 ? TempPlanDate[2] : "0" +
                TempPlanDate[2];
                funcPra.PMCOI.ZCTPlanDeliDateShort = TempPlanDate[0] + "/" + TempPlanDateMonth +
                "/" + TempPlanDateDay;
                console.log(funcPra);

                //COIAddNew 或者 PMCOIEdit
                _context.next = 148;return _pmSerTools.default.exePMCOI(this.dataType, funcPra);case 148:tempRes = _context.sent;
                console.log("从云函数返回的至为：" + tempRes.result.errMsg);
                if (tempRes.result.errMsg == "OK") {
                  _pmJSTools.default.UpdateProductStorge(funcPra.PMCOI.PMInnerProductID, funcPra.PMCOI.
                  PMInnerProductName);

                  for (tempItem in this.fillBlock.fillItemList) {
                    //条件判别  idcard,digit,number,DATETIME
                    this.fillBlock.fillItemList[tempItem].fillValue = funcPra.PMCOI[this.
                    fillBlock.fillItemList[tempItem]._id]; //从云端获得的值赋值
                  }

                  temp_id = "";

                  if (!_pmJSTools.default.IsNullOrEmpty(_pmJSTools.default.GetSubObj([tempRes.result.errMsg,
                  0])))
                    //数据结果放在了result第一个数据列中,所以需要脱壳 
                    {
                      tempLst = tempRes.result.result[0];

                      if (!_pmJSTools.default.IsNullOrEmpty(_pmJSTools.default.GetSubObj([tempLst.dataList,
                      0])))
                        //数据结果放在了result第一个数据列中,所以需要脱壳 
                        {
                          temp_id = tempLst.dataList[0]._id;
                        }
                    } //远程已经创建成功了，这时候需要修改本地界面为修改状态，防止重复提交。


                  this.PMInnerCustomerOrderItemID = funcPra.PMCOI.
                  PMInnerCustomerOrderItemID; //创建一个交付订单号，用来修改定位
                  //  this.data.btnCommandName = "更新"
                  // // this.setData({
                  // //   btnCommandName: this.data.btnCommandName
                  // // })
                  // var that = this;
                  // that.btnCommandName = this.data.btnCommandName;

                  // that.PMInnerCustomerOrderItemID = this.PMInnerCustomerOrderItemID;
                  // this.fillBlock.fillRemind = "按照提示填写，修改交付任务：" + this.PMInnerCustomerOrderItemID;
                  // // this.setData({
                  // // 	fillBlock: this.fillBlock
                  // // });
                  // that.fillBlock = this.fillBlock;
                  // console.log(event);
                  tempPage = getCurrentPages(); // 当前页变量

                  prevPage = tempPage[tempPage.length - 2]; // 上一页变量

                  if (this.dataType == "PMCOIAddNew") {
                    // 这里给要打开的页面传递数据.
                    funcPra.PMCOI.PMChangeTime = new Date(); //实际上这个时间是云函数决定的，这里只做临时展示用

                    funcPra.PMCOI._id = temp_id; //将云函数返回的_id存到PMCOI中，用于返回上一个页面（交付任务清单页）

                    funcPra.PMCOI.PMOrderState =
                    "NORELEASE"; //新增交付任务数据状态为编辑中，与云函数保持一致。//	订单状态	NORELEASE:编辑中，PARTRELEASE:部分下达,ALLRELEASE:全部下达，INTERIOR:出货中，FINISH:完结,INTERIOR:转内部订单

                    funcPra.PMCOI.ZCTFinishedNum = "0"; //完成数 

                    funcPra.PMCOI.ZCTFinishedRate = "0"; //完成率 

                    funcPra.PMCOI.PMCreater = app.globalData.PMUserID; //执行动态变量计算函数

                    _pmJSTools.default.calPMCOI(funcPra.PMCOI);
                    //this.PMCOIList.unshift(funcPra.PMCOI); //新生成的数据，加到数据头 传给前一页

                    // prevPage.setData({
                    // 	PMCOIList: this.PMCOIList //对前一页数据渲染
                    // });
                    prevPage.PMCOIList = this.PMCOIList; //对前一页数据渲染
                    uni.navigateBack({
                      //返回前一页
                      delta: 1 });

                  } else {
                    //使用工具函数更新一个元素
                    //calChangeTimeStr是计算值填写在此
                    funcPra.PMCOI.PMChangeTime = new Date(); //实际上这个时间是云函数决定的，这里只做临时展示用
                    //执行动态变量计算函数

                    _pmJSTools.default.calPMCOI(funcPra.PMCOI);
                    _pmJSTools.default.replaceOneControlFromList(funcPra.PMCOI._id, funcPra.PMCOI, this.
                    PMCOIList); //执行计算驱动函数（有些变量是计算获得的）

                    // prevPage.setData({
                    // 	PMCOIList: this.PMCOIList //对前一页数据渲染
                    // });
                    prevPage.PMCOIList = this.PMCOIList; //对前一页数据渲染
                    uni.navigateBack({
                      //返回前一页
                      delta: 1 });

                  } //执行完后，设置为不可编辑

                  that = this;

                  that.loadingMark = "";
                  that.isConfButtonDisabled = true;
                  that.confirmBtnClass = "weui-btn weui-btn_primary weui-btn_disabled";
                } else {
                  that = this;
                  that.topTips = true;
                  that.topTipsStr = "创建交付任务错误:" + tempRes.errMsg;
                  setTimeout(function () {
                    that.topTips = false;
                    that.topTipsStr = "";
                  }, 3000); //绑定失败，可以重复绑定
                  that.loadingMark = "";
                  that.isConfButtonDisabled = false; //启用按钮
                  that.confirmBtnClass = "weui-btn weui-btn_primary";
                }return _context.abrupt("return");case 152:if (!(







                this.dataType == "POAddNew" || this.dataType == "PMPOEdit")) {_context.next = 223;break;}if (!(
                this.isConfButtonDisabled == true)) {_context.next = 155;break;}return _context.abrupt("return");case 155:

                //设置按钮为运行中状态


                // this.setData({
                // 	loadingMark: "weui-loading",
                // 	isConfButtonDisabled: true,//禁用按钮
                // 	confirmBtnClass: "weui-btn weui-btn_primary weui-btn_disabled"
                // });
                that.loadingMark = "weui-loading";
                that.isConfButtonDisabled = true; //禁用按钮
                that.confirmBtnClass = "weui-btn weui-btn_primary weui-btn_disabled";
                tempPMPOList = []; //准备一个空POList

                tempPlannedNum = 0;

                TempItem = 0;case 161:if (!(TempItem < this.fillBlock.fillItemList.length)) {_context.next = 212;break;}if (!(
                this.fillBlock.fillItemList[TempItem].fillTitle == "计划单数(个)" || this.
                fillBlock.fillItemList[TempItem].fillTitle.includes("每单数量"))) {_context.next = 185;break;}
                TempUnit = this.PMCOI.PMOrderUnit;if (!(

                TempUnit == "件" || TempUnit == "个" || TempUnit == "套" || TempUnit ==
                "箱" || TempUnit == "袋")) {_context.next = 176;break;}if (
                _pmJSTools.default.inputvalidation(this.fillBlock.fillItemList[TempItem].
                fillValue, "验证非零的正整数")) {_context.next = 174;break;}
                that = this;
                // that.setData({
                // 	topTips: true,
                // 	topTipsStr: this.fillBlock.fillItemList[TempItem].fillTitle + "：请输入大于0的整数"
                // });
                that.topTips = true;
                that.topTipsStr = this.fillBlock.fillItemList[TempItem].fillTitle +
                "：请输入大于0的整数";
                setTimeout(function () {
                  //时间限制
                  // that.setData({
                  // 	topTips: false,
                  // 	topTipsStr: ""
                  // });
                  that.topTips = false;
                  that.topTipsStr = "";
                }, 3000); //设置按钮为启用状态

                // this.setData({
                // 	loadingMark: "",
                // 	isConfButtonDisabled: false,//启用按钮
                // 	confirmBtnClass: "weui-btn weui-btn_primary" //按钮设置为可以编辑

                // });
                that.loadingMark = "";
                that.isConfButtonDisabled = false; //启用按钮
                that.confirmBtnClass = "weui-btn weui-btn_primary"; //按钮设置为可以编辑
                return _context.abrupt("return");case 174:_context.next = 185;break;case 176:if (


                _pmJSTools.default.inputvalidation(this.fillBlock.fillItemList[TempItem].
                fillValue, "正浮点数")) {_context.next = 185;break;}
                that = this;
                // that.setData({
                // 	topTips: true,
                // 	topTipsStr: this.fillBlock.fillItemList[TempItem].fillTitle + "请输入大于0的数字"
                // });
                that.topTips = true;
                that.topTipsStr = this.fillBlock.fillItemList[TempItem].fillTitle +
                "请输入大于0的数字";
                setTimeout(function () {
                  //时间限制
                  // that.setData({
                  // 	topTips: false,
                  // 	topTipsStr: ""
                  // });
                  that.topTips = false;
                  that.topTipsStr = "";
                }, 3000); //设置按钮为启用状态

                // this.setData({
                // 	loadingMark: "",
                // 	isConfButtonDisabled: false,//启用按钮
                // 	confirmBtnClass: "weui-btn weui-btn_primary" //按钮设置为可以编辑

                // });
                that.loadingMark = "";
                that.isConfButtonDisabled = false; //启用按钮
                that.confirmBtnClass = "weui-btn weui-btn_primary"; //按钮设置为可以编辑
                return _context.abrupt("return");case 185:if (!(





                this.fillBlock.fillItemList[TempItem].fillTitle == "首单计划完工日期")) {_context.next = 208;break;}if (!
                this.fillBlock.fillItemList[TempItem].fillTitle.includes("日期")) {_context.next = 208;break;}if (!
                _pmJSTools.default.IsNullOrEmpty(this.fillBlock.fillItemList[TempItem].
                fillValue)) {_context.next = 196;break;}
                that = this;
                // that.setData({
                // 	topTips: true,
                // 	topTipsStr: this.fillBlock.fillItemList[TempItem].fillTitle + "未输入，无法保存"
                // });
                that.topTips = true;
                that.topTipsStr = this.fillBlock.fillItemList[TempItem].fillTitle +
                "未输入，无法保存";
                setTimeout(function () {
                  //时间限制
                  // that.setData({
                  // 	topTips: false,
                  // 	topTipsStr: ""
                  // });
                  that.topTips = false;
                  that.topTipsStr = "";
                }, 3000);
                // this.setData({
                // 	loadingMark: "",
                // 	isConfButtonDisabled: false,//启用按钮
                // 	confirmBtnClass: "weui-btn weui-btn_primary" //按钮设置为可以编辑

                // });
                that.loadingMark = "";
                that.isConfButtonDisabled = false; //启用按钮
                that.confirmBtnClass = "weui-btn weui-btn_primary"; //按钮设置为可以编辑
                return _context.abrupt("return");case 196:


                TempDate = _util.default.formatTime(new Date());
                TempDateTime = new Date(Date.parse(this.fillBlock.fillItemList[
                TempItem].fillValue.replace(/-/g, "/")));
                TempFinDateTime = _util.default.formatTime(TempDateTime);if (!(

                TempFinDateTime < TempDate)) {_context.next = 208;break;}
                that = this;
                // that.setData({
                // 	topTips: true,
                // 	topTipsStr: this.fillBlock.fillItemList[TempItem].fillTitle + "不可小于当前日期！"
                // });
                that.topTips = true;
                that.topTipsStr = this.fillBlock.fillItemList[TempItem].fillTitle +
                "不可小于当前日期！";
                setTimeout(function () {
                  //时间限制
                  // that.setData({
                  // 	topTips: false,
                  // 	topTipsStr: ""
                  // });
                  that.topTips = false;
                  that.topTipsStr = "";
                }, 3000); //设置按钮为启用状态

                // this.setData({
                // 	loadingMark: "",
                // 	isConfButtonDisabled: false,//启用按钮
                // 	confirmBtnClass: "weui-btn weui-btn_primary" //按钮设置为可以编辑

                // });
                that.loadingMark = "";
                that.isConfButtonDisabled = false; //启用按钮
                that.confirmBtnClass = "weui-btn weui-btn_primary"; //按钮设置为可以编辑
                return _context.abrupt("return");case 208:




                if (this.fillBlock.fillItemList[TempItem].fillTitle.includes("计划单数")) {}case 209:TempItem++;_context.next = 161;break;case 212:


                TempOrderSumNum = 0;

                for (tempI = 0; tempI < this.fillBlock.fillItemList[0].fillValue; tempI++) {
                  if (this.dataType == "PMPOEdit") {
                    PMPO = {
                      _id: _pmJSTools.default.GetSeqID("PO", 1)[0],
                      PMProductionOrderID: _pmJSTools.default.GetSeqID("PO", 6)[0],
                      //	生产订单号
                      PMInnerCustomerOrderItemID: this.PMCOI.PMInnerCustomerOrderItemID,
                      PMOrderNum: this.fillBlock.fillItemList[1].fillValue,
                      //	订单数量	
                      PMUnit: this.PMCOI.PMOrderUnit,
                      //	计量单位
                      ZCTlanStockInTimeShort: this.fillBlock.fillItemList[2].fillValue,
                      //	计划入库日期短表达
                      PMProductID: this.PMCOI.PMInnerProductID,
                      //	物料号
                      PMMaterialName: this.PMCOI.PMInnerProductName,
                      //	物料名称
                      ZCTFinishedNum: 0,
                      ZCTFinishedRate: 0,
                      // 生产订单完成率
                      ZCTProductURL: this.ZCTProductURL,
                      //产品图片
                      PMPIList: [] };

                    TempOrderSumNum = parseFloat(_pmJSTools.default.GetNum(TempOrderSumNum)) +
                    parseFloat(_pmJSTools.default.GetNum(TempOrderNum));
                    tempPlannedNum = tempPlannedNum + parseFloat(PMPO.PMOrderNum);
                  } else {
                    TempOrderNum = this.fillBlock.fillItemList[1].fillValue;

                    if (this.IsFillHelpSwitch) {
                      if (tempI == parseFloat(_pmJSTools.default.GetNum(this.fillBlock.fillItemList[0].
                      fillValue)) - 1) {
                        TempOrderNum = parseFloat(parseFloat(_pmJSTools.default.GetNum(this.PMCOI.
                        ZCTPlanNeedNum) - _pmJSTools.default.GetNum(
                        TempOrderSumNum)).toFixed(2));
                      }
                    }

                    PMPO = {
                      _id: _pmJSTools.default.GetSeqID("PO", 1)[0],
                      PMProductionOrderID: _pmJSTools.default.GetSeqID("PO", 6)[0],
                      //	生产订单号
                      PMInnerCustomerOrderItemID: this.PMCOI.PMInnerCustomerOrderItemID,
                      PMOrderNum: TempOrderNum,
                      //	订单数量	
                      PMUnit: this.PMCOI.PMOrderUnit,
                      //	计量单位
                      ZCTlanStockInTimeShort: _pmJSTools.default.dateAddDays(this.fillBlock.
                      fillItemList[2].fillValue, tempI * this.fillBlock.
                      fillItemList[3].fillValue),
                      //	计划入库日期短表达
                      PMProductID: this.PMCOI.PMInnerProductID,
                      //	物料号
                      PMMaterialName: this.PMCOI.PMInnerProductName,
                      //	物料名称
                      ZCTFinishedNum: 0,
                      ZCTFinishedRate: 0,
                      // 生产订单完成率
                      ZCTProductURL: this.ZCTProductURL,
                      //产品图片，使用新增或编辑的图片
                      PMPIList: [] };

                    TempOrderSumNum = parseFloat(_pmJSTools.default.GetNum(TempOrderSumNum)) +
                    parseFloat(_pmJSTools.default.GetNum(TempOrderNum));
                    tempPlannedNum = tempPlannedNum + parseFloat(PMPO.PMOrderNum);
                  }

                  if (this.dataType == "PMPOEdit") {
                    PMPO._id = this.PO._id;
                    PMPO.PMProductionOrderID = this.PO.PMProductionOrderID;

                    if (!_pmJSTools.default.IsNullOrEmpty(this.PO.PMPIList)) {
                      this.PO.PMPIList.forEach(function (TempItem) {
                        TempItem.PMOrderNum = PMPO.PMOrderNum;
                      });
                    }

                    PMPO.PMPIList = this.PO.PMPIList;

                    if (!_pmJSTools.default.IsNullOrEmpty(this.PO.ZCTLastSPTList)) {
                      this.PO.ZCTLastSPTList.forEach(function (TempItem) {
                        TempItem.PMOrderNum = PMPO.PMOrderNum;

                        if (!IsNullOrEmpty(TempItem.ZCTLastOPTList)) {
                          TempItem.ZCTLastOPTList.forEach(function (TempOPT) {
                            TempOPT.PMOrderNum = PMPO.PMOrderNum;
                          });
                        }
                      });
                    }

                    PMPO.ZCTLastSPTList = this.PO.ZCTLastSPTList;
                  }

                  if (this.IsLastPIFillHelpSwitch) {
                    this.PMPIList.forEach(function (TempItem) {var _tempPI;
                      var tempPI = (_tempPI = {
                        _id: _pmJSTools.default.GetSeqID("PI", 1)[0],
                        PMPRDInstructionID: _pmJSTools.default.GetSeqID("PI", 6)[0],
                        //	生产订单号
                        ZCTPlanStockInTimeShort: TempItem.
                        ZCTPlanStockInTimeShort,
                        //	计划入库日期短表达
                        PMMaterialName: _this3.PMCOI.PMInnerProductName,
                        //	物料名称 只是为了显示
                        ZCTProductURL: _this3.PMCOI.ZCTProductURL,
                        //产品工序图片
                        PMStanardProcessName: TempItem.PMStanardProcessName,
                        PMProcessSeq: TempItem.PMProcessSeq,
                        PMProductionOrderID: PMPO.PMProductionOrderID,
                        PMOrderNum: PMPO.PMOrderNum,
                        //	订单数量	
                        PMUnit: PMPO.PMUnit,
                        //	计量单位	
                        PMPlanFromStock: "0" }, _defineProperty(_tempPI, "ZCTPlanStockInTimeShort",

                      TempItem.
                      ZCTPlanStockInTimeShort), _defineProperty(_tempPI, "PMRemark",

                      ""), _defineProperty(_tempPI, "PMState",

                      "CREATE"), _defineProperty(_tempPI, "PMIsUrgent",

                      "NO"), _defineProperty(_tempPI, "PMProductNum",

                      0), _defineProperty(_tempPI, "ZCTFinishedNum",

                      0), _defineProperty(_tempPI, "ZCTFinishedRate",

                      0), _defineProperty(_tempPI, "ZCTLastSPTList",

                      []), _tempPI);

                      var TempZCTRAWProList = [];
                      var TempZCTRAWPurList = [];
                      TempItem.ZCTRAWProList.forEach(function (TempRAWPRo) {
                        var TempZCTRAWPro = {
                          ZCTMaterialName: TempRAWPRo.
                          ZCTMaterialName,
                          PMNum: TempRAWPRo.PMNum,
                          PMUnit: TempRAWPRo.PMUnit,
                          ZCTMaterialFromType: TempRAWPRo.
                          ZCTMaterialFromType,
                          ZCTGetNum: 0,
                          //已领用物料数量
                          ZCTGetRate: 0,
                          //领用率
                          ZCTProductURL: TempRAWPRo.ZCTProductURL,
                          //
                          PMPRDInstructionID: tempPI.
                          PMPRDInstructionID,
                          _id: "PRO" + _pmJSTools.default.GetSeqID("", 6)[0],
                          ZCTPlanRAWTimeShort: tempPI.
                          ZCTPlanStockInTimeShort };

                        TempZCTRAWProList.push(TempZCTRAWPro);
                      });
                      TempItem.ZCTRAWPurList.forEach(function (TempRAWPur) {
                        var TempZCTRAWPur = {
                          ZCTMaterialName: TempRAWPur.
                          ZCTMaterialName,
                          PMNum: TempRAWPur.PMNum,
                          PMUnit: TempRAWPur.PMUnit,
                          ZCTMaterialFromType: TempRAWPur.
                          ZCTMaterialFromType,
                          ZCTGetNum: 0,
                          //已领用物料数量
                          ZCTGetRate: 0,
                          //领用率
                          ZCTProductURL: TempRAWPur.ZCTProductURL,
                          //
                          PMPRDInstructionID: tempPI.
                          PMPRDInstructionID,
                          _id: "RAW" + _pmJSTools.default.GetSeqID("", 1)[0],
                          ZCTPlanRAWTimeShort: tempPI.
                          ZCTPlanStockInTimeShort };

                        TempZCTRAWPurList.push(TempZCTRAWPur);
                      });
                      tempPI.ZCTRAWProList = TempZCTRAWProList;
                      tempPI.ZCTRAWPurList = TempZCTRAWPurList;
                      PMPO.PMPIList.push(tempPI);
                    });
                  }

                  tempPMPOList.push(PMPO);
                } //
                //这里应该写PO批量提交代码
                //


                if (this.dataType == "PMPOEdit") {
                  TempIndex = this.PMCOI.PMPOList.findIndex(function (item) {return item._id === _this3.PO.
                    _id;});
                  this.PMCOI.PMPOList[TempIndex] = PMPO;
                } else {
                  if (!_pmJSTools.default.IsNullOrEmpty(_pmJSTools.default.GetSubObj([this.PMCOI, "PMPOList"]))) {
                    this.PMCOI.PMPOList = this.PMCOI.PMPOList.concat(tempPMPOList);
                  } else {
                    this.PMCOI.PMPOList = tempPMPOList;
                  }
                }

                TempPOProductNum = 0;

                if (!_pmJSTools.default.IsNullOrEmpty(this.PMCOI.PMPOList)) {
                  this.PMCOI.PMPOList.forEach(function (TempPO) {
                    TempPOProductNum = parseFloat(_pmJSTools.default.GetNum(TempPO.PMOrderNum) +
                    _pmJSTools.default.GetNum(TempPOProductNum));
                  });
                }

                if (parseFloat(this.PMCOI.PMOrderNum - TempPOProductNum) > 0) {
                  this.PMCOI.ZCTPlanNeedNum = parseFloat(_pmJSTools.default.GetNum(this.PMCOI.PMOrderNum -
                  TempPOProductNum).toFixed(2));
                } else {
                  this.PMCOI.ZCTPlanNeedNum = 0;
                }

                _tempPage = getCurrentPages(); // 当前页变量

                _prevPage = _tempPage[_tempPage.length - 2]; // 上一页变量

                // prevPage.setData({
                // 	PMCOI: this.PMCOI //对前一页数据渲染

                // });
                _prevPage.PMCOI = this.PMCOI; //对前一页数据渲染
                wx.navigateBack({
                  //返回前一页
                  delta: 1 });return _context.abrupt("return");case 223:if (!(






                this.dataType == "PMCOIDistribute")) {_context.next = 418;break;}if (!(
                this.isConfButtonDisabled == true)) {_context.next = 226;break;}return _context.abrupt("return");case 226:

                //设置按钮为运行中状态


                // this.setData({
                // 	loadingMark: "weui-loading",
                // 	isConfButtonDisabled: true,//禁用按钮
                // 	confirmBtnClass: "weui-btn weui-btn_primary weui-btn_disabled"
                // });
                that = this;
                that.loadingMark = "weui-loading";
                that.isConfButtonDisabled = true; //禁用按钮
                that.confirmBtnClass = "weui-btn weui-btn_primary weui-btn_disabled";
                funcPra = {};
                funcPra.PMOptionType = "CreateCOI";
                funcPra.SourceTaskID = this.TempSourceTaskID, //分发来源COI任务ID
                funcPra.SourceType = this.TempSourceType, //分发来源类型
                funcPra.SourcePositionID = this.TempSourcePositionID, //分发来源位置任务ID
                funcPra.PMCOI = this.PMCOIDataEdit;
                wx.setStorage({
                  key: 'PMCOI',
                  data: funcPra.PMCOI });

                TempUnit = ""; //单位

                for (tempItem in this.fillBlock.fillItemList) {
                  TempUnitTitle = this.fillBlock.fillItemList[tempItem].fillTitle;

                  if (TempUnitTitle == "单位") {
                    TempUnit = this.fillBlock.fillItemList[tempItem].fillValue;
                  }
                } //funcPra.PMCOI = {} //准备一个空的PMCOI
                //通过控件获取的值自动进行输入值格式和正确性验证
                _context.t2 = _regenerator.default.keys(

                this.fillBlock.fillItemList);case 237:if ((_context.t3 = _context.t2()).done) {_context.next = 292;break;}tempItem = _context.t3.value;if (!(
                !this.fillBlock.fillItemList[tempItem].fillValue && this.fillBlock.
                fillItemList[tempItem].fillTitle != "费用及相关说明" && this.fillBlock.
                fillItemList[tempItem].fillTitle != "生产环境及任务相关图片")) {_context.next = 248;break;}
                that = this;
                // that.setData({
                // 	topTips: true,
                // 	topTipsStr: "请输入" + this.fillBlock.fillItemList[tempItem].fillTitle
                // });
                that.topTips = true;
                that.topTipsStr = "请输入" + this.fillBlock.fillItemList[tempItem].fillTitle;
                setTimeout(function () {
                  //时间限制
                  // that.setData({
                  // 	topTips: false,
                  // 	topTipsStr: ""
                  // });
                  that.topTips = false;
                  that.topTipsStr = "";
                }, 3000); //设置按钮为启用状态

                // this.setData({
                // 	loadingMark: "",
                // 	isConfButtonDisabled: false,//启用按钮
                // 	confirmBtnClass: "weui-btn weui-btn_primary"
                // });
                that.loadingMark = "";
                that.isConfButtonDisabled = false; //启用按钮
                that.confirmBtnClass = "weui-btn weui-btn_primary";return _context.abrupt("return");case 248:if (!(



                this.fillBlock.fillItemList[tempItem].fillTitle == "需求数量" || this.fillBlock.
                fillItemList[tempItem].fillTitle == "数量")) {_context.next = 273;break;}if (
                _pmJSTools.default.inputvalidation(this.fillBlock.fillItemList[tempItem].
                fillValue, "正浮点数")) {_context.next = 260;break;}
                that = this;
                // that.setData({
                // 	topTips: true,
                // 	topTipsStr: this.fillBlock.fillItemList[tempItem].fillTitle + "：请输入数字！"
                // });
                that.topTips = true;
                that.topTipsStr = this.fillBlock.fillItemList[tempItem].fillTitle +
                "：请输入数字！";
                setTimeout(function () {
                  //时间限制
                  // that.setData({
                  // 	topTips: false,
                  // 	topTipsStr: ""
                  // });
                  that.topTips = false;
                  that.topTipsStr = "";
                }, 3000); //设置按钮为启用状态

                // this.setData({
                // 	loadingMark: "",
                // 	isConfButtonDisabled: false,//启用按钮
                // 	confirmBtnClass: "weui-btn weui-btn_primary" //按钮设置为可以编辑
                // });
                that.loadingMark = "";
                that.isConfButtonDisabled = false; //启用按钮
                that.confirmBtnClass = "weui-btn weui-btn_primary"; //按钮设置为可以编辑
                return _context.abrupt("return");case 260:

                console.log(TempUnit);if (!(

                TempUnit == "件" || TempUnit == "个" || TempUnit == "套" ||
                TempUnit == "箱" || TempUnit == "袋")) {_context.next = 271;break;}if (
                _pmJSTools.default.inputvalidation(this.fillBlock.fillItemList[
                tempItem].fillValue, "验证非零的正整数")) {_context.next = 271;break;}
                that = this;
                // that.setData({
                // 	topTips: true,
                // 	topTipsStr: this.fillBlock.fillItemList[tempItem].fillTitle + "：请输入大于0的整数"
                // });
                that.topTips = true;
                that.topTipsStr = this.fillBlock.fillItemList[tempItem].
                fillTitle + "：请输入大于0的整数";
                setTimeout(function () {
                  //时间限制
                  // that.setData({
                  // 	topTips: false,
                  // 	topTipsStr: ""
                  // });
                  that.topTips = false;
                  that.topTipsStr = "";
                }, 3000); //设置按钮为启用状态

                // this.setData({
                // 	loadingMark: "",
                // 	isConfButtonDisabled: false,//启用按钮
                // 	confirmBtnClass: "weui-btn weui-btn_primary" //按钮设置为可以编辑

                // });
                that.loadingMark = "";
                that.isConfButtonDisabled = false; //启用按钮
                that.confirmBtnClass = "weui-btn weui-btn_primary"; //按钮设置为可以编辑
                return _context.abrupt("return");case 271:



                funcPra.PMCOI[this.fillBlock.fillItemList[tempItem]._id] = parseFloat(
                _pmJSTools.default.GetNum(this.fillBlock.fillItemList[tempItem].
                fillValue)); //准备发往云端的值
                return _context.abrupt("continue", 237);case 273:if (!(





                this.fillBlock.fillItemList[tempItem].fillTitle == "交付时间")) {_context.next = 289;break;}
                DS = new Date(this.fillBlock.fillItemList[tempItem].fillValue);
                TempDN = new Date();
                TempDateSelect = DS.getFullYear() + "/" + (DS.getMonth() + 1) + "/" +
                DS.getDate();
                TempDateNow = TempDN.getFullYear() + "/" + (TempDN.getMonth() + 1) +
                "/" + TempDN.getDate();
                TempDateSelect2 = Date.parse(TempDateSelect);
                TempDateNow2 = Date.parse(TempDateNow);if (!(

                TempDateNow2 > TempDateSelect2)) {_context.next = 289;break;}
                that = this;
                // that.setData({
                // 	topTips: true,
                // 	topTipsStr: "交付时间需要大于当前时间！"
                // });
                that.topTips = true;
                that.topTipsStr = "交付时间需要大于当前时间！";
                setTimeout(function () {
                  //时间限制
                  // that.setData({
                  // 	topTips: false,
                  // 	topTipsStr: ""
                  // });
                  that.topTips = false;
                  that.topTipsStr = "";
                }, 3000); //设置按钮为启用状态

                // this.setData({
                // 	loadingMark: "",
                // 	isConfButtonDisabled: false,//启用按钮
                // 	confirmBtnClass: "weui-btn weui-btn_primary"
                // });
                that.loadingMark = "";
                that.isConfButtonDisabled = false; //启用按钮
                that.confirmBtnClass = "weui-btn weui-btn_primary";return _context.abrupt("return");case 289:




                funcPra.PMCOI[this.fillBlock.fillItemList[tempItem]._id] = this.fillBlock.
                fillItemList[tempItem].fillValue; //准备发往云端的值
                _context.next = 237;break;case 292:

                funcPra.PMCOI.PMInnerCustomerOrderItemID = _pmJSTools.default.GetSubObj([_pmJSTools.default.GetSeqID(
                "COI", 1), 0]);
                funcPra.PMCOI.PMCreater = app.globalData.PMUserID;
                funcPra.PMCOI.PMUserID = app.globalData._id;
                funcPra.PMCOI.ZCTCreaterName = app.globalData.PMUserName; //上传产品图片
                //在执行数据上传前，先上传图片
                //上传不成功不影响后续执行，可以后面再加图片。
                if (
                _pmJSTools.default.IsNullOrEmpty(this.ZCTProductURL)) {_context.next = 332;break;}
                //注意： 如何是点选的图片会放在this.data.ZCTProductURL[0]里

                tempFileSuffix = _pmJSTools.default.getFileSuffix(this.ZCTProductURL[0]);if (!(

                tempFileSuffix != "" && tempFileSuffix.length !=
                1)) {_context.next = 317;break;}

                remotefileName = _pmJSTools.default.GetSeqID("", 1) + "-" + funcPra.PMCOI.
                PMInnerCustomerOrderItemID +
                tempFileSuffix; //配置远程文件名，使用PMInnerCustomerOrderItemID防重
                _context.next = 302;return (
                  _pmSerTools.default.UploadFile("PMCOIProductPic", this.
                  ZCTProductURL[0], remotefileName));case 302:tempUploadRes = _context.sent;if (!(

                tempUploadRes.errMsg == "OK")) {_context.next = 307;break;}
                funcPra.PMCOI.ZCTProductURL = tempUploadRes.
                result; //图片上传成功后，把云图片地址赋值给变量
                _context.next = 315;break;case 307:
                that = this;
                // that.setData({
                // 	topTips: true,
                // 	topTipsStr: "上传图片失败" + tempUploadRes.errMsg
                // });
                that.topTips = true;
                that.topTipsStr = "上传图片失败" + tempUploadRes.errMsg;
                setTimeout(function () {
                  //时间限制
                  // that.setData({
                  // 	topTips: false,
                  // 	topTipsStr: ""
                  // });
                  that.topTips = false;
                  that.topTipsStr = "";
                }, 3000); //设置按钮为启用状态

                // this.setData({
                // 	loadingMark: "",
                // 	isConfButtonDisabled: false,//启用按钮
                // 	confirmBtnClass: "weui-btn weui-btn_primary"
                // });
                that.loadingMark = "";
                that.isConfButtonDisabled = false; //启用按钮
                that.confirmBtnClass = "weui-btn weui-btn_primary";return _context.abrupt("return");case 315:_context.next = 330;break;case 317:if (!(



                tempFileSuffix.length ==
                1)) {_context.next = 330;break;}if (!(



                funcPra.PMCOI.PMOrderProType == "订单生产" && this.ZCTProductURL ==
                "https://7463-tcb-ecxw1hs9f19080-6d00j26b1957e-1307375483.tcb.qcloud.la/age.jpg")) {_context.next = 329;break;}

                that = this;

                that.topTips = true;
                that.topTipsStr = "请选择产品图片！";
                setTimeout(function () {
                  //时间限制

                  that.topTips = false;
                  that.topTipsStr = "";
                }, 3000); //设置按钮为启用状态


                that.loadingMark = "";
                that.isConfButtonDisabled = false; //启用按钮
                that.confirmBtnClass = "weui-btn weui-btn_primary";return _context.abrupt("return");case 329:


                funcPra.PMCOI.ZCTProductURL = this.ZCTProductURL;case 330:_context.next = 340;break;case 332:




                that = this;
                // that.setData({
                // 	topTips: true,
                // 	topTipsStr: "上传图片失败,请选择产品图片!"
                // });
                that.topTips = true;
                that.topTipsStr = "上传图片失败,请选择产品图片!";
                setTimeout(function () {
                  //时间限制
                  // that.setData({
                  // 	topTips: false,
                  // 	topTipsStr: ""
                  // });
                  that.topTips = false;
                  that.topTipsStr = "";
                }, 3000); //设置按钮为启用状态

                // this.setData({
                // 	loadingMark: "",
                // 	isConfButtonDisabled: false,//启用按钮
                // 	confirmBtnClass: "weui-btn weui-btn_primary"
                // });
                that.loadingMark = "";
                that.isConfButtonDisabled = false; //启用按钮
                that.confirmBtnClass = "weui-btn weui-btn_primary";return _context.abrupt("return");case 340:

                //上传【生产环境及任务相关图片】


                funcPra.PMCOI.ZCTTaskPictureLst = [];
                tempfillItem = _pmJSTools.default.getOneControlFromList("ZCTTaskPictureLst", this.
                fillBlock.fillItemList);if (

                _pmJSTools.default.IsNullOrEmpty(tempfillItem.fillImgLst)) {_context.next = 367;break;}if (!(
                tempfillItem.fillImgLst.length > 6)) {_context.next = 352;break;}
                that = this;
                // that.setData({
                // 	topTips: true,
                // 	topTipsStr: "最多只能上传6张图片！"
                // });
                that.topTips = true;
                that.topTipsStr = "最多只能上传6张图片！";
                setTimeout(function () {
                  //时间限制
                  // that.setData({
                  // 	topTips: false,
                  // 	topTipsStr: ""
                  // });
                  that.topTips = false;
                  that.topTipsStr = "";
                }, 3000); //设置按钮为启用状态

                // this.setData({
                // 	loadingMark: "",
                // 	isConfButtonDisabled: false,//启用按钮
                // 	confirmBtnClass: "weui-btn weui-btn_primary"
                // });
                that.loadingMark = "";
                that.isConfButtonDisabled = false; //启用按钮
                that.confirmBtnClass = "weui-btn weui-btn_primary";return _context.abrupt("return");case 352:



                TempI = 0;case 353:if (!(TempI < tempfillItem.fillImgLst.length)) {_context.next = 367;break;}

                tempFileSuffixTaskP = _pmJSTools.default.getStrsubstring(tempfillItem.
                fillImgLst[TempI], 0, 1);if (!(

                tempFileSuffixTaskP != "" && tempFileSuffixTaskP !=
                "c")) {_context.next = 363;break;}

                remotefileName = _pmJSTools.default.GetSeqID("", 1) + "-" + funcPra.PMCOI.
                PMInnerCustomerOrderItemID +
                tempFileSuffixTaskP; //配置远程文件名，使用PMInnerCustomerOrderItemID防重
                _context.next = 359;return (
                  _pmSerTools.default.UploadFile("PMCOIProductPic",
                  tempfillItem.fillImgLst[TempI], remotefileName));case 359:tempUploadRes = _context.sent;

                if (tempUploadRes.errMsg == "OK") {
                  //图片上传成功后，把云图片地址赋值给变量
                  upoderesult = tempUploadRes.result;
                  funcPra.PMCOI.ZCTTaskPictureLst.push(upoderesult);
                }_context.next = 364;break;case 363:

                if (tempFileSuffixTaskP == "c") {
                  funcPra.PMCOI.ZCTTaskPictureLst.push(tempfillItem.fillImgLst[
                  TempI]);
                }case 364:TempI++;_context.next = 353;break;case 367:


                //计划交付时间格式处理


                TempPlanDate = new Array();

                if (funcPra.PMCOI.ZCTPlanDeliDateShort.indexOf("-") != -1) {
                  TempPlanDeliDate = funcPra.PMCOI.ZCTPlanDeliDateShort.replace(/-/g, "/");
                  funcPra.PMCOI.ZCTPlanDeliDateShort = TempPlanDeliDate;
                }

                TempPlanDate = funcPra.PMCOI.ZCTPlanDeliDateShort.split("/");
                console.log(TempPlanDate[1]);
                console.log(TempPlanDate[1].length);
                console.log(TempPlanDate[1].length > 1 && TempPlanDate[1].substring(0, 1) == "0");
                console.log(TempPlanDate[1].substring(1, 1));
                console.log(TempPlanDate[1].charAt(TempPlanDate[1].length - 1));
                TempPlanDateMonth = TempPlanDate[1].length > 1 && TempPlanDate[1].substring(0,
                1) == "0" ? TempPlanDate[1].charAt(TempPlanDate[1].length - 1) :
                TempPlanDate[1];
                TempPlanDateDay = TempPlanDate[2].length > 1 && TempPlanDate[2].substring(0,
                1) == "0" ? TempPlanDate[2].charAt(TempPlanDate[2].length - 1) :
                TempPlanDate[
                2];

                if (_pmJSTools.default.GetNum(TempPlanDateMonth) < 10) {
                  TempPlanDateMonth = "0" + TempPlanDateMonth;
                }

                if (_pmJSTools.default.GetNum(TempPlanDateDay) < 10) {
                  TempPlanDateDay = "0" + TempPlanDateDay;
                }

                funcPra.PMCOI.ZCTPlanDeliDateShort = TempPlanDate[0] + "/" + TempPlanDateMonth +
                "/" + TempPlanDateDay;_context.next = 382;return (
                  _pmSerTools.default.exePMCOI("OperatePMCOIDistribute", funcPra));case 382:tempRes = _context.sent;if (!(

                tempRes.errMsg == "OK")) {_context.next = 411;break;}
                _pmJSTools.default.UpdateProductStorge(funcPra.PMCOI.PMInnerProductID, funcPra.PMCOI.
                PMInnerProductName);
                this.fillBlock.fillRemind = "按照提示填写，修改交付任务：" + this.
                PMInnerCustomerOrderItemID; //执行完后，设置为不可编辑
                that = this;
                // this.setData({
                // 	loadingMark: "",
                // 	isConfButtonDisabled: true,
                // 	confirmBtnClass: "weui-btn weui-btn_primary weui-btn_disabled"
                // });
                that.loadingMark = "";
                that.isConfButtonDisabled = true;
                that.confirmBtnClass = "weui-btn weui-btn_primary weui-btn_disabled";
                TempUpdateCOI = this.TempSourceCOIData;_context.t4 =

                this.TempSourceType;_context.next = _context.t4 ===
                "PO" ? 394 : _context.t4 ===












                "PI" ? 396 : _context.t4 ===





















                "SPT" ? 398 : _context.t4 ===





















                "OPT" ? 400 : 403;break;case 394:for (TempPoIndex in TempUpdateCOI.PMPOList) {if (TempUpdateCOI.PMPOList[TempPoIndex]._id == this.TempSourceTaskStructure.POID) {TempUpdateCOI.PMPOList[TempPoIndex].ZCTIsDistribute = "YES";TempUpdateCOI.PMPOList[TempPoIndex].IsDistributeStyle = "background-color:#ffff66";}}return _context.abrupt("break", 404);case 396:for (TempPoIndex in TempUpdateCOI.PMPOList) {if (TempUpdateCOI.PMPOList[TempPoIndex]._id == this.TempSourceTaskStructure.POID) {for (TempPIIndex in TempUpdateCOI.PMPOList[TempPoIndex].PMPIList) {if (TempUpdateCOI.PMPOList[TempPoIndex].PMPIList[TempPIIndex]._id == this.TempSourceTaskStructure.PIID) {TempUpdateCOI.PMPOList[TempPoIndex].PMPIList[TempPIIndex].ZCTIsDistribute = "YES";TempUpdateCOI.PMPOList[TempPoIndex].PMPIList[TempPIIndex].IsDistributeStyle = "background-color:#ffff66";}}}}return _context.abrupt("break", 404);case 398:for (TempPoIndex in TempUpdateCOI.PMPOList) {if (TempUpdateCOI.PMPOList[TempPoIndex]._id == this.TempSourceTaskStructure.POID) {for (TempSPTIndex in TempUpdateCOI.PMPOList[TempPoIndex].ZCTLastSPTList) {if (TempUpdateCOI.PMPOList[TempPoIndex].ZCTLastSPTList[TempSPTIndex]._id == this.TempSourceTaskStructure.SPTID) {TempUpdateCOI.PMPOList[TempPoIndex].ZCTLastSPTList[TempSPTIndex].ZCTIsDistribute = "YES";TempUpdateCOI.PMPOList[TempPoIndex].ZCTLastSPTList[TempSPTIndex].IsDistributeStyle = "background-color:#ffff66";}}}}return _context.abrupt("break", 404);case 400:
                TempSPT = TempUpdateCOI.PMPOList[TempUpdateCOI.selectedPOKey].
                ZCTLastSPTList[TempUpdateCOI.PMPOList[TempUpdateCOI.selectedPOKey].
                selectedSPTKey];

                for (index = 0; index < TempSPT.ZCTLastOPTList.length; index++) {
                  if (TempSPT.ZCTLastOPTList[index]._id == this.
                  TempSourceTaskStructure.OPTID) {
                    TempUpdateCOI.PMPOList[TempUpdateCOI.selectedPOKey].
                    ZCTLastSPTList[TempUpdateCOI.PMPOList[TempUpdateCOI.
                    selectedPOKey].selectedSPTKey].ZCTLastOPTList[index].
                    ZCTIsDistribute = "YES";
                    TempUpdateCOI.PMPOList[TempUpdateCOI.selectedPOKey].
                    ZCTLastSPTList[TempUpdateCOI.PMPOList[TempUpdateCOI.
                    selectedPOKey].selectedSPTKey].ZCTLastOPTList[index].
                    IsDistributeStyle = "background-color:#ffff66";
                  }
                } // for(var TempPoIndex in TempUpdateCOI.PMPOList){
                //   if(TempUpdateCOI.PMPOList[TempPoIndex]._id ==this.data.TempSourceTaskStructure.POID){
                //     for(var TempSPTIndex in TempUpdateCOI.PMPOList[TempPoIndex].ZCTLastSPTList){
                //       if(TempUpdateCOI.PMPOList[TempPoIndex].ZCTLastSPTList[TempSPTIndex]._id ==this.data.TempSourceTaskStructure.SPTID ){
                //         for(var TempOPTIndex in TempUpdateCOI.PMPOList[TempPoIndex].ZCTLastSPTList[TempSPTIndex].ZCTLastOPTList){
                //           if(TempUpdateCOI.PMPOList[TempPoIndex].ZCTLastSPTList[TempSPTIndex].ZCTLastOPTList[TempOPTIndex]._id == this.data.TempSourceTaskStructure.OPTID){
                //             TempUpdateCOI.PMPOList[TempPoIndex].ZCTLastSPTList[TempSPTIndex].ZCTLastOPTList[TempOPTIndex].ZCTIsDistribute="YES";
                //             TempUpdateCOI.PMPOList[TempPoIndex].ZCTLastSPTList[TempSPTIndex].ZCTLastOPTList[TempOPTIndex].IsDistributeStyle="background-color:#ffff66";
                //           }
                //         }
                //       }
                //     }
                //   }
                // } 
                return _context.abrupt("break", 404);case 403:return _context.abrupt("break", 404);case 404:








                _tempPage2 = getCurrentPages(); // 当前页变量

                _prevPage2 = _tempPage2[_tempPage2.length - 2]; // 上一页变量

                TempUpdateCOI.PMOptionType = "PMCOIDistribute";
                // prevPage.setData({
                // 	PMCOI: TempUpdateCOI //对前一页数据渲染
                // });
                _prevPage2.PMCOI = TempUpdateCOI; //对前一页数据渲染
                wx.navigateBack({
                  //返回前一页
                  delta: 1 });_context.next = 418;break;case 411:


                that = this;
                // that.setData({
                // 	topTips: true,
                // 	topTipsStr: "创建交付任务错误:" + tempRes.errMsg
                // });
                that.topTips = true;
                that.topTipsStr = "创建交付任务错误:" + tempRes.errMsg;
                setTimeout(function () {
                  //时间限制
                  // that.setData({
                  // 	topTips: false,
                  // 	topTipsStr: ""
                  // });
                  that.topTips = false;
                  that.topTipsStr = "";
                }, 3000); //绑定失败，可以重复绑定

                // this.setData({
                // 	loadingMark: "",
                // 	isConfButtonDisabled: false,//启用按钮
                // 	confirmBtnClass: "weui-btn weui-btn_primary"
                // });
                that.loadingMark = "";
                that.isConfButtonDisabled = false; //启用按钮
                that.confirmBtnClass = "weui-btn weui-btn_primary";case 418:case "end":return _context.stop();}}}, _callee, this);}));function bindButtonTap(_x) {return _bindButtonTap.apply(this, arguments);}return bindButtonTap;}(),




    //
    pmDialogClose: function pmDialogClose(event) {
      var that = this;
      that.pmDialog = false;
      // this.setData({
      // 	pmDialog: false
      // });
    },
    //考虑到新增和编辑代码的复用性，新增一个函数用于PMCOI的新增和修改和查看
    //PMCOI的编辑功能
    //PMCOIData：用于编辑和查看的COI内容,  PMCOIType：属于查看COI，还是创建或者编辑或者分发。
    LoadPMCOIData: function LoadPMCOIData(PMCOIData, PMCOIType) {
      switch (this.dataType) {
        case "PMCOIAddNew":{
            //1.如果是创建过来的，则默认显示任务类型为劳务；默认加载劳务类型的表单。
            // this.LoadPMCOIDataLabor(PMCOIData,PMCOIType)
            //默认加载任务类型是订单生产
            this.LoadPMCOIDataOrdedrProduction(PMCOIData, PMCOIType);
            break;
          }

        case "PMCOIEdit":
        case "PMCOIShow":{
            //2.如果是编辑、查看过来的，则首先判断下PMCOIData数据里面的任务类型是什么。
            //  如果是劳务类型，则加载劳务任务类型表单；如果是订单生产类型，则加载订单生产任务类型表单
            if (PMCOIData.PMOrderProType == "劳务") {
              this.LoadPMCOIDataLabor(PMCOIData, PMCOIType);
            } else {
              this.LoadPMCOIDataOrdedrProduction(PMCOIData, PMCOIType);
            }

            break;
          }

        case "PMCOIDistribute":{
            //通过移交分发过来
            this.LoadPMCOIDataOrdedrProduction(PMCOIData, PMCOIType);
            break;
          }

        default:{
            //其他：则加载劳务类型的表单
            // this.LoadPMCOIDataLabor(PMCOIData,PMCOIType)
            //加载订单生产类型
            this.LoadPMCOIDataOrdedrProduction(PMCOIData, PMCOIType);
            break;
          }}

    },
    //加载劳务任务类型表单。任务类型为：劳务。创建、 修改、查看页面如何显示。
    //PMCOIData：用于编辑和查看的COI内容,  PMCOIType：属于查看COI，还是创建或者编辑或者分发。
    LoadPMCOIDataLabor: function LoadPMCOIDataLabor(PMCOIData, PMCOIType) {
      var isAddnew = false;

      if (_pmJSTools.default.IsNullOrEmpty(PMCOIData)) {
        isAddnew = true;
      } //以下为初始化界面语句


      var fillBlock = {}; // if (isAddnew) {
      //   fillBlock.fillRemind = "按照提示填写，生成新的交付任务";
      // } else {
      //   fillBlock.fillRemind = "按照提示填写，编辑交付任务";
      // }

      switch (PMCOIType) {
        case "PMCOIAddNew":{
            fillBlock.fillRemind = "按照提示填写，生成新的交付任务";
            break;
          }

        case "PMCOIEdit":{
            fillBlock.fillRemind = "按照提示填写，编辑交付任务";
            break;
          }

        case "PMCOIShow":{
            fillBlock.fillRemind = "查看交付任务";
            break;
          }

        default:{
            fillBlock.fillRemind = "按照提示填写，操作交付任务";
            break;
          }}


      fillBlock.fillItemList = []; //这里编程有点麻烦，需要一行一行编辑
      //经过仔细推敲暂时没有什么好的办法
      //任务类型

      var fillItem_1 = {};
      fillItem_1.fillTitle = "任务类型", fillItem_1.fillChartURL = "", //可为空
      fillItem_1.fillTip = "点选任务类型", fillItem_1.fillType = null, //填写类型: idcard,digit,number,DATETIME
      fillItem_1.maxlength = "10", //
      fillItem_1.fillHelpList = ['劳务', '订单生产']; //备选项

      if (isAddnew) {
        fillItem_1.fillValue = fillItem_1.fillHelpList[0]; //默认填写好第一个

        fillItem_1.fillHelpIndex = 0;
      } else {
        fillItem_1.fillValue = PMCOIData.PMOrderProType;
        fillItem_1.fillHelpIndex = _pmJSTools.default.getSeqIDfromArr(PMCOIData.PMOrderProType, fillItem_1.
        fillHelpList);
      } //编辑和查看，下拉框都不允许操作。只有新增可以选择任务类型下拉框


      if (PMCOIType == "PMCOIAddNew") {
        fillItem_1.filldisabled = false;
      } else {
        fillItem_1.filldisabled = true;
      }

      fillItem_1.editable = true, fillItem_1._id = "PMOrderProType", //填写项字段名备用，不在前端显示 
      fillBlock.fillItemList.push(fillItem_1); //工种类型

      var fillItem0 = {};
      fillItem0.fillTitle = "工种类型", fillItem0.fillChartURL = "", //可为空
      fillItem0.fillTip = "点选工种", fillItem0.fillType = null, //填写类型: idcard,digit,number,DATETIME
      fillItem0.maxlength = "10", //
      fillItem0.fillHelpList = _pmJSTools.default.getPMJobType(); //备选项

      if (isAddnew) {
        fillItem0.fillValue = fillItem0.fillHelpList[0]; //默认填写好第一个

        fillItem0.fillHelpIndex = 0;
      } else {
        fillItem0.fillValue = PMCOIData.PMJobType;
        fillItem0.fillHelpIndex = _pmJSTools.default.getSeqIDfromArr(PMCOIData.PMJobType, fillItem0.fillHelpList);
      } //编辑和查看，下拉框都不允许操作。只有新增可以选择任务类型下拉框


      if (PMCOIType == "PMCOIShow") {
        fillItem0.filldisabled = true;
      } else {
        fillItem0.filldisabled = false;
      }

      fillItem0.editable = true, fillItem0._id = "PMJobType", //填写项字段名备用，不在前端显示 
      fillBlock.fillItemList.push(fillItem0); // //产品号


      var fillItem2 = {};
      fillItem2.fillTitle = "任务名";
      fillItem2.fillChartURL = ""; //可为空

      fillItem2.fillTip = "填写任务内容";
      fillItem2.fillType = null; //填写类型: idcard,digit,number,DATETIME

      fillItem2.maxlength = "50"; //

      if (isAddnew) {} else {
        fillItem2.fillValue = PMCOIData.PMInnerProductName;
      }

      if (PMCOIType == "PMCOIShow") {
        fillItem2.filldisabled = true;
      } else {
        fillItem2.filldisabled = false;
      }

      fillItem2.fillHelpList = null, //备选项
      fillItem2.editable = true, fillItem2._id = "PMInnerProductName", //填写项字段名备用，不在前端显示 
      fillBlock.fillItemList.push(fillItem2);
      var fillItem5 = {};
      fillItem5.fillTitle = "交付时间", fillItem5.fillChartURL = "", //可为空
      fillItem5.fillTip = "点选时间", fillItem5.fillType = "DATE", //填写类型: idcard,digit,number,DATETIME
      fillItem5.maxlength = "20"; //

      if (isAddnew) {
        var TempT = new Date();
        var lastDay = new Date(TempT.getFullYear(), TempT.getMonth() + 1, 0).getDate();

        if (TempT.getDate() + 1 > lastDay) {
          fillItem5.fillValue = TempT.getFullYear() + "/" + (TempT.getMonth() + 2) + "/" + 1; //默认填写好一个日期
        } else {
          fillItem5.fillValue = TempT.getFullYear() + "/" + (TempT.getMonth() + 1) + "/" + (TempT.
          getDate() + 1); //默认填写好一个日期
        }

        fillItem5.startDate = new Date();
        fillItem5.endDate = new Date() + 5 * 365;
      } else {
        var TempT = new Date();
        fillItem5.fillValue = PMCOIData.ZCTPlanDeliDateShort;
        fillItem5.startDate = new Date();
        fillItem5.endDate = new Date() + 5 * 365;
      }

      if (PMCOIType == "PMCOIShow") {
        fillItem5.filldisabled = true;
      } else {
        fillItem5.filldisabled = false;
      }

      fillItem5.fillHelpList = null, //备选项
      fillItem5.editable = true, fillItem5._id = "ZCTPlanDeliDateShort", //填写项字段名备用，不在前端显示 
      fillBlock.fillItemList.push(fillItem5);
      var fillItem3 = {};
      fillItem3.fillTitle = "数量";
      fillItem3.fillChartURL = ""; //可为空

      fillItem3.fillTip = "必填";
      fillItem3.fillType = "digit"; //填写类型: idcard,digit,number,DATETIME

      fillItem3.maxlength = "50"; //
      // fillItem3.filleValue = null//默认填写好一个

      if (isAddnew) {
        fillItem3.fillValue = "1";
      } else {
        fillItem3.fillValue = PMCOIData.PMOrderNum;
      }

      if (PMCOIType == "PMCOIShow") {
        fillItem3.filldisabled = true;
      } else {
        fillItem3.filldisabled = false;
      }

      fillItem3.fillHelpList = null, //备选项
      fillItem3.editable = true, fillItem3._id = "PMOrderNum", //填写项字段名备用，不在前端显示 
      fillBlock.fillItemList.push(fillItem3);
      var fillItem4 = {};
      fillItem4.fillTitle = "单位", fillItem4.fillChartURL = "", //可为空
      fillItem4.fillTip = "点选单位", fillItem4.fillType = null, //填写类型: idcard,digit,number,DATETIME
      fillItem4.maxlength = "10", //
      fillItem4.fillHelpList = ['天', '月']; //备选项

      if (isAddnew) {
        fillItem4.fillValue = fillItem4.fillHelpList[0]; //默认填写好第一个

        fillItem4.fillHelpIndex = 0;
      } else {
        fillItem4.fillValue = PMCOIData.PMOrderUnit;
        fillItem4.fillHelpIndex = _pmJSTools.default.getSeqIDfromArr(PMCOIData.PMOrderUnit, fillItem4.fillHelpList);
      }

      if (PMCOIType == "PMCOIShow") {
        fillItem4.filldisabled = true;
      } else {
        fillItem4.filldisabled = false;
      }

      fillItem4.editable = true, fillItem4._id = "PMOrderUnit", //填写项字段名备用，不在前端显示 
      fillBlock.fillItemList.push(fillItem4); //结款方式

      var fillItem7 = {};
      fillItem7.fillTitle = "结款方式", fillItem7.fillChartURL = "", //可为空
      fillItem7.fillTip = "点选结款方式", fillItem7.fillType = null, //填写类型: idcard,digit,number,DATETIME
      fillItem7.maxlength = "10", //
      fillItem7.fillHelpList = ['日结', '长期']; //备选项

      if (isAddnew) {
        fillItem7.fillValue = fillItem7.fillHelpList[0]; //默认填写好第一个

        fillItem7.fillHelpIndex = 0;
      } else {
        fillItem7.fillValue = PMCOIData.ZCTJobPayType;
        fillItem7.fillHelpIndex = _pmJSTools.default.getSeqIDfromArr(PMCOIData.ZCTJobPayType, fillItem7.
        fillHelpList);
      }

      if (PMCOIType == "PMCOIShow") {
        fillItem7.filldisabled = true;
      } else {
        fillItem7.filldisabled = false;
      }

      fillItem7.editable = true, fillItem7._id = "ZCTJobPayType", //填写项字段名备用，不在前端显示 
      fillBlock.fillItemList.push(fillItem7); //生产环境及任务图片

      var fillItem9 = {};
      fillItem9.fillTitle = "生产环境及任务相关图片"; //生产环境及任务相关图片

      fillItem9.fillChartURL = ""; //可为空

      fillItem9.fillTip = "生产环境及任务相关图片"; //生产环境及任务相关图片

      fillItem9.fillType = null; //填写类型: idcard,digit,number,DATETIME

      fillItem9.maxlength = "500"; //

      if (isAddnew || _pmJSTools.default.IsNullOrEmpty(PMCOIData.ZCTTaskPictureLst)) {
        fillItem9.fillImgLst = []; //生产环境及任务相关图片组，最多6张，需做限制
      } else {
        fillItem9.fillImgLst = PMCOIData.ZCTTaskPictureLst; //生产环境及任务相关图片组，最多6张，需做限制
      }

      if (PMCOIType == "PMCOIShow") {
        fillItem9.filldisabled = true;
      } else {
        fillItem9.filldisabled = false;
      }

      fillItem9.fillHelpList = null, //备选项
      fillItem9.editable = true, fillItem9.AddPic = true, fillItem9._id =
      "ZCTTaskPictureLst", //填写项字段名备用，不在前端显示 
      fillBlock.fillItemList.push(fillItem9); //费用及相关说明

      var fillItem8 = {};
      fillItem8.fillTitle = "费用及相关说明";
      fillItem8.fillChartURL = ""; //可为空

      fillItem8.fillTip = "填写费用及相关说明";
      fillItem8.fillType = null; //填写类型: idcard,digit,number,DATETIME

      fillItem8.maxlength = "500"; //

      if (isAddnew) {
        fillItem8.inputNumWords = "0"; //已输入字数
      } else {
        if (PMCOIType != "PMCOIDistribute") {
          if (_pmJSTools.default.IsNullOrEmpty(PMCOIData.ZCTFeesInstructions)) {
            fillItem8.inputNumWords = 0; //已输入字数

            fillItem8.fillValue = "";
          } else {
            fillItem8.inputNumWords = PMCOIData.ZCTFeesInstructions.length; //已输入字数

            fillItem8.fillValue = PMCOIData.ZCTFeesInstructions;
          }
        } else {
          fillItem8.inputNumWords = "0"; //已输入字数
        }
      } // fillItem8.filleValue = null//默认填写好一个


      if (PMCOIType == "PMCOIShow") {
        fillItem8.filldisabled = true;
      } else {
        fillItem8.filldisabled = false;
      }

      fillItem8.fillHelpList = null, //备选项
      fillItem8.editable = true, fillItem8._id = "ZCTFeesInstructions", //填写项字段名备用，不在前端显示 
      fillBlock.fillItemList.push(fillItem8);
      this.fillBlock = fillBlock; //非新增类型的，图片取COI里面的

      if (!isAddnew) {
        this.ZCTProductURL = PMCOIData.ZCTProductURL; //非新增的情况下，图片从COI中拿。
      }

      console.log(PMCOIType); //如果是查看过来的，操作按钮隐藏

      if (PMCOIType == "PMCOIShow") {
        this.hiddenName = true;
      } else {
        this.hiddenName = false;
      }

      if (isAddnew) {
        this.btnCommandName = "新增";
      } else {
        this.btnCommandName = "更新";
      }
      var that = this;
      this.upBtnTips = "", //  GM:暂时去掉 "历史产品号自动加载图片，不需要增加。" 字样 2021-05-06
      this.downBtnTips = "交付任务是协作的开始", //this.data.btnCommandName = "新增",
      // this.setData({
      // 	fillBlock: this.fillBlock,
      // 	upBtnTips: this.upBtnTips,
      // 	downBtnTips: this.downBtnTips,
      // 	btnCommandName: this.btnCommandName,
      // 	btnCommandName_id: PMCOIData._id,
      // 	ZCTProductURL: this.ZCTProductURL,
      // 	hiddenName: this.hiddenName
      // });
      that.fillBlock = this.fillBlock;
      that.upBtnTips = this.upBtnTips;
      that.downBtnTips = this.downBtnTips;
      that.btnCommandName = this.btnCommandName;
      that.btnCommandName_id = PMCOIData._id;
      that.ZCTProductURL = this.ZCTProductURL;
      that.hiddenName = this.hiddenName;
    },
    //加载订单生产任务类型表单。任务类型为：订单生产。创建、 修改、查看页面如何显示。
    //PMCOIData：用于编辑和查看的COI内容,  PMCOIType：属于查看COI，还是创建或者编辑或者分发。
    LoadPMCOIDataOrdedrProduction: function LoadPMCOIDataOrdedrProduction(PMCOIData, PMCOIType) {var _this4 = this;
      var isAddnew = false;

      if (_pmJSTools.default.IsNullOrEmpty(PMCOIData)) {
        isAddnew = true;
      } //以下为初始化界面语句


      var fillBlock = {}; // if (isAddnew) {
      //   fillBlock.fillRemind = "按照提示填写，生成新的交付任务";
      // } else {
      //   fillBlock.fillRemind = "按照提示填写，编辑交付任务";
      // }

      switch (PMCOIType) {
        case "PMCOIAddNew":{
            fillBlock.fillRemind = "按照提示填写，生成新的交付任务";
            break;
          }

        case "PMCOIEdit":{
            fillBlock.fillRemind = "按照提示填写，编辑交付任务";
            break;
          }

        case "PMCOIShow":{
            fillBlock.fillRemind = "查看交付任务";
            break;
          }

        case "PMCOIDistribute":{
            // fillBlock.fillRemind = "按照提示填写，生成新的交付任务";
            fillBlock.fillRemind = "按照提示填写，进行移交分发：将过程任务创建为单独新的交付任务，发放给他人执行";
            break;
          }

        default:{
            fillBlock.fillRemind = "按照提示填写，操作交付任务";
            break;
          }}


      fillBlock.fillItemList = []; //这里编程有点麻烦，需要一行一行编辑
      //经过仔细推敲暂时没有什么好的办法
      //任务类型

      var fillItem_1 = {};
      fillItem_1.fillTitle = "任务类型", fillItem_1.fillChartURL = "", //可为空
      fillItem_1.fillTip = "点选任务类型", fillItem_1.fillType = null, //填写类型: idcard,digit,number,DATETIME
      fillItem_1.maxlength = "10", //
      fillItem_1.fillHelpList = ['劳务', '订单生产']; //备选项

      if (isAddnew) {
        fillItem_1.fillValue = fillItem_1.fillHelpList[1]; //默认填写好第一个

        fillItem_1.fillHelpIndex = 1;
      } else {
        fillItem_1.fillValue = PMCOIData.PMOrderProType;
        fillItem_1.fillHelpIndex = _pmJSTools.default.getSeqIDfromArr(PMCOIData.PMOrderProType, fillItem_1.
        fillHelpList);
      }

      if (PMCOIType == "PMCOIAddNew") {
        fillItem_1.filldisabled = false;
      } else {
        fillItem_1.filldisabled = true;
      }

      fillItem_1.editable = true, fillItem_1._id = "PMOrderProType", //填写项字段名备用，不在前端显示 
      fillBlock.fillItemList.push(fillItem_1); //工种

      var fillItem0 = {};
      fillItem0.fillTitle = "工种类型", fillItem0.fillChartURL = "", //可为空
      fillItem0.fillTip = "点选工种", fillItem0.fillType = null, //填写类型: idcard,digit,number,DATETIME
      fillItem0.maxlength = "10", //
      fillItem0.fillHelpList = _pmJSTools.default.getPMJobType(); //备选项

      if (isAddnew) {
        fillItem0.fillValue = fillItem0.fillHelpList[0]; //默认填写好第一个

        fillItem0.fillHelpIndex = 0;
      } else {
        fillItem0.fillValue = PMCOIData.PMJobType;
        fillItem0.fillHelpIndex = _pmJSTools.default.getSeqIDfromArr(PMCOIData.PMJobType, fillItem0.fillHelpList);
      }

      if (PMCOIType == "PMCOIShow") {
        fillItem0.filldisabled = true;
      } else {
        fillItem0.filldisabled = false;
      }

      fillItem0.editable = true, fillItem0._id = "PMJobType", //填写项字段名备用，不在前端显示 
      fillBlock.fillItemList.push(fillItem0); //产品号

      var fillItem1 = {};
      fillItem1.fillTitle = "产品号";
      fillItem1.fillChartURL = ""; //可为空

      fillItem1.fillTip = "必填";
      fillItem1.fillType = null; //填写类型: idcard,digit,number,DATETIME

      fillItem1.maxlength = "30"; //

      if (isAddnew) {} else {
        if (this.TempSourceType == "RAWPRO") {
          //fillItem1.fillValue =this.data.TempSourceTaskStructure.PlanDeliDateData.ZCTMaterialName.split(':')[0];
          var TempProductID = "";
          var TempZCTMaterialName = this.TempSourceTaskStructure.PlanDeliDateData.ZCTMaterialName;

          if (TempZCTMaterialName.indexOf(':') <= 0) {
            if (TempZCTMaterialName.indexOf('：') != -1) {
              TempProductID = _pmJSTools.default.getStrLeftFromFront(TempZCTMaterialName, '：');
            }
          } else {
            if (TempZCTMaterialName.indexOf('：') != -1) {
              var TempChineseIndex = TempZCTMaterialName.indexOf('：');
              var TempEnglishIndex = TempZCTMaterialName.indexOf(':');

              if (TempChineseIndex < TempEnglishIndex) {
                TempProductID = _pmJSTools.default.getStrLeftFromFront(TempZCTMaterialName, '：');
              } else {
                TempProductID = _pmJSTools.default.getStrLeftFromFront(TempZCTMaterialName, ':');
              }
            } else {
              TempProductID = _pmJSTools.default.getStrLeftFromFront(TempZCTMaterialName, ':');
            }
          }

          fillItem1.fillValue = TempProductID;
        } else {
          fillItem1.fillValue = PMCOIData.PMInnerProductID;
        }
      } // fillItem1.filleValue = null//默认填写好一个


      if (PMCOIType == "PMCOIShow") {
        fillItem1.filldisabled = true;
      } else if (PMCOIType == "PMCOIDistribute") {
        fillItem1.filldisabled = true; //移交分发时，产品号不可编辑
      } else if (!_pmJSTools.default.IsNullOrEmpty(PMCOIData.ZCTSourceType)) {
        fillItem1.filldisabled = true; //移交分发的COI任务，产品号不可编辑
      } else {
        fillItem1.filldisabled = false;
      }

      fillItem1.fillHelpList = null, //备选项
      fillItem1.editable = true, fillItem1._id = "PMInnerProductID"; //填写项字段名备用，不在前端显示 

      fillBlock.fillItemList.push(fillItem1); //产品名编辑

      var fillItem2 = {};
      fillItem2.fillTitle = "产品名";
      fillItem2.fillChartURL = ""; //可为空

      fillItem2.fillTip = "必填";
      fillItem2.fillType = null; //填写类型: idcard,digit,number,DATETIME

      fillItem2.maxlength = "50"; //

      if (isAddnew) {} else {
        if (this.TempSourceType == "RAWPRO") {
          //截取产品名
          //fillItem2.fillValue =this.data.TempSourceTaskStructure.PlanDeliDateData.ZCTMaterialName.split(':')[1];
          var TempProductName = "";
          var TempZCTMaterialName = this.TempSourceTaskStructure.PlanDeliDateData.ZCTMaterialName;

          if (TempZCTMaterialName.indexOf(':') <= 0) {
            if (TempZCTMaterialName.indexOf('：') != -1) {
              TempProductName = _pmJSTools.default.getStrRightFromFront(TempZCTMaterialName, '：');
            }
          } else {
            if (TempZCTMaterialName.indexOf('：') != -1) {
              var TempChineseIndex = TempZCTMaterialName.indexOf('：');
              var TempEnglishIndex = TempZCTMaterialName.indexOf(':');

              if (TempChineseIndex < TempEnglishIndex) {
                TempProductName = _pmJSTools.default.getStrRightFromFront(TempZCTMaterialName, '：');
              } else {
                TempProductName = _pmJSTools.default.getStrRightFromFront(TempZCTMaterialName, ':');
              }
            } else {
              TempProductName = _pmJSTools.default.getStrRightFromFront(TempZCTMaterialName, ':');
            }
          }

          fillItem2.fillValue = TempProductName;
        } else {
          fillItem2.fillValue = PMCOIData.PMInnerProductName;
        }
      }

      if (PMCOIType == "PMCOIShow") {
        fillItem2.filldisabled = true;
      } else if (PMCOIType == "PMCOIDistribute") {
        fillItem2.filldisabled = true; //移交分发时，产品名不可编辑
      } else if (!_pmJSTools.default.IsNullOrEmpty(PMCOIData.ZCTSourceType)) {
        fillItem2.filldisabled = true; //移交分发的COI任务，产品明不可编辑
      } else {
        fillItem2.filldisabled = false;
      }

      fillItem2.fillHelpList = null, //备选项
      fillItem2.editable = true, fillItem2._id = "PMInnerProductName"; //填写项字段名备用，不在前端显示 

      fillBlock.fillItemList.push(fillItem2);
      var fillItem3 = {};
      fillItem3.fillTitle = "需求数量";
      fillItem3.fillChartURL = ""; //可为空

      fillItem3.fillTip = "必填";
      fillItem3.fillType = "digit"; //填写类型: idcard,digit,number,DATETIME

      fillItem3.maxlength = "50"; //
      // fillItem3.filleValue = null//默认填写好一个

      if (isAddnew) {} else {
        fillItem3.fillValue = PMCOIData.PMOrderNum;
      }

      if (PMCOIType == "PMCOIShow") {
        fillItem3.filldisabled = true;
      } else if (PMCOIType == "PMCOIDistribute") {
        fillItem3.fillValue = parseFloat(_pmJSTools.default.GetNum(this.TempTaskNum));
        fillItem3.filldisabled = true; //移交分发时，需求数量不可编辑
      } else if (!_pmJSTools.default.IsNullOrEmpty(PMCOIData.ZCTSourceType)) {
        fillItem3.filldisabled = true; //移交分发的COI任务，需求数量不可编辑
      } else {
        fillItem3.filldisabled = false;
      }

      fillItem3.fillHelpList = null, //备选项
      fillItem3.editable = true, fillItem3._id = "PMOrderNum", //填写项字段名备用，不在前端显示 
      fillBlock.fillItemList.push(fillItem3);
      var fillItem4 = {};
      fillItem4.fillTitle = "单位", fillItem4.fillChartURL = "", //可为空
      fillItem4.fillTip = "点选单位", fillItem4.fillType = null, //填写类型: idcard,digit,number,DATETIME
      fillItem4.maxlength = "10", //
      fillItem4.fillHelpList = _pmJSTools.default.getGeneralUnitList(); //备选项

      if (isAddnew) {
        fillItem4.fillValue = fillItem4.fillHelpList[0]; //默认填写好第一个

        fillItem4.fillHelpIndex = 0;
      } else {
        if (this.TempSourceType == "RAWPRO") {
          fillItem4.fillValue = this.TempSourceTaskStructure.PlanDeliDateData.PMUnit;
          fillItem4.fillHelpIndex = _pmJSTools.default.getSeqIDfromArr(this.TempSourceTaskStructure.
          PlanDeliDateData.PMUnit, fillItem4.fillHelpList);
        } else {
          fillItem4.fillValue = PMCOIData.PMOrderUnit;
          fillItem4.fillHelpIndex = _pmJSTools.default.getSeqIDfromArr(PMCOIData.PMOrderUnit, fillItem4.
          fillHelpList);
        }
      }

      if (PMCOIType == "PMCOIShow") {
        fillItem4.filldisabled = true;
      } else if (PMCOIType == "PMCOIDistribute") {
        fillItem4.filldisabled = true; //移交分发时，单位不可编辑
      } else if (!_pmJSTools.default.IsNullOrEmpty(PMCOIData.ZCTSourceType)) {
        fillItem4.filldisabled = true; //移交分发的COI任务，单位不可编辑
      } else {
        fillItem4.filldisabled = false;
      }

      fillItem4.editable = true, fillItem4._id = "PMOrderUnit", //填写项字段名备用，不在前端显示 
      fillBlock.fillItemList.push(fillItem4);
      var fillItem5 = {};
      fillItem5.fillTitle = "交付时间", fillItem5.fillChartURL = "", //可为空
      fillItem5.fillTip = "点选时间", fillItem5.fillType = "DATE", //填写类型: idcard,digit,number,DATETIME
      fillItem5.maxlength = "20"; //

      if (isAddnew) {
        var TempT = new Date();
        var lastDay = new Date(TempT.getFullYear(), TempT.getMonth() + 1, 0).getDate();

        if (TempT.getDate() + 1 > lastDay) {
          fillItem5.fillValue = TempT.getFullYear() + "/" + (TempT.getMonth() + 2) + "/" + 1; //默认填写好一个日期
        } else {
          fillItem5.fillValue = TempT.getFullYear() + "/" + (TempT.getMonth() + 1) + "/" + (TempT.
          getDate() + 1); //默认填写好一个日期
        }

        fillItem5.startDate = new Date();
        fillItem5.endDate = new Date() + 5 * 365;
      } else {
        var TempT = new Date();
        fillItem5.fillValue = PMCOIData.ZCTPlanDeliDateShort;
        fillItem5.startDate = new Date();
        fillItem5.endDate = new Date() + 5 * 365;
      }

      if (PMCOIType == "PMCOIShow") {
        fillItem5.filldisabled = true;
      } else if (PMCOIType == "PMCOIDistribute") {
        fillItem5.fillValue = this.TempPlanDeliDateShort;
      } else {
        fillItem5.filldisabled = false;
      }

      fillItem5.fillHelpList = null, //备选项
      fillItem5.editable = true, fillItem5._id = "ZCTPlanDeliDateShort", //填写项字段名备用，不在前端显示 
      fillBlock.fillItemList.push(fillItem5); // var fillItem6 = {};
      // fillItem6.fillTitle = "是否紧急",
      //   fillItem6.fillChartURL = "", //可为空
      //   fillItem6.fillTip = "点选是否紧急",
      //   fillItem6.fillType = null, //填写类型: idcard,digit,number,DATETIME
      //   fillItem6.maxlength = "5" //
      // fillItem6.fillHelpList = ["NO", "YES"] //备选项
      // if (isAddnew) {
      //   fillItem6.fillValue = "NO" //默认填写好一个
      //   fillItem6.fillHelpIndex = 0
      // } else {
      //   if (pmJSTools.IsNullOrEmpty(PMCOIData.PMIsUrgent)) {
      //     fillItem6.fillValue = "NO"
      //     fillItem6.fillHelpIndex = 0
      //   } else {
      //     if (PMCOIData.PMIsUrgent == "NO") {
      //       fillItem6.fillValue = PMCOIData.PMIsUrgent
      //       fillItem6.fillHelpIndex = 0
      //     }
      //     if (PMCOIData.PMIsUrgent == "YES") {
      //       fillItem6.fillValue = PMCOIData.PMIsUrgent
      //       fillItem6.fillHelpIndex = 1
      //     }
      //   }
      // }
      // fillItem6.editable = true,
      //   fillItem6._id = "PMIsUrgent", //填写项字段名备用，不在前端显示 
      //   fillBlock.fillItemList.push(fillItem6)
      //结款方式

      var fillItem7 = {};
      fillItem7.fillTitle = "结款方式", fillItem7.fillChartURL = "", //可为空
      fillItem7.fillTip = "点选结款方式", fillItem7.fillType = null, //填写类型: idcard,digit,number,DATETIME
      fillItem7.maxlength = "10", //
      fillItem7.fillHelpList = ['日结', '长期']; //备选项

      if (isAddnew) {
        fillItem7.fillValue = fillItem7.fillHelpList[0]; //默认填写好第一个

        fillItem7.fillHelpIndex = 0;
      } else {
        fillItem7.fillValue = PMCOIData.ZCTJobPayType;
        fillItem7.fillHelpIndex = _pmJSTools.default.getSeqIDfromArr(PMCOIData.ZCTJobPayType, fillItem7.
        fillHelpList);
      }

      if (PMCOIType == "PMCOIShow") {
        fillItem7.filldisabled = true;
      } else if (PMCOIType == "PMCOIDistribute") {
        fillItem7.fillValue = fillItem7.fillHelpList[0]; //默认填写好第一个
      } else {
        fillItem7.filldisabled = false;
      }

      fillItem7.editable = true, fillItem7._id = "ZCTJobPayType", //填写项字段名备用，不在前端显示 
      fillBlock.fillItemList.push(fillItem7); //生产环境及任务图片

      var fillItem9 = {};
      fillItem9.fillTitle = "生产环境及任务相关图片"; //生产环境及任务相关图片

      fillItem9.fillChartURL = ""; //可为空

      fillItem9.fillTip = "生产环境及任务相关图片"; //生产环境及任务相关图片

      fillItem9.fillType = null; //填写类型: idcard,digit,number,DATETIME

      fillItem9.maxlength = "500"; //

      if (isAddnew || _pmJSTools.default.IsNullOrEmpty(PMCOIData.ZCTTaskPictureLst)) {
        fillItem9.fillImgLst = []; //生产环境及任务相关图片组，最多6张，需做限制
      } else {
        fillItem9.fillImgLst = PMCOIData.ZCTTaskPictureLst; //生产环境及任务相关图片组，最多6张，需做限制
      }

      if (PMCOIType == "PMCOIShow") {
        fillItem9.filldisabled = true;
      } else if (PMCOIType == "PMCOIDistribute") {
        fillItem9.fillImgLst = []; //生产环境及任务相关图片组，最多6张，需做限制; //默认填写好第一个
      } else {
        fillItem9.filldisabled = false;
      }

      fillItem9.fillHelpList = null, //备选项
      fillItem9.editable = true, fillItem9.AddPic = true, fillItem9._id =
      "ZCTTaskPictureLst", //填写项字段名备用，不在前端显示 
      fillBlock.fillItemList.push(fillItem9); //费用及相关说明

      var fillItem8 = {};
      fillItem8.fillTitle = "费用及相关说明";
      fillItem8.fillChartURL = ""; //可为空

      fillItem8.fillTip = "填写费用及相关说明";
      fillItem8.fillType = null; //填写类型: idcard,digit,number,DATETIME

      fillItem8.maxlength = "500"; //

      if (isAddnew) {
        fillItem8.inputNumWords = "0"; //已输入字数
      } else {
        if (PMCOIType != "PMCOIDistribute") {
          if (_pmJSTools.default.IsNullOrEmpty(PMCOIData.ZCTFeesInstructions)) {
            fillItem8.inputNumWords = 0; //已输入字数

            fillItem8.fillValue = "";
          } else {
            fillItem8.inputNumWords = PMCOIData.ZCTFeesInstructions.length; //已输入字数

            fillItem8.fillValue = PMCOIData.ZCTFeesInstructions;
          }
        } else {
          fillItem8.inputNumWords = "0"; //已输入字数
        }
      } // fillItem8.filleValue = null//默认填写好一个


      if (PMCOIType == "PMCOIShow") {
        fillItem8.filldisabled = true;
      } else if (PMCOIType == "PMCOIDistribute") {
        fillItem8.fillValue = "";
      } else {
        fillItem8.filldisabled = false;
      }

      fillItem8.fillHelpList = null, //备选项
      fillItem8.editable = true, fillItem8._id = "ZCTFeesInstructions", //填写项字段名备用，不在前端显示 
      fillBlock.fillItemList.push(fillItem8);
      this.fillBlock = fillBlock; //非新增类型的，图片取COI里面的

      if (!isAddnew) {
        this.ZCTProductURL = PMCOIData.ZCTProductURL; //非新增的情况下，图片从COI中拿。
      }

      if (PMCOIType == "PMCOIDistribute") {
        var that = this;
        switch (this.TempSourceType) {
          case "PO":{
              var ThisPO = this.TempSourceCOIData.PMPOList.find(function (item) {return item._id === _this4.
                TempSourceTaskStructure.POID;});

              if (!_pmJSTools.default.IsNullOrEmpty(ThisPO)) {
                this.ZCTProductURL = ThisPO.ZCTProductURL;
              }

              break;
            }

          case "PI":{
              var ThisPO = this.TempSourceCOIData.PMPOList.find(function (item) {return item._id === _this4.
                TempSourceTaskStructure.POID;});

              if (!_pmJSTools.default.IsNullOrEmpty(ThisPO)) {
                var ThisPI = ThisPO.PMPIList.find(function (item) {return item._id === _this4.TempSourceTaskStructure.
                  PIID;});

                if (!_pmJSTools.default.IsNullOrEmpty(ThisPI)) {
                  this.ZCTProductURL = ThisPI.ZCTProductURL;
                }
              }

              break;
            }

          case "SPT":{
              var ThisPO = this.TempSourceCOIData.PMPOList.find(function (item) {return item._id === _this4.
                TempSourceTaskStructure.POID;});

              if (!_pmJSTools.default.IsNullOrEmpty(ThisPO)) {
                var ThisPI = ThisPO.PMPIList.find(function (item) {return item._id === _this4.TempSourceTaskStructure.
                  PIID;});

                if (!_pmJSTools.default.IsNullOrEmpty(ThisPI)) {
                  this.ZCTProductURL = ThisPI.ZCTProductURL;
                }
              }

              break;
            }

          case "OPT":{
              var ThisPO = this.TempSourceCOIData.PMPOList.find(function (item) {return item._id === _this4.
                TempSourceTaskStructure.POID;});

              if (!_pmJSTools.default.IsNullOrEmpty(ThisPO)) {
                var ThisPI = ThisPO.PMPIList.find(function (item) {return item._id === _this4.TempSourceTaskStructure.
                  PIID;});

                if (!_pmJSTools.default.IsNullOrEmpty(ThisPI)) {
                  this.ZCTProductURL = ThisPI.ZCTProductURL;
                }
              }

              break;
            }

          case "RAWPRO":{
              this.ZCTProductURL = this.TempSourceTaskStructure.PlanDeliDateData.
              ZCTProductURL; //生产物料移交分发时，设置按钮默认可以执行

              // this.setData({
              // 	isConfButtonDisabled: false,
              // 	confirmBtnClass: "weui-btn weui-btn_primary" //设置为可以编辑

              // });
              that.isConfButtonDisabled = false;
              that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑
              break;
            }

          default:
            break;}

      }

      if (isAddnew) {
        this.btnCommandName = "新增";
        this.hiddenName = false;
      } else {
        this.btnCommandName = "更新";
        this.hiddenName = true;
      } // this.data.upBtnTips = "历史产品号自动加载图片，不需要增加。"


      this.upBtnTips = "";
      this.downBtnTips = "交付任务是协作的开始"; //如果是查看过来的，操作按钮隐藏

      if (PMCOIType == "PMCOIShow") {
        this.hiddenName = true;
      } else if (PMCOIType == "PMCOIDistribute") {
        this.btnCommandName = "新增";
        this.hiddenName = false;
      } else {
        this.hiddenName = false;
      } //this.data.btnCommandName = "新增",
      var that = this;
      that.fillBlock = this.fillBlock;
      that.upBtnTips = this.upBtnTips;
      that.downBtnTips = this.downBtnTips;
      that.btnCommandName = this.btnCommandName;
      that.btnCommandName_id = PMCOIData._id;
      that.ZCTProductURL = this.ZCTProductURL;
      that.hiddenName = this.hiddenName;
      // this.setData({
      // 	fillBlock: this.fillBlock,
      // 	upBtnTips: this.upBtnTips,
      // 	downBtnTips: this.downBtnTips,
      // 	btnCommandName: this.btnCommandName,
      // 	btnCommandName_id: PMCOIData._id,
      // 	ZCTProductURL: this.ZCTProductURL,
      // 	hiddenName: this.hiddenName
      // });
    },
    //快速填写
    onAutoFill: function onAutoFill(event) {
      switch (this.dataType) {
        case "POAddNew":{
            this.fillBlock.fillItemList[0].fillValue = 1; //计划单数

            this.fillBlock.fillItemList[1].fillValue = this.PMCOI.ZCTPlanNeedNum; //计划数量

            var TempT = new Date();
            this.fillBlock.fillItemList[2].fillValue = _pmJSTools.default.dateAddDays(TempT, 1);
            this.fillBlock.fillItemList[3].fillValue = 1; //相隔数
            var that = this;
            // this.setData({
            // 	isConfButtonDisabled: false,
            // 	confirmBtnClass: "weui-btn weui-btn_primary",//设置为可以编辑
            // 	fillBlock: this.fillBlock,
            // 	IsFillHelpSwitch: false
            // });
            that.isConfButtonDisabled = false;
            that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑
            that.fillBlock = this.fillBlock;
            that.IsFillHelpSwitch = false;
            break;
          }

        default:{
            break;
          }}

    },
    //智能辅助切换开关
    onAtuoSwitchChange: function onAtuoSwitchChange(event) {
      var that = this;
      this.IsFillHelpSwitch = event.detail.value;
      // this.setData({
      // 	IsFillHelpSwitch: this.IsFillHelpSwitch
      // });
      that.IsFillHelpSwitch = this.IsFillHelpSwitch;
    },
    //智能辅助切换开关, 按单数计算
    onAtuoSwitchChangeByPO: function onAtuoSwitchChangeByPO(event) {
      this.IsFillHelpSwitchByPO = event.detail.value;

      if (this.IsFillHelpSwitchByPO) {
        this.IsFillHelpSwitchByNum = false;
      } else {
        this.IsFillHelpSwitchByNum = true;
      }
      var that = this;
      // this.setData({
      // 	IsFillHelpSwitchByPO: this.IsFillHelpSwitchByPO,
      // 	IsFillHelpSwitchByNum: this.IsFillHelpSwitchByNum
      // });
      that.IsFillHelpSwitchByPO = this.IsFillHelpSwitchByPO;
      that.IsFillHelpSwitchByNum = this.IsFillHelpSwitchByNum;
    },
    //智能辅助切换开关，按每单数量计算
    onAtuoSwitchChangeByNum: function onAtuoSwitchChangeByNum(event) {
      this.IsFillHelpSwitchByNum = event.detail.value;

      if (this.IsFillHelpSwitchByNum) {
        this.IsFillHelpSwitchByPO = false;
      } else {
        this.IsFillHelpSwitchByPO = true;
      }
      var that = this;
      // this.setData({
      // 	IsFillHelpSwitchByPO: this.IsFillHelpSwitchByPO,
      // 	IsFillHelpSwitchByNum: this.IsFillHelpSwitchByNum
      // });
      that.IsFillHelpSwitchByPO = this.IsFillHelpSwitchByPO;
      that.IsFillHelpSwitchByNum = this.IsFillHelpSwitchByNum;
    },
    //智能辅助切换开关
    onLastPIListSwitchChange: function onLastPIListSwitchChange(event) {
      var that = this;
      this.IsLastPIFillHelpSwitch = event.detail.value;
      // this.setData({
      // 	IsLastPIFillHelpSwitch: this.IsLastPIFillHelpSwitch
      // });
      that.IsLastPIFillHelpSwitch = this.IsLastPIFillHelpSwitch;
    },
    //智能辅助填写
    onAutoHelpFill: function onAutoHelpFill(event) {
      var that = this;
      if (this.IsFillHelpSwitch == false) //不需要智能填写退出
        {
          return;
        }

      switch (this.dataType) {
        case "POAddNew":{
            if (event.currentTarget.id == "POAddPOs" || event.currentTarget.id == "POAddPONum") {
              if (this.IsFillHelpSwitchByPO) {
                if (this.fillBlock.fillItemList[0].fillValue > 31) //计划单数
                  {
                    this.fillBlock.fillItemList[0].fillValue = 31;
                    // this.setData({
                    // 	fillBlock: this.fillBlock
                    // });
                    that.fillBlock = this.fillBlock;
                  }

                if (!_pmJSTools.default.IsNullOrEmpty(this.fillBlock.fillItemList[0].fillValue) && this.
                fillBlock.fillItemList[0].fillValue > 0) //计划单数
                  {
                    var TempUnit = this.PMCOI.PMOrderUnit;

                    if (TempUnit == "件" || TempUnit == "个" || TempUnit == "套" || TempUnit == "箱" ||
                    TempUnit == "袋") {
                      var tempNum = parseFloat(this.PMCOI.ZCTPlanNeedNum / this.fillBlock.
                      fillItemList[0].fillValue);
                      this.fillBlock.fillItemList[1].fillValue = parseFloat(tempNum.toFixed(0));
                    } else {
                      var tempNum = parseFloat(this.PMCOI.ZCTPlanNeedNum / this.fillBlock.
                      fillItemList[0].fillValue);
                      this.fillBlock.fillItemList[1].fillValue = parseFloat(tempNum.toFixed(2));
                    }
                  }
              } else {
                if (this.fillBlock.fillItemList[1].fillValue > 0) //单数
                  {
                    var tempPO = _pmJSTools.default.GetNum(this.PMCOI.ZCTPlanNeedNum / this.fillBlock.
                    fillItemList[1].fillValue);
                    this.fillBlock.fillItemList[0].fillValue = parseFloat(tempPO.toFixed());
                  }
              }

              var TempT = new Date();
              this.fillBlock.fillItemList[2].fillValue = _pmJSTools.default.dateAddDays(TempT, 1);
              this.fillBlock.fillItemList[3].fillValue = 1; //间隔数

              // this.setData({
              // 	isConfButtonDisabled: false,
              // 	confirmBtnClass: "weui-btn weui-btn_primary",//设置为可以编辑
              // 	fillBlock: this.fillBlock
              // });
              that.isConfButtonDisabled = false;
              that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑
              that.fillBlock = this.fillBlock;
            }

            break;
          }

        default:{
            break;
          }}

    },
    //产品号失去焦点事件
    bindProductName: function bindProductName(event) {
      var that = this;
      if (event.currentTarget.id == "PMInnerProductID") {
        var that = this;
        setTimeout(function () {
          //产品号输入框失去焦点500毫秒后关闭联想下拉框（防止用户输入后不选择联想内容）
          // that.setData({
          // 	// 当用户选择某个联想词，隐藏下拉列表
          // 	hideScroll: true,
          // 	bindSource: []
          // });
          // 当用户选择某个联想词，隐藏下拉列表
          that.hideScroll = true;
          that.bindSource = [];
        }, 500);
      }

      return; //输入后自动带出产品名效果，已舍弃

      if (event.currentTarget.id == "PMInnerProductID") {
        //输入的为产品号
        var TempfillItem = _pmJSTools.default.getOneControlFromList(event.currentTarget.id, this.fillBlock.
        fillItemList);
        var TempProductID = TempfillItem.fillValue; //输入的产品号
        //获取缓存中产品信息

        var TempStorageProductArr = new Array();
        var TempProductStr = wx.getStorageSync('ProductList');

        if (!_pmJSTools.default.IsNullOrEmpty(TempProductStr)) {
          TempStorageProductArr = JSON.parse(TempProductStr);
        } //查找缓存是否存在此产品信息


        var TempThisProduct = TempStorageProductArr.find(function (e) {
          return e.ProductID == TempProductID;
        });

        if (!_pmJSTools.default.IsNullOrEmpty(TempThisProduct)) {
          var that = this;
          //已存在此产品缓存信息
          var TempPMInnerProductNameObj = 'fillBlock.fillItemList[1].fillValue'; //给产品名赋值

          // this.setData({ //[TempPMInnerProductNameObj]: TempThisProduct.ProductName
          // });
          that[TempPMInnerProductNameObj] = TempThisProduct.ProductName;
          //try fix
          //this[TempPMInnerProductNameObj] = TempThisProduct.ProductName;

          if (!_pmJSTools.default.IsNullOrEmpty(TempThisProduct)) {
            //已存在此产品缓存信息
            var TempProductNameIndex = 0;
            var TempIsFind = false;

            for (var i = 0; i < this.fillBlock.fillItemList.length; i++) {
              if (this.fillBlock.fillItemList[i]._id == "PMInnerProductName") //遍历找到产品名称输入框的下标
                {
                  TempProductNameIndex = i;
                  TempIsFind = true;
                  break;
                }
            }

            if (TempIsFind) {
              //找到了产品名称输入框，进行赋值
              var _TempPMInnerProductNameObj = 'fillBlock.fillItemList[' + TempProductNameIndex +
              '].fillValue'; //给产品名赋值

              // this.setData({ //[TempPMInnerProductNameObj]: TempThisProduct.ProductName
              // });
              var that = this;
              //try fix
              that[_TempPMInnerProductNameObj] = TempThisProduct.ProductName;
            }
          }
        }
      }
    },

    /**
        * Creator:SE7,Date:2021-5-31
        * 获取默认工序
        */
    GetLastALLPIData: function GetLastALLPIData() {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var that, funcName, funcPra, serRes;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                that = _this5;
                funcName = "GetLastALLPIData";
                funcPra = {};
                funcPra.PMInnerProductID = _this5.PMCOI.PMInnerProductID;_context2.next = 6;return (
                  _pmSerTools.default.exePMCOI(funcName, funcPra));case 6:serRes = _context2.sent;

                if (serRes.errMsg == "OK" && !_pmJSTools.default.IsNullOrEmpty(serRes.result)) //数据结果放在了result第一个数据列中,所以需要脱壳
                  {
                    _this5.PMPIList = serRes.result[0];
                    // this.setData({
                    // 	PMPIList: this.PMPIList,
                    // 	IsPIlength: true
                    // });
                    that.PMPIList = _this5.PMPIList;
                    that.IsPIlength = true;
                  } else if (serRes.errMsg != "OK" && serRes.errMsg != "NoData") {
                  _this5.ShowErrorTips("获取默认工序失败");
                }case 8:case "end":return _context2.stop();}}}, _callee2);}))();
    },

    /**Creator:SE24,Date:2021-5-17 17:29:48
        * 显示提示方法
        */
    ShowErrorTips: function ShowErrorTips(TempErrorMsg) {
      var that = this; //setTimeout里会用到，

      that.topTipsStr = TempErrorMsg;
      // that.setData({
      // 	//MoveToUp触发
      // 	topTips: true,
      // 	topTipsStr: that.topTipsStr
      // });
      that.topTips = true;
      that.topTipsStr = that.topTipsStr;
      setTimeout(function () {
        //时间限制
        // that.setData({
        // 	topTips: false,
        // 	topTipsStr: ""
        // });
        that.topTips = false;
        that.topTipsStr = "";
      }, 2000);
    },

    scroll: function scroll() {
      console.log("占位：函数 scroll 未声明");
    },

    onPMRAWProTap: function onPMRAWProTap() {
      console.log("占位：函数 onPMRAWProTap 未声明");
    },

    onPMRAWProLongTap: function onPMRAWProLongTap() {
      console.log("占位：函数 onPMRAWProLongTap 未声明");
    },

    upper: function upper() {
      console.log("占位：函数 upper 未声明");
    },

    lower: function lower() {
      console.log("占位：函数 lower 未声明");
    },

    onPMPIProTap: function onPMPIProTap() {
      console.log("占位：函数 onPMPIProTap 未声明");
    },

    onPMPIProLongTap: function onPMPIProLongTap() {
      console.log("占位：函数 onPMPIProLongTap 未声明");
    },

    onPMPIPurTap: function onPMPIPurTap() {
      console.log("占位：函数 onPMPIPurTap 未声明");
    },

    onPMPIPurLongTap: function onPMPIPurLongTap() {
      console.log("占位：函数 onPMPIPurLongTap 未声明");
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 8)["default"]))

/***/ }),
/* 34 */
/*!************************************************************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/propertyPage/propertyPage.css?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_propertyPage_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!./propertyPage.css?vue&type=style&index=0&lang=css& */ 35);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_propertyPage_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_propertyPage_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_propertyPage_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_propertyPage_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_propertyPage_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 35 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/propertyPage/propertyPage.css?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/*!*******************************************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskList/taskList.js?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_taskList_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./taskList.js?vue&type=script&lang=js& */ 41);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_taskList_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_taskList_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_taskList_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_taskList_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_taskList_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 41 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskList/taskList.js?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));








var _pmSerTools = _interopRequireDefault(__webpack_require__(/*! ../../utils/pmSerTools.js */ 25));
var _pmJSTools = _interopRequireDefault(__webpack_require__(/*! ../../utils/pmJSTools.js */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //var base64 = require("../images/base64");
var app = getApp();var btnSelectedStyle = " box-shadow: 2px 2px 5px #000;"; //用于动态表达按钮选中的状态
//用于动态表达按钮选中的状态
var btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;"; //用于动态表达按钮没有选中的状态
//用于动态表达按钮没有选中的状态
// const pmJSTools = require("../../utils/pmJSTools.js").default;
// const pmSerTools = require("../../utils/pmSerTools.js").default;
var DataListSkip = 0; //页起始点 （分页显示，第一页） 当系统下拉刷新时恢复到默认值
//页起始点 （分页显示，第一页） 当系统下拉刷新时恢复到默认值
var DataListLimit = 10; //页长 （一次从服务器获取数据项数） 当系统下拉刷新时恢复到默认值
var _default = { data: function data() {return { mainTitle: "我发布的任务", subTips: "显示及操作", topTips: false, topTipsStr: "",
      pmDialog: false,
      dialogMainTitle: "",
      dialogMainContent: "",
      dialogSubOperation: "",
      dialogMainOperation: "",
      dialogPMOrderProType: "",
      PMCOIList: [],
      //PMCOI清单
      PMCOIListSkip: 0,
      //页号 （分页显示，第一页） //下拉初始化， 上拉加页号
      PMCOIListLimit: DataListLimit,
      //页长 （一次从服务器获取数据项数） //下拉初始化， 上拉加页长不变
      isMoveToDown: false,
      //是否上滑到底部，滑到底部进行加载更多
      isMoveToUp: false,
      //是否下滑到顶部，滑到顶部进行加载更新(默认是true)
      mHeight: 1000,
      //设置一个默认屏高参数
      showIOSDialog: {
        //PMCOI命令对话框
        isShowIOSDialog: false,
        _id: "" //对象主键
      },

      propertyDialog: {
        //属性框数据
        isPropertyDialogOpen: false,
        //是否打开半屏组件
        mainTitle: "主标题",
        //主标题
        subTitle: "子标题",
        //子标题
        mainTip: "主提示",
        //主提示
        subTip: "子提示",
        //子提示
        subOperation: "取消",
        //辅助操作按钮提示
        mainOperation: "确认",
        //主操作按钮提示
        _id: "",
        //对象主键
        ZCTProductURL: "",
        //主对象图片
        subInfoList: [{
          mainInfo: "",
          //属性类型
          subInfo: ""
          //属性描述
          //  ZCTProductURL: "" //产品图片
        }] },


      classView: "weui-actionsheet__cell",
      //长按交付任务弹出编辑、删除按钮默认可以操作；授权后灰色不可操作
      ClickItemData: {},
      //任务清单点击项的数据源。用于控制操作按钮的显示
      OptionSelectState: ['ALLOWED'],
      //默认查询执行中的任务
      OptionSelectStateName: "执行中",
      // topTips: false,
      // //顶部提示显示开关
      // topTipsStr: "",
      // //顶部提示内容
      ICOImage: {
        ICOImageEdit: "/static/images/icon/ico_Edit_C.png",
        ICOImagePublish: "/static/images/icon/ico_PUBLISH.png",
        ICOImageWaitAuthorize: "/static/images/icon/ico_WaitAuthorize.png",
        ICOImageEXEC: "/static/images/icon/ico_EXEC.png",
        ICOImageUnaccepted: "/static/images/icon/ico_UNACCEPTED.png",
        ICOImageAccept: "/static/images/icon/ico_ACCEPT.png" },

      pmDialogShouQuan: false,
      COIAddState: true, //交付任务创建按钮操作状态,
      // ZCTProductURL: "",
      hide: false,
      theme: "",
      btnCommandName_id: "" };

  },

  components: {},
  props: {},

  /**
              * 生命周期函数--监听页面加载
              */
  onLoad: function () {var _onLoad = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(options) {var that, WXLogoState, avatarUrl, gender, nickName, eventChannel;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              //用来给scrollview设置固定高度
              that = this;
              uni.getSystemInfo({
                success: function success(res) {
                  that.mHeight = res.windowHeight;
                } });


              //获取登录页面赋值的微信昵称、头像等信息 

              WXLogoState = app.globalData.WXLogoState; //状态 

              avatarUrl = app.globalData.avatarUrl; //授权微信号的头像 

              gender = app.globalData.gender; //授权微信号性别（女：2； 男：1 ） 

              nickName = app.globalData.nickName; //授权微信号昵称 
              //根据当前登陆状态判断是否还需要进行微信登陆（推荐工友和微信公众号注册时，需要进行微信登陆） 

              //   if (pmJSTools.IsNullOrEmpty(app.globalData._id)) {
              //     var serRes = await pmSerTools.getAccount();
              //     if (serRes != "OK") {
              //       //弹框出现
              //       // that.setData({
              //       //   pmDialogShouQuan: true
              //       // });
              // that.pmDialogShouQuan = true;
              //     }
              //   }
              if (!
              _pmJSTools.default.IsNullOrEmpty(_pmJSTools.default.GetSubObj([options, "dataType"]))) {_context.next = 11;break;}_context.next = 9;return (

                that.FunRefreshByOperationStatus());case 9:_context.next = 21;break;case 11:_context.t0 =

              options.dataType;_context.next = _context.t0 ===
              "COIAddNewDone" ? 14 : _context.t0 ===













              "loadMyCOIList" ? 18 : _context.t0 ===



              "loadMyCOIList" ? 19 : 20;break;case 14:that = this;eventChannel = this.getOpenerEventChannel();eventChannel.on('PMCOIList', function (PMCOIList) {// that.setData({
                //   PMCOIList: PMCOIList
                // });
                that.PMCOIList = PMCOIList;});return _context.abrupt("break", 21);case 18:return _context.abrupt("break", 21);case 19:return _context.abrupt("break", 21);case 20:return _context.abrupt("break", 21);case 21:case "end":return _context.stop();}}}, _callee, this);}));function onLoad(_x) {return _onLoad.apply(this, arguments);}return onLoad;}(),








  /**
                                                                                                                                                                                                                                                                                                                                                                        * 生命周期函数--监听页面初次渲染完成
                                                                                                                                                                                                                                                                                                                                                                        */
  onReady: function onReady() {},

  /**
                                   * 生命周期函数--监听页面隐藏
                                   */
  onHide: function onHide() {},

  /**
                                 * 生命周期函数--监听页面卸载
                                 */
  onUnload: function onUnload() {},

  /**
                                     * 页面相关事件处理函数--监听用户下拉动作
                                     */
  onPullDownRefresh: function onPullDownRefresh() {},

  /**
                                                       * 页面上拉触底事件的处理函数
                                                       */
  onReachBottom: function onReachBottom() {},

  /**
                                               * 用户点击右上角分享
                                               */
  onShareAppMessage: function onShareAppMessage(event) {
    var that = this;
    // 来自页面内转发按钮
    console.log(event.target);
    return {
      title: '制程通分享链接',
      path: '/miniprogram/pages/taskList/taskList',
      imageUrl: that.ZCTProductURL };

  },

  onShow: function onShow() {
    var that = this;
    // that.setData({
    //   COIAddState: true
    // });
    this.COIAddState = true;
    that.FunRefreshByOperationStatus();
  },

  methods: {
    OnPMCOIAddNewTap: function OnPMCOIAddNewTap(event) //新增客户订单按钮
    {var _this = this;
      var that = this;

      if (that.COIAddState == false) {
        return;
      }

      // that.setData({
      //  COIAddState: false
      // }); //获取登录页面赋值的微信昵称、头像等信息 
      that.COIAddState = false;

      var WXLogoState = app.globalData.WXLogoState; //状态 

      var avatarUrl = app.globalData.avatarUrl; //授权微信号的头像 

      var gender = app.globalData.gender; //授权微信号性别（女：2； 男：1 ） 

      var nickName = app.globalData.nickName; //授权微信号昵称 
      //根据当前登陆状态判断是否还需要进行微信登陆（推荐工友和微信公众号注册时，需要进行微信登陆） 
      //  if(WXLogoState ==true ) 
      //  { 
      //    console.log("弹框不出现") 
      //    this.setData({ 
      //      pmDialogShouQuan: false, 
      //    }) 
      //  } 
      //  else 
      //  { 
      //    console.log("弹框出现") 
      //    this.setData({ 
      //      pmDialogShouQuan: true, 
      //    }) 
      //  } 
      /////////////////////////////////////////////////
      /////////////////////////////////////////////////
      /////////////////////////////////////////////////

      // if (pmJSTools.IsNullOrEmpty(app.globalData.PMUserID)) {
      // 	console.log("弹框出现");
      // 	// this.setData({
      // 	//   pmDialogShouQuan: true
      // 	// });
      // 	that.pmDialogShouQuan = true;
      // 	return;
      // }

      console.log(event);
      var that = this;
      var PMCOI = {};
      // uni.navigateTo({
      // url: '../propertyPage/propertyPage?dataType=PMCOIAddNew',
      // 	success: res => {},
      // 	fail: () => {},
      // 	complete: () => {}
      // });
      wx.navigateTo({
        url: '../propertyPage/propertyPage?dataType=PMCOIAddNew',
        success: function success(res) {
          // 这里给要打开的页面传递数据.  第一个参数:方法key, 第二个参数:需要传递的数据
          res.eventChannel.emit('PMCOIList', _this.
          PMCOIList); //传递 this.data.PMCOIList过去式为了，添加成功后。
          //PMCOI直接添加到this.data.PMCOIList中，再返回当前界面，以减少一次数据读取

          that.FunRefreshByOperationStatus();
        } });

    },

    onPMCOITap: function onPMCOITap(event) //PMCOI 按下
    {
      console.log(event);
      var PMCOI = {};
      var TempisOperation = true; //是否允许操作过程管控

      var tempPMCOI = _pmJSTools.default.getOneControlFromList(event.currentTarget.id, this.PMCOIList);

      if (tempPMCOI.PMOrderState != "NORELEASE" && tempPMCOI.PMOrderState != "PUBLISH") {
        TempisOperation = false;
      } // wx.navigateTo({
      //   url: '../taskInterface/taskInterface?dataType=PMCOITap&isOperation='+TempisOperation+'&PMCOIID=' + event.currentTarget.id,
      // })
      //跳转到任务详情页 
      uni.navigateTo({
        url: '../taskDetail/taskDetail?dataType=PMCOITap&PMCOIID=' + event.currentTarget.id,
        success: function success(res) {},
        fail: function fail() {},
        complete: function complete() {} });

      // wx.navigateTo({
      //   url: '../taskDetail/taskDetail?dataType=PMCOITap&PMCOIID=' + event.currentTarget.id
      // });
    },

    onPMCOIImageTap: function onPMCOIImageTap(event) //PMCOI 图片按钮
    {
      var that = this;
      console.log(event);
      var TempData = _pmJSTools.default.getOneControlFromList(event.currentTarget.id, this.PMCOIList);

      if (_pmJSTools.default.IsNullOrEmpty(TempData)) {
        return; //没有弹框数据，不予显示
      }

      this.propertyDialog.mainTitle = "计划交货日期：" + TempData.ZCTPlanDeliDateShort, //主提示
      this.propertyDialog.subTitle = TempData.PMInnerCustomerOrderItemID, //子标题
      this.propertyDialog.mainTip = TempData.PMInnerProductName + "  计划数量：" + TempData.PMOrderNum + TempData.
      PMOrderUnit, //主标题
      this.propertyDialog.subTip = "已完成：" + TempData.ZCTFinishedNum + TempData.PMOrderUnit + "  " + "完成率：" +
      TempData.ZCTFinishedRate + "%", //子提示
      this.propertyDialog.subInfoList = null;
      this.propertyDialog.subOperation = "取消", //辅助操作按钮提示
      this.propertyDialog.mainOperation = "修改", //主操作按钮提示
      this.propertyDialog.isPropertyDialogOpen = true;
      this.propertyDialog._id = TempData._id;

      if (TempData.PMOrderProType == "劳务") {
        this.propertyDialog.mainTip = TempData.PMInnerProductName + "  计划天数：" + TempData.PMOrderNum + TempData.
        PMOrderUnit; //主标题
      }

      // this.setData({
      //   propertyDialog: this.propertyDialog,
      //   ZCTProductURL: TempData.ZCTProductURL //设置主对象图片

      // });
      that.propertyDialog = this.propertyDialog;
      that.ZCTProductURL = TempData.ZCTProductURL;
    },

    propertyDialogClose: function propertyDialogClose() {
      this.propertyDialog.isPropertyDialogOpen = false;
      // this.setData({
      //   propertyDialog: this.propertyDialog
      // });
      that.propertyDialog = this.propertyDialog;
    },

    bindLoadingMore: function bindLoadingMore() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var that;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                console.log('滑到底了，开始加载更多');
                that = _this2; //setTimeout里会用到，

                // that.setData({
                //   //MoveToDow触发
                //   isMoveToDown: true
                // });
                that.isMoveToDown = true;
                setTimeout(function () {
                  //MoveToDow 时间限制
                  // that.setData({
                  //   isMoveToDown: false
                  // });
                  that.isMoveToDown = false;
                }, 3000);_context2.next = 6;return (
                  _this2.getPMCOIListByUserMore());case 6:case "end":return _context2.stop();}}}, _callee2);}))();
    },

    bindLoadingNew: function bindLoadingNew() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var that;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                console.log('滑到顶了，开始加载更多');
                that = _this3; //setTimeout里会用到，

                // that.setData({
                //   //MoveToUp触发
                //   isMoveToUp: true
                // });
                that.isMoveToUp = true;
                setTimeout(function () {
                  //时间限制
                  // that.setData({
                  //   isMoveToUp: false
                  // });
                  that.isMoveToUp = false;
                }, 3000); //await this.getPMCOIListByUserNew()

                that.FunRefreshByOperationStatus();case 5:case "end":return _context3.stop();}}}, _callee3);}))();
    },

    //加载更多
    getPMCOIListByUserMore: function getPMCOIListByUserMore() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var that, funcName, funcPra, serRes;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                that = _this4;
                funcName = "getPMCOIListbyAllPMUser";
                funcPra = {};
                funcPra.PMUSer = {}; //从app中获得，暂时置空

                _this4.PMCOIListSkip = _this4.PMCOIListSkip + _this4.PMCOIListLimit, //页起始 （分页显示，第一页） //下拉初始化， 上拉加页号
                // this.setData({
                //   PMCOIListSkip: this.PMCOIListSkip //页起始

                // });
                that.PMCOIListSkip = _this4.PMCOIListSkip;
                funcPra.skipAndLimit = [_this4.PMCOIListSkip, DataListLimit]; // 

                funcPra.SelectState = _this4.OptionSelectState;
                funcPra.ZCTCreater = app.globalData.PMUserID; //创建人（当前自己的UserID）
                _context4.next = 10;return (
                  _pmSerTools.default.exePMCOI(funcName, funcPra));case 10:serRes = _context4.sent;
                console.log(serRes);



                if (serRes.errMsg != "OK") {
                  _this4.topTipsStr = serRes.errMsg;
                  //var that = this; //setTimeout里会用到，
                  //因为查询没有成功,增加的起始点要回退

                  _this4.PMCOIListSkip = _this4.PMCOIListSkip - _this4.PMCOIListLimit, //页起始 （分页显示，第一页） //下拉初始化， 上拉加页号
                  // this.setData({
                  //   PMCOIListSkip: this.PMCOIListSkip //页起始

                  // });
                  that.PMCOIListSkip = _this4.PMCOIListSkip;
                  // that.setData({
                  //   //MoveToUp触发
                  //   topTips: true,
                  //   topTipsStr: that.topTipsStr
                  // });
                  that.topTips = true;
                  that.topTipsStr = that.topTipsStr;
                  setTimeout(function () {
                    //时间限制
                    // that.setData({
                    //   topTips: false,
                    //   topTipsStr: ""
                    // });
                    that.topTips = false,
                    that.topTipsStr = "";
                  }, 3000);
                } else

                {
                  if (serRes.result != null)
                  {
                    if (serRes.result.length > 0)
                    {
                      _this4.PMCOIList = _this4.PMCOIList.concat(serRes.result); //新查询到的直接加在后面
                      //执行计算驱动函数（有些变量是计算获得的）

                      _this4.calPMCOIList();
                      // this.setData({
                      //   PMCOIList: this.PMCOIList
                      // });
                      that.PMCOIList = _this4.PMCOIList;
                    } else

                    {
                      //因为查询没有成功,增加的起始点要回退
                      _this4.PMCOIListSkip = _this4.PMCOIListSkip - _this4.PMCOIListLimit, //页起始 （分页显示，第一页） //下拉初始化， 上拉加页号
                      // this.setData({
                      //   PMCOIListSkip: this.PMCOIListSkip //页起始

                      // });
                      that.PMCOIListSkip = _this4.PMCOIListSkip;
                    }

                  }


                  //执行为OK,但结果为空的情形。
                  if (_pmJSTools.default.IsNullOrEmpty(_pmJSTools.default.GetSubObj([serRes.result, 0]))) //数据结果放在了result第一个数据列中,所以需要脱壳
                    {

                    }
                }case 13:case "end":return _context4.stop();}}}, _callee4);}))();
    },

    //刷新
    getPMCOIListByUserNew: function getPMCOIListByUserNew() {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var that, funcName, funcPra, serRes;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                that = _this5;
                funcName = "getPMCOIListbyAllPMUser";
                funcPra = {};
                funcPra.PMUSer = {}; //从app中获得，暂时置空

                _this5.PMCOIListSkip = DataListSkip, //页号 （分页显示，第一页） //下拉初始化， 上拉加页号
                _this5.PMCOIListLimit = DataListLimit, //页长 （一次从服务器获取数据项数） //下拉初始化， 上拉加页长不变

                that.PMCOIListSkip = _this5.PMCOIListSkip,
                that.PMCOIListLimit = _this5.PMCOIListLimit;
                funcPra.skipAndLimit = [DataListSkip, DataListLimit]; //0，0 标识按系统默认 

                funcPra.SelectState = _this5.OptionSelectState;
                funcPra.ZCTCreater = app.globalData.PMUserID; //创建人（当前自己的UserID）
                _context5.next = 10;return (
                  _pmSerTools.default.exePMCOI(funcName, funcPra));case 10:serRes = _context5.sent;

                console.log("前端界面获取的值为：" + serRes);

                if (serRes.result.errMsg != "OK")
                {
                  _this5.topTipsStr = serRes.errMsg;
                  that = _this5; //setTimeout里会用到，
                  that.topTips = true,
                  that.topTipsStr = that.topTipsStr;
                  setTimeout(function () {
                    that.topTips = false,
                    that.topTipsStr = "";
                  }, 3000);
                } else

                {
                  _this5.PMCOIList = serRes.result.result; //执行计算驱动函数（有些变量是计算获得的）
                  _this5.calPMCOIList();
                  that.pmcoilist = _this5.PMCOIList;
                  console.log(_this5.PMCOIList);
                }

                // if (!pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([serRes.result, 0]))) //数据结果放在了result第一个数据列中,所以需要脱壳
                // {
                // 	this.PMCOIList = serRes.result[0]; //执行计算驱动函数（有些变量是计算获得的）
                // 	this.calPMCOIList();
                // 	that.pmcoilist = this.PMCOIList;
                //     	console.log(this.PMCOIList);
                // }

                // if (serRes.errMsg == "OK" && pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([serRes.result, 0]))) {
                // 	that.PMCOIList = [];
                // }

                // if (serRes.errMsg != "OK") {
                // 	this.topTipsStr = serRes.errMsg;
                // 	var that = this; //setTimeout里会用到，
                // 	that.topTips = true,
                // 		that.topTipsStr = that.topTipsStr;
                // 	setTimeout(function() {
                // 		that.topTips = false,
                // 			that.topTipsStr = "";
                // 	}, 3000);
                // }
              case 13:case "end":return _context5.stop();}}}, _callee5);}))();},

    onPMCOIEdit: function onPMCOIEdit(event) {
      //PMCOI编辑
      var that = this;
      var TempCOIData = that.PMCOIList.find(function (e) {
        return e._id == event.currentTarget.id;
      });

      if (!_pmJSTools.default.IsNullOrEmpty(TempCOIData)) {
        if (TempCOIData.PMOrderState == "NORELEASE" || TempCOIData.PMOrderState == "PUBLISH") {
          wx.navigateTo({
            url: '../propertyPage/propertyPage?dataType=PMCOIEdit&PMCOI_id=' + event.currentTarget.
            id,
            success: function success(res) {
              // 这里给要打开的页面传递数据.  第一个参数:方法key, 第二个参数:需要传递的数据
              res.eventChannel.emit('PMCOIList', that.PMCOIList); //that.OnEditSelect();
              //传递 this.data.PMCOIList过去式为了，添加成功后。
              //PMCOI直接添加到this.data.PMCOIList中，再返回当前界面，以减少一次数据读取
            } });

          that.propertyDialog.isPropertyDialogOpen = false;
          // that.setData({
          //   propertyDialog: that.propertyDialog
          // });
          that.propertyDialog = that.propertyDialog;
        } else {
          that.ShowErrorTips("交付任务非编辑状态或发布状态，不能进行编辑操作！");
        }
      }
    },

    //PMCOI查看
    onPMCOISHOW: function onPMCOISHOW(event) {
      var that = this;
      console.log(event); //跳转到任务属性页
      // wx.navigateTo({
      //   url: '../propertyPage/propertyPage?dataType=PMCOIShow&PMCOI_id='+ event.currentTarget.id,
      //   success: res => {
      //     // 这里给要打开的页面传递数据.  第一个参数:方法key, 第二个参数:需要传递的数据
      //     res.eventChannel.emit('PMCOIList', this.data.PMCOIList)
      //     //传递 this.data.PMCOIList过去式为了，添加成功后。
      //     //PMCOI直接添加到this.data.PMCOIList中，再返回当前界面，以减少一次数据读取
      //   }
      // })
      //跳转到任务详情页 

      wx.navigateTo({
        url: '../taskDetail/taskDetail?dataType=PMCOITap&PMCOIID=' + event.currentTarget.id });

      this.propertyDialog.isPropertyDialogOpen = false;
      // this.setData({
      //   propertyDialog: this.propertyDialog
      // });
      that.propertyDialog = this.propertyDialog;
    },

    calPMCOIList: function calPMCOIList() //有一些字段是通过遍历PMCOIList,计算获得的，通过此函数完成。
    {
      //calPMCOIList只是修改this.data，并没有执行setDate进行渲染
      for (var tempKey in this.PMCOIList) {
        //calChangeTimeStr用于现在在任务条上的时间简称，这是个计算值，所以需要临时计算获得
        _pmJSTools.default.calPMCOI(this.PMCOIList[tempKey]);
      }
    },

    onPMCOICommandSelect: function onPMCOICommandSelect(event) {
      var that = this;
      this.showIOSDialog._id = event.currentTarget.id;
      this.showIOSDialog;
      this.ClickItemData = this.PMCOIList.find(function (e) {
        return e._id == event.currentTarget.id;
      });
      this.showIOSDialog.isShowIOSDialog = true;
      // this.setData({
      //   showIOSDialog: this.showIOSDialog,
      //   ClickItemData: this.ClickItemData
      // });
      that.showIOSDialog = this.showIOSDialog;
      that.ClickItemData = this.ClickItemData;
      var tempPMCOI = _pmJSTools.default.getOneControlFromList(event.currentTarget.id, this.PMCOIList);
      this.dialogPMOrderProType = tempPMCOI.PMOrderProType;

      if (tempPMCOI.PMOrderState != "NORELEASE" && tempPMCOI.PMOrderState != "PUBLISH") {
        // this.setData({
        //   classView: "weui-actionsheet__cellnone"
        // }); //已授权，不允许进行删除和编辑
        that.classView = "weui-actionsheet__cellnone";
      } else {
        // this.setData({
        //   classView: "weui-actionsheet__cell"
        // });
        this.classView = "weui-actionsheet__cell";
      }

      // this.setData({
      //   dialogPMOrderProType: this.dialogPMOrderProType
      // });
      that.dialogPMOrderProType = this.dialogPMOrderProType;
    },

    onPMCOICommandSelectClose: function onPMCOICommandSelectClose() {
      this.showIOSDialog.isShowIOSDialog = false;
      // this.setData({
      //   showIOSDialog: this.showIOSDialog
      // });
      this.showIOSDialog = this.showIOSDialog;
    },

    sharePMCOI: function sharePMCOI(event) {
      console.log(event);
      var tempPMCOI = _pmJSTools.default.getOneControlFromList(event.currentTarget.id, this.PMCOIList);
      wx.navigateTo({
        url: '../sharePage/sharePage?dataType=PMCOIOpen&PMCOI_id=' + event.currentTarget.id,
        success: function success(res) {
          // 这里给要打开的页面传递数据.  第一个参数:方法key, 第二个参数:需要传递的数据
          res.eventChannel.emit('PMCOI', tempPMCOI); //传递 this.data.PMCOIList过去式为了，添加成功后。
          //PMCOI直接添加到this.data.PMCOIList中，再返回当前界面，以减少一次数据读取
        } });

    },

    //删除交付任务（二次确认弹框）
    deletePMCOI: function deletePMCOI(event) {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var funcPra, tempPMCOI;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                console.log(event);
                funcPra = {};
                funcPra.PMCOI = {}; //准备一个空的PMCOI

                funcPra.PMCOI._id = event.currentTarget.id;
                tempPMCOI = _pmJSTools.default.getOneControlFromList(event.currentTarget.id, _this6.PMCOIList);
                funcPra.PMCOI = tempPMCOI;
                wx.showModal({
                  title: '提示',
                  content: '确认要删除吗?',
                  success: function success(res) {
                    if (res.confirm) {
                      console.log('用户点击确定');
                      _this6.deletePMCOIConfirm(funcPra);
                    } else if (res.cancel) {
                      console.log('用户点击取消');
                    }
                  } });case 7:case "end":return _context6.stop();}}}, _callee6);}))();

    },

    //确认进行二次删除交付任务
    deletePMCOIConfirm: function deletePMCOIConfirm(funcPra) {var _this7 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var that, tempRes, TempPMCOIList;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:
                that = _this7;_context7.next = 3;return (
                  _pmSerTools.default.exePMCOI("PMCOIDelete", funcPra));case 3:tempRes = _context7.sent;

                if (tempRes.errMsg == "OK") {
                  //错误处理
                  wx.showToast({
                    title: '删除交付任务成功！',
                    icon: 'none',
                    duration: 2000 });
                  //调用通用方法----删除列表数据【数组】（this.data.PMCOIList）中_id值为“funcPra.PMCOI._id"的数据

                  TempPMCOIList = _pmJSTools.default.DeleteFromList(funcPra.PMCOI._id, _this7.
                  PMCOIList); //执行计算驱动函数（有些变量是计算获得的）

                  _this7.calPMCOIList(); //将删除后的列表数组TempPMCOIList，重新赋值

                  // this.setData({
                  //   PMCOIList: TempPMCOIList
                  // });
                  that.PMCOIList = TempPMCOIList;
                } else {
                  //错误处理
                  that.ShowErrorTips('删除交付任务错误:' + tempRes.errMsg + '！');
                }case 5:case "end":return _context7.stop();}}}, _callee7);}))();
    },

    //
    pmDialogClose: function pmDialogClose(event) {
      // this.setData({
      //   pmDialog: false
      // });
      this.pmDialog = false;
    },

    //加到我的任务
    addPMCOI: function addPMCOI(event) {var _this8 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {var that, funcPra, tempRes, TempPMCOIList;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:
                that = _this8; //这里准备写一个标准的添加函数

                funcPra = {};
                funcPra.ZCTPMCOI_id = event.currentTarget.id;_context8.next = 5;return (
                  _pmSerTools.default.exePMCOI("AddOneMyPMCOIbyPMUser", funcPra));case 5:tempRes = _context8.sent;

                if (tempRes.errMsg == "OK") {
                  wx.showToast({
                    title: '加到我的任务成功，请到我的任务中查看',
                    icon: 'none',
                    duration: 2000 });
                  //加入到我的任务中后，需要将该数据从当前列表中移除 
                  //调用通用方法----删除列表数据【数组】（this.data.PMCOIList）中_id值为“funcPra.PMCOI._id"的数据 

                  TempPMCOIList = _pmJSTools.default.DeleteFromList(funcPra.ZCTPMCOI_id, _this8.
                  PMCOIList); //执行计算驱动函数（有些变量是计算获得的） 

                  _this8.calPMCOIList(); //将删除后的列表数组TempPMCOIList，重新赋值 

                  // this.setData({
                  //   PMCOIList: TempPMCOIList
                  // });
                  that.PMCOIList = TempPMCOIList;
                } else {
                  //错误处理
                  that.ShowErrorTips("创建交付任务错误:" + tempRes.errMsg);
                }case 7:case "end":return _context8.stop();}}}, _callee8);}))();
    },

    //发布
    publishPMCOI: function publishPMCOI(event) {var _this9 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var that, funcPra, PMCOIData, TempDN, TempNowMonth, TempNowDay, TempSD;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:
                console.log("发布事件监听", event);
                that = _this9;
                funcPra = {};
                funcPra.PMCOI = {};
                PMCOIData = _pmJSTools.default.getOneControlFromList(event.currentTarget.id, _this9.
                PMCOIList); //根据本条数据的_id，找到本条数据COI数据
                //判断当前日期是否超过超过计划交付日期，若超过则不允许发布，若已授权也不可发布

                TempDN = new Date();
                TempNowMonth = TempDN.getMonth() + 1 > 9 ? TempDN.getMonth() + 1 : "0" + (TempDN.getMonth() + 1);
                TempNowDay = TempDN.getDate() > 9 ? TempDN.getDate() : "0" + TempDN.getDate();
                TempSD = TempDN.getFullYear() + "/" + TempNowMonth + "/" + TempNowDay;

                if (TempSD > PMCOIData.ZCTPlanDeliDateShort || PMCOIData.PMOrderState != "NORELEASE" && PMCOIData.
                PMOrderState != "PUBLISH") {
                  that.ShowErrorTips("任务发布失败:当前任务不支持发布，已超过计划交付日期或已进入授权执行状态！");
                } else {
                  wx.showModal({
                    title: '温馨提示',
                    content: '制程微信小程序平台仅是提供给生产车间和工人使用的任务管理工具，并不用于招聘等行为。用户应对工友登记或账号绑定时所填写的资料的真实性、合法性、准确性和有效性承担责任。',
                    confirmText: '发布',
                    success: function () {var _success = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9(res) {return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:
                                if (res.confirm) {
                                  funcPra.PMCOI = PMCOIData; //将本条数据COI信息，赋值到funPra中

                                  funcPra.PMCOI._id = event.currentTarget.id;
                                  that.FunChooseLocation(funcPra);
                                } else if (res.cancel) {}case 1:case "end":return _context9.stop();}}}, _callee9);}));function success(_x2) {return _success.apply(this, arguments);}return success;}() });


                }case 10:case "end":return _context10.stop();}}}, _callee10);}))();
    },

    //发布位置选择并更新
    FunChooseLocation: function FunChooseLocation(funcPra) {var _this10 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11() {var that;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:
                that = _this10;
                wx.getSetting({
                  success: function success(res) {
                    //是否开启授权
                    if (!res.authSetting['scope.userLocation']) {
                      that.fetchAgainLocation(funcPra);
                    } else {
                      that.FunWXChooseLocation(funcPra);
                    }
                  } });case 2:case "end":return _context11.stop();}}}, _callee11);}))();


    },

    //引导重新获取授权
    fetchAgainLocation: function fetchAgainLocation(funcPra) {
      var that = this;
      wx.getSetting({
        success: function success(res) {
          var statu = res.authSetting;

          if (!statu['scope.userLocation']) {
            wx.showModal({
              title: '是否授权当前位置',
              content: '需要获取您的地理位置，请确认授权，否则发布功能将无法使用',
              success: function success(tip) {
                if (tip.confirm) {
                  wx.openSetting({
                    success: function success(data) {
                      if (data.authSetting[
                      "scope.userLocation"] ===
                      true) {
                        //授权成功
                        that.FunWXChooseLocation(funcPra);
                      } else {
                        wx.showToast({
                          title: '授权失败',
                          icon: 'success',
                          duration: 1000 });

                      }
                    },
                    fail: function fail() {},
                    complete: function complete() {} });

                }
              } });

          }
        },
        fail: function fail() {},
        complete: function complete() {} });

    },

    //选择位置 
    FunWXChooseLocation: function FunWXChooseLocation(funcPra) {
      var that = this;
      wx.chooseLocation({
        success: function success(res) {
          console.log(res);

          if (_pmJSTools.default.IsNullOrEmpty(res.address)) {
            wx.showModal({
              title: '提示',
              content: '任务发布失败:获取位置失败，是否重新发布？',
              showCancel: true,

              success: function success(res) {
                if (res.confirm) {
                  that.FunWXChooseLocation(funcPra);
                }
              } });


          } else {
            funcPra.PMCOI.ZCTCOILatit = res.latitude;
            funcPra.PMCOI.ZCTCOILongit = res.longitude;
            funcPra.PMCOI.ZCTAddress = res.address;
            funcPra.PMCOI.PMUSerID = app.globalData._id;
            funcPra.PMCOI.ZCTNewlatitude = res.latitude;
            funcPra.PMCOI.ZCTNewlongitude = res.longitude;
            app.globalData.CurrentLatitude = res.latitude;
            app.globalData.CurrentLongitude = res.longitude;
            that.FunPMCOIPublish(funcPra);
          }
        },
        fail: function fail(res) {
          if (res.errMsg == "chooseLocation:fail cancel") {
            that.ShowErrorTips("任务发布失败:您取消了获取位置的授权！");
          } else {
            that.ShowErrorTips("任务发布失败:获取位置失败！");
          }
        },
        //接口调用结束的回调函数（调用成功、失败都会执行）
        complete: function complete(res) {} });

    },

    //任务发布函数
    FunPMCOIPublish: function FunPMCOIPublish(funcPra) {var _this11 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {var that, TempRes;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:
                that = _this11;_context12.next = 3;return (
                  _pmSerTools.default.exePMCOI("PMCOIPublish", funcPra));case 3:TempRes = _context12.sent;

                if (TempRes.errMsg == "OK") {
                  //刷新状态为已发布
                  funcPra.PMCOI.PMOrderState = "PUBLISH"; //执行动态变量计算函数

                  _pmJSTools.default.calPMCOI(funcPra.PMCOI); //执行计算驱动函数（有些变量是计算获得的）

                  _pmJSTools.default.replaceOneControlFromList(funcPra.PMCOI._id, funcPra.PMCOI, _this11.PMCOIList); //刷新页面显示

                  // this.setData({
                  //   PMCOIList: this.PMCOIList
                  // });
                  that.PMCOIList = _this11.PMCOIList;
                  wx.navigateTo({
                    url: '../taskMap/taskMap?dataType=PMCOIPublish&latitude=' + funcPra.PMCOI.ZCTCOILatit +
                    '&longitude=' + funcPra.PMCOI.ZCTCOILongit + '',
                    success: function success(res) {
                      that.FunRefreshByOperationStatus();
                    } });

                } else {
                  that.ShowErrorTips("交付任务发布错误:" + TempRes.errMsg);
                }case 5:case "end":return _context12.stop();}}}, _callee12);}))();
    },


    onAuthorizeApply: function onAuthorizeApply(event) {var _this12 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {var that, TempCOIData;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:
                that = _this12;
                TempCOIData = that.PMCOIList.find(function (e) {
                  return e._id == event.currentTarget.id;
                });
                wx.navigateTo({
                  url: '../ApplicationRecordPage/ApplicationRecordPage?ZCTTaskID=' + event.currentTarget.id +
                  '&dataType=Authorize&OptionCOI=' + JSON.stringify(TempCOIData) + '' });case 3:case "end":return _context13.stop();}}}, _callee13);}))();

    },


    onFinishedApply: function onFinishedApply(event) {var _this13 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14() {var that, TempCOIData;return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:
                that = _this13;
                TempCOIData = that.PMCOIList.find(function (e) {
                  return e._id == event.currentTarget.id;
                });
                wx.navigateTo({
                  url: '../ApplicationRecordPage/ApplicationRecordPage?ZCTTaskID=' + event.currentTarget.id +
                  '&dataType=Finished&OptionCOI=' + JSON.stringify(TempCOIData) + '' });case 3:case "end":return _context14.stop();}}}, _callee14);}))();

    },


    OnEditSelect: function OnEditSelect() {var _this14 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15() {var that, TempStateICO;return _regenerator.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:
                that = _this14;
                TempStateICO = {
                  ICOImageEdit: "/static/images/icon/ico_Edit_C.png",
                  ICOImagePublish: "/static/images/icon/ico_PUBLISH.png",
                  ICOImageWaitAuthorize: "/static/images/icon/ico_WaitAuthorize.png",
                  ICOImageEXEC: "/static/images/icon/ico_EXEC.png",
                  ICOImageUnaccepted: "/static/images/icon/ico_UNACCEPTED.png",
                  ICOImageAccept: "/static/images/icon/ico_ACCEPT.png" };

                // that.setData({
                //   ICOImage: TempStateICO,
                //   PMCOIListSkip: 0,
                //   OptionSelectState: ['NORELEASE'],
                //   OptionSelectStateName: "编辑中"
                // });
                that.ICOImage = TempStateICO;
                that.PMCOIListSkip = 0;
                that.OptionSelectState = ['NORELEASE'];
                that.OptionSelectStateName = "编辑中";
                that.getPMCOIListByUserNew();case 7:case "end":return _context15.stop();}}}, _callee15);}))();
    },


    OnPublishSelect: function OnPublishSelect() {var _this15 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16() {var that, TempStateICO;return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:
                that = _this15;
                TempStateICO = {
                  ICOImageEdit: "/static/images/icon/ico_Edit.png",
                  ICOImagePublish: "/static/images/icon/ico_PUBLISH_C.png",
                  ICOImageWaitAuthorize: "/static/images/icon/ico_WaitAuthorize.png",
                  ICOImageEXEC: "/static/images/icon/ico_EXEC.png",
                  ICOImageUnaccepted: "/static/images/icon/ico_UNACCEPTED.png",
                  ICOImageAccept: "/static/images/icon/ico_ACCEPT.png" };

                // that.setData({
                //   ICOImage: TempStateICO,
                //   PMCOIListSkip: 0,
                //   OptionSelectState: ['PUBLISH'],
                //   OptionSelectStateName: "发布"
                // });
                that.ICOImage = TempStateICO;
                that.PMCOIListSkip = 0;
                that.OptionSelectState = ['PUBLISH'];
                that.OptionSelectStateName = "发布";
                that.getPMCOIListByUserNew();case 7:case "end":return _context16.stop();}}}, _callee16);}))();
    },


    OnWaitAuthorizeSelect: function OnWaitAuthorizeSelect() {var _this16 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee17() {var that, TempStateICO;return _regenerator.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:
                that = _this16;
                TempStateICO = {
                  ICOImageEdit: "/static/images/icon/ico_Edit.png",
                  ICOImagePublish: "/static/images/icon/ico_PUBLISH.png",
                  ICOImageWaitAuthorize: "/static/images/icon/ico_WaitAuthorize_C.png",
                  ICOImageEXEC: "/static/images/icon/ico_EXEC.png",
                  ICOImageUnaccepted: "/static/images/icon/ico_UNACCEPTED.png",
                  ICOImageAccept: "/static/images/icon/ico_ACCEPT.png" };

                // that.setData({
                //   ICOImage: TempStateICO,
                //   PMCOIListSkip: 0,
                //   OptionSelectState: ['WaitAuthorize'],
                //   OptionSelectStateName: "待授权"
                // });
                that.ICOImage = TempStateICO;
                that.PMCOIListSkip = 0;
                that.OptionSelectState = ['WaitAuthorize'];
                that.OptionSelectStateName = "待授权";
                that.getPMCOIListByUserNew();case 7:case "end":return _context17.stop();}}}, _callee17);}))();
    },

    OnExecSelect: function OnExecSelect() {var _this17 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee18() {var that, TempStateICO;return _regenerator.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:
                that = _this17;
                TempStateICO = {
                  ICOImageEdit: "/static/images/icon/ico_Edit.png",
                  ICOImagePublish: "/static/images/icon/ico_PUBLISH.png",
                  ICOImageWaitAuthorize: "/static/images/icon/ico_WaitAuthorize.png",
                  ICOImageEXEC: "/static/images/icon/ico_EXEC_C.png",
                  ICOImageUnaccepted: "/static/images/icon/ico_UNACCEPTED.png",
                  ICOImageAccept: "/static/images/icon/ico_ACCEPT.png" };

                that.ICOImage = TempStateICO;
                that.PMCOIListSkip = 0;
                that.OptionSelectState = ['ALLOWED'];
                that.OptionSelectStateName = "执行中";
                that.getPMCOIListByUserNew();case 7:case "end":return _context18.stop();}}}, _callee18);}))();
    },


    OnUnacceptedSelect: function OnUnacceptedSelect() {var _this18 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee19() {var that, TempStateICO;return _regenerator.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:
                that = _this18;
                TempStateICO = {
                  ICOImageEdit: "/static/images/icon/ico_Edit.png",
                  ICOImagePublish: "/static/images/icon/ico_PUBLISH.png",
                  ICOImageWaitAuthorize: "/static/images/icon/ico_WaitAuthorize.png",
                  ICOImageEXEC: "/static/images/icon/ico_EXEC.png",
                  ICOImageUnaccepted: "/static/images/icon/ico_UNACCEPTED_C.png",
                  ICOImageAccept: "/static/images/icon/ico_ACCEPT.png" };

                // that.setData({
                //   ICOImage: TempStateICO,
                //   PMCOIListSkip: 0,
                //   OptionSelectState: ['UNACCEPTED'],
                //   OptionSelectStateName: "待验收"
                // });
                that.ICOImage = TempStateICO;
                that.PMCOIListSkip = 0;
                that.OptionSelectState = ['UNACCEPTED'];
                that.OptionSelectStateName = "待验收";
                that.getPMCOIListByUserNew();case 7:case "end":return _context19.stop();}}}, _callee19);}))();
    },


    OnAcceptSelect: function OnAcceptSelect() {var _this19 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee20() {var that, TempStateICO;return _regenerator.default.wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:
                that = _this19;
                TempStateICO = {
                  ICOImageEdit: "/static/images/icon/ico_Edit.png",
                  ICOImagePublish: "/static/images/icon/ico_PUBLISH.png",
                  ICOImageWaitAuthorize: "/static/images/icon/ico_WaitAuthorize.png",
                  ICOImageEXEC: "/static/images/icon/ico_EXEC.png",
                  ICOImageUnaccepted: "/static/images/icon/ico_UNACCEPTED.png",
                  ICOImageAccept: "/static/images/icon/ico_ACCEPT_C.png" };

                // that.setData({
                //   ICOImage: TempStateICO,
                //   PMCOIListSkip: 0,
                //   OptionSelectState: ['ACCEPT'],
                //   OptionSelectStateName: "已验收"
                // });
                that.ICOImage = TempStateICO;
                that.PMCOIListSkip = 0;
                that.OptionSelectState = ['ACCEPT'];
                that.OptionSelectStateName = "已验收";
                that.getPMCOIListByUserNew();case 7:case "end":return _context20.stop();}}}, _callee20);}))();
    },


    FunRefreshByOperationStatus: function FunRefreshByOperationStatus() {
      var that = this;
      var TempOptionSelectState = that.OptionSelectStateName;

      switch (TempOptionSelectState) {
        case "编辑中":
          that.OnEditSelect();
          break;

        case "发布":
          that.OnPublishSelect();
          break;

        case "待授权":
          that.OnWaitAuthorizeSelect();
          break;

        case "执行中":
          that.OnExecSelect();
          break;

        case "待验收":
          that.OnUnacceptedSelect();
          break;

        case "已验收":
          that.OnAcceptSelect();
          break;

        default:
          that.OnExecSelect();
          break;}

    },


    ShowErrorTips: function ShowErrorTips(TempErrorMsg) {
      var that = this; //setTimeout里会用到，

      that.topTipsStr = TempErrorMsg;
      // that.setData({
      //   //MoveToUp触发
      //   topTips: true,
      //   topTipsStr: that.topTipsStr
      // });
      that.topTips = true;
      that.topTipsStr = that.topTipsStr;
      setTimeout(function () {

        // that.setData({
        //   topTips: false,
        //   topTipsStr: ""
        // });
        that.topTips = false;
        that.topTipsStr = "";
      }, 2000);
    },


    getUserProfile: function () {var _getUserProfile = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee21(e) {return _regenerator.default.wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:
                wx.navigateTo({
                  url: '../registPage/registPage',
                  success: function success(res) {
                    // this.setData({
                    //   pmDialogShouQuan: false
                    // });
                    that.pmDialogShouQuan = false;
                  } });case 1:case "end":return _context21.stop();}}}, _callee21);}));function getUserProfile(_x3) {return _getUserProfile.apply(this, arguments);}return getUserProfile;}(),



    getCancel: function () {var _getCancel = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee22(e) {return _regenerator.default.wrap(function _callee22$(_context22) {while (1) {switch (_context22.prev = _context22.next) {case 0:
                // this.setData({
                //   pmDialogShouQuan: false
                // });
                that.pmDialogShouQuan = false;case 1:case "end":return _context22.stop();}}}, _callee22);}));function getCancel(_x4) {return _getCancel.apply(this, arguments);}return getCancel;}() } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 42 */
/*!****************************************************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskList/taskList.css?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_taskList_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!./taskList.css?vue&type=style&index=0&lang=css& */ 43);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_taskList_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_taskList_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_taskList_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_taskList_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_taskList_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 43 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskList/taskList.css?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map