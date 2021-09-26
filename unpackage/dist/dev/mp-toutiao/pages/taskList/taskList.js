(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/taskList/taskList"],{

/***/ 36:
/*!**************************************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/main.js?{"page":"pages%2FtaskList%2FtaskList"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _taskList = _interopRequireDefault(__webpack_require__(/*! ./pages/taskList/taskList.vue */ 37));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_taskList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 37:
/*!*******************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskList/taskList.vue ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taskList_vue_vue_type_template_id_6c6b31e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskList.vue?vue&type=template&id=6c6b31e6& */ 38);
/* harmony import */ var _taskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskList.vue?vue&type=script&lang=js& */ 40);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _taskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _taskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _taskList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskList.vue?vue&type=style&index=0&lang=css& */ 42);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _taskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _taskList_vue_vue_type_template_id_6c6b31e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _taskList_vue_vue_type_template_id_6c6b31e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _taskList_vue_vue_type_template_id_6c6b31e6___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/taskList/taskList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 38:
/*!**************************************************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskList/taskList.vue?vue&type=template&id=6c6b31e6& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_taskList_vue_vue_type_template_id_6c6b31e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./taskList.vue?vue&type=template&id=6c6b31e6& */ 39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_taskList_vue_vue_type_template_id_6c6b31e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_taskList_vue_vue_type_template_id_6c6b31e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_taskList_vue_vue_type_template_id_6c6b31e6___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_taskList_vue_vue_type_template_id_6c6b31e6___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 39:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskList/taskList.vue?vue&type=template&id=6c6b31e6& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 40:
/*!********************************************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskList/taskList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_taskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./taskList.vue?vue&type=script&lang=js& */ 41);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_taskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_taskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_taskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_taskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_taskList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 41:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskList/taskList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//var base64 = require("../images/base64");
var app = getApp();
var btnSelectedStyle = " box-shadow: 2px 2px 5px #000;"; //用于动态表达按钮选中的状态
//用于动态表达按钮选中的状态
var btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;"; //用于动态表达按钮没有选中的状态
//用于动态表达按钮没有选中的状态
var pmJSTools = __webpack_require__(/*! ../../utils/pmJSTools.js */ 25);
var pmSerTools = __webpack_require__(/*! ../../utils/pmSerTools.js */ 24);
var DataListSkip = 0; //页起始点 （分页显示，第一页） 当系统下拉刷新时恢复到默认值
//页起始点 （分页显示，第一页） 当系统下拉刷新时恢复到默认值
var DataListLimit = 10; //页长 （一次从服务器获取数据项数） 当系统下拉刷新时恢复到默认值
var _default =
{
  data: function data() {
    return {
      mainTitle: "我发布的任务",
      subTips: "显示及操作",
      topTips: false,
      topTipsStr: "",
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
              pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([options, "dataType"]))) {_context.next = 11;break;}_context.next = 9;return (

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

      var tempPMCOI = pmJSTools.getOneControlFromList(event.currentTarget.id, this.PMCOIList);

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
      var TempData = pmJSTools.getOneControlFromList(event.currentTarget.id, this.PMCOIList);

      if (pmJSTools.IsNullOrEmpty(TempData)) {
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
                  pmSerTools.exePMCOI(funcName, funcPra));case 10:serRes = _context4.sent;
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
                  if (pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([serRes.result, 0]))) //数据结果放在了result第一个数据列中,所以需要脱壳
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
                  pmSerTools.exePMCOI(funcName, funcPra));case 10:serRes = _context5.sent;

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

      if (!pmJSTools.IsNullOrEmpty(TempCOIData)) {
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
        pmJSTools.calPMCOI(this.PMCOIList[tempKey]);
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
      var tempPMCOI = pmJSTools.getOneControlFromList(event.currentTarget.id, this.PMCOIList);
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
      var tempPMCOI = pmJSTools.getOneControlFromList(event.currentTarget.id, this.PMCOIList);
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
                tempPMCOI = pmJSTools.getOneControlFromList(event.currentTarget.id, _this6.PMCOIList);
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
                  pmSerTools.exePMCOI("PMCOIDelete", funcPra));case 3:tempRes = _context7.sent;

                if (tempRes.errMsg == "OK") {
                  //错误处理
                  wx.showToast({
                    title: '删除交付任务成功！',
                    icon: 'none',
                    duration: 2000 });
                  //调用通用方法----删除列表数据【数组】（this.data.PMCOIList）中_id值为“funcPra.PMCOI._id"的数据

                  TempPMCOIList = pmJSTools.DeleteFromList(funcPra.PMCOI._id, _this7.
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
                  pmSerTools.exePMCOI("AddOneMyPMCOIbyPMUser", funcPra));case 5:tempRes = _context8.sent;

                if (tempRes.errMsg == "OK") {
                  wx.showToast({
                    title: '加到我的任务成功，请到我的任务中查看',
                    icon: 'none',
                    duration: 2000 });
                  //加入到我的任务中后，需要将该数据从当前列表中移除 
                  //调用通用方法----删除列表数据【数组】（this.data.PMCOIList）中_id值为“funcPra.PMCOI._id"的数据 

                  TempPMCOIList = pmJSTools.DeleteFromList(funcPra.ZCTPMCOI_id, _this8.
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
                PMCOIData = pmJSTools.getOneControlFromList(event.currentTarget.id, _this9.
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

          if (pmJSTools.IsNullOrEmpty(res.address)) {
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
                  pmSerTools.exePMCOI("PMCOIPublish", funcPra));case 3:TempRes = _context12.sent;

                if (TempRes.errMsg == "OK") {
                  //刷新状态为已发布
                  funcPra.PMCOI.PMOrderState = "PUBLISH"; //执行动态变量计算函数

                  pmJSTools.calPMCOI(funcPra.PMCOI); //执行计算驱动函数（有些变量是计算获得的）

                  pmJSTools.replaceOneControlFromList(funcPra.PMCOI._id, funcPra.PMCOI, _this11.PMCOIList); //刷新页面显示

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

    //查看授权申请
    onAuthorizeApply: function onAuthorizeApply(event) {var _this12 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {var that, TempCOIData;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:
                that = _this12;
                TempCOIData = that.PMCOIList.find(function (e) {
                  return e._id == event.currentTarget.id;
                });
                wx.navigateTo({
                  url: '../ApplicationRecordPage/ApplicationRecordPage?ZCTTaskID=' + event.currentTarget.id +
                  '&dataType=Authorize&OptionCOI=' + JSON.stringify(TempCOIData) + '' });case 3:case "end":return _context13.stop();}}}, _callee13);}))();

    },

    //查看完工申请
    onFinishedApply: function onFinishedApply(event) {var _this13 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14() {var that, TempCOIData;return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:
                that = _this13;
                TempCOIData = that.PMCOIList.find(function (e) {
                  return e._id == event.currentTarget.id;
                });
                wx.navigateTo({
                  url: '../ApplicationRecordPage/ApplicationRecordPage?ZCTTaskID=' + event.currentTarget.id +
                  '&dataType=Finished&OptionCOI=' + JSON.stringify(TempCOIData) + '' });case 3:case "end":return _context14.stop();}}}, _callee14);}))();

    },

    //查询编辑中状态的任务
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

    //查询发布状态的任务
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

    //查询编待授权状态的任务
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

    //查询执行中状态的任务
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

    //查询待验收状态的任务
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

    //查询已验收状态的任务
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

    //根据当前选项卡刷新数据
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

    //显示错误提示
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
        //时间限制
        // that.setData({
        //   topTips: false,
        //   topTipsStr: ""
        // });
        that.topTips = false;
        that.topTipsStr = "";
      }, 2000);
    },

    //请求微信登陆【出现微信登录弹框，点击微信登录】NEW
    getUserProfile: function () {var _getUserProfile = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee21(e) {return _regenerator.default.wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:
                wx.navigateTo({
                  url: '../registPage/registPage',
                  success: function success(res) {
                    // this.setData({
                    //   pmDialogShouQuan: false
                    // });
                    that.pmDialogShouQuan = false;
                  } });case 1:case "end":return _context21.stop();}}}, _callee21);}));function getUserProfile(_x3) {return _getUserProfile.apply(this, arguments);}return getUserProfile;}(),


    //取消绑定
    getCancel: function () {var _getCancel = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee22(e) {return _regenerator.default.wrap(function _callee22$(_context22) {while (1) {switch (_context22.prev = _context22.next) {case 0:
                // this.setData({
                //   pmDialogShouQuan: false
                // });
                that.pmDialogShouQuan = false;case 1:case "end":return _context22.stop();}}}, _callee22);}));function getCancel(_x4) {return _getCancel.apply(this, arguments);}return getCancel;}() } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 42:
/*!****************************************************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskList/taskList.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_taskList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./taskList.vue?vue&type=style&index=0&lang=css& */ 43);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_taskList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_taskList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_taskList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_taskList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_taskList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 43:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskList/taskList.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[36,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRTovMDBf5bel5L2cLzA3X3VuaWFwcC9aQ1RfUHJvamVjdC9NZXNDbG91ZFRlc3QvcGFnZXMvdGFza0xpc3QvdGFza0xpc3QudnVlPzRjMjYiLCJ3ZWJwYWNrOi8vL0U6LzAwX+W3peS9nC8wN191bmlhcHAvWkNUX1Byb2plY3QvTWVzQ2xvdWRUZXN0L3BhZ2VzL3Rhc2tMaXN0L3Rhc2tMaXN0LnZ1ZT8yZDRkIiwid2VicGFjazovLy9FOi8wMF/lt6XkvZwvMDdfdW5pYXBwL1pDVF9Qcm9qZWN0L01lc0Nsb3VkVGVzdC9wYWdlcy90YXNrTGlzdC90YXNrTGlzdC52dWU/ODVlMCIsIndlYnBhY2s6Ly8vRTovMDBf5bel5L2cLzA3X3VuaWFwcC9aQ1RfUHJvamVjdC9NZXNDbG91ZFRlc3QvcGFnZXMvdGFza0xpc3QvdGFza0xpc3QudnVlPzk2YjgiLCJ1bmktYXBwOi8vL3BhZ2VzL3Rhc2tMaXN0L3Rhc2tMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vRTovMDBf5bel5L2cLzA3X3VuaWFwcC9aQ1RfUHJvamVjdC9NZXNDbG91ZFRlc3QvcGFnZXMvdGFza0xpc3QvdGFza0xpc3QudnVlP2ExMDMiLCJ3ZWJwYWNrOi8vL0U6LzAwX+W3peS9nC8wN191bmlhcHAvWkNUX1Byb2plY3QvTWVzQ2xvdWRUZXN0L3BhZ2VzL3Rhc2tMaXN0L3Rhc2tMaXN0LnZ1ZT9mODY4Il0sIm5hbWVzIjpbImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tEQUFBO0FBQ0E7QUFDQSxxRztBQUNBQSxVQUFVLENBQUNDLGlCQUFELENBQVYsQzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxSDtBQUNySDtBQUM0RDtBQUNMO0FBQ2E7OztBQUdwRTtBQUN1SztBQUN2SyxnQkFBZ0IsNktBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsbUZBQU07QUFDUixFQUFFLDRG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RUEsd0VBRkE7QUFHQSxvRkFIQTtBQUlBLGtFQUpBO0FBS0EsOEVBTEE7QUFNQSx3RUFOQSxFQUZBOztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBcEJBO0FBcUJBLEtBbDJCQTs7QUFvMkJBO0FBQ0EsK0JBcjJCQSx5Q0FxMkJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkEzQkE7O0FBNkJBLEtBdDRCQTs7QUF3NEJBO0FBQ0EsaUJBejRCQSx5QkF5NEJBLFlBejRCQSxFQXk0QkE7QUFDQSxzQkFEQSxDQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FSQSxFQVFBLElBUkE7QUFTQSxLQTc1QkE7O0FBKzVCQTtBQUNBO0FBQ0E7QUFDQSxpREFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFQQSxJQURBLHFLQWg2QkE7OztBQTI2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUpBLHNKQTU2QkEsRUFoTkEsRTs7Ozs7Ozs7Ozs7OztBQ2hRQTtBQUFBO0FBQUE7QUFBQTtBQUFvNUIsQ0FBZ0IsdTJCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBeDZCO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvdGFza0xpc3QvdGFza0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvdGFza0xpc3QvdGFza0xpc3QudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdGFza0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZjNmIzMWU2JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGFza0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi90YXNrTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdGFza0xpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3Rhc2tMaXN0L3Rhc2tMaXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdGFza0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZjNmIzMWU2JlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi90YXNrTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi90YXNrTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInBhZ2VcIiA6ZGF0YS13ZXVpLXRoZW1lPVwidGhlbWVcIj5cclxuXHRcdFx0PCEtLSA8c2Nyb2xsLXZpZXcgY2xhc3M9XCJHX1NDX1ZcIiBzdHlsZT1cIidoZWlnaHQ6JyArIG1IZWlnaHQgKyAncHgnXCIgbG93ZXItdGhyZXNob2xkPVwiMTAwXCIgcmVmcmVzaGVyLXRocmVzaG9sZD1cIjUwXCIgcmVmcmVzaGVyLWVuYWJsZWQ9XCJ0cnVlXCIgOnJlZnJlc2hlci10cmlnZ2VyZWQ9XCJpc01vdmVUb1VwXCIgQHJlZnJlc2hlcnJlZnJlc2g9XCJiaW5kTG9hZGluZ05ld1wiIEBzY3JvbGx0b2xvd2VyPVwiYmluZExvYWRpbmdNb3JlXCIgZW5hYmxlLWZsZXg9XCJ0cnVlXCIgc2Nyb2xsLXk9XCJ0cnVlXCI+IC0tPlxyXG5cdFx0XHQ8c2Nyb2xsLXZpZXcgY2xhc3M9XCJHX1NDX1ZcIiBzdHlsZT1cIidoZWlnaHQ6JyArIG1IZWlnaHQgKyAncHgnXCIgZW5hYmxlLWZsZXg9XCJ0cnVlXCIgc2Nyb2xsLXk9XCJ0cnVlXCI+XHJcblx0XHRcdFx0PGEgY2xhc3M9XCJ3ZXVpLW1lZGlhLWJveCB3ZXVpLW1lZGlhLWJveF9hcHBtc2dcIiBzdHlsZT1cImhlaWdodDoxMDBweDtcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFnZV9faGRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwYWdlX190aXRsZVwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IC01MHJweDtcIj7miJHlj5HluIPnmoTku7vliqE8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFnZV9fZGVzY1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IC01MHJweDtcIj7nvJbovpHjgIHlj5HluIPjgIHliIblj5E8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBtLVRDLW5ld1wiIGlkPVwiQWRkTmV3UE9cIiBAdGFwPVwiT25QTUNPSUFkZE5ld1RhcFwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6MzBweDtcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwbS1UQy1UeHRcIiBzdHlsZT1cIm1hcmdpbi10b3A6IC0xMDBycHg7XCI+5Yib5bu65paw5Lu75YqhPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8IS0tPGltYWdlIHNyYz48L2ltYWdlPi0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBtLVRDLXByb2dyZXNzX19iYXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBtLVRDLXByb2dyZXNzX19pbm5lci1iYXIganNfcHJvZ3Jlc3NcIiBzdHlsZT1cIndpZHRoOiAwJTtcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZXVpLXBhbmVsIHdldWktcGFuZWxfYWNjZXNzXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIndldWktcGFuZWxfX2hkXCI+5Lqk5LuY5Lu75Yqh5YiX6KGoPC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZXVpLXBhbmVsX19oZCBzdGF0ZXNlbGVjdF9wYW5lbFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInN0YXRlc2VsZWN0X2l0ZW1cIiBAdGFwPVwiT25FZGl0U2VsZWN0XCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3R5bGU9XCJ3aWR0aDoyNXB4O2hlaWdodDoyNXB4O1wiIHYtaWY9XCJJQ09JbWFnZS5JQ09JbWFnZUVkaXRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6c3JjPVwiSUNPSW1hZ2UuSUNPSW1hZ2VFZGl0XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXc+57yW6L6R5LitPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3RhdGVzZWxlY3RfaXRlbVwiIEB0YXA9XCJPblB1Ymxpc2hTZWxlY3RcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzdHlsZT1cIndpZHRoOjI1cHg7aGVpZ2h0OjI1cHg7XCIgdi1pZj1cIklDT0ltYWdlLklDT0ltYWdlUHVibGlzaFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdDpzcmM9XCJJQ09JbWFnZS5JQ09JbWFnZVB1Ymxpc2hcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldz7lj5HluIM8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzdGF0ZXNlbGVjdF9pdGVtXCIgQHRhcD1cIk9uV2FpdEF1dGhvcml6ZVNlbGVjdFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIHN0eWxlPVwid2lkdGg6MjVweDtoZWlnaHQ6MjVweDtcIiB2LWlmPVwiSUNPSW1hZ2UuSUNPSW1hZ2VXYWl0QXV0aG9yaXplXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0OnNyYz1cIklDT0ltYWdlLklDT0ltYWdlV2FpdEF1dGhvcml6ZVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3PuW+heaOiOadgzwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInN0YXRlc2VsZWN0X2l0ZW1cIiBAdGFwPVwiT25FeGVjU2VsZWN0XCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3R5bGU9XCJ3aWR0aDoyNXB4O2hlaWdodDoyNXB4O1wiIHYtaWY9XCJJQ09JbWFnZS5JQ09JbWFnZUVYRUNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ6c3JjPVwiSUNPSW1hZ2UuSUNPSW1hZ2VFWEVDXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXc+5omn6KGM5LitPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic3RhdGVzZWxlY3RfaXRlbVwiIEB0YXA9XCJPblVuYWNjZXB0ZWRTZWxlY3RcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBzdHlsZT1cIndpZHRoOjI1cHg7aGVpZ2h0OjI1cHg7XCIgdi1pZj1cIklDT0ltYWdlLklDT0ltYWdlVW5hY2NlcHRlZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdDpzcmM9XCJJQ09JbWFnZS5JQ09JbWFnZVVuYWNjZXB0ZWRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldz7lvoXpqozmlLY8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJzdGF0ZXNlbGVjdF9pdGVtXCIgQHRhcD1cIk9uQWNjZXB0U2VsZWN0XCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3R5bGU9XCJ3aWR0aDoyNXB4O2hlaWdodDoyNXB4O1wiIHYtaWY9XCJJQ09JbWFnZS5JQ09JbWFnZUFjY2VwdFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdDpzcmM9XCJJQ09JbWFnZS5JQ09JbWFnZUFjY2VwdFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3PuW3sumqjOaUtjwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZXVpLXBhbmVsX19iZFwiPlxyXG5cdFx0XHRcdFx0IDxibG9jayB2LWZvcj1cIihQTUNPSSwgaW5kZXgpIGluIFBNQ09JTGlzdFwiIDprZXk9XCJpbmRleFwiIHYtaWY9XCJQTUNPSUxpc3RcIj5cclxuXHRcdFx0XHRcdCAgIDx2aWV3IGNsYXNzPVwiQ29sdW1uQm94XCI+XHJcblx0XHRcdFx0XHQgICAgIDxhIGNsYXNzPVwid2V1aS1tZWRpYS1ib3ggd2V1aS1tZWRpYS1ib3hfYXBwbXNnXCI+XHJcblx0XHRcdFx0XHQgICAgICAgPHZpZXcgY2xhc3M9XCJ3ZXVpLW1lZGlhLWJveF9faGRcIiBzdHlsZT1cIndpZHRoOjg2cHg7aGVpZ2h0OjcwcHg7XCIgOmlkPVwiUE1DT0kuX2lkXCIgQHRhcD1cIm9uUE1DT0lDb21tYW5kU2VsZWN0XCIgQGxvbmdwcmVzcz1cIm9uUE1DT0lJbWFnZVRhcFwiPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgPGltYWdlIGNsYXNzPVwid2V1aS1tZWRpYS1ib3hfX3RodW1iXCIgc3R5bGU9XCJ3aWR0aDo3MHB4O2hlaWdodDo3MHB4O1wiIDpzcmM9XCJQTUNPSS5aQ1RQcm9kdWN0VVJMXCIgYWx0IG1vZGU9XCJhc3BlY3RGaWxsXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdCAgICAgICA8L3ZpZXc+XHJcblx0XHRcdFx0XHQgICAgICAgPHZpZXcgY2xhc3M9XCJwbS10YXNrLWJveF9fYmRcIiA6aWQ9XCJQTUNPSS5faWRcIiBAdGFwPVwib25QTUNPSUNvbW1hbmRTZWxlY3RcIiBAbG9uZ3ByZXNzPVwib25QTUNPSVRhcFwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj5cclxuXHRcdFx0XHRcdCAgICAgICAgIDxWaWV3IGNsYXNzPVwidGFza2RldGFpbF90aXRsZVwiPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICA8dmlldyBjbGFzcz1cInRhc2tOYW1lXCI+e3tQTUNPSS5QTUlubmVyUHJvZHVjdE5hbWV9fTxhIGNsYXNzPVwidGFza051bVwiPnt7UE1DT0kuUE1PcmRlck51bX19e3tQTUNPSS5QTU9yZGVyVW5pdH19PC9hPjwvdmlldz5cclxuXHRcdFx0XHRcdCAgICAgICAgIDwvVmlldz5cclxuXHRcdFx0XHRcdCAgICAgICAgIDx2aWV3IGNsYXNzPVwicG0tdGFza2RldGFpbFwiPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICA8dmlldyBjbGFzcz1cInBtLXRhc2tkZXRhaWxfX2Rlc2NcIj5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICDlt7Llrozlt6V7e1BNQ09JLlpDVEZpbmlzaGVkTnVtfX17e1BNQ09JLlBNT3JkZXJVbml0fX0s6K6h5YiS5Lqk5LuY5pe26Ze077yae3tQTUNPSS5aQ1RQbGFuRGVsaURhdGVTaG9ydH19IDwvdmlldz5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJwbS10YXNrc3RhdGVcIj5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICA8dmlldyBjbGFzcz1cInBtLXRhc2tzdGF0ZS10aW1lXCI+e3tQTUNPSS5jYWxDaGFuZ2VUaW1lU3RyfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJwbS10YXNrc3RhdGUtc3RhdGVcIj57e1BNQ09JLmNhbFBNU3RhdGV9fTwvdmlldz5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgPC92aWV3PlxyXG5cdFx0XHRcdFx0ICAgICAgICAgPC92aWV3PlxyXG5cdFx0XHRcdFx0ICAgICAgIDwvdmlldz5cclxuXHRcdFx0XHRcdCAgICAgPC9hPlxyXG5cdFx0XHRcdFx0ICAgICA8dmlldyBjbGFzcz1cInRhc2tfcHJvZ3Jlc3NHcm91cFwiPlxyXG5cdFx0XHRcdFx0ICAgICAgIDxibG9jayB2LWZvcj1cIihQTUNPSVN0YXRlcywgaW5kZXgpIGluIFBNQ09JLmNhbFRhc2tTdGF0ZXNcIiA6a2V5PVwiaW5kZXhcIiB2LWlmPVwiUE1DT0kuY2FsVGFza1N0YXRlc1wiPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgPHZpZXcgY2xhc3M9XCJ0YXNrX3Byb2dyZXNzXCI+XHJcblx0XHRcdFx0XHQgICAgICAgICAgIDx2aWV3IGNsYXNzPVwidGFza19wcm9ncmVzc1N1YlR4dFwiPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgIHt7UE1DT0lTdGF0ZXMuY2FsU3RhZ2VOYW1lfX1cclxuXHRcdFx0XHRcdCAgICAgICAgICAgPC92aWV3PlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICA8dmlldyBjbGFzcz1cInRhc2tfcHJvZ3Jlc3NTdWJcIiA6c3R5bGU9XCJQTUNPSVN0YXRlcy5jYWxTdGFnZVN0eWxlXCI+XHJcblx0XHRcdFx0XHQgICAgICAgICAgIDwvdmlldz5cclxuXHRcdFx0XHRcdCAgICAgICAgIDwvdmlldz5cclxuXHRcdFx0XHRcdCAgICAgICA8L2Jsb2NrPlxyXG5cdFx0XHRcdFx0ICAgICA8L3ZpZXc+XHJcblx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHQgICA8L3ZpZXc+XHJcblx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHQgPC9ibG9jaz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgc3R5bGU9XCJoZWlnaHQ6MjBweFwiPjwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cImlzTW92ZVRvRG93blwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZXVpLWxvYWRpbmdfX3dycFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxvYWRpbmcgd3hfZG90X2xvYWRpbmdcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJmYWRlSW5cIiB2LWlmPVwicHJvcGVydHlEaWFsb2cuaXNQcm9wZXJ0eURpYWxvZ09wZW5cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIndldWktbWFza1wiIEB0YXA9XCJwcm9wZXJ0eURpYWxvZ0Nsb3NlXCI+PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwid2V1aS1oYWxmLXNjcmVlbi1kaWFsb2dcIj5cclxuXHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIndldWktaGFsZi1zY3JlZW4tZGlhbG9nX19oZFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIndldWktaGFsZi1zY3JlZW4tZGlhbG9nX19oZF9fc2lkZVwiIEB0YXA9XCJwcm9wZXJ0eURpYWxvZ0Nsb3NlXCI+XHJcblx0XHRcdFx0XHRcdFx0PGEgY2xhc3M9XCJ3ZXVpLWljb24tYnRuXCI+6L+U5ZuePGkgY2xhc3M9XCJ3ZXVpLWljb24tYmFjay1hcnJvdy10aGluXCI+PC9pPjwvYT5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIndldWktaGFsZi1zY3JlZW4tZGlhbG9nX19oZF9fbWFpblwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzdHJvbmcgY2xhc3M9XCJ3ZXVpLWhhbGYtc2NyZWVuLWRpYWxvZ19fdGl0bGVcIj57e3Byb3BlcnR5RGlhbG9nLm1haW5UaXRsZX19PC9zdHJvbmc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZXVpLWhhbGYtc2NyZWVuLWRpYWxvZ19fc3VidGl0bGVcIj57e3Byb3BlcnR5RGlhbG9nLnN1YlRpdGxlfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZXVpLWhhbGYtc2NyZWVuLWRpYWxvZ19faGRfX3NpZGVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIDxhIGNsYXNzPVwid2V1aS1pY29uLWJ0blwiPuabtOWkmjxpIGNsYXNzPVwid2V1aS1pY29uLW1vcmVcIj48L2k+PC9hPiAtLT5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZXVpLWhhbGYtc2NyZWVuLWRpYWxvZ19fYmRcIiBzdHlsZT1cInBhZGRpbmctYm90dG9tOiA0cHg7XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwid2V1aS1oYWxmLXNjcmVlbi1kaWFsb2dfX2Rlc2NcIj5cclxuXHRcdFx0XHRcdFx0XHR7e3Byb3BlcnR5RGlhbG9nLm1haW5UaXB9fVxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInBtLXBpY0JveFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInBtLXByb2R1Y3QtaW1hZ2VcIiBzdHlsZT1cIndpZHRoOjI3MHB4O2hlaWdodDoyNzBweDttYXJnaW46NHB4O1wiXHJcblx0XHRcdFx0XHRcdFx0XHR2LWlmPVwiWkNUUHJvZHVjdFVSTFwiIDpzcmM9XCJaQ1RQcm9kdWN0VVJMXCIgbW9kZT1cImFzcGVjdEZpbGxcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwicHJvcGVydHlEaWFsb2cuc3ViVGlwXCIgY2xhc3M9XCJwbS1oYWxmLXNjcmVlbi1kaWFsb2dfX3RpcHNcIiBzdHlsZT1cInBhZGRpbmctdG9wOjBweFwiPlxyXG5cdFx0XHRcdFx0XHRcdHt7cHJvcGVydHlEaWFsb2cuc3ViVGlwfX1cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblxyXG5cdFx0XHRcdFx0PHNjcm9sbC12aWV3IHYtaWY9XCJwcm9wZXJ0eURpYWxvZy5zdWJJbmZvTGlzdFwiIGNsYXNzPVwicG0tc2Nyb2xsLXZpZXdfVlwiIGVuYWJsZS1mbGV4PVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdHNjcm9sbC15PVwidHJ1ZVwiIHN0eWxlPVwiaGVpZ2h0OiAzMDBweDtcIj5cclxuXHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFnZV9fYmRcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZXVpLWNlbGxzXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjJweDtcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxibG9jayB2LWZvcj1cIihzdWJJbmZvLCBrKSBpbiBwcm9wZXJ0eURpYWxvZy5zdWJJbmZvTGlzdFwiIDprZXk9XCJrXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwid2V1aS1jZWxsIHdldWktY2VsbF9hY3RpdmVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIndldWktY2VsbF9faGRcIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTsgbWFyZ2luLXJpZ2h0OiAxMHB4O1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCJzdWJJbmZvLlpDVFByb2R1Y3RVUkxcIiA6c3JjPVwic3ViSW5mby5aQ1RQcm9kdWN0VVJMXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9XCJ3aWR0aDo0NXB4OyBoZWlnaHQ6NDVweDsgZGlzcGxheTpibG9jaztcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIndldWktY2VsbF9fYmRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx2aWV3Pnt7c3ViSW5mby5tYWluSW5mb319PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHZpZXcgc3R5bGU9XCJmb250LXNpemU6IDEzcHg7IGNvbG9yOiAjODg4O1wiPnt7c3ViSW5mby5zdWJJbmZvfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Jsb2NrPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHJcblx0XHRcdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cclxuXHRcdFx0XHRcdDx2aWV3IDpjbGFzcz1cInBtLWhhbGYtc2NyZWVuLWRpYWxvZ19fZnRcIj5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiA6Y2xhc3M9XCJwcm9wZXJ0eURpYWxvZy5DYW5jZWxCdGhDbGFzc1wiXHJcblx0XHRcdFx0XHRcdFx0QHRhcD1cInByb3BlcnR5RGlhbG9nQ2xvc2VcIj57e3Byb3BlcnR5RGlhbG9nLnN1Yk9wZXJhdGlvbn19PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gOmNsYXNzPVwicHJvcGVydHlEaWFsb2cuRWRpdEJ0bkNsYXNzXCIgQHRhcD1cIm9uUE1DT0lFZGl0XCJcclxuXHRcdFx0XHRcdFx0XHQ6aWQ9XCJwcm9wZXJ0eURpYWxvZy5faWRcIj57e3Byb3BlcnR5RGlhbG9nLm1haW5PcGVyYXRpb259fTwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PHZpZXcgc3R5bGU9XCJtYXJnaW4tdG9wOjcwcnB4O1wiIHYtaWY9XCJ0b3BUaXBzXCIgOmNsYXNzPVwiJ3dldWktdG9wdGlwcyB3ZXVpLXRvcHRpcHNfd2FybiBmYWRlSW4gJyArIChoaWRlID8gJ2ZhZGVPdXQnIDogJycpXCI+XHJcblx0XHRcdFx0e3t0b3BUaXBzU3RyfX1cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PHZpZXcgdi1pZj1cInNob3dJT1NEaWFsb2cuaXNTaG93SU9TRGlhbG9nXCIgY2xhc3M9XCJmYWRlSW5cIiA6aWQ9XCJzaG93SU9TRGlhbG9nLl9pZFwiXHJcblx0XHRcdFx0QHRhcD1cIm9uUE1DT0lDb21tYW5kU2VsZWN0Q2xvc2VcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIndldWktbWFza1wiPjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIndldWktYWN0aW9uc2hlZXQgd2V1aS1hY3Rpb25zaGVldF90b2dnbGVcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwid2V1aS1hY3Rpb25zaGVldF9fdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZXVpLWFjdGlvbnNoZWV0X190aXRsZS10ZXh0XCI+57yW6L6RIOafpeeciyDliIbkuqsg5Y+R5biDPC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZXVpLWFjdGlvbnNoZWV0X19tZW51XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwid2V1aS1hY3Rpb25zaGVldF9fY2VsbFwiIDppZD1cInNob3dJT1NEaWFsb2cuX2lkXCIgQHRhcD1cIm9uUE1DT0lTSE9XXCI+5Lu75Yqh6K+m5oOFPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyA6Y2xhc3M9XCJjbGFzc1ZpZXdcIiA6aWQ9XCJzaG93SU9TRGlhbG9nLl9pZFwiIEB0YXA9XCJvblBNQ09JRWRpdFwiPue8lui+kTwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgOmNsYXNzPVwiY2xhc3NWaWV3XCIgOmlkPVwic2hvd0lPU0RpYWxvZy5faWRcIiBAdGFwPVwiZGVsZXRlUE1DT0lcIj7liKDpmaQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IDpjbGFzcz1cImNsYXNzVmlld1wiIDppZD1cInNob3dJT1NEaWFsb2cuX2lkXCIgQHRhcD1cImFkZFBNQ09JXCI+5Yqg5Yiw5oiR55qE5Lu75YqhPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyA6Y2xhc3M9XCJ3ZXVpLWFjdGlvbnNoZWV0X19jZWxsXCIgOmlkPVwic2hvd0lPU0RpYWxvZy5faWRcIiBAdGFwPVwic2hhcmVQTUNPSVwiPuWIhuWPkTwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgOmNsYXNzPVwiY2xhc3NWaWV3XCIgOmlkPVwic2hvd0lPU0RpYWxvZy5faWRcIiBAdGFwPVwicHVibGlzaFBNQ09JXCI+5Y+R5biDPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiQ2xpY2tJdGVtRGF0YS5aQ1RBcHBsaWNhdGlvbkNvdW50PjA/dHJ1ZTpmYWxzZVwiIGNsYXNzPVwid2V1aS1hY3Rpb25zaGVldF9fY2VsbFwiXHJcblx0XHRcdFx0XHRcdFx0OmlkPVwic2hvd0lPU0RpYWxvZy5faWRcIiBAdGFwPVwib25BdXRob3JpemVBcHBseVwiPuafpeeci+aOiOadg+eUs+ivtzwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgdi1pZj1cIkNsaWNrSXRlbURhdGEuUE1PcmRlclN0YXRlPT0nVU5BQ0NFUFRFRCc/dHJ1ZTpmYWxzZVwiIGNsYXNzPVwid2V1aS1hY3Rpb25zaGVldF9fY2VsbFwiXHJcblx0XHRcdFx0XHRcdFx0OmlkPVwic2hvd0lPU0RpYWxvZy5faWRcIiBAdGFwPVwib25GaW5pc2hlZEFwcGx5XCI+5p+l55yL5a6M5bel55Sz6K+3PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZXVpLWFjdGlvbnNoZWV0X19hY3Rpb25cIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZXVpLWFjdGlvbnNoZWV0X19jZWxsXCI+5Y+W5raIPC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0XHQ8dmlldyB2LWlmPVwicG1EaWFsb2dcIiA+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwid2V1aS1tYXNrXCI+PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIndldWktZGlhbG9nXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZXVpLWRpYWxvZ19faGRcIj48c3Ryb25nIGNsYXNzPVwid2V1aS1kaWFsb2dfX3RpdGxlXCI+e3tkaWFsb2dNYWluVGl0bGV9fTwvc3Ryb25nPjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIndldWktZGlhbG9nX19iZFwiPnt7ZGlhbG9nTWFpbkNvbnRlbnR9fTwvdmlldz5cclxuXHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZXVpLWRpYWxvZ19fZnRcIj5cclxuXHRcdFx0XHRcdDxhIGNsYXNzPVwid2V1aS1kaWFsb2dfX2J0biB3ZXVpLWRpYWxvZ19fYnRuX2RlZmF1bHRcIiBAdGFwPVwicG1EaWFsb2dDbG9zZVwiPnt7ZGlhbG9nU3ViT3BlcmF0aW9ufX08L2E+XHJcblx0XHRcdFx0XHQ8YSBjbGFzcz1cIndldWktZGlhbG9nX19idG4gd2V1aS1kaWFsb2dfX2J0bl9wcmltYXJ5XCIgQHRhcD1cInBtRGlhbG9nQ2xvc2VcIlxyXG5cdFx0XHRcdFx0XHQ6aWQ9XCJidG5Db21tYW5kTmFtZV9pZFwiPnt7ZGlhbG9nTWFpbk9wZXJhdGlvbn19PC9hPlxyXG5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g6aG26YOo5o+Q56S65qGGIC0tPlxyXG5cdFx0PHZpZXcgIHN0eWxlPVwibWFyZ2luLXRvcDo3MHJweDtcIiB2LWlmPVwidG9wVGlwc1wiIDpjbGFzcz1cIid3ZXVpLXRvcHRpcHMgd2V1aS10b3B0aXBzX3dhcm4gZmFkZUluICcgKyAoaGlkZSA/ICdmYWRlT3V0JyA6ICcnKVwiPnt7dG9wVGlwc1N0cn19XHJcblx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0PCEtLSDov5npg6jliIbnlKjmnaXmjojmnYPnmbvlvZXvvIwg5Li76KaB5piv5YWs5LyX5Y+3562J5rKh5pyJ57uP6L+H55m75b2V55qE5oOF5b2iIC0tPlxyXG5cdFx0PHZpZXcgdi1pZj1cInBtRGlhbG9nU2hvdVF1YW5cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZXVpLW1hc2tcIj48L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwid2V1aS1kaWFsb2dcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIndldWktZGlhbG9nX19oZFwiPjxzdHJvbmcgY2xhc3M9XCJ3ZXVpLWRpYWxvZ19fdGl0bGVcIj7mj5DnpLo8L3N0cm9uZz48L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZXVpLWRpYWxvZ19fYmRcIj7or6Xlip/og73pnIDopoHotKblj7fnu5HlrprmiY3og73mk43kvZzvvIzmmK/lkKbov5vlhaXotKblj7fnu5HlrprvvJ88L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ3ZXVpLWRpYWxvZ19fZnRcIj5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJ3ZXVpLWRpYWxvZ19fYnRuIHdldWktZGlhbG9nX19idG5fcHJpbWFyeVwiIGxhbmc9XCJ6aF9DTlwiIEB0YXA9XCJnZXRDYW5jZWxcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQ+5Y+W5raIPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwid2V1aS1kaWFsb2dfX2J0biB3ZXVpLWRpYWxvZ19fYnRuX3ByaW1hcnlcIiBsYW5nPVwiemhfQ05cIiBAdGFwPVwiZ2V0VXNlclByb2ZpbGVcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQ+57uR5a6aPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHQvL3ZhciBiYXNlNjQgPSByZXF1aXJlKFwiLi4vaW1hZ2VzL2Jhc2U2NFwiKTtcclxuXHRjb25zdCBhcHAgPSBnZXRBcHAoKTtcclxuXHRjb25zdCBidG5TZWxlY3RlZFN0eWxlID0gXCIgYm94LXNoYWRvdzogMnB4IDJweCA1cHggIzAwMDtcIjsgLy/nlKjkuo7liqjmgIHooajovr7mjInpkq7pgInkuK3nmoTnirbmgIFcclxuXHQvL+eUqOS6juWKqOaAgeihqOi+vuaMiemSrumAieS4reeahOeKtuaAgVxyXG5cdGNvbnN0IGJ0blVuU2VsZWN0ZWRTdHlsZSA9IFwiIGJveC1zaGFkb3c6IDBweCAwcHggMHB4ICMwMDA7XCI7IC8v55So5LqO5Yqo5oCB6KGo6L6+5oyJ6ZKu5rKh5pyJ6YCJ5Lit55qE54q25oCBXHJcblx0Ly/nlKjkuo7liqjmgIHooajovr7mjInpkq7msqHmnInpgInkuK3nmoTnirbmgIFcclxuXHRjb25zdCBwbUpTVG9vbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvcG1KU1Rvb2xzLmpzXCIpO1xyXG5cdGNvbnN0IHBtU2VyVG9vbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvcG1TZXJUb29scy5qc1wiKTtcclxuXHRjb25zdCBEYXRhTGlzdFNraXAgPSAwOyAvL+mhtei1t+Wni+eCuSDvvIjliIbpobXmmL7npLrvvIznrKzkuIDpobXvvIkg5b2T57O757uf5LiL5ouJ5Yi35paw5pe25oGi5aSN5Yiw6buY6K6k5YC8XHJcblx0Ly/pobXotbflp4vngrkg77yI5YiG6aG15pi+56S677yM56ys5LiA6aG177yJIOW9k+ezu+e7n+S4i+aLieWIt+aWsOaXtuaBouWkjeWIsOm7mOiupOWAvFxyXG5cdGNvbnN0IERhdGFMaXN0TGltaXQgPSAxMDsgLy/pobXplb8g77yI5LiA5qyh5LuO5pyN5Yqh5Zmo6I635Y+W5pWw5o2u6aG55pWw77yJIOW9k+ezu+e7n+S4i+aLieWIt+aWsOaXtuaBouWkjeWIsOm7mOiupOWAvFxyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdG1haW5UaXRsZTogXCLmiJHlj5HluIPnmoTku7vliqFcIixcclxuXHRcdFx0XHRzdWJUaXBzOiBcIuaYvuekuuWPiuaTjeS9nFwiLFxyXG5cdFx0XHRcdHRvcFRpcHM6IGZhbHNlLFxyXG5cdFx0XHRcdHRvcFRpcHNTdHI6IFwiXCIsXHJcblx0XHRcdFx0cG1EaWFsb2c6IGZhbHNlLFxyXG5cdFx0XHRcdGRpYWxvZ01haW5UaXRsZTogXCJcIixcclxuXHRcdFx0XHRkaWFsb2dNYWluQ29udGVudDogXCJcIixcclxuXHRcdFx0XHRkaWFsb2dTdWJPcGVyYXRpb246IFwiXCIsXHJcblx0XHRcdFx0ZGlhbG9nTWFpbk9wZXJhdGlvbjogXCJcIixcclxuXHRcdFx0XHRkaWFsb2dQTU9yZGVyUHJvVHlwZTogXCJcIixcclxuXHRcdFx0XHRQTUNPSUxpc3Q6IFtdLFxyXG5cdFx0XHRcdC8vUE1DT0nmuIXljZVcclxuXHRcdFx0XHRQTUNPSUxpc3RTa2lwOiAwLFxyXG5cdFx0XHRcdC8v6aG15Y+3IO+8iOWIhumhteaYvuekuu+8jOesrOS4gOmhte+8iSAvL+S4i+aLieWIneWni+WMlu+8jCDkuIrmi4nliqDpobXlj7dcclxuXHRcdFx0XHRQTUNPSUxpc3RMaW1pdDogRGF0YUxpc3RMaW1pdCxcclxuXHRcdFx0XHQvL+mhtemVvyDvvIjkuIDmrKHku47mnI3liqHlmajojrflj5bmlbDmja7pobnmlbDvvIkgLy/kuIvmi4nliJ3lp4vljJbvvIwg5LiK5ouJ5Yqg6aG16ZW/5LiN5Y+YXHJcblx0XHRcdFx0aXNNb3ZlVG9Eb3duOiBmYWxzZSxcclxuXHRcdFx0XHQvL+aYr+WQpuS4iua7keWIsOW6lemDqO+8jOa7keWIsOW6lemDqOi/m+ihjOWKoOi9veabtOWkmlxyXG5cdFx0XHRcdGlzTW92ZVRvVXA6IGZhbHNlLFxyXG5cdFx0XHRcdC8v5piv5ZCm5LiL5ruR5Yiw6aG26YOo77yM5ruR5Yiw6aG26YOo6L+b6KGM5Yqg6L295pu05pawKOm7mOiupOaYr3RydWUpXHJcblx0XHRcdFx0bUhlaWdodDogMTAwMCxcclxuXHRcdFx0XHQvL+iuvue9ruS4gOS4qum7mOiupOWxj+mrmOWPguaVsFxyXG5cdFx0XHRcdHNob3dJT1NEaWFsb2c6IHtcclxuXHRcdFx0XHRcdC8vUE1DT0nlkb3ku6Tlr7nor53moYZcclxuXHRcdFx0XHRcdGlzU2hvd0lPU0RpYWxvZzogZmFsc2UsXHJcblx0XHRcdFx0XHRfaWQ6IFwiXCIgLy/lr7nosaHkuLvplK5cclxuXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRwcm9wZXJ0eURpYWxvZzoge1xyXG5cdFx0XHRcdFx0Ly/lsZ7mgKfmoYbmlbDmja5cclxuXHRcdFx0XHRcdGlzUHJvcGVydHlEaWFsb2dPcGVuOiBmYWxzZSxcclxuXHRcdFx0XHRcdC8v5piv5ZCm5omT5byA5Y2K5bGP57uE5Lu2XHJcblx0XHRcdFx0XHRtYWluVGl0bGU6IFwi5Li75qCH6aKYXCIsXHJcblx0XHRcdFx0XHQvL+S4u+agh+mimFxyXG5cdFx0XHRcdFx0c3ViVGl0bGU6IFwi5a2Q5qCH6aKYXCIsXHJcblx0XHRcdFx0XHQvL+WtkOagh+mimFxyXG5cdFx0XHRcdFx0bWFpblRpcDogXCLkuLvmj5DnpLpcIixcclxuXHRcdFx0XHRcdC8v5Li75o+Q56S6XHJcblx0XHRcdFx0XHRzdWJUaXA6IFwi5a2Q5o+Q56S6XCIsXHJcblx0XHRcdFx0XHQvL+WtkOaPkOekulxyXG5cdFx0XHRcdFx0c3ViT3BlcmF0aW9uOiBcIuWPlua2iFwiLFxyXG5cdFx0XHRcdFx0Ly/ovoXliqnmk43kvZzmjInpkq7mj5DnpLpcclxuXHRcdFx0XHRcdG1haW5PcGVyYXRpb246IFwi56Gu6K6kXCIsXHJcblx0XHRcdFx0XHQvL+S4u+aTjeS9nOaMiemSruaPkOekulxyXG5cdFx0XHRcdFx0X2lkOiBcIlwiLFxyXG5cdFx0XHRcdFx0Ly/lr7nosaHkuLvplK5cclxuXHRcdFx0XHRcdFpDVFByb2R1Y3RVUkw6IFwiXCIsXHJcblx0XHRcdFx0XHQvL+S4u+WvueixoeWbvueJh1xyXG5cdFx0XHRcdFx0c3ViSW5mb0xpc3Q6IFt7XHJcblx0XHRcdFx0XHRcdG1haW5JbmZvOiBcIlwiLFxyXG5cdFx0XHRcdFx0XHQvL+WxnuaAp+exu+Wei1xyXG5cdFx0XHRcdFx0XHRzdWJJbmZvOiBcIlwiLFxyXG5cdFx0XHRcdFx0XHQvL+WxnuaAp+aPj+i/sFxyXG5cdFx0XHRcdFx0XHQvLyAgWkNUUHJvZHVjdFVSTDogXCJcIiAvL+S6p+WTgeWbvueJh1xyXG5cclxuXHRcdFx0XHRcdH1dXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRjbGFzc1ZpZXc6IFwid2V1aS1hY3Rpb25zaGVldF9fY2VsbFwiLFxyXG5cdFx0XHRcdC8v6ZW/5oyJ5Lqk5LuY5Lu75Yqh5by55Ye657yW6L6R44CB5Yig6Zmk5oyJ6ZKu6buY6K6k5Y+v5Lul5pON5L2c77yb5o6I5p2D5ZCO54Gw6Imy5LiN5Y+v5pON5L2cXHJcblx0XHRcdFx0Q2xpY2tJdGVtRGF0YToge30sXHJcblx0XHRcdFx0Ly/ku7vliqHmuIXljZXngrnlh7vpobnnmoTmlbDmja7mupDjgILnlKjkuo7mjqfliLbmk43kvZzmjInpkq7nmoTmmL7npLpcclxuXHRcdFx0XHRPcHRpb25TZWxlY3RTdGF0ZTogWydBTExPV0VEJ10sXHJcblx0XHRcdFx0Ly/pu5jorqTmn6Xor6LmiafooYzkuK3nmoTku7vliqFcclxuXHRcdFx0XHRPcHRpb25TZWxlY3RTdGF0ZU5hbWU6IFwi5omn6KGM5LitXCIsXHJcblx0XHRcdFx0Ly8gdG9wVGlwczogZmFsc2UsXHJcblx0XHRcdFx0Ly8gLy/pobbpg6jmj5DnpLrmmL7npLrlvIDlhbNcclxuXHRcdFx0XHQvLyB0b3BUaXBzU3RyOiBcIlwiLFxyXG5cdFx0XHRcdC8vIC8v6aG26YOo5o+Q56S65YaF5a65XHJcblx0XHRcdFx0SUNPSW1hZ2U6IHtcclxuXHRcdFx0XHRcdElDT0ltYWdlRWRpdDogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19FZGl0X0MucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZVB1Ymxpc2g6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fUFVCTElTSC5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlV2FpdEF1dGhvcml6ZTogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19XYWl0QXV0aG9yaXplLnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VFWEVDOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX0VYRUMucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZVVuYWNjZXB0ZWQ6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fVU5BQ0NFUFRFRC5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlQWNjZXB0OiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX0FDQ0VQVC5wbmdcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cG1EaWFsb2dTaG91UXVhbjogZmFsc2UsXHJcblx0XHRcdFx0Q09JQWRkU3RhdGU6IHRydWUsIC8v5Lqk5LuY5Lu75Yqh5Yib5bu65oyJ6ZKu5pON5L2c54q25oCBLFxyXG5cdFx0XHRcdC8vIFpDVFByb2R1Y3RVUkw6IFwiXCIsXHJcblx0XHRcdFx0aGlkZTogZmFsc2UsXHJcblx0XHRcdFx0dGhlbWU6IFwiXCIsXHJcblx0XHRcdFx0YnRuQ29tbWFuZE5hbWVfaWQ6IFwiXCJcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Y29tcG9uZW50czoge30sXHJcblx0XHRwcm9wczoge30sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG5cdFx0ICovXHJcblx0XHRvbkxvYWQ6IGFzeW5jIGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHRcdFx0Ly/nlKjmnaXnu5lzY3JvbGx2aWV36K6+572u5Zu65a6a6auY5bqmXHJcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0dGhhdC5tSGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHJcblx0XHRcdC8v6I635Y+W55m75b2V6aG16Z2i6LWL5YC855qE5b6u5L+h5pi156ew44CB5aS05YOP562J5L+h5oGvIFxyXG5cclxuXHRcdFx0dmFyIFdYTG9nb1N0YXRlID0gYXBwLmdsb2JhbERhdGEuV1hMb2dvU3RhdGU7IC8v54q25oCBIFxyXG5cclxuXHRcdFx0dmFyIGF2YXRhclVybCA9IGFwcC5nbG9iYWxEYXRhLmF2YXRhclVybDsgLy/mjojmnYPlvq7kv6Hlj7fnmoTlpLTlg48gXHJcblxyXG5cdFx0XHR2YXIgZ2VuZGVyID0gYXBwLmdsb2JhbERhdGEuZ2VuZGVyOyAvL+aOiOadg+W+ruS/oeWPt+aAp+WIq++8iOWls++8mjLvvJsg55S377yaMSDvvIkgXHJcblxyXG5cdFx0XHR2YXIgbmlja05hbWUgPSBhcHAuZ2xvYmFsRGF0YS5uaWNrTmFtZTsgLy/mjojmnYPlvq7kv6Hlj7fmmLXnp7AgXHJcblx0XHRcdC8v5qC55o2u5b2T5YmN55m76ZmG54q25oCB5Yik5pat5piv5ZCm6L+Y6ZyA6KaB6L+b6KGM5b6u5L+h55m76ZmG77yI5o6o6I2Q5bel5Y+L5ZKM5b6u5L+h5YWs5LyX5Y+35rOo5YaM5pe277yM6ZyA6KaB6L+b6KGM5b6u5L+h55m76ZmG77yJIFxyXG5cclxuXHRcdFx0Ly8gICBpZiAocG1KU1Rvb2xzLklzTnVsbE9yRW1wdHkoYXBwLmdsb2JhbERhdGEuX2lkKSkge1xyXG5cdFx0XHQvLyAgICAgdmFyIHNlclJlcyA9IGF3YWl0IHBtU2VyVG9vbHMuZ2V0QWNjb3VudCgpO1xyXG5cdFx0XHQvLyAgICAgaWYgKHNlclJlcyAhPSBcIk9LXCIpIHtcclxuXHRcdFx0Ly8gICAgICAgLy/lvLnmoYblh7rnjrBcclxuXHRcdFx0Ly8gICAgICAgLy8gdGhhdC5zZXREYXRhKHtcclxuXHRcdFx0Ly8gICAgICAgLy8gICBwbURpYWxvZ1Nob3VRdWFuOiB0cnVlXHJcblx0XHRcdC8vICAgICAgIC8vIH0pO1xyXG5cdFx0XHQvLyB0aGF0LnBtRGlhbG9nU2hvdVF1YW4gPSB0cnVlO1xyXG5cdFx0XHQvLyAgICAgfVxyXG5cdFx0XHQvLyAgIH1cclxuXHJcblx0XHRcdGlmIChwbUpTVG9vbHMuSXNOdWxsT3JFbXB0eShwbUpTVG9vbHMuR2V0U3ViT2JqKFtvcHRpb25zLCBcImRhdGFUeXBlXCJdKSkpIHtcclxuXHRcdFx0XHQvL+WIt+aWsOWKoOi9vVxyXG5cdFx0XHRcdGF3YWl0IHRoYXQuRnVuUmVmcmVzaEJ5T3BlcmF0aW9uU3RhdHVzKCk7IC8v6buY6K6k5Yqg6L295omn6KGM5Lit54q25oCBXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c3dpdGNoIChvcHRpb25zLmRhdGFUeXBlKSB7XHJcblx0XHRcdFx0XHRjYXNlIFwiQ09JQWRkTmV3RG9uZVwiOlxyXG5cdFx0XHRcdFx0Ly/mlrDlop7kuIDkuKpQTUNPSeeahOaDheW9olxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0XHRcdGxldCBldmVudENoYW5uZWwgPSB0aGlzLmdldE9wZW5lckV2ZW50Q2hhbm5lbCgpO1xyXG5cdFx0XHRcdFx0XHRldmVudENoYW5uZWwub24oJ1BNQ09JTGlzdCcsIFBNQ09JTGlzdCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gdGhhdC5zZXREYXRhKHtcclxuXHRcdFx0XHRcdFx0XHQvLyAgIFBNQ09JTGlzdDogUE1DT0lMaXN0XHJcblx0XHRcdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5QTUNPSUxpc3QgPSBQTUNPSUxpc3Q7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRjYXNlIFwibG9hZE15Q09JTGlzdFwiOiB7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGNhc2UgXCJsb2FkTXlDT0lMaXN0XCI6IHtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gLy9cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcclxuXHRcdCAqL1xyXG5cdFx0b25SZWFkeTogZnVuY3Rpb24oKSB7fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcblx0XHQgKi9cclxuXHRcdG9uSGlkZTogZnVuY3Rpb24oKSB7fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcblx0XHQgKi9cclxuXHRcdG9uVW5sb2FkOiBmdW5jdGlvbigpIHt9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuXHRcdCAqL1xyXG5cdFx0b25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uKCkge30sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuXHRcdCAqL1xyXG5cdFx0b25SZWFjaEJvdHRvbTogZnVuY3Rpb24oKSB7fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xyXG5cdFx0ICovXHJcblx0XHRvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHQvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cclxuXHRcdFx0Y29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR0aXRsZTogJ+WItueoi+mAmuWIhuS6q+mTvuaOpScsXHJcblx0XHRcdFx0cGF0aDogJy9taW5pcHJvZ3JhbS9wYWdlcy90YXNrTGlzdC90YXNrTGlzdCcsXHJcblx0XHRcdFx0aW1hZ2VVcmw6IHRoYXQuWkNUUHJvZHVjdFVSTFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHJcblx0XHRvblNob3coKSB7XHJcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0Ly8gdGhhdC5zZXREYXRhKHtcclxuXHRcdFx0Ly8gICBDT0lBZGRTdGF0ZTogdHJ1ZVxyXG5cdFx0XHQvLyB9KTtcclxuXHRcdFx0dGhpcy5DT0lBZGRTdGF0ZSA9IHRydWU7XHJcblx0XHRcdHRoYXQuRnVuUmVmcmVzaEJ5T3BlcmF0aW9uU3RhdHVzKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0T25QTUNPSUFkZE5ld1RhcChldmVudCkgLy/mlrDlop7lrqLmiLforqLljZXmjInpkq5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHJcblx0XHRcdFx0aWYgKHRoYXQuQ09JQWRkU3RhdGUgPT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIHRoYXQuc2V0RGF0YSh7XHJcblx0XHRcdFx0Ly8gIENPSUFkZFN0YXRlOiBmYWxzZVxyXG5cdFx0XHRcdC8vIH0pOyAvL+iOt+WPlueZu+W9lemhtemdoui1i+WAvOeahOW+ruS/oeaYteensOOAgeWktOWDj+etieS/oeaBryBcclxuXHRcdFx0XHR0aGF0LkNPSUFkZFN0YXRlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdHZhciBXWExvZ29TdGF0ZSA9IGFwcC5nbG9iYWxEYXRhLldYTG9nb1N0YXRlOyAvL+eKtuaAgSBcclxuXHJcblx0XHRcdFx0dmFyIGF2YXRhclVybCA9IGFwcC5nbG9iYWxEYXRhLmF2YXRhclVybDsgLy/mjojmnYPlvq7kv6Hlj7fnmoTlpLTlg48gXHJcblxyXG5cdFx0XHRcdHZhciBnZW5kZXIgPSBhcHAuZ2xvYmFsRGF0YS5nZW5kZXI7IC8v5o6I5p2D5b6u5L+h5Y+35oCn5Yir77yI5aWz77yaMu+8myDnlLfvvJoxIO+8iSBcclxuXHJcblx0XHRcdFx0dmFyIG5pY2tOYW1lID0gYXBwLmdsb2JhbERhdGEubmlja05hbWU7IC8v5o6I5p2D5b6u5L+h5Y+35pi156ewIFxyXG5cdFx0XHRcdC8v5qC55o2u5b2T5YmN55m76ZmG54q25oCB5Yik5pat5piv5ZCm6L+Y6ZyA6KaB6L+b6KGM5b6u5L+h55m76ZmG77yI5o6o6I2Q5bel5Y+L5ZKM5b6u5L+h5YWs5LyX5Y+35rOo5YaM5pe277yM6ZyA6KaB6L+b6KGM5b6u5L+h55m76ZmG77yJIFxyXG5cdFx0XHRcdC8vICBpZihXWExvZ29TdGF0ZSA9PXRydWUgKSBcclxuXHRcdFx0XHQvLyAgeyBcclxuXHRcdFx0XHQvLyAgICBjb25zb2xlLmxvZyhcIuW8ueahhuS4jeWHuueOsFwiKSBcclxuXHRcdFx0XHQvLyAgICB0aGlzLnNldERhdGEoeyBcclxuXHRcdFx0XHQvLyAgICAgIHBtRGlhbG9nU2hvdVF1YW46IGZhbHNlLCBcclxuXHRcdFx0XHQvLyAgICB9KSBcclxuXHRcdFx0XHQvLyAgfSBcclxuXHRcdFx0XHQvLyAgZWxzZSBcclxuXHRcdFx0XHQvLyAgeyBcclxuXHRcdFx0XHQvLyAgICBjb25zb2xlLmxvZyhcIuW8ueahhuWHuueOsFwiKSBcclxuXHRcdFx0XHQvLyAgICB0aGlzLnNldERhdGEoeyBcclxuXHRcdFx0XHQvLyAgICAgIHBtRGlhbG9nU2hvdVF1YW46IHRydWUsIFxyXG5cdFx0XHRcdC8vICAgIH0pIFxyXG5cdFx0XHRcdC8vICB9IFxyXG5cdFx0XHRcdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdFx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdFx0XHQvLyBpZiAocG1KU1Rvb2xzLklzTnVsbE9yRW1wdHkoYXBwLmdsb2JhbERhdGEuUE1Vc2VySUQpKSB7XHJcblx0XHRcdFx0Ly8gXHRjb25zb2xlLmxvZyhcIuW8ueahhuWHuueOsFwiKTtcclxuXHRcdFx0XHQvLyBcdC8vIHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0Ly8gXHQvLyAgIHBtRGlhbG9nU2hvdVF1YW46IHRydWVcclxuXHRcdFx0XHQvLyBcdC8vIH0pO1xyXG5cdFx0XHRcdC8vIFx0dGhhdC5wbURpYWxvZ1Nob3VRdWFuID0gdHJ1ZTtcclxuXHRcdFx0XHQvLyBcdHJldHVybjtcclxuXHRcdFx0XHQvLyB9XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGV2ZW50KTtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIFBNQ09JID0ge307XHJcblx0XHRcdFx0Ly8gdW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdC8vIHVybDogJy4uL3Byb3BlcnR5UGFnZS9wcm9wZXJ0eVBhZ2U/ZGF0YVR5cGU9UE1DT0lBZGROZXcnLFxyXG5cdFx0XHRcdC8vIFx0c3VjY2VzczogcmVzID0+IHt9LFxyXG5cdFx0XHRcdC8vIFx0ZmFpbDogKCkgPT4ge30sXHJcblx0XHRcdFx0Ly8gXHRjb21wbGV0ZTogKCkgPT4ge31cclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJy4uL3Byb3BlcnR5UGFnZS9wcm9wZXJ0eVBhZ2U/ZGF0YVR5cGU9UE1DT0lBZGROZXcnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdFx0Ly8g6L+Z6YeM57uZ6KaB5omT5byA55qE6aG16Z2i5Lyg6YCS5pWw5o2uLiAg56ys5LiA5Liq5Y+C5pWwOuaWueazlWtleSwg56ys5LqM5Liq5Y+C5pWwOumcgOimgeS8oOmAkueahOaVsOaNrlxyXG5cdFx0XHRcdFx0XHRyZXMuZXZlbnRDaGFubmVsLmVtaXQoJ1BNQ09JTGlzdCcsIHRoaXNcclxuXHRcdFx0XHRcdFx0LlBNQ09JTGlzdCk7IC8v5Lyg6YCSIHRoaXMuZGF0YS5QTUNPSUxpc3Tov4fljrvlvI/kuLrkuobvvIzmt7vliqDmiJDlip/lkI7jgIJcclxuXHRcdFx0XHRcdFx0Ly9QTUNPSeebtOaOpea3u+WKoOWIsHRoaXMuZGF0YS5QTUNPSUxpc3TkuK3vvIzlho3ov5Tlm57lvZPliY3nlYzpnaLvvIzku6Xlh4/lsJHkuIDmrKHmlbDmja7or7vlj5ZcclxuXHJcblx0XHRcdFx0XHRcdHRoYXQuRnVuUmVmcmVzaEJ5T3BlcmF0aW9uU3RhdHVzKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRvblBNQ09JVGFwKGV2ZW50KSAvL1BNQ09JIOaMieS4i1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXZlbnQpO1xyXG5cdFx0XHRcdHZhciBQTUNPSSA9IHt9O1xyXG5cdFx0XHRcdHZhciBUZW1waXNPcGVyYXRpb24gPSB0cnVlOyAvL+aYr+WQpuWFgeiuuOaTjeS9nOi/h+eoi+euoeaOp1xyXG5cclxuXHRcdFx0XHR2YXIgdGVtcFBNQ09JID0gcG1KU1Rvb2xzLmdldE9uZUNvbnRyb2xGcm9tTGlzdChldmVudC5jdXJyZW50VGFyZ2V0LmlkLCB0aGlzLlBNQ09JTGlzdCk7XHJcblxyXG5cdFx0XHRcdGlmICh0ZW1wUE1DT0kuUE1PcmRlclN0YXRlICE9IFwiTk9SRUxFQVNFXCIgJiYgdGVtcFBNQ09JLlBNT3JkZXJTdGF0ZSAhPSBcIlBVQkxJU0hcIikge1xyXG5cdFx0XHRcdFx0VGVtcGlzT3BlcmF0aW9uID0gZmFsc2U7XHJcblx0XHRcdFx0fSAvLyB3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHQvLyAgIHVybDogJy4uL3Rhc2tJbnRlcmZhY2UvdGFza0ludGVyZmFjZT9kYXRhVHlwZT1QTUNPSVRhcCZpc09wZXJhdGlvbj0nK1RlbXBpc09wZXJhdGlvbisnJlBNQ09JSUQ9JyArIGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQsXHJcblx0XHRcdFx0Ly8gfSlcclxuXHRcdFx0XHQvL+i3s+i9rOWIsOS7u+WKoeivpuaDhemhtSBcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcuLi90YXNrRGV0YWlsL3Rhc2tEZXRhaWw/ZGF0YVR5cGU9UE1DT0lUYXAmUE1DT0lJRD0nICsgZXZlbnQuY3VycmVudFRhcmdldC5pZCxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7fSxcclxuXHRcdFx0XHRcdGZhaWw6ICgpID0+IHt9LFxyXG5cdFx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHt9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8gd3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0Ly8gICB1cmw6ICcuLi90YXNrRGV0YWlsL3Rhc2tEZXRhaWw/ZGF0YVR5cGU9UE1DT0lUYXAmUE1DT0lJRD0nICsgZXZlbnQuY3VycmVudFRhcmdldC5pZFxyXG5cdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0b25QTUNPSUltYWdlVGFwKGV2ZW50KSAvL1BNQ09JIOWbvueJh+aMiemSrlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGV2ZW50KTtcclxuXHRcdFx0XHR2YXIgVGVtcERhdGEgPSBwbUpTVG9vbHMuZ2V0T25lQ29udHJvbEZyb21MaXN0KGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQsIHRoaXMuUE1DT0lMaXN0KTtcclxuXHJcblx0XHRcdFx0aWYgKHBtSlNUb29scy5Jc051bGxPckVtcHR5KFRlbXBEYXRhKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuOyAvL+ayoeacieW8ueahhuaVsOaNru+8jOS4jeS6iOaYvuekulxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy5wcm9wZXJ0eURpYWxvZy5tYWluVGl0bGUgPSBcIuiuoeWIkuS6pOi0p+aXpeacn++8mlwiICsgVGVtcERhdGEuWkNUUGxhbkRlbGlEYXRlU2hvcnQsIC8v5Li75o+Q56S6XHJcblx0XHRcdFx0XHR0aGlzLnByb3BlcnR5RGlhbG9nLnN1YlRpdGxlID0gVGVtcERhdGEuUE1Jbm5lckN1c3RvbWVyT3JkZXJJdGVtSUQsIC8v5a2Q5qCH6aKYXHJcblx0XHRcdFx0XHR0aGlzLnByb3BlcnR5RGlhbG9nLm1haW5UaXAgPSBUZW1wRGF0YS5QTUlubmVyUHJvZHVjdE5hbWUgKyBcIiAg6K6h5YiS5pWw6YeP77yaXCIgKyBUZW1wRGF0YS5QTU9yZGVyTnVtICsgVGVtcERhdGFcclxuXHRcdFx0XHRcdC5QTU9yZGVyVW5pdCwgLy/kuLvmoIfpophcclxuXHRcdFx0XHRcdHRoaXMucHJvcGVydHlEaWFsb2cuc3ViVGlwID0gXCLlt7LlrozmiJDvvJpcIiArIFRlbXBEYXRhLlpDVEZpbmlzaGVkTnVtICsgVGVtcERhdGEuUE1PcmRlclVuaXQgKyBcIiAgXCIgKyBcIuWujOaIkOeOh++8mlwiICtcclxuXHRcdFx0XHRcdFRlbXBEYXRhLlpDVEZpbmlzaGVkUmF0ZSArIFwiJVwiLCAvL+WtkOaPkOekulxyXG5cdFx0XHRcdFx0dGhpcy5wcm9wZXJ0eURpYWxvZy5zdWJJbmZvTGlzdCA9IG51bGw7XHJcblx0XHRcdFx0dGhpcy5wcm9wZXJ0eURpYWxvZy5zdWJPcGVyYXRpb24gPSBcIuWPlua2iFwiLCAvL+i+heWKqeaTjeS9nOaMiemSruaPkOekulxyXG5cdFx0XHRcdFx0dGhpcy5wcm9wZXJ0eURpYWxvZy5tYWluT3BlcmF0aW9uID0gXCLkv67mlLlcIiwgLy/kuLvmk43kvZzmjInpkq7mj5DnpLpcclxuXHRcdFx0XHRcdHRoaXMucHJvcGVydHlEaWFsb2cuaXNQcm9wZXJ0eURpYWxvZ09wZW4gPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMucHJvcGVydHlEaWFsb2cuX2lkID0gVGVtcERhdGEuX2lkO1xyXG5cclxuXHRcdFx0XHRpZiAoVGVtcERhdGEuUE1PcmRlclByb1R5cGUgPT0gXCLlirPliqFcIikge1xyXG5cdFx0XHRcdFx0dGhpcy5wcm9wZXJ0eURpYWxvZy5tYWluVGlwID0gVGVtcERhdGEuUE1Jbm5lclByb2R1Y3ROYW1lICsgXCIgIOiuoeWIkuWkqeaVsO+8mlwiICsgVGVtcERhdGEuUE1PcmRlck51bSArIFRlbXBEYXRhXHJcblx0XHRcdFx0XHRcdC5QTU9yZGVyVW5pdDsgLy/kuLvmoIfpophcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0Ly8gICBwcm9wZXJ0eURpYWxvZzogdGhpcy5wcm9wZXJ0eURpYWxvZyxcclxuXHRcdFx0XHQvLyAgIFpDVFByb2R1Y3RVUkw6IFRlbXBEYXRhLlpDVFByb2R1Y3RVUkwgLy/orr7nva7kuLvlr7nosaHlm77niYdcclxuXHJcblx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0dGhhdC5wcm9wZXJ0eURpYWxvZyA9IHRoaXMucHJvcGVydHlEaWFsb2c7XHJcblx0XHRcdFx0dGhhdC5aQ1RQcm9kdWN0VVJMID0gVGVtcERhdGEuWkNUUHJvZHVjdFVSTDtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHByb3BlcnR5RGlhbG9nQ2xvc2UoKSB7XHJcblx0XHRcdFx0dGhpcy5wcm9wZXJ0eURpYWxvZy5pc1Byb3BlcnR5RGlhbG9nT3BlbiA9IGZhbHNlO1xyXG5cdFx0XHRcdC8vIHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0Ly8gICBwcm9wZXJ0eURpYWxvZzogdGhpcy5wcm9wZXJ0eURpYWxvZ1xyXG5cdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdHRoYXQucHJvcGVydHlEaWFsb2cgPSB0aGlzLnByb3BlcnR5RGlhbG9nO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0YXN5bmMgYmluZExvYWRpbmdNb3JlKCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCfmu5HliLDlupXkuobvvIzlvIDlp4vliqDovb3mm7TlpJonKTtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7IC8vc2V0VGltZW91dOmHjOS8mueUqOWIsO+8jFxyXG5cclxuXHRcdFx0XHQvLyB0aGF0LnNldERhdGEoe1xyXG5cdFx0XHRcdC8vICAgLy9Nb3ZlVG9Eb3fop6blj5FcclxuXHRcdFx0XHQvLyAgIGlzTW92ZVRvRG93bjogdHJ1ZVxyXG5cdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdHRoYXQuaXNNb3ZlVG9Eb3duID0gdHJ1ZTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0Ly9Nb3ZlVG9Eb3cg5pe26Ze06ZmQ5Yi2XHJcblx0XHRcdFx0XHQvLyB0aGF0LnNldERhdGEoe1xyXG5cdFx0XHRcdFx0Ly8gICBpc01vdmVUb0Rvd246IGZhbHNlXHJcblx0XHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHRcdHRoYXQuaXNNb3ZlVG9Eb3duID0gZmFsc2U7XHJcblx0XHRcdFx0fSwgMzAwMCk7XHJcblx0XHRcdFx0YXdhaXQgdGhpcy5nZXRQTUNPSUxpc3RCeVVzZXJNb3JlKCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRhc3luYyBiaW5kTG9hZGluZ05ldygpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn5ruR5Yiw6aG25LqG77yM5byA5aeL5Yqg6L295pu05aSaJyk7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzOyAvL3NldFRpbWVvdXTph4zkvJrnlKjliLDvvIxcclxuXHJcblx0XHRcdFx0Ly8gdGhhdC5zZXREYXRhKHtcclxuXHRcdFx0XHQvLyAgIC8vTW92ZVRvVXDop6blj5FcclxuXHRcdFx0XHQvLyAgIGlzTW92ZVRvVXA6IHRydWVcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHR0aGF0LmlzTW92ZVRvVXAgPSB0cnVlO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQvL+aXtumXtOmZkOWItlxyXG5cdFx0XHRcdFx0Ly8gdGhhdC5zZXREYXRhKHtcclxuXHRcdFx0XHRcdC8vICAgaXNNb3ZlVG9VcDogZmFsc2VcclxuXHRcdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdFx0dGhhdC5pc01vdmVUb1VwID0gZmFsc2U7XHJcblx0XHRcdFx0fSwgMzAwMCk7IC8vYXdhaXQgdGhpcy5nZXRQTUNPSUxpc3RCeVVzZXJOZXcoKVxyXG5cclxuXHRcdFx0XHR0aGF0LkZ1blJlZnJlc2hCeU9wZXJhdGlvblN0YXR1cygpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly/liqDovb3mm7TlpJpcclxuXHRcdFx0YXN5bmMgZ2V0UE1DT0lMaXN0QnlVc2VyTW9yZSgpIHtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIGZ1bmNOYW1lID0gXCJnZXRQTUNPSUxpc3RieUFsbFBNVXNlclwiO1xyXG5cdFx0XHRcdHZhciBmdW5jUHJhID0ge307XHJcblx0XHRcdFx0ZnVuY1ByYS5QTVVTZXIgPSB7fTsgLy/ku45hcHDkuK3ojrflvpfvvIzmmoLml7bnva7nqbpcclxuXHJcblx0XHRcdFx0dGhpcy5QTUNPSUxpc3RTa2lwID0gdGhpcy5QTUNPSUxpc3RTa2lwICsgdGhpcy5QTUNPSUxpc3RMaW1pdCwgLy/pobXotbflp4sg77yI5YiG6aG15pi+56S677yM56ys5LiA6aG177yJIC8v5LiL5ouJ5Yid5aeL5YyW77yMIOS4iuaLieWKoOmhteWPt1xyXG5cdFx0XHRcdFx0Ly8gdGhpcy5zZXREYXRhKHtcclxuXHRcdFx0XHRcdC8vICAgUE1DT0lMaXN0U2tpcDogdGhpcy5QTUNPSUxpc3RTa2lwIC8v6aG16LW35aeLXHJcblxyXG5cdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHR0aGF0LlBNQ09JTGlzdFNraXAgPSB0aGlzLlBNQ09JTGlzdFNraXA7XHJcblx0XHRcdFx0ZnVuY1ByYS5za2lwQW5kTGltaXQgPSBbdGhpcy5QTUNPSUxpc3RTa2lwLCBEYXRhTGlzdExpbWl0XTsgLy8gXHJcblxyXG5cdFx0XHRcdGZ1bmNQcmEuU2VsZWN0U3RhdGUgPSB0aGlzLk9wdGlvblNlbGVjdFN0YXRlO1xyXG5cdFx0XHRcdGZ1bmNQcmEuWkNUQ3JlYXRlciA9IGFwcC5nbG9iYWxEYXRhLlBNVXNlcklEOyAvL+WIm+W7uuS6uu+8iOW9k+WJjeiHquW3seeahFVzZXJJRO+8iVxyXG5cclxuXHRcdFx0XHR2YXIgc2VyUmVzID0gYXdhaXQgcG1TZXJUb29scy5leGVQTUNPSShmdW5jTmFtZSwgZnVuY1ByYSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coc2VyUmVzKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHJcblx0XHRcdFx0aWYgKHNlclJlcy5lcnJNc2cgIT0gXCJPS1wiKSB7XHJcblx0XHRcdFx0XHR0aGlzLnRvcFRpcHNTdHIgPSBzZXJSZXMuZXJyTXNnO1xyXG5cdFx0XHRcdFx0Ly92YXIgdGhhdCA9IHRoaXM7IC8vc2V0VGltZW91dOmHjOS8mueUqOWIsO+8jFxyXG5cdFx0XHRcdFx0Ly/lm6DkuLrmn6Xor6LmsqHmnInmiJDlip8s5aKe5Yqg55qE6LW35aeL54K56KaB5Zue6YCAXHJcblxyXG5cdFx0XHRcdFx0dGhpcy5QTUNPSUxpc3RTa2lwID0gdGhpcy5QTUNPSUxpc3RTa2lwIC0gdGhpcy5QTUNPSUxpc3RMaW1pdCwgLy/pobXotbflp4sg77yI5YiG6aG15pi+56S677yM56ys5LiA6aG177yJIC8v5LiL5ouJ5Yid5aeL5YyW77yMIOS4iuaLieWKoOmhteWPt1xyXG5cdFx0XHRcdFx0XHQvLyB0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRcdFx0XHQvLyAgIFBNQ09JTGlzdFNraXA6IHRoaXMuUE1DT0lMaXN0U2tpcCAvL+mhtei1t+Wni1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHRcdHRoYXQuUE1DT0lMaXN0U2tpcCA9IHRoaXMuUE1DT0lMaXN0U2tpcDtcclxuXHRcdFx0XHRcdC8vIHRoYXQuc2V0RGF0YSh7XHJcblx0XHRcdFx0XHQvLyAgIC8vTW92ZVRvVXDop6blj5FcclxuXHRcdFx0XHRcdC8vICAgdG9wVGlwczogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vICAgdG9wVGlwc1N0cjogdGhhdC50b3BUaXBzU3RyXHJcblx0XHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHRcdHRoYXQudG9wVGlwcyA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGF0LnRvcFRpcHNTdHIgPSB0aGF0LnRvcFRpcHNTdHI7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQvL+aXtumXtOmZkOWItlxyXG5cdFx0XHRcdFx0XHQvLyB0aGF0LnNldERhdGEoe1xyXG5cdFx0XHRcdFx0XHQvLyAgIHRvcFRpcHM6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHQvLyAgIHRvcFRpcHNTdHI6IFwiXCJcclxuXHRcdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHRcdHRoYXQudG9wVGlwcyA9IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdHRoYXQudG9wVGlwc1N0ciA9IFwiXCI7XHJcblx0XHRcdFx0XHR9LCAzMDAwKTtcclxuXHRcdFx0XHR9IFxyXG5cdFx0XHRcdGVsc2UgXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYoc2VyUmVzLnJlc3VsdCE9bnVsbClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWYoc2VyUmVzLnJlc3VsdC5sZW5ndGg+MClcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuUE1DT0lMaXN0ID0gdGhpcy5QTUNPSUxpc3QuY29uY2F0KHNlclJlcy5yZXN1bHQpOyAvL+aWsOafpeivouWIsOeahOebtOaOpeWKoOWcqOWQjumdolxyXG5cdFx0XHRcdFx0XHRcdC8v5omn6KGM6K6h566X6amx5Yqo5Ye95pWw77yI5pyJ5Lqb5Y+Y6YeP5piv6K6h566X6I635b6X55qE77yJXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY2FsUE1DT0lMaXN0KCk7XHJcblx0XHRcdFx0XHRcdFx0Ly8gdGhpcy5zZXREYXRhKHtcclxuXHRcdFx0XHRcdFx0XHQvLyAgIFBNQ09JTGlzdDogdGhpcy5QTUNPSUxpc3RcclxuXHRcdFx0XHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LlBNQ09JTGlzdCA9IHRoaXMuUE1DT0lMaXN0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdC8v5Zug5Li65p+l6K+i5rKh5pyJ5oiQ5YqfLOWinuWKoOeahOi1t+Wni+eCueimgeWbnumAgFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuUE1DT0lMaXN0U2tpcCA9IHRoaXMuUE1DT0lMaXN0U2tpcCAtIHRoaXMuUE1DT0lMaXN0TGltaXQsIC8v6aG16LW35aeLIO+8iOWIhumhteaYvuekuu+8jOesrOS4gOmhte+8iSAvL+S4i+aLieWIneWni+WMlu+8jCDkuIrmi4nliqDpobXlj7dcclxuXHRcdFx0XHRcdFx0XHRcdC8vIHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyAgIFBNQ09JTGlzdFNraXA6IHRoaXMuUE1DT0lMaXN0U2tpcCAvL+mhtei1t+Wni1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LlBNQ09JTGlzdFNraXAgPSB0aGlzLlBNQ09JTGlzdFNraXA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly/miafooYzkuLpPSyzkvYbnu5PmnpzkuLrnqbrnmoTmg4XlvaLjgIJcclxuXHRcdFx0XHRcdGlmIChwbUpTVG9vbHMuSXNOdWxsT3JFbXB0eShwbUpTVG9vbHMuR2V0U3ViT2JqKFtzZXJSZXMucmVzdWx0LCAwXSkpKSAvL+aVsOaNrue7k+aenOaUvuWcqOS6hnJlc3VsdOesrOS4gOS4quaVsOaNruWIl+S4rSzmiYDku6XpnIDopoHohLHlo7NcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly/liLfmlrBcclxuXHRcdFx0YXN5bmMgZ2V0UE1DT0lMaXN0QnlVc2VyTmV3KCkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgZnVuY05hbWUgPSBcImdldFBNQ09JTGlzdGJ5QWxsUE1Vc2VyXCI7XHJcblx0XHRcdFx0dmFyIGZ1bmNQcmEgPSB7fTtcclxuXHRcdFx0XHRmdW5jUHJhLlBNVVNlciA9IHt9OyAvL+S7jmFwcOS4reiOt+W+l++8jOaaguaXtue9ruepulxyXG5cclxuXHRcdFx0XHR0aGlzLlBNQ09JTGlzdFNraXAgPSBEYXRhTGlzdFNraXAsIC8v6aG15Y+3IO+8iOWIhumhteaYvuekuu+8jOesrOS4gOmhte+8iSAvL+S4i+aLieWIneWni+WMlu+8jCDkuIrmi4nliqDpobXlj7dcclxuXHRcdFx0XHRcdHRoaXMuUE1DT0lMaXN0TGltaXQgPSBEYXRhTGlzdExpbWl0LCAvL+mhtemVvyDvvIjkuIDmrKHku47mnI3liqHlmajojrflj5bmlbDmja7pobnmlbDvvIkgLy/kuIvmi4nliJ3lp4vljJbvvIwg5LiK5ouJ5Yqg6aG16ZW/5LiN5Y+YXHJcblxyXG5cdFx0XHRcdFx0dGhhdC5QTUNPSUxpc3RTa2lwID0gdGhpcy5QTUNPSUxpc3RTa2lwLFxyXG5cdFx0XHRcdFx0dGhhdC5QTUNPSUxpc3RMaW1pdCA9IHRoaXMuUE1DT0lMaXN0TGltaXQ7XHJcblx0XHRcdFx0ZnVuY1ByYS5za2lwQW5kTGltaXQgPSBbRGF0YUxpc3RTa2lwLCBEYXRhTGlzdExpbWl0XTsgLy8w77yMMCDmoIfor4bmjInns7vnu5/pu5jorqQgXHJcblxyXG5cdFx0XHRcdGZ1bmNQcmEuU2VsZWN0U3RhdGUgPSB0aGlzLk9wdGlvblNlbGVjdFN0YXRlO1xyXG5cdFx0XHRcdGZ1bmNQcmEuWkNUQ3JlYXRlciA9IGFwcC5nbG9iYWxEYXRhLlBNVXNlcklEOyAvL+WIm+W7uuS6uu+8iOW9k+WJjeiHquW3seeahFVzZXJJRO+8iVxyXG5cclxuXHRcdFx0XHR2YXIgc2VyUmVzID0gYXdhaXQgcG1TZXJUb29scy5leGVQTUNPSShmdW5jTmFtZSwgZnVuY1ByYSk7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5YmN56uv55WM6Z2i6I635Y+W55qE5YC85Li677yaXCIrc2VyUmVzKVxyXG5cclxuICAgICAgICAgICAgICAgICBpZihzZXJSZXMucmVzdWx0LmVyck1zZyE9XCJPS1wiKVxyXG5cdFx0XHRcdCB7XHJcblx0XHRcdFx0XHQgdGhpcy50b3BUaXBzU3RyID0gc2VyUmVzLmVyck1zZztcclxuXHRcdFx0XHRcdCB2YXIgdGhhdCA9IHRoaXM7IC8vc2V0VGltZW91dOmHjOS8mueUqOWIsO+8jFxyXG5cdFx0XHRcdFx0IHRoYXQudG9wVGlwcyA9IHRydWUsXHJcblx0XHRcdFx0XHQgXHR0aGF0LnRvcFRpcHNTdHIgPSB0aGF0LnRvcFRpcHNTdHI7XHJcblx0XHRcdFx0XHQgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdCBcdHRoYXQudG9wVGlwcyA9IGZhbHNlLFxyXG5cdFx0XHRcdFx0IFx0XHR0aGF0LnRvcFRpcHNTdHIgPSBcIlwiO1xyXG5cdFx0XHRcdFx0IH0sIDMwMDApO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGVsc2VcclxuXHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0IHRoaXMuUE1DT0lMaXN0ID0gc2VyUmVzLnJlc3VsdC5yZXN1bHQ7IC8v5omn6KGM6K6h566X6amx5Yqo5Ye95pWw77yI5pyJ5Lqb5Y+Y6YeP5piv6K6h566X6I635b6X55qE77yJXHJcblx0XHRcdFx0XHQgdGhpcy5jYWxQTUNPSUxpc3QoKTtcclxuXHRcdFx0XHRcdCB0aGF0LnBtY29pbGlzdCA9IHRoaXMuUE1DT0lMaXN0O1xyXG5cdFx0XHRcdFx0IGNvbnNvbGUubG9nKHRoaXMuUE1DT0lMaXN0KTtcclxuXHRcdFx0XHQgfVxyXG5cclxuXHRcdFx0XHQvLyBpZiAoIXBtSlNUb29scy5Jc051bGxPckVtcHR5KHBtSlNUb29scy5HZXRTdWJPYmooW3NlclJlcy5yZXN1bHQsIDBdKSkpIC8v5pWw5o2u57uT5p6c5pS+5Zyo5LqGcmVzdWx056ys5LiA5Liq5pWw5o2u5YiX5LitLOaJgOS7pemcgOimgeiEseWjs1xyXG5cdFx0XHRcdC8vIHtcclxuXHRcdFx0XHQvLyBcdHRoaXMuUE1DT0lMaXN0ID0gc2VyUmVzLnJlc3VsdFswXTsgLy/miafooYzorqHnrpfpqbHliqjlh73mlbDvvIjmnInkupvlj5jph4/mmK/orqHnrpfojrflvpfnmoTvvIlcclxuXHRcdFx0XHQvLyBcdHRoaXMuY2FsUE1DT0lMaXN0KCk7XHJcblx0XHRcdFx0Ly8gXHR0aGF0LnBtY29pbGlzdCA9IHRoaXMuUE1DT0lMaXN0O1xyXG5cdFx0XHQgLy8gICAgIFx0Y29uc29sZS5sb2codGhpcy5QTUNPSUxpc3QpO1xyXG5cdFx0XHRcdC8vIH1cclxuXHJcblx0XHRcdFx0Ly8gaWYgKHNlclJlcy5lcnJNc2cgPT0gXCJPS1wiICYmIHBtSlNUb29scy5Jc051bGxPckVtcHR5KHBtSlNUb29scy5HZXRTdWJPYmooW3NlclJlcy5yZXN1bHQsIDBdKSkpIHtcclxuXHRcdFx0XHQvLyBcdHRoYXQuUE1DT0lMaXN0ID0gW107XHJcblx0XHRcdFx0Ly8gfVxyXG5cclxuXHRcdFx0XHQvLyBpZiAoc2VyUmVzLmVyck1zZyAhPSBcIk9LXCIpIHtcclxuXHRcdFx0XHQvLyBcdHRoaXMudG9wVGlwc1N0ciA9IHNlclJlcy5lcnJNc2c7XHJcblx0XHRcdFx0Ly8gXHR2YXIgdGhhdCA9IHRoaXM7IC8vc2V0VGltZW91dOmHjOS8mueUqOWIsO+8jFxyXG5cdFx0XHRcdC8vIFx0dGhhdC50b3BUaXBzID0gdHJ1ZSxcclxuXHRcdFx0XHQvLyBcdFx0dGhhdC50b3BUaXBzU3RyID0gdGhhdC50b3BUaXBzU3RyO1xyXG5cdFx0XHRcdC8vIFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQvLyBcdFx0dGhhdC50b3BUaXBzID0gZmFsc2UsXHJcblx0XHRcdFx0Ly8gXHRcdFx0dGhhdC50b3BUaXBzU3RyID0gXCJcIjtcclxuXHRcdFx0XHQvLyBcdH0sIDMwMDApO1xyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdG9uUE1DT0lFZGl0KGV2ZW50KSB7XHJcblx0XHRcdFx0Ly9QTUNPSee8lui+kVxyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgVGVtcENPSURhdGEgPSB0aGF0LlBNQ09JTGlzdC5maW5kKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdHJldHVybiBlLl9pZCA9PSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpZiAoIXBtSlNUb29scy5Jc051bGxPckVtcHR5KFRlbXBDT0lEYXRhKSkge1xyXG5cdFx0XHRcdFx0aWYgKFRlbXBDT0lEYXRhLlBNT3JkZXJTdGF0ZSA9PSBcIk5PUkVMRUFTRVwiIHx8IFRlbXBDT0lEYXRhLlBNT3JkZXJTdGF0ZSA9PSBcIlBVQkxJU0hcIikge1xyXG5cdFx0XHRcdFx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHR1cmw6ICcuLi9wcm9wZXJ0eVBhZ2UvcHJvcGVydHlQYWdlP2RhdGFUeXBlPVBNQ09JRWRpdCZQTUNPSV9pZD0nICsgZXZlbnQuY3VycmVudFRhcmdldFxyXG5cdFx0XHRcdFx0XHRcdFx0LmlkLFxyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyDov5nph4znu5nopoHmiZPlvIDnmoTpobXpnaLkvKDpgJLmlbDmja4uICDnrKzkuIDkuKrlj4LmlbA65pa55rOVa2V5LCDnrKzkuozkuKrlj4LmlbA66ZyA6KaB5Lyg6YCS55qE5pWw5o2uXHJcblx0XHRcdFx0XHRcdFx0XHRyZXMuZXZlbnRDaGFubmVsLmVtaXQoJ1BNQ09JTGlzdCcsIHRoYXQuUE1DT0lMaXN0KTsgLy90aGF0Lk9uRWRpdFNlbGVjdCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly/kvKDpgJIgdGhpcy5kYXRhLlBNQ09JTGlzdOi/h+WOu+W8j+S4uuS6hu+8jOa3u+WKoOaIkOWKn+WQjuOAglxyXG5cdFx0XHRcdFx0XHRcdFx0Ly9QTUNPSeebtOaOpea3u+WKoOWIsHRoaXMuZGF0YS5QTUNPSUxpc3TkuK3vvIzlho3ov5Tlm57lvZPliY3nlYzpnaLvvIzku6Xlh4/lsJHkuIDmrKHmlbDmja7or7vlj5ZcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR0aGF0LnByb3BlcnR5RGlhbG9nLmlzUHJvcGVydHlEaWFsb2dPcGVuID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdC8vIHRoYXQuc2V0RGF0YSh7XHJcblx0XHRcdFx0XHRcdC8vICAgcHJvcGVydHlEaWFsb2c6IHRoYXQucHJvcGVydHlEaWFsb2dcclxuXHRcdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHRcdHRoYXQucHJvcGVydHlEaWFsb2cgPSB0aGF0LnByb3BlcnR5RGlhbG9nO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5TaG93RXJyb3JUaXBzKFwi5Lqk5LuY5Lu75Yqh6Z2e57yW6L6R54q25oCB5oiW5Y+R5biD54q25oCB77yM5LiN6IO96L+b6KGM57yW6L6R5pON5L2c77yBXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8vUE1DT0nmn6XnnItcclxuXHRcdFx0b25QTUNPSVNIT1coZXZlbnQpIHtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXZlbnQpOyAvL+i3s+i9rOWIsOS7u+WKoeWxnuaAp+mhtVxyXG5cdFx0XHRcdC8vIHd4Lm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdC8vICAgdXJsOiAnLi4vcHJvcGVydHlQYWdlL3Byb3BlcnR5UGFnZT9kYXRhVHlwZT1QTUNPSVNob3cmUE1DT0lfaWQ9JysgZXZlbnQuY3VycmVudFRhcmdldC5pZCxcclxuXHRcdFx0XHQvLyAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0Ly8gICAgIC8vIOi/memHjOe7meimgeaJk+W8gOeahOmhtemdouS8oOmAkuaVsOaNri4gIOesrOS4gOS4quWPguaVsDrmlrnms5VrZXksIOesrOS6jOS4quWPguaVsDrpnIDopoHkvKDpgJLnmoTmlbDmja5cclxuXHRcdFx0XHQvLyAgICAgcmVzLmV2ZW50Q2hhbm5lbC5lbWl0KCdQTUNPSUxpc3QnLCB0aGlzLmRhdGEuUE1DT0lMaXN0KVxyXG5cdFx0XHRcdC8vICAgICAvL+S8oOmAkiB0aGlzLmRhdGEuUE1DT0lMaXN06L+H5Y675byP5Li65LqG77yM5re75Yqg5oiQ5Yqf5ZCO44CCXHJcblx0XHRcdFx0Ly8gICAgIC8vUE1DT0nnm7TmjqXmt7vliqDliLB0aGlzLmRhdGEuUE1DT0lMaXN05Lit77yM5YaN6L+U5Zue5b2T5YmN55WM6Z2i77yM5Lul5YeP5bCR5LiA5qyh5pWw5o2u6K+75Y+WXHJcblx0XHRcdFx0Ly8gICB9XHJcblx0XHRcdFx0Ly8gfSlcclxuXHRcdFx0XHQvL+i3s+i9rOWIsOS7u+WKoeivpuaDhemhtSBcclxuXHJcblx0XHRcdFx0d3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcuLi90YXNrRGV0YWlsL3Rhc2tEZXRhaWw/ZGF0YVR5cGU9UE1DT0lUYXAmUE1DT0lJRD0nICsgZXZlbnQuY3VycmVudFRhcmdldC5pZFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMucHJvcGVydHlEaWFsb2cuaXNQcm9wZXJ0eURpYWxvZ09wZW4gPSBmYWxzZTtcclxuXHRcdFx0XHQvLyB0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRcdC8vICAgcHJvcGVydHlEaWFsb2c6IHRoaXMucHJvcGVydHlEaWFsb2dcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHR0aGF0LnByb3BlcnR5RGlhbG9nID0gdGhpcy5wcm9wZXJ0eURpYWxvZztcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGNhbFBNQ09JTGlzdCgpIC8v5pyJ5LiA5Lqb5a2X5q615piv6YCa6L+H6YGN5Y6GUE1DT0lMaXN0LOiuoeeul+iOt+W+l+eahO+8jOmAmui/h+atpOWHveaVsOWujOaIkOOAglxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly9jYWxQTUNPSUxpc3Tlj6rmmK/kv67mlLl0aGlzLmRhdGHvvIzlubbmsqHmnInmiafooYxzZXREYXRl6L+b6KGM5riy5p+TXHJcblx0XHRcdFx0Zm9yICh2YXIgdGVtcEtleSBpbiB0aGlzLlBNQ09JTGlzdCkge1xyXG5cdFx0XHRcdFx0Ly9jYWxDaGFuZ2VUaW1lU3Ry55So5LqO546w5Zyo5Zyo5Lu75Yqh5p2h5LiK55qE5pe26Ze0566A56ew77yM6L+Z5piv5Liq6K6h566X5YC877yM5omA5Lul6ZyA6KaB5Li05pe26K6h566X6I635b6XXHJcblx0XHRcdFx0XHRwbUpTVG9vbHMuY2FsUE1DT0kodGhpcy5QTUNPSUxpc3RbdGVtcEtleV0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdG9uUE1DT0lDb21tYW5kU2VsZWN0KGV2ZW50KSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHRoaXMuc2hvd0lPU0RpYWxvZy5faWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG5cdFx0XHRcdHRoaXMuc2hvd0lPU0RpYWxvZztcclxuXHRcdFx0XHR0aGlzLkNsaWNrSXRlbURhdGEgPSB0aGlzLlBNQ09JTGlzdC5maW5kKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdHJldHVybiBlLl9pZCA9PSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMuc2hvd0lPU0RpYWxvZy5pc1Nob3dJT1NEaWFsb2cgPSB0cnVlO1xyXG5cdFx0XHRcdC8vIHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0Ly8gICBzaG93SU9TRGlhbG9nOiB0aGlzLnNob3dJT1NEaWFsb2csXHJcblx0XHRcdFx0Ly8gICBDbGlja0l0ZW1EYXRhOiB0aGlzLkNsaWNrSXRlbURhdGFcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHR0aGF0LnNob3dJT1NEaWFsb2cgPSB0aGlzLnNob3dJT1NEaWFsb2c7XHJcblx0XHRcdFx0dGhhdC5DbGlja0l0ZW1EYXRhID0gdGhpcy5DbGlja0l0ZW1EYXRhO1xyXG5cdFx0XHRcdHZhciB0ZW1wUE1DT0kgPSBwbUpTVG9vbHMuZ2V0T25lQ29udHJvbEZyb21MaXN0KGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQsIHRoaXMuUE1DT0lMaXN0KTtcclxuXHRcdFx0XHR0aGlzLmRpYWxvZ1BNT3JkZXJQcm9UeXBlID0gdGVtcFBNQ09JLlBNT3JkZXJQcm9UeXBlO1xyXG5cclxuXHRcdFx0XHRpZiAodGVtcFBNQ09JLlBNT3JkZXJTdGF0ZSAhPSBcIk5PUkVMRUFTRVwiICYmIHRlbXBQTUNPSS5QTU9yZGVyU3RhdGUgIT0gXCJQVUJMSVNIXCIpIHtcclxuXHRcdFx0XHRcdC8vIHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0XHQvLyAgIGNsYXNzVmlldzogXCJ3ZXVpLWFjdGlvbnNoZWV0X19jZWxsbm9uZVwiXHJcblx0XHRcdFx0XHQvLyB9KTsgLy/lt7LmjojmnYPvvIzkuI3lhYHorrjov5vooYzliKDpmaTlkoznvJbovpFcclxuXHRcdFx0XHRcdHRoYXQuY2xhc3NWaWV3ID0gXCJ3ZXVpLWFjdGlvbnNoZWV0X19jZWxsbm9uZVwiO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyB0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRcdFx0Ly8gICBjbGFzc1ZpZXc6IFwid2V1aS1hY3Rpb25zaGVldF9fY2VsbFwiXHJcblx0XHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHRcdHRoaXMuY2xhc3NWaWV3ID0gXCJ3ZXVpLWFjdGlvbnNoZWV0X19jZWxsXCI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyB0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRcdC8vICAgZGlhbG9nUE1PcmRlclByb1R5cGU6IHRoaXMuZGlhbG9nUE1PcmRlclByb1R5cGVcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHR0aGF0LmRpYWxvZ1BNT3JkZXJQcm9UeXBlID0gdGhpcy5kaWFsb2dQTU9yZGVyUHJvVHlwZTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdG9uUE1DT0lDb21tYW5kU2VsZWN0Q2xvc2UoKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93SU9TRGlhbG9nLmlzU2hvd0lPU0RpYWxvZyA9IGZhbHNlO1xyXG5cdFx0XHRcdC8vIHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0Ly8gICBzaG93SU9TRGlhbG9nOiB0aGlzLnNob3dJT1NEaWFsb2dcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHR0aGlzLnNob3dJT1NEaWFsb2cgPSB0aGlzLnNob3dJT1NEaWFsb2c7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRzaGFyZVBNQ09JKGV2ZW50KSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXZlbnQpO1xyXG5cdFx0XHRcdHZhciB0ZW1wUE1DT0kgPSBwbUpTVG9vbHMuZ2V0T25lQ29udHJvbEZyb21MaXN0KGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQsIHRoaXMuUE1DT0lMaXN0KTtcclxuXHRcdFx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJy4uL3NoYXJlUGFnZS9zaGFyZVBhZ2U/ZGF0YVR5cGU9UE1DT0lPcGVuJlBNQ09JX2lkPScgKyBldmVudC5jdXJyZW50VGFyZ2V0LmlkLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdFx0Ly8g6L+Z6YeM57uZ6KaB5omT5byA55qE6aG16Z2i5Lyg6YCS5pWw5o2uLiAg56ys5LiA5Liq5Y+C5pWwOuaWueazlWtleSwg56ys5LqM5Liq5Y+C5pWwOumcgOimgeS8oOmAkueahOaVsOaNrlxyXG5cdFx0XHRcdFx0XHRyZXMuZXZlbnRDaGFubmVsLmVtaXQoJ1BNQ09JJywgdGVtcFBNQ09JKTsgLy/kvKDpgJIgdGhpcy5kYXRhLlBNQ09JTGlzdOi/h+WOu+W8j+S4uuS6hu+8jOa3u+WKoOaIkOWKn+WQjuOAglxyXG5cdFx0XHRcdFx0XHQvL1BNQ09J55u05o6l5re75Yqg5YiwdGhpcy5kYXRhLlBNQ09JTGlzdOS4re+8jOWGjei/lOWbnuW9k+WJjeeVjOmdou+8jOS7peWHj+WwkeS4gOasoeaVsOaNruivu+WPllxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly/liKDpmaTkuqTku5jku7vliqHvvIjkuozmrKHnoa7orqTlvLnmoYbvvIlcclxuXHRcdFx0YXN5bmMgZGVsZXRlUE1DT0koZXZlbnQpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhldmVudCk7XHJcblx0XHRcdFx0dmFyIGZ1bmNQcmEgPSB7fTtcclxuXHRcdFx0XHRmdW5jUHJhLlBNQ09JID0ge307IC8v5YeG5aSH5LiA5Liq56m655qEUE1DT0lcclxuXHJcblx0XHRcdFx0ZnVuY1ByYS5QTUNPSS5faWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG5cdFx0XHRcdHZhciB0ZW1wUE1DT0kgPSBwbUpTVG9vbHMuZ2V0T25lQ29udHJvbEZyb21MaXN0KGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQsIHRoaXMuUE1DT0lMaXN0KTtcclxuXHRcdFx0XHRmdW5jUHJhLlBNQ09JID0gdGVtcFBNQ09JO1xyXG5cdFx0XHRcdHd4LnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+aPkOekuicsXHJcblx0XHRcdFx0XHRjb250ZW50OiAn56Gu6K6k6KaB5Yig6Zmk5ZCXPycsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJyk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kZWxldGVQTUNPSUNvbmZpcm0oZnVuY1ByYSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly/noa7orqTov5vooYzkuozmrKHliKDpmaTkuqTku5jku7vliqFcclxuXHRcdFx0YXN5bmMgZGVsZXRlUE1DT0lDb25maXJtKGZ1bmNQcmEpIHtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIHRlbXBSZXMgPSBhd2FpdCBwbVNlclRvb2xzLmV4ZVBNQ09JKFwiUE1DT0lEZWxldGVcIiwgZnVuY1ByYSk7XHJcblxyXG5cdFx0XHRcdGlmICh0ZW1wUmVzLmVyck1zZyA9PSBcIk9LXCIpIHtcclxuXHRcdFx0XHRcdC8v6ZSZ6K+v5aSE55CGXHJcblx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+WIoOmZpOS6pOS7mOS7u+WKoeaIkOWKn++8gScsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDBcclxuXHRcdFx0XHRcdH0pOyAvL+iwg+eUqOmAmueUqOaWueazlS0tLS3liKDpmaTliJfooajmlbDmja7jgJDmlbDnu4TjgJHvvIh0aGlzLmRhdGEuUE1DT0lMaXN077yJ5LitX2lk5YC85Li64oCcZnVuY1ByYS5QTUNPSS5faWRcIueahOaVsOaNrlxyXG5cclxuXHRcdFx0XHRcdHZhciBUZW1wUE1DT0lMaXN0ID0gcG1KU1Rvb2xzLkRlbGV0ZUZyb21MaXN0KGZ1bmNQcmEuUE1DT0kuX2lkLCB0aGlzXHJcblx0XHRcdFx0XHQuUE1DT0lMaXN0KTsgLy/miafooYzorqHnrpfpqbHliqjlh73mlbDvvIjmnInkupvlj5jph4/mmK/orqHnrpfojrflvpfnmoTvvIlcclxuXHJcblx0XHRcdFx0XHR0aGlzLmNhbFBNQ09JTGlzdCgpOyAvL+WwhuWIoOmZpOWQjueahOWIl+ihqOaVsOe7hFRlbXBQTUNPSUxpc3TvvIzph43mlrDotYvlgLxcclxuXHJcblx0XHRcdFx0XHQvLyB0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRcdFx0Ly8gICBQTUNPSUxpc3Q6IFRlbXBQTUNPSUxpc3RcclxuXHRcdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdFx0dGhhdC5QTUNPSUxpc3QgPSBUZW1wUE1DT0lMaXN0O1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvL+mUmeivr+WkhOeQhlxyXG5cdFx0XHRcdFx0dGhhdC5TaG93RXJyb3JUaXBzKCfliKDpmaTkuqTku5jku7vliqHplJnor686JyArIHRlbXBSZXMuZXJyTXNnICsgJ++8gScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8vXHJcblx0XHRcdHBtRGlhbG9nQ2xvc2U6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0Ly8gdGhpcy5zZXREYXRhKHtcclxuXHRcdFx0XHQvLyAgIHBtRGlhbG9nOiBmYWxzZVxyXG5cdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdHRoaXMucG1EaWFsb2cgPSBmYWxzZTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8v5Yqg5Yiw5oiR55qE5Lu75YqhXHJcblx0XHRcdGFzeW5jIGFkZFBNQ09JKGV2ZW50KSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzOyAvL+i/memHjOWHhuWkh+WGmeS4gOS4quagh+WHhueahOa3u+WKoOWHveaVsFxyXG5cclxuXHRcdFx0XHR2YXIgZnVuY1ByYSA9IHt9O1xyXG5cdFx0XHRcdGZ1bmNQcmEuWkNUUE1DT0lfaWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG5cdFx0XHRcdHZhciB0ZW1wUmVzID0gYXdhaXQgcG1TZXJUb29scy5leGVQTUNPSShcIkFkZE9uZU15UE1DT0lieVBNVXNlclwiLCBmdW5jUHJhKTtcclxuXHJcblx0XHRcdFx0aWYgKHRlbXBSZXMuZXJyTXNnID09IFwiT0tcIikge1xyXG5cdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfliqDliLDmiJHnmoTku7vliqHmiJDlip/vvIzor7fliLDmiJHnmoTku7vliqHkuK3mn6XnnIsnLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXHJcblx0XHRcdFx0XHR9KTsgLy/liqDlhaXliLDmiJHnmoTku7vliqHkuK3lkI7vvIzpnIDopoHlsIbor6XmlbDmja7ku47lvZPliY3liJfooajkuK3np7vpmaQgXHJcblx0XHRcdFx0XHQvL+iwg+eUqOmAmueUqOaWueazlS0tLS3liKDpmaTliJfooajmlbDmja7jgJDmlbDnu4TjgJHvvIh0aGlzLmRhdGEuUE1DT0lMaXN077yJ5LitX2lk5YC85Li64oCcZnVuY1ByYS5QTUNPSS5faWRcIueahOaVsOaNriBcclxuXHJcblx0XHRcdFx0XHR2YXIgVGVtcFBNQ09JTGlzdCA9IHBtSlNUb29scy5EZWxldGVGcm9tTGlzdChmdW5jUHJhLlpDVFBNQ09JX2lkLCB0aGlzXHJcblx0XHRcdFx0XHQuUE1DT0lMaXN0KTsgLy/miafooYzorqHnrpfpqbHliqjlh73mlbDvvIjmnInkupvlj5jph4/mmK/orqHnrpfojrflvpfnmoTvvIkgXHJcblxyXG5cdFx0XHRcdFx0dGhpcy5jYWxQTUNPSUxpc3QoKTsgLy/lsIbliKDpmaTlkI7nmoTliJfooajmlbDnu4RUZW1wUE1DT0lMaXN077yM6YeN5paw6LWL5YC8IFxyXG5cclxuXHRcdFx0XHRcdC8vIHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0XHQvLyAgIFBNQ09JTGlzdDogVGVtcFBNQ09JTGlzdFxyXG5cdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHR0aGF0LlBNQ09JTGlzdCA9IFRlbXBQTUNPSUxpc3Q7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8v6ZSZ6K+v5aSE55CGXHJcblx0XHRcdFx0XHR0aGF0LlNob3dFcnJvclRpcHMoXCLliJvlu7rkuqTku5jku7vliqHplJnor686XCIgKyB0ZW1wUmVzLmVyck1zZyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly/lj5HluINcclxuXHRcdFx0YXN5bmMgcHVibGlzaFBNQ09JKGV2ZW50KSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCLlj5HluIPkuovku7bnm5HlkKxcIiwgZXZlbnQpO1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgZnVuY1ByYSA9IHt9O1xyXG5cdFx0XHRcdGZ1bmNQcmEuUE1DT0kgPSB7fTtcclxuXHRcdFx0XHR2YXIgUE1DT0lEYXRhID0gcG1KU1Rvb2xzLmdldE9uZUNvbnRyb2xGcm9tTGlzdChldmVudC5jdXJyZW50VGFyZ2V0LmlkLCB0aGlzXHJcblx0XHRcdFx0LlBNQ09JTGlzdCk7IC8v5qC55o2u5pys5p2h5pWw5o2u55qEX2lk77yM5om+5Yiw5pys5p2h5pWw5o2uQ09J5pWw5o2uXHJcblx0XHRcdFx0Ly/liKTmlq3lvZPliY3ml6XmnJ/mmK/lkKbotoXov4fotoXov4forqHliJLkuqTku5jml6XmnJ/vvIzoi6XotoXov4fliJnkuI3lhYHorrjlj5HluIPvvIzoi6Xlt7LmjojmnYPkuZ/kuI3lj6/lj5HluINcclxuXHJcblx0XHRcdFx0dmFyIFRlbXBETiA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdFx0dmFyIFRlbXBOb3dNb250aCA9IFRlbXBETi5nZXRNb250aCgpICsgMSA+IDkgPyBUZW1wRE4uZ2V0TW9udGgoKSArIDEgOiBcIjBcIiArIChUZW1wRE4uZ2V0TW9udGgoKSArIDEpO1xyXG5cdFx0XHRcdHZhciBUZW1wTm93RGF5ID0gVGVtcEROLmdldERhdGUoKSA+IDkgPyBUZW1wRE4uZ2V0RGF0ZSgpIDogXCIwXCIgKyBUZW1wRE4uZ2V0RGF0ZSgpO1xyXG5cdFx0XHRcdHZhciBUZW1wU0QgPSBUZW1wRE4uZ2V0RnVsbFllYXIoKSArIFwiL1wiICsgVGVtcE5vd01vbnRoICsgXCIvXCIgKyBUZW1wTm93RGF5O1xyXG5cclxuXHRcdFx0XHRpZiAoVGVtcFNEID4gUE1DT0lEYXRhLlpDVFBsYW5EZWxpRGF0ZVNob3J0IHx8IFBNQ09JRGF0YS5QTU9yZGVyU3RhdGUgIT0gXCJOT1JFTEVBU0VcIiAmJiBQTUNPSURhdGFcclxuXHRcdFx0XHRcdC5QTU9yZGVyU3RhdGUgIT0gXCJQVUJMSVNIXCIpIHtcclxuXHRcdFx0XHRcdHRoYXQuU2hvd0Vycm9yVGlwcyhcIuS7u+WKoeWPkeW4g+Wksei0pTrlvZPliY3ku7vliqHkuI3mlK/mjIHlj5HluIPvvIzlt7LotoXov4forqHliJLkuqTku5jml6XmnJ/miJblt7Lov5vlhaXmjojmnYPmiafooYznirbmgIHvvIFcIik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHd4LnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5rip6aao5o+Q56S6JyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJ+WItueoi+W+ruS/oeWwj+eoi+W6j+W5s+WPsOS7heaYr+aPkOS+m+e7meeUn+S6p+i9pumXtOWSjOW3peS6uuS9v+eUqOeahOS7u+WKoeeuoeeQhuW3peWFt++8jOW5tuS4jeeUqOS6juaLm+iBmOetieihjOS4uuOAgueUqOaIt+W6lOWvueW3peWPi+eZu+iusOaIlui0puWPt+e7keWumuaXtuaJgOWhq+WGmeeahOi1hOaWmeeahOecn+WunuaAp+OAgeWQiOazleaAp+OAgeWHhuehruaAp+WSjOacieaViOaAp+aJv+aLhei0o+S7u+OAgicsXHJcblx0XHRcdFx0XHRcdGNvbmZpcm1UZXh0OiAn5Y+R5biDJyxcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogYXN5bmMgZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmdW5jUHJhLlBNQ09JID0gUE1DT0lEYXRhOyAvL+WwhuacrOadoeaVsOaNrkNPSeS/oeaBr++8jOi1i+WAvOWIsGZ1blByYeS4rVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGZ1bmNQcmEuUE1DT0kuX2lkID0gZXZlbnQuY3VycmVudFRhcmdldC5pZDtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuRnVuQ2hvb3NlTG9jYXRpb24oZnVuY1ByYSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvL+WPkeW4g+S9jee9rumAieaLqeW5tuabtOaWsFxyXG5cdFx0XHRhc3luYyBGdW5DaG9vc2VMb2NhdGlvbihmdW5jUHJhKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHd4LmdldFNldHRpbmcoe1xyXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0Ly/mmK/lkKblvIDlkK/mjojmnYNcclxuXHRcdFx0XHRcdFx0aWYgKCFyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJMb2NhdGlvbiddKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5mZXRjaEFnYWluTG9jYXRpb24oZnVuY1ByYSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5GdW5XWENob29zZUxvY2F0aW9uKGZ1bmNQcmEpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly/lvJXlr7zph43mlrDojrflj5bmjojmnYNcclxuXHRcdFx0ZmV0Y2hBZ2FpbkxvY2F0aW9uKGZ1bmNQcmEpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0d3guZ2V0U2V0dGluZyh7XHJcblx0XHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHR2YXIgc3RhdHUgPSByZXMuYXV0aFNldHRpbmc7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIXN0YXR1WydzY29wZS51c2VyTG9jYXRpb24nXSkge1xyXG5cdFx0XHRcdFx0XHRcdHd4LnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+aYr+WQpuaOiOadg+W9k+WJjeS9jee9ricsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAn6ZyA6KaB6I635Y+W5oKo55qE5Zyw55CG5L2N572u77yM6K+356Gu6K6k5o6I5p2D77yM5ZCm5YiZ5Y+R5biD5Yqf6IO95bCG5peg5rOV5L2/55SoJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IHRpcCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmICh0aXAuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHd4Lm9wZW5TZXR0aW5nKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoZGF0YS5hdXRoU2V0dGluZ1tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwic2NvcGUudXNlckxvY2F0aW9uXCJdID09PVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRydWUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvL+aOiOadg+aIkOWKn1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuRnVuV1hDaG9vc2VMb2NhdGlvbihmdW5jUHJhKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmjojmnYPlpLHotKUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ3N1Y2Nlc3MnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDEwMDBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZhaWw6ICgpID0+IHt9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHt9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6ICgpID0+IHt9LFxyXG5cdFx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHt9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvL+mAieaLqeS9jee9riBcclxuXHRcdFx0RnVuV1hDaG9vc2VMb2NhdGlvbihmdW5jUHJhKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHd4LmNob29zZUxvY2F0aW9uKHtcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKHBtSlNUb29scy5Jc051bGxPckVtcHR5KHJlcy5hZGRyZXNzKSkge1xyXG5cdFx0XHRcdFx0XHRcdHd4LnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+aPkOekuicsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAn5Lu75Yqh5Y+R5biD5aSx6LSlOuiOt+WPluS9jee9ruWksei0pe+8jOaYr+WQpumHjeaWsOWPkeW4g++8nycsXHJcblx0XHRcdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiB0cnVlLFxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuRnVuV1hDaG9vc2VMb2NhdGlvbihmdW5jUHJhKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRmdW5jUHJhLlBNQ09JLlpDVENPSUxhdGl0ID0gcmVzLmxhdGl0dWRlO1xyXG5cdFx0XHRcdFx0XHRcdGZ1bmNQcmEuUE1DT0kuWkNUQ09JTG9uZ2l0ID0gcmVzLmxvbmdpdHVkZTtcclxuXHRcdFx0XHRcdFx0XHRmdW5jUHJhLlBNQ09JLlpDVEFkZHJlc3MgPSByZXMuYWRkcmVzcztcclxuXHRcdFx0XHRcdFx0XHRmdW5jUHJhLlBNQ09JLlBNVVNlcklEID0gYXBwLmdsb2JhbERhdGEuX2lkO1xyXG5cdFx0XHRcdFx0XHRcdGZ1bmNQcmEuUE1DT0kuWkNUTmV3bGF0aXR1ZGUgPSByZXMubGF0aXR1ZGU7XHJcblx0XHRcdFx0XHRcdFx0ZnVuY1ByYS5QTUNPSS5aQ1ROZXdsb25naXR1ZGUgPSByZXMubG9uZ2l0dWRlO1xyXG5cdFx0XHRcdFx0XHRcdGFwcC5nbG9iYWxEYXRhLkN1cnJlbnRMYXRpdHVkZSA9IHJlcy5sYXRpdHVkZTtcclxuXHRcdFx0XHRcdFx0XHRhcHAuZ2xvYmFsRGF0YS5DdXJyZW50TG9uZ2l0dWRlID0gcmVzLmxvbmdpdHVkZTtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LkZ1blBNQ09JUHVibGlzaChmdW5jUHJhKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmVyck1zZyA9PSBcImNob29zZUxvY2F0aW9uOmZhaWwgY2FuY2VsXCIpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LlNob3dFcnJvclRpcHMoXCLku7vliqHlj5HluIPlpLHotKU65oKo5Y+W5raI5LqG6I635Y+W5L2N572u55qE5o6I5p2D77yBXCIpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuU2hvd0Vycm9yVGlwcyhcIuS7u+WKoeWPkeW4g+Wksei0pTrojrflj5bkvY3nva7lpLHotKXvvIFcIik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQvL+aOpeWPo+iwg+eUqOe7k+adn+eahOWbnuiwg+WHveaVsO+8iOiwg+eUqOaIkOWKn+OAgeWksei0pemDveS8muaJp+ihjO+8iVxyXG5cdFx0XHRcdFx0Y29tcGxldGU6IGZ1bmN0aW9uKHJlcykge31cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8v5Lu75Yqh5Y+R5biD5Ye95pWwXHJcblx0XHRcdGFzeW5jIEZ1blBNQ09JUHVibGlzaChmdW5jUHJhKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBUZW1wUmVzID0gYXdhaXQgcG1TZXJUb29scy5leGVQTUNPSShcIlBNQ09JUHVibGlzaFwiLCBmdW5jUHJhKTtcclxuXHJcblx0XHRcdFx0aWYgKFRlbXBSZXMuZXJyTXNnID09IFwiT0tcIikge1xyXG5cdFx0XHRcdFx0Ly/liLfmlrDnirbmgIHkuLrlt7Llj5HluINcclxuXHRcdFx0XHRcdGZ1bmNQcmEuUE1DT0kuUE1PcmRlclN0YXRlID0gXCJQVUJMSVNIXCI7IC8v5omn6KGM5Yqo5oCB5Y+Y6YeP6K6h566X5Ye95pWwXHJcblxyXG5cdFx0XHRcdFx0cG1KU1Rvb2xzLmNhbFBNQ09JKGZ1bmNQcmEuUE1DT0kpOyAvL+aJp+ihjOiuoeeul+mpseWKqOWHveaVsO+8iOacieS6m+WPmOmHj+aYr+iuoeeul+iOt+W+l+eahO+8iVxyXG5cclxuXHRcdFx0XHRcdHBtSlNUb29scy5yZXBsYWNlT25lQ29udHJvbEZyb21MaXN0KGZ1bmNQcmEuUE1DT0kuX2lkLCBmdW5jUHJhLlBNQ09JLCB0aGlzLlBNQ09JTGlzdCk7IC8v5Yi35paw6aG16Z2i5pi+56S6XHJcblxyXG5cdFx0XHRcdFx0Ly8gdGhpcy5zZXREYXRhKHtcclxuXHRcdFx0XHRcdC8vICAgUE1DT0lMaXN0OiB0aGlzLlBNQ09JTGlzdFxyXG5cdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHR0aGF0LlBNQ09JTGlzdCA9IHRoaXMuUE1DT0lMaXN0O1xyXG5cdFx0XHRcdFx0d3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDogJy4uL3Rhc2tNYXAvdGFza01hcD9kYXRhVHlwZT1QTUNPSVB1Ymxpc2gmbGF0aXR1ZGU9JyArIGZ1bmNQcmEuUE1DT0kuWkNUQ09JTGF0aXQgK1xyXG5cdFx0XHRcdFx0XHRcdCcmbG9uZ2l0dWRlPScgKyBmdW5jUHJhLlBNQ09JLlpDVENPSUxvbmdpdCArICcnLFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuRnVuUmVmcmVzaEJ5T3BlcmF0aW9uU3RhdHVzKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGF0LlNob3dFcnJvclRpcHMoXCLkuqTku5jku7vliqHlj5HluIPplJnor686XCIgKyBUZW1wUmVzLmVyck1zZyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly/mn6XnnIvmjojmnYPnlLPor7dcclxuXHRcdFx0YXN5bmMgb25BdXRob3JpemVBcHBseShldmVudCkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgVGVtcENPSURhdGEgPSB0aGF0LlBNQ09JTGlzdC5maW5kKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdHJldHVybiBlLl9pZCA9PSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHd4Lm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnLi4vQXBwbGljYXRpb25SZWNvcmRQYWdlL0FwcGxpY2F0aW9uUmVjb3JkUGFnZT9aQ1RUYXNrSUQ9JyArIGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQgK1xyXG5cdFx0XHRcdFx0XHQnJmRhdGFUeXBlPUF1dGhvcml6ZSZPcHRpb25DT0k9JyArIEpTT04uc3RyaW5naWZ5KFRlbXBDT0lEYXRhKSArICcnXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvL+afpeeci+WujOW3peeUs+ivt1xyXG5cdFx0XHRhc3luYyBvbkZpbmlzaGVkQXBwbHkoZXZlbnQpIHtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIFRlbXBDT0lEYXRhID0gdGhhdC5QTUNPSUxpc3QuZmluZChmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZS5faWQgPT0gZXZlbnQuY3VycmVudFRhcmdldC5pZDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJy4uL0FwcGxpY2F0aW9uUmVjb3JkUGFnZS9BcHBsaWNhdGlvblJlY29yZFBhZ2U/WkNUVGFza0lEPScgKyBldmVudC5jdXJyZW50VGFyZ2V0LmlkICtcclxuXHRcdFx0XHRcdFx0JyZkYXRhVHlwZT1GaW5pc2hlZCZPcHRpb25DT0k9JyArIEpTT04uc3RyaW5naWZ5KFRlbXBDT0lEYXRhKSArICcnXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvL+afpeivoue8lui+keS4reeKtuaAgeeahOS7u+WKoVxyXG5cdFx0XHRhc3luYyBPbkVkaXRTZWxlY3QoKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBUZW1wU3RhdGVJQ08gPSB7XHJcblx0XHRcdFx0XHRJQ09JbWFnZUVkaXQ6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fRWRpdF9DLnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VQdWJsaXNoOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX1BVQkxJU0gucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZVdhaXRBdXRob3JpemU6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fV2FpdEF1dGhvcml6ZS5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlRVhFQzogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19FWEVDLnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VVbmFjY2VwdGVkOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX1VOQUNDRVBURUQucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZUFjY2VwdDogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19BQ0NFUFQucG5nXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdC8vIHRoYXQuc2V0RGF0YSh7XHJcblx0XHRcdFx0Ly8gICBJQ09JbWFnZTogVGVtcFN0YXRlSUNPLFxyXG5cdFx0XHRcdC8vICAgUE1DT0lMaXN0U2tpcDogMCxcclxuXHRcdFx0XHQvLyAgIE9wdGlvblNlbGVjdFN0YXRlOiBbJ05PUkVMRUFTRSddLFxyXG5cdFx0XHRcdC8vICAgT3B0aW9uU2VsZWN0U3RhdGVOYW1lOiBcIue8lui+keS4rVwiXHJcblx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0dGhhdC5JQ09JbWFnZSA9IFRlbXBTdGF0ZUlDTztcclxuXHRcdFx0XHR0aGF0LlBNQ09JTGlzdFNraXAgPSAwO1xyXG5cdFx0XHRcdHRoYXQuT3B0aW9uU2VsZWN0U3RhdGUgPSBbJ05PUkVMRUFTRSddO1xyXG5cdFx0XHRcdHRoYXQuT3B0aW9uU2VsZWN0U3RhdGVOYW1lID0gXCLnvJbovpHkuK1cIjtcclxuXHRcdFx0XHR0aGF0LmdldFBNQ09JTGlzdEJ5VXNlck5ldygpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly/mn6Xor6Llj5HluIPnirbmgIHnmoTku7vliqFcclxuXHRcdFx0YXN5bmMgT25QdWJsaXNoU2VsZWN0KCkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgVGVtcFN0YXRlSUNPID0ge1xyXG5cdFx0XHRcdFx0SUNPSW1hZ2VFZGl0OiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX0VkaXQucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZVB1Ymxpc2g6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fUFVCTElTSF9DLnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VXYWl0QXV0aG9yaXplOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX1dhaXRBdXRob3JpemUucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZUVYRUM6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fRVhFQy5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlVW5hY2NlcHRlZDogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19VTkFDQ0VQVEVELnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VBY2NlcHQ6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fQUNDRVBULnBuZ1wiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHQvLyB0aGF0LnNldERhdGEoe1xyXG5cdFx0XHRcdC8vICAgSUNPSW1hZ2U6IFRlbXBTdGF0ZUlDTyxcclxuXHRcdFx0XHQvLyAgIFBNQ09JTGlzdFNraXA6IDAsXHJcblx0XHRcdFx0Ly8gICBPcHRpb25TZWxlY3RTdGF0ZTogWydQVUJMSVNIJ10sXHJcblx0XHRcdFx0Ly8gICBPcHRpb25TZWxlY3RTdGF0ZU5hbWU6IFwi5Y+R5biDXCJcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHR0aGF0LklDT0ltYWdlID0gVGVtcFN0YXRlSUNPO1xyXG5cdFx0XHRcdHRoYXQuUE1DT0lMaXN0U2tpcCA9IDA7XHJcblx0XHRcdFx0dGhhdC5PcHRpb25TZWxlY3RTdGF0ZSA9IFsnUFVCTElTSCddO1xyXG5cdFx0XHRcdHRoYXQuT3B0aW9uU2VsZWN0U3RhdGVOYW1lID0gXCLlj5HluINcIjtcclxuXHRcdFx0XHR0aGF0LmdldFBNQ09JTGlzdEJ5VXNlck5ldygpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly/mn6Xor6LnvJblvoXmjojmnYPnirbmgIHnmoTku7vliqFcclxuXHRcdFx0YXN5bmMgT25XYWl0QXV0aG9yaXplU2VsZWN0KCkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgVGVtcFN0YXRlSUNPID0ge1xyXG5cdFx0XHRcdFx0SUNPSW1hZ2VFZGl0OiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX0VkaXQucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZVB1Ymxpc2g6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fUFVCTElTSC5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlV2FpdEF1dGhvcml6ZTogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19XYWl0QXV0aG9yaXplX0MucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZUVYRUM6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fRVhFQy5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlVW5hY2NlcHRlZDogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19VTkFDQ0VQVEVELnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VBY2NlcHQ6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fQUNDRVBULnBuZ1wiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHQvLyB0aGF0LnNldERhdGEoe1xyXG5cdFx0XHRcdC8vICAgSUNPSW1hZ2U6IFRlbXBTdGF0ZUlDTyxcclxuXHRcdFx0XHQvLyAgIFBNQ09JTGlzdFNraXA6IDAsXHJcblx0XHRcdFx0Ly8gICBPcHRpb25TZWxlY3RTdGF0ZTogWydXYWl0QXV0aG9yaXplJ10sXHJcblx0XHRcdFx0Ly8gICBPcHRpb25TZWxlY3RTdGF0ZU5hbWU6IFwi5b6F5o6I5p2DXCJcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHR0aGF0LklDT0ltYWdlID0gVGVtcFN0YXRlSUNPO1xyXG5cdFx0XHRcdHRoYXQuUE1DT0lMaXN0U2tpcCA9IDA7XHJcblx0XHRcdFx0dGhhdC5PcHRpb25TZWxlY3RTdGF0ZSA9IFsnV2FpdEF1dGhvcml6ZSddO1xyXG5cdFx0XHRcdHRoYXQuT3B0aW9uU2VsZWN0U3RhdGVOYW1lID0gXCLlvoXmjojmnYNcIjtcclxuXHRcdFx0XHR0aGF0LmdldFBNQ09JTGlzdEJ5VXNlck5ldygpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly/mn6Xor6LmiafooYzkuK3nirbmgIHnmoTku7vliqFcclxuXHRcdFx0YXN5bmMgT25FeGVjU2VsZWN0KCkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgVGVtcFN0YXRlSUNPID0ge1xyXG5cdFx0XHRcdFx0SUNPSW1hZ2VFZGl0OiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX0VkaXQucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZVB1Ymxpc2g6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fUFVCTElTSC5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlV2FpdEF1dGhvcml6ZTogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19XYWl0QXV0aG9yaXplLnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VFWEVDOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX0VYRUNfQy5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlVW5hY2NlcHRlZDogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19VTkFDQ0VQVEVELnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VBY2NlcHQ6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fQUNDRVBULnBuZ1wiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHR0aGF0LklDT0ltYWdlID0gVGVtcFN0YXRlSUNPO1xyXG5cdFx0XHRcdHRoYXQuUE1DT0lMaXN0U2tpcCA9IDA7XHJcblx0XHRcdFx0dGhhdC5PcHRpb25TZWxlY3RTdGF0ZSA9IFsnQUxMT1dFRCddO1xyXG5cdFx0XHRcdHRoYXQuT3B0aW9uU2VsZWN0U3RhdGVOYW1lID0gXCLmiafooYzkuK1cIjtcclxuXHRcdFx0XHR0aGF0LmdldFBNQ09JTGlzdEJ5VXNlck5ldygpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly/mn6Xor6LlvoXpqozmlLbnirbmgIHnmoTku7vliqFcclxuXHRcdFx0YXN5bmMgT25VbmFjY2VwdGVkU2VsZWN0KCkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgVGVtcFN0YXRlSUNPID0ge1xyXG5cdFx0XHRcdFx0SUNPSW1hZ2VFZGl0OiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX0VkaXQucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZVB1Ymxpc2g6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fUFVCTElTSC5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlV2FpdEF1dGhvcml6ZTogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19XYWl0QXV0aG9yaXplLnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VFWEVDOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX0VYRUMucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZVVuYWNjZXB0ZWQ6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fVU5BQ0NFUFRFRF9DLnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VBY2NlcHQ6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fQUNDRVBULnBuZ1wiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHQvLyB0aGF0LnNldERhdGEoe1xyXG5cdFx0XHRcdC8vICAgSUNPSW1hZ2U6IFRlbXBTdGF0ZUlDTyxcclxuXHRcdFx0XHQvLyAgIFBNQ09JTGlzdFNraXA6IDAsXHJcblx0XHRcdFx0Ly8gICBPcHRpb25TZWxlY3RTdGF0ZTogWydVTkFDQ0VQVEVEJ10sXHJcblx0XHRcdFx0Ly8gICBPcHRpb25TZWxlY3RTdGF0ZU5hbWU6IFwi5b6F6aqM5pS2XCJcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHR0aGF0LklDT0ltYWdlID0gVGVtcFN0YXRlSUNPO1xyXG5cdFx0XHRcdHRoYXQuUE1DT0lMaXN0U2tpcCA9IDA7XHJcblx0XHRcdFx0dGhhdC5PcHRpb25TZWxlY3RTdGF0ZSA9IFsnVU5BQ0NFUFRFRCddO1xyXG5cdFx0XHRcdHRoYXQuT3B0aW9uU2VsZWN0U3RhdGVOYW1lID0gXCLlvoXpqozmlLZcIjtcclxuXHRcdFx0XHR0aGF0LmdldFBNQ09JTGlzdEJ5VXNlck5ldygpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly/mn6Xor6Llt7LpqozmlLbnirbmgIHnmoTku7vliqFcclxuXHRcdFx0YXN5bmMgT25BY2NlcHRTZWxlY3QoKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBUZW1wU3RhdGVJQ08gPSB7XHJcblx0XHRcdFx0XHRJQ09JbWFnZUVkaXQ6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fRWRpdC5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlUHVibGlzaDogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19QVUJMSVNILnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VXYWl0QXV0aG9yaXplOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX1dhaXRBdXRob3JpemUucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZUVYRUM6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fRVhFQy5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlVW5hY2NlcHRlZDogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19VTkFDQ0VQVEVELnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VBY2NlcHQ6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fQUNDRVBUX0MucG5nXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdC8vIHRoYXQuc2V0RGF0YSh7XHJcblx0XHRcdFx0Ly8gICBJQ09JbWFnZTogVGVtcFN0YXRlSUNPLFxyXG5cdFx0XHRcdC8vICAgUE1DT0lMaXN0U2tpcDogMCxcclxuXHRcdFx0XHQvLyAgIE9wdGlvblNlbGVjdFN0YXRlOiBbJ0FDQ0VQVCddLFxyXG5cdFx0XHRcdC8vICAgT3B0aW9uU2VsZWN0U3RhdGVOYW1lOiBcIuW3sumqjOaUtlwiXHJcblx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0dGhhdC5JQ09JbWFnZSA9IFRlbXBTdGF0ZUlDTztcclxuXHRcdFx0XHR0aGF0LlBNQ09JTGlzdFNraXAgPSAwO1xyXG5cdFx0XHRcdHRoYXQuT3B0aW9uU2VsZWN0U3RhdGUgPSBbJ0FDQ0VQVCddO1xyXG5cdFx0XHRcdHRoYXQuT3B0aW9uU2VsZWN0U3RhdGVOYW1lID0gXCLlt7LpqozmlLZcIjtcclxuXHRcdFx0XHR0aGF0LmdldFBNQ09JTGlzdEJ5VXNlck5ldygpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly/moLnmja7lvZPliY3pgInpobnljaHliLfmlrDmlbDmja5cclxuXHRcdFx0RnVuUmVmcmVzaEJ5T3BlcmF0aW9uU3RhdHVzKCkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgVGVtcE9wdGlvblNlbGVjdFN0YXRlID0gdGhhdC5PcHRpb25TZWxlY3RTdGF0ZU5hbWU7XHJcblxyXG5cdFx0XHRcdHN3aXRjaCAoVGVtcE9wdGlvblNlbGVjdFN0YXRlKSB7XHJcblx0XHRcdFx0XHRjYXNlIFwi57yW6L6R5LitXCI6XHJcblx0XHRcdFx0XHRcdHRoYXQuT25FZGl0U2VsZWN0KCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGNhc2UgXCLlj5HluINcIjpcclxuXHRcdFx0XHRcdFx0dGhhdC5PblB1Ymxpc2hTZWxlY3QoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSBcIuW+heaOiOadg1wiOlxyXG5cdFx0XHRcdFx0XHR0aGF0Lk9uV2FpdEF1dGhvcml6ZVNlbGVjdCgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlIFwi5omn6KGM5LitXCI6XHJcblx0XHRcdFx0XHRcdHRoYXQuT25FeGVjU2VsZWN0KCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGNhc2UgXCLlvoXpqozmlLZcIjpcclxuXHRcdFx0XHRcdFx0dGhhdC5PblVuYWNjZXB0ZWRTZWxlY3QoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSBcIuW3sumqjOaUtlwiOlxyXG5cdFx0XHRcdFx0XHR0aGF0Lk9uQWNjZXB0U2VsZWN0KCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdHRoYXQuT25FeGVjU2VsZWN0KCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8v5pi+56S66ZSZ6K+v5o+Q56S6XHJcblx0XHRcdFNob3dFcnJvclRpcHMoVGVtcEVycm9yTXNnKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzOyAvL3NldFRpbWVvdXTph4zkvJrnlKjliLDvvIxcclxuXHJcblx0XHRcdFx0dGhhdC50b3BUaXBzU3RyID0gVGVtcEVycm9yTXNnO1xyXG5cdFx0XHRcdC8vIHRoYXQuc2V0RGF0YSh7XHJcblx0XHRcdFx0Ly8gICAvL01vdmVUb1Vw6Kem5Y+RXHJcblx0XHRcdFx0Ly8gICB0b3BUaXBzOiB0cnVlLFxyXG5cdFx0XHRcdC8vICAgdG9wVGlwc1N0cjogdGhhdC50b3BUaXBzU3RyXHJcblx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0dGhhdC50b3BUaXBzID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGF0LnRvcFRpcHNTdHIgPSB0aGF0LnRvcFRpcHNTdHI7XHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdC8v5pe26Ze06ZmQ5Yi2XHJcblx0XHRcdFx0XHQvLyB0aGF0LnNldERhdGEoe1xyXG5cdFx0XHRcdFx0Ly8gICB0b3BUaXBzOiBmYWxzZSxcclxuXHRcdFx0XHRcdC8vICAgdG9wVGlwc1N0cjogXCJcIlxyXG5cdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHR0aGF0LnRvcFRpcHMgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoYXQudG9wVGlwc1N0ciA9IFwiXCI7XHJcblx0XHRcdFx0fSwgMjAwMCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvL+ivt+axguW+ruS/oeeZu+mZhuOAkOWHuueOsOW+ruS/oeeZu+W9leW8ueahhu+8jOeCueWHu+W+ruS/oeeZu+W9leOAkU5FV1xyXG5cdFx0XHRnZXRVc2VyUHJvZmlsZTogYXN5bmMgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdHd4Lm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnLi4vcmVnaXN0UGFnZS9yZWdpc3RQYWdlJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdC8vIHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0XHRcdC8vICAgcG1EaWFsb2dTaG91UXVhbjogZmFsc2VcclxuXHRcdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHRcdHRoYXQucG1EaWFsb2dTaG91UXVhbiA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+WPlua2iOe7keWumlxyXG5cdFx0XHRnZXRDYW5jZWw6IGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHQvLyB0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRcdC8vICAgcG1EaWFsb2dTaG91UXVhbjogZmFsc2VcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHR0aGF0LnBtRGlhbG9nU2hvdVF1YW4gPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGU+XHJcblx0Ly9AaW1wb3J0IFwiLi90YXNrTGlzdC5jc3NcIjtcclxuXHQud2V1aS1sb2FkaW5nX193cnAge1xyXG5cdFx0cGFkZGluZzogMTZweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlclxyXG5cdH1cclxuXHJcblx0LndldWktbG9hZGluZ19fd3JwOmxhc3QtY2hpbGQge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMSlcclxuXHR9XHJcblxyXG5cdC5sb2FkbW9yZSB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogNTBweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LndldWktdG9wdGlwcyB7XHJcblx0XHRkaXNwbGF5OiBibG9ja1xyXG5cdH1cclxuXHJcblx0LndldWktYWN0aW9uc2hlZXRfX2NlbGxub25lIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHBhZGRpbmc6IDE2cHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDE3cHg7XHJcblx0XHRsaW5lLWhlaWdodDogMS40MTE3NjQ3MTtcclxuXHRcdGNvbG9yOiB2YXIoLS13ZXVpLUZHLTMpO1xyXG5cdFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0fVxyXG5cclxuXHQuQ29sdW1uQm94IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQuUm93Qm94IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogUm93O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LnRhc2tfcHJvZ3Jlc3NHcm91cCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGhlaWdodDogNXB4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuXHR9XHJcblxyXG5cdC50YXNrX3Byb2dyZXNzIHtcclxuXHRcdGhlaWdodDogMTVweDtcclxuXHRcdHdpZHRoOiAyMCU7XHJcblx0fVxyXG5cclxuXHQudGFza19wcm9ncmVzc1N1YiB7XHJcblx0XHRoZWlnaHQ6IDVweDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItY29sb3I6IGdyYXk7XHJcblx0XHRib3JkZXItd2lkdGg6IHRoaW47XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0fVxyXG5cclxuXHQudGFza19wcm9ncmVzc1N1YlR4dCB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdGNvbG9yOiB2YXIoLS13ZXVpLUZHLTEpO1xyXG5cdFx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnN0YXRlc2VsZWN0X3BhbmVsIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0d2lkdGg6IDkwJTtcclxuXHRcdG1hcmdpbjogMHB4IGF1dG87XHJcblx0fVxyXG5cclxuXHQuc3RhdGVzZWxlY3RfaXRlbSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnRhc2tkZXRhaWxfdGl0bGUge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHQvKiBhbGlnbi1pdGVtczpmbGV4LWVuZCAqL1xyXG5cdH1cclxuXHJcblx0LnRhc2tOYW1lIHtcclxuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRmb250LXNpemU6IDE3cHg7XHJcblx0XHRjb2xvcjogdmFyKC0td2V1aS1GRy0wKTtcclxuXHRcdHdpZHRoOiBhdXRvO1xyXG5cdFx0d29yZC13cmFwOiBub3JtYWw7XHJcblx0XHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0XHR3b3JkLWJyZWFrOiBicmVhay1hbGxcclxuXHR9XHJcblxyXG5cdC50YXNrTnVtIHtcclxuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRmb250LXNpemU6IDE3cHg7XHJcblx0XHRjb2xvcjogIzk5NjYzMztcclxuXHRcdC8qIHdpZHRoOiBhdXRvOyAqL1xyXG5cdFx0bWluLXdpZHRoOiAxNDBycHg7XHJcblx0XHR3b3JkLXdyYXA6IG5vcm1hbDtcclxuXHRcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHRcdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHJweDtcclxuXHR9XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi90YXNrTGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdGFza0xpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjMyMzg4MTg2ODQ1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkU6LzAwX+W3peS9nC8wN191bmlhcHAv5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==