(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!***********************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/main.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 31));\n\n\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7OztBQUduQixzRTtBQUNBQSxhQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7QUFDQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7QUFDQSxJQUFNQyxHQUFHLEdBQUcsSUFBSUwsWUFBSjtBQUNMRyxZQURLLEVBQVo7O0FBR0FFLEdBQUcsQ0FBQ0MsTUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcblxyXG5cclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcclxuICAgIC4uLkFwcFxyXG59KVxyXG5hcHAuJG1vdW50KClcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages.json ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/taskPage/taskPage', function () {return Vue.extend(__webpack_require__(/*! pages/taskPage/taskPage.vue?mpType=page */ 2).default);});
__definePage('pages/propertyPage/propertyPage', function () {return Vue.extend(__webpack_require__(/*! pages/propertyPage/propertyPage.vue?mpType=page */ 20).default);});
__definePage('pages/taskList/taskList', function () {return Vue.extend(__webpack_require__(/*! pages/taskList/taskList.vue?mpType=page */ 26).default);});

/***/ }),
/* 2 */
/*!*******************************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskPage/taskPage.vue?mpType=page ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _taskPage_vue_vue_type_template_id_578d9554_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskPage.vue?vue&type=template&id=578d9554&mpType=page */ 3);\n/* harmony import */ var _taskPage_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskPage.js?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _taskPage_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _taskPage_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _taskPage_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _taskPage_vue_vue_type_template_id_578d9554_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _taskPage_vue_vue_type_template_id_578d9554_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _taskPage_vue_vue_type_template_id_578d9554_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/taskPage/taskPage.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDc0U7QUFDTDs7O0FBR2pFO0FBQ3VLO0FBQ3ZLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdGFza1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3OGQ5NTU0Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90YXNrUGFnZS5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi90YXNrUGFnZS5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy90YXNrUGFnZS90YXNrUGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*************************************************************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskPage/taskPage.vue?vue&type=template&id=578d9554&mpType=page ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_taskPage_vue_vue_type_template_id_578d9554_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./taskPage.vue?vue&type=template&id=578d9554&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_taskPage_vue_vue_type_template_id_578d9554_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_taskPage_vue_vue_type_template_id_578d9554_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_taskPage_vue_vue_type_template_id_578d9554_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_taskPage_vue_vue_type_template_id_578d9554_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskPage/taskPage.vue?vue&type=template&id=578d9554&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "page"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "page__hd"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "page__title"),
            attrs: { _i: 2 }
          }),
          _c("view", {
            staticClass: _vm._$s(3, "sc", "page__desc"),
            attrs: { _i: 3 }
          })
        ]
      ),
      _c("view", [
        _c("view", {
          staticClass: _vm._$s(5, "sc", "weui-cells__title"),
          attrs: { _i: 5 }
        }),
        _c(
          "view",
          {
            staticClass: _vm._$s(6, "sc", "weui-cells"),
            attrs: { _i: 6 },
            on: { click: _vm.onOpenEditPMCOIList }
          },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s(
                  7,
                  "sc",
                  "weui-cell weui-cell_active weui-cell_access"
                ),
                attrs: { _i: 7 }
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(8, "sc", "weui-cell__hd"),
                    attrs: { _i: 8 }
                  },
                  [_c("image", { attrs: { _i: 9 } })]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(10, "sc", "weui-cell__bd"),
                    attrs: { _i: 10 }
                  },
                  [_c("text")]
                ),
                _c("view", {
                  staticClass: _vm._$s(12, "sc", "weui-cell__ft"),
                  attrs: { _i: 12 }
                })
              ]
            )
          ]
        ),
        _c(
          "view",
          { staticClass: _vm._$s(13, "sc", "weui-cells"), attrs: { _i: 13 } },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s(
                  14,
                  "sc",
                  "weui-cell weui-cell_active weui-cell_access"
                ),
                attrs: { _i: 14 }
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(15, "sc", "weui-cell__hd"),
                    attrs: { _i: 15 }
                  },
                  [_c("image", { attrs: { _i: 16 } })]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(17, "sc", "weui-cell__bd"),
                    attrs: { _i: 17 }
                  },
                  [_c("text")]
                ),
                _c("view", {
                  staticClass: _vm._$s(19, "sc", "weui-cell__ft"),
                  attrs: { _i: 19 }
                })
              ]
            )
          ]
        ),
        _c(
          "view",
          { staticClass: _vm._$s(20, "sc", "weui-cells"), attrs: { _i: 20 } },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s(
                  21,
                  "sc",
                  "weui-cell weui-cell_active weui-cell_access"
                ),
                attrs: { _i: 21 }
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(22, "sc", "weui-cell__hd"),
                    attrs: { _i: 22 }
                  },
                  [_c("image", { attrs: { _i: 23 } })]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(24, "sc", "weui-cell__bd"),
                    attrs: { _i: 24 }
                  },
                  [_c("text")]
                ),
                _c("view", {
                  staticClass: _vm._$s(26, "sc", "weui-cell__ft"),
                  attrs: { _i: 26 }
                })
              ]
            )
          ]
        ),
        _c(
          "view",
          { staticClass: _vm._$s(27, "sc", "weui-cells"), attrs: { _i: 27 } },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s(
                  28,
                  "sc",
                  "weui-cell weui-cell_active weui-cell_access"
                ),
                attrs: { _i: 28 }
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(29, "sc", "weui-cell__hd"),
                    attrs: { _i: 29 }
                  },
                  [_c("image", { attrs: { _i: 30 } })]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(31, "sc", "weui-cell__bd"),
                    attrs: { _i: 31 }
                  },
                  [_c("text")]
                ),
                _c("view", {
                  staticClass: _vm._$s(33, "sc", "weui-cell__ft"),
                  attrs: { _i: 33 }
                })
              ]
            )
          ]
        )
      ]),
      _c(
        "view",
        { staticClass: _vm._$s(34, "sc", "weui-tab"), attrs: { _i: 34 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(35, "sc", "weui-tabbar"),
              attrs: { _i: 35 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(
                    36,
                    "sc",
                    "weui-tabbar__item weui-bar__item_on"
                  ),
                  attrs: { _i: 36 }
                },
                [
                  _c("view", [
                    _c("navigator", { attrs: { _i: 38 } }, [
                      _c("image", {
                        staticClass: _vm._$s(39, "sc", "weui-tabbar__icon"),
                        attrs: { _i: 39 }
                      })
                    ])
                  ]),
                  _c("view", {
                    staticClass: _vm._$s(40, "sc", "weui-tabbar__label"),
                    attrs: { _i: 40 }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(41, "sc", "weui-tabbar__item"),
                  attrs: { _i: 41 }
                },
                [
                  _c("view", [
                    _c("navigator", { attrs: { _i: 43 } }, [
                      _c("image", {
                        staticClass: _vm._$s(44, "sc", "weui-tabbar__icon"),
                        attrs: { _i: 44 }
                      })
                    ])
                  ]),
                  _c("view", {
                    staticClass: _vm._$s(45, "sc", "weui-tabbar__label"),
                    attrs: { _i: 45 }
                  })
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(46, "sc", "weui-tabbar__item"),
                  attrs: { _i: 46 }
                },
                [
                  _c("navigator", { attrs: { _i: 47 } }, [
                    _c("image", {
                      staticClass: _vm._$s(48, "sc", "weui-tabbar__icon"),
                      attrs: { _i: 48 }
                    }),
                    _c("view", {
                      staticClass: _vm._$s(49, "sc", "weui-tabbar__label"),
                      attrs: { _i: 49 }
                    })
                  ])
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(50, "sc", "weui-tabbar__item"),
                  attrs: { _i: 50 }
                },
                [
                  _c("view", [
                    _c("navigator", { attrs: { _i: 52 } }, [
                      _c("image", {
                        staticClass: _vm._$s(53, "sc", "weui-tabbar__icon"),
                        attrs: { _i: 53 }
                      }),
                      _vm._$s(54, "i", _vm.WaitSumCoun > 0)
                        ? _c("view", [
                            _c(
                              "text",
                              {
                                staticClass: _vm._$s(55, "sc", "weui-badge"),
                                attrs: { _i: 55 }
                              },
                              [
                                _vm._v(
                                  _vm._$s(55, "t0-0", _vm._s(_vm.WaitSumCoun))
                                )
                              ]
                            )
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _c("view", {
                    staticClass: _vm._$s(56, "sc", "weui-tabbar__label"),
                    attrs: { _i: 56 }
                  })
                ]
              )
            ]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!******************************************************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskPage/taskPage.js?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_taskPage_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./taskPage.js?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_taskPage_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_taskPage_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_taskPage_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_taskPage_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_taskPage_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtiLENBQWdCLDhjQUFHLEVBQUMiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4vdGFza1BhZ2UuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi90YXNrUGFnZS5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskPage/taskPage.js?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}\nvar pmJSTools = __webpack_require__(/*! ../../utils/pmJSTools.js */ 10);\nvar pmSerTools = __webpack_require__(/*! ../../utils/pmSerTools.js */ 15);\nvar app = getApp();var _default =\n\n{\n  data: function data() {\n    return {\n      WaitSumCoun: \"\",\n      topTips: false,\n      topTipsStr: \"\" };\n\n  },\n  components: {},\n\n\n  props: {},\n\n\n  onLoad: function onLoad(options) {\n  },\n\n  methods: {\n\n    onOpenEditPMCOIList: function onOpenEditPMCOIList() {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                uni.navigateTo({\n                  url: '../taskList/taskList',\n                  success: function success(res) {},\n                  fail: function fail() {},\n                  complete: function complete() {} });case 1:case \"end\":return _context.stop();}}}, _callee);}))();\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGFza1BhZ2UvdGFza1BhZ2UuanMiXSwibmFtZXMiOlsicG1KU1Rvb2xzIiwicmVxdWlyZSIsInBtU2VyVG9vbHMiLCJhcHAiLCJnZXRBcHAiLCJkYXRhIiwiV2FpdFN1bUNvdW4iLCJ0b3BUaXBzIiwidG9wVGlwc1N0ciIsImNvbXBvbmVudHMiLCJwcm9wcyIsIm9uTG9hZCIsIm9wdGlvbnMiLCJtZXRob2RzIiwib25PcGVuRWRpdFBNQ09JTGlzdCIsInVuaSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzdWNjZXNzIiwicmVzIiwiZmFpbCIsImNvbXBsZXRlIl0sIm1hcHBpbmdzIjoiO0FBQ0MsSUFBTUEsU0FBUyxHQUFHQyxtQkFBTyxDQUFDLGtDQUFELENBQXpCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHRCxtQkFBTyxDQUFDLG1DQUFELENBQTFCO0FBQ0EsSUFBSUUsR0FBRyxHQUFHQyxNQUFNLEVBQWhCLEM7O0FBRWU7QUFDZEMsTUFEYyxrQkFDUDtBQUNOLFdBQU87QUFDTkMsaUJBQVcsRUFBRSxFQURQO0FBRU5DLGFBQU8sRUFBRSxLQUZIO0FBR05DLGdCQUFVLEVBQUUsRUFITixFQUFQOztBQUtBLEdBUGE7QUFRZEMsWUFBVSxFQUFFLEVBUkU7OztBQVdkQyxPQUFLLEVBQUUsRUFYTzs7O0FBY2RDLFFBQU0sRUFBRSxnQkFBU0MsT0FBVCxFQUFrQjtBQUN6QixHQWZhOztBQWlCZEMsU0FBTyxFQUFFOztBQUVGQyx1QkFGRSxpQ0FFb0I7QUFDM0JDLG1CQUFHLENBQUNDLFVBQUosQ0FBZTtBQUNkQyxxQkFBRyxFQUFFLHNCQURTO0FBRWRDLHlCQUFPLEVBQUUsaUJBQUFDLEdBQUcsRUFBSSxDQUFFLENBRko7QUFHZEMsc0JBQUksRUFBRSxnQkFBTSxDQUFFLENBSEE7QUFJZEMsMEJBQVEsRUFBRSxvQkFBTSxDQUFFLENBSkosRUFBZixFQUQyQjs7QUFPM0IsS0FUTyxFQWpCSyxFIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHRjb25zdCBwbUpTVG9vbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvcG1KU1Rvb2xzLmpzXCIpO1xyXG5cdGNvbnN0IHBtU2VyVG9vbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvcG1TZXJUb29scy5qc1wiKTtcclxuXHR2YXIgYXBwID0gZ2V0QXBwKCk7XHJcblx0XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRXYWl0U3VtQ291bjogXCJcIixcclxuXHRcdFx0XHR0b3BUaXBzOiBmYWxzZSxcclxuXHRcdFx0XHR0b3BUaXBzU3RyOiBcIlwiXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHJcblx0XHR9LFxyXG5cdFx0cHJvcHM6IHt9LFxyXG5cdFxyXG5cdFxyXG5cdFx0b25Mb2FkOiBmdW5jdGlvbihvcHRpb25zKSB7XHJcblx0XHR9LFxyXG5cdFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFxyXG5cdFx0XHRhc3luYyBvbk9wZW5FZGl0UE1DT0lMaXN0KCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJy4uL3Rhc2tMaXN0L3Rhc2tMaXN0JyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7fSxcclxuXHRcdFx0XHRcdGZhaWw6ICgpID0+IHt9LFxyXG5cdFx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHt9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0fTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 8);

/***/ }),
/* 8 */
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

module.exports = __webpack_require__(/*! ./runtime */ 9);

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
/* 9 */
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
/* 10 */
/*!**********************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/utils/pmJSTools.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(wx, __f__) {//通用的，不和云函数直接交互的js工具 V2020 08 27\nvar app = getApp(); //声明曝露函数给require方\n\nmodule.exports = {\n  GetSeqID: GetSeqID,\n  IsNullOrEmpty: IsNullOrEmpty,\n  GetErrMsgValue: GetErrMsgValue,\n  GetStr: GetStr,\n  GetSubObj: GetSubObj,\n  GetSubObjStr: GetSubObjStr,\n  lightOneControlFromList: lightOneControlFromList,\n  lightOneControlFromList2: lightOneControlFromList2,\n  getOneControlFromList: getOneControlFromList,\n  getSqIDFromList: getSqIDFromList,\n  getPropertiesFromVariant: getPropertiesFromVariant,\n  getGeneralUnitList: getGeneralUnitList,\n  getFileSuffix: getFileSuffix,\n  replaceOneControlFromList: replaceOneControlFromList,\n  getSeqIDfromArr: getSeqIDfromArr,\n  getTimeShortStrFromTime: getTimeShortStrFromTime,\n  calPMCOI: calPMCOI,\n  DeleteFromList: DeleteFromList,\n  dateAddDays: dateAddDays,\n  inputvalidation: inputvalidation,\n  getValueSqInList: getValueSqInList,\n  getStrLeft: getStrLeft,\n  getStrRight: getStrRight,\n  lightOneControl: lightOneControl,\n  unLightOneControl: unLightOneControl,\n  calMyPMCOI: calMyPMCOI,\n  getOneControlFromListByMy: getOneControlFromListByMy,\n  calPMUser: calPMUser,\n  getDistance: getDistance,\n  UpdateProductStorge: UpdateProductStorge,\n  getPMJobType: getPMJobType,\n  GetNum: GetNum,\n  GetStateStr: GetStateStr,\n  getStrsubstring: getStrsubstring,\n  DateChange: DateChange,\n  stringToDate: stringToDate,\n  getStrLeftFromFront: getStrLeftFromFront,\n  getStrRightFromFront: getStrRightFromFront };\n//函数对象号： 1， 获取动态ID号函数\n\nfunction GetSeqID(typeStr, intCount) {\n  var now = new Date();\n  var year = now.getFullYear();\n  year = year - 2000;\n  if (year >= 26 && year <= 31) year = String.fromCharCode(year + 23);else year = String.fromCharCode(year + 65);\n  var month = now.getMonth() + 1;\n  if (month >= 26 && month <= 31) month = String.fromCharCode(month + 23);else month = String.fromCharCode(month + 65);\n  var day = now.getDate();\n  if (day >= 26 && day <= 31) day = String.fromCharCode(day + 23);else day = String.fromCharCode(day + 65);\n  var hour = now.getHours();\n  if (hour >= 26 && hour <= 31) hour = String.fromCharCode(hour + 23);else hour = String.fromCharCode(hour + 65);\n  var minutes = now.getMinutes();\n  if (minutes >= 26 && minutes <= 31) minutes = String.fromCharCode(minutes + 23);else {\n    if (minutes == 58 || minutes == 59) minutes = String.fromCharCode(minutes - 3);else minutes = String.fromCharCode(minutes + 65);\n  }\n  var seconds = now.getSeconds();\n  if (seconds >= 26 && seconds <= 31) seconds = String.fromCharCode(seconds + 23);else {\n    if (seconds == 58 || seconds == 59) minutes = String.fromCharCode(seconds - 3);else seconds = String.fromCharCode(seconds + 65);\n  }\n  var ResStrList = [];\n\n  for (var j = 0; j < intCount; j++) {\n    //准备随机数\n    var len = 6;\n    len = len || 32;\n    var $chars = 'ABCDEFGHJKMNPQRSTWXYZ2345678';\n    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/\n\n    var maxPos = $chars.length;\n    var pwd = '';\n\n    for (var i = 0; i < len; i++) {\n      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));\n    }\n\n    var ResStr = typeStr + year + month + day + hour + minutes + seconds + pwd;\n    ResStrList.push(ResStr);\n  }\n\n  return ResStrList;\n} //函数对象号： 2， 对象转换\n\n\nfunction GetStr(ObjVale) {\n  if (IsNullOrEmpty(ObjVale)) {\n    return \"\";\n  } else {\n    return ObjVale.toString();\n  }\n} //函数对象号： 3， 过滤objVal为空的各种情形，减少判空复杂度\n\n\nfunction IsNullOrEmpty(objVal) {\n  //  过滤 \"\"; \" \"; null;undefined;  [];{};vNaN;\n  if (objVal === undefined) {\n    // 只能用 === 运算来测试某个值是否是未定义的\n    return true;\n  }\n\n  if (objVal == null) {\n    // 等同于 a === undefined || a === null\n    return true;\n  }\n\n  if (objVal == \"TypeError\") {\n    // \n    return true;\n  } // 属于数字不应该是空，特别是0， 如果不加这一句，在下一句会被认为是空值。\n\n\n  if (typeof objVal === 'number') {\n    return false;\n  }\n\n  if (objVal == \"\" || objVal == null || objVal == undefined) {\n    // \"\",null,undefined\n    return true;\n  }\n\n  if (!objVal) {\n    // \"\",null,undefined,NaN\n    return true;\n  } // Array\n\n\n  if (objVal.length == 0) {\n    // \"\",[]\n    return true;\n  }\n\n  return false;\n} //函数对象号： 4， 对ErrMsgStr进行整理，减少前端判断复杂度\n\n\nfunction GetErrMsgValue(ErrMsgStr) {\n  if (IsNullOrEmpty(ErrMsgStr)) {\n    return \"\";\n  } else {\n    var TempS;\n\n    try {\n      TempS = ErrMsgStr.substring(ErrMsgStr.indexOf(\":\") + 1, ErrMsgStr.length);\n    } catch (error) {\n      //说明:TempS格式不符合至少有字符\":ok\"\n      return TempS;\n    }\n\n    if (IsNullOrEmpty(TempS)) {\n      return \"\";\n    } else {\n      var lastStr = TempS.toUpperCase();\n\n      if (lastStr == \"OK\") {\n        return lastStr;\n      } else {\n        return TempS;\n      }\n    }\n  }\n} //函数对象号： 5，检查对象是否存在 //和IsNullOrEmpty有很大同\n\n\nfunction IsNotExist(objVal) {\n  if (objVal === undefined) {\n    // 只能用 === 运算来测试某个值是否是未定义的\n    return true;\n  } else {\n    return false;\n  }\n} //函数对象号： 7，获取对象数组的长度  String 返回的是字符长度，不支持length的变量返回的是0\n\n\nfunction GetLength(objVal) {\n  if (IsNullOrEmpty(objVal)) {\n    return 0;\n  }\n\n  var TempI = 0;\n\n  try {\n    TempI = objVal.length;\n    return TempI;\n  } catch (error) {\n    return TempI;\n  }\n} //函数对象号： 8，探取子对象是否存在，如果存在则返回子对象，如不存在则返回“”，如存直接返回子变\n// AA.BB.CC : 当BB为空空值程序直接报错被catch,这样逻辑性就复杂了。需要一个函数来自动处理。\n// 这个函数要处理两种情况\n//情况 1： AA.BB.CC : 当BB为空空值程序直接报错，容易产生错误。需要智能处理\n//情况 2：AA[0][0].BB :但AA[0]为空，或AA[0][0]为空的智能处理\n//TempList 应该是个数组： [rootObj,\"子元素名\"，“子元素名”，...]\n//子元素名 为数值是就是类似：rootObj[0]含义\n\n\nfunction GetSubObj(TempList) {\n  if (IsNullOrEmpty(TempList)) //TempList不存在，直接返回一个空值回去。\n    {\n      return \"\";\n    }\n\n  try {\n    if (IsNullOrEmpty(TempList[0])) //根元素不存在直接返回\n      {\n        return \"\";\n      }\n\n    var TempObj = TempList[0];\n\n    for (var i = 1; i < TempList.length; i++) {\n      if (!IsNullOrEmpty(TempList[i])) {\n        if (!IsNullOrEmpty(TempObj[TempList[i]])) //不管是数组还是字符都一样\n          {\n            TempObj = TempObj[TempList[i]]; //指向下一层变量\n          } else {\n          return \"\"; //说明为空值，直接返回\"\"\n        }\n      } else {\n        return \"\"; //表达不正确放回空\n      }\n    }\n  } catch (e) //任何错误直接返回空\n  {\n    return \"\";\n  }\n\n  return TempObj;\n} //函数对象号： 9 参考 GetSubObj 和 GetStr\n\n\nfunction GetSubObjStr(TempList) {\n  return GetStr(GetSubObj(TempList));\n} //函数对象号： 10 通过对象id值，实现从控件容器中高亮一个控件 (\n\n/*方法说明\r\n       *@CreatorAndTime 创建人 GM 时间 2020 11 28\r\n       *@method 方法名 lightOneControlFromList \r\n       *@for 所属类名/或模块名  pmJSTool\r\n       *@function 功能说明  用于高亮tap事件后的控件，同时消退其他控件的高亮状态\r\n       *@mark 使用函数时的注意实现  这个只是界面，后端逻辑要特殊考虑，比如服务器端获得了数据，才可以点亮等\r\n       *@param{参数类型}参数名 参数说明\r\n       selectedID 被选择对象的 _id值\r\n       TempList   所在数据对象清单\r\n       isConverse 当提供这个参数，并且这个参数为true是，表示，直接置反\r\n*/\n\n\nfunction lightOneControlFromList(selectedID, TempList) {\n  //不返回只做正确的设置\n  var btnSelectedStyle = \" box-shadow: 2px 2px 5px #000;\"; //用于动态表达按钮选中的状态\n\n  var btnUnSelectedStyle = \" box-shadow: 0px 0px 0px #000;\"; //用于动态表达按钮没有选中的状态\n\n  if (!IsNullOrEmpty(selectedID) && !IsNullOrEmpty(TempList)) {\n    if (TempList.length) {\n      for (var i = 0; i < TempList.length; i++) {\n        if (TempList[i]._id == selectedID) {\n          TempList[i].selectedStyle = btnSelectedStyle;\n        } else {\n          TempList[i].selectedStyle = btnUnSelectedStyle;\n        }\n      }\n    } else {\n      if (TempList._id == selectedID) {\n        TempList.selectedStyle = btnSelectedStyle;\n      } else {\n        TempList.selectedStyle = btnUnSelectedStyle;\n      }\n    }\n  }\n} //函数10的变体函数\n//isConverse 当提供这个参数，并且这个参数为true是，表示，直接置反\n\n\nfunction lightOneControlFromList2(selectedID, TempList, isConverse) {\n  var btnSelectedStyle = \" box-shadow: 2px 2px 5px #000;\"; //用于动态表达按钮选中的状态\n\n  var btnUnSelectedStyle = \" box-shadow: 0px 0px 0px #000;\"; //用于动态表达按钮没有选中的状态\n\n  if (isConverse != true) {\n    lightOneControlFromList(selectedID, TempList);\n  } else {\n    var tempPI = getOneControlFromList(selectedID, TempList);\n\n    if (tempPI.selectedStyle == btnSelectedStyle) {\n      tempPI.selectedStyle = btnUnSelectedStyle;\n    } else {\n      lightOneControlFromList(selectedID, TempList);\n    }\n  }\n} //函数对象号： 11 根据id值，从控件ataList中获取一个控件\n\n/*方法说明\r\n       *@CreatorAndTime 创建人 GM 时间 2020 11 29\r\n       *@method 方法名 getOneControlFromList \r\n       *@for 所属类名/或模块名  pmJSTool\r\n       *@function 功能说明  通过id,获取控件数据\r\n       *@mark\r\n       *@param{参数类型}参数名 参数说明\r\n       selectedID 被选择对象的 _id值\r\n       TempList   所在数据对象清单\r\n*/\n\n\nfunction getOneControlFromList(selectedID, TempList) {\n  if (!IsNullOrEmpty(selectedID) && !IsNullOrEmpty(TempList)) {\n    if (TempList.length) {\n      for (var i = 0; i < TempList.length; i++) {\n        if (TempList[i]._id == selectedID) //遍历出来一个数据\n          {\n            return TempList[i];\n          }\n      }\n    } else {\n      if (TempList._id == selectedID) //只有一个数据时的数据\n        {\n          return TempList;\n        }\n    }\n  }\n\n  return \"\"; //没有找到返回一个安全的空值\n} //函数对象号： 12 根据_id值，从控件ataList中获取一个控件在数据对象中的顺序值\n\n/*方法说明\r\n       *@CreatorAndTime 创建人 GM 时间 2020 12 03\r\n       *@method 方法名 getSqIDFromList \r\n       *@for 所属类名/或模块名  pmJSTool\r\n       *@function 功能说明  通过id,获取控件数据\r\n       *@mark\r\n       *@param{参数类型}参数名 参数说明\r\n       selectedID 被选择对象的 _id值\r\n       TempList   所在数据对象清单\r\n*/\n\n\nfunction getSqIDFromList(selectedID, TempList) {\n  if (!IsNullOrEmpty(selectedID) && !IsNullOrEmpty(TempList)) {\n    if (TempList.length) {\n      for (var i = 0; i < TempList.length; i++) {\n        if (TempList[i]._id == selectedID) //遍历出来一个数据\n          {\n            return i;\n          }\n      }\n    } else {\n      if (TempList._id == selectedID) //只有一个数据时的数据\n        {\n          return -1; //不是数组，不应该用来选择\n        }\n    }\n  }\n\n  return -1; //没有找到返回一个安全的值\n} //函数对象号： 13 变量转变为属性清单\n\n\nfunction getPropertiesFromVariant(tempVariant) {\n  if (IsNullOrEmpty(tempVariant)) {\n    return null;\n  }\n\n  var fillBlock = {};\n  fillBlock.fillRemind = \"\";\n  fillBlock.fillItemList = [];\n\n  for (var Key in tempVariant) {\n    var fillItem = {};\n    fillItem.fillTitle = Key, fillItem.fillTitleRight = \"默认后缀\", fillItem.fillChartURL = \"\", //可为空\n    fillItem.fillTip = \"填写提示\", fillItem.fillType = \"TXT\", //填写类型: TXT NUM LIST DATETIME\n    fillItem.filleValue = JSON.stringify(tempVariant[Key]), fillItem.fillHelpList = [], //备选项\n    fillItem.fillID = \"\", //填写项字段名，不在前端显示\n    fillBlock.fillItemList.push(fillItem);\n  }\n\n  return fillBlock;\n} //函数对象号： 14 获取最常见单位名称清单\n\n\nfunction getGeneralUnitList() {\n  var TempList = [\"件\", \"个\", \"套\", \"箱\", \"袋\", \"克\", \"千克\", \"吨\", \"米\", \"千米\", \"毫升\", \"升\", \"立方米\"];\n  return TempList;\n} //函数对象号： 15 获取文件名的后缀。很多时候需要截取后缀用于改名。 比如 XXXX.png ==> .png\n\n\nfunction getFileSuffix(fileStr) {\n  if (!IsNullOrEmpty(fileStr)) {\n    var TempFileSuffix = fileStr.substring(fileStr.lastIndexOf(\".\"));\n\n    if (!IsNullOrEmpty(TempFileSuffix)) {\n      return TempFileSuffix;\n    }\n  }\n\n  return \"\";\n} //函数对象号： 15 根据id值，从控件dataList中获取一个变量，并替换为一个新变量\n\n/*方法说明\r\n       *@CreatorAndTime 创建人 GM 时间 2020 12 25\r\n       *@method 方法名 replaceOneControlFromList \r\n       *@for 所属类名/或模块名  pmJSTool\r\n       *@function 功能说明  根据id值，从控件dataList中获取一个变量，并替换为一个新变量\r\n       *@mark\r\n       *@param{参数类型}参数名 参数说明\r\n       selectedID 被选择对象的 _id值\r\n       newVariant,新变量\r\n       TempList   所在数据对象清单\r\n*/\n\n\nfunction replaceOneControlFromList(selectedID, newVariant, TempList) {\n  if (!IsNullOrEmpty(selectedID) && !IsNullOrEmpty(TempList)) {\n    if (TempList.length) {\n      for (var i = 0; i < TempList.length; i++) {\n        if (TempList[i]._id == selectedID) //遍历出来一个数据\n          {\n            TempList[i] = newVariant;\n          }\n      }\n    } else {\n      if (TempList._id == selectedID) //只有一个数据时的数据\n        {\n          TempList[i] = newVariant;\n        }\n    }\n  }\n} //函数对象号： 16 根据内容值，从数组中返回值所在位置。 如果不存在返回0\n\n/*方法说明\r\n       *@CreatorAndTime 创建人 GM 时间 2020 12 26\r\n       *@method 方法名 getSeqIDfromArr\r\n       *@for 所属类名/或模块名  pmJSTool\r\n       *@function 功能说明  根据内容值，从数组中返回值所在位置。 如果不存在返回0\r\n       *@mark\r\n       *@param{参数类型}参数名 参数说明\r\n       tempV 需要查询的变量值\r\n       TempList   所在数据对象清单\r\n*/\n\n\nfunction getSeqIDfromArr(tempV, TempList) {\n  if (IsNullOrEmpty(tempV)) {\n    return 0;\n  }\n\n  if (IsNullOrEmpty(TempList)) {\n    return 0;\n  }\n\n  for (var tempKey in TempList) {\n    if (TempList[tempKey] == tempV) {\n      return tempKey;\n    }\n  }\n\n  return 0;\n} //函数对象号： 17 返回时间值简短表达（今天以时间来表达，昨天及以前写为日期，不带年标识）\n\n/*方法说明\r\n       *@CreatorAndTime 创建人 GM 时间 2020 12 27\r\n       *@method 方法名 getTimeShortStrFromTime\r\n       *@for 所属类名/或模块名  pmJSTool\r\n       *@function 功能说明  今天以时间来表达，昨天及以前写为日期，不带年标识\r\n       *@mark\r\n       *@param{参数类型}参数名 参数说明\r\n       tempV 需要查询的变量值\r\n       TempList   所在数据对象清单\r\n*/\n\n\nfunction getTimeShortStrFromTime(tempTimeStr) //只接受Date Str对象\n{\n  if (IsNullOrEmpty(tempTimeStr)) {\n    return \"\";\n  }\n\n  var tempnow = new Date();\n  var tempTime = new Date(tempTimeStr);\n  var tempnowDate = tempnow.getFullYear() + \"/\" + (tempnow.getMonth() + 1) + \"/\" + tempnow.getDate();\n  var tempTimeDate = tempTime.getFullYear() + \"/\" + (tempTime.getMonth() + 1) + \"/\" + tempTime.getDate();\n  var ResStr = \"\";\n\n  if (tempnowDate == tempTimeDate) {\n    ResStr = fillZero(tempTime.getHours()) + \":\" + fillZero(tempTime.getMinutes());\n  } else {\n    ResStr = fillZero(tempTime.getMonth() + 1) + \"/\" + fillZero(tempTime.getDate() + \"\");\n  }\n\n  return ResStr;\n\n  function fillZero(tempInt) //补全前导0\n  {\n    if (tempInt < 10) {\n      return \"0\" + tempInt.toString();\n    } else {\n      return tempInt.toString();\n    }\n  }\n} //函数对象号： 18 PMCOI计算变量实现函数\n\n/*方法说明\r\n       *@CreatorAndTime 创建人 GM 时间 2020 12 28\r\n       *@method 方法名 calPMCOI\r\n       *@for 所属类名/或模块名  pmJSTool\r\n       *@function 功能说明  计算PMCOI的所有需要本地计算或转换的变量值\r\n       *@mark\r\n       *@param{参数类型}参数名 参数说明\r\n       tempV 需要查询的变量值\r\n       TempList   所在数据对象清单\r\n*/\n\n\nfunction calPMCOI(PMCOI) //有一些字段是通过遍历PMCOIList,计算获得的，通过此函数完成。\n{\n  //PMState: \"\", //\t状态\tONCREATE:创建中，UNPACKING:已拆单, RELEASE:已下达，NORELEASE:未下达，PRODUCTION:生产中，ENDPRODUCTION:生产结束\n  PMCOI.calChangeTimeStr = getTimeShortStrFromTime(PMCOI.PMChangeTime);\n  PMCOI.calZPublishTimeShort = getTimeShortStrFromTime(PMCOI.ZCTPublishTime);\n\n  switch (PMCOI.PMOrderState) {\n    case \"ONCREATE\":\n      {\n        PMCOI.calPMState = \"创建中\";\n        PMCOI.calTaskStates = [{\n          calStageName: \"任务发布\",\n          calStageStyle: \"background-color:lightgray; border-color: gray;\" },\n        {\n          calStageName: \"等待授权\",\n          calStageStyle: \"background-color:lightgray; border-color: gray;\" },\n        {\n          calStageName: \"过程执行\",\n          calStageStyle: \"background-color:lightgray; border-color: gray;\" },\n        {\n          calStageName: \"完工申请\",\n          calStageStyle: \"background-color:lightgray; border-color: gray;\" },\n        {\n          calStageName: \"完工验收\",\n          calStageStyle: \"background-color:lightgray; border-color: gray;\" }];\n\n        break;\n      }\n\n    case \"NORELEASE\":\n      {\n        // PMCOI.calPMState = \"待发布\"\n        PMCOI.calPMState = \"编辑中\";\n        PMCOI.calTaskStates = [{\n          calStageName: \"任务发布\",\n          calStageStyle: \"background-color:lightgray; border-color: gray;\" },\n        {\n          calStageName: \"等待授权\",\n          calStageStyle: \"background-color:lightgray; border-color: gray;\" },\n        {\n          calStageName: \"过程执行\",\n          calStageStyle: \"background-color:lightgray; border-color: gray;\" },\n        {\n          calStageName: \"完工申请\",\n          calStageStyle: \"background-color:lightgray; border-color: gray;\" },\n        {\n          calStageName: \"完工验收\",\n          calStageStyle: \"background-color:lightgray; border-color: gray;\" }];\n\n        break;\n      }\n\n    case \"RELEASE\":\n      {\n        PMCOI.calPMState = \"已发布\";\n        break;\n      }\n\n    case \"ACCEPTED\":\n      {\n        PMCOI.calPMState = \"已发布\";\n        break;\n      }\n    //20210225\n\n    case \"PUBLISH\":\n      {\n        PMCOI.calPMState = \"已发布\";\n        PMCOI.calTaskStates = [{\n          calStageName: \"任务发布\",\n          calStageStyle: \"background-color:lightgreen; border-color: gray;\" },\n        {\n          calStageName: \"等待授权\",\n          calStageStyle: \"background-color:lightgray; border-color: gray;\" },\n        {\n          calStageName: \"过程执行\",\n          calStageStyle: \"background-color:lightgray; border-color: gray;\" },\n        {\n          calStageName: \"完工申请\",\n          calStageStyle: \"background-color:lightgray; border-color: gray;\" },\n        {\n          calStageName: \"完工验收\",\n          calStageStyle: \"background-color:lightgray; border-color: gray;\" }];\n\n        break;\n      }\n\n    case \"WaitAuthorize\":\n      {\n        PMCOI.calPMState = \"待授权\";\n        PMCOI.calTaskStates = [{\n          calStageName: \"任务发布\",\n          calStageStyle: \"background-color:lightgreen; border-color: gray;\" },\n        {\n          calStageName: \"等待授权\",\n          calStageStyle: \"background-color:lightgreen; border-color: gray;\" },\n        {\n          calStageName: \"过程执行\",\n          calStageStyle: \"background-color:lightgray; border-color: gray;\" },\n        {\n          calStageName: \"完工申请\",\n          calStageStyle: \"background-color:lightgray; border-color: gray;\" },\n        {\n          calStageName: \"完工验收\",\n          calStageStyle: \"background-color:lightgray; border-color: gray;\" }];\n\n        break;\n      }\n\n    case \"ALLOWED\":\n      {\n        PMCOI.calPMState = \"执行中\";\n        PMCOI.calTaskStates = [{\n          calStageName: \"任务发布\",\n          calStageStyle: \"background-color:lightgreen; border-color: gray;\" },\n        {\n          calStageName: \"等待授权\",\n          calStageStyle: \"background-color:lightgreen; border-color: gray;\" },\n        {\n          calStageName: \"过程执行\",\n          calStageStyle: \"background-color:lightgreen; border-color: gray;\" },\n        {\n          calStageName: \"完工申请\",\n          calStageStyle: \"background-color:lightgray; border-color: gray;\" },\n        {\n          calStageName: \"完工验收\",\n          calStageStyle: \"background-color:lightgray; border-color: gray;\" }];\n\n        break;\n      }\n\n    case \"UNACCEPTED\":\n      {\n        PMCOI.calPMState = \"待验收\";\n        PMCOI.calTaskStates = [{\n          calStageName: \"任务发布\",\n          calStageStyle: \"background-color:lightgreen; border-color: gray;\" },\n        {\n          calStageName: \"等待授权\",\n          calStageStyle: \"background-color:lightgreen; border-color: gray;\" },\n        {\n          calStageName: \"过程执行\",\n          calStageStyle: \"background-color:lightgreen; border-color: gray;\" },\n        {\n          calStageName: \"完工申请\",\n          calStageStyle: \"background-color:lightgreen; border-color: gray;\" },\n        {\n          calStageName: \"完工验收\",\n          calStageStyle: \"background-color:lightgray; border-color: gray;\" }];\n\n        break;\n      }\n\n    case \"ACCEPT\":\n      {\n        PMCOI.calPMState = \"验收\";\n        PMCOI.calTaskStates = [{\n          calStageName: \"任务发布\",\n          calStageStyle: \"background-color:lightgreen; border-color: gray;\" },\n        {\n          calStageName: \"等待授权\",\n          calStageStyle: \"background-color:lightgreen; border-color: gray;\" },\n        {\n          calStageName: \"过程执行\",\n          calStageStyle: \"background-color:lightgreen; border-color: gray;\" },\n        {\n          calStageName: \"完工申请\",\n          calStageStyle: \"background-color:lightgreen; border-color: gray;\" },\n        {\n          calStageName: \"完工验收\",\n          calStageStyle: \"background-color:lightgreen; border-color: gray;\" }];\n\n        break;\n      }\n\n    case \"PRODUCTION\":\n      {\n        PMCOI.calPMState = \"生产中\";\n        break;\n      }\n\n    case \"ENDPRODUCTION\":\n      {\n        PMCOI.calPMState = \"生产结束\";\n        break;\n      }\n\n    case \"UNPACKING\":\n      {\n        //ZCT用不到\n        PMCOI.calPMState = \"已拆单\";\n        break;\n      }\n\n    default:\n      {\n        PMCOI.calPMState = \"状态未知\";\n        break;\n      }}\n  //任务未发布时，ZCTCOILatit和ZCTCOILonggit为undefined\n\n\n  if (IsNullOrEmpty(PMCOI.ZCTCOILatit) || IsNullOrEmpty(PMCOI.ZCTCOILongit)) {\n    PMCOI.calTaskDistance = \"KM\"; //未发布时，距离为0\n  } else {\n    if (app.globalData.CurrentLatitude != 0 || app.globalData.CurrentLongitude != 0) {\n      PMCOI.calTaskDistance = getDistance(app.globalData.CurrentLatitude, app.globalData.CurrentLongitude, PMCOI.ZCTCOILatit, PMCOI.ZCTCOILongit);\n      PMCOI.calTaskDistance = Math.round(PMCOI.calTaskDistance);\n      PMCOI.calTaskDistance = PMCOI.calTaskDistance > 100 ? \">100KM\" : PMCOI.calTaskDistance + \"KM\";\n    } else {\n      PMCOI.calTaskDistance = \"KM\";\n    }\n  } //计算进度条\n\n  /*PMCOI.calTaskStates = [\r\n    {\r\n      calStageName : \"任务发布\",\r\n      calStageStyle : \"background-color:lightgreen; border-color: gray;\"\r\n    },\r\n    {\r\n    calStageName : \"等待授权\",\r\n    calStageStyle : \"background-color:lightgreen; border-color: gray;\",\r\n    },\r\n    {\r\n    calStageName : \"过程执行\",\r\n    calStageStyle : \"background-color:lightgreen; border-color: gray;\",\r\n    },\r\n    {\r\n    calStageName : \"完工申请\",\r\n    calStageStyle : \"background-color:lightgray; border-color: gray;\",\r\n    },\r\n    {\r\n    calStageName : \"完工验收\",\r\n    calStageStyle : \"background-color:lightgray; border-color: gray;\",\r\n    }\r\n    ]*/\n\n} //函数对象号： 19 根据_id值，从数组TempList中删除一条_id字段为selectedID值的数据\n\n/*方法说明\r\n       *@CreatorAndTime 创建人 SE13 时间 2021 01 20\r\n       *@method 方法名 DeleteFromList \r\n       *@for 所属类名/或模块名  pmJSTool\r\n       *@function 功能说明  通过id,删除数组中的数据\r\n       *@mark\r\n       *@param{参数类型}参数名 参数说明\r\n       selectedID 被选择对象的 _id值\r\n       TempList   所在数据对象清单\r\n*/\n\n\nfunction DeleteFromList(selectedID, TempList) {\n  if (!IsNullOrEmpty(selectedID) && !IsNullOrEmpty(TempList)) {\n    if (TempList.length) {\n      for (var i = 0; i < TempList.length; i++) {\n        if (TempList[i]._id == selectedID) //遍历出来一个数据\n          {\n            TempList.splice(i, 1);\n            return TempList;\n          }\n      }\n    }\n  }\n\n  return TempList; //返回接收到的数组内容\n} //函数对象号： 20 根据日期字符串 返回增加天数\n\n/*方法说明\r\n       *@CreatorAndTime 创建人 GM 时间 2021 01 20\r\n       *@method 方法名 dateAddDays \r\n       *@for 所属类名/或模块名  pmJSTool\r\n       *@function 功能说明  根据日期字符串 返回增加天数\r\n       *@mark\r\n       日期加天数的方法\r\n       dataStr日期字符串\r\n       dayCount 要增加的天数\r\n       return 增加n天后的日期字符串\r\n*/\n\n\nfunction dateAddDays(dataStr, dayCount) {\n  var strdate = GetStr(dataStr); //日期字符串\n\n  var isdate = new Date(strdate.replace(/-/g, \"/\")); //把日期字符串转换成日期格式\n\n  isdate = new Date((isdate / 1000 + 86400 * dayCount) * 1000); //日期加1天\n\n  var pdate = isdate.getFullYear() + \"-\" + (isdate.getMonth() + 1) + \"-\" + isdate.getDate(); //把日期格式转换成字符串\n\n  return pdate;\n} //函数对象号： 21 输入验证（可根据需要新增case增加）\n\n/*方法说明\r\n       *@CreatorAndTime 创建人 SE13 时间 2021 02 2\r\n       *@method 方法名 inputvalidation \r\n       *@for 所属类名/或模块名  pmJSTool\r\n       *@function 功能说明   正则表达式验证输入值val是否为特定类型type\r\n       *@mark\r\n       输入验证 eg:inputvalidation(\"123.5\",\"正浮点数\")  返回结果为return true\r\n       val 输入的值\r\n       type 类型\r\n       return true(验证通过)；false(验证失败)\r\n*/\n\n\nfunction inputvalidation(val, type) {\n  switch (type) {\n    case \"正浮点数\":\n      //大于0的整数和小数\n      {\n        if (!/^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$/.test(val)) {\n          return false;\n        }\n\n        return true;\n      }\n\n    case \"非负浮点数\":\n      //非负浮点数（正浮点数 + 0）\n      {\n        if (!/^\\d+(\\.\\d+)?$/.test(val)) {\n          return false;\n        }\n\n        return true;\n      }\n\n    case \"整数\":\n      {\n        if (!/^-?\\d+$/.test(val)) {\n          return false;\n        }\n\n        return true;\n      }\n\n    case \"验证非零的正整数\":\n      //验证非零的正整数\n      {\n        if (!/^\\+?[1-9][0-9]*$/.test(val)) {\n          return false;\n        }\n\n        return true;\n      }\n\n    case \"验证非负整数\":\n      //验证非负整数（正整数 + 0）\n      {\n        if (!/^\\d+$/.test(val)) {\n          return false;\n        }\n\n        return true;\n      }\n\n    case \"身份证号\":\n      //验证身份证号（15位或18位数字）\n      {\n        if (!/^\\d{15}|\\d{}18$/.test(val)) {\n          return false;\n        }\n\n        return true;\n      }\n\n    /*case \"Email地址\": //验证Email地址\r\n        {\r\n          if (!/^\\w+[-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/.test(val)) {\r\n            return false\r\n          }\r\n          return true\r\n        }*/\n\n    case \"物料号名\":\n      //验证物料号码组合的合法性\n      {\n        if (IsNullOrEmpty(val)) {\n          return \"不能为空\";\n        }\n\n        if (val.indexOf(\":\") < 0) {\n          if (val.indexOf(\"：\") < 0) {\n            return \"需要用:分隔物料号和物料名。\";\n          }\n        }\n\n        return \"OK\";\n      }\n\n    default:\n      {\n        return false;\n      }}\n\n} //函数对象号： 22 从属性页下拉框内容获得相同的值的顺序地址，用于切换赋值\n\n/*方法说明\r\n       *@CreatorAndTime 创建人 GM 时间 2021 02 12\r\n       *@method 方法名 InputIntoList\r\n       *@for 所属类名/或模块名  pmJSTool\r\n       *@function 功能说明   属性页下拉框，如果直接赋值不能直接显示。属性页下拉框通过数值地址来赋值的。\r\n       *@mark\r\n       inputValue: 输入值\r\n       ValueList:  下拉清单对象\r\n       return 返回数组地址值。 没有找到返回-1\r\n*/\n\n\nfunction getValueSqInList(inputValue, ValueList) {\n  if (!IsNullOrEmpty(inputValue) && !IsNullOrEmpty(ValueList)) {\n    if (ValueList.length) {\n      for (var i = 0; i < ValueList.length; i++) {\n        if (ValueList[i] == inputValue) //遍历出来一个数据\n          {\n            return i;\n          }\n      }\n    } else {\n      if (ValueList == inputValue) //只有一个数据时的数据\n        {\n          return -1; //不是数组，不应该用来选择\n        }\n    }\n  }\n\n  return -1; //没有找到返回一个安全的值\n} //函数对象号： 23 根据标识字符，从字符串切出左边的一部分\n\n/*方法说明\r\n       *@CreatorAndTime 创建人 GM 时间 2021 02 17\r\n       *@method 方法名 getStrLeft\r\n       *@for 所属类名/或模块名  pmJSTool\r\n       *@function 功能说明    根据标识字符，从字符串切出左边的一部分 (注意从尾部向前搜索)\r\n       *@mark\r\n       tempStr:   长字符串\r\n       tempMark:  标识字符串\r\n       return:    字符串\r\n*/\n\n\nfunction getStrLeft(tempStr, tempMark) {\n  if (!IsNullOrEmpty(tempStr)) {\n    var tempRes = tempStr.substr(0, tempStr.lastIndexOf(tempMark));\n\n    if (!IsNullOrEmpty(tempRes)) {\n      return tempRes;\n    } else {\n      return tempStr;\n    }\n  }\n\n  return \"\";\n} //函数对象号： 24 根据标识字符，从字符串切出右边的一部分\n\n/*方法说明\r\n       *@CreatorAndTime 创建人 GM 时间 2021 02 17\r\n       *@method 方法名 getStrRight\r\n       *@for 所属类名/或模块名  pmJSTool\r\n       *@function 功能说明    根据标识字符，从字符串切出左边的一部分  (注意从尾部向前搜索)\r\n       *@mark\r\n       tempStr:   长字符串\r\n       tempMark:  标识字符串\r\n       return:    字符串\r\n*/\n\n\nfunction getStrRight(tempStr, tempMark) {\n  if (!IsNullOrEmpty(tempStr)) {\n    var tempRes = tempStr.substring(tempStr.lastIndexOf(tempMark) + tempMark.length);\n\n    if (!IsNullOrEmpty(tempRes)) {\n      return tempRes;\n    } else {\n      return tempStr;\n    }\n  }\n\n  return \"\";\n} //函数对象号： 25 浮起一个控件\n\n/*方法说明\r\n *@CreatorAndTime 创建人 GM 时间 2021 02 17\r\n *@method 方法名 lightOneControl\r\n *@for 所属类名/或模块名  pmJSTool\r\n *@function 功能说明    浮起一个控件\r\n *@mark\r\n */\n\n\nfunction lightOneControl(tempControl) {\n  //不返回只做正确的设置\n  var btnSelectedStyle = \" box-shadow: 2px 2px 5px #000;\"; //用于动态表达按钮选中的状态\n\n  var btnUnSelectedStyle = \" box-shadow: 0px 0px 0px #000;\"; //用于动态表达按钮没有选中的状态\n\n  tempControl.selectedStyle = btnSelectedStyle;\n} //函数对象号： 25 按下一个控件\n\n/*方法说明\r\n *@CreatorAndTime 创建人 GM 时间 2021 02 17\r\n *@method 方法名 unLightOneControl\r\n *@for 所属类名/或模块名  pmJSTool\r\n *@function 功能说明    浮起一个控件\r\n *@mark\r\n */\n\n\nfunction unLightOneControl(tempControl) {\n  //不返回只做正确的设置\n  var btnSelectedStyle = \" box-shadow: 2px 2px 5px #000;\"; //用于动态表达按钮选中的状态\n\n  var btnUnSelectedStyle = \" box-shadow: 0px 0px 0px #000;\"; //用于动态表达按钮没有选中的状态\n\n  tempControl.selectedStyle = btnUnSelectedStyle;\n} //函数对象号： 26 ZCTMyPMCOIList计算变量实现函数\n\n/*方法说明\r\n       *@CreatorAndTime 创建人 SE13 时间 2021 03 01\r\n       *@method 方法名 calMyPMCOI\r\n       *@for 所属类名/或模块名  pmJSTool\r\n       *@function 功能说明  计算ZCTMyPMCOIList的所有需要本地计算或转换的变量值\r\n       *@mark\r\n       *@param{参数类型}参数名 参数说明\r\n       tempV 需要查询的变量值\r\n       TempList   所在数据对象清单\r\n*/\n\n\nfunction calMyPMCOI(PMCOI) //有一些字段是通过遍历PMCOIList,计算获得的，通过此函数完成。\n{\n  //calPMCOI(PMCOI)  //直接交给calPMCOI, 特殊的才需要这里编写\n  //ZCTTaskState: \"\", //任务状态 TEMP:暂存 WATCH:关注, APPLY:申请, ALLOWED:授权, REFUSED: 拒绝，EXEC:执行, DELIVRY:交付, 验收：ACCEPT\n  PMCOI.calChangeTimeStr = getTimeShortStrFromTime(PMCOI.ZCTChangeTime);\n\n  switch (PMCOI.ZCTTaskState) {\n    case \"TEMP\":\n      {\n        PMCOI.calPMState = \"暂存\";\n        break;\n      }\n\n    case \"WATCH\":\n      {\n        PMCOI.calPMState = \"关注\";\n        break;\n      }\n\n    case \"APPLY\":\n      {\n        PMCOI.calPMState = \"申请\";\n        break;\n      }\n\n    case \"ALLOWED\":\n      {\n        PMCOI.calPMState = \"执行中\";\n        break;\n      }\n\n    case \"REFUSED\":\n      {\n        PMCOI.calPMState = \"拒绝\";\n        break;\n      }\n\n    case \"EXEC\":\n      {\n        PMCOI.calPMState = \"执行\";\n        break;\n      }\n\n    case \"DELIVRY\":\n      {\n        PMCOI.calPMState = \"交付\";\n        break;\n      }\n\n    case \"RETURN\":\n      {\n        PMCOI.calPMState = \"交付退回\";\n        break;\n      }\n\n    case \"ACCEPT\":\n      {\n        PMCOI.calPMState = \"验收\";\n        break;\n      }\n\n    default:\n      {\n        PMCOI.calPMState = \"状态未知\";\n        break;\n      }}\n\n\n  if (!IsNullOrEmpty(PMCOI.PMCOI)) {\n    calPMCOI(PMCOI.PMCOI);\n\n    if (PMCOI.PMCOI.ZCTIsDeleted == \"YES\") {\n      PMCOI.calPMState = \"已撤销\";\n    }\n  }\n} //函数对象号： 27 根据id值，从控件myPMCOIList中获取一个控件\n\n/*方法说明\r\n       *@CreatorAndTime 创建人 SE13 时间 2021 03 01\r\n       *@method 方法名 getOneControlFromListByMy \r\n       *@for 所属类名/或模块名  pmJSTool\r\n       *@function 功能说明  通过id,获取控件数据，针对ZCTMyPMCOIList集合\r\n       *@mark\r\n       *@param{参数类型}参数名 参数说明\r\n       selectedID 被选择对象的 _id值\r\n       TempList   所在数据对象清单\r\n*/\n\n\nfunction getOneControlFromListByMy(selectedID, TempList) {\n  if (!IsNullOrEmpty(selectedID) && !IsNullOrEmpty(TempList)) {\n    if (TempList.length) {\n      for (var i = 0; i < TempList.length; i++) {\n        if (TempList[i].ZCTPMCOI_id == selectedID) //遍历出来一个数据\n          {\n            return TempList[i];\n          }\n      }\n    } else {\n      if (TempList.ZCTPMCOI_id == selectedID) //只有一个数据时的数据\n        {\n          return TempList;\n        }\n    }\n  }\n\n  return \"\"; //没有找到返回一个安全的空值\n} //函数对象号： 28 PMUser计算前端可视变量的实现函数\n\n/*方法说明\r\n       *@CreatorAndTime 创建人 GM 时间 2020 2 28\r\n       *@method 方法名 calPMUser\r\n       *@for 所属类名/或模块名  pmJSTool\r\n       *@function 功能说明  计算PMCOI的所有需要本地计算或转换的变量值\r\n       *@mark\r\n       *@param{参数类型}参数名 参数说明\r\n       tempV 需要查询的变量值\r\n       TempList   所在数据对象清单\r\n*/\n\n\nfunction calPMUser(PMUser) //有一些字段是通过遍历PMUserList,计算获得的，通过此函数完成。\n{\n  PMUser.calBindTimeShortStr = getTimeShortStrFromTime(PMUser.WXLastBindTime);\n  var TempMainInfoStr = PMUser.PMUserName;\n\n  if (!IsNullOrEmpty(PMUser.ZCTUserSex)) {\n    TempMainInfoStr = TempMainInfoStr + \" / \" + PMUser.ZCTUserSex;\n  }\n\n  if (!IsNullOrEmpty(PMUser.ZCTBirthYear)) {\n    var TempNow = new Date();\n    var nowYear = TempNow.getFullYear();\n    var TempBirthYear = new Date(PMUser.ZCTBirthYear).getFullYear();\n    PMUser.calAges = nowYear - TempBirthYear;\n    TempMainInfoStr = TempMainInfoStr + \" / \" + PMUser.calAges + \"岁\";\n  }\n\n  PMUser.calMainInfo = TempMainInfoStr;\n\n  if (IsNullOrEmpty(PMUser.PMUserID)) {\n    PMUser.IsRelated = false;\n    PMUser.PMUserID = \"***********\";\n  } else {\n    if (PMUser.PMUserID == \"***********\") {\n      PMUser.IsRelated = false;\n    } else {\n      PMUser.IsRelated = true;\n    }\n  }\n\n  if (!IsNullOrEmpty(PMUser.relatedTime)) {\n    PMUser.relatedTimeShort = this.getTimeShortStrFromTime(PMUser.relatedTime);\n  }\n} //函数对象号： 29 计算两位置点间的距离（KM）的实现函数\n\n/*方法说明\r\n       *@CreatorAndTime 创建人 SE11 时间 2021 3 10\r\n       *@method 方法名 getDistance\r\n       *@for 所属类名/或模块名  pmJSTool\r\n       *@function 功能说明  计算两位置点间的距离（KM）\r\n       *@mark\r\n       *@param{参数类型}参数名 参数说明\r\n       la1 纬度\r\n       lo1 经度 \r\n       la2 纬度\r\n       lo2 经度\r\n*/\n\n\nfunction getDistance(la1, lo1, la2, lo2) {\n  var La1 = la1 * Math.PI / 180.0;\n  var La2 = la2 * Math.PI / 180.0;\n  var La3 = La1 - La2;\n  var Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0;\n  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)));\n  s = s * 6378.137;\n  s = Math.round(s * 10000) / 10000;\n  s = s.toFixed(2);\n  return s;\n} //函数对象号： 30 更新缓存中产品数据的实现函数\n\n/*方法说明\r\n       *@CreatorAndTime 创建人 SE24 时间 2021-3-11 10:24:14\r\n       *@method 方法名 UpdateProductStorge\r\n       *@for 所属类名/或模块名  pmJSTool\r\n       *@function 功能说明  根据提交的产品号和名称更新缓存中的数据\r\n       *@mark\r\n       *@param{参数类型}参数名 参数说明\r\n       *@param {String} TempProductID   //产品号\r\n       *@param {String} TempProductName //产品名\r\n*/\n\n\nfunction UpdateProductStorge(TempProductID, TempProductName) {\n  try {\n    if (!IsNullOrEmpty(TempProductID) && !IsNullOrEmpty(TempProductName)) {\n      //获取Storage缓存中的产品数据\n      var TempStorageProductArr = new Array();\n      var TempProductStr = wx.getStorageSync('ProductList'); //不存在本地缓存时，转换为空的数组\n\n      if (IsNullOrEmpty(TempProductStr)) {\n        //缓存新的产品\n        var TempNewProduct = new Object();\n        TempNewProduct.ProductID = TempProductID;\n        TempNewProduct.ProductName = TempProductName;\n        TempNewProduct.Date = new Date();\n        TempStorageProductArr.push(TempNewProduct);\n        var TempNewProductArr = JSON.stringify(TempStorageProductArr);\n        wx.setStorageSync('ProductList', TempNewProductArr);\n      } else {\n        TempStorageProductArr = JSON.parse(TempProductStr);\n        var TempThisProduct = TempStorageProductArr.find(function (e) {\n          return e.ProductID == TempProductID;\n        });\n\n        if (!IsNullOrEmpty(TempThisProduct)) {\n          //已存在此产品缓存信息\n          if (TempThisProduct.ProductName != TempProductName) {\n            //本次添加或编辑的产品名不同，进行修改\n            for (var i = 0; i < TempStorageProductArr.length; i++) {\n              if (TempStorageProductArr[i].ProductID == TempProductID) //查找出对应产品数据\n                {\n                  TempStorageProductArr[i].ProductName = TempProductName;\n                  TempStorageProductArr[i].Date = new Date();\n                }\n            }\n\n            var TempNewProductArr = JSON.stringify(TempStorageProductArr);\n            wx.setStorageSync('ProductList', TempNewProductArr);\n          }\n        } else {\n          //获取当前已缓存长度\n          var TempArrCount = TempStorageProductArr.length;\n\n          if (TempArrCount >= 500) {\n            //大于500时，移除最早的，保存新的。\n            //按照时间进行排序\n            TempStorageProductArr.sort(function (a, b) {\n              return a.Date > b.Date;\n            }); //移除排序后最早的产品信息\n\n            TempStorageProductArr.splice(0, 1); //缓存新的产品\n\n            var TempNewProduct = new Object();\n            TempNewProduct.ProductID = TempProductID;\n            TempNewProduct.ProductName = TempProductName;\n            TempNewProduct.Date = new Date();\n            TempStorageProductArr.push(TempNewProduct);\n            var TempNewProductArr = JSON.stringify(TempStorageProductArr);\n            wx.setStorageSync('ProductList', TempNewProductArr);\n          } else {\n            //缓存新的产品\n            var TempNewProduct = new Object();\n            TempNewProduct.ProductID = TempProductID;\n            TempNewProduct.ProductName = TempProductName;\n            TempNewProduct.Date = new Date();\n            TempStorageProductArr.push(TempNewProduct);\n            var TempNewProductArr = JSON.stringify(TempStorageProductArr);\n            wx.setStorageSync('ProductList', TempNewProductArr);\n          }\n        }\n      }\n    }\n  } catch (e) {\n    __f__(\"log\", GetStr(e), \" at utils/pmJSTools.js:1310\");\n  }\n} //函数对象号： 31 获取最常见工种类型清单\n\n\nfunction getPMJobType() {\n  var JobTypeList = ['普工', '技工', '组装工', '包装工', '焊工', '电工', '机加工', '冲压工', '电镀工', '注塑工', '喷塑工', '水工', '木工', '漆工', '学徒工', '质检工', '生产管理', '劳务管理', '其他'];\n  return JobTypeList;\n} //函数对象号：32 字符串转为数字\n\n\nfunction GetNum(TempNum) {\n  if (isNaN(TempNum)) {\n    return 0;\n  } else {\n    return parseFloat(TempNum);\n  }\n} //函数对象号：33 字符串转为数字\n\n\nfunction GetStateStr(TempState) {\n  switch (TempState) {\n    case \"CREATION\":\n      return \"等待生产\";\n\n    case \"ONRPODUCITON\":\n      return \"生产中，\";\n\n    case \"CLOSE\":\n      return \"生产结束\";\n\n    default:\n      break;}\n\n} //函数对象号： 34 截取设定位数的字符串 \n\n/*方法说明 \r\n       *@CreatorAndTime 创建人 SE13 时间 2021 04 15 \r\n       *@method 方法名 getStrsubstring \r\n       *@for 所属类名/或模块名  pmJSTool \r\n       *@function 功能说明    截取设定位数的字符串 \r\n       *@mark \r\n       tempStr:   长字符串 \r\n       First:  从第几位开始截取 \r\n       lenth:  截取长度 \r\n       return:    字符串 \r\n*/\n\n\nfunction getStrsubstring(tempStr, First, lenth) {\n  if (!IsNullOrEmpty(tempStr)) {\n    var tempRes = tempStr.substring(First, lenth);\n\n    if (!IsNullOrEmpty(tempRes)) {\n      return tempRes;\n    } else {\n      return tempStr;\n    }\n  }\n\n  return \"\";\n}\n/**\r\n   * Creator:SE24,Date:2021-6-5 17:55:31\r\n   * 将时间字符串转换成正常格式\r\n   * @param {*} TempJsonDate \r\n   */\n\n\nfunction DateChange(TempJsonDate) {\n  if (IsNullOrEmpty(TempJsonDate) || TempJsonDate == \"0001-01-01T00:00:00\" || TempJsonDate == \"0001-01-01T08:00:00\") {\n    return \"\";\n  }\n\n  if (TempJsonDate.length > 19) {\n    var dateee = new Date(TempJsonDate).toJSON();\n    var date = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\\.[\\d]{3}Z/, '');\n    date = date.replace(new RegExp(/-/gm), \"/\");\n    return date;\n  }\n\n  var TempRegDate = RegExp(/Date/);\n\n  if (!TempRegDate.test(TempJsonDate)) {\n    TempJsonDate = TempJsonDate.replace(/T/, \" \");\n    TempJsonDate = TempJsonDate.replace(new RegExp(/-/gm), \"/\");\n    return TempJsonDate;\n  }\n\n  if (TempJsonDate == \"/Date(-62135596800000+0800)/\") {\n    return \"\";\n  }\n\n  var TempDate = new Date(parseInt(TempJsonDate.replace(\"/Date(\", \"\").replace(\")/\", \"\"), 10));\n  var TempMonth = TempDate.getMonth() + 1 < 10 ? \"0\" + (TempDate.getMonth() + 1) : TempDate.getMonth() + 1;\n  var TempDay = TempDate.getDate() < 10 ? \"0\" + TempDate.getDate() : TempDate.getDate();\n  var TempHours = TempDate.getHours() < 10 ? \"0\" + TempDate.getHours() : TempDate.getHours();\n  var TempMinutes = TempDate.getMinutes() < 10 ? \"0\" + TempDate.getMinutes() : TempDate.getMinutes();\n  var TempSeconds = TempDate.getSeconds() < 10 ? \"0\" + TempDate.getSeconds() : TempDate.getSeconds();\n  return TempDate.getFullYear() + \"/\" + TempMonth + \"/\" + TempDay + \" \" + TempHours + \":\" + TempMinutes + \":\" + TempSeconds;\n}\n/**\r\n   * Creator:SE7,Date:2021-6-30 17:55:31\r\n   * 将字符串转换成日期格式\r\n   * @param {*} TempJsonDate \r\n   */\n\n\nfunction stringToDate(str) {\n  var tempStrs = str.split(\" \");\n  var dateStrs = tempStrs[0].split(\"-\");\n  var year = parseInt(dateStrs[0], 10);\n  var month = parseInt(dateStrs[1], 10);\n  var day = parseInt(dateStrs[2], 10);\n  var date = new Date(year, month, day, 0, 0, 0);\n  return date;\n}\n/**\r\n   * Creator:SE24,Date:2021-7-6 17:38:27\r\n   *  根据标识字符，从字符串左边起第一个此字符开始，切出左边的一部分\r\n   * @param {String} tempStr \r\n   * @param {String} tempMark \r\n   */\n\n\nfunction getStrLeftFromFront(tempStr, tempMark) {\n  if (!IsNullOrEmpty(tempStr)) {\n    var tempRes = tempStr.substr(0, tempStr.indexOf(tempMark));\n\n    if (!IsNullOrEmpty(tempRes)) {\n      return tempRes;\n    } else {\n      return tempStr;\n    }\n  }\n\n  return \"\";\n}\n/**\r\n   * Creator:SE24,Date:2021-7-6 17:39:56\r\n   *  根据标识字符，从字符串左边起第一个此字符开始，切出右边的一部分\r\n   * @param {*} tempStr \r\n   * @param {*} tempMark \r\n   */\n\n\nfunction getStrRightFromFront(tempStr, tempMark) {\n  if (!IsNullOrEmpty(tempStr)) {\n    var tempRes = tempStr.substring(tempStr.indexOf(tempMark) + tempMark.length);\n\n    if (!IsNullOrEmpty(tempRes)) {\n      return tempRes;\n    } else {\n      return tempStr;\n    }\n  }\n\n  return \"\";\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 11)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 14)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvcG1KU1Rvb2xzLmpzIl0sIm5hbWVzIjpbImFwcCIsImdldEFwcCIsIm1vZHVsZSIsImV4cG9ydHMiLCJHZXRTZXFJRCIsIklzTnVsbE9yRW1wdHkiLCJHZXRFcnJNc2dWYWx1ZSIsIkdldFN0ciIsIkdldFN1Yk9iaiIsIkdldFN1Yk9ialN0ciIsImxpZ2h0T25lQ29udHJvbEZyb21MaXN0IiwibGlnaHRPbmVDb250cm9sRnJvbUxpc3QyIiwiZ2V0T25lQ29udHJvbEZyb21MaXN0IiwiZ2V0U3FJREZyb21MaXN0IiwiZ2V0UHJvcGVydGllc0Zyb21WYXJpYW50IiwiZ2V0R2VuZXJhbFVuaXRMaXN0IiwiZ2V0RmlsZVN1ZmZpeCIsInJlcGxhY2VPbmVDb250cm9sRnJvbUxpc3QiLCJnZXRTZXFJRGZyb21BcnIiLCJnZXRUaW1lU2hvcnRTdHJGcm9tVGltZSIsImNhbFBNQ09JIiwiRGVsZXRlRnJvbUxpc3QiLCJkYXRlQWRkRGF5cyIsImlucHV0dmFsaWRhdGlvbiIsImdldFZhbHVlU3FJbkxpc3QiLCJnZXRTdHJMZWZ0IiwiZ2V0U3RyUmlnaHQiLCJsaWdodE9uZUNvbnRyb2wiLCJ1bkxpZ2h0T25lQ29udHJvbCIsImNhbE15UE1DT0kiLCJnZXRPbmVDb250cm9sRnJvbUxpc3RCeU15IiwiY2FsUE1Vc2VyIiwiZ2V0RGlzdGFuY2UiLCJVcGRhdGVQcm9kdWN0U3RvcmdlIiwiZ2V0UE1Kb2JUeXBlIiwiR2V0TnVtIiwiR2V0U3RhdGVTdHIiLCJnZXRTdHJzdWJzdHJpbmciLCJEYXRlQ2hhbmdlIiwic3RyaW5nVG9EYXRlIiwiZ2V0U3RyTGVmdEZyb21Gcm9udCIsImdldFN0clJpZ2h0RnJvbUZyb250IiwidHlwZVN0ciIsImludENvdW50Iiwibm93IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwiaG91ciIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJzZWNvbmRzIiwiZ2V0U2Vjb25kcyIsIlJlc1N0ckxpc3QiLCJqIiwibGVuIiwiJGNoYXJzIiwibWF4UG9zIiwibGVuZ3RoIiwicHdkIiwiaSIsImNoYXJBdCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIlJlc1N0ciIsInB1c2giLCJPYmpWYWxlIiwidG9TdHJpbmciLCJvYmpWYWwiLCJ1bmRlZmluZWQiLCJFcnJNc2dTdHIiLCJUZW1wUyIsInN1YnN0cmluZyIsImluZGV4T2YiLCJlcnJvciIsImxhc3RTdHIiLCJ0b1VwcGVyQ2FzZSIsIklzTm90RXhpc3QiLCJHZXRMZW5ndGgiLCJUZW1wSSIsIlRlbXBMaXN0IiwiVGVtcE9iaiIsImUiLCJzZWxlY3RlZElEIiwiYnRuU2VsZWN0ZWRTdHlsZSIsImJ0blVuU2VsZWN0ZWRTdHlsZSIsIl9pZCIsInNlbGVjdGVkU3R5bGUiLCJpc0NvbnZlcnNlIiwidGVtcFBJIiwidGVtcFZhcmlhbnQiLCJmaWxsQmxvY2siLCJmaWxsUmVtaW5kIiwiZmlsbEl0ZW1MaXN0IiwiS2V5IiwiZmlsbEl0ZW0iLCJmaWxsVGl0bGUiLCJmaWxsVGl0bGVSaWdodCIsImZpbGxDaGFydFVSTCIsImZpbGxUaXAiLCJmaWxsVHlwZSIsImZpbGxlVmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiZmlsbEhlbHBMaXN0IiwiZmlsbElEIiwiZmlsZVN0ciIsIlRlbXBGaWxlU3VmZml4IiwibGFzdEluZGV4T2YiLCJuZXdWYXJpYW50IiwidGVtcFYiLCJ0ZW1wS2V5IiwidGVtcFRpbWVTdHIiLCJ0ZW1wbm93IiwidGVtcFRpbWUiLCJ0ZW1wbm93RGF0ZSIsInRlbXBUaW1lRGF0ZSIsImZpbGxaZXJvIiwidGVtcEludCIsIlBNQ09JIiwiY2FsQ2hhbmdlVGltZVN0ciIsIlBNQ2hhbmdlVGltZSIsImNhbFpQdWJsaXNoVGltZVNob3J0IiwiWkNUUHVibGlzaFRpbWUiLCJQTU9yZGVyU3RhdGUiLCJjYWxQTVN0YXRlIiwiY2FsVGFza1N0YXRlcyIsImNhbFN0YWdlTmFtZSIsImNhbFN0YWdlU3R5bGUiLCJaQ1RDT0lMYXRpdCIsIlpDVENPSUxvbmdpdCIsImNhbFRhc2tEaXN0YW5jZSIsImdsb2JhbERhdGEiLCJDdXJyZW50TGF0aXR1ZGUiLCJDdXJyZW50TG9uZ2l0dWRlIiwicm91bmQiLCJzcGxpY2UiLCJkYXRhU3RyIiwiZGF5Q291bnQiLCJzdHJkYXRlIiwiaXNkYXRlIiwicmVwbGFjZSIsInBkYXRlIiwidmFsIiwidHlwZSIsInRlc3QiLCJpbnB1dFZhbHVlIiwiVmFsdWVMaXN0IiwidGVtcFN0ciIsInRlbXBNYXJrIiwidGVtcFJlcyIsInN1YnN0ciIsInRlbXBDb250cm9sIiwiWkNUQ2hhbmdlVGltZSIsIlpDVFRhc2tTdGF0ZSIsIlpDVElzRGVsZXRlZCIsIlpDVFBNQ09JX2lkIiwiUE1Vc2VyIiwiY2FsQmluZFRpbWVTaG9ydFN0ciIsIldYTGFzdEJpbmRUaW1lIiwiVGVtcE1haW5JbmZvU3RyIiwiUE1Vc2VyTmFtZSIsIlpDVFVzZXJTZXgiLCJaQ1RCaXJ0aFllYXIiLCJUZW1wTm93Iiwibm93WWVhciIsIlRlbXBCaXJ0aFllYXIiLCJjYWxBZ2VzIiwiY2FsTWFpbkluZm8iLCJQTVVzZXJJRCIsIklzUmVsYXRlZCIsInJlbGF0ZWRUaW1lIiwicmVsYXRlZFRpbWVTaG9ydCIsImxhMSIsImxvMSIsImxhMiIsImxvMiIsIkxhMSIsIlBJIiwiTGEyIiwiTGEzIiwiTGIzIiwicyIsImFzaW4iLCJzcXJ0IiwicG93Iiwic2luIiwiY29zIiwidG9GaXhlZCIsIlRlbXBQcm9kdWN0SUQiLCJUZW1wUHJvZHVjdE5hbWUiLCJUZW1wU3RvcmFnZVByb2R1Y3RBcnIiLCJBcnJheSIsIlRlbXBQcm9kdWN0U3RyIiwid3giLCJnZXRTdG9yYWdlU3luYyIsIlRlbXBOZXdQcm9kdWN0IiwiT2JqZWN0IiwiUHJvZHVjdElEIiwiUHJvZHVjdE5hbWUiLCJUZW1wTmV3UHJvZHVjdEFyciIsInNldFN0b3JhZ2VTeW5jIiwicGFyc2UiLCJUZW1wVGhpc1Byb2R1Y3QiLCJmaW5kIiwiVGVtcEFyckNvdW50Iiwic29ydCIsImEiLCJiIiwiSm9iVHlwZUxpc3QiLCJUZW1wTnVtIiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwiVGVtcFN0YXRlIiwiRmlyc3QiLCJsZW50aCIsIlRlbXBKc29uRGF0ZSIsImRhdGVlZSIsInRvSlNPTiIsImRhdGUiLCJ0b0lTT1N0cmluZyIsIlJlZ0V4cCIsIlRlbXBSZWdEYXRlIiwiVGVtcERhdGUiLCJwYXJzZUludCIsIlRlbXBNb250aCIsIlRlbXBEYXkiLCJUZW1wSG91cnMiLCJUZW1wTWludXRlcyIsIlRlbXBTZWNvbmRzIiwic3RyIiwidGVtcFN0cnMiLCJzcGxpdCIsImRhdGVTdHJzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQU1BLEdBQUcsR0FBR0MsTUFBTSxFQUFsQixDLENBQXNCOztBQUV0QkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZDLFVBQVEsRUFBRUEsUUFESztBQUVmQyxlQUFhLEVBQUVBLGFBRkE7QUFHZkMsZ0JBQWMsRUFBRUEsY0FIRDtBQUlmQyxRQUFNLEVBQUVBLE1BSk87QUFLZkMsV0FBUyxFQUFFQSxTQUxJO0FBTWZDLGNBQVksRUFBRUEsWUFOQztBQU9mQyx5QkFBdUIsRUFBRUEsdUJBUFY7QUFRZkMsMEJBQXdCLEVBQUVBLHdCQVJYO0FBU2ZDLHVCQUFxQixFQUFFQSxxQkFUUjtBQVVmQyxpQkFBZSxFQUFFQSxlQVZGO0FBV2ZDLDBCQUF3QixFQUFFQSx3QkFYWDtBQVlmQyxvQkFBa0IsRUFBRUEsa0JBWkw7QUFhZkMsZUFBYSxFQUFFQSxhQWJBO0FBY2ZDLDJCQUF5QixFQUFFQSx5QkFkWjtBQWVmQyxpQkFBZSxFQUFFQSxlQWZGO0FBZ0JmQyx5QkFBdUIsRUFBRUEsdUJBaEJWO0FBaUJmQyxVQUFRLEVBQUVBLFFBakJLO0FBa0JmQyxnQkFBYyxFQUFFQSxjQWxCRDtBQW1CZkMsYUFBVyxFQUFYQSxXQW5CZTtBQW9CZkMsaUJBQWUsRUFBRUEsZUFwQkY7QUFxQmZDLGtCQUFnQixFQUFFQSxnQkFyQkg7QUFzQmZDLFlBQVUsRUFBRUEsVUF0Qkc7QUF1QmZDLGFBQVcsRUFBRUEsV0F2QkU7QUF3QmZDLGlCQUFlLEVBQUVBLGVBeEJGO0FBeUJmQyxtQkFBaUIsRUFBRUEsaUJBekJKO0FBMEJmQyxZQUFVLEVBQUVBLFVBMUJHO0FBMkJmQywyQkFBeUIsRUFBRUEseUJBM0JaO0FBNEJmQyxXQUFTLEVBQUVBLFNBNUJJO0FBNkJmQyxhQUFXLEVBQUVBLFdBN0JFO0FBOEJmQyxxQkFBbUIsRUFBRUEsbUJBOUJOO0FBK0JmQyxjQUFZLEVBQUVBLFlBL0JDO0FBZ0NmQyxRQUFNLEVBQUVBLE1BaENPO0FBaUNmQyxhQUFXLEVBQUVBLFdBakNFO0FBa0NmQyxpQkFBZSxFQUFFQSxlQWxDRjtBQW1DZkMsWUFBVSxFQUFFQSxVQW5DRztBQW9DZkMsY0FBWSxFQUFFQSxZQXBDQztBQXFDZkMscUJBQW1CLEVBQUVBLG1CQXJDTjtBQXNDZkMsc0JBQW9CLEVBQUVBLG9CQXRDUCxFQUFqQjtBQXVDRzs7QUFFSCxTQUFTckMsUUFBVCxDQUFrQnNDLE9BQWxCLEVBQTJCQyxRQUEzQixFQUFxQztBQUNuQyxNQUFNQyxHQUFHLEdBQUcsSUFBSUMsSUFBSixFQUFaO0FBQ0EsTUFBSUMsSUFBSSxHQUFHRixHQUFHLENBQUNHLFdBQUosRUFBWDtBQUNBRCxNQUFJLEdBQUdBLElBQUksR0FBRyxJQUFkO0FBQ0EsTUFBSUEsSUFBSSxJQUFJLEVBQVIsSUFBY0EsSUFBSSxJQUFJLEVBQTFCLEVBQThCQSxJQUFJLEdBQUdFLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkgsSUFBSSxHQUFHLEVBQTNCLENBQVAsQ0FBOUIsS0FBeUVBLElBQUksR0FBR0UsTUFBTSxDQUFDQyxZQUFQLENBQW9CSCxJQUFJLEdBQUcsRUFBM0IsQ0FBUDtBQUN6RSxNQUFJSSxLQUFLLEdBQUdOLEdBQUcsQ0FBQ08sUUFBSixLQUFpQixDQUE3QjtBQUNBLE1BQUlELEtBQUssSUFBSSxFQUFULElBQWVBLEtBQUssSUFBSSxFQUE1QixFQUFnQ0EsS0FBSyxHQUFHRixNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLEtBQUssR0FBRyxFQUE1QixDQUFSLENBQWhDLEtBQTZFQSxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsS0FBSyxHQUFHLEVBQTVCLENBQVI7QUFDN0UsTUFBSUUsR0FBRyxHQUFHUixHQUFHLENBQUNTLE9BQUosRUFBVjtBQUNBLE1BQUlELEdBQUcsSUFBSSxFQUFQLElBQWFBLEdBQUcsSUFBSSxFQUF4QixFQUE0QkEsR0FBRyxHQUFHSixNQUFNLENBQUNDLFlBQVAsQ0FBb0JHLEdBQUcsR0FBRyxFQUExQixDQUFOLENBQTVCLEtBQXFFQSxHQUFHLEdBQUdKLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkcsR0FBRyxHQUFHLEVBQTFCLENBQU47QUFDckUsTUFBSUUsSUFBSSxHQUFHVixHQUFHLENBQUNXLFFBQUosRUFBWDtBQUNBLE1BQUlELElBQUksSUFBSSxFQUFSLElBQWNBLElBQUksSUFBSSxFQUExQixFQUE4QkEsSUFBSSxHQUFHTixNQUFNLENBQUNDLFlBQVAsQ0FBb0JLLElBQUksR0FBRyxFQUEzQixDQUFQLENBQTlCLEtBQXlFQSxJQUFJLEdBQUdOLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkssSUFBSSxHQUFHLEVBQTNCLENBQVA7QUFDekUsTUFBSUUsT0FBTyxHQUFHWixHQUFHLENBQUNhLFVBQUosRUFBZDtBQUNBLE1BQUlELE9BQU8sSUFBSSxFQUFYLElBQWlCQSxPQUFPLElBQUksRUFBaEMsRUFBb0NBLE9BQU8sR0FBR1IsTUFBTSxDQUFDQyxZQUFQLENBQW9CTyxPQUFPLEdBQUcsRUFBOUIsQ0FBVixDQUFwQyxLQUFxRjtBQUNuRixRQUFJQSxPQUFPLElBQUksRUFBWCxJQUFpQkEsT0FBTyxJQUFJLEVBQWhDLEVBQW9DQSxPQUFPLEdBQUdSLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQk8sT0FBTyxHQUFHLENBQTlCLENBQVYsQ0FBcEMsS0FBb0ZBLE9BQU8sR0FBR1IsTUFBTSxDQUFDQyxZQUFQLENBQW9CTyxPQUFPLEdBQUcsRUFBOUIsQ0FBVjtBQUNyRjtBQUNELE1BQUlFLE9BQU8sR0FBR2QsR0FBRyxDQUFDZSxVQUFKLEVBQWQ7QUFDQSxNQUFJRCxPQUFPLElBQUksRUFBWCxJQUFpQkEsT0FBTyxJQUFJLEVBQWhDLEVBQW9DQSxPQUFPLEdBQUdWLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQlMsT0FBTyxHQUFHLEVBQTlCLENBQVYsQ0FBcEMsS0FBcUY7QUFDbkYsUUFBSUEsT0FBTyxJQUFJLEVBQVgsSUFBaUJBLE9BQU8sSUFBSSxFQUFoQyxFQUFvQ0YsT0FBTyxHQUFHUixNQUFNLENBQUNDLFlBQVAsQ0FBb0JTLE9BQU8sR0FBRyxDQUE5QixDQUFWLENBQXBDLEtBQW9GQSxPQUFPLEdBQUdWLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQlMsT0FBTyxHQUFHLEVBQTlCLENBQVY7QUFDckY7QUFDRCxNQUFJRSxVQUFVLEdBQUcsRUFBakI7O0FBRUEsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbEIsUUFBcEIsRUFBOEJrQixDQUFDLEVBQS9CLEVBQW1DO0FBQ2pDO0FBQ0EsUUFBSUMsR0FBRyxHQUFHLENBQVY7QUFDQUEsT0FBRyxHQUFHQSxHQUFHLElBQUksRUFBYjtBQUNBLFFBQUlDLE1BQU0sR0FBRyw4QkFBYjtBQUNBOztBQUVBLFFBQUlDLE1BQU0sR0FBR0QsTUFBTSxDQUFDRSxNQUFwQjtBQUNBLFFBQUlDLEdBQUcsR0FBRyxFQUFWOztBQUVBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0wsR0FBcEIsRUFBeUJLLENBQUMsRUFBMUIsRUFBOEI7QUFDNUJELFNBQUcsSUFBSUgsTUFBTSxDQUFDSyxNQUFQLENBQWNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JQLE1BQTNCLENBQWQsQ0FBUDtBQUNEOztBQUVELFFBQUlRLE1BQU0sR0FBRzlCLE9BQU8sR0FBR0ksSUFBVixHQUFpQkksS0FBakIsR0FBeUJFLEdBQXpCLEdBQStCRSxJQUEvQixHQUFzQ0UsT0FBdEMsR0FBZ0RFLE9BQWhELEdBQTBEUSxHQUF2RTtBQUNBTixjQUFVLENBQUNhLElBQVgsQ0FBZ0JELE1BQWhCO0FBQ0Q7O0FBRUQsU0FBT1osVUFBUDtBQUNELEMsQ0FBQzs7O0FBR0YsU0FBU3JELE1BQVQsQ0FBZ0JtRSxPQUFoQixFQUF5QjtBQUN2QixNQUFJckUsYUFBYSxDQUFDcUUsT0FBRCxDQUFqQixFQUE0QjtBQUMxQixXQUFPLEVBQVA7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPQSxPQUFPLENBQUNDLFFBQVIsRUFBUDtBQUNEO0FBQ0YsQyxDQUFDOzs7QUFHRixTQUFTdEUsYUFBVCxDQUF1QnVFLE1BQXZCLEVBQStCO0FBQzdCO0FBQ0EsTUFBSUEsTUFBTSxLQUFLQyxTQUFmLEVBQTBCO0FBQ3hCO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsTUFBSUQsTUFBTSxJQUFJLElBQWQsRUFBb0I7QUFDbEI7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFFRCxNQUFJQSxNQUFNLElBQUksV0FBZCxFQUEyQjtBQUN6QjtBQUNBLFdBQU8sSUFBUDtBQUNELEdBZjRCLENBZTNCOzs7QUFHRixNQUFJLE9BQU9BLE1BQVAsS0FBa0IsUUFBdEIsRUFBZ0M7QUFDOUIsV0FBTyxLQUFQO0FBQ0Q7O0FBRUQsTUFBSUEsTUFBTSxJQUFJLEVBQVYsSUFBZ0JBLE1BQU0sSUFBSSxJQUExQixJQUFrQ0EsTUFBTSxJQUFJQyxTQUFoRCxFQUEyRDtBQUN6RDtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUVELE1BQUksQ0FBQ0QsTUFBTCxFQUFhO0FBQ1g7QUFDQSxXQUFPLElBQVA7QUFDRCxHQTlCNEIsQ0E4QjNCOzs7QUFHRixNQUFJQSxNQUFNLENBQUNYLE1BQVAsSUFBaUIsQ0FBckIsRUFBd0I7QUFDdEI7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFFRCxTQUFPLEtBQVA7QUFDRCxDLENBQUM7OztBQUdGLFNBQVMzRCxjQUFULENBQXdCd0UsU0FBeEIsRUFBbUM7QUFDakMsTUFBSXpFLGFBQWEsQ0FBQ3lFLFNBQUQsQ0FBakIsRUFBOEI7QUFDNUIsV0FBTyxFQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBSUMsS0FBSjs7QUFFQSxRQUFJO0FBQ0ZBLFdBQUssR0FBR0QsU0FBUyxDQUFDRSxTQUFWLENBQW9CRixTQUFTLENBQUNHLE9BQVYsQ0FBa0IsR0FBbEIsSUFBeUIsQ0FBN0MsRUFBZ0RILFNBQVMsQ0FBQ2IsTUFBMUQsQ0FBUjtBQUNELEtBRkQsQ0FFRSxPQUFPaUIsS0FBUCxFQUFjO0FBQ2Q7QUFDQSxhQUFPSCxLQUFQO0FBQ0Q7O0FBRUQsUUFBSTFFLGFBQWEsQ0FBQzBFLEtBQUQsQ0FBakIsRUFBMEI7QUFDeEIsYUFBTyxFQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBSUksT0FBTyxHQUFHSixLQUFLLENBQUNLLFdBQU4sRUFBZDs7QUFFQSxVQUFJRCxPQUFPLElBQUksSUFBZixFQUFxQjtBQUNuQixlQUFPQSxPQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBT0osS0FBUDtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEMsQ0FBQzs7O0FBR0YsU0FBU00sVUFBVCxDQUFvQlQsTUFBcEIsRUFBNEI7QUFDMUIsTUFBSUEsTUFBTSxLQUFLQyxTQUFmLEVBQTBCO0FBQ3hCO0FBQ0EsV0FBTyxJQUFQO0FBQ0QsR0FIRCxNQUdPO0FBQ0wsV0FBTyxLQUFQO0FBQ0Q7QUFDRixDLENBQUM7OztBQUdGLFNBQVNTLFNBQVQsQ0FBbUJWLE1BQW5CLEVBQTJCO0FBQ3pCLE1BQUl2RSxhQUFhLENBQUN1RSxNQUFELENBQWpCLEVBQTJCO0FBQ3pCLFdBQU8sQ0FBUDtBQUNEOztBQUVELE1BQUlXLEtBQUssR0FBRyxDQUFaOztBQUVBLE1BQUk7QUFDRkEsU0FBSyxHQUFHWCxNQUFNLENBQUNYLE1BQWY7QUFDQSxXQUFPc0IsS0FBUDtBQUNELEdBSEQsQ0FHRSxPQUFPTCxLQUFQLEVBQWM7QUFDZCxXQUFPSyxLQUFQO0FBQ0Q7QUFDRixDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLFNBQVMvRSxTQUFULENBQW1CZ0YsUUFBbkIsRUFBNkI7QUFDM0IsTUFBSW5GLGFBQWEsQ0FBQ21GLFFBQUQsQ0FBakIsRUFBNkI7QUFDM0I7QUFDRSxhQUFPLEVBQVA7QUFDRDs7QUFFSCxNQUFJO0FBQ0YsUUFBSW5GLGFBQWEsQ0FBQ21GLFFBQVEsQ0FBQyxDQUFELENBQVQsQ0FBakIsRUFBZ0M7QUFDOUI7QUFDRSxlQUFPLEVBQVA7QUFDRDs7QUFFSCxRQUFJQyxPQUFPLEdBQUdELFFBQVEsQ0FBQyxDQUFELENBQXRCOztBQUVBLFNBQUssSUFBSXJCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdxQixRQUFRLENBQUN2QixNQUE3QixFQUFxQ0UsQ0FBQyxFQUF0QyxFQUEwQztBQUN4QyxVQUFJLENBQUM5RCxhQUFhLENBQUNtRixRQUFRLENBQUNyQixDQUFELENBQVQsQ0FBbEIsRUFBaUM7QUFDL0IsWUFBSSxDQUFDOUQsYUFBYSxDQUFDb0YsT0FBTyxDQUFDRCxRQUFRLENBQUNyQixDQUFELENBQVQsQ0FBUixDQUFsQixFQUEwQztBQUN4QztBQUNFc0IsbUJBQU8sR0FBR0EsT0FBTyxDQUFDRCxRQUFRLENBQUNyQixDQUFELENBQVQsQ0FBakIsQ0FERixDQUNrQztBQUNqQyxXQUhILE1BR1M7QUFDUCxpQkFBTyxFQUFQLENBRE8sQ0FDSTtBQUNaO0FBQ0YsT0FQRCxNQU9PO0FBQ0wsZUFBTyxFQUFQLENBREssQ0FDTTtBQUNaO0FBQ0Y7QUFDRixHQXBCRCxDQW9CRSxPQUFPdUIsQ0FBUCxFQUFVO0FBQ1o7QUFDRSxXQUFPLEVBQVA7QUFDRDs7QUFFRCxTQUFPRCxPQUFQO0FBQ0QsQyxDQUFDOzs7QUFHRixTQUFTaEYsWUFBVCxDQUFzQitFLFFBQXRCLEVBQWdDO0FBQzlCLFNBQU9qRixNQUFNLENBQUNDLFNBQVMsQ0FBQ2dGLFFBQUQsQ0FBVixDQUFiO0FBQ0QsQyxDQUFDOztBQUVGOzs7Ozs7Ozs7Ozs7O0FBYUEsU0FBUzlFLHVCQUFULENBQWlDaUYsVUFBakMsRUFBNkNILFFBQTdDLEVBQXVEO0FBQ3JEO0FBQ0EsTUFBSUksZ0JBQWdCLEdBQUcsZ0NBQXZCLENBRnFELENBRUk7O0FBRXpELE1BQUlDLGtCQUFrQixHQUFHLGdDQUF6QixDQUpxRCxDQUlNOztBQUUzRCxNQUFJLENBQUN4RixhQUFhLENBQUNzRixVQUFELENBQWQsSUFBOEIsQ0FBQ3RGLGFBQWEsQ0FBQ21GLFFBQUQsQ0FBaEQsRUFBNEQ7QUFDMUQsUUFBSUEsUUFBUSxDQUFDdkIsTUFBYixFQUFxQjtBQUNuQixXQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdxQixRQUFRLENBQUN2QixNQUE3QixFQUFxQ0UsQ0FBQyxFQUF0QyxFQUEwQztBQUN4QyxZQUFJcUIsUUFBUSxDQUFDckIsQ0FBRCxDQUFSLENBQVkyQixHQUFaLElBQW1CSCxVQUF2QixFQUFtQztBQUNqQ0gsa0JBQVEsQ0FBQ3JCLENBQUQsQ0FBUixDQUFZNEIsYUFBWixHQUE0QkgsZ0JBQTVCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xKLGtCQUFRLENBQUNyQixDQUFELENBQVIsQ0FBWTRCLGFBQVosR0FBNEJGLGtCQUE1QjtBQUNEO0FBQ0Y7QUFDRixLQVJELE1BUU87QUFDTCxVQUFJTCxRQUFRLENBQUNNLEdBQVQsSUFBZ0JILFVBQXBCLEVBQWdDO0FBQzlCSCxnQkFBUSxDQUFDTyxhQUFULEdBQXlCSCxnQkFBekI7QUFDRCxPQUZELE1BRU87QUFDTEosZ0JBQVEsQ0FBQ08sYUFBVCxHQUF5QkYsa0JBQXpCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsQyxDQUFDO0FBQ0Y7OztBQUdBLFNBQVNsRix3QkFBVCxDQUFrQ2dGLFVBQWxDLEVBQThDSCxRQUE5QyxFQUF3RFEsVUFBeEQsRUFBb0U7QUFDbEUsTUFBSUosZ0JBQWdCLEdBQUcsZ0NBQXZCLENBRGtFLENBQ1Q7O0FBRXpELE1BQUlDLGtCQUFrQixHQUFHLGdDQUF6QixDQUhrRSxDQUdQOztBQUUzRCxNQUFJRyxVQUFVLElBQUksSUFBbEIsRUFBd0I7QUFDdEJ0RiwyQkFBdUIsQ0FBQ2lGLFVBQUQsRUFBYUgsUUFBYixDQUF2QjtBQUNELEdBRkQsTUFFTztBQUNMLFFBQUlTLE1BQU0sR0FBR3JGLHFCQUFxQixDQUFDK0UsVUFBRCxFQUFhSCxRQUFiLENBQWxDOztBQUVBLFFBQUlTLE1BQU0sQ0FBQ0YsYUFBUCxJQUF3QkgsZ0JBQTVCLEVBQThDO0FBQzVDSyxZQUFNLENBQUNGLGFBQVAsR0FBdUJGLGtCQUF2QjtBQUNELEtBRkQsTUFFTztBQUNMbkYsNkJBQXVCLENBQUNpRixVQUFELEVBQWFILFFBQWIsQ0FBdkI7QUFDRDtBQUNGO0FBQ0YsQyxDQUFDOztBQUVGOzs7Ozs7Ozs7Ozs7QUFZQSxTQUFTNUUscUJBQVQsQ0FBK0IrRSxVQUEvQixFQUEyQ0gsUUFBM0MsRUFBcUQ7QUFDbkQsTUFBSSxDQUFDbkYsYUFBYSxDQUFDc0YsVUFBRCxDQUFkLElBQThCLENBQUN0RixhQUFhLENBQUNtRixRQUFELENBQWhELEVBQTREO0FBQzFELFFBQUlBLFFBQVEsQ0FBQ3ZCLE1BQWIsRUFBcUI7QUFDbkIsV0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHcUIsUUFBUSxDQUFDdkIsTUFBN0IsRUFBcUNFLENBQUMsRUFBdEMsRUFBMEM7QUFDeEMsWUFBSXFCLFFBQVEsQ0FBQ3JCLENBQUQsQ0FBUixDQUFZMkIsR0FBWixJQUFtQkgsVUFBdkIsRUFBbUM7QUFDakM7QUFDRSxtQkFBT0gsUUFBUSxDQUFDckIsQ0FBRCxDQUFmO0FBQ0Q7QUFDSjtBQUNGLEtBUEQsTUFPTztBQUNMLFVBQUlxQixRQUFRLENBQUNNLEdBQVQsSUFBZ0JILFVBQXBCLEVBQWdDO0FBQzlCO0FBQ0UsaUJBQU9ILFFBQVA7QUFDRDtBQUNKO0FBQ0Y7O0FBRUQsU0FBTyxFQUFQLENBakJtRCxDQWlCeEM7QUFDWixDLENBQUM7O0FBRUY7Ozs7Ozs7Ozs7OztBQVlBLFNBQVMzRSxlQUFULENBQXlCOEUsVUFBekIsRUFBcUNILFFBQXJDLEVBQStDO0FBQzdDLE1BQUksQ0FBQ25GLGFBQWEsQ0FBQ3NGLFVBQUQsQ0FBZCxJQUE4QixDQUFDdEYsYUFBYSxDQUFDbUYsUUFBRCxDQUFoRCxFQUE0RDtBQUMxRCxRQUFJQSxRQUFRLENBQUN2QixNQUFiLEVBQXFCO0FBQ25CLFdBQUssSUFBSUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3FCLFFBQVEsQ0FBQ3ZCLE1BQTdCLEVBQXFDRSxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFlBQUlxQixRQUFRLENBQUNyQixDQUFELENBQVIsQ0FBWTJCLEdBQVosSUFBbUJILFVBQXZCLEVBQW1DO0FBQ2pDO0FBQ0UsbUJBQU94QixDQUFQO0FBQ0Q7QUFDSjtBQUNGLEtBUEQsTUFPTztBQUNMLFVBQUlxQixRQUFRLENBQUNNLEdBQVQsSUFBZ0JILFVBQXBCLEVBQWdDO0FBQzlCO0FBQ0UsaUJBQU8sQ0FBQyxDQUFSLENBREYsQ0FDYTtBQUNaO0FBQ0o7QUFDRjs7QUFFRCxTQUFPLENBQUMsQ0FBUixDQWpCNkMsQ0FpQmxDO0FBQ1osQyxDQUFDOzs7QUFHRixTQUFTN0Usd0JBQVQsQ0FBa0NvRixXQUFsQyxFQUErQztBQUM3QyxNQUFJN0YsYUFBYSxDQUFDNkYsV0FBRCxDQUFqQixFQUFnQztBQUM5QixXQUFPLElBQVA7QUFDRDs7QUFFRCxNQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFDQUEsV0FBUyxDQUFDQyxVQUFWLEdBQXVCLEVBQXZCO0FBQ0FELFdBQVMsQ0FBQ0UsWUFBVixHQUF5QixFQUF6Qjs7QUFFQSxPQUFLLElBQUlDLEdBQVQsSUFBZ0JKLFdBQWhCLEVBQTZCO0FBQzNCLFFBQUlLLFFBQVEsR0FBRyxFQUFmO0FBQ0FBLFlBQVEsQ0FBQ0MsU0FBVCxHQUFxQkYsR0FBckIsRUFBMEJDLFFBQVEsQ0FBQ0UsY0FBVCxHQUEwQixNQUFwRCxFQUE0REYsUUFBUSxDQUFDRyxZQUFULEdBQXdCLEVBQXBGLEVBQXdGO0FBQ3hGSCxZQUFRLENBQUNJLE9BQVQsR0FBbUIsTUFEbkIsRUFDMkJKLFFBQVEsQ0FBQ0ssUUFBVCxHQUFvQixLQUQvQyxFQUNzRDtBQUN0REwsWUFBUSxDQUFDTSxVQUFULEdBQXNCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWIsV0FBVyxDQUFDSSxHQUFELENBQTFCLENBRnRCLEVBRXdEQyxRQUFRLENBQUNTLFlBQVQsR0FBd0IsRUFGaEYsRUFFb0Y7QUFDcEZULFlBQVEsQ0FBQ1UsTUFBVCxHQUFrQixFQUhsQixFQUdzQjtBQUN0QmQsYUFBUyxDQUFDRSxZQUFWLENBQXVCNUIsSUFBdkIsQ0FBNEI4QixRQUE1QixDQUpBO0FBS0Q7O0FBRUQsU0FBT0osU0FBUDtBQUNELEMsQ0FBQzs7O0FBR0YsU0FBU3BGLGtCQUFULEdBQThCO0FBQzVCLE1BQUl5RSxRQUFRLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsSUFBL0IsRUFBcUMsR0FBckMsRUFBMEMsR0FBMUMsRUFBK0MsSUFBL0MsRUFBcUQsSUFBckQsRUFBMkQsR0FBM0QsRUFBZ0UsS0FBaEUsQ0FBZjtBQUNBLFNBQU9BLFFBQVA7QUFDRCxDLENBQUM7OztBQUdGLFNBQVN4RSxhQUFULENBQXVCa0csT0FBdkIsRUFBZ0M7QUFDOUIsTUFBSSxDQUFDN0csYUFBYSxDQUFDNkcsT0FBRCxDQUFsQixFQUE2QjtBQUMzQixRQUFJQyxjQUFjLEdBQUdELE9BQU8sQ0FBQ2xDLFNBQVIsQ0FBa0JrQyxPQUFPLENBQUNFLFdBQVIsQ0FBb0IsR0FBcEIsQ0FBbEIsQ0FBckI7O0FBRUEsUUFBSSxDQUFDL0csYUFBYSxDQUFDOEcsY0FBRCxDQUFsQixFQUFvQztBQUNsQyxhQUFPQSxjQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLEVBQVA7QUFDRCxDLENBQUM7O0FBRUY7Ozs7Ozs7Ozs7Ozs7QUFhQSxTQUFTbEcseUJBQVQsQ0FBbUMwRSxVQUFuQyxFQUErQzBCLFVBQS9DLEVBQTJEN0IsUUFBM0QsRUFBcUU7QUFDbkUsTUFBSSxDQUFDbkYsYUFBYSxDQUFDc0YsVUFBRCxDQUFkLElBQThCLENBQUN0RixhQUFhLENBQUNtRixRQUFELENBQWhELEVBQTREO0FBQzFELFFBQUlBLFFBQVEsQ0FBQ3ZCLE1BQWIsRUFBcUI7QUFDbkIsV0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHcUIsUUFBUSxDQUFDdkIsTUFBN0IsRUFBcUNFLENBQUMsRUFBdEMsRUFBMEM7QUFDeEMsWUFBSXFCLFFBQVEsQ0FBQ3JCLENBQUQsQ0FBUixDQUFZMkIsR0FBWixJQUFtQkgsVUFBdkIsRUFBbUM7QUFDakM7QUFDRUgsb0JBQVEsQ0FBQ3JCLENBQUQsQ0FBUixHQUFja0QsVUFBZDtBQUNEO0FBQ0o7QUFDRixLQVBELE1BT087QUFDTCxVQUFJN0IsUUFBUSxDQUFDTSxHQUFULElBQWdCSCxVQUFwQixFQUFnQztBQUM5QjtBQUNFSCxrQkFBUSxDQUFDckIsQ0FBRCxDQUFSLEdBQWNrRCxVQUFkO0FBQ0Q7QUFDSjtBQUNGO0FBQ0YsQyxDQUFDOztBQUVGOzs7Ozs7Ozs7Ozs7QUFZQSxTQUFTbkcsZUFBVCxDQUF5Qm9HLEtBQXpCLEVBQWdDOUIsUUFBaEMsRUFBMEM7QUFDeEMsTUFBSW5GLGFBQWEsQ0FBQ2lILEtBQUQsQ0FBakIsRUFBMEI7QUFDeEIsV0FBTyxDQUFQO0FBQ0Q7O0FBRUQsTUFBSWpILGFBQWEsQ0FBQ21GLFFBQUQsQ0FBakIsRUFBNkI7QUFDM0IsV0FBTyxDQUFQO0FBQ0Q7O0FBRUQsT0FBSyxJQUFJK0IsT0FBVCxJQUFvQi9CLFFBQXBCLEVBQThCO0FBQzVCLFFBQUlBLFFBQVEsQ0FBQytCLE9BQUQsQ0FBUixJQUFxQkQsS0FBekIsRUFBZ0M7QUFDOUIsYUFBT0MsT0FBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxDQUFQO0FBQ0QsQyxDQUFDOztBQUVGOzs7Ozs7Ozs7Ozs7QUFZQSxTQUFTcEcsdUJBQVQsQ0FBaUNxRyxXQUFqQyxFQUE4QztBQUM5QztBQUNFLE1BQUluSCxhQUFhLENBQUNtSCxXQUFELENBQWpCLEVBQWdDO0FBQzlCLFdBQU8sRUFBUDtBQUNEOztBQUVELE1BQUlDLE9BQU8sR0FBRyxJQUFJNUUsSUFBSixFQUFkO0FBQ0EsTUFBSTZFLFFBQVEsR0FBRyxJQUFJN0UsSUFBSixDQUFTMkUsV0FBVCxDQUFmO0FBQ0EsTUFBSUcsV0FBVyxHQUFHRixPQUFPLENBQUMxRSxXQUFSLEtBQXdCLEdBQXhCLElBQStCMEUsT0FBTyxDQUFDdEUsUUFBUixLQUFxQixDQUFwRCxJQUF5RCxHQUF6RCxHQUErRHNFLE9BQU8sQ0FBQ3BFLE9BQVIsRUFBakY7QUFDQSxNQUFJdUUsWUFBWSxHQUFHRixRQUFRLENBQUMzRSxXQUFULEtBQXlCLEdBQXpCLElBQWdDMkUsUUFBUSxDQUFDdkUsUUFBVCxLQUFzQixDQUF0RCxJQUEyRCxHQUEzRCxHQUFpRXVFLFFBQVEsQ0FBQ3JFLE9BQVQsRUFBcEY7QUFDQSxNQUFJbUIsTUFBTSxHQUFHLEVBQWI7O0FBRUEsTUFBSW1ELFdBQVcsSUFBSUMsWUFBbkIsRUFBaUM7QUFDL0JwRCxVQUFNLEdBQUdxRCxRQUFRLENBQUNILFFBQVEsQ0FBQ25FLFFBQVQsRUFBRCxDQUFSLEdBQWdDLEdBQWhDLEdBQXNDc0UsUUFBUSxDQUFDSCxRQUFRLENBQUNqRSxVQUFULEVBQUQsQ0FBdkQ7QUFDRCxHQUZELE1BRU87QUFDTGUsVUFBTSxHQUFHcUQsUUFBUSxDQUFDSCxRQUFRLENBQUN2RSxRQUFULEtBQXNCLENBQXZCLENBQVIsR0FBb0MsR0FBcEMsR0FBMEMwRSxRQUFRLENBQUNILFFBQVEsQ0FBQ3JFLE9BQVQsS0FBcUIsRUFBdEIsQ0FBM0Q7QUFDRDs7QUFFRCxTQUFPbUIsTUFBUDs7QUFFQSxXQUFTcUQsUUFBVCxDQUFrQkMsT0FBbEIsRUFBMkI7QUFDM0I7QUFDRSxRQUFJQSxPQUFPLEdBQUcsRUFBZCxFQUFrQjtBQUNoQixhQUFPLE1BQU1BLE9BQU8sQ0FBQ25ELFFBQVIsRUFBYjtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9tRCxPQUFPLENBQUNuRCxRQUFSLEVBQVA7QUFDRDtBQUNGO0FBQ0YsQyxDQUFDOztBQUVGOzs7Ozs7Ozs7Ozs7QUFZQSxTQUFTdkQsUUFBVCxDQUFrQjJHLEtBQWxCLEVBQXlCO0FBQ3pCO0FBQ0U7QUFDQUEsT0FBSyxDQUFDQyxnQkFBTixHQUF5QjdHLHVCQUF1QixDQUFDNEcsS0FBSyxDQUFDRSxZQUFQLENBQWhEO0FBQ0FGLE9BQUssQ0FBQ0csb0JBQU4sR0FBNkIvRyx1QkFBdUIsQ0FBQzRHLEtBQUssQ0FBQ0ksY0FBUCxDQUFwRDs7QUFFQSxVQUFRSixLQUFLLENBQUNLLFlBQWQ7QUFDRSxTQUFLLFVBQUw7QUFDRTtBQUNFTCxhQUFLLENBQUNNLFVBQU4sR0FBbUIsS0FBbkI7QUFDQU4sYUFBSyxDQUFDTyxhQUFOLEdBQXNCLENBQUM7QUFDckJDLHNCQUFZLEVBQUUsTUFETztBQUVyQkMsdUJBQWEsRUFBRSxpREFGTSxFQUFEO0FBR25CO0FBQ0RELHNCQUFZLEVBQUUsTUFEYjtBQUVEQyx1QkFBYSxFQUFFLGlEQUZkLEVBSG1CO0FBTW5CO0FBQ0RELHNCQUFZLEVBQUUsTUFEYjtBQUVEQyx1QkFBYSxFQUFFLGlEQUZkLEVBTm1CO0FBU25CO0FBQ0RELHNCQUFZLEVBQUUsTUFEYjtBQUVEQyx1QkFBYSxFQUFFLGlEQUZkLEVBVG1CO0FBWW5CO0FBQ0RELHNCQUFZLEVBQUUsTUFEYjtBQUVEQyx1QkFBYSxFQUFFLGlEQUZkLEVBWm1CLENBQXRCOztBQWdCQTtBQUNEOztBQUVILFNBQUssV0FBTDtBQUNFO0FBQ0U7QUFDQVQsYUFBSyxDQUFDTSxVQUFOLEdBQW1CLEtBQW5CO0FBQ0FOLGFBQUssQ0FBQ08sYUFBTixHQUFzQixDQUFDO0FBQ3JCQyxzQkFBWSxFQUFFLE1BRE87QUFFckJDLHVCQUFhLEVBQUUsaURBRk0sRUFBRDtBQUduQjtBQUNERCxzQkFBWSxFQUFFLE1BRGI7QUFFREMsdUJBQWEsRUFBRSxpREFGZCxFQUhtQjtBQU1uQjtBQUNERCxzQkFBWSxFQUFFLE1BRGI7QUFFREMsdUJBQWEsRUFBRSxpREFGZCxFQU5tQjtBQVNuQjtBQUNERCxzQkFBWSxFQUFFLE1BRGI7QUFFREMsdUJBQWEsRUFBRSxpREFGZCxFQVRtQjtBQVluQjtBQUNERCxzQkFBWSxFQUFFLE1BRGI7QUFFREMsdUJBQWEsRUFBRSxpREFGZCxFQVptQixDQUF0Qjs7QUFnQkE7QUFDRDs7QUFFSCxTQUFLLFNBQUw7QUFDRTtBQUNFVCxhQUFLLENBQUNNLFVBQU4sR0FBbUIsS0FBbkI7QUFDQTtBQUNEOztBQUVILFNBQUssVUFBTDtBQUNFO0FBQ0VOLGFBQUssQ0FBQ00sVUFBTixHQUFtQixLQUFuQjtBQUNBO0FBQ0Q7QUFDSDs7QUFFQSxTQUFLLFNBQUw7QUFDRTtBQUNFTixhQUFLLENBQUNNLFVBQU4sR0FBbUIsS0FBbkI7QUFDQU4sYUFBSyxDQUFDTyxhQUFOLEdBQXNCLENBQUM7QUFDckJDLHNCQUFZLEVBQUUsTUFETztBQUVyQkMsdUJBQWEsRUFBRSxrREFGTSxFQUFEO0FBR25CO0FBQ0RELHNCQUFZLEVBQUUsTUFEYjtBQUVEQyx1QkFBYSxFQUFFLGlEQUZkLEVBSG1CO0FBTW5CO0FBQ0RELHNCQUFZLEVBQUUsTUFEYjtBQUVEQyx1QkFBYSxFQUFFLGlEQUZkLEVBTm1CO0FBU25CO0FBQ0RELHNCQUFZLEVBQUUsTUFEYjtBQUVEQyx1QkFBYSxFQUFFLGlEQUZkLEVBVG1CO0FBWW5CO0FBQ0RELHNCQUFZLEVBQUUsTUFEYjtBQUVEQyx1QkFBYSxFQUFFLGlEQUZkLEVBWm1CLENBQXRCOztBQWdCQTtBQUNEOztBQUVILFNBQUssZUFBTDtBQUNFO0FBQ0VULGFBQUssQ0FBQ00sVUFBTixHQUFtQixLQUFuQjtBQUNBTixhQUFLLENBQUNPLGFBQU4sR0FBc0IsQ0FBQztBQUNyQkMsc0JBQVksRUFBRSxNQURPO0FBRXJCQyx1QkFBYSxFQUFFLGtEQUZNLEVBQUQ7QUFHbkI7QUFDREQsc0JBQVksRUFBRSxNQURiO0FBRURDLHVCQUFhLEVBQUUsa0RBRmQsRUFIbUI7QUFNbkI7QUFDREQsc0JBQVksRUFBRSxNQURiO0FBRURDLHVCQUFhLEVBQUUsaURBRmQsRUFObUI7QUFTbkI7QUFDREQsc0JBQVksRUFBRSxNQURiO0FBRURDLHVCQUFhLEVBQUUsaURBRmQsRUFUbUI7QUFZbkI7QUFDREQsc0JBQVksRUFBRSxNQURiO0FBRURDLHVCQUFhLEVBQUUsaURBRmQsRUFabUIsQ0FBdEI7O0FBZ0JBO0FBQ0Q7O0FBRUgsU0FBSyxTQUFMO0FBQ0U7QUFDRVQsYUFBSyxDQUFDTSxVQUFOLEdBQW1CLEtBQW5CO0FBQ0FOLGFBQUssQ0FBQ08sYUFBTixHQUFzQixDQUFDO0FBQ3JCQyxzQkFBWSxFQUFFLE1BRE87QUFFckJDLHVCQUFhLEVBQUUsa0RBRk0sRUFBRDtBQUduQjtBQUNERCxzQkFBWSxFQUFFLE1BRGI7QUFFREMsdUJBQWEsRUFBRSxrREFGZCxFQUhtQjtBQU1uQjtBQUNERCxzQkFBWSxFQUFFLE1BRGI7QUFFREMsdUJBQWEsRUFBRSxrREFGZCxFQU5tQjtBQVNuQjtBQUNERCxzQkFBWSxFQUFFLE1BRGI7QUFFREMsdUJBQWEsRUFBRSxpREFGZCxFQVRtQjtBQVluQjtBQUNERCxzQkFBWSxFQUFFLE1BRGI7QUFFREMsdUJBQWEsRUFBRSxpREFGZCxFQVptQixDQUF0Qjs7QUFnQkE7QUFDRDs7QUFFSCxTQUFLLFlBQUw7QUFDRTtBQUNFVCxhQUFLLENBQUNNLFVBQU4sR0FBbUIsS0FBbkI7QUFDQU4sYUFBSyxDQUFDTyxhQUFOLEdBQXNCLENBQUM7QUFDckJDLHNCQUFZLEVBQUUsTUFETztBQUVyQkMsdUJBQWEsRUFBRSxrREFGTSxFQUFEO0FBR25CO0FBQ0RELHNCQUFZLEVBQUUsTUFEYjtBQUVEQyx1QkFBYSxFQUFFLGtEQUZkLEVBSG1CO0FBTW5CO0FBQ0RELHNCQUFZLEVBQUUsTUFEYjtBQUVEQyx1QkFBYSxFQUFFLGtEQUZkLEVBTm1CO0FBU25CO0FBQ0RELHNCQUFZLEVBQUUsTUFEYjtBQUVEQyx1QkFBYSxFQUFFLGtEQUZkLEVBVG1CO0FBWW5CO0FBQ0RELHNCQUFZLEVBQUUsTUFEYjtBQUVEQyx1QkFBYSxFQUFFLGlEQUZkLEVBWm1CLENBQXRCOztBQWdCQTtBQUNEOztBQUVILFNBQUssUUFBTDtBQUNFO0FBQ0VULGFBQUssQ0FBQ00sVUFBTixHQUFtQixJQUFuQjtBQUNBTixhQUFLLENBQUNPLGFBQU4sR0FBc0IsQ0FBQztBQUNyQkMsc0JBQVksRUFBRSxNQURPO0FBRXJCQyx1QkFBYSxFQUFFLGtEQUZNLEVBQUQ7QUFHbkI7QUFDREQsc0JBQVksRUFBRSxNQURiO0FBRURDLHVCQUFhLEVBQUUsa0RBRmQsRUFIbUI7QUFNbkI7QUFDREQsc0JBQVksRUFBRSxNQURiO0FBRURDLHVCQUFhLEVBQUUsa0RBRmQsRUFObUI7QUFTbkI7QUFDREQsc0JBQVksRUFBRSxNQURiO0FBRURDLHVCQUFhLEVBQUUsa0RBRmQsRUFUbUI7QUFZbkI7QUFDREQsc0JBQVksRUFBRSxNQURiO0FBRURDLHVCQUFhLEVBQUUsa0RBRmQsRUFabUIsQ0FBdEI7O0FBZ0JBO0FBQ0Q7O0FBRUgsU0FBSyxZQUFMO0FBQ0U7QUFDRVQsYUFBSyxDQUFDTSxVQUFOLEdBQW1CLEtBQW5CO0FBQ0E7QUFDRDs7QUFFSCxTQUFLLGVBQUw7QUFDRTtBQUNFTixhQUFLLENBQUNNLFVBQU4sR0FBbUIsTUFBbkI7QUFDQTtBQUNEOztBQUVILFNBQUssV0FBTDtBQUNFO0FBQ0U7QUFDQU4sYUFBSyxDQUFDTSxVQUFOLEdBQW1CLEtBQW5CO0FBQ0E7QUFDRDs7QUFFSDtBQUNFO0FBQ0VOLGFBQUssQ0FBQ00sVUFBTixHQUFtQixNQUFuQjtBQUNBO0FBQ0QsT0FoTUw7QUFpTUU7OztBQUdGLE1BQUloSSxhQUFhLENBQUMwSCxLQUFLLENBQUNVLFdBQVAsQ0FBYixJQUFvQ3BJLGFBQWEsQ0FBQzBILEtBQUssQ0FBQ1csWUFBUCxDQUFyRCxFQUEyRTtBQUN6RVgsU0FBSyxDQUFDWSxlQUFOLEdBQXdCLElBQXhCLENBRHlFLENBQzNDO0FBQy9CLEdBRkQsTUFFTztBQUNMLFFBQUkzSSxHQUFHLENBQUM0SSxVQUFKLENBQWVDLGVBQWYsSUFBa0MsQ0FBbEMsSUFBdUM3SSxHQUFHLENBQUM0SSxVQUFKLENBQWVFLGdCQUFmLElBQW1DLENBQTlFLEVBQWlGO0FBQy9FZixXQUFLLENBQUNZLGVBQU4sR0FBd0IzRyxXQUFXLENBQUNoQyxHQUFHLENBQUM0SSxVQUFKLENBQWVDLGVBQWhCLEVBQWlDN0ksR0FBRyxDQUFDNEksVUFBSixDQUFlRSxnQkFBaEQsRUFBa0VmLEtBQUssQ0FBQ1UsV0FBeEUsRUFBcUZWLEtBQUssQ0FBQ1csWUFBM0YsQ0FBbkM7QUFDQVgsV0FBSyxDQUFDWSxlQUFOLEdBQXdCdEUsSUFBSSxDQUFDMEUsS0FBTCxDQUFXaEIsS0FBSyxDQUFDWSxlQUFqQixDQUF4QjtBQUNBWixXQUFLLENBQUNZLGVBQU4sR0FBd0JaLEtBQUssQ0FBQ1ksZUFBTixHQUF3QixHQUF4QixHQUE4QixRQUE5QixHQUF5Q1osS0FBSyxDQUFDWSxlQUFOLEdBQXdCLElBQXpGO0FBQ0QsS0FKRCxNQUlPO0FBQ0xaLFdBQUssQ0FBQ1ksZUFBTixHQUF3QixJQUF4QjtBQUNEO0FBQ0YsR0FuTkgsQ0FtTkk7O0FBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJELEMsQ0FBQzs7QUFFRjs7Ozs7Ozs7Ozs7O0FBWUEsU0FBU3RILGNBQVQsQ0FBd0JzRSxVQUF4QixFQUFvQ0gsUUFBcEMsRUFBOEM7QUFDNUMsTUFBSSxDQUFDbkYsYUFBYSxDQUFDc0YsVUFBRCxDQUFkLElBQThCLENBQUN0RixhQUFhLENBQUNtRixRQUFELENBQWhELEVBQTREO0FBQzFELFFBQUlBLFFBQVEsQ0FBQ3ZCLE1BQWIsRUFBcUI7QUFDbkIsV0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHcUIsUUFBUSxDQUFDdkIsTUFBN0IsRUFBcUNFLENBQUMsRUFBdEMsRUFBMEM7QUFDeEMsWUFBSXFCLFFBQVEsQ0FBQ3JCLENBQUQsQ0FBUixDQUFZMkIsR0FBWixJQUFtQkgsVUFBdkIsRUFBbUM7QUFDakM7QUFDRUgsb0JBQVEsQ0FBQ3dELE1BQVQsQ0FBZ0I3RSxDQUFoQixFQUFtQixDQUFuQjtBQUNBLG1CQUFPcUIsUUFBUDtBQUNEO0FBQ0o7QUFDRjtBQUNGOztBQUVELFNBQU9BLFFBQVAsQ0FiNEMsQ0FhM0I7QUFDbEIsQyxDQUFDOztBQUVGOzs7Ozs7Ozs7Ozs7O0FBYUEsU0FBU2xFLFdBQVQsQ0FBcUIySCxPQUFyQixFQUE4QkMsUUFBOUIsRUFBd0M7QUFDdEMsTUFBSUMsT0FBTyxHQUFHNUksTUFBTSxDQUFDMEksT0FBRCxDQUFwQixDQURzQyxDQUNQOztBQUUvQixNQUFJRyxNQUFNLEdBQUcsSUFBSXZHLElBQUosQ0FBU3NHLE9BQU8sQ0FBQ0UsT0FBUixDQUFnQixJQUFoQixFQUFzQixHQUF0QixDQUFULENBQWIsQ0FIc0MsQ0FHYTs7QUFFbkRELFFBQU0sR0FBRyxJQUFJdkcsSUFBSixDQUFTLENBQUN1RyxNQUFNLEdBQUcsSUFBVCxHQUFnQixRQUFRRixRQUF6QixJQUFxQyxJQUE5QyxDQUFULENBTHNDLENBS3dCOztBQUU5RCxNQUFJSSxLQUFLLEdBQUdGLE1BQU0sQ0FBQ3JHLFdBQVAsS0FBdUIsR0FBdkIsSUFBOEJxRyxNQUFNLENBQUNqRyxRQUFQLEtBQW9CLENBQWxELElBQXVELEdBQXZELEdBQTZEaUcsTUFBTSxDQUFDL0YsT0FBUCxFQUF6RSxDQVBzQyxDQU9xRDs7QUFFM0YsU0FBT2lHLEtBQVA7QUFDRCxDLENBQUM7O0FBRUY7Ozs7Ozs7Ozs7Ozs7QUFhQSxTQUFTL0gsZUFBVCxDQUF5QmdJLEdBQXpCLEVBQThCQyxJQUE5QixFQUFvQztBQUNsQyxVQUFRQSxJQUFSO0FBQ0UsU0FBSyxNQUFMO0FBQ0U7QUFDQTtBQUNFLFlBQUksQ0FBQyxrRkFBa0ZDLElBQWxGLENBQXVGRixHQUF2RixDQUFMLEVBQWtHO0FBQ2hHLGlCQUFPLEtBQVA7QUFDRDs7QUFFRCxlQUFPLElBQVA7QUFDRDs7QUFFSCxTQUFLLE9BQUw7QUFDRTtBQUNBO0FBQ0UsWUFBSSxDQUFDLGdCQUFnQkUsSUFBaEIsQ0FBcUJGLEdBQXJCLENBQUwsRUFBZ0M7QUFDOUIsaUJBQU8sS0FBUDtBQUNEOztBQUVELGVBQU8sSUFBUDtBQUNEOztBQUVILFNBQUssSUFBTDtBQUNFO0FBQ0UsWUFBSSxDQUFDLFVBQVVFLElBQVYsQ0FBZUYsR0FBZixDQUFMLEVBQTBCO0FBQ3hCLGlCQUFPLEtBQVA7QUFDRDs7QUFFRCxlQUFPLElBQVA7QUFDRDs7QUFFSCxTQUFLLFVBQUw7QUFDRTtBQUNBO0FBQ0UsWUFBSSxDQUFDLG1CQUFtQkUsSUFBbkIsQ0FBd0JGLEdBQXhCLENBQUwsRUFBbUM7QUFDakMsaUJBQU8sS0FBUDtBQUNEOztBQUVELGVBQU8sSUFBUDtBQUNEOztBQUVILFNBQUssUUFBTDtBQUNFO0FBQ0E7QUFDRSxZQUFJLENBQUMsUUFBUUUsSUFBUixDQUFhRixHQUFiLENBQUwsRUFBd0I7QUFDdEIsaUJBQU8sS0FBUDtBQUNEOztBQUVELGVBQU8sSUFBUDtBQUNEOztBQUVILFNBQUssTUFBTDtBQUNFO0FBQ0E7QUFDRSxZQUFJLENBQUMsa0JBQWtCRSxJQUFsQixDQUF1QkYsR0FBdkIsQ0FBTCxFQUFrQztBQUNoQyxpQkFBTyxLQUFQO0FBQ0Q7O0FBRUQsZUFBTyxJQUFQO0FBQ0Q7O0FBRUg7Ozs7Ozs7O0FBUUEsU0FBSyxNQUFMO0FBQ0U7QUFDQTtBQUNFLFlBQUlsSixhQUFhLENBQUNrSixHQUFELENBQWpCLEVBQXdCO0FBQ3RCLGlCQUFPLE1BQVA7QUFDRDs7QUFFRCxZQUFJQSxHQUFHLENBQUN0RSxPQUFKLENBQVksR0FBWixJQUFtQixDQUF2QixFQUEwQjtBQUN4QixjQUFJc0UsR0FBRyxDQUFDdEUsT0FBSixDQUFZLEdBQVosSUFBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsbUJBQU8sZ0JBQVA7QUFDRDtBQUNGOztBQUVELGVBQU8sSUFBUDtBQUNEOztBQUVIO0FBQ0U7QUFDRSxlQUFPLEtBQVA7QUFDRCxPQXZGTDs7QUF5RkQsQyxDQUFDOztBQUVGOzs7Ozs7Ozs7Ozs7QUFZQSxTQUFTekQsZ0JBQVQsQ0FBMEJrSSxVQUExQixFQUFzQ0MsU0FBdEMsRUFBaUQ7QUFDL0MsTUFBSSxDQUFDdEosYUFBYSxDQUFDcUosVUFBRCxDQUFkLElBQThCLENBQUNySixhQUFhLENBQUNzSixTQUFELENBQWhELEVBQTZEO0FBQzNELFFBQUlBLFNBQVMsQ0FBQzFGLE1BQWQsRUFBc0I7QUFDcEIsV0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHd0YsU0FBUyxDQUFDMUYsTUFBOUIsRUFBc0NFLENBQUMsRUFBdkMsRUFBMkM7QUFDekMsWUFBSXdGLFNBQVMsQ0FBQ3hGLENBQUQsQ0FBVCxJQUFnQnVGLFVBQXBCLEVBQWdDO0FBQzlCO0FBQ0UsbUJBQU92RixDQUFQO0FBQ0Q7QUFDSjtBQUNGLEtBUEQsTUFPTztBQUNMLFVBQUl3RixTQUFTLElBQUlELFVBQWpCLEVBQTZCO0FBQzNCO0FBQ0UsaUJBQU8sQ0FBQyxDQUFSLENBREYsQ0FDYTtBQUNaO0FBQ0o7QUFDRjs7QUFFRCxTQUFPLENBQUMsQ0FBUixDQWpCK0MsQ0FpQnBDO0FBQ1osQyxDQUFDOztBQUVGOzs7Ozs7Ozs7Ozs7QUFZQSxTQUFTakksVUFBVCxDQUFvQm1JLE9BQXBCLEVBQTZCQyxRQUE3QixFQUF1QztBQUNyQyxNQUFJLENBQUN4SixhQUFhLENBQUN1SixPQUFELENBQWxCLEVBQTZCO0FBQzNCLFFBQUlFLE9BQU8sR0FBR0YsT0FBTyxDQUFDRyxNQUFSLENBQWUsQ0FBZixFQUFrQkgsT0FBTyxDQUFDeEMsV0FBUixDQUFvQnlDLFFBQXBCLENBQWxCLENBQWQ7O0FBRUEsUUFBSSxDQUFDeEosYUFBYSxDQUFDeUosT0FBRCxDQUFsQixFQUE2QjtBQUMzQixhQUFPQSxPQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBT0YsT0FBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxFQUFQO0FBQ0QsQyxDQUFDOztBQUVGOzs7Ozs7Ozs7Ozs7QUFZQSxTQUFTbEksV0FBVCxDQUFxQmtJLE9BQXJCLEVBQThCQyxRQUE5QixFQUF3QztBQUN0QyxNQUFJLENBQUN4SixhQUFhLENBQUN1SixPQUFELENBQWxCLEVBQTZCO0FBQzNCLFFBQUlFLE9BQU8sR0FBR0YsT0FBTyxDQUFDNUUsU0FBUixDQUFrQjRFLE9BQU8sQ0FBQ3hDLFdBQVIsQ0FBb0J5QyxRQUFwQixJQUFnQ0EsUUFBUSxDQUFDNUYsTUFBM0QsQ0FBZDs7QUFFQSxRQUFJLENBQUM1RCxhQUFhLENBQUN5SixPQUFELENBQWxCLEVBQTZCO0FBQzNCLGFBQU9BLE9BQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPRixPQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLEVBQVA7QUFDRCxDLENBQUM7O0FBRUY7Ozs7Ozs7OztBQVNBLFNBQVNqSSxlQUFULENBQXlCcUksV0FBekIsRUFBc0M7QUFDcEM7QUFDQSxNQUFJcEUsZ0JBQWdCLEdBQUcsZ0NBQXZCLENBRm9DLENBRXFCOztBQUV6RCxNQUFJQyxrQkFBa0IsR0FBRyxnQ0FBekIsQ0FKb0MsQ0FJdUI7O0FBRTNEbUUsYUFBVyxDQUFDakUsYUFBWixHQUE0QkgsZ0JBQTVCO0FBQ0QsQyxDQUFDOztBQUVGOzs7Ozs7Ozs7QUFTQSxTQUFTaEUsaUJBQVQsQ0FBMkJvSSxXQUEzQixFQUF3QztBQUN0QztBQUNBLE1BQUlwRSxnQkFBZ0IsR0FBRyxnQ0FBdkIsQ0FGc0MsQ0FFbUI7O0FBRXpELE1BQUlDLGtCQUFrQixHQUFHLGdDQUF6QixDQUpzQyxDQUlxQjs7QUFFM0RtRSxhQUFXLENBQUNqRSxhQUFaLEdBQTRCRixrQkFBNUI7QUFDRCxDLENBQUM7O0FBRUY7Ozs7Ozs7Ozs7OztBQVlBLFNBQVNoRSxVQUFULENBQW9Ca0csS0FBcEIsRUFBMkI7QUFDM0I7QUFDRTtBQUNBO0FBQ0FBLE9BQUssQ0FBQ0MsZ0JBQU4sR0FBeUI3Ryx1QkFBdUIsQ0FBQzRHLEtBQUssQ0FBQ2tDLGFBQVAsQ0FBaEQ7O0FBRUEsVUFBUWxDLEtBQUssQ0FBQ21DLFlBQWQ7QUFDRSxTQUFLLE1BQUw7QUFDRTtBQUNFbkMsYUFBSyxDQUFDTSxVQUFOLEdBQW1CLElBQW5CO0FBQ0E7QUFDRDs7QUFFSCxTQUFLLE9BQUw7QUFDRTtBQUNFTixhQUFLLENBQUNNLFVBQU4sR0FBbUIsSUFBbkI7QUFDQTtBQUNEOztBQUVILFNBQUssT0FBTDtBQUNFO0FBQ0VOLGFBQUssQ0FBQ00sVUFBTixHQUFtQixJQUFuQjtBQUNBO0FBQ0Q7O0FBRUgsU0FBSyxTQUFMO0FBQ0U7QUFDRU4sYUFBSyxDQUFDTSxVQUFOLEdBQW1CLEtBQW5CO0FBQ0E7QUFDRDs7QUFFSCxTQUFLLFNBQUw7QUFDRTtBQUNFTixhQUFLLENBQUNNLFVBQU4sR0FBbUIsSUFBbkI7QUFDQTtBQUNEOztBQUVILFNBQUssTUFBTDtBQUNFO0FBQ0VOLGFBQUssQ0FBQ00sVUFBTixHQUFtQixJQUFuQjtBQUNBO0FBQ0Q7O0FBRUgsU0FBSyxTQUFMO0FBQ0U7QUFDRU4sYUFBSyxDQUFDTSxVQUFOLEdBQW1CLElBQW5CO0FBQ0E7QUFDRDs7QUFFSCxTQUFLLFFBQUw7QUFDRTtBQUNFTixhQUFLLENBQUNNLFVBQU4sR0FBbUIsTUFBbkI7QUFDQTtBQUNEOztBQUVILFNBQUssUUFBTDtBQUNFO0FBQ0VOLGFBQUssQ0FBQ00sVUFBTixHQUFtQixJQUFuQjtBQUNBO0FBQ0Q7O0FBRUg7QUFDRTtBQUNFTixhQUFLLENBQUNNLFVBQU4sR0FBbUIsTUFBbkI7QUFDQTtBQUNELE9BM0RMOzs7QUE4REEsTUFBSSxDQUFDaEksYUFBYSxDQUFDMEgsS0FBSyxDQUFDQSxLQUFQLENBQWxCLEVBQWlDO0FBQy9CM0csWUFBUSxDQUFDMkcsS0FBSyxDQUFDQSxLQUFQLENBQVI7O0FBRUEsUUFBSUEsS0FBSyxDQUFDQSxLQUFOLENBQVlvQyxZQUFaLElBQTRCLEtBQWhDLEVBQXVDO0FBQ3JDcEMsV0FBSyxDQUFDTSxVQUFOLEdBQW1CLEtBQW5CO0FBQ0Q7QUFDRjtBQUNGLEMsQ0FBQzs7QUFFRjs7Ozs7Ozs7Ozs7O0FBWUEsU0FBU3ZHLHlCQUFULENBQW1DNkQsVUFBbkMsRUFBK0NILFFBQS9DLEVBQXlEO0FBQ3ZELE1BQUksQ0FBQ25GLGFBQWEsQ0FBQ3NGLFVBQUQsQ0FBZCxJQUE4QixDQUFDdEYsYUFBYSxDQUFDbUYsUUFBRCxDQUFoRCxFQUE0RDtBQUMxRCxRQUFJQSxRQUFRLENBQUN2QixNQUFiLEVBQXFCO0FBQ25CLFdBQUssSUFBSUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3FCLFFBQVEsQ0FBQ3ZCLE1BQTdCLEVBQXFDRSxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFlBQUlxQixRQUFRLENBQUNyQixDQUFELENBQVIsQ0FBWWlHLFdBQVosSUFBMkJ6RSxVQUEvQixFQUEyQztBQUN6QztBQUNFLG1CQUFPSCxRQUFRLENBQUNyQixDQUFELENBQWY7QUFDRDtBQUNKO0FBQ0YsS0FQRCxNQU9PO0FBQ0wsVUFBSXFCLFFBQVEsQ0FBQzRFLFdBQVQsSUFBd0J6RSxVQUE1QixFQUF3QztBQUN0QztBQUNFLGlCQUFPSCxRQUFQO0FBQ0Q7QUFDSjtBQUNGOztBQUVELFNBQU8sRUFBUCxDQWpCdUQsQ0FpQjVDO0FBQ1osQyxDQUFDOztBQUVGOzs7Ozs7Ozs7Ozs7QUFZQSxTQUFTekQsU0FBVCxDQUFtQnNJLE1BQW5CLEVBQTJCO0FBQzNCO0FBQ0VBLFFBQU0sQ0FBQ0MsbUJBQVAsR0FBNkJuSix1QkFBdUIsQ0FBQ2tKLE1BQU0sQ0FBQ0UsY0FBUixDQUFwRDtBQUNBLE1BQUlDLGVBQWUsR0FBR0gsTUFBTSxDQUFDSSxVQUE3Qjs7QUFFQSxNQUFJLENBQUNwSyxhQUFhLENBQUNnSyxNQUFNLENBQUNLLFVBQVIsQ0FBbEIsRUFBdUM7QUFDckNGLG1CQUFlLEdBQUdBLGVBQWUsR0FBRyxLQUFsQixHQUEwQkgsTUFBTSxDQUFDSyxVQUFuRDtBQUNEOztBQUVELE1BQUksQ0FBQ3JLLGFBQWEsQ0FBQ2dLLE1BQU0sQ0FBQ00sWUFBUixDQUFsQixFQUF5QztBQUN2QyxRQUFJQyxPQUFPLEdBQUcsSUFBSS9ILElBQUosRUFBZDtBQUNBLFFBQUlnSSxPQUFPLEdBQUdELE9BQU8sQ0FBQzdILFdBQVIsRUFBZDtBQUNBLFFBQUkrSCxhQUFhLEdBQUcsSUFBSWpJLElBQUosQ0FBU3dILE1BQU0sQ0FBQ00sWUFBaEIsRUFBOEI1SCxXQUE5QixFQUFwQjtBQUNBc0gsVUFBTSxDQUFDVSxPQUFQLEdBQWlCRixPQUFPLEdBQUdDLGFBQTNCO0FBQ0FOLG1CQUFlLEdBQUdBLGVBQWUsR0FBRyxLQUFsQixHQUEwQkgsTUFBTSxDQUFDVSxPQUFqQyxHQUEyQyxHQUE3RDtBQUNEOztBQUVEVixRQUFNLENBQUNXLFdBQVAsR0FBcUJSLGVBQXJCOztBQUVBLE1BQUluSyxhQUFhLENBQUNnSyxNQUFNLENBQUNZLFFBQVIsQ0FBakIsRUFBb0M7QUFDbENaLFVBQU0sQ0FBQ2EsU0FBUCxHQUFtQixLQUFuQjtBQUNBYixVQUFNLENBQUNZLFFBQVAsR0FBa0IsYUFBbEI7QUFDRCxHQUhELE1BR087QUFDTCxRQUFJWixNQUFNLENBQUNZLFFBQVAsSUFBbUIsYUFBdkIsRUFBc0M7QUFDcENaLFlBQU0sQ0FBQ2EsU0FBUCxHQUFtQixLQUFuQjtBQUNELEtBRkQsTUFFTztBQUNMYixZQUFNLENBQUNhLFNBQVAsR0FBbUIsSUFBbkI7QUFDRDtBQUNGOztBQUVELE1BQUksQ0FBQzdLLGFBQWEsQ0FBQ2dLLE1BQU0sQ0FBQ2MsV0FBUixDQUFsQixFQUF3QztBQUN0Q2QsVUFBTSxDQUFDZSxnQkFBUCxHQUEwQixLQUFLakssdUJBQUwsQ0FBNkJrSixNQUFNLENBQUNjLFdBQXBDLENBQTFCO0FBQ0Q7QUFDRixDLENBQUM7O0FBRUY7Ozs7Ozs7Ozs7Ozs7O0FBY0EsU0FBU25KLFdBQVQsQ0FBcUJxSixHQUFyQixFQUEwQkMsR0FBMUIsRUFBK0JDLEdBQS9CLEVBQW9DQyxHQUFwQyxFQUF5QztBQUN2QyxNQUFJQyxHQUFHLEdBQUdKLEdBQUcsR0FBR2hILElBQUksQ0FBQ3FILEVBQVgsR0FBZ0IsS0FBMUI7QUFDQSxNQUFJQyxHQUFHLEdBQUdKLEdBQUcsR0FBR2xILElBQUksQ0FBQ3FILEVBQVgsR0FBZ0IsS0FBMUI7QUFDQSxNQUFJRSxHQUFHLEdBQUdILEdBQUcsR0FBR0UsR0FBaEI7QUFDQSxNQUFJRSxHQUFHLEdBQUdQLEdBQUcsR0FBR2pILElBQUksQ0FBQ3FILEVBQVgsR0FBZ0IsS0FBaEIsR0FBd0JGLEdBQUcsR0FBR25ILElBQUksQ0FBQ3FILEVBQVgsR0FBZ0IsS0FBbEQ7QUFDQSxNQUFJSSxDQUFDLEdBQUcsSUFBSXpILElBQUksQ0FBQzBILElBQUwsQ0FBVTFILElBQUksQ0FBQzJILElBQUwsQ0FBVTNILElBQUksQ0FBQzRILEdBQUwsQ0FBUzVILElBQUksQ0FBQzZILEdBQUwsQ0FBU04sR0FBRyxHQUFHLENBQWYsQ0FBVCxFQUE0QixDQUE1QixJQUFpQ3ZILElBQUksQ0FBQzhILEdBQUwsQ0FBU1YsR0FBVCxJQUFnQnBILElBQUksQ0FBQzhILEdBQUwsQ0FBU1IsR0FBVCxDQUFoQixHQUFnQ3RILElBQUksQ0FBQzRILEdBQUwsQ0FBUzVILElBQUksQ0FBQzZILEdBQUwsQ0FBU0wsR0FBRyxHQUFHLENBQWYsQ0FBVCxFQUE0QixDQUE1QixDQUEzRSxDQUFWLENBQVo7QUFDQUMsR0FBQyxHQUFHQSxDQUFDLEdBQUcsUUFBUjtBQUNBQSxHQUFDLEdBQUd6SCxJQUFJLENBQUMwRSxLQUFMLENBQVcrQyxDQUFDLEdBQUcsS0FBZixJQUF3QixLQUE1QjtBQUNBQSxHQUFDLEdBQUdBLENBQUMsQ0FBQ00sT0FBRixDQUFVLENBQVYsQ0FBSjtBQUNBLFNBQU9OLENBQVA7QUFDRCxDLENBQUM7O0FBRUY7Ozs7Ozs7Ozs7OztBQVlBLFNBQVM3SixtQkFBVCxDQUE2Qm9LLGFBQTdCLEVBQTRDQyxlQUE1QyxFQUE2RDtBQUMzRCxNQUFJO0FBQ0YsUUFBSSxDQUFDak0sYUFBYSxDQUFDZ00sYUFBRCxDQUFkLElBQWlDLENBQUNoTSxhQUFhLENBQUNpTSxlQUFELENBQW5ELEVBQXNFO0FBQ3BFO0FBQ0EsVUFBSUMscUJBQXFCLEdBQUcsSUFBSUMsS0FBSixFQUE1QjtBQUNBLFVBQUlDLGNBQWMsR0FBR0MsRUFBRSxDQUFDQyxjQUFILENBQWtCLGFBQWxCLENBQXJCLENBSG9FLENBR2I7O0FBRXZELFVBQUl0TSxhQUFhLENBQUNvTSxjQUFELENBQWpCLEVBQW1DO0FBQ2pDO0FBQ0EsWUFBSUcsY0FBYyxHQUFHLElBQUlDLE1BQUosRUFBckI7QUFDQUQsc0JBQWMsQ0FBQ0UsU0FBZixHQUEyQlQsYUFBM0I7QUFDQU8sc0JBQWMsQ0FBQ0csV0FBZixHQUE2QlQsZUFBN0I7QUFDQU0sc0JBQWMsQ0FBQy9KLElBQWYsR0FBc0IsSUFBSUEsSUFBSixFQUF0QjtBQUNBMEosNkJBQXFCLENBQUM5SCxJQUF0QixDQUEyQm1JLGNBQTNCO0FBQ0EsWUFBSUksaUJBQWlCLEdBQUdsRyxJQUFJLENBQUNDLFNBQUwsQ0FBZXdGLHFCQUFmLENBQXhCO0FBQ0FHLFVBQUUsQ0FBQ08sY0FBSCxDQUFrQixhQUFsQixFQUFpQ0QsaUJBQWpDO0FBQ0QsT0FURCxNQVNPO0FBQ0xULDZCQUFxQixHQUFHekYsSUFBSSxDQUFDb0csS0FBTCxDQUFXVCxjQUFYLENBQXhCO0FBQ0EsWUFBSVUsZUFBZSxHQUFHWixxQkFBcUIsQ0FBQ2EsSUFBdEIsQ0FBMkIsVUFBVTFILENBQVYsRUFBYTtBQUM1RCxpQkFBT0EsQ0FBQyxDQUFDb0gsU0FBRixJQUFlVCxhQUF0QjtBQUNELFNBRnFCLENBQXRCOztBQUlBLFlBQUksQ0FBQ2hNLGFBQWEsQ0FBQzhNLGVBQUQsQ0FBbEIsRUFBcUM7QUFDbkM7QUFDQSxjQUFJQSxlQUFlLENBQUNKLFdBQWhCLElBQStCVCxlQUFuQyxFQUFvRDtBQUNsRDtBQUNBLGlCQUFLLElBQUluSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHb0kscUJBQXFCLENBQUN0SSxNQUExQyxFQUFrREUsQ0FBQyxFQUFuRCxFQUF1RDtBQUNyRCxrQkFBSW9JLHFCQUFxQixDQUFDcEksQ0FBRCxDQUFyQixDQUF5QjJJLFNBQXpCLElBQXNDVCxhQUExQyxFQUF5RDtBQUN2RDtBQUNFRSx1Q0FBcUIsQ0FBQ3BJLENBQUQsQ0FBckIsQ0FBeUI0SSxXQUF6QixHQUF1Q1QsZUFBdkM7QUFDQUMsdUNBQXFCLENBQUNwSSxDQUFELENBQXJCLENBQXlCdEIsSUFBekIsR0FBZ0MsSUFBSUEsSUFBSixFQUFoQztBQUNEO0FBQ0o7O0FBRUQsZ0JBQUltSyxpQkFBaUIsR0FBR2xHLElBQUksQ0FBQ0MsU0FBTCxDQUFld0YscUJBQWYsQ0FBeEI7QUFDQUcsY0FBRSxDQUFDTyxjQUFILENBQWtCLGFBQWxCLEVBQWlDRCxpQkFBakM7QUFDRDtBQUNGLFNBZkQsTUFlTztBQUNMO0FBQ0EsY0FBSUssWUFBWSxHQUFHZCxxQkFBcUIsQ0FBQ3RJLE1BQXpDOztBQUVBLGNBQUlvSixZQUFZLElBQUksR0FBcEIsRUFBeUI7QUFDdkI7QUFDQTtBQUNBZCxpQ0FBcUIsQ0FBQ2UsSUFBdEIsQ0FBMkIsVUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ3pDLHFCQUFPRCxDQUFDLENBQUMxSyxJQUFGLEdBQVMySyxDQUFDLENBQUMzSyxJQUFsQjtBQUNELGFBRkQsRUFIdUIsQ0FLbkI7O0FBRUowSixpQ0FBcUIsQ0FBQ3ZELE1BQXRCLENBQTZCLENBQTdCLEVBQWdDLENBQWhDLEVBUHVCLENBT2E7O0FBRXBDLGdCQUFJNEQsY0FBYyxHQUFHLElBQUlDLE1BQUosRUFBckI7QUFDQUQsMEJBQWMsQ0FBQ0UsU0FBZixHQUEyQlQsYUFBM0I7QUFDQU8sMEJBQWMsQ0FBQ0csV0FBZixHQUE2QlQsZUFBN0I7QUFDQU0sMEJBQWMsQ0FBQy9KLElBQWYsR0FBc0IsSUFBSUEsSUFBSixFQUF0QjtBQUNBMEosaUNBQXFCLENBQUM5SCxJQUF0QixDQUEyQm1JLGNBQTNCO0FBQ0EsZ0JBQUlJLGlCQUFpQixHQUFHbEcsSUFBSSxDQUFDQyxTQUFMLENBQWV3RixxQkFBZixDQUF4QjtBQUNBRyxjQUFFLENBQUNPLGNBQUgsQ0FBa0IsYUFBbEIsRUFBaUNELGlCQUFqQztBQUNELFdBaEJELE1BZ0JPO0FBQ0w7QUFDQSxnQkFBSUosY0FBYyxHQUFHLElBQUlDLE1BQUosRUFBckI7QUFDQUQsMEJBQWMsQ0FBQ0UsU0FBZixHQUEyQlQsYUFBM0I7QUFDQU8sMEJBQWMsQ0FBQ0csV0FBZixHQUE2QlQsZUFBN0I7QUFDQU0sMEJBQWMsQ0FBQy9KLElBQWYsR0FBc0IsSUFBSUEsSUFBSixFQUF0QjtBQUNBMEosaUNBQXFCLENBQUM5SCxJQUF0QixDQUEyQm1JLGNBQTNCO0FBQ0EsZ0JBQUlJLGlCQUFpQixHQUFHbEcsSUFBSSxDQUFDQyxTQUFMLENBQWV3RixxQkFBZixDQUF4QjtBQUNBRyxjQUFFLENBQUNPLGNBQUgsQ0FBa0IsYUFBbEIsRUFBaUNELGlCQUFqQztBQUNEO0FBQ0Y7QUFDRjtBQUNGO0FBQ0YsR0FyRUQsQ0FxRUUsT0FBT3RILENBQVAsRUFBVTtBQUNWLGlCQUFZbkYsTUFBTSxDQUFDbUYsQ0FBRCxDQUFsQjtBQUNEO0FBQ0YsQyxDQUFDOzs7QUFHRixTQUFTeEQsWUFBVCxHQUF3QjtBQUN0QixNQUFJdUwsV0FBVyxHQUFHLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxLQUFiLEVBQW9CLEtBQXBCLEVBQTJCLElBQTNCLEVBQWlDLElBQWpDLEVBQXVDLEtBQXZDLEVBQThDLEtBQTlDLEVBQXFELEtBQXJELEVBQTRELEtBQTVELEVBQW1FLEtBQW5FLEVBQTBFLElBQTFFLEVBQWdGLElBQWhGLEVBQXNGLElBQXRGLEVBQTRGLEtBQTVGLEVBQW1HLEtBQW5HLEVBQTBHLE1BQTFHLEVBQWtILE1BQWxILEVBQTBILElBQTFILENBQWxCO0FBQ0EsU0FBT0EsV0FBUDtBQUNELEMsQ0FBQzs7O0FBR0YsU0FBU3RMLE1BQVQsQ0FBZ0J1TCxPQUFoQixFQUF5QjtBQUN2QixNQUFJQyxLQUFLLENBQUNELE9BQUQsQ0FBVCxFQUFvQjtBQUNsQixXQUFPLENBQVA7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPRSxVQUFVLENBQUNGLE9BQUQsQ0FBakI7QUFDRDtBQUNGLEMsQ0FBQzs7O0FBR0YsU0FBU3RMLFdBQVQsQ0FBcUJ5TCxTQUFyQixFQUFnQztBQUM5QixVQUFRQSxTQUFSO0FBQ0UsU0FBSyxVQUFMO0FBQ0UsYUFBTyxNQUFQOztBQUVGLFNBQUssY0FBTDtBQUNFLGFBQU8sTUFBUDs7QUFFRixTQUFLLE9BQUw7QUFDRSxhQUFPLE1BQVA7O0FBRUY7QUFDRSxZQVhKOztBQWFELEMsQ0FBQzs7QUFFRjs7Ozs7Ozs7Ozs7OztBQWFBLFNBQVN4TCxlQUFULENBQXlCdUgsT0FBekIsRUFBa0NrRSxLQUFsQyxFQUF5Q0MsS0FBekMsRUFBZ0Q7QUFDOUMsTUFBSSxDQUFDMU4sYUFBYSxDQUFDdUosT0FBRCxDQUFsQixFQUE2QjtBQUMzQixRQUFJRSxPQUFPLEdBQUdGLE9BQU8sQ0FBQzVFLFNBQVIsQ0FBa0I4SSxLQUFsQixFQUF5QkMsS0FBekIsQ0FBZDs7QUFFQSxRQUFJLENBQUMxTixhQUFhLENBQUN5SixPQUFELENBQWxCLEVBQTZCO0FBQzNCLGFBQU9BLE9BQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPRixPQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLEVBQVA7QUFDRDtBQUNEOzs7Ozs7O0FBT0EsU0FBU3RILFVBQVQsQ0FBb0IwTCxZQUFwQixFQUFrQztBQUNoQyxNQUFJM04sYUFBYSxDQUFDMk4sWUFBRCxDQUFiLElBQStCQSxZQUFZLElBQUkscUJBQS9DLElBQXdFQSxZQUFZLElBQUkscUJBQTVGLEVBQW1IO0FBQ2pILFdBQU8sRUFBUDtBQUNEOztBQUVELE1BQUlBLFlBQVksQ0FBQy9KLE1BQWIsR0FBc0IsRUFBMUIsRUFBOEI7QUFDNUIsUUFBSWdLLE1BQU0sR0FBRyxJQUFJcEwsSUFBSixDQUFTbUwsWUFBVCxFQUF1QkUsTUFBdkIsRUFBYjtBQUNBLFFBQUlDLElBQUksR0FBRyxJQUFJdEwsSUFBSixDQUFTLENBQUMsSUFBSUEsSUFBSixDQUFTb0wsTUFBVCxDQUFELEdBQW9CLElBQUksSUFBSixHQUFXLElBQXhDLEVBQThDRyxXQUE5QyxHQUE0RC9FLE9BQTVELENBQW9FLElBQXBFLEVBQTBFLEdBQTFFLEVBQStFQSxPQUEvRSxDQUF1RixZQUF2RixFQUFxRyxFQUFyRyxDQUFYO0FBQ0E4RSxRQUFJLEdBQUdBLElBQUksQ0FBQzlFLE9BQUwsQ0FBYSxJQUFJZ0YsTUFBSixDQUFXLEtBQVgsQ0FBYixFQUFnQyxHQUFoQyxDQUFQO0FBQ0EsV0FBT0YsSUFBUDtBQUNEOztBQUVELE1BQUlHLFdBQVcsR0FBR0QsTUFBTSxDQUFDLE1BQUQsQ0FBeEI7O0FBRUEsTUFBSSxDQUFDQyxXQUFXLENBQUM3RSxJQUFaLENBQWlCdUUsWUFBakIsQ0FBTCxFQUFxQztBQUNuQ0EsZ0JBQVksR0FBR0EsWUFBWSxDQUFDM0UsT0FBYixDQUFxQixHQUFyQixFQUEwQixHQUExQixDQUFmO0FBQ0EyRSxnQkFBWSxHQUFHQSxZQUFZLENBQUMzRSxPQUFiLENBQXFCLElBQUlnRixNQUFKLENBQVcsS0FBWCxDQUFyQixFQUF3QyxHQUF4QyxDQUFmO0FBQ0EsV0FBT0wsWUFBUDtBQUNEOztBQUVELE1BQUlBLFlBQVksSUFBSSw4QkFBcEIsRUFBb0Q7QUFDbEQsV0FBTyxFQUFQO0FBQ0Q7O0FBRUQsTUFBSU8sUUFBUSxHQUFHLElBQUkxTCxJQUFKLENBQVMyTCxRQUFRLENBQUNSLFlBQVksQ0FBQzNFLE9BQWIsQ0FBcUIsUUFBckIsRUFBK0IsRUFBL0IsRUFBbUNBLE9BQW5DLENBQTJDLElBQTNDLEVBQWlELEVBQWpELENBQUQsRUFBdUQsRUFBdkQsQ0FBakIsQ0FBZjtBQUNBLE1BQUlvRixTQUFTLEdBQUdGLFFBQVEsQ0FBQ3BMLFFBQVQsS0FBc0IsQ0FBdEIsR0FBMEIsRUFBMUIsR0FBK0IsT0FBT29MLFFBQVEsQ0FBQ3BMLFFBQVQsS0FBc0IsQ0FBN0IsQ0FBL0IsR0FBaUVvTCxRQUFRLENBQUNwTCxRQUFULEtBQXNCLENBQXZHO0FBQ0EsTUFBSXVMLE9BQU8sR0FBR0gsUUFBUSxDQUFDbEwsT0FBVCxLQUFxQixFQUFyQixHQUEwQixNQUFNa0wsUUFBUSxDQUFDbEwsT0FBVCxFQUFoQyxHQUFxRGtMLFFBQVEsQ0FBQ2xMLE9BQVQsRUFBbkU7QUFDQSxNQUFJc0wsU0FBUyxHQUFHSixRQUFRLENBQUNoTCxRQUFULEtBQXNCLEVBQXRCLEdBQTJCLE1BQU1nTCxRQUFRLENBQUNoTCxRQUFULEVBQWpDLEdBQXVEZ0wsUUFBUSxDQUFDaEwsUUFBVCxFQUF2RTtBQUNBLE1BQUlxTCxXQUFXLEdBQUdMLFFBQVEsQ0FBQzlLLFVBQVQsS0FBd0IsRUFBeEIsR0FBNkIsTUFBTThLLFFBQVEsQ0FBQzlLLFVBQVQsRUFBbkMsR0FBMkQ4SyxRQUFRLENBQUM5SyxVQUFULEVBQTdFO0FBQ0EsTUFBSW9MLFdBQVcsR0FBR04sUUFBUSxDQUFDNUssVUFBVCxLQUF3QixFQUF4QixHQUE2QixNQUFNNEssUUFBUSxDQUFDNUssVUFBVCxFQUFuQyxHQUEyRDRLLFFBQVEsQ0FBQzVLLFVBQVQsRUFBN0U7QUFDQSxTQUFPNEssUUFBUSxDQUFDeEwsV0FBVCxLQUF5QixHQUF6QixHQUErQjBMLFNBQS9CLEdBQTJDLEdBQTNDLEdBQWlEQyxPQUFqRCxHQUEyRCxHQUEzRCxHQUFpRUMsU0FBakUsR0FBNkUsR0FBN0UsR0FBbUZDLFdBQW5GLEdBQWlHLEdBQWpHLEdBQXVHQyxXQUE5RztBQUNEO0FBQ0Q7Ozs7Ozs7QUFPQSxTQUFTdE0sWUFBVCxDQUFzQnVNLEdBQXRCLEVBQTJCO0FBQ3pCLE1BQUlDLFFBQVEsR0FBR0QsR0FBRyxDQUFDRSxLQUFKLENBQVUsR0FBVixDQUFmO0FBQ0EsTUFBSUMsUUFBUSxHQUFHRixRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlDLEtBQVosQ0FBa0IsR0FBbEIsQ0FBZjtBQUNBLE1BQUlsTSxJQUFJLEdBQUcwTCxRQUFRLENBQUNTLFFBQVEsQ0FBQyxDQUFELENBQVQsRUFBYyxFQUFkLENBQW5CO0FBQ0EsTUFBSS9MLEtBQUssR0FBR3NMLFFBQVEsQ0FBQ1MsUUFBUSxDQUFDLENBQUQsQ0FBVCxFQUFjLEVBQWQsQ0FBcEI7QUFDQSxNQUFJN0wsR0FBRyxHQUFHb0wsUUFBUSxDQUFDUyxRQUFRLENBQUMsQ0FBRCxDQUFULEVBQWMsRUFBZCxDQUFsQjtBQUNBLE1BQUlkLElBQUksR0FBRyxJQUFJdEwsSUFBSixDQUFTQyxJQUFULEVBQWVJLEtBQWYsRUFBc0JFLEdBQXRCLEVBQTJCLENBQTNCLEVBQThCLENBQTlCLEVBQWlDLENBQWpDLENBQVg7QUFDQSxTQUFPK0ssSUFBUDtBQUNEO0FBQ0Q7Ozs7Ozs7O0FBUUEsU0FBUzNMLG1CQUFULENBQTZCb0gsT0FBN0IsRUFBc0NDLFFBQXRDLEVBQWdEO0FBQzlDLE1BQUksQ0FBQ3hKLGFBQWEsQ0FBQ3VKLE9BQUQsQ0FBbEIsRUFBNkI7QUFDM0IsUUFBSUUsT0FBTyxHQUFHRixPQUFPLENBQUNHLE1BQVIsQ0FBZSxDQUFmLEVBQWtCSCxPQUFPLENBQUMzRSxPQUFSLENBQWdCNEUsUUFBaEIsQ0FBbEIsQ0FBZDs7QUFFQSxRQUFJLENBQUN4SixhQUFhLENBQUN5SixPQUFELENBQWxCLEVBQTZCO0FBQzNCLGFBQU9BLE9BQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPRixPQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLEVBQVA7QUFDRDtBQUNEOzs7Ozs7OztBQVFBLFNBQVNuSCxvQkFBVCxDQUE4Qm1ILE9BQTlCLEVBQXVDQyxRQUF2QyxFQUFpRDtBQUMvQyxNQUFJLENBQUN4SixhQUFhLENBQUN1SixPQUFELENBQWxCLEVBQTZCO0FBQzNCLFFBQUlFLE9BQU8sR0FBR0YsT0FBTyxDQUFDNUUsU0FBUixDQUFrQjRFLE9BQU8sQ0FBQzNFLE9BQVIsQ0FBZ0I0RSxRQUFoQixJQUE0QkEsUUFBUSxDQUFDNUYsTUFBdkQsQ0FBZDs7QUFFQSxRQUFJLENBQUM1RCxhQUFhLENBQUN5SixPQUFELENBQWxCLEVBQTZCO0FBQzNCLGFBQU9BLE9BQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPRixPQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLEVBQVA7QUFDRCxDIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/pgJrnlKjnmoTvvIzkuI3lkozkupHlh73mlbDnm7TmjqXkuqTkupLnmoRqc+W3peWFtyBWMjAyMCAwOCAyN1xyXG5jb25zdCBhcHAgPSBnZXRBcHAoKTsgLy/lo7DmmI7mm53pnLLlh73mlbDnu5lyZXF1aXJl5pa5XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBHZXRTZXFJRDogR2V0U2VxSUQsXHJcbiAgSXNOdWxsT3JFbXB0eTogSXNOdWxsT3JFbXB0eSxcclxuICBHZXRFcnJNc2dWYWx1ZTogR2V0RXJyTXNnVmFsdWUsXHJcbiAgR2V0U3RyOiBHZXRTdHIsXHJcbiAgR2V0U3ViT2JqOiBHZXRTdWJPYmosXHJcbiAgR2V0U3ViT2JqU3RyOiBHZXRTdWJPYmpTdHIsXHJcbiAgbGlnaHRPbmVDb250cm9sRnJvbUxpc3Q6IGxpZ2h0T25lQ29udHJvbEZyb21MaXN0LFxyXG4gIGxpZ2h0T25lQ29udHJvbEZyb21MaXN0MjogbGlnaHRPbmVDb250cm9sRnJvbUxpc3QyLFxyXG4gIGdldE9uZUNvbnRyb2xGcm9tTGlzdDogZ2V0T25lQ29udHJvbEZyb21MaXN0LFxyXG4gIGdldFNxSURGcm9tTGlzdDogZ2V0U3FJREZyb21MaXN0LFxyXG4gIGdldFByb3BlcnRpZXNGcm9tVmFyaWFudDogZ2V0UHJvcGVydGllc0Zyb21WYXJpYW50LFxyXG4gIGdldEdlbmVyYWxVbml0TGlzdDogZ2V0R2VuZXJhbFVuaXRMaXN0LFxyXG4gIGdldEZpbGVTdWZmaXg6IGdldEZpbGVTdWZmaXgsXHJcbiAgcmVwbGFjZU9uZUNvbnRyb2xGcm9tTGlzdDogcmVwbGFjZU9uZUNvbnRyb2xGcm9tTGlzdCxcclxuICBnZXRTZXFJRGZyb21BcnI6IGdldFNlcUlEZnJvbUFycixcclxuICBnZXRUaW1lU2hvcnRTdHJGcm9tVGltZTogZ2V0VGltZVNob3J0U3RyRnJvbVRpbWUsXHJcbiAgY2FsUE1DT0k6IGNhbFBNQ09JLFxyXG4gIERlbGV0ZUZyb21MaXN0OiBEZWxldGVGcm9tTGlzdCxcclxuICBkYXRlQWRkRGF5cyxcclxuICBpbnB1dHZhbGlkYXRpb246IGlucHV0dmFsaWRhdGlvbixcclxuICBnZXRWYWx1ZVNxSW5MaXN0OiBnZXRWYWx1ZVNxSW5MaXN0LFxyXG4gIGdldFN0ckxlZnQ6IGdldFN0ckxlZnQsXHJcbiAgZ2V0U3RyUmlnaHQ6IGdldFN0clJpZ2h0LFxyXG4gIGxpZ2h0T25lQ29udHJvbDogbGlnaHRPbmVDb250cm9sLFxyXG4gIHVuTGlnaHRPbmVDb250cm9sOiB1bkxpZ2h0T25lQ29udHJvbCxcclxuICBjYWxNeVBNQ09JOiBjYWxNeVBNQ09JLFxyXG4gIGdldE9uZUNvbnRyb2xGcm9tTGlzdEJ5TXk6IGdldE9uZUNvbnRyb2xGcm9tTGlzdEJ5TXksXHJcbiAgY2FsUE1Vc2VyOiBjYWxQTVVzZXIsXHJcbiAgZ2V0RGlzdGFuY2U6IGdldERpc3RhbmNlLFxyXG4gIFVwZGF0ZVByb2R1Y3RTdG9yZ2U6IFVwZGF0ZVByb2R1Y3RTdG9yZ2UsXHJcbiAgZ2V0UE1Kb2JUeXBlOiBnZXRQTUpvYlR5cGUsXHJcbiAgR2V0TnVtOiBHZXROdW0sXHJcbiAgR2V0U3RhdGVTdHI6IEdldFN0YXRlU3RyLFxyXG4gIGdldFN0cnN1YnN0cmluZzogZ2V0U3Ryc3Vic3RyaW5nLFxyXG4gIERhdGVDaGFuZ2U6IERhdGVDaGFuZ2UsXHJcbiAgc3RyaW5nVG9EYXRlOiBzdHJpbmdUb0RhdGUsXHJcbiAgZ2V0U3RyTGVmdEZyb21Gcm9udDogZ2V0U3RyTGVmdEZyb21Gcm9udCxcclxuICBnZXRTdHJSaWdodEZyb21Gcm9udDogZ2V0U3RyUmlnaHRGcm9tRnJvbnRcclxufTsgLy/lh73mlbDlr7nosaHlj7fvvJogMe+8jCDojrflj5bliqjmgIFJROWPt+WHveaVsFxyXG5cclxuZnVuY3Rpb24gR2V0U2VxSUQodHlwZVN0ciwgaW50Q291bnQpIHtcclxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gIGxldCB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XHJcbiAgeWVhciA9IHllYXIgLSAyMDAwO1xyXG4gIGlmICh5ZWFyID49IDI2ICYmIHllYXIgPD0gMzEpIHllYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHllYXIgKyAyMyk7ZWxzZSB5ZWFyID0gU3RyaW5nLmZyb21DaGFyQ29kZSh5ZWFyICsgNjUpO1xyXG4gIGxldCBtb250aCA9IG5vdy5nZXRNb250aCgpICsgMTtcclxuICBpZiAobW9udGggPj0gMjYgJiYgbW9udGggPD0gMzEpIG1vbnRoID0gU3RyaW5nLmZyb21DaGFyQ29kZShtb250aCArIDIzKTtlbHNlIG1vbnRoID0gU3RyaW5nLmZyb21DaGFyQ29kZShtb250aCArIDY1KTtcclxuICBsZXQgZGF5ID0gbm93LmdldERhdGUoKTtcclxuICBpZiAoZGF5ID49IDI2ICYmIGRheSA8PSAzMSkgZGF5ID0gU3RyaW5nLmZyb21DaGFyQ29kZShkYXkgKyAyMyk7ZWxzZSBkYXkgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGRheSArIDY1KTtcclxuICBsZXQgaG91ciA9IG5vdy5nZXRIb3VycygpO1xyXG4gIGlmIChob3VyID49IDI2ICYmIGhvdXIgPD0gMzEpIGhvdXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGhvdXIgKyAyMyk7ZWxzZSBob3VyID0gU3RyaW5nLmZyb21DaGFyQ29kZShob3VyICsgNjUpO1xyXG4gIGxldCBtaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKTtcclxuICBpZiAobWludXRlcyA+PSAyNiAmJiBtaW51dGVzIDw9IDMxKSBtaW51dGVzID0gU3RyaW5nLmZyb21DaGFyQ29kZShtaW51dGVzICsgMjMpO2Vsc2Uge1xyXG4gICAgaWYgKG1pbnV0ZXMgPT0gNTggfHwgbWludXRlcyA9PSA1OSkgbWludXRlcyA9IFN0cmluZy5mcm9tQ2hhckNvZGUobWludXRlcyAtIDMpO2Vsc2UgbWludXRlcyA9IFN0cmluZy5mcm9tQ2hhckNvZGUobWludXRlcyArIDY1KTtcclxuICB9XHJcbiAgbGV0IHNlY29uZHMgPSBub3cuZ2V0U2Vjb25kcygpO1xyXG4gIGlmIChzZWNvbmRzID49IDI2ICYmIHNlY29uZHMgPD0gMzEpIHNlY29uZHMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHNlY29uZHMgKyAyMyk7ZWxzZSB7XHJcbiAgICBpZiAoc2Vjb25kcyA9PSA1OCB8fCBzZWNvbmRzID09IDU5KSBtaW51dGVzID0gU3RyaW5nLmZyb21DaGFyQ29kZShzZWNvbmRzIC0gMyk7ZWxzZSBzZWNvbmRzID0gU3RyaW5nLmZyb21DaGFyQ29kZShzZWNvbmRzICsgNjUpO1xyXG4gIH1cclxuICB2YXIgUmVzU3RyTGlzdCA9IFtdO1xyXG5cclxuICBmb3IgKHZhciBqID0gMDsgaiA8IGludENvdW50OyBqKyspIHtcclxuICAgIC8v5YeG5aSH6ZqP5py65pWwXHJcbiAgICB2YXIgbGVuID0gNjtcclxuICAgIGxlbiA9IGxlbiB8fCAzMjtcclxuICAgIHZhciAkY2hhcnMgPSAnQUJDREVGR0hKS01OUFFSU1RXWFlaMjM0NTY3OCc7XHJcbiAgICAvKioqKum7mOiupOWOu+aOieS6huWuueaYk+a3t+a3hueahOWtl+espm9PTGwsOWdxLFZ2LFV1LEkxKioqKi9cclxuXHJcbiAgICB2YXIgbWF4UG9zID0gJGNoYXJzLmxlbmd0aDtcclxuICAgIHZhciBwd2QgPSAnJztcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgIHB3ZCArPSAkY2hhcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heFBvcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBSZXNTdHIgPSB0eXBlU3RyICsgeWVhciArIG1vbnRoICsgZGF5ICsgaG91ciArIG1pbnV0ZXMgKyBzZWNvbmRzICsgcHdkO1xyXG4gICAgUmVzU3RyTGlzdC5wdXNoKFJlc1N0cik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gUmVzU3RyTGlzdDtcclxufSAvL+WHveaVsOWvueixoeWPt++8miAy77yMIOWvueixoei9rOaNolxyXG5cclxuXHJcbmZ1bmN0aW9uIEdldFN0cihPYmpWYWxlKSB7XHJcbiAgaWYgKElzTnVsbE9yRW1wdHkoT2JqVmFsZSkpIHtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gT2JqVmFsZS50b1N0cmluZygpO1xyXG4gIH1cclxufSAvL+WHveaVsOWvueixoeWPt++8miAz77yMIOi/h+a7pG9ialZhbOS4uuepuueahOWQhOenjeaDheW9ou+8jOWHj+WwkeWIpOepuuWkjeadguW6plxyXG5cclxuXHJcbmZ1bmN0aW9uIElzTnVsbE9yRW1wdHkob2JqVmFsKSB7XHJcbiAgLy8gIOi/h+a7pCBcIlwiOyBcIiBcIjsgbnVsbDt1bmRlZmluZWQ7ICBbXTt7fTt2TmFOO1xyXG4gIGlmIChvYmpWYWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8g5Y+q6IO955SoID09PSDov5DnrpfmnaXmtYvor5Xmn5DkuKrlgLzmmK/lkKbmmK/mnKrlrprkuYnnmoRcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9ialZhbCA9PSBudWxsKSB7XHJcbiAgICAvLyDnrYnlkIzkuo4gYSA9PT0gdW5kZWZpbmVkIHx8IGEgPT09IG51bGxcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9ialZhbCA9PSBcIlR5cGVFcnJvclwiKSB7XHJcbiAgICAvLyBcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gLy8g5bGe5LqO5pWw5a2X5LiN5bqU6K+l5piv56m677yM54m55Yir5pivMO+8jCDlpoLmnpzkuI3liqDov5nkuIDlj6XvvIzlnKjkuIvkuIDlj6XkvJrooqvorqTkuLrmmK/nqbrlgLzjgIJcclxuXHJcblxyXG4gIGlmICh0eXBlb2Ygb2JqVmFsID09PSAnbnVtYmVyJykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9ialZhbCA9PSBcIlwiIHx8IG9ialZhbCA9PSBudWxsIHx8IG9ialZhbCA9PSB1bmRlZmluZWQpIHtcclxuICAgIC8vIFwiXCIsbnVsbCx1bmRlZmluZWRcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFvYmpWYWwpIHtcclxuICAgIC8vIFwiXCIsbnVsbCx1bmRlZmluZWQsTmFOXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IC8vIEFycmF5XHJcblxyXG5cclxuICBpZiAob2JqVmFsLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAvLyBcIlwiLFtdXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxufSAvL+WHveaVsOWvueixoeWPt++8miA077yMIOWvuUVyck1zZ1N0cui/m+ihjOaVtOeQhu+8jOWHj+WwkeWJjeerr+WIpOaWreWkjeadguW6plxyXG5cclxuXHJcbmZ1bmN0aW9uIEdldEVyck1zZ1ZhbHVlKEVyck1zZ1N0cikge1xyXG4gIGlmIChJc051bGxPckVtcHR5KEVyck1zZ1N0cikpIHtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgVGVtcFM7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgVGVtcFMgPSBFcnJNc2dTdHIuc3Vic3RyaW5nKEVyck1zZ1N0ci5pbmRleE9mKFwiOlwiKSArIDEsIEVyck1zZ1N0ci5sZW5ndGgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy/or7TmmI46VGVtcFPmoLzlvI/kuI3nrKblkIjoh7PlsJHmnInlrZfnrKZcIjpva1wiXHJcbiAgICAgIHJldHVybiBUZW1wUztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoSXNOdWxsT3JFbXB0eShUZW1wUykpIHtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgbGFzdFN0ciA9IFRlbXBTLnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgICBpZiAobGFzdFN0ciA9PSBcIk9LXCIpIHtcclxuICAgICAgICByZXR1cm4gbGFzdFN0cjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gVGVtcFM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0gLy/lh73mlbDlr7nosaHlj7fvvJogNe+8jOajgOafpeWvueixoeaYr+WQpuWtmOWcqCAvL+WSjElzTnVsbE9yRW1wdHnmnInlvojlpKflkIxcclxuXHJcblxyXG5mdW5jdGlvbiBJc05vdEV4aXN0KG9ialZhbCkge1xyXG4gIGlmIChvYmpWYWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8g5Y+q6IO955SoID09PSDov5DnrpfmnaXmtYvor5Xmn5DkuKrlgLzmmK/lkKbmmK/mnKrlrprkuYnnmoRcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59IC8v5Ye95pWw5a+56LGh5Y+377yaIDfvvIzojrflj5blr7nosaHmlbDnu4TnmoTplb/luqYgIFN0cmluZyDov5Tlm57nmoTmmK/lrZfnrKbplb/luqbvvIzkuI3mlK/mjIFsZW5ndGjnmoTlj5jph4/ov5Tlm57nmoTmmK8wXHJcblxyXG5cclxuZnVuY3Rpb24gR2V0TGVuZ3RoKG9ialZhbCkge1xyXG4gIGlmIChJc051bGxPckVtcHR5KG9ialZhbCkpIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgdmFyIFRlbXBJID0gMDtcclxuXHJcbiAgdHJ5IHtcclxuICAgIFRlbXBJID0gb2JqVmFsLmxlbmd0aDtcclxuICAgIHJldHVybiBUZW1wSTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIFRlbXBJO1xyXG4gIH1cclxufSAvL+WHveaVsOWvueixoeWPt++8miA477yM5o6i5Y+W5a2Q5a+56LGh5piv5ZCm5a2Y5Zyo77yM5aaC5p6c5a2Y5Zyo5YiZ6L+U5Zue5a2Q5a+56LGh77yM5aaC5LiN5a2Y5Zyo5YiZ6L+U5Zue4oCc4oCd77yM5aaC5a2Y55u05o6l6L+U5Zue5a2Q5Y+YXHJcbi8vIEFBLkJCLkNDIDog5b2TQkLkuLrnqbrnqbrlgLznqIvluo/nm7TmjqXmiqXplJnooqtjYXRjaCzov5nmoLfpgLvovpHmgKflsLHlpI3mnYLkuobjgILpnIDopoHkuIDkuKrlh73mlbDmnaXoh6rliqjlpITnkIbjgIJcclxuLy8g6L+Z5Liq5Ye95pWw6KaB5aSE55CG5Lik56eN5oOF5Ya1XHJcbi8v5oOF5Ya1IDHvvJogQUEuQkIuQ0MgOiDlvZNCQuS4uuepuuepuuWAvOeoi+W6j+ebtOaOpeaKpemUme+8jOWuueaYk+S6p+eUn+mUmeivr+OAgumcgOimgeaZuuiDveWkhOeQhlxyXG4vL+aDheWGtSAy77yaQUFbMF1bMF0uQkIgOuS9hkFBWzBd5Li656m677yM5oiWQUFbMF1bMF3kuLrnqbrnmoTmmbrog73lpITnkIZcclxuLy9UZW1wTGlzdCDlupTor6XmmK/kuKrmlbDnu4TvvJogW3Jvb3RPYmosXCLlrZDlhYPntKDlkI1cIu+8jOKAnOWtkOWFg+e0oOWQjeKAne+8jC4uLl1cclxuLy/lrZDlhYPntKDlkI0g5Li65pWw5YC85piv5bCx5piv57G75Ly877yacm9vdE9ialswXeWQq+S5iVxyXG5cclxuXHJcbmZ1bmN0aW9uIEdldFN1Yk9iaihUZW1wTGlzdCkge1xyXG4gIGlmIChJc051bGxPckVtcHR5KFRlbXBMaXN0KSkgLy9UZW1wTGlzdOS4jeWtmOWcqO+8jOebtOaOpei/lOWbnuS4gOS4quepuuWAvOWbnuWOu+OAglxyXG4gICAge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGlmIChJc051bGxPckVtcHR5KFRlbXBMaXN0WzBdKSkgLy/moLnlhYPntKDkuI3lrZjlnKjnm7TmjqXov5Tlm55cclxuICAgICAge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgdmFyIFRlbXBPYmogPSBUZW1wTGlzdFswXTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IFRlbXBMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghSXNOdWxsT3JFbXB0eShUZW1wTGlzdFtpXSkpIHtcclxuICAgICAgICBpZiAoIUlzTnVsbE9yRW1wdHkoVGVtcE9ialtUZW1wTGlzdFtpXV0pKSAvL+S4jeeuoeaYr+aVsOe7hOi/mOaYr+Wtl+espumDveS4gOagt1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBUZW1wT2JqID0gVGVtcE9ialtUZW1wTGlzdFtpXV07IC8v5oyH5ZCR5LiL5LiA5bGC5Y+Y6YePXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIFwiXCI7IC8v6K+05piO5Li656m65YC877yM55u05o6l6L+U5ZueXCJcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJcIjsgLy/ooajovr7kuI3mraPnoa7mlL7lm57nqbpcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGUpIC8v5Lu75L2V6ZSZ6K+v55u05o6l6L+U5Zue56m6XHJcbiAge1xyXG4gICAgcmV0dXJuIFwiXCI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gVGVtcE9iajtcclxufSAvL+WHveaVsOWvueixoeWPt++8miA5IOWPguiAgyBHZXRTdWJPYmog5ZKMIEdldFN0clxyXG5cclxuXHJcbmZ1bmN0aW9uIEdldFN1Yk9ialN0cihUZW1wTGlzdCkge1xyXG4gIHJldHVybiBHZXRTdHIoR2V0U3ViT2JqKFRlbXBMaXN0KSk7XHJcbn0gLy/lh73mlbDlr7nosaHlj7fvvJogMTAg6YCa6L+H5a+56LGhaWTlgLzvvIzlrp7njrDku47mjqfku7blrrnlmajkuK3pq5jkuq7kuIDkuKrmjqfku7YgKFxyXG5cclxuLyrmlrnms5Xor7TmmI5cclxuICAgICAgICpAQ3JlYXRvckFuZFRpbWUg5Yib5bu65Lq6IEdNIOaXtumXtCAyMDIwIDExIDI4XHJcbiAgICAgICAqQG1ldGhvZCDmlrnms5XlkI0gbGlnaHRPbmVDb250cm9sRnJvbUxpc3QgXHJcbiAgICAgICAqQGZvciDmiYDlsZ7nsbvlkI0v5oiW5qih5Z2X5ZCNICBwbUpTVG9vbFxyXG4gICAgICAgKkBmdW5jdGlvbiDlip/og73or7TmmI4gIOeUqOS6jumrmOS6rnRhcOS6i+S7tuWQjueahOaOp+S7tu+8jOWQjOaXtua2iOmAgOWFtuS7luaOp+S7tueahOmrmOS6rueKtuaAgVxyXG4gICAgICAgKkBtYXJrIOS9v+eUqOWHveaVsOaXtueahOazqOaEj+WunueOsCAg6L+Z5Liq5Y+q5piv55WM6Z2i77yM5ZCO56uv6YC76L6R6KaB54m55q6K6ICD6JmR77yM5q+U5aaC5pyN5Yqh5Zmo56uv6I635b6X5LqG5pWw5o2u77yM5omN5Y+v5Lul54K55Lqu562JXHJcbiAgICAgICAqQHBhcmFte+WPguaVsOexu+Wei33lj4LmlbDlkI0g5Y+C5pWw6K+05piOXHJcbiAgICAgICBzZWxlY3RlZElEIOiiq+mAieaLqeWvueixoeeahCBfaWTlgLxcclxuICAgICAgIFRlbXBMaXN0ICAg5omA5Zyo5pWw5o2u5a+56LGh5riF5Y2VXHJcbiAgICAgICBpc0NvbnZlcnNlIOW9k+aPkOS+m+i/meS4quWPguaVsO+8jOW5tuS4lOi/meS4quWPguaVsOS4unRydWXmmK/vvIzooajnpLrvvIznm7TmjqXnva7lj41cclxuKi9cclxuXHJcblxyXG5mdW5jdGlvbiBsaWdodE9uZUNvbnRyb2xGcm9tTGlzdChzZWxlY3RlZElELCBUZW1wTGlzdCkge1xyXG4gIC8v5LiN6L+U5Zue5Y+q5YGa5q2j56Gu55qE6K6+572uXHJcbiAgdmFyIGJ0blNlbGVjdGVkU3R5bGUgPSBcIiBib3gtc2hhZG93OiAycHggMnB4IDVweCAjMDAwO1wiOyAvL+eUqOS6juWKqOaAgeihqOi+vuaMiemSrumAieS4reeahOeKtuaAgVxyXG5cclxuICB2YXIgYnRuVW5TZWxlY3RlZFN0eWxlID0gXCIgYm94LXNoYWRvdzogMHB4IDBweCAwcHggIzAwMDtcIjsgLy/nlKjkuo7liqjmgIHooajovr7mjInpkq7msqHmnInpgInkuK3nmoTnirbmgIFcclxuXHJcbiAgaWYgKCFJc051bGxPckVtcHR5KHNlbGVjdGVkSUQpICYmICFJc051bGxPckVtcHR5KFRlbXBMaXN0KSkge1xyXG4gICAgaWYgKFRlbXBMaXN0Lmxlbmd0aCkge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IFRlbXBMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKFRlbXBMaXN0W2ldLl9pZCA9PSBzZWxlY3RlZElEKSB7XHJcbiAgICAgICAgICBUZW1wTGlzdFtpXS5zZWxlY3RlZFN0eWxlID0gYnRuU2VsZWN0ZWRTdHlsZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgVGVtcExpc3RbaV0uc2VsZWN0ZWRTdHlsZSA9IGJ0blVuU2VsZWN0ZWRTdHlsZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChUZW1wTGlzdC5faWQgPT0gc2VsZWN0ZWRJRCkge1xyXG4gICAgICAgIFRlbXBMaXN0LnNlbGVjdGVkU3R5bGUgPSBidG5TZWxlY3RlZFN0eWxlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFRlbXBMaXN0LnNlbGVjdGVkU3R5bGUgPSBidG5VblNlbGVjdGVkU3R5bGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0gLy/lh73mlbAxMOeahOWPmOS9k+WHveaVsFxyXG4vL2lzQ29udmVyc2Ug5b2T5o+Q5L6b6L+Z5Liq5Y+C5pWw77yM5bm25LiU6L+Z5Liq5Y+C5pWw5Li6dHJ1ZeaYr++8jOihqOekuu+8jOebtOaOpee9ruWPjVxyXG5cclxuXHJcbmZ1bmN0aW9uIGxpZ2h0T25lQ29udHJvbEZyb21MaXN0MihzZWxlY3RlZElELCBUZW1wTGlzdCwgaXNDb252ZXJzZSkge1xyXG4gIHZhciBidG5TZWxlY3RlZFN0eWxlID0gXCIgYm94LXNoYWRvdzogMnB4IDJweCA1cHggIzAwMDtcIjsgLy/nlKjkuo7liqjmgIHooajovr7mjInpkq7pgInkuK3nmoTnirbmgIFcclxuXHJcbiAgdmFyIGJ0blVuU2VsZWN0ZWRTdHlsZSA9IFwiIGJveC1zaGFkb3c6IDBweCAwcHggMHB4ICMwMDA7XCI7IC8v55So5LqO5Yqo5oCB6KGo6L6+5oyJ6ZKu5rKh5pyJ6YCJ5Lit55qE54q25oCBXHJcblxyXG4gIGlmIChpc0NvbnZlcnNlICE9IHRydWUpIHtcclxuICAgIGxpZ2h0T25lQ29udHJvbEZyb21MaXN0KHNlbGVjdGVkSUQsIFRlbXBMaXN0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdmFyIHRlbXBQSSA9IGdldE9uZUNvbnRyb2xGcm9tTGlzdChzZWxlY3RlZElELCBUZW1wTGlzdCk7XHJcblxyXG4gICAgaWYgKHRlbXBQSS5zZWxlY3RlZFN0eWxlID09IGJ0blNlbGVjdGVkU3R5bGUpIHtcclxuICAgICAgdGVtcFBJLnNlbGVjdGVkU3R5bGUgPSBidG5VblNlbGVjdGVkU3R5bGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsaWdodE9uZUNvbnRyb2xGcm9tTGlzdChzZWxlY3RlZElELCBUZW1wTGlzdCk7XHJcbiAgICB9XHJcbiAgfVxyXG59IC8v5Ye95pWw5a+56LGh5Y+377yaIDExIOagueaNrmlk5YC877yM5LuO5o6n5Lu2YXRhTGlzdOS4reiOt+WPluS4gOS4quaOp+S7tlxyXG5cclxuLyrmlrnms5Xor7TmmI5cclxuICAgICAgICpAQ3JlYXRvckFuZFRpbWUg5Yib5bu65Lq6IEdNIOaXtumXtCAyMDIwIDExIDI5XHJcbiAgICAgICAqQG1ldGhvZCDmlrnms5XlkI0gZ2V0T25lQ29udHJvbEZyb21MaXN0IFxyXG4gICAgICAgKkBmb3Ig5omA5bGe57G75ZCNL+aIluaooeWdl+WQjSAgcG1KU1Rvb2xcclxuICAgICAgICpAZnVuY3Rpb24g5Yqf6IO96K+05piOICDpgJrov4dpZCzojrflj5bmjqfku7bmlbDmja5cclxuICAgICAgICpAbWFya1xyXG4gICAgICAgKkBwYXJhbXvlj4LmlbDnsbvlnot95Y+C5pWw5ZCNIOWPguaVsOivtOaYjlxyXG4gICAgICAgc2VsZWN0ZWRJRCDooqvpgInmi6nlr7nosaHnmoQgX2lk5YC8XHJcbiAgICAgICBUZW1wTGlzdCAgIOaJgOWcqOaVsOaNruWvueixoea4heWNlVxyXG4qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldE9uZUNvbnRyb2xGcm9tTGlzdChzZWxlY3RlZElELCBUZW1wTGlzdCkge1xyXG4gIGlmICghSXNOdWxsT3JFbXB0eShzZWxlY3RlZElEKSAmJiAhSXNOdWxsT3JFbXB0eShUZW1wTGlzdCkpIHtcclxuICAgIGlmIChUZW1wTGlzdC5sZW5ndGgpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBUZW1wTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChUZW1wTGlzdFtpXS5faWQgPT0gc2VsZWN0ZWRJRCkgLy/pgY3ljoblh7rmnaXkuIDkuKrmlbDmja5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFRlbXBMaXN0W2ldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoVGVtcExpc3QuX2lkID09IHNlbGVjdGVkSUQpIC8v5Y+q5pyJ5LiA5Liq5pWw5o2u5pe255qE5pWw5o2uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmV0dXJuIFRlbXBMaXN0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBcIlwiOyAvL+ayoeacieaJvuWIsOi/lOWbnuS4gOS4quWuieWFqOeahOepuuWAvFxyXG59IC8v5Ye95pWw5a+56LGh5Y+377yaIDEyIOagueaNrl9pZOWAvO+8jOS7juaOp+S7tmF0YUxpc3TkuK3ojrflj5bkuIDkuKrmjqfku7blnKjmlbDmja7lr7nosaHkuK3nmoTpobrluo/lgLxcclxuXHJcbi8q5pa55rOV6K+05piOXHJcbiAgICAgICAqQENyZWF0b3JBbmRUaW1lIOWIm+W7uuS6uiBHTSDml7bpl7QgMjAyMCAxMiAwM1xyXG4gICAgICAgKkBtZXRob2Qg5pa55rOV5ZCNIGdldFNxSURGcm9tTGlzdCBcclxuICAgICAgICpAZm9yIOaJgOWxnuexu+WQjS/miJbmqKHlnZflkI0gIHBtSlNUb29sXHJcbiAgICAgICAqQGZ1bmN0aW9uIOWKn+iDveivtOaYjiAg6YCa6L+HaWQs6I635Y+W5o6n5Lu25pWw5o2uXHJcbiAgICAgICAqQG1hcmtcclxuICAgICAgICpAcGFyYW175Y+C5pWw57G75Z6LfeWPguaVsOWQjSDlj4LmlbDor7TmmI5cclxuICAgICAgIHNlbGVjdGVkSUQg6KKr6YCJ5oup5a+56LGh55qEIF9pZOWAvFxyXG4gICAgICAgVGVtcExpc3QgICDmiYDlnKjmlbDmja7lr7nosaHmuIXljZVcclxuKi9cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRTcUlERnJvbUxpc3Qoc2VsZWN0ZWRJRCwgVGVtcExpc3QpIHtcclxuICBpZiAoIUlzTnVsbE9yRW1wdHkoc2VsZWN0ZWRJRCkgJiYgIUlzTnVsbE9yRW1wdHkoVGVtcExpc3QpKSB7XHJcbiAgICBpZiAoVGVtcExpc3QubGVuZ3RoKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgVGVtcExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoVGVtcExpc3RbaV0uX2lkID09IHNlbGVjdGVkSUQpIC8v6YGN5Y6G5Ye65p2l5LiA5Liq5pWw5o2uXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoVGVtcExpc3QuX2lkID09IHNlbGVjdGVkSUQpIC8v5Y+q5pyJ5LiA5Liq5pWw5o2u5pe255qE5pWw5o2uXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmV0dXJuIC0xOyAvL+S4jeaYr+aVsOe7hO+8jOS4jeW6lOivpeeUqOadpemAieaLqVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAtMTsgLy/msqHmnInmib7liLDov5Tlm57kuIDkuKrlronlhajnmoTlgLxcclxufSAvL+WHveaVsOWvueixoeWPt++8miAxMyDlj5jph4/ovazlj5jkuLrlsZ7mgKfmuIXljZVcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRQcm9wZXJ0aWVzRnJvbVZhcmlhbnQodGVtcFZhcmlhbnQpIHtcclxuICBpZiAoSXNOdWxsT3JFbXB0eSh0ZW1wVmFyaWFudCkpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgdmFyIGZpbGxCbG9jayA9IHt9O1xyXG4gIGZpbGxCbG9jay5maWxsUmVtaW5kID0gXCJcIjtcclxuICBmaWxsQmxvY2suZmlsbEl0ZW1MaXN0ID0gW107XHJcblxyXG4gIGZvciAodmFyIEtleSBpbiB0ZW1wVmFyaWFudCkge1xyXG4gICAgdmFyIGZpbGxJdGVtID0ge307XHJcbiAgICBmaWxsSXRlbS5maWxsVGl0bGUgPSBLZXksIGZpbGxJdGVtLmZpbGxUaXRsZVJpZ2h0ID0gXCLpu5jorqTlkI7nvIBcIiwgZmlsbEl0ZW0uZmlsbENoYXJ0VVJMID0gXCJcIiwgLy/lj6/kuLrnqbpcclxuICAgIGZpbGxJdGVtLmZpbGxUaXAgPSBcIuWhq+WGmeaPkOekulwiLCBmaWxsSXRlbS5maWxsVHlwZSA9IFwiVFhUXCIsIC8v5aGr5YaZ57G75Z6LOiBUWFQgTlVNIExJU1QgREFURVRJTUVcclxuICAgIGZpbGxJdGVtLmZpbGxlVmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0ZW1wVmFyaWFudFtLZXldKSwgZmlsbEl0ZW0uZmlsbEhlbHBMaXN0ID0gW10sIC8v5aSH6YCJ6aG5XHJcbiAgICBmaWxsSXRlbS5maWxsSUQgPSBcIlwiLCAvL+Whq+WGmemhueWtl+auteWQje+8jOS4jeWcqOWJjeerr+aYvuekulxyXG4gICAgZmlsbEJsb2NrLmZpbGxJdGVtTGlzdC5wdXNoKGZpbGxJdGVtKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmaWxsQmxvY2s7XHJcbn0gLy/lh73mlbDlr7nosaHlj7fvvJogMTQg6I635Y+W5pyA5bi46KeB5Y2V5L2N5ZCN56ew5riF5Y2VXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0R2VuZXJhbFVuaXRMaXN0KCkge1xyXG4gIHZhciBUZW1wTGlzdCA9IFtcIuS7tlwiLCBcIuS4qlwiLCBcIuWll1wiLCBcIueusVwiLCBcIuiii1wiLCBcIuWFi1wiLCBcIuWNg+WFi1wiLCBcIuWQqFwiLCBcIuexs1wiLCBcIuWNg+exs1wiLCBcIuavq+WNh1wiLCBcIuWNh1wiLCBcIueri+aWueexs1wiXTtcclxuICByZXR1cm4gVGVtcExpc3Q7XHJcbn0gLy/lh73mlbDlr7nosaHlj7fvvJogMTUg6I635Y+W5paH5Lu25ZCN55qE5ZCO57yA44CC5b6I5aSa5pe25YCZ6ZyA6KaB5oiq5Y+W5ZCO57yA55So5LqO5pS55ZCN44CCIOavlOWmgiBYWFhYLnBuZyA9PT4gLnBuZ1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEZpbGVTdWZmaXgoZmlsZVN0cikge1xyXG4gIGlmICghSXNOdWxsT3JFbXB0eShmaWxlU3RyKSkge1xyXG4gICAgdmFyIFRlbXBGaWxlU3VmZml4ID0gZmlsZVN0ci5zdWJzdHJpbmcoZmlsZVN0ci5sYXN0SW5kZXhPZihcIi5cIikpO1xyXG5cclxuICAgIGlmICghSXNOdWxsT3JFbXB0eShUZW1wRmlsZVN1ZmZpeCkpIHtcclxuICAgICAgcmV0dXJuIFRlbXBGaWxlU3VmZml4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFwiXCI7XHJcbn0gLy/lh73mlbDlr7nosaHlj7fvvJogMTUg5qC55o2uaWTlgLzvvIzku47mjqfku7ZkYXRhTGlzdOS4reiOt+WPluS4gOS4quWPmOmHj++8jOW5tuabv+aNouS4uuS4gOS4quaWsOWPmOmHj1xyXG5cclxuLyrmlrnms5Xor7TmmI5cclxuICAgICAgICpAQ3JlYXRvckFuZFRpbWUg5Yib5bu65Lq6IEdNIOaXtumXtCAyMDIwIDEyIDI1XHJcbiAgICAgICAqQG1ldGhvZCDmlrnms5XlkI0gcmVwbGFjZU9uZUNvbnRyb2xGcm9tTGlzdCBcclxuICAgICAgICpAZm9yIOaJgOWxnuexu+WQjS/miJbmqKHlnZflkI0gIHBtSlNUb29sXHJcbiAgICAgICAqQGZ1bmN0aW9uIOWKn+iDveivtOaYjiAg5qC55o2uaWTlgLzvvIzku47mjqfku7ZkYXRhTGlzdOS4reiOt+WPluS4gOS4quWPmOmHj++8jOW5tuabv+aNouS4uuS4gOS4quaWsOWPmOmHj1xyXG4gICAgICAgKkBtYXJrXHJcbiAgICAgICAqQHBhcmFte+WPguaVsOexu+Wei33lj4LmlbDlkI0g5Y+C5pWw6K+05piOXHJcbiAgICAgICBzZWxlY3RlZElEIOiiq+mAieaLqeWvueixoeeahCBfaWTlgLxcclxuICAgICAgIG5ld1ZhcmlhbnQs5paw5Y+Y6YePXHJcbiAgICAgICBUZW1wTGlzdCAgIOaJgOWcqOaVsOaNruWvueixoea4heWNlVxyXG4qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VPbmVDb250cm9sRnJvbUxpc3Qoc2VsZWN0ZWRJRCwgbmV3VmFyaWFudCwgVGVtcExpc3QpIHtcclxuICBpZiAoIUlzTnVsbE9yRW1wdHkoc2VsZWN0ZWRJRCkgJiYgIUlzTnVsbE9yRW1wdHkoVGVtcExpc3QpKSB7XHJcbiAgICBpZiAoVGVtcExpc3QubGVuZ3RoKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgVGVtcExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoVGVtcExpc3RbaV0uX2lkID09IHNlbGVjdGVkSUQpIC8v6YGN5Y6G5Ye65p2l5LiA5Liq5pWw5o2uXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFRlbXBMaXN0W2ldID0gbmV3VmFyaWFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKFRlbXBMaXN0Ll9pZCA9PSBzZWxlY3RlZElEKSAvL+WPquacieS4gOS4quaVsOaNruaXtueahOaVsOaNrlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFRlbXBMaXN0W2ldID0gbmV3VmFyaWFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IC8v5Ye95pWw5a+56LGh5Y+377yaIDE2IOagueaNruWGheWuueWAvO+8jOS7juaVsOe7hOS4rei/lOWbnuWAvOaJgOWcqOS9jee9ruOAgiDlpoLmnpzkuI3lrZjlnKjov5Tlm54wXHJcblxyXG4vKuaWueazleivtOaYjlxyXG4gICAgICAgKkBDcmVhdG9yQW5kVGltZSDliJvlu7rkurogR00g5pe26Ze0IDIwMjAgMTIgMjZcclxuICAgICAgICpAbWV0aG9kIOaWueazleWQjSBnZXRTZXFJRGZyb21BcnJcclxuICAgICAgICpAZm9yIOaJgOWxnuexu+WQjS/miJbmqKHlnZflkI0gIHBtSlNUb29sXHJcbiAgICAgICAqQGZ1bmN0aW9uIOWKn+iDveivtOaYjiAg5qC55o2u5YaF5a655YC877yM5LuO5pWw57uE5Lit6L+U5Zue5YC85omA5Zyo5L2N572u44CCIOWmguaenOS4jeWtmOWcqOi/lOWbnjBcclxuICAgICAgICpAbWFya1xyXG4gICAgICAgKkBwYXJhbXvlj4LmlbDnsbvlnot95Y+C5pWw5ZCNIOWPguaVsOivtOaYjlxyXG4gICAgICAgdGVtcFYg6ZyA6KaB5p+l6K+i55qE5Y+Y6YeP5YC8XHJcbiAgICAgICBUZW1wTGlzdCAgIOaJgOWcqOaVsOaNruWvueixoea4heWNlVxyXG4qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFNlcUlEZnJvbUFycih0ZW1wViwgVGVtcExpc3QpIHtcclxuICBpZiAoSXNOdWxsT3JFbXB0eSh0ZW1wVikpIHtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgaWYgKElzTnVsbE9yRW1wdHkoVGVtcExpc3QpKSB7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIGZvciAodmFyIHRlbXBLZXkgaW4gVGVtcExpc3QpIHtcclxuICAgIGlmIChUZW1wTGlzdFt0ZW1wS2V5XSA9PSB0ZW1wVikge1xyXG4gICAgICByZXR1cm4gdGVtcEtleTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAwO1xyXG59IC8v5Ye95pWw5a+56LGh5Y+377yaIDE3IOi/lOWbnuaXtumXtOWAvOeugOefreihqOi+vu+8iOS7iuWkqeS7peaXtumXtOadpeihqOi+vu+8jOaYqOWkqeWPiuS7peWJjeWGmeS4uuaXpeacn++8jOS4jeW4puW5tOagh+ivhu+8iVxyXG5cclxuLyrmlrnms5Xor7TmmI5cclxuICAgICAgICpAQ3JlYXRvckFuZFRpbWUg5Yib5bu65Lq6IEdNIOaXtumXtCAyMDIwIDEyIDI3XHJcbiAgICAgICAqQG1ldGhvZCDmlrnms5XlkI0gZ2V0VGltZVNob3J0U3RyRnJvbVRpbWVcclxuICAgICAgICpAZm9yIOaJgOWxnuexu+WQjS/miJbmqKHlnZflkI0gIHBtSlNUb29sXHJcbiAgICAgICAqQGZ1bmN0aW9uIOWKn+iDveivtOaYjiAg5LuK5aSp5Lul5pe26Ze05p2l6KGo6L6+77yM5pio5aSp5Y+K5Lul5YmN5YaZ5Li65pel5pyf77yM5LiN5bim5bm05qCH6K+GXHJcbiAgICAgICAqQG1hcmtcclxuICAgICAgICpAcGFyYW175Y+C5pWw57G75Z6LfeWPguaVsOWQjSDlj4LmlbDor7TmmI5cclxuICAgICAgIHRlbXBWIOmcgOimgeafpeivoueahOWPmOmHj+WAvFxyXG4gICAgICAgVGVtcExpc3QgICDmiYDlnKjmlbDmja7lr7nosaHmuIXljZVcclxuKi9cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRUaW1lU2hvcnRTdHJGcm9tVGltZSh0ZW1wVGltZVN0cikgLy/lj6rmjqXlj5dEYXRlIFN0cuWvueixoVxyXG57XHJcbiAgaWYgKElzTnVsbE9yRW1wdHkodGVtcFRpbWVTdHIpKSB7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcblxyXG4gIHZhciB0ZW1wbm93ID0gbmV3IERhdGUoKTtcclxuICB2YXIgdGVtcFRpbWUgPSBuZXcgRGF0ZSh0ZW1wVGltZVN0cik7XHJcbiAgdmFyIHRlbXBub3dEYXRlID0gdGVtcG5vdy5nZXRGdWxsWWVhcigpICsgXCIvXCIgKyAodGVtcG5vdy5nZXRNb250aCgpICsgMSkgKyBcIi9cIiArIHRlbXBub3cuZ2V0RGF0ZSgpO1xyXG4gIHZhciB0ZW1wVGltZURhdGUgPSB0ZW1wVGltZS5nZXRGdWxsWWVhcigpICsgXCIvXCIgKyAodGVtcFRpbWUuZ2V0TW9udGgoKSArIDEpICsgXCIvXCIgKyB0ZW1wVGltZS5nZXREYXRlKCk7XHJcbiAgdmFyIFJlc1N0ciA9IFwiXCI7XHJcblxyXG4gIGlmICh0ZW1wbm93RGF0ZSA9PSB0ZW1wVGltZURhdGUpIHtcclxuICAgIFJlc1N0ciA9IGZpbGxaZXJvKHRlbXBUaW1lLmdldEhvdXJzKCkpICsgXCI6XCIgKyBmaWxsWmVybyh0ZW1wVGltZS5nZXRNaW51dGVzKCkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBSZXNTdHIgPSBmaWxsWmVybyh0ZW1wVGltZS5nZXRNb250aCgpICsgMSkgKyBcIi9cIiArIGZpbGxaZXJvKHRlbXBUaW1lLmdldERhdGUoKSArIFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFJlc1N0cjtcclxuXHJcbiAgZnVuY3Rpb24gZmlsbFplcm8odGVtcEludCkgLy/ooaXlhajliY3lr7wwXHJcbiAge1xyXG4gICAgaWYgKHRlbXBJbnQgPCAxMCkge1xyXG4gICAgICByZXR1cm4gXCIwXCIgKyB0ZW1wSW50LnRvU3RyaW5nKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGVtcEludC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gIH1cclxufSAvL+WHveaVsOWvueixoeWPt++8miAxOCBQTUNPSeiuoeeul+WPmOmHj+WunueOsOWHveaVsFxyXG5cclxuLyrmlrnms5Xor7TmmI5cclxuICAgICAgICpAQ3JlYXRvckFuZFRpbWUg5Yib5bu65Lq6IEdNIOaXtumXtCAyMDIwIDEyIDI4XHJcbiAgICAgICAqQG1ldGhvZCDmlrnms5XlkI0gY2FsUE1DT0lcclxuICAgICAgICpAZm9yIOaJgOWxnuexu+WQjS/miJbmqKHlnZflkI0gIHBtSlNUb29sXHJcbiAgICAgICAqQGZ1bmN0aW9uIOWKn+iDveivtOaYjiAg6K6h566XUE1DT0nnmoTmiYDmnInpnIDopoHmnKzlnLDorqHnrpfmiJbovazmjaLnmoTlj5jph4/lgLxcclxuICAgICAgICpAbWFya1xyXG4gICAgICAgKkBwYXJhbXvlj4LmlbDnsbvlnot95Y+C5pWw5ZCNIOWPguaVsOivtOaYjlxyXG4gICAgICAgdGVtcFYg6ZyA6KaB5p+l6K+i55qE5Y+Y6YeP5YC8XHJcbiAgICAgICBUZW1wTGlzdCAgIOaJgOWcqOaVsOaNruWvueixoea4heWNlVxyXG4qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNhbFBNQ09JKFBNQ09JKSAvL+acieS4gOS6m+Wtl+auteaYr+mAmui/h+mBjeWOhlBNQ09JTGlzdCzorqHnrpfojrflvpfnmoTvvIzpgJrov4fmraTlh73mlbDlrozmiJDjgIJcclxue1xyXG4gIC8vUE1TdGF0ZTogXCJcIiwgLy9cdOeKtuaAgVx0T05DUkVBVEU65Yib5bu65Lit77yMVU5QQUNLSU5HOuW3suaLhuWNlSwgUkVMRUFTRTrlt7LkuIvovr7vvIxOT1JFTEVBU0U65pyq5LiL6L6+77yMUFJPRFVDVElPTjrnlJ/kuqfkuK3vvIxFTkRQUk9EVUNUSU9OOueUn+S6p+e7k+adn1xyXG4gIFBNQ09JLmNhbENoYW5nZVRpbWVTdHIgPSBnZXRUaW1lU2hvcnRTdHJGcm9tVGltZShQTUNPSS5QTUNoYW5nZVRpbWUpO1xyXG4gIFBNQ09JLmNhbFpQdWJsaXNoVGltZVNob3J0ID0gZ2V0VGltZVNob3J0U3RyRnJvbVRpbWUoUE1DT0kuWkNUUHVibGlzaFRpbWUpO1xyXG5cclxuICBzd2l0Y2ggKFBNQ09JLlBNT3JkZXJTdGF0ZSkge1xyXG4gICAgY2FzZSBcIk9OQ1JFQVRFXCI6XHJcbiAgICAgIHtcclxuICAgICAgICBQTUNPSS5jYWxQTVN0YXRlID0gXCLliJvlu7rkuK1cIjtcclxuICAgICAgICBQTUNPSS5jYWxUYXNrU3RhdGVzID0gW3tcclxuICAgICAgICAgIGNhbFN0YWdlTmFtZTogXCLku7vliqHlj5HluINcIixcclxuICAgICAgICAgIGNhbFN0YWdlU3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyYXk7IGJvcmRlci1jb2xvcjogZ3JheTtcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGNhbFN0YWdlTmFtZTogXCLnrYnlvoXmjojmnYNcIixcclxuICAgICAgICAgIGNhbFN0YWdlU3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyYXk7IGJvcmRlci1jb2xvcjogZ3JheTtcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGNhbFN0YWdlTmFtZTogXCLov4fnqIvmiafooYxcIixcclxuICAgICAgICAgIGNhbFN0YWdlU3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyYXk7IGJvcmRlci1jb2xvcjogZ3JheTtcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGNhbFN0YWdlTmFtZTogXCLlrozlt6XnlLPor7dcIixcclxuICAgICAgICAgIGNhbFN0YWdlU3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyYXk7IGJvcmRlci1jb2xvcjogZ3JheTtcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGNhbFN0YWdlTmFtZTogXCLlrozlt6XpqozmlLZcIixcclxuICAgICAgICAgIGNhbFN0YWdlU3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyYXk7IGJvcmRlci1jb2xvcjogZ3JheTtcIlxyXG4gICAgICAgIH1dO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBcIk5PUkVMRUFTRVwiOlxyXG4gICAgICB7XHJcbiAgICAgICAgLy8gUE1DT0kuY2FsUE1TdGF0ZSA9IFwi5b6F5Y+R5biDXCJcclxuICAgICAgICBQTUNPSS5jYWxQTVN0YXRlID0gXCLnvJbovpHkuK1cIjtcclxuICAgICAgICBQTUNPSS5jYWxUYXNrU3RhdGVzID0gW3tcclxuICAgICAgICAgIGNhbFN0YWdlTmFtZTogXCLku7vliqHlj5HluINcIixcclxuICAgICAgICAgIGNhbFN0YWdlU3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyYXk7IGJvcmRlci1jb2xvcjogZ3JheTtcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGNhbFN0YWdlTmFtZTogXCLnrYnlvoXmjojmnYNcIixcclxuICAgICAgICAgIGNhbFN0YWdlU3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyYXk7IGJvcmRlci1jb2xvcjogZ3JheTtcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGNhbFN0YWdlTmFtZTogXCLov4fnqIvmiafooYxcIixcclxuICAgICAgICAgIGNhbFN0YWdlU3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyYXk7IGJvcmRlci1jb2xvcjogZ3JheTtcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGNhbFN0YWdlTmFtZTogXCLlrozlt6XnlLPor7dcIixcclxuICAgICAgICAgIGNhbFN0YWdlU3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyYXk7IGJvcmRlci1jb2xvcjogZ3JheTtcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGNhbFN0YWdlTmFtZTogXCLlrozlt6XpqozmlLZcIixcclxuICAgICAgICAgIGNhbFN0YWdlU3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyYXk7IGJvcmRlci1jb2xvcjogZ3JheTtcIlxyXG4gICAgICAgIH1dO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBcIlJFTEVBU0VcIjpcclxuICAgICAge1xyXG4gICAgICAgIFBNQ09JLmNhbFBNU3RhdGUgPSBcIuW3suWPkeW4g1wiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBcIkFDQ0VQVEVEXCI6XHJcbiAgICAgIHtcclxuICAgICAgICBQTUNPSS5jYWxQTVN0YXRlID0gXCLlt7Llj5HluINcIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgLy8yMDIxMDIyNVxyXG5cclxuICAgIGNhc2UgXCJQVUJMSVNIXCI6XHJcbiAgICAgIHtcclxuICAgICAgICBQTUNPSS5jYWxQTVN0YXRlID0gXCLlt7Llj5HluINcIjtcclxuICAgICAgICBQTUNPSS5jYWxUYXNrU3RhdGVzID0gW3tcclxuICAgICAgICAgIGNhbFN0YWdlTmFtZTogXCLku7vliqHlj5HluINcIixcclxuICAgICAgICAgIGNhbFN0YWdlU3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZWVuOyBib3JkZXItY29sb3I6IGdyYXk7XCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBjYWxTdGFnZU5hbWU6IFwi562J5b6F5o6I5p2DXCIsXHJcbiAgICAgICAgICBjYWxTdGFnZVN0eWxlOiBcImJhY2tncm91bmQtY29sb3I6bGlnaHRncmF5OyBib3JkZXItY29sb3I6IGdyYXk7XCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBjYWxTdGFnZU5hbWU6IFwi6L+H56iL5omn6KGMXCIsXHJcbiAgICAgICAgICBjYWxTdGFnZVN0eWxlOiBcImJhY2tncm91bmQtY29sb3I6bGlnaHRncmF5OyBib3JkZXItY29sb3I6IGdyYXk7XCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBjYWxTdGFnZU5hbWU6IFwi5a6M5bel55Sz6K+3XCIsXHJcbiAgICAgICAgICBjYWxTdGFnZVN0eWxlOiBcImJhY2tncm91bmQtY29sb3I6bGlnaHRncmF5OyBib3JkZXItY29sb3I6IGdyYXk7XCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBjYWxTdGFnZU5hbWU6IFwi5a6M5bel6aqM5pS2XCIsXHJcbiAgICAgICAgICBjYWxTdGFnZVN0eWxlOiBcImJhY2tncm91bmQtY29sb3I6bGlnaHRncmF5OyBib3JkZXItY29sb3I6IGdyYXk7XCJcclxuICAgICAgICB9XTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgXCJXYWl0QXV0aG9yaXplXCI6XHJcbiAgICAgIHtcclxuICAgICAgICBQTUNPSS5jYWxQTVN0YXRlID0gXCLlvoXmjojmnYNcIjtcclxuICAgICAgICBQTUNPSS5jYWxUYXNrU3RhdGVzID0gW3tcclxuICAgICAgICAgIGNhbFN0YWdlTmFtZTogXCLku7vliqHlj5HluINcIixcclxuICAgICAgICAgIGNhbFN0YWdlU3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZWVuOyBib3JkZXItY29sb3I6IGdyYXk7XCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBjYWxTdGFnZU5hbWU6IFwi562J5b6F5o6I5p2DXCIsXHJcbiAgICAgICAgICBjYWxTdGFnZVN0eWxlOiBcImJhY2tncm91bmQtY29sb3I6bGlnaHRncmVlbjsgYm9yZGVyLWNvbG9yOiBncmF5O1wiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgY2FsU3RhZ2VOYW1lOiBcIui/h+eoi+aJp+ihjFwiLFxyXG4gICAgICAgICAgY2FsU3RhZ2VTdHlsZTogXCJiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JheTsgYm9yZGVyLWNvbG9yOiBncmF5O1wiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgY2FsU3RhZ2VOYW1lOiBcIuWujOW3peeUs+ivt1wiLFxyXG4gICAgICAgICAgY2FsU3RhZ2VTdHlsZTogXCJiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JheTsgYm9yZGVyLWNvbG9yOiBncmF5O1wiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgY2FsU3RhZ2VOYW1lOiBcIuWujOW3pemqjOaUtlwiLFxyXG4gICAgICAgICAgY2FsU3RhZ2VTdHlsZTogXCJiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JheTsgYm9yZGVyLWNvbG9yOiBncmF5O1wiXHJcbiAgICAgICAgfV07XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIFwiQUxMT1dFRFwiOlxyXG4gICAgICB7XHJcbiAgICAgICAgUE1DT0kuY2FsUE1TdGF0ZSA9IFwi5omn6KGM5LitXCI7XHJcbiAgICAgICAgUE1DT0kuY2FsVGFza1N0YXRlcyA9IFt7XHJcbiAgICAgICAgICBjYWxTdGFnZU5hbWU6IFwi5Lu75Yqh5Y+R5biDXCIsXHJcbiAgICAgICAgICBjYWxTdGFnZVN0eWxlOiBcImJhY2tncm91bmQtY29sb3I6bGlnaHRncmVlbjsgYm9yZGVyLWNvbG9yOiBncmF5O1wiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgY2FsU3RhZ2VOYW1lOiBcIuetieW+heaOiOadg1wiLFxyXG4gICAgICAgICAgY2FsU3RhZ2VTdHlsZTogXCJiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JlZW47IGJvcmRlci1jb2xvcjogZ3JheTtcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGNhbFN0YWdlTmFtZTogXCLov4fnqIvmiafooYxcIixcclxuICAgICAgICAgIGNhbFN0YWdlU3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZWVuOyBib3JkZXItY29sb3I6IGdyYXk7XCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBjYWxTdGFnZU5hbWU6IFwi5a6M5bel55Sz6K+3XCIsXHJcbiAgICAgICAgICBjYWxTdGFnZVN0eWxlOiBcImJhY2tncm91bmQtY29sb3I6bGlnaHRncmF5OyBib3JkZXItY29sb3I6IGdyYXk7XCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBjYWxTdGFnZU5hbWU6IFwi5a6M5bel6aqM5pS2XCIsXHJcbiAgICAgICAgICBjYWxTdGFnZVN0eWxlOiBcImJhY2tncm91bmQtY29sb3I6bGlnaHRncmF5OyBib3JkZXItY29sb3I6IGdyYXk7XCJcclxuICAgICAgICB9XTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgXCJVTkFDQ0VQVEVEXCI6XHJcbiAgICAgIHtcclxuICAgICAgICBQTUNPSS5jYWxQTVN0YXRlID0gXCLlvoXpqozmlLZcIjtcclxuICAgICAgICBQTUNPSS5jYWxUYXNrU3RhdGVzID0gW3tcclxuICAgICAgICAgIGNhbFN0YWdlTmFtZTogXCLku7vliqHlj5HluINcIixcclxuICAgICAgICAgIGNhbFN0YWdlU3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZWVuOyBib3JkZXItY29sb3I6IGdyYXk7XCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBjYWxTdGFnZU5hbWU6IFwi562J5b6F5o6I5p2DXCIsXHJcbiAgICAgICAgICBjYWxTdGFnZVN0eWxlOiBcImJhY2tncm91bmQtY29sb3I6bGlnaHRncmVlbjsgYm9yZGVyLWNvbG9yOiBncmF5O1wiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgY2FsU3RhZ2VOYW1lOiBcIui/h+eoi+aJp+ihjFwiLFxyXG4gICAgICAgICAgY2FsU3RhZ2VTdHlsZTogXCJiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JlZW47IGJvcmRlci1jb2xvcjogZ3JheTtcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGNhbFN0YWdlTmFtZTogXCLlrozlt6XnlLPor7dcIixcclxuICAgICAgICAgIGNhbFN0YWdlU3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZWVuOyBib3JkZXItY29sb3I6IGdyYXk7XCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBjYWxTdGFnZU5hbWU6IFwi5a6M5bel6aqM5pS2XCIsXHJcbiAgICAgICAgICBjYWxTdGFnZVN0eWxlOiBcImJhY2tncm91bmQtY29sb3I6bGlnaHRncmF5OyBib3JkZXItY29sb3I6IGdyYXk7XCJcclxuICAgICAgICB9XTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgXCJBQ0NFUFRcIjpcclxuICAgICAge1xyXG4gICAgICAgIFBNQ09JLmNhbFBNU3RhdGUgPSBcIumqjOaUtlwiO1xyXG4gICAgICAgIFBNQ09JLmNhbFRhc2tTdGF0ZXMgPSBbe1xyXG4gICAgICAgICAgY2FsU3RhZ2VOYW1lOiBcIuS7u+WKoeWPkeW4g1wiLFxyXG4gICAgICAgICAgY2FsU3RhZ2VTdHlsZTogXCJiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JlZW47IGJvcmRlci1jb2xvcjogZ3JheTtcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGNhbFN0YWdlTmFtZTogXCLnrYnlvoXmjojmnYNcIixcclxuICAgICAgICAgIGNhbFN0YWdlU3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZWVuOyBib3JkZXItY29sb3I6IGdyYXk7XCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBjYWxTdGFnZU5hbWU6IFwi6L+H56iL5omn6KGMXCIsXHJcbiAgICAgICAgICBjYWxTdGFnZVN0eWxlOiBcImJhY2tncm91bmQtY29sb3I6bGlnaHRncmVlbjsgYm9yZGVyLWNvbG9yOiBncmF5O1wiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgY2FsU3RhZ2VOYW1lOiBcIuWujOW3peeUs+ivt1wiLFxyXG4gICAgICAgICAgY2FsU3RhZ2VTdHlsZTogXCJiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JlZW47IGJvcmRlci1jb2xvcjogZ3JheTtcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGNhbFN0YWdlTmFtZTogXCLlrozlt6XpqozmlLZcIixcclxuICAgICAgICAgIGNhbFN0YWdlU3R5bGU6IFwiYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZWVuOyBib3JkZXItY29sb3I6IGdyYXk7XCJcclxuICAgICAgICB9XTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgXCJQUk9EVUNUSU9OXCI6XHJcbiAgICAgIHtcclxuICAgICAgICBQTUNPSS5jYWxQTVN0YXRlID0gXCLnlJ/kuqfkuK1cIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgXCJFTkRQUk9EVUNUSU9OXCI6XHJcbiAgICAgIHtcclxuICAgICAgICBQTUNPSS5jYWxQTVN0YXRlID0gXCLnlJ/kuqfnu5PmnZ9cIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgXCJVTlBBQ0tJTkdcIjpcclxuICAgICAge1xyXG4gICAgICAgIC8vWkNU55So5LiN5YiwXHJcbiAgICAgICAgUE1DT0kuY2FsUE1TdGF0ZSA9IFwi5bey5ouG5Y2VXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB7XHJcbiAgICAgICAgUE1DT0kuY2FsUE1TdGF0ZSA9IFwi54q25oCB5pyq55+lXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICB9IC8v5Lu75Yqh5pyq5Y+R5biD5pe277yMWkNUQ09JTGF0aXTlkoxaQ1RDT0lMb25nZ2l05Li6dW5kZWZpbmVkXHJcblxyXG5cclxuICBpZiAoSXNOdWxsT3JFbXB0eShQTUNPSS5aQ1RDT0lMYXRpdCkgfHwgSXNOdWxsT3JFbXB0eShQTUNPSS5aQ1RDT0lMb25naXQpKSB7XHJcbiAgICBQTUNPSS5jYWxUYXNrRGlzdGFuY2UgPSBcIktNXCI7IC8v5pyq5Y+R5biD5pe277yM6Led56a75Li6MFxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoYXBwLmdsb2JhbERhdGEuQ3VycmVudExhdGl0dWRlICE9IDAgfHwgYXBwLmdsb2JhbERhdGEuQ3VycmVudExvbmdpdHVkZSAhPSAwKSB7XHJcbiAgICAgIFBNQ09JLmNhbFRhc2tEaXN0YW5jZSA9IGdldERpc3RhbmNlKGFwcC5nbG9iYWxEYXRhLkN1cnJlbnRMYXRpdHVkZSwgYXBwLmdsb2JhbERhdGEuQ3VycmVudExvbmdpdHVkZSwgUE1DT0kuWkNUQ09JTGF0aXQsIFBNQ09JLlpDVENPSUxvbmdpdCk7XHJcbiAgICAgIFBNQ09JLmNhbFRhc2tEaXN0YW5jZSA9IE1hdGgucm91bmQoUE1DT0kuY2FsVGFza0Rpc3RhbmNlKTtcclxuICAgICAgUE1DT0kuY2FsVGFza0Rpc3RhbmNlID0gUE1DT0kuY2FsVGFza0Rpc3RhbmNlID4gMTAwID8gXCI+MTAwS01cIiA6IFBNQ09JLmNhbFRhc2tEaXN0YW5jZSArIFwiS01cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFBNQ09JLmNhbFRhc2tEaXN0YW5jZSA9IFwiS01cIjtcclxuICAgIH1cclxuICB9IC8v6K6h566X6L+b5bqm5p2hXHJcblxyXG4gIC8qUE1DT0kuY2FsVGFza1N0YXRlcyA9IFtcclxuICAgIHtcclxuICAgICAgY2FsU3RhZ2VOYW1lIDogXCLku7vliqHlj5HluINcIixcclxuICAgICAgY2FsU3RhZ2VTdHlsZSA6IFwiYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZWVuOyBib3JkZXItY29sb3I6IGdyYXk7XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICBjYWxTdGFnZU5hbWUgOiBcIuetieW+heaOiOadg1wiLFxyXG4gICAgY2FsU3RhZ2VTdHlsZSA6IFwiYmFja2dyb3VuZC1jb2xvcjpsaWdodGdyZWVuOyBib3JkZXItY29sb3I6IGdyYXk7XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgY2FsU3RhZ2VOYW1lIDogXCLov4fnqIvmiafooYxcIixcclxuICAgIGNhbFN0YWdlU3R5bGUgOiBcImJhY2tncm91bmQtY29sb3I6bGlnaHRncmVlbjsgYm9yZGVyLWNvbG9yOiBncmF5O1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgIGNhbFN0YWdlTmFtZSA6IFwi5a6M5bel55Sz6K+3XCIsXHJcbiAgICBjYWxTdGFnZVN0eWxlIDogXCJiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JheTsgYm9yZGVyLWNvbG9yOiBncmF5O1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgIGNhbFN0YWdlTmFtZSA6IFwi5a6M5bel6aqM5pS2XCIsXHJcbiAgICBjYWxTdGFnZVN0eWxlIDogXCJiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Z3JheTsgYm9yZGVyLWNvbG9yOiBncmF5O1wiLFxyXG4gICAgfVxyXG4gICAgXSovXHJcblxyXG59IC8v5Ye95pWw5a+56LGh5Y+377yaIDE5IOagueaNrl9pZOWAvO+8jOS7juaVsOe7hFRlbXBMaXN05Lit5Yig6Zmk5LiA5p2hX2lk5a2X5q615Li6c2VsZWN0ZWRJROWAvOeahOaVsOaNrlxyXG5cclxuLyrmlrnms5Xor7TmmI5cclxuICAgICAgICpAQ3JlYXRvckFuZFRpbWUg5Yib5bu65Lq6IFNFMTMg5pe26Ze0IDIwMjEgMDEgMjBcclxuICAgICAgICpAbWV0aG9kIOaWueazleWQjSBEZWxldGVGcm9tTGlzdCBcclxuICAgICAgICpAZm9yIOaJgOWxnuexu+WQjS/miJbmqKHlnZflkI0gIHBtSlNUb29sXHJcbiAgICAgICAqQGZ1bmN0aW9uIOWKn+iDveivtOaYjiAg6YCa6L+HaWQs5Yig6Zmk5pWw57uE5Lit55qE5pWw5o2uXHJcbiAgICAgICAqQG1hcmtcclxuICAgICAgICpAcGFyYW175Y+C5pWw57G75Z6LfeWPguaVsOWQjSDlj4LmlbDor7TmmI5cclxuICAgICAgIHNlbGVjdGVkSUQg6KKr6YCJ5oup5a+56LGh55qEIF9pZOWAvFxyXG4gICAgICAgVGVtcExpc3QgICDmiYDlnKjmlbDmja7lr7nosaHmuIXljZVcclxuKi9cclxuXHJcblxyXG5mdW5jdGlvbiBEZWxldGVGcm9tTGlzdChzZWxlY3RlZElELCBUZW1wTGlzdCkge1xyXG4gIGlmICghSXNOdWxsT3JFbXB0eShzZWxlY3RlZElEKSAmJiAhSXNOdWxsT3JFbXB0eShUZW1wTGlzdCkpIHtcclxuICAgIGlmIChUZW1wTGlzdC5sZW5ndGgpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBUZW1wTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChUZW1wTGlzdFtpXS5faWQgPT0gc2VsZWN0ZWRJRCkgLy/pgY3ljoblh7rmnaXkuIDkuKrmlbDmja5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgVGVtcExpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gVGVtcExpc3Q7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBUZW1wTGlzdDsgLy/ov5Tlm57mjqXmlLbliLDnmoTmlbDnu4TlhoXlrrlcclxufSAvL+WHveaVsOWvueixoeWPt++8miAyMCDmoLnmja7ml6XmnJ/lrZfnrKbkuLIg6L+U5Zue5aKe5Yqg5aSp5pWwXHJcblxyXG4vKuaWueazleivtOaYjlxyXG4gICAgICAgKkBDcmVhdG9yQW5kVGltZSDliJvlu7rkurogR00g5pe26Ze0IDIwMjEgMDEgMjBcclxuICAgICAgICpAbWV0aG9kIOaWueazleWQjSBkYXRlQWRkRGF5cyBcclxuICAgICAgICpAZm9yIOaJgOWxnuexu+WQjS/miJbmqKHlnZflkI0gIHBtSlNUb29sXHJcbiAgICAgICAqQGZ1bmN0aW9uIOWKn+iDveivtOaYjiAg5qC55o2u5pel5pyf5a2X56ym5LiyIOi/lOWbnuWinuWKoOWkqeaVsFxyXG4gICAgICAgKkBtYXJrXHJcbiAgICAgICDml6XmnJ/liqDlpKnmlbDnmoTmlrnms5VcclxuICAgICAgIGRhdGFTdHLml6XmnJ/lrZfnrKbkuLJcclxuICAgICAgIGRheUNvdW50IOimgeWinuWKoOeahOWkqeaVsFxyXG4gICAgICAgcmV0dXJuIOWinuWKoG7lpKnlkI7nmoTml6XmnJ/lrZfnrKbkuLJcclxuKi9cclxuXHJcblxyXG5mdW5jdGlvbiBkYXRlQWRkRGF5cyhkYXRhU3RyLCBkYXlDb3VudCkge1xyXG4gIHZhciBzdHJkYXRlID0gR2V0U3RyKGRhdGFTdHIpOyAvL+aXpeacn+Wtl+espuS4slxyXG5cclxuICB2YXIgaXNkYXRlID0gbmV3IERhdGUoc3RyZGF0ZS5yZXBsYWNlKC8tL2csIFwiL1wiKSk7IC8v5oqK5pel5pyf5a2X56ym5Liy6L2s5o2i5oiQ5pel5pyf5qC85byPXHJcblxyXG4gIGlzZGF0ZSA9IG5ldyBEYXRlKChpc2RhdGUgLyAxMDAwICsgODY0MDAgKiBkYXlDb3VudCkgKiAxMDAwKTsgLy/ml6XmnJ/liqAx5aSpXHJcblxyXG4gIHZhciBwZGF0ZSA9IGlzZGF0ZS5nZXRGdWxsWWVhcigpICsgXCItXCIgKyAoaXNkYXRlLmdldE1vbnRoKCkgKyAxKSArIFwiLVwiICsgaXNkYXRlLmdldERhdGUoKTsgLy/miorml6XmnJ/moLzlvI/ovazmjaLmiJDlrZfnrKbkuLJcclxuXHJcbiAgcmV0dXJuIHBkYXRlO1xyXG59IC8v5Ye95pWw5a+56LGh5Y+377yaIDIxIOi+k+WFpemqjOivge+8iOWPr+agueaNrumcgOimgeaWsOWinmNhc2Xlop7liqDvvIlcclxuXHJcbi8q5pa55rOV6K+05piOXHJcbiAgICAgICAqQENyZWF0b3JBbmRUaW1lIOWIm+W7uuS6uiBTRTEzIOaXtumXtCAyMDIxIDAyIDJcclxuICAgICAgICpAbWV0aG9kIOaWueazleWQjSBpbnB1dHZhbGlkYXRpb24gXHJcbiAgICAgICAqQGZvciDmiYDlsZ7nsbvlkI0v5oiW5qih5Z2X5ZCNICBwbUpTVG9vbFxyXG4gICAgICAgKkBmdW5jdGlvbiDlip/og73or7TmmI4gICDmraPliJnooajovr7lvI/pqozor4HovpPlhaXlgLx2YWzmmK/lkKbkuLrnibnlrprnsbvlnot0eXBlXHJcbiAgICAgICAqQG1hcmtcclxuICAgICAgIOi+k+WFpemqjOivgSBlZzppbnB1dHZhbGlkYXRpb24oXCIxMjMuNVwiLFwi5q2j5rWu54K55pWwXCIpICDov5Tlm57nu5PmnpzkuLpyZXR1cm4gdHJ1ZVxyXG4gICAgICAgdmFsIOi+k+WFpeeahOWAvFxyXG4gICAgICAgdHlwZSDnsbvlnotcclxuICAgICAgIHJldHVybiB0cnVlKOmqjOivgemAmui/hynvvJtmYWxzZSjpqozor4HlpLHotKUpXHJcbiovXHJcblxyXG5cclxuZnVuY3Rpb24gaW5wdXR2YWxpZGF0aW9uKHZhbCwgdHlwZSkge1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBcIuato+a1rueCueaVsFwiOlxyXG4gICAgICAvL+Wkp+S6jjDnmoTmlbTmlbDlkozlsI/mlbBcclxuICAgICAge1xyXG4gICAgICAgIGlmICghL14oKFswLTldK1xcLlswLTldKlsxLTldWzAtOV0qKXwoWzAtOV0qWzEtOV1bMC05XSpcXC5bMC05XSspfChbMC05XSpbMS05XVswLTldKikpJC8udGVzdCh2YWwpKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgXCLpnZ7otJ/mta7ngrnmlbBcIjpcclxuICAgICAgLy/pnZ7otJ/mta7ngrnmlbDvvIjmraPmta7ngrnmlbAgKyAw77yJXHJcbiAgICAgIHtcclxuICAgICAgICBpZiAoIS9eXFxkKyhcXC5cXGQrKT8kLy50ZXN0KHZhbCkpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBcIuaVtOaVsFwiOlxyXG4gICAgICB7XHJcbiAgICAgICAgaWYgKCEvXi0/XFxkKyQvLnRlc3QodmFsKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIFwi6aqM6K+B6Z2e6Zu255qE5q2j5pW05pWwXCI6XHJcbiAgICAgIC8v6aqM6K+B6Z2e6Zu255qE5q2j5pW05pWwXHJcbiAgICAgIHtcclxuICAgICAgICBpZiAoIS9eXFwrP1sxLTldWzAtOV0qJC8udGVzdCh2YWwpKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgXCLpqozor4HpnZ7otJ/mlbTmlbBcIjpcclxuICAgICAgLy/pqozor4HpnZ7otJ/mlbTmlbDvvIjmraPmlbTmlbAgKyAw77yJXHJcbiAgICAgIHtcclxuICAgICAgICBpZiAoIS9eXFxkKyQvLnRlc3QodmFsKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIFwi6Lqr5Lu96K+B5Y+3XCI6XHJcbiAgICAgIC8v6aqM6K+B6Lqr5Lu96K+B5Y+377yIMTXkvY3miJYxOOS9jeaVsOWtl++8iVxyXG4gICAgICB7XHJcbiAgICAgICAgaWYgKCEvXlxcZHsxNX18XFxke30xOCQvLnRlc3QodmFsKSkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAvKmNhc2UgXCJFbWFpbOWcsOWdgFwiOiAvL+mqjOivgUVtYWls5Zyw5Z2AXHJcbiAgICB7XHJcbiAgICAgIGlmICghL15cXHcrWy0rLl1cXHcrKSpAXFx3KyhbLS5dXFx3KykqXFwuXFx3KyhbLS5dXFx3KykqJC8udGVzdCh2YWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0qL1xyXG5cclxuICAgIGNhc2UgXCLnianmlpnlj7flkI1cIjpcclxuICAgICAgLy/pqozor4Hnianmlpnlj7fnoIHnu4TlkIjnmoTlkIjms5XmgKdcclxuICAgICAge1xyXG4gICAgICAgIGlmIChJc051bGxPckVtcHR5KHZhbCkpIHtcclxuICAgICAgICAgIHJldHVybiBcIuS4jeiDveS4uuepulwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbC5pbmRleE9mKFwiOlwiKSA8IDApIHtcclxuICAgICAgICAgIGlmICh2YWwuaW5kZXhPZihcIu+8mlwiKSA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwi6ZyA6KaB55SoOuWIhumalOeJqeaWmeWPt+WSjOeJqeaWmeWQjeOAglwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFwiT0tcIjtcclxuICAgICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICB9XHJcbn0gLy/lh73mlbDlr7nosaHlj7fvvJogMjIg5LuO5bGe5oCn6aG15LiL5ouJ5qGG5YaF5a656I635b6X55u45ZCM55qE5YC855qE6aG65bqP5Zyw5Z2A77yM55So5LqO5YiH5o2i6LWL5YC8XHJcblxyXG4vKuaWueazleivtOaYjlxyXG4gICAgICAgKkBDcmVhdG9yQW5kVGltZSDliJvlu7rkurogR00g5pe26Ze0IDIwMjEgMDIgMTJcclxuICAgICAgICpAbWV0aG9kIOaWueazleWQjSBJbnB1dEludG9MaXN0XHJcbiAgICAgICAqQGZvciDmiYDlsZ7nsbvlkI0v5oiW5qih5Z2X5ZCNICBwbUpTVG9vbFxyXG4gICAgICAgKkBmdW5jdGlvbiDlip/og73or7TmmI4gICDlsZ7mgKfpobXkuIvmi4nmoYbvvIzlpoLmnpznm7TmjqXotYvlgLzkuI3og73nm7TmjqXmmL7npLrjgILlsZ7mgKfpobXkuIvmi4nmoYbpgJrov4fmlbDlgLzlnLDlnYDmnaXotYvlgLznmoTjgIJcclxuICAgICAgICpAbWFya1xyXG4gICAgICAgaW5wdXRWYWx1ZTog6L6T5YWl5YC8XHJcbiAgICAgICBWYWx1ZUxpc3Q6ICDkuIvmi4nmuIXljZXlr7nosaFcclxuICAgICAgIHJldHVybiDov5Tlm57mlbDnu4TlnLDlnYDlgLzjgIIg5rKh5pyJ5om+5Yiw6L+U5ZueLTFcclxuKi9cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZVNxSW5MaXN0KGlucHV0VmFsdWUsIFZhbHVlTGlzdCkge1xyXG4gIGlmICghSXNOdWxsT3JFbXB0eShpbnB1dFZhbHVlKSAmJiAhSXNOdWxsT3JFbXB0eShWYWx1ZUxpc3QpKSB7XHJcbiAgICBpZiAoVmFsdWVMaXN0Lmxlbmd0aCkge1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IFZhbHVlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChWYWx1ZUxpc3RbaV0gPT0gaW5wdXRWYWx1ZSkgLy/pgY3ljoblh7rmnaXkuIDkuKrmlbDmja5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChWYWx1ZUxpc3QgPT0gaW5wdXRWYWx1ZSkgLy/lj6rmnInkuIDkuKrmlbDmja7ml7bnmoTmlbDmja5cclxuICAgICAgICB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7IC8v5LiN5piv5pWw57uE77yM5LiN5bqU6K+l55So5p2l6YCJ5oupXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIC0xOyAvL+ayoeacieaJvuWIsOi/lOWbnuS4gOS4quWuieWFqOeahOWAvFxyXG59IC8v5Ye95pWw5a+56LGh5Y+377yaIDIzIOagueaNruagh+ivhuWtl+espu+8jOS7juWtl+espuS4suWIh+WHuuW3pui+ueeahOS4gOmDqOWIhlxyXG5cclxuLyrmlrnms5Xor7TmmI5cclxuICAgICAgICpAQ3JlYXRvckFuZFRpbWUg5Yib5bu65Lq6IEdNIOaXtumXtCAyMDIxIDAyIDE3XHJcbiAgICAgICAqQG1ldGhvZCDmlrnms5XlkI0gZ2V0U3RyTGVmdFxyXG4gICAgICAgKkBmb3Ig5omA5bGe57G75ZCNL+aIluaooeWdl+WQjSAgcG1KU1Rvb2xcclxuICAgICAgICpAZnVuY3Rpb24g5Yqf6IO96K+05piOICAgIOagueaNruagh+ivhuWtl+espu+8jOS7juWtl+espuS4suWIh+WHuuW3pui+ueeahOS4gOmDqOWIhiAo5rOo5oSP5LuO5bC+6YOo5ZCR5YmN5pCc57SiKVxyXG4gICAgICAgKkBtYXJrXHJcbiAgICAgICB0ZW1wU3RyOiAgIOmVv+Wtl+espuS4slxyXG4gICAgICAgdGVtcE1hcms6ICDmoIfor4blrZfnrKbkuLJcclxuICAgICAgIHJldHVybjogICAg5a2X56ym5LiyXHJcbiovXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0U3RyTGVmdCh0ZW1wU3RyLCB0ZW1wTWFyaykge1xyXG4gIGlmICghSXNOdWxsT3JFbXB0eSh0ZW1wU3RyKSkge1xyXG4gICAgdmFyIHRlbXBSZXMgPSB0ZW1wU3RyLnN1YnN0cigwLCB0ZW1wU3RyLmxhc3RJbmRleE9mKHRlbXBNYXJrKSk7XHJcblxyXG4gICAgaWYgKCFJc051bGxPckVtcHR5KHRlbXBSZXMpKSB7XHJcbiAgICAgIHJldHVybiB0ZW1wUmVzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRlbXBTdHI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gXCJcIjtcclxufSAvL+WHveaVsOWvueixoeWPt++8miAyNCDmoLnmja7moIfor4blrZfnrKbvvIzku47lrZfnrKbkuLLliIflh7rlj7PovrnnmoTkuIDpg6jliIZcclxuXHJcbi8q5pa55rOV6K+05piOXHJcbiAgICAgICAqQENyZWF0b3JBbmRUaW1lIOWIm+W7uuS6uiBHTSDml7bpl7QgMjAyMSAwMiAxN1xyXG4gICAgICAgKkBtZXRob2Qg5pa55rOV5ZCNIGdldFN0clJpZ2h0XHJcbiAgICAgICAqQGZvciDmiYDlsZ7nsbvlkI0v5oiW5qih5Z2X5ZCNICBwbUpTVG9vbFxyXG4gICAgICAgKkBmdW5jdGlvbiDlip/og73or7TmmI4gICAg5qC55o2u5qCH6K+G5a2X56ym77yM5LuO5a2X56ym5Liy5YiH5Ye65bem6L6555qE5LiA6YOo5YiGICAo5rOo5oSP5LuO5bC+6YOo5ZCR5YmN5pCc57SiKVxyXG4gICAgICAgKkBtYXJrXHJcbiAgICAgICB0ZW1wU3RyOiAgIOmVv+Wtl+espuS4slxyXG4gICAgICAgdGVtcE1hcms6ICDmoIfor4blrZfnrKbkuLJcclxuICAgICAgIHJldHVybjogICAg5a2X56ym5LiyXHJcbiovXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0U3RyUmlnaHQodGVtcFN0ciwgdGVtcE1hcmspIHtcclxuICBpZiAoIUlzTnVsbE9yRW1wdHkodGVtcFN0cikpIHtcclxuICAgIHZhciB0ZW1wUmVzID0gdGVtcFN0ci5zdWJzdHJpbmcodGVtcFN0ci5sYXN0SW5kZXhPZih0ZW1wTWFyaykgKyB0ZW1wTWFyay5sZW5ndGgpO1xyXG5cclxuICAgIGlmICghSXNOdWxsT3JFbXB0eSh0ZW1wUmVzKSkge1xyXG4gICAgICByZXR1cm4gdGVtcFJlcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0ZW1wU3RyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFwiXCI7XHJcbn0gLy/lh73mlbDlr7nosaHlj7fvvJogMjUg5rWu6LW35LiA5Liq5o6n5Lu2XHJcblxyXG4vKuaWueazleivtOaYjlxyXG4gKkBDcmVhdG9yQW5kVGltZSDliJvlu7rkurogR00g5pe26Ze0IDIwMjEgMDIgMTdcclxuICpAbWV0aG9kIOaWueazleWQjSBsaWdodE9uZUNvbnRyb2xcclxuICpAZm9yIOaJgOWxnuexu+WQjS/miJbmqKHlnZflkI0gIHBtSlNUb29sXHJcbiAqQGZ1bmN0aW9uIOWKn+iDveivtOaYjiAgICDmta7otbfkuIDkuKrmjqfku7ZcclxuICpAbWFya1xyXG4gKi9cclxuXHJcblxyXG5mdW5jdGlvbiBsaWdodE9uZUNvbnRyb2wodGVtcENvbnRyb2wpIHtcclxuICAvL+S4jei/lOWbnuWPquWBmuato+ehrueahOiuvue9rlxyXG4gIHZhciBidG5TZWxlY3RlZFN0eWxlID0gXCIgYm94LXNoYWRvdzogMnB4IDJweCA1cHggIzAwMDtcIjsgLy/nlKjkuo7liqjmgIHooajovr7mjInpkq7pgInkuK3nmoTnirbmgIFcclxuXHJcbiAgdmFyIGJ0blVuU2VsZWN0ZWRTdHlsZSA9IFwiIGJveC1zaGFkb3c6IDBweCAwcHggMHB4ICMwMDA7XCI7IC8v55So5LqO5Yqo5oCB6KGo6L6+5oyJ6ZKu5rKh5pyJ6YCJ5Lit55qE54q25oCBXHJcblxyXG4gIHRlbXBDb250cm9sLnNlbGVjdGVkU3R5bGUgPSBidG5TZWxlY3RlZFN0eWxlO1xyXG59IC8v5Ye95pWw5a+56LGh5Y+377yaIDI1IOaMieS4i+S4gOS4quaOp+S7tlxyXG5cclxuLyrmlrnms5Xor7TmmI5cclxuICpAQ3JlYXRvckFuZFRpbWUg5Yib5bu65Lq6IEdNIOaXtumXtCAyMDIxIDAyIDE3XHJcbiAqQG1ldGhvZCDmlrnms5XlkI0gdW5MaWdodE9uZUNvbnRyb2xcclxuICpAZm9yIOaJgOWxnuexu+WQjS/miJbmqKHlnZflkI0gIHBtSlNUb29sXHJcbiAqQGZ1bmN0aW9uIOWKn+iDveivtOaYjiAgICDmta7otbfkuIDkuKrmjqfku7ZcclxuICpAbWFya1xyXG4gKi9cclxuXHJcblxyXG5mdW5jdGlvbiB1bkxpZ2h0T25lQ29udHJvbCh0ZW1wQ29udHJvbCkge1xyXG4gIC8v5LiN6L+U5Zue5Y+q5YGa5q2j56Gu55qE6K6+572uXHJcbiAgdmFyIGJ0blNlbGVjdGVkU3R5bGUgPSBcIiBib3gtc2hhZG93OiAycHggMnB4IDVweCAjMDAwO1wiOyAvL+eUqOS6juWKqOaAgeihqOi+vuaMiemSrumAieS4reeahOeKtuaAgVxyXG5cclxuICB2YXIgYnRuVW5TZWxlY3RlZFN0eWxlID0gXCIgYm94LXNoYWRvdzogMHB4IDBweCAwcHggIzAwMDtcIjsgLy/nlKjkuo7liqjmgIHooajovr7mjInpkq7msqHmnInpgInkuK3nmoTnirbmgIFcclxuXHJcbiAgdGVtcENvbnRyb2wuc2VsZWN0ZWRTdHlsZSA9IGJ0blVuU2VsZWN0ZWRTdHlsZTtcclxufSAvL+WHveaVsOWvueixoeWPt++8miAyNiBaQ1RNeVBNQ09JTGlzdOiuoeeul+WPmOmHj+WunueOsOWHveaVsFxyXG5cclxuLyrmlrnms5Xor7TmmI5cclxuICAgICAgICpAQ3JlYXRvckFuZFRpbWUg5Yib5bu65Lq6IFNFMTMg5pe26Ze0IDIwMjEgMDMgMDFcclxuICAgICAgICpAbWV0aG9kIOaWueazleWQjSBjYWxNeVBNQ09JXHJcbiAgICAgICAqQGZvciDmiYDlsZ7nsbvlkI0v5oiW5qih5Z2X5ZCNICBwbUpTVG9vbFxyXG4gICAgICAgKkBmdW5jdGlvbiDlip/og73or7TmmI4gIOiuoeeul1pDVE15UE1DT0lMaXN055qE5omA5pyJ6ZyA6KaB5pys5Zyw6K6h566X5oiW6L2s5o2i55qE5Y+Y6YeP5YC8XHJcbiAgICAgICAqQG1hcmtcclxuICAgICAgICpAcGFyYW175Y+C5pWw57G75Z6LfeWPguaVsOWQjSDlj4LmlbDor7TmmI5cclxuICAgICAgIHRlbXBWIOmcgOimgeafpeivoueahOWPmOmHj+WAvFxyXG4gICAgICAgVGVtcExpc3QgICDmiYDlnKjmlbDmja7lr7nosaHmuIXljZVcclxuKi9cclxuXHJcblxyXG5mdW5jdGlvbiBjYWxNeVBNQ09JKFBNQ09JKSAvL+acieS4gOS6m+Wtl+auteaYr+mAmui/h+mBjeWOhlBNQ09JTGlzdCzorqHnrpfojrflvpfnmoTvvIzpgJrov4fmraTlh73mlbDlrozmiJDjgIJcclxue1xyXG4gIC8vY2FsUE1DT0koUE1DT0kpICAvL+ebtOaOpeS6pOe7mWNhbFBNQ09JLCDnibnmrornmoTmiY3pnIDopoHov5nph4znvJblhplcclxuICAvL1pDVFRhc2tTdGF0ZTogXCJcIiwgLy/ku7vliqHnirbmgIEgVEVNUDrmmoLlrZggV0FUQ0g65YWz5rOoLCBBUFBMWTrnlLPor7csIEFMTE9XRUQ65o6I5p2DLCBSRUZVU0VEOiDmi5Lnu53vvIxFWEVDOuaJp+ihjCwgREVMSVZSWTrkuqTku5gsIOmqjOaUtu+8mkFDQ0VQVFxyXG4gIFBNQ09JLmNhbENoYW5nZVRpbWVTdHIgPSBnZXRUaW1lU2hvcnRTdHJGcm9tVGltZShQTUNPSS5aQ1RDaGFuZ2VUaW1lKTtcclxuXHJcbiAgc3dpdGNoIChQTUNPSS5aQ1RUYXNrU3RhdGUpIHtcclxuICAgIGNhc2UgXCJURU1QXCI6XHJcbiAgICAgIHtcclxuICAgICAgICBQTUNPSS5jYWxQTVN0YXRlID0gXCLmmoLlrZhcIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgIGNhc2UgXCJXQVRDSFwiOlxyXG4gICAgICB7XHJcbiAgICAgICAgUE1DT0kuY2FsUE1TdGF0ZSA9IFwi5YWz5rOoXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIFwiQVBQTFlcIjpcclxuICAgICAge1xyXG4gICAgICAgIFBNQ09JLmNhbFBNU3RhdGUgPSBcIueUs+ivt1wiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBcIkFMTE9XRURcIjpcclxuICAgICAge1xyXG4gICAgICAgIFBNQ09JLmNhbFBNU3RhdGUgPSBcIuaJp+ihjOS4rVwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBcIlJFRlVTRURcIjpcclxuICAgICAge1xyXG4gICAgICAgIFBNQ09JLmNhbFBNU3RhdGUgPSBcIuaLkue7nVwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBcIkVYRUNcIjpcclxuICAgICAge1xyXG4gICAgICAgIFBNQ09JLmNhbFBNU3RhdGUgPSBcIuaJp+ihjFwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBcIkRFTElWUllcIjpcclxuICAgICAge1xyXG4gICAgICAgIFBNQ09JLmNhbFBNU3RhdGUgPSBcIuS6pOS7mFwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgY2FzZSBcIlJFVFVSTlwiOlxyXG4gICAgICB7XHJcbiAgICAgICAgUE1DT0kuY2FsUE1TdGF0ZSA9IFwi5Lqk5LuY6YCA5ZueXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICBjYXNlIFwiQUNDRVBUXCI6XHJcbiAgICAgIHtcclxuICAgICAgICBQTUNPSS5jYWxQTVN0YXRlID0gXCLpqozmlLZcIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHtcclxuICAgICAgICBQTUNPSS5jYWxQTVN0YXRlID0gXCLnirbmgIHmnKrnn6VcIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKCFJc051bGxPckVtcHR5KFBNQ09JLlBNQ09JKSkge1xyXG4gICAgY2FsUE1DT0koUE1DT0kuUE1DT0kpO1xyXG5cclxuICAgIGlmIChQTUNPSS5QTUNPSS5aQ1RJc0RlbGV0ZWQgPT0gXCJZRVNcIikge1xyXG4gICAgICBQTUNPSS5jYWxQTVN0YXRlID0gXCLlt7LmkqTplIBcIjtcclxuICAgIH1cclxuICB9XHJcbn0gLy/lh73mlbDlr7nosaHlj7fvvJogMjcg5qC55o2uaWTlgLzvvIzku47mjqfku7ZteVBNQ09JTGlzdOS4reiOt+WPluS4gOS4quaOp+S7tlxyXG5cclxuLyrmlrnms5Xor7TmmI5cclxuICAgICAgICpAQ3JlYXRvckFuZFRpbWUg5Yib5bu65Lq6IFNFMTMg5pe26Ze0IDIwMjEgMDMgMDFcclxuICAgICAgICpAbWV0aG9kIOaWueazleWQjSBnZXRPbmVDb250cm9sRnJvbUxpc3RCeU15IFxyXG4gICAgICAgKkBmb3Ig5omA5bGe57G75ZCNL+aIluaooeWdl+WQjSAgcG1KU1Rvb2xcclxuICAgICAgICpAZnVuY3Rpb24g5Yqf6IO96K+05piOICDpgJrov4dpZCzojrflj5bmjqfku7bmlbDmja7vvIzpkojlr7laQ1RNeVBNQ09JTGlzdOmbhuWQiFxyXG4gICAgICAgKkBtYXJrXHJcbiAgICAgICAqQHBhcmFte+WPguaVsOexu+Wei33lj4LmlbDlkI0g5Y+C5pWw6K+05piOXHJcbiAgICAgICBzZWxlY3RlZElEIOiiq+mAieaLqeWvueixoeeahCBfaWTlgLxcclxuICAgICAgIFRlbXBMaXN0ICAg5omA5Zyo5pWw5o2u5a+56LGh5riF5Y2VXHJcbiovXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0T25lQ29udHJvbEZyb21MaXN0QnlNeShzZWxlY3RlZElELCBUZW1wTGlzdCkge1xyXG4gIGlmICghSXNOdWxsT3JFbXB0eShzZWxlY3RlZElEKSAmJiAhSXNOdWxsT3JFbXB0eShUZW1wTGlzdCkpIHtcclxuICAgIGlmIChUZW1wTGlzdC5sZW5ndGgpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBUZW1wTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChUZW1wTGlzdFtpXS5aQ1RQTUNPSV9pZCA9PSBzZWxlY3RlZElEKSAvL+mBjeWOhuWHuuadpeS4gOS4quaVsOaNrlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gVGVtcExpc3RbaV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChUZW1wTGlzdC5aQ1RQTUNPSV9pZCA9PSBzZWxlY3RlZElEKSAvL+WPquacieS4gOS4quaVsOaNruaXtueahOaVsOaNrlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJldHVybiBUZW1wTGlzdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gXCJcIjsgLy/msqHmnInmib7liLDov5Tlm57kuIDkuKrlronlhajnmoTnqbrlgLxcclxufSAvL+WHveaVsOWvueixoeWPt++8miAyOCBQTVVzZXLorqHnrpfliY3nq6/lj6/op4blj5jph4/nmoTlrp7njrDlh73mlbBcclxuXHJcbi8q5pa55rOV6K+05piOXHJcbiAgICAgICAqQENyZWF0b3JBbmRUaW1lIOWIm+W7uuS6uiBHTSDml7bpl7QgMjAyMCAyIDI4XHJcbiAgICAgICAqQG1ldGhvZCDmlrnms5XlkI0gY2FsUE1Vc2VyXHJcbiAgICAgICAqQGZvciDmiYDlsZ7nsbvlkI0v5oiW5qih5Z2X5ZCNICBwbUpTVG9vbFxyXG4gICAgICAgKkBmdW5jdGlvbiDlip/og73or7TmmI4gIOiuoeeul1BNQ09J55qE5omA5pyJ6ZyA6KaB5pys5Zyw6K6h566X5oiW6L2s5o2i55qE5Y+Y6YeP5YC8XHJcbiAgICAgICAqQG1hcmtcclxuICAgICAgICpAcGFyYW175Y+C5pWw57G75Z6LfeWPguaVsOWQjSDlj4LmlbDor7TmmI5cclxuICAgICAgIHRlbXBWIOmcgOimgeafpeivoueahOWPmOmHj+WAvFxyXG4gICAgICAgVGVtcExpc3QgICDmiYDlnKjmlbDmja7lr7nosaHmuIXljZVcclxuKi9cclxuXHJcblxyXG5mdW5jdGlvbiBjYWxQTVVzZXIoUE1Vc2VyKSAvL+acieS4gOS6m+Wtl+auteaYr+mAmui/h+mBjeWOhlBNVXNlckxpc3Qs6K6h566X6I635b6X55qE77yM6YCa6L+H5q2k5Ye95pWw5a6M5oiQ44CCXHJcbntcclxuICBQTVVzZXIuY2FsQmluZFRpbWVTaG9ydFN0ciA9IGdldFRpbWVTaG9ydFN0ckZyb21UaW1lKFBNVXNlci5XWExhc3RCaW5kVGltZSk7XHJcbiAgdmFyIFRlbXBNYWluSW5mb1N0ciA9IFBNVXNlci5QTVVzZXJOYW1lO1xyXG5cclxuICBpZiAoIUlzTnVsbE9yRW1wdHkoUE1Vc2VyLlpDVFVzZXJTZXgpKSB7XHJcbiAgICBUZW1wTWFpbkluZm9TdHIgPSBUZW1wTWFpbkluZm9TdHIgKyBcIiAvIFwiICsgUE1Vc2VyLlpDVFVzZXJTZXg7XHJcbiAgfVxyXG5cclxuICBpZiAoIUlzTnVsbE9yRW1wdHkoUE1Vc2VyLlpDVEJpcnRoWWVhcikpIHtcclxuICAgIHZhciBUZW1wTm93ID0gbmV3IERhdGUoKTtcclxuICAgIHZhciBub3dZZWFyID0gVGVtcE5vdy5nZXRGdWxsWWVhcigpO1xyXG4gICAgdmFyIFRlbXBCaXJ0aFllYXIgPSBuZXcgRGF0ZShQTVVzZXIuWkNUQmlydGhZZWFyKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgUE1Vc2VyLmNhbEFnZXMgPSBub3dZZWFyIC0gVGVtcEJpcnRoWWVhcjtcclxuICAgIFRlbXBNYWluSW5mb1N0ciA9IFRlbXBNYWluSW5mb1N0ciArIFwiIC8gXCIgKyBQTVVzZXIuY2FsQWdlcyArIFwi5bKBXCI7XHJcbiAgfVxyXG5cclxuICBQTVVzZXIuY2FsTWFpbkluZm8gPSBUZW1wTWFpbkluZm9TdHI7XHJcblxyXG4gIGlmIChJc051bGxPckVtcHR5KFBNVXNlci5QTVVzZXJJRCkpIHtcclxuICAgIFBNVXNlci5Jc1JlbGF0ZWQgPSBmYWxzZTtcclxuICAgIFBNVXNlci5QTVVzZXJJRCA9IFwiKioqKioqKioqKipcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKFBNVXNlci5QTVVzZXJJRCA9PSBcIioqKioqKioqKioqXCIpIHtcclxuICAgICAgUE1Vc2VyLklzUmVsYXRlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgUE1Vc2VyLklzUmVsYXRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoIUlzTnVsbE9yRW1wdHkoUE1Vc2VyLnJlbGF0ZWRUaW1lKSkge1xyXG4gICAgUE1Vc2VyLnJlbGF0ZWRUaW1lU2hvcnQgPSB0aGlzLmdldFRpbWVTaG9ydFN0ckZyb21UaW1lKFBNVXNlci5yZWxhdGVkVGltZSk7XHJcbiAgfVxyXG59IC8v5Ye95pWw5a+56LGh5Y+377yaIDI5IOiuoeeul+S4pOS9jee9rueCuemXtOeahOi3neemu++8iEtN77yJ55qE5a6e546w5Ye95pWwXHJcblxyXG4vKuaWueazleivtOaYjlxyXG4gICAgICAgKkBDcmVhdG9yQW5kVGltZSDliJvlu7rkurogU0UxMSDml7bpl7QgMjAyMSAzIDEwXHJcbiAgICAgICAqQG1ldGhvZCDmlrnms5XlkI0gZ2V0RGlzdGFuY2VcclxuICAgICAgICpAZm9yIOaJgOWxnuexu+WQjS/miJbmqKHlnZflkI0gIHBtSlNUb29sXHJcbiAgICAgICAqQGZ1bmN0aW9uIOWKn+iDveivtOaYjiAg6K6h566X5Lik5L2N572u54K56Ze055qE6Led56a777yIS03vvIlcclxuICAgICAgICpAbWFya1xyXG4gICAgICAgKkBwYXJhbXvlj4LmlbDnsbvlnot95Y+C5pWw5ZCNIOWPguaVsOivtOaYjlxyXG4gICAgICAgbGExIOe6rOW6plxyXG4gICAgICAgbG8xIOe7j+W6piBcclxuICAgICAgIGxhMiDnuqzluqZcclxuICAgICAgIGxvMiDnu4/luqZcclxuKi9cclxuXHJcblxyXG5mdW5jdGlvbiBnZXREaXN0YW5jZShsYTEsIGxvMSwgbGEyLCBsbzIpIHtcclxuICB2YXIgTGExID0gbGExICogTWF0aC5QSSAvIDE4MC4wO1xyXG4gIHZhciBMYTIgPSBsYTIgKiBNYXRoLlBJIC8gMTgwLjA7XHJcbiAgdmFyIExhMyA9IExhMSAtIExhMjtcclxuICB2YXIgTGIzID0gbG8xICogTWF0aC5QSSAvIDE4MC4wIC0gbG8yICogTWF0aC5QSSAvIDE4MC4wO1xyXG4gIHZhciBzID0gMiAqIE1hdGguYXNpbihNYXRoLnNxcnQoTWF0aC5wb3coTWF0aC5zaW4oTGEzIC8gMiksIDIpICsgTWF0aC5jb3MoTGExKSAqIE1hdGguY29zKExhMikgKiBNYXRoLnBvdyhNYXRoLnNpbihMYjMgLyAyKSwgMikpKTtcclxuICBzID0gcyAqIDYzNzguMTM3O1xyXG4gIHMgPSBNYXRoLnJvdW5kKHMgKiAxMDAwMCkgLyAxMDAwMDtcclxuICBzID0gcy50b0ZpeGVkKDIpO1xyXG4gIHJldHVybiBzO1xyXG59IC8v5Ye95pWw5a+56LGh5Y+377yaIDMwIOabtOaWsOe8k+WtmOS4reS6p+WTgeaVsOaNrueahOWunueOsOWHveaVsFxyXG5cclxuLyrmlrnms5Xor7TmmI5cclxuICAgICAgICpAQ3JlYXRvckFuZFRpbWUg5Yib5bu65Lq6IFNFMjQg5pe26Ze0IDIwMjEtMy0xMSAxMDoyNDoxNFxyXG4gICAgICAgKkBtZXRob2Qg5pa55rOV5ZCNIFVwZGF0ZVByb2R1Y3RTdG9yZ2VcclxuICAgICAgICpAZm9yIOaJgOWxnuexu+WQjS/miJbmqKHlnZflkI0gIHBtSlNUb29sXHJcbiAgICAgICAqQGZ1bmN0aW9uIOWKn+iDveivtOaYjiAg5qC55o2u5o+Q5Lqk55qE5Lqn5ZOB5Y+35ZKM5ZCN56ew5pu05paw57yT5a2Y5Lit55qE5pWw5o2uXHJcbiAgICAgICAqQG1hcmtcclxuICAgICAgICpAcGFyYW175Y+C5pWw57G75Z6LfeWPguaVsOWQjSDlj4LmlbDor7TmmI5cclxuICAgICAgICpAcGFyYW0ge1N0cmluZ30gVGVtcFByb2R1Y3RJRCAgIC8v5Lqn5ZOB5Y+3XHJcbiAgICAgICAqQHBhcmFtIHtTdHJpbmd9IFRlbXBQcm9kdWN0TmFtZSAvL+S6p+WTgeWQjVxyXG4qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIFVwZGF0ZVByb2R1Y3RTdG9yZ2UoVGVtcFByb2R1Y3RJRCwgVGVtcFByb2R1Y3ROYW1lKSB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICghSXNOdWxsT3JFbXB0eShUZW1wUHJvZHVjdElEKSAmJiAhSXNOdWxsT3JFbXB0eShUZW1wUHJvZHVjdE5hbWUpKSB7XHJcbiAgICAgIC8v6I635Y+WU3RvcmFnZee8k+WtmOS4reeahOS6p+WTgeaVsOaNrlxyXG4gICAgICB2YXIgVGVtcFN0b3JhZ2VQcm9kdWN0QXJyID0gbmV3IEFycmF5KCk7XHJcbiAgICAgIHZhciBUZW1wUHJvZHVjdFN0ciA9IHd4LmdldFN0b3JhZ2VTeW5jKCdQcm9kdWN0TGlzdCcpOyAvL+S4jeWtmOWcqOacrOWcsOe8k+WtmOaXtu+8jOi9rOaNouS4uuepuueahOaVsOe7hFxyXG5cclxuICAgICAgaWYgKElzTnVsbE9yRW1wdHkoVGVtcFByb2R1Y3RTdHIpKSB7XHJcbiAgICAgICAgLy/nvJPlrZjmlrDnmoTkuqflk4FcclxuICAgICAgICB2YXIgVGVtcE5ld1Byb2R1Y3QgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICAgICAgVGVtcE5ld1Byb2R1Y3QuUHJvZHVjdElEID0gVGVtcFByb2R1Y3RJRDtcclxuICAgICAgICBUZW1wTmV3UHJvZHVjdC5Qcm9kdWN0TmFtZSA9IFRlbXBQcm9kdWN0TmFtZTtcclxuICAgICAgICBUZW1wTmV3UHJvZHVjdC5EYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBUZW1wU3RvcmFnZVByb2R1Y3RBcnIucHVzaChUZW1wTmV3UHJvZHVjdCk7XHJcbiAgICAgICAgdmFyIFRlbXBOZXdQcm9kdWN0QXJyID0gSlNPTi5zdHJpbmdpZnkoVGVtcFN0b3JhZ2VQcm9kdWN0QXJyKTtcclxuICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnUHJvZHVjdExpc3QnLCBUZW1wTmV3UHJvZHVjdEFycik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgVGVtcFN0b3JhZ2VQcm9kdWN0QXJyID0gSlNPTi5wYXJzZShUZW1wUHJvZHVjdFN0cik7XHJcbiAgICAgICAgdmFyIFRlbXBUaGlzUHJvZHVjdCA9IFRlbXBTdG9yYWdlUHJvZHVjdEFyci5maW5kKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICByZXR1cm4gZS5Qcm9kdWN0SUQgPT0gVGVtcFByb2R1Y3RJRDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFJc051bGxPckVtcHR5KFRlbXBUaGlzUHJvZHVjdCkpIHtcclxuICAgICAgICAgIC8v5bey5a2Y5Zyo5q2k5Lqn5ZOB57yT5a2Y5L+h5oGvXHJcbiAgICAgICAgICBpZiAoVGVtcFRoaXNQcm9kdWN0LlByb2R1Y3ROYW1lICE9IFRlbXBQcm9kdWN0TmFtZSkge1xyXG4gICAgICAgICAgICAvL+acrOasoea3u+WKoOaIlue8lui+keeahOS6p+WTgeWQjeS4jeWQjO+8jOi/m+ihjOS/ruaUuVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IFRlbXBTdG9yYWdlUHJvZHVjdEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIGlmIChUZW1wU3RvcmFnZVByb2R1Y3RBcnJbaV0uUHJvZHVjdElEID09IFRlbXBQcm9kdWN0SUQpIC8v5p+l5om+5Ye65a+55bqU5Lqn5ZOB5pWw5o2uXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIFRlbXBTdG9yYWdlUHJvZHVjdEFycltpXS5Qcm9kdWN0TmFtZSA9IFRlbXBQcm9kdWN0TmFtZTtcclxuICAgICAgICAgICAgICAgICAgVGVtcFN0b3JhZ2VQcm9kdWN0QXJyW2ldLkRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgVGVtcE5ld1Byb2R1Y3RBcnIgPSBKU09OLnN0cmluZ2lmeShUZW1wU3RvcmFnZVByb2R1Y3RBcnIpO1xyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnUHJvZHVjdExpc3QnLCBUZW1wTmV3UHJvZHVjdEFycik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8v6I635Y+W5b2T5YmN5bey57yT5a2Y6ZW/5bqmXHJcbiAgICAgICAgICB2YXIgVGVtcEFyckNvdW50ID0gVGVtcFN0b3JhZ2VQcm9kdWN0QXJyLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICBpZiAoVGVtcEFyckNvdW50ID49IDUwMCkge1xyXG4gICAgICAgICAgICAvL+Wkp+S6jjUwMOaXtu+8jOenu+mZpOacgOaXqeeahO+8jOS/neWtmOaWsOeahOOAglxyXG4gICAgICAgICAgICAvL+aMieeFp+aXtumXtOi/m+ihjOaOkuW6j1xyXG4gICAgICAgICAgICBUZW1wU3RvcmFnZVByb2R1Y3RBcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgIHJldHVybiBhLkRhdGUgPiBiLkRhdGU7XHJcbiAgICAgICAgICAgIH0pOyAvL+enu+mZpOaOkuW6j+WQjuacgOaXqeeahOS6p+WTgeS/oeaBr1xyXG5cclxuICAgICAgICAgICAgVGVtcFN0b3JhZ2VQcm9kdWN0QXJyLnNwbGljZSgwLCAxKTsgLy/nvJPlrZjmlrDnmoTkuqflk4FcclxuXHJcbiAgICAgICAgICAgIHZhciBUZW1wTmV3UHJvZHVjdCA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgICAgICAgVGVtcE5ld1Byb2R1Y3QuUHJvZHVjdElEID0gVGVtcFByb2R1Y3RJRDtcclxuICAgICAgICAgICAgVGVtcE5ld1Byb2R1Y3QuUHJvZHVjdE5hbWUgPSBUZW1wUHJvZHVjdE5hbWU7XHJcbiAgICAgICAgICAgIFRlbXBOZXdQcm9kdWN0LkRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBUZW1wU3RvcmFnZVByb2R1Y3RBcnIucHVzaChUZW1wTmV3UHJvZHVjdCk7XHJcbiAgICAgICAgICAgIHZhciBUZW1wTmV3UHJvZHVjdEFyciA9IEpTT04uc3RyaW5naWZ5KFRlbXBTdG9yYWdlUHJvZHVjdEFycik7XHJcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdQcm9kdWN0TGlzdCcsIFRlbXBOZXdQcm9kdWN0QXJyKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v57yT5a2Y5paw55qE5Lqn5ZOBXHJcbiAgICAgICAgICAgIHZhciBUZW1wTmV3UHJvZHVjdCA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgICAgICAgVGVtcE5ld1Byb2R1Y3QuUHJvZHVjdElEID0gVGVtcFByb2R1Y3RJRDtcclxuICAgICAgICAgICAgVGVtcE5ld1Byb2R1Y3QuUHJvZHVjdE5hbWUgPSBUZW1wUHJvZHVjdE5hbWU7XHJcbiAgICAgICAgICAgIFRlbXBOZXdQcm9kdWN0LkRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBUZW1wU3RvcmFnZVByb2R1Y3RBcnIucHVzaChUZW1wTmV3UHJvZHVjdCk7XHJcbiAgICAgICAgICAgIHZhciBUZW1wTmV3UHJvZHVjdEFyciA9IEpTT04uc3RyaW5naWZ5KFRlbXBTdG9yYWdlUHJvZHVjdEFycik7XHJcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdQcm9kdWN0TGlzdCcsIFRlbXBOZXdQcm9kdWN0QXJyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhHZXRTdHIoZSkpO1xyXG4gIH1cclxufSAvL+WHveaVsOWvueixoeWPt++8miAzMSDojrflj5bmnIDluLjop4Hlt6Xnp43nsbvlnovmuIXljZVcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRQTUpvYlR5cGUoKSB7XHJcbiAgdmFyIEpvYlR5cGVMaXN0ID0gWyfmma7lt6UnLCAn5oqA5belJywgJ+e7hOijheW3pScsICfljIXoo4Xlt6UnLCAn54SK5belJywgJ+eUteW3pScsICfmnLrliqDlt6UnLCAn5Yay5Y6L5belJywgJ+eUtemVgOW3pScsICfms6jloZHlt6UnLCAn5Za35aGR5belJywgJ+awtOW3pScsICfmnKjlt6UnLCAn5ryG5belJywgJ+WtpuW+kuW3pScsICfotKjmo4Dlt6UnLCAn55Sf5Lqn566h55CGJywgJ+WKs+WKoeeuoeeQhicsICflhbbku5YnXTtcclxuICByZXR1cm4gSm9iVHlwZUxpc3Q7XHJcbn0gLy/lh73mlbDlr7nosaHlj7fvvJozMiDlrZfnrKbkuLLovazkuLrmlbDlrZdcclxuXHJcblxyXG5mdW5jdGlvbiBHZXROdW0oVGVtcE51bSkge1xyXG4gIGlmIChpc05hTihUZW1wTnVtKSkge1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KFRlbXBOdW0pO1xyXG4gIH1cclxufSAvL+WHveaVsOWvueixoeWPt++8mjMzIOWtl+espuS4sui9rOS4uuaVsOWtl1xyXG5cclxuXHJcbmZ1bmN0aW9uIEdldFN0YXRlU3RyKFRlbXBTdGF0ZSkge1xyXG4gIHN3aXRjaCAoVGVtcFN0YXRlKSB7XHJcbiAgICBjYXNlIFwiQ1JFQVRJT05cIjpcclxuICAgICAgcmV0dXJuIFwi562J5b6F55Sf5LqnXCI7XHJcblxyXG4gICAgY2FzZSBcIk9OUlBPRFVDSVRPTlwiOlxyXG4gICAgICByZXR1cm4gXCLnlJ/kuqfkuK3vvIxcIjtcclxuXHJcbiAgICBjYXNlIFwiQ0xPU0VcIjpcclxuICAgICAgcmV0dXJuIFwi55Sf5Lqn57uT5p2fXCI7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59IC8v5Ye95pWw5a+56LGh5Y+377yaIDM0IOaIquWPluiuvuWumuS9jeaVsOeahOWtl+espuS4siBcclxuXHJcbi8q5pa55rOV6K+05piOIFxyXG4gICAgICAgKkBDcmVhdG9yQW5kVGltZSDliJvlu7rkurogU0UxMyDml7bpl7QgMjAyMSAwNCAxNSBcclxuICAgICAgICpAbWV0aG9kIOaWueazleWQjSBnZXRTdHJzdWJzdHJpbmcgXHJcbiAgICAgICAqQGZvciDmiYDlsZ7nsbvlkI0v5oiW5qih5Z2X5ZCNICBwbUpTVG9vbCBcclxuICAgICAgICpAZnVuY3Rpb24g5Yqf6IO96K+05piOICAgIOaIquWPluiuvuWumuS9jeaVsOeahOWtl+espuS4siBcclxuICAgICAgICpAbWFyayBcclxuICAgICAgIHRlbXBTdHI6ICAg6ZW/5a2X56ym5LiyIFxyXG4gICAgICAgRmlyc3Q6ICDku47nrKzlh6DkvY3lvIDlp4vmiKrlj5YgXHJcbiAgICAgICBsZW50aDogIOaIquWPlumVv+W6piBcclxuICAgICAgIHJldHVybjogICAg5a2X56ym5LiyIFxyXG4qL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFN0cnN1YnN0cmluZyh0ZW1wU3RyLCBGaXJzdCwgbGVudGgpIHtcclxuICBpZiAoIUlzTnVsbE9yRW1wdHkodGVtcFN0cikpIHtcclxuICAgIHZhciB0ZW1wUmVzID0gdGVtcFN0ci5zdWJzdHJpbmcoRmlyc3QsIGxlbnRoKTtcclxuXHJcbiAgICBpZiAoIUlzTnVsbE9yRW1wdHkodGVtcFJlcykpIHtcclxuICAgICAgcmV0dXJuIHRlbXBSZXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGVtcFN0cjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBcIlwiO1xyXG59XHJcbi8qKlxyXG4gKiBDcmVhdG9yOlNFMjQsRGF0ZToyMDIxLTYtNSAxNzo1NTozMVxyXG4gKiDlsIbml7bpl7TlrZfnrKbkuLLovazmjaLmiJDmraPluLjmoLzlvI9cclxuICogQHBhcmFtIHsqfSBUZW1wSnNvbkRhdGUgXHJcbiAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIERhdGVDaGFuZ2UoVGVtcEpzb25EYXRlKSB7XHJcbiAgaWYgKElzTnVsbE9yRW1wdHkoVGVtcEpzb25EYXRlKSB8fCBUZW1wSnNvbkRhdGUgPT0gXCIwMDAxLTAxLTAxVDAwOjAwOjAwXCIgfHwgVGVtcEpzb25EYXRlID09IFwiMDAwMS0wMS0wMVQwODowMDowMFwiKSB7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcblxyXG4gIGlmIChUZW1wSnNvbkRhdGUubGVuZ3RoID4gMTkpIHtcclxuICAgIHZhciBkYXRlZWUgPSBuZXcgRGF0ZShUZW1wSnNvbkRhdGUpLnRvSlNPTigpO1xyXG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgrbmV3IERhdGUoZGF0ZWVlKSArIDggKiAzNjAwICogMTAwMCkudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9UL2csICcgJykucmVwbGFjZSgvXFwuW1xcZF17M31aLywgJycpO1xyXG4gICAgZGF0ZSA9IGRhdGUucmVwbGFjZShuZXcgUmVnRXhwKC8tL2dtKSwgXCIvXCIpO1xyXG4gICAgcmV0dXJuIGRhdGU7XHJcbiAgfVxyXG5cclxuICB2YXIgVGVtcFJlZ0RhdGUgPSBSZWdFeHAoL0RhdGUvKTtcclxuXHJcbiAgaWYgKCFUZW1wUmVnRGF0ZS50ZXN0KFRlbXBKc29uRGF0ZSkpIHtcclxuICAgIFRlbXBKc29uRGF0ZSA9IFRlbXBKc29uRGF0ZS5yZXBsYWNlKC9ULywgXCIgXCIpO1xyXG4gICAgVGVtcEpzb25EYXRlID0gVGVtcEpzb25EYXRlLnJlcGxhY2UobmV3IFJlZ0V4cCgvLS9nbSksIFwiL1wiKTtcclxuICAgIHJldHVybiBUZW1wSnNvbkRhdGU7XHJcbiAgfVxyXG5cclxuICBpZiAoVGVtcEpzb25EYXRlID09IFwiL0RhdGUoLTYyMTM1NTk2ODAwMDAwKzA4MDApL1wiKSB7XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcblxyXG4gIHZhciBUZW1wRGF0ZSA9IG5ldyBEYXRlKHBhcnNlSW50KFRlbXBKc29uRGF0ZS5yZXBsYWNlKFwiL0RhdGUoXCIsIFwiXCIpLnJlcGxhY2UoXCIpL1wiLCBcIlwiKSwgMTApKTtcclxuICB2YXIgVGVtcE1vbnRoID0gVGVtcERhdGUuZ2V0TW9udGgoKSArIDEgPCAxMCA/IFwiMFwiICsgKFRlbXBEYXRlLmdldE1vbnRoKCkgKyAxKSA6IFRlbXBEYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gIHZhciBUZW1wRGF5ID0gVGVtcERhdGUuZ2V0RGF0ZSgpIDwgMTAgPyBcIjBcIiArIFRlbXBEYXRlLmdldERhdGUoKSA6IFRlbXBEYXRlLmdldERhdGUoKTtcclxuICB2YXIgVGVtcEhvdXJzID0gVGVtcERhdGUuZ2V0SG91cnMoKSA8IDEwID8gXCIwXCIgKyBUZW1wRGF0ZS5nZXRIb3VycygpIDogVGVtcERhdGUuZ2V0SG91cnMoKTtcclxuICB2YXIgVGVtcE1pbnV0ZXMgPSBUZW1wRGF0ZS5nZXRNaW51dGVzKCkgPCAxMCA/IFwiMFwiICsgVGVtcERhdGUuZ2V0TWludXRlcygpIDogVGVtcERhdGUuZ2V0TWludXRlcygpO1xyXG4gIHZhciBUZW1wU2Vjb25kcyA9IFRlbXBEYXRlLmdldFNlY29uZHMoKSA8IDEwID8gXCIwXCIgKyBUZW1wRGF0ZS5nZXRTZWNvbmRzKCkgOiBUZW1wRGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgcmV0dXJuIFRlbXBEYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi9cIiArIFRlbXBNb250aCArIFwiL1wiICsgVGVtcERheSArIFwiIFwiICsgVGVtcEhvdXJzICsgXCI6XCIgKyBUZW1wTWludXRlcyArIFwiOlwiICsgVGVtcFNlY29uZHM7XHJcbn1cclxuLyoqXHJcbiAqIENyZWF0b3I6U0U3LERhdGU6MjAyMS02LTMwIDE3OjU1OjMxXHJcbiAqIOWwhuWtl+espuS4sui9rOaNouaIkOaXpeacn+agvOW8j1xyXG4gKiBAcGFyYW0geyp9IFRlbXBKc29uRGF0ZSBcclxuICovXHJcblxyXG5cclxuZnVuY3Rpb24gc3RyaW5nVG9EYXRlKHN0cikge1xyXG4gIHZhciB0ZW1wU3RycyA9IHN0ci5zcGxpdChcIiBcIik7XHJcbiAgdmFyIGRhdGVTdHJzID0gdGVtcFN0cnNbMF0uc3BsaXQoXCItXCIpO1xyXG4gIHZhciB5ZWFyID0gcGFyc2VJbnQoZGF0ZVN0cnNbMF0sIDEwKTtcclxuICB2YXIgbW9udGggPSBwYXJzZUludChkYXRlU3Ryc1sxXSwgMTApO1xyXG4gIHZhciBkYXkgPSBwYXJzZUludChkYXRlU3Ryc1syXSwgMTApO1xyXG4gIHZhciBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSwgMCwgMCwgMCk7XHJcbiAgcmV0dXJuIGRhdGU7XHJcbn1cclxuLyoqXHJcbiAqIENyZWF0b3I6U0UyNCxEYXRlOjIwMjEtNy02IDE3OjM4OjI3XHJcbiAqICDmoLnmja7moIfor4blrZfnrKbvvIzku47lrZfnrKbkuLLlt6bovrnotbfnrKzkuIDkuKrmraTlrZfnrKblvIDlp4vvvIzliIflh7rlt6bovrnnmoTkuIDpg6jliIZcclxuICogQHBhcmFtIHtTdHJpbmd9IHRlbXBTdHIgXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZW1wTWFyayBcclxuICovXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0U3RyTGVmdEZyb21Gcm9udCh0ZW1wU3RyLCB0ZW1wTWFyaykge1xyXG4gIGlmICghSXNOdWxsT3JFbXB0eSh0ZW1wU3RyKSkge1xyXG4gICAgdmFyIHRlbXBSZXMgPSB0ZW1wU3RyLnN1YnN0cigwLCB0ZW1wU3RyLmluZGV4T2YodGVtcE1hcmspKTtcclxuXHJcbiAgICBpZiAoIUlzTnVsbE9yRW1wdHkodGVtcFJlcykpIHtcclxuICAgICAgcmV0dXJuIHRlbXBSZXM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGVtcFN0cjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBcIlwiO1xyXG59XHJcbi8qKlxyXG4gKiBDcmVhdG9yOlNFMjQsRGF0ZToyMDIxLTctNiAxNzozOTo1NlxyXG4gKiAg5qC55o2u5qCH6K+G5a2X56ym77yM5LuO5a2X56ym5Liy5bem6L656LW356ys5LiA5Liq5q2k5a2X56ym5byA5aeL77yM5YiH5Ye65Y+z6L6555qE5LiA6YOo5YiGXHJcbiAqIEBwYXJhbSB7Kn0gdGVtcFN0ciBcclxuICogQHBhcmFtIHsqfSB0ZW1wTWFyayBcclxuICovXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0U3RyUmlnaHRGcm9tRnJvbnQodGVtcFN0ciwgdGVtcE1hcmspIHtcclxuICBpZiAoIUlzTnVsbE9yRW1wdHkodGVtcFN0cikpIHtcclxuICAgIHZhciB0ZW1wUmVzID0gdGVtcFN0ci5zdWJzdHJpbmcodGVtcFN0ci5pbmRleE9mKHRlbXBNYXJrKSArIHRlbXBNYXJrLmxlbmd0aCk7XHJcblxyXG4gICAgaWYgKCFJc051bGxPckVtcHR5KHRlbXBSZXMpKSB7XHJcbiAgICAgIHJldHVybiB0ZW1wUmVzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRlbXBTdHI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gXCJcIjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.Behavior = Behavior;exports.Component = Component;exports.Page = Page;exports.nextTick = exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 13));var _PROP_DEFAULT_VALUES;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}

function parseData(data, vueComponentOptions) {
  if (!data) {
    return;
  }
  vueComponentOptions.mpOptions.data = data;
}

function parseComponents(vueComponentOptions) {
  vueComponentOptions.components = global.__wxVueOptions.components;
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
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

var SOURCE_KEY = '__data__';

var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed' };


var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);

var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize' };


var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);

var PAGE_LIFECYCLE = [
'onLoad',
'onShow',
'onReady',
'onHide',
'onUnload',
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function parsePageMethods(mpComponentOptions, vueComponentOptions) {
  var methods = Object.create(null);
  Object.keys(mpComponentOptions).forEach(function (key) {
    var value = mpComponentOptions[key];
    if (isFn(value) && PAGE_LIFECYCLE.indexOf(key) === -1) {
      methods[key] = value;
    }
  });
  vueComponentOptions.methods = methods;
}

function parsePageLifecycle(mpComponentOptions, vueComponentOptions) {
  Object.keys(mpComponentOptions).forEach(function (key) {
    if (PAGE_LIFECYCLE.indexOf(key) !== -1) {
      vueComponentOptions[key] = mpComponentOptions[key];
    }
  });
}

function parsePage(mpComponentOptions) {
  var vueComponentOptions = {
    mixins: [],
    mpOptions: {} };


  parseComponents(vueComponentOptions);

  parseData(mpComponentOptions.data, vueComponentOptions);

  parsePageMethods(mpComponentOptions, vueComponentOptions);
  parsePageLifecycle(mpComponentOptions, vueComponentOptions);

  return vueComponentOptions;
}

function parseProperties(properties, vueComponentOptions) {
  if (!properties) {
    return;
  }
  vueComponentOptions.mpOptions.properties = properties;
}

function parseOptions(options, vueComponentOptions) {
  if (!options) {
    return;
  }
  vueComponentOptions.mpOptions.options = options;
}

function parseMethods(methods, vueComponentOptions) {
  if (!methods) {
    return;
  }
  if (methods.$emit) {
    console.warn('Method "$emit" conflicts with an existing Vue instance method');
    delete methods.$emit;
  }
  vueComponentOptions.methods = methods;
}

function parseLifecycle(mpComponentOptions, vueComponentOptions) {
  COMPONENT_LIFECYCLE_KEYS.forEach(function (name) {
    if (hasOwn(mpComponentOptions, name)) {
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).
      push(mpComponentOptions[name]);
    }
  });
}

var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {} };


function callDefinitionFilter(mpComponentOptions) {var

  behaviors =

  mpComponentOptions.behaviors,definitionFilter = mpComponentOptions.definitionFilter;

  var behaviorDefinitionFilters = [];

  if (Array.isArray(behaviors)) {
    behaviors.forEach(function (behavior) {
      behavior = typeof behavior === 'string' ? mpBehaviors[behavior] : behavior;
      if (behavior.definitionFilter) {
        behaviorDefinitionFilters.push(behavior.definitionFilter);
        behavior.definitionFilter.call(null, mpComponentOptions, []);
      }
    });
  }

  if (isFn(definitionFilter)) {
    return function (defFields) {
      definitionFilter(defFields, behaviorDefinitionFilters);
    };
  }
}

function parseDefinitionFilter(mpComponentOptions, vueComponentOptions) {
  callDefinitionFilter(mpComponentOptions);
}

function parseBehavior(behavior) {var

  data =



  behavior.data,methods = behavior.methods,behaviors = behavior.behaviors,properties = behavior.properties;

  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseData(data, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);

  parseLifecycle(behavior, vueComponentOptions);
  parseDefinitionFilter(behavior);

  return vueComponentOptions;
}

var BEHAVIORS = {
  'wx://form-field': {
    beforeCreate: function beforeCreate() {
      var mpOptions = this.$options.mpOptions;
      if (!mpOptions.properties) {
        mpOptions.properties = Object.create(null);
      }

      var props = mpOptions.properties;
      // TODO form submit,reset
      if (!hasOwn(props, 'name')) {
        props.name = {
          type: String };

      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    } } };



function parseBehaviors(behaviors, vueComponentOptions) {
  if (!behaviors) {
    return;
  }
  behaviors.forEach(function (behavior) {
    if (typeof behavior === 'string') {
      BEHAVIORS[behavior] && vueComponentOptions.mixins.push(BEHAVIORS[behavior]);
    } else {
      vueComponentOptions.mixins.push(parseBehavior(behavior));
    }
  });
}

function parseSinglePath(path) {
  return path.split('.');
}

function parseMultiPaths(paths) {
  return paths.split(',').map(function (path) {return parseSinglePath(path);});
}

function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }var


  mpObservers =
  vueComponentOptions.mpOptions.mpObservers;

  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path] });

  });
}

function relative(from, to) {
  if (to.indexOf('/') === 0) {
    from = '';
  }
  var fromArr = from.split('/');
  var toArr = to.split('/');
  fromArr.pop();
  while (toArr.length) {
    var part = toArr.shift();
    if (part !== '' && part !== '.') {
      if (part !== '..') {
        fromArr.push(part);
      } else {
        fromArr.pop();
      }
    }
  }
  return fromArr.join('/');
}

function parseRelations(relations, vueComponentOptions) {
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    var relation = relations[name];
    relation.name = name;
    relation.target = relation.target ? String(relation.target) : relative(global.__wxRoute, name);
  });
  vueComponentOptions.mpOptions.relations = relations;
}

function parseExternalClasses(externalClasses, vueComponentOptions) {
  if (!externalClasses) {
    return;
  }
  if (!Array.isArray(externalClasses)) {
    externalClasses = [externalClasses];
  }
  vueComponentOptions.mpOptions.externalClasses = externalClasses;
  if (!vueComponentOptions.mpOptions.properties) {
    vueComponentOptions.mpOptions.properties = Object.create(null);
  }
  externalClasses.forEach(function (externalClass) {
    vueComponentOptions.mpOptions.properties[camelize(externalClass)] = {
      type: String,
      value: '' };

  });
}

function parseLifetimes(lifetimes, vueComponentOptions) {
  if (!lifetimes) {
    return;
  }
  parseLifecycle(lifetimes, vueComponentOptions);
}

function parsePageLifetimes(pageLifetimes, vueComponentOptions) {
  if (!pageLifetimes) {
    return;
  }
  PAGE_LIFETIMES_KEYS.forEach(function (key) {
    var lifetimeFn = pageLifetimes[key];
    isFn(lifetimeFn) && (vueComponentOptions[PAGE_LIFETIMES[key]] = lifetimeFn);
  });
}

function parseComponent(mpComponentOptions) {var

  data =









  mpComponentOptions.data,options = mpComponentOptions.options,methods = mpComponentOptions.methods,behaviors = mpComponentOptions.behaviors,lifetimes = mpComponentOptions.lifetimes,observers = mpComponentOptions.observers,relations = mpComponentOptions.relations,properties = mpComponentOptions.properties,pageLifetimes = mpComponentOptions.pageLifetimes,externalClasses = mpComponentOptions.externalClasses;

  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseComponents(vueComponentOptions);

  parseData(data, vueComponentOptions);
  parseOptions(options, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseLifetimes(lifetimes, vueComponentOptions);
  parseObservers(observers, vueComponentOptions);
  parseRelations(relations, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parsePageLifetimes(pageLifetimes, vueComponentOptions);
  parseExternalClasses(externalClasses, vueComponentOptions);

  parseLifecycle(mpComponentOptions, vueComponentOptions);
  parseDefinitionFilter(mpComponentOptions);

  return vueComponentOptions;
}

function initRelationHandlers(type, handler, target, ctx) {
  if (!handler) {
    return;
  }
  var name = "_$".concat(type, "Handlers");
  (ctx[name] || (ctx[name] = [])).push(function () {
    handler.call(ctx, target);
  });
}

function initLinkedHandlers(relation, target, ctx) {
  var type = 'linked';
  var name = relation.name;
  var relationNodes = ctx._$relationNodes || (ctx._$relationNodes = Object.create(null));
  (relationNodes[name] || (relationNodes[name] = [])).push(target);
  initRelationHandlers(type, relation[type], target, ctx);
}

function initUnlinkedHandlers(relation, target, ctx) {
  var type = 'unlinked';
  initRelationHandlers(type, relation[type], target, ctx);
}

function findParentRelation(parentVm, target, type) {
  var relations = parentVm &&
  parentVm.$options.mpOptions &&
  parentVm.$options.mpOptions.relations;

  if (!relations) {
    return [];
  }
  var name = Object.keys(relations).find(function (name) {
    var relation = relations[name];
    return relation.target === target && relation.type === type;
  });
  if (!name) {
    return [];
  }
  return [relations[name], parentVm];
}

function initParentRelation(vm, childRelation, match) {var _match =
  match(vm, vm.$options.mpOptions.path),_match2 = _slicedToArray(_match, 2),parentRelation = _match2[0],parentVm = _match2[1];
  if (!parentRelation) {
    return;
  }

  initLinkedHandlers(parentRelation, vm, parentVm);
  initLinkedHandlers(childRelation, parentVm, vm);

  initUnlinkedHandlers(parentRelation, vm, parentVm);
  initUnlinkedHandlers(childRelation, parentVm, vm);
}

function initRelation(relation, vm) {
  var type = relation.type;
  if (type === 'parent') {
    initParentRelation(vm, relation, function matchParent(vm, target) {
      return findParentRelation(vm.$parent, target, 'child');
    });
  } else if (type === 'ancestor') {
    initParentRelation(vm, relation, function matchAncestor(vm, target) {
      var $parent = vm.$parent;
      while ($parent) {
        var ret = findParentRelation($parent, target, 'descendant');
        if (ret.length) {
          return ret;
        }
        $parent = $parent.$parent;
      }
      return [];
    });
  }
}

function initRelations(vm) {var _ref =


  vm.$options.mpOptions || {},relations = _ref.relations;
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    initRelation(relations[name], vm);
  });
}

function handleRelations(vm, type) {
  // TODO 需要移除 relationNodes
  var handlers = vm["_$".concat(type, "Handlers")];
  if (!handlers) {
    return;
  }
  handlers.forEach(function (handler) {return handler();});
}

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop };


function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function setDataByExprPath(exprPath, value, data) {
  var keys = exprPath.replace(/\[(\d+?)\]/g, '.$1').split('.');
  keys.reduce(function (obj, key, idx) {
    if (idx === keys.length - 1) {
      obj[key] = value;
    } else {
      if (typeof obj[key] === 'undefined') {
        obj[key] = {};
      }
      return obj[key];
    }
  }, data);
  return keys.length === 1;
}

function setData(data, callback) {var _this = this;
  if (!isPlainObject(data)) {
    return;
  }
  Object.keys(data).forEach(function (key) {
    if (setDataByExprPath(key, data[key], _this.data)) {
      !hasOwn(_this, key) && proxy(_this, SOURCE_KEY, key);
    }
  });
  this.$forceUpdate();
  isFn(callback) && this.$nextTick(callback);
}

/**
   * https://github.com/swan-team/swan-js/blob/61e2a63f7aa576b5daafbe77fdfa7c65b977060c/src/utils/index.js
   */

var _toString$1 = Object.prototype.toString;
/**
                                              * 深度assign的函数
                                              * @param {Object} targetObject 要被拷贝的目标对象
                                              * @param {Object} originObject 拷贝的源对象
                                              * @return {Object} merge后的对象
                                              */
var deepAssign = function deepAssign() {var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var originObject = arguments.length > 1 ? arguments[1] : undefined;
  var originType = _toString$1.call(originObject);
  if (originType === '[object Array]') {
    targetObject = originObject.slice(0);
    return targetObject;
  } else if (originType === '[object Object]') {
    for (var key in originObject) {
      targetObject[key] = deepAssign(targetObject[key], originObject[key]);
    }
    return targetObject;
  } else if (originType === '[object Date]') {
    return new Date(originObject.getTime());
  } else if (originType === '[object RegExp]') {
    var target = String(originObject);
    var lastIndex = target.lastIndexOf('/');
    return new RegExp(target.slice(1, lastIndex), target.slice(lastIndex + 1));
  }
  return originObject;
};

/**
    * 深度拷贝逻辑，不同于lodash等库，但是与微信一致
    * @param {*} [originObj] 原对象
    * @return {Object|Array} 拷贝结果
    */
var deepClone = function deepClone(originObj) {
  return deepAssign(_toString$1.call(originObj) === '[object Array]' ? [] : {}, originObj);
};

var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, _defineProperty(_PROP_DEFAULT_VALUES,
String, ''), _defineProperty(_PROP_DEFAULT_VALUES,
Number, 0), _defineProperty(_PROP_DEFAULT_VALUES,
Boolean, false), _defineProperty(_PROP_DEFAULT_VALUES,
Object, null), _defineProperty(_PROP_DEFAULT_VALUES,
Array, []), _defineProperty(_PROP_DEFAULT_VALUES,
null, null), _PROP_DEFAULT_VALUES);


function getDefaultVal(propType) {
  return PROP_DEFAULT_VALUES[propType];
}

function getPropertyVal(options) {
  if (isPlainObject(options)) {
    if (hasOwn(options, 'value')) {
      return options.value;
    }
    return getDefaultVal(options.type);
  }
  return getDefaultVal(options);
}

function getType(propOptions) {
  return isPlainObject(propOptions) ? propOptions.type : propOptions;
}

function validateProp(key, propsOptions, propsData, vm) {
  var value = propsData[key];
  if (value !== undefined) {
    var propOptions = propsOptions[key];
    var type = getType(propOptions);
    value = formatVal(value, type);
    var observer = propOptions && propOptions.observer;
    if (observer) {
      // 初始化时,异步触发 observer,否则 observer 中无法访问 methods 或其他
      setTimeout(function () {
        observe(observer, vm, value);
      }, 4);
    }
    return value;
  }
  return getPropertyVal(propsOptions[key]);
}

function formatVal(val, type) {
  if (type === Boolean) {
    return !!val;
  } else if (type === String) {
    return String(val);
  }
  return val;
}

function observe(observer, vm, newVal, oldVal) {
  try {
    if (typeof observer === 'function') {
      observer.call(vm, newVal, oldVal);
    } else if (typeof observer === 'string' &&
    typeof vm[observer] === 'function')
    {
      vm[observer](newVal, oldVal);
    }
  } catch (err) {
    console.error("execute observer ".concat(observer, " callback fail! err: ").concat(err));
  }
}

function initProperties(vm, instanceData) {
  var properties = vm.$options.mpOptions.properties;
  if (!properties) {
    return;
  }

  var propsData = deepClone(vm.$options.propsData) || {};var _loop = function _loop(

  key) {
    var observer = isPlainObject(properties[key]) ? properties[key].observer : false;
    var value = validateProp(key, properties, propsData, vm);
    Object.defineProperty(instanceData, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        var oldVal = value;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        // TODO 临时方案,clone array
        value = Array.isArray(newVal) ? newVal.slice(0) : newVal;
        if (observer) {
          observe(observer, vm, newVal, oldVal);
        }
        // 触发渲染
        vm.$forceUpdate();
      } });};for (var key in properties) {_loop(key);

  }
}

function updateProperties(vm) {
  var properties = vm.$options.mpOptions && vm.$options.mpOptions.properties;
  var propsData = vm.$options.propsData;
  if (propsData && properties) {
    Object.keys(properties).forEach(function (key) {
      if (hasOwn(propsData, key)) {
        vm[key] = formatVal(propsData[key], getType(properties[key]));
      }
    });
  }
}

function initState(vm) {
  var instanceData = JSON.parse(JSON.stringify(vm.$options.mpOptions.data || {}));

  vm[SOURCE_KEY] = instanceData;

  var propertyDefinition = {
    get: function get() {
      return vm[SOURCE_KEY];
    },
    set: function set(value) {
      vm[SOURCE_KEY] = value;
    } };


  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition });


  vm.setData = setData;

  initProperties(vm, instanceData);

  Object.keys(instanceData).forEach(function (key) {
    proxy(vm, SOURCE_KEY, key);
  });
}

function initMethods(vm) {
  var oldEmit = vm.$emit;
  vm.triggerEvent = function (eventName, detail, options) {
    var target = {
      dataset: vm.$el.dataset };


    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop };


    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {return !vm._isDestroyed;});
  };

  vm._$updateProperties = updateProperties;
}

function handleObservers(vm) {
  var watch = vm.$options.watch;
  if (!watch) {
    return;
  }
  Object.keys(watch).forEach(function (name) {
    var observer = watch[name];
    if (observer.mounted) {
      var val = vm[name];
      var handler = observer.handler;
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      handler && handler.call(vm, val, val);
    }
  });
}

var polyfill = {
  beforeCreate: function beforeCreate() {
    // 取消 development 时的 Proxy,避免小程序组件模板中使用尚未定义的属性告警
    this._renderProxy = this;

    this._$self = this;
    this._$noop = noop;
  },
  created: function created() {// properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  } };


global.__wxRoute = '';
global.__wxComponents = Object.create(null);
global.__wxVueOptions = Object.create(null);

function Page(options) {
  var pageOptions = parsePage(options);
  pageOptions.mixins.unshift(polyfill);
  pageOptions.mpOptions.path = global.__wxRoute;
  global.__wxComponents[global.__wxRoute] = pageOptions;
}

function initRelationsHandler(vueComponentOptions) {
  // linked 需要在当前组件 attached 之后再执行
  if (!vueComponentOptions.onServiceAttached) {
    vueComponentOptions.onServiceAttached = [];
  }
  vueComponentOptions.onServiceAttached.push(function onServiceAttached() {
    handleRelations(this, 'linked');
  });
}

function Component(options) {
  var componentOptions = parseComponent(options);
  componentOptions.mixins.unshift(polyfill);
  componentOptions.mpOptions.path = global.__wxRoute;
  initRelationsHandler(componentOptions);
  global.__wxComponents[global.__wxRoute] = componentOptions;
}

function Behavior(options) {
  return options;
}

var nextTick = _vue.default.nextTick;exports.nextTick = nextTick;

var index = uni.__$wx__;var _default =

index;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 12)))

/***/ }),
/* 12 */
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
/* 13 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 14 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 15 */
/*!***********************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/utils/pmSerTools.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(uniCloud, wx, __f__) {var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7);function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};} //有时上面会自动出现一些导入语句，原因未知，造成编译不通过。\n//所有需要和云函数进行交互的操作写在这里\nvar pmJSTools = __webpack_require__(/*! ./pmJSTools.js */ 10);\nvar app = getApp();\nvar targetServerEnv = 'tcb-ecxw1hs9f19080-6d00j26b1957e'; //云环境ID\n//测试环境\n//const targetServerEnv = 'zctmes2021-test-9gyl6ila6a31bc71'\n//正式环境 ==>\n//const targetServerEnv = 'zctmes2021-4gbkpkah6976a0e1'\n//声明曝露函数给require方\n\nmodule.exports = {\n  getCollectionsFromDB: getCollectionsFromDB,\n  getResFromReturn: getResFromReturn,\n  addOrUpdateToServer: addOrUpdateToServer,\n  exeAccounts: exeAccounts,\n  exePMCOI: exePMCOI,\n  UploadFile: UploadFile,\n  ExeMessage: ExeMessage,\n  exePayment: exePayment,\n  getPhoneNumber: getPhoneNumber,\n  getAccount: getAccount };\n//调用结果处理函数\n//1, 对云函数返回的结果进行检查和统计格式确认，并将结果整合好给前端，简化前端代码处理的工作量\n//2，errMsg 成功消息，result只保留OK的数值。\n//3，让调用者获得如下结构： {errMsg,result}\n//4，函数名是： get Result From Reurn data 的简称\n\nfunction getResFromReturn(SerRes) {\n  var errMsg = \"\"; // 用于返回\n\n  var result = []; // 用于返回\n\n  if (pmJSTools.IsNullOrEmpty(SerRes)) {\n    //SerRes为空\n    errMsg = \"返回数据为空。\";\n    return {\n      errMsg: errMsg,\n      data: data };\n\n  } else {\n    if (pmJSTools.GetErrMsgValue(SerRes.errMsg) == \"OK\") {\n      //调用正常的情况下\n      if (pmJSTools.GetErrMsgValue(pmJSTools.GetSubObj([SerRes, \"result\", \"errMsg\"])) == \"OK\") {\n        errMsg = \"OK\"; //简化，也是为了过滤前面的调用对象说明，减少误会\n      } else {\n        if (pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([SerRes, \"result\", \"errMsg\"]))) {\n          //分别处理：SerRes.result.errMsg 为空的情况\n          //情况1： 程序员重复调用（已经脱壳了）\n          //情况2： 如开发说明中的：2.4.9.1   result:   {Data[]}\n          //情况3： 如开发说明中的：2.4.9.2 result: {[errMsg，Data[]],...}\n          //防错代码\n          if (!pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([SerRes, \"result\", \"result\"]))) {\n            errMsg = \"制程代码规范要求： result和errMsg同时出现，现在有result，没有errMsg说明代码有错误。常见错误是errMsg拼写问题。\";\n          } else {\n            errMsg = \"OK\"; //SerRes.result.errMsg 为空，可能是程序员重复调用 ，为了防止程序员重复调用\n          }\n        } else {\n          errMsg = SerRes.result.errMsg; //errMsg不为OK,一直上传到最上调用层\n        }\n      }\n\n      if (pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([SerRes, \"result\", \"errMsg\"]))) //不能直接用IsNullOrEmpty,undefined 表示不存在，为空还是存在的情况下\n        {\n          if (SerRes.result === undefined || SerRes.result == null) {\n            errMsg = \"代码： 返回结果是OK,但是result 是undefined 或 null,说明调用有问题。\"; //因为errMsg 是OK，和它对应的result 不可以是 undefined ，或 null,否则证明有潜在错误。这是个防错设计\n          } else {\n            result = pmJSTools.GetSubObj([SerRes, \"result\"]);\n          } //一般情况下，只要执行result = SerRes.result.result就可以，考虑到，程序员可能会搞不清楚是否要用getResFromReturn\n          //为了防错，自动执行result = SerRes.result，防止过度调用造成错误。\n\n        } else {\n        result = pmJSTools.GetSubObj([SerRes, \"result\", \"result\"]); //忽略掉一层result,否则结构复杂\n      }\n\n      return {\n        errMsg: errMsg,\n        result: result };\n\n    } else {\n      //如果返回的结果不为OK,页必须返回错误结果，并且自动屏蔽获取的值。制程规定每一层函数必须为OK,下一层才能是OK,并且错误必须逐层传递到底层。\n      errMsg = SerRes.errMsg; //一旦由错误，值不会传给调用者\n\n      return {\n        errMsg: errMsg,\n        result: result };\n\n    }\n  }\n} //函数对象号： 2， 获取多个集合的函数，中转到云函数，为未来切换数据库的可能做好准备。 getCollectionsFromServer\n//DBConditions结构举例\nfunction\n\ngetCollectionsFromDB(_x) {return _getCollectionsFromDB.apply(this, arguments);}function _getCollectionsFromDB() {_getCollectionsFromDB = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(DBConditions) {var serRes;return _regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;_context.next = 3;return (\n\n              uniCloud.callFunction //await调用远程云函数\n              ({\n                config: {\n                  env: targetServerEnv },\n\n                name: 'getCollectionsFromServer',\n                data: {\n                  DBConditions: DBConditions } }));case 3:serRes = _context.sent;return _context.abrupt(\"return\",\n\n\n            getResFromReturn(serRes));case 7:_context.prev = 7;_context.t0 = _context[\"catch\"](0);return _context.abrupt(\"return\",\n\n            getResFromReturn(_context.t0));case 10:case \"end\":return _context.stop();}}}, _callee, null, [[0, 7]]);}));return _getCollectionsFromDB.apply(this, arguments);}function\n\n\n\naddOrUpdateToServer(_x2) {return _addOrUpdateToServer.apply(this, arguments);}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//函数对象号： 4, 账号类操作对象/exeAccounts\n//funcType: 具体业务类型，dataList 参数清单\nfunction _addOrUpdateToServer() {_addOrUpdateToServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(DBConditionsAndDataForExe) {var serRes;return _regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.prev = 0;_context2.next = 3;return wx.cloud.callFunction //await调用远程云函数\n            ({ config: { env: targetServerEnv }, name: 'addOrUpdateToServer', data: { DBConditionsAndDataForExe: DBConditionsAndDataForExe } });case 3:serRes = _context2.sent;return _context2.abrupt(\"return\", getResFromReturn(serRes));case 7:_context2.prev = 7;_context2.t0 = _context2[\"catch\"](0);return _context2.abrupt(\"return\", getResFromReturn(_context2.t0));case 10:case \"end\":return _context2.stop();}}}, _callee2, null, [[0, 7]]);}));return _addOrUpdateToServer.apply(this, arguments);}function\nexeAccounts(_x3, _x4) {return _exeAccounts.apply(this, arguments);}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//函数对象号： 5，交付订单类操作exePMCOI\n//功能分类区域\n///////////////////////////////////////////////////////////////////////////////\n//功能1： 获取PMCOI数据                                                        //\n//参数1： funcName= getPMCOI                                                 //\n//返回：  funcName= PMCOI                                                    //\n//////////////////////////////////////////////////////////////////////////////\n//功能2: 创建PO                                                             //\n//参数2： funcName= createPO，funcPra.PMCOIID不能为空，  funcPra.PMPO 不能为空//\n/////////////////////////////////////////////////////////////////////////////\n//功能3： 获取我发布的 PMCOIList                                             //\n//参数： funcName= getPMCOIList                                            //\n//返回：  funcName= funcPra.PMUser不能为空                                  //\n//////////////////////////////////////////////////////////////////////////////\n//功能4： 创建PMCOI                                                         //\n//参数： funcName= createOnePMCOI                                            //\n//返回：  funcName= funcPra.PMCOI不能为空                                  //\n//////////////////////////////////////////////////////////////////////////////\nfunction _exeAccounts() {_exeAccounts = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(funcName, funcPra) {var serRes;return _regeneratorRuntime.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.prev = 0;_context3.next = 3;return uniCloud.callFunction //await调用远程云函数\n            ({ config: { env: targetServerEnv }, name: 'exeAccounts', data: { funcName: funcName, funcPra: funcPra } });case 3:serRes = _context3.sent;__f__(\"log\", \"云exeAccounts调用结果\", \" at utils/pmSerTools.js:161\");__f__(\"log\", serRes, \" at utils/pmSerTools.js:162\");return _context3.abrupt(\"return\", getResFromReturn(serRes));case 9:_context3.prev = 9;_context3.t0 = _context3[\"catch\"](0);__f__(\"log\", \"有错误\", \" at utils/pmSerTools.js:165\");__f__(\"log\", _context3.t0, \" at utils/pmSerTools.js:166\");return _context3.abrupt(\"return\", getResFromReturn(_context3.t0));case 14:case \"end\":return _context3.stop();}}}, _callee3, null, [[0, 9]]);}));return _exeAccounts.apply(this, arguments);}function\nexePMCOI(_x5, _x6) {return _exePMCOI.apply(this, arguments);}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//函数对象号：6， 文件上传 这个函数统一管理上传文件，即使未来更换文件服务器也可以通过函数路由实现。\n//根据fileType，代码确认远程文件夹\n//localFilePath 本地路径\nfunction _exePMCOI() {_exePMCOI = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(funcName, funcPra) {var btnSelectedStyle, btnUnSelectedStyle, serRes;return _regeneratorRuntime.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:btnSelectedStyle = \" box-shadow: 2px 2px 5px #000;\"; //用于动态表达按钮选中的状态\n            btnUnSelectedStyle = \" box-shadow: 0px 0px 0px #000;\"; //用于动态表达按钮没有选中的状态\n            __f__(\"log\", \"需执行的方法名为：\" + funcName, \" at utils/pmSerTools.js:193\");serRes = { errMsg: \"\", result: [] };_context4.prev = 4;_context4.next = 7;return uniCloud.callFunction //await调用远程云函数\n            ({ config: { env: targetServerEnv }, name: 'exePMCOI', data: { funcName: funcName, funcPra: funcPra } });case 7:serRes = _context4.sent;__f__(\"log\", \"云exePMCOI调用结果\", \" at utils/pmSerTools.js:211\");__f__(\"log\", serRes, \" at utils/pmSerTools.js:212\"); // return getResFromReturn(serRes); //getResFromReturn整合和简化sertRes供前端使用。\n            return _context4.abrupt(\"return\", serRes);case 13:_context4.prev = 13;_context4.t0 = _context4[\"catch\"](4);__f__(\"log\", \"有错误\", \" at utils/pmSerTools.js:216\");__f__(\"log\", _context4.t0, \" at utils/pmSerTools.js:217\");return _context4.abrupt(\"return\", getResFromReturn(_context4.t0));case 18:case \"end\":return _context4.stop();}}}, _callee4, null, [[4, 13]]);}));return _exePMCOI.apply(this, arguments);}function UploadFile(_x7, _x8, _x9) {return _UploadFile.apply(this, arguments);}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//函数对象号： 7, 订阅消息类操作对象/exeMessage \n//funcName: 具体业务类型，funcPra: 参数清单 \nfunction _UploadFile() {_UploadFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(fileType, localFilePath, remotefileName) {var ResData, ServerFilePath, TempRes;return _regeneratorRuntime.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:ResData = { errMsg: \"等待执行\", result: [] }; //这样做的目的，就是为了防止程序员随意上传文件，搞乱服务器文件地址\n            __f__(\"log\", \"图片存放的位置为1\" + ServerFilePath, \" at utils/pmSerTools.js:230\");ServerFilePath = \"\";_context5.t0 = fileType;_context5.next = _context5.t0 === \"PMCOIProductPic\" ? 6 : _context5.t0 === \"PMPIProductPic\" ? 8 : _context5.t0 === \"ZCTRAWProPic\" ? 10 : _context5.t0 === \"ZCTRAWPurPic\" ? 12 : _context5.t0 === \"userphoto\" ? 14 : _context5.t0 === \"ZCTChatImages\" ? 16 : 18;break;case 6:ServerFilePath = \"PMCOIProductPic\";return _context5.abrupt(\"break\", 21);case 8:ServerFilePath = \"PMPIProductPic\";return _context5.abrupt(\"break\", 21);case 10:ServerFilePath = \"ZCTRAWProPic\";return _context5.abrupt(\"break\", 21);case 12:ServerFilePath = \"ZCTRAWPurPic\";return _context5.abrupt(\"break\", 21);case 14:ServerFilePath = \"userphoto\";return _context5.abrupt(\"break\", 21);case 16:ServerFilePath = \"ZCTChatImages\";return _context5.abrupt(\"break\", 21);case 18:ResData.errMsg = \"编程错误： 文件类型需要检查。\";return _context5.abrupt(\"return\", ResData);case 21:__f__(\"log\", \"图片存放的位置为2\" + ServerFilePath, \" at utils/pmSerTools.js:283\");if (pmJSTools.IsNullOrEmpty(\"ServerFilePath\")) {_context5.next = 31;break;}_context5.next = 25;return uniCloud.uploadFile({ cloudPath: ServerFilePath + \"/\" + remotefileName, filePath: localFilePath //本地文件文件路径\n            });case 25:TempRes = _context5.sent;ResData.errMsg = \"OK\";ResData.result = TempRes.fileID;return _context5.abrupt(\"return\", ResData);case 31:ResData.errMsg = \"编程问题：文件类型参数错误。清单pmSerTools.UploadFile中添加。\";return _context5.abrupt(\"return\", ResData);case 33:case \"end\":return _context5.stop();}}}, _callee5);}));return _UploadFile.apply(this, arguments);}function ExeMessage(_x10, _x11) {return _ExeMessage.apply(this, arguments);}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//函数对象号： 8, 支付类操作对象/exePayment \n//funcName: 支付业务类型，funcPra: 参数清单 \nfunction _ExeMessage() {_ExeMessage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(funcName, funcPra) {var serRes;return _regeneratorRuntime.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0: //功能分类区域 \n            /////////////////////////////////////////////////////////////////////////////// \n            //功能： 关于ExeMessage的前端调用功能接口                                      //                                                 // \n            //参数1： funcName= GetTemplate_id，funcPra.functionName不能为空              // \n            //返回：                                                                     // \n            ////////////////////////////////////////////////////////////////////////////// \n            wx.showLoading({ title: '数据交互中...' });_context6.prev = 1;_context6.next = 4;return uniCloud.callFunction //await调用远程云函数 \n            ({ config: { env: targetServerEnv }, name: 'ExeMessage', data: { funcName: funcName, funcPra: funcPra } });case 4:serRes = _context6.sent; //wx.hideLoading() //这种写法真机环境下会出错 \n            wx.hideLoading({ fail: function fail(res) {} });return _context6.abrupt(\"return\", getResFromReturn(serRes));case 9:_context6.prev = 9;_context6.t0 = _context6[\"catch\"](1);return _context6.abrupt(\"return\", getResFromReturn(_context6.t0));case 12:case \"end\":return _context6.stop();}}}, _callee6, null, [[1, 9]]);}));return _ExeMessage.apply(this, arguments);}function exePayment(_x12, _x13) {return _exePayment.apply(this, arguments);}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//函数对象号： 9, 获取登录微信手机号 \n//cloudID: 用来向云函数换取手机号 \nfunction _exePayment() {_exePayment = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7(funcName, funcPra) {var serRes;return _regeneratorRuntime.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:_context7.prev = 0;_context7.next = 3;return uniCloud.callFunction //await调用远程云函数\n            ({ config: { env: targetServerEnv }, name: 'exePayment', data: { funcName: funcName, funcPra: funcPra } });case 3:serRes = _context7.sent;__f__(\"log\", \"云exeAccounts调用结果\", \" at utils/pmSerTools.js:353\");__f__(\"log\", serRes, \" at utils/pmSerTools.js:354\");return _context7.abrupt(\"return\", getResFromReturn(serRes));case 9:_context7.prev = 9;_context7.t0 = _context7[\"catch\"](0);__f__(\"log\", \"有错误\", \" at utils/pmSerTools.js:357\");__f__(\"log\", _context7.t0, \" at utils/pmSerTools.js:358\");return _context7.abrupt(\"return\", getResFromReturn(_context7.t0));case 14:case \"end\":return _context7.stop();}}}, _callee7, null, [[0, 9]]);}));return _exePayment.apply(this, arguments);}function\ngetPhoneNumber(_x14) {return _getPhoneNumber.apply(this, arguments);}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//函数对象号： 10, 获取人员信息\nfunction _getPhoneNumber() {_getPhoneNumber = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8(cloudID) {var serRes;return _regeneratorRuntime.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:_context8.prev = 0;_context8.next = 3;return wx.cloud.callFunction({ config: { env: targetServerEnv }, name: 'exeAccounts', data: { weRunData: wx.cloud.CloudID(cloudID), // 这个 CloudID 值到云函数端会被替换 \n                obj: { shareInfo: wx.cloud.CloudID(cloudID) // 非顶层字段的 CloudID 不会被替换，会原样字符串展示 \n                }, funcName: \"getPhoneNumber\" } });case 3:serRes = _context8.sent;__f__(\"log\", \"云exeAccounts--getPhoneNumber调用结果\", \" at utils/pmSerTools.js:382\");__f__(\"log\", serRes, \" at utils/pmSerTools.js:383\");return _context8.abrupt(\"return\", serRes);case 9:_context8.prev = 9;_context8.t0 = _context8[\"catch\"](0);__f__(\"log\", \"有错误\", \" at utils/pmSerTools.js:386\");__f__(\"log\", _context8.t0, \" at utils/pmSerTools.js:387\");return _context8.abrupt(\"return\", _context8.t0);case 14:case \"end\":return _context8.stop();}}}, _callee8, null, [[0, 9]]);}));return _getPhoneNumber.apply(this, arguments);}function getAccount() {return _getAccount.apply(this, arguments);}function _getAccount() {_getAccount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee9() {var fancname, funcPra, resData, TempRes, myDate, myDateYear, TempPMUserAge, TemData;return _regeneratorRuntime.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.prev = 0;\n\n\n            fancname = \"getAccount\";\n            funcPra = {}; //获取时不需要赋值参数\n            _context9.next = 5;return (\n              this.exeAccounts(fancname, funcPra));case 5:resData = _context9.sent;\n            TempRes = this.getResFromReturn(resData); //脱壳\n\n            myDate = new Date();\n            myDateYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)\n\n            TempPMUserAge = parseFloat(myDateYear - pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"ZCTBirthYear\"])));\n            TemData = {\n              _id: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"_id\"])),\n              PMUserID: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"PMUserID\"])),\n              PMUserName: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"PMUserName\"])),\n              WXOpenID: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"WXOpenID\"])),\n              ZCTJobType: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"ZCTJobType\"])),\n              ZCTJobPayType: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"ZCTJobPayType\"])),\n              ZCTUserSex: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"ZCTUserSex\"])),\n              PMPhoneNB: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"PMPhoneNB\"])),\n              ZCTBirthYear: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"ZCTBirthYear\"])),\n              ZCTReleaseNum: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"ZCTReleaseNum\"])),\n              ZCTReleaseAcceNum: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"ZCTReleaseAcceNum\"])),\n              ZCTReceiveOrderNum: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"ZCTReceiveOrderNum\"])),\n              ZCTDeliveryAcceNum: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"ZCTDeliveryAcceNum\"])),\n              PMUserAge: TempPMUserAge,\n              ZCTUserPhoto: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"ZCTUserPhoto\"])) };\n\n            app.globalData.PMUserID = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"PMUserID\"]));\n            app.globalData.PMUserName = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"PMUserName\"]));\n            app.globalData.ZCTBirthYear = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"ZCTBirthYear\"]));\n            app.globalData.WXOpenID = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"WXOpenID\"]));\n            app.globalData.ZCTJobType = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"ZCTJobType\"]));\n            app.globalData.ZCTJobPayType = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"ZCTJobPayType\"]));\n            app.globalData.ZCTUserSex = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"ZCTUserSex\"]));\n            app.globalData.PMPhoneNB = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"PMPhoneNB\"]));\n            app.globalData.ZCTReleaseNum = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"ZCTReleaseNum\"]));\n            app.globalData.ZCTReleaseAcceNum = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"ZCTReleaseAcceNum\"]));\n            app.globalData.ZCTReceiveOrderNum = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"ZCTReceiveOrderNum\"]));\n            app.globalData.ZCTDeliveryAcceNum = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"ZCTDeliveryAcceNum\"]));\n            app.globalData.PMUserAge = TempPMUserAge;\n            app.globalData._id = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"_id\"]));\n            app.globalData.ZCTUserPhoto = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, \"result\", 0, 0, \"ZCTUserPhoto\"]));if (!(\n\n            TempRes.errMsg == \"OK\" && !pmJSTools.IsNullOrEmpty(TempRes.result))) {_context9.next = 31;break;}\n            //如果登录成功先把获取的值保存下来\n            wx.setStorage({\n              key: 'PMUserInfo',\n              data: TemData });return _context9.abrupt(\"return\",\n\n            \"OK\");case 31:\n\n            //如果登录不成功先把获取的值置空\n            wx.setStorage({\n              key: 'PMUserInfo',\n              data: {\n                PMUserID: \"\",\n                PMUserName: \"\",\n                WXOpenID: \"\",\n                ZCTJobType: \"\",\n                ZCTJobPayType: \"\",\n                ZCTUserSex: \"\",\n                PMPhoneNB: \"\",\n                ZCTBirthYear: \"\",\n                ZCTReleaseNum: \"\",\n                ZCTReleaseAcceNum: \"\",\n                ZCTReceiveOrderNum: \"\",\n                ZCTDeliveryAcceNum: \"\",\n                PMUserAge: \"\",\n                _id: \"\" } });\n\n\n            app.globalData.PMUserID = \"\";\n            app.globalData.PMUserName = \"\";\n            app.globalData.WXOpenID = \"\";\n            app.globalData.ZCTJobType = \"\";\n            app.globalData.ZCTJobPayType = \"\";\n            app.globalData.ZCTUserSex = \"\";\n            app.globalData.PMPhoneNB = \"\";\n            app.globalData.ZCTBirthYear = \"\";\n            app.globalData.ZCTReleaseNum = \"\";\n            app.globalData.ZCTReleaseAcceNum = \"\";\n            app.globalData.ZCTReceiveOrderNum = \"\";\n            app.globalData.ZCTDeliveryAcceNum = \"\";\n            app.globalData.PMUserAge = \"\";\n            app.globalData._id = \"\";case 46:return _context9.abrupt(\"return\",\n\n\n            \"NOK\");case 49:_context9.prev = 49;_context9.t0 = _context9[\"catch\"](0);return _context9.abrupt(\"return\", _context9.t0);case 52:case \"end\":return _context9.stop();}}}, _callee9, this, [[0, 49]]);}));return _getAccount.apply(this, arguments);}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 16)[\"default\"], __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 11)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 14)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvcG1TZXJUb29scy5qcyJdLCJuYW1lcyI6WyJwbUpTVG9vbHMiLCJyZXF1aXJlIiwiYXBwIiwiZ2V0QXBwIiwidGFyZ2V0U2VydmVyRW52IiwibW9kdWxlIiwiZXhwb3J0cyIsImdldENvbGxlY3Rpb25zRnJvbURCIiwiZ2V0UmVzRnJvbVJldHVybiIsImFkZE9yVXBkYXRlVG9TZXJ2ZXIiLCJleGVBY2NvdW50cyIsImV4ZVBNQ09JIiwiVXBsb2FkRmlsZSIsIkV4ZU1lc3NhZ2UiLCJleGVQYXltZW50IiwiZ2V0UGhvbmVOdW1iZXIiLCJnZXRBY2NvdW50IiwiU2VyUmVzIiwiZXJyTXNnIiwicmVzdWx0IiwiSXNOdWxsT3JFbXB0eSIsImRhdGEiLCJHZXRFcnJNc2dWYWx1ZSIsIkdldFN1Yk9iaiIsInVuZGVmaW5lZCIsIkRCQ29uZGl0aW9ucyIsInVuaUNsb3VkIiwiY2FsbEZ1bmN0aW9uIiwiY29uZmlnIiwiZW52IiwibmFtZSIsInNlclJlcyIsIkRCQ29uZGl0aW9uc0FuZERhdGFGb3JFeGUiLCJ3eCIsImNsb3VkIiwiZnVuY05hbWUiLCJmdW5jUHJhIiwiYnRuU2VsZWN0ZWRTdHlsZSIsImJ0blVuU2VsZWN0ZWRTdHlsZSIsImZpbGVUeXBlIiwibG9jYWxGaWxlUGF0aCIsInJlbW90ZWZpbGVOYW1lIiwiUmVzRGF0YSIsIlNlcnZlckZpbGVQYXRoIiwidXBsb2FkRmlsZSIsImNsb3VkUGF0aCIsImZpbGVQYXRoIiwiVGVtcFJlcyIsImZpbGVJRCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJoaWRlTG9hZGluZyIsImZhaWwiLCJyZXMiLCJjbG91ZElEIiwid2VSdW5EYXRhIiwiQ2xvdWRJRCIsIm9iaiIsInNoYXJlSW5mbyIsImZhbmNuYW1lIiwicmVzRGF0YSIsIm15RGF0ZSIsIkRhdGUiLCJteURhdGVZZWFyIiwiZ2V0RnVsbFllYXIiLCJUZW1wUE1Vc2VyQWdlIiwicGFyc2VGbG9hdCIsIkdldFN0ciIsIlRlbURhdGEiLCJfaWQiLCJQTVVzZXJJRCIsIlBNVXNlck5hbWUiLCJXWE9wZW5JRCIsIlpDVEpvYlR5cGUiLCJaQ1RKb2JQYXlUeXBlIiwiWkNUVXNlclNleCIsIlBNUGhvbmVOQiIsIlpDVEJpcnRoWWVhciIsIlpDVFJlbGVhc2VOdW0iLCJaQ1RSZWxlYXNlQWNjZU51bSIsIlpDVFJlY2VpdmVPcmRlck51bSIsIlpDVERlbGl2ZXJ5QWNjZU51bSIsIlBNVXNlckFnZSIsIlpDVFVzZXJQaG90byIsImdsb2JhbERhdGEiLCJzZXRTdG9yYWdlIiwia2V5Il0sIm1hcHBpbmdzIjoiZ3hCQUFBO0FBQ0E7QUFDQSxJQUFNQSxTQUFTLEdBQUdDLG1CQUFPLENBQUMsd0JBQUQsQ0FBekI7QUFDQSxJQUFJQyxHQUFHLEdBQUdDLE1BQU0sRUFBaEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsa0NBQXhCLEMsQ0FBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZDLHNCQUFvQixFQUFFQSxvQkFEUDtBQUVmQyxrQkFBZ0IsRUFBRUEsZ0JBRkg7QUFHZkMscUJBQW1CLEVBQUVBLG1CQUhOO0FBSWZDLGFBQVcsRUFBRUEsV0FKRTtBQUtmQyxVQUFRLEVBQUVBLFFBTEs7QUFNZkMsWUFBVSxFQUFFQSxVQU5HO0FBT2ZDLFlBQVUsRUFBRUEsVUFQRztBQVFmQyxZQUFVLEVBQUVBLFVBUkc7QUFTZkMsZ0JBQWMsRUFBRUEsY0FURDtBQVVmQyxZQUFVLEVBQUVBLFVBVkcsRUFBakI7QUFXRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNSLGdCQUFULENBQTBCUyxNQUExQixFQUFrQztBQUNoQyxNQUFJQyxNQUFNLEdBQUcsRUFBYixDQURnQyxDQUNmOztBQUVqQixNQUFJQyxNQUFNLEdBQUcsRUFBYixDQUhnQyxDQUdmOztBQUVqQixNQUFJbkIsU0FBUyxDQUFDb0IsYUFBVixDQUF3QkgsTUFBeEIsQ0FBSixFQUFxQztBQUNuQztBQUNBQyxVQUFNLEdBQUcsU0FBVDtB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b250ZW50IjpbIi8v5pyJ5pe25LiK6Z2i5Lya6Ieq5Yqo5Ye6546w5LiA5Lqb5a+85YWl6K+t5Y+l77yM5Y6f5Zug5pyq55+l77yM6YCg5oiQ57yW6K+R5LiN6YCa6L+H44CCXHJcbi8v5omA5pyJ6ZyA6KaB5ZKM5LqR5Ye95pWw6L+b6KGM5Lqk5LqS55qE5pON5L2c5YaZ5Zyo6L+Z6YeMXHJcbmNvbnN0IHBtSlNUb29scyA9IHJlcXVpcmUoXCIuL3BtSlNUb29scy5qc1wiKTtcclxudmFyIGFwcCA9IGdldEFwcCgpO1xyXG5jb25zdCB0YXJnZXRTZXJ2ZXJFbnYgPSAndGNiLWVjeHcxaHM5ZjE5MDgwLTZkMDBqMjZiMTk1N2UnOyAvL+S6keeOr+Wig0lEXHJcbi8v5rWL6K+V546v5aKDXHJcbi8vY29uc3QgdGFyZ2V0U2VydmVyRW52ID0gJ3pjdG1lczIwMjEtdGVzdC05Z3lsNmlsYTZhMzFiYzcxJ1xyXG4vL+ato+W8j+eOr+WigyA9PT5cclxuLy9jb25zdCB0YXJnZXRTZXJ2ZXJFbnYgPSAnemN0bWVzMjAyMS00Z2JrcGthaDY5NzZhMGUxJ1xyXG4vL+WjsOaYjuabnemcsuWHveaVsOe7mXJlcXVpcmXmlrlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGdldENvbGxlY3Rpb25zRnJvbURCOiBnZXRDb2xsZWN0aW9uc0Zyb21EQixcclxuICBnZXRSZXNGcm9tUmV0dXJuOiBnZXRSZXNGcm9tUmV0dXJuLFxyXG4gIGFkZE9yVXBkYXRlVG9TZXJ2ZXI6IGFkZE9yVXBkYXRlVG9TZXJ2ZXIsXHJcbiAgZXhlQWNjb3VudHM6IGV4ZUFjY291bnRzLFxyXG4gIGV4ZVBNQ09JOiBleGVQTUNPSSxcclxuICBVcGxvYWRGaWxlOiBVcGxvYWRGaWxlLFxyXG4gIEV4ZU1lc3NhZ2U6IEV4ZU1lc3NhZ2UsXHJcbiAgZXhlUGF5bWVudDogZXhlUGF5bWVudCxcclxuICBnZXRQaG9uZU51bWJlcjogZ2V0UGhvbmVOdW1iZXIsXHJcbiAgZ2V0QWNjb3VudDogZ2V0QWNjb3VudFxyXG59OyAvL+iwg+eUqOe7k+aenOWkhOeQhuWHveaVsFxyXG4vLzEsIOWvueS6keWHveaVsOi/lOWbnueahOe7k+aenOi/m+ihjOajgOafpeWSjOe7n+iuoeagvOW8j+ehruiupO+8jOW5tuWwhue7k+aenOaVtOWQiOWlvee7meWJjeerr++8jOeugOWMluWJjeerr+S7o+eggeWkhOeQhueahOW3peS9nOmHj1xyXG4vLzLvvIxlcnJNc2cg5oiQ5Yqf5raI5oGv77yMcmVzdWx05Y+q5L+d55WZT0vnmoTmlbDlgLzjgIJcclxuLy8z77yM6K6p6LCD55So6ICF6I635b6X5aaC5LiL57uT5p6E77yaIHtlcnJNc2cscmVzdWx0fVxyXG4vLzTvvIzlh73mlbDlkI3mmK/vvJogZ2V0IFJlc3VsdCBGcm9tIFJldXJuIGRhdGEg55qE566A56ewXHJcblxyXG5mdW5jdGlvbiBnZXRSZXNGcm9tUmV0dXJuKFNlclJlcykge1xyXG4gIHZhciBlcnJNc2cgPSBcIlwiOyAvLyDnlKjkuo7ov5Tlm55cclxuXHJcbiAgdmFyIHJlc3VsdCA9IFtdOyAvLyDnlKjkuo7ov5Tlm55cclxuXHJcbiAgaWYgKHBtSlNUb29scy5Jc051bGxPckVtcHR5KFNlclJlcykpIHtcclxuICAgIC8vU2VyUmVz5Li656m6XHJcbiAgICBlcnJNc2cgPSBcIui/lOWbnuaVsOaNruS4uuepuuOAglwiO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyTXNnLFxyXG4gICAgICBkYXRhXHJcbiAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAocG1KU1Rvb2xzLkdldEVyck1zZ1ZhbHVlKFNlclJlcy5lcnJNc2cpID09IFwiT0tcIikge1xyXG4gICAgICAvL+iwg+eUqOato+W4uOeahOaDheWGteS4i1xyXG4gICAgICBpZiAocG1KU1Rvb2xzLkdldEVyck1zZ1ZhbHVlKHBtSlNUb29scy5HZXRTdWJPYmooW1NlclJlcywgXCJyZXN1bHRcIiwgXCJlcnJNc2dcIl0pKSA9PSBcIk9LXCIpIHtcclxuICAgICAgICBlcnJNc2cgPSBcIk9LXCI7IC8v566A5YyW77yM5Lmf5piv5Li65LqG6L+H5ruk5YmN6Z2i55qE6LCD55So5a+56LGh6K+05piO77yM5YeP5bCR6K+v5LyaXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHBtSlNUb29scy5Jc051bGxPckVtcHR5KHBtSlNUb29scy5HZXRTdWJPYmooW1NlclJlcywgXCJyZXN1bHRcIiwgXCJlcnJNc2dcIl0pKSkge1xyXG4gICAgICAgICAgLy/liIbliKvlpITnkIbvvJpTZXJSZXMucmVzdWx0LmVyck1zZyDkuLrnqbrnmoTmg4XlhrVcclxuICAgICAgICAgIC8v5oOF5Ya1Me+8miDnqIvluo/lkZjph43lpI3osIPnlKjvvIjlt7Lnu4/ohLHlo7PkuobvvIlcclxuICAgICAgICAgIC8v5oOF5Ya1Mu+8miDlpoLlvIDlj5Hor7TmmI7kuK3nmoTvvJoyLjQuOS4xICAgcmVzdWx0OiAgIHtEYXRhW119XHJcbiAgICAgICAgICAvL+aDheWGtTPvvJog5aaC5byA5Y+R6K+05piO5Lit55qE77yaMi40LjkuMiByZXN1bHQ6IHtbZXJyTXNn77yMRGF0YVtdXSwuLi59XHJcbiAgICAgICAgICAvL+mYsumUmeS7o+eggVxyXG4gICAgICAgICAgaWYgKCFwbUpTVG9vbHMuSXNOdWxsT3JFbXB0eShwbUpTVG9vbHMuR2V0U3ViT2JqKFtTZXJSZXMsIFwicmVzdWx0XCIsIFwicmVzdWx0XCJdKSkpIHtcclxuICAgICAgICAgICAgZXJyTXNnID0gXCLliLbnqIvku6PnoIHop4TojIPopoHmsYLvvJogcmVzdWx05ZKMZXJyTXNn5ZCM5pe25Ye6546w77yM546w5Zyo5pyJcmVzdWx077yM5rKh5pyJZXJyTXNn6K+05piO5Luj56CB5pyJ6ZSZ6K+v44CC5bi46KeB6ZSZ6K+v5pivZXJyTXNn5ou85YaZ6Zeu6aKY44CCXCI7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlcnJNc2cgPSBcIk9LXCI7IC8vU2VyUmVzLnJlc3VsdC5lcnJNc2cg5Li656m677yM5Y+v6IO95piv56iL5bqP5ZGY6YeN5aSN6LCD55SoIO+8jOS4uuS6humYsuatoueoi+W6j+WRmOmHjeWkjeiwg+eUqFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBlcnJNc2cgPSBTZXJSZXMucmVzdWx0LmVyck1zZzsgLy9lcnJNc2fkuI3kuLpPSyzkuIDnm7TkuIrkvKDliLDmnIDkuIrosIPnlKjlsYJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwbUpTVG9vbHMuSXNOdWxsT3JFbXB0eShwbUpTVG9vbHMuR2V0U3ViT2JqKFtTZXJSZXMsIFwicmVzdWx0XCIsIFwiZXJyTXNnXCJdKSkpIC8v5LiN6IO955u05o6l55SoSXNOdWxsT3JFbXB0eSx1bmRlZmluZWQg6KGo56S65LiN5a2Y5Zyo77yM5Li656m66L+Y5piv5a2Y5Zyo55qE5oOF5Ya15LiLXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWYgKFNlclJlcy5yZXN1bHQgPT09IHVuZGVmaW5lZCB8fCBTZXJSZXMucmVzdWx0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgZXJyTXNnID0gXCLku6PnoIHvvJog6L+U5Zue57uT5p6c5pivT0ss5L2G5pivcmVzdWx0IOaYr3VuZGVmaW5lZCDmiJYgbnVsbCzor7TmmI7osIPnlKjmnInpl67popjjgIJcIjsgLy/lm6DkuLplcnJNc2cg5pivT0vvvIzlkozlroPlr7nlupTnmoRyZXN1bHQg5LiN5Y+v5Lul5pivIHVuZGVmaW5lZCDvvIzmiJYgbnVsbCzlkKbliJnor4HmmI7mnInmvZzlnKjplJnor6/jgILov5nmmK/kuKrpmLLplJnorr7orqFcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHBtSlNUb29scy5HZXRTdWJPYmooW1NlclJlcywgXCJyZXN1bHRcIl0pO1xyXG4gICAgICAgICAgfSAvL+S4gOiIrOaDheWGteS4i++8jOWPquimgeaJp+ihjHJlc3VsdCA9IFNlclJlcy5yZXN1bHQucmVzdWx05bCx5Y+v5Lul77yM6ICD6JmR5Yiw77yM56iL5bqP5ZGY5Y+v6IO95Lya5pCe5LiN5riF5qWa5piv5ZCm6KaB55SoZ2V0UmVzRnJvbVJldHVyblxyXG4gICAgICAgICAgLy/kuLrkuobpmLLplJnvvIzoh6rliqjmiafooYxyZXN1bHQgPSBTZXJSZXMucmVzdWx077yM6Ziy5q2i6L+H5bqm6LCD55So6YCg5oiQ6ZSZ6K+v44CCXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ID0gcG1KU1Rvb2xzLkdldFN1Yk9iaihbU2VyUmVzLCBcInJlc3VsdFwiLCBcInJlc3VsdFwiXSk7IC8v5b+955Wl5o6J5LiA5bGCcmVzdWx0LOWQpuWImee7k+aehOWkjeadglxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGVyck1zZyxcclxuICAgICAgICByZXN1bHRcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8v5aaC5p6c6L+U5Zue55qE57uT5p6c5LiN5Li6T0ss6aG15b+F6aG76L+U5Zue6ZSZ6K+v57uT5p6c77yM5bm25LiU6Ieq5Yqo5bGP6JS96I635Y+W55qE5YC844CC5Yi256iL6KeE5a6a5q+P5LiA5bGC5Ye95pWw5b+F6aG75Li6T0ss5LiL5LiA5bGC5omN6IO95pivT0ss5bm25LiU6ZSZ6K+v5b+F6aG76YCQ5bGC5Lyg6YCS5Yiw5bqV5bGC44CCXHJcbiAgICAgIGVyck1zZyA9IFNlclJlcy5lcnJNc2c7IC8v5LiA5pem55Sx6ZSZ6K+v77yM5YC85LiN5Lya5Lyg57uZ6LCD55So6ICFXHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGVyck1zZyxcclxuICAgICAgICByZXN1bHRcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcbn0gLy/lh73mlbDlr7nosaHlj7fvvJogMu+8jCDojrflj5blpJrkuKrpm4blkIjnmoTlh73mlbDvvIzkuK3ovazliLDkupHlh73mlbDvvIzkuLrmnKrmnaXliIfmjaLmlbDmja7lupPnmoTlj6/og73lgZrlpb3lh4blpIfjgIIgZ2V0Q29sbGVjdGlvbnNGcm9tU2VydmVyXHJcbi8vREJDb25kaXRpb25z57uT5p6E5Li+5L6LXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29sbGVjdGlvbnNGcm9tREIoREJDb25kaXRpb25zKSB7XHJcbiAgdHJ5IHtcclxuICAgIHZhciBzZXJSZXMgPSBhd2FpdCB1bmlDbG91ZC5jYWxsRnVuY3Rpb24gLy9hd2FpdOiwg+eUqOi/nOeoi+S6keWHveaVsFxyXG4gICAgKHtcclxuICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgZW52OiB0YXJnZXRTZXJ2ZXJFbnZcclxuICAgICAgfSxcclxuICAgICAgbmFtZTogJ2dldENvbGxlY3Rpb25zRnJvbVNlcnZlcicsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBEQkNvbmRpdGlvbnNcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZ2V0UmVzRnJvbVJldHVybihzZXJSZXMpOyAvL2dldFJlc0Zyb21SZXR1cm7mlbTlkIjlkoznroDljJZzZXJ0UmVz5L6b5YmN56uv5L2/55So44CCXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIGdldFJlc0Zyb21SZXR1cm4oZSk7IC8vZ2V0UmVzRnJvbVJldHVybuaVtOWQiOWSjOeugOWMlnNlcnRSZXPkvpvliY3nq6/kvb/nlKjjgIJcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZE9yVXBkYXRlVG9TZXJ2ZXIoREJDb25kaXRpb25zQW5kRGF0YUZvckV4ZSkge1xyXG4gIHRyeSB7XHJcbiAgICB2YXIgc2VyUmVzID0gYXdhaXQgd3guY2xvdWQuY2FsbEZ1bmN0aW9uIC8vYXdhaXTosIPnlKjov5znqIvkupHlh73mlbBcclxuICAgICh7XHJcbiAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgIGVudjogdGFyZ2V0U2VydmVyRW52XHJcbiAgICAgIH0sXHJcbiAgICAgIG5hbWU6ICdhZGRPclVwZGF0ZVRvU2VydmVyJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIERCQ29uZGl0aW9uc0FuZERhdGFGb3JFeGVcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZ2V0UmVzRnJvbVJldHVybihzZXJSZXMpOyAvL2dldFJlc0Zyb21SZXR1cm7mlbTlkIjlkoznroDljJZzZXJ0UmVz5L6b5YmN56uv5L2/55So44CCXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIGdldFJlc0Zyb21SZXR1cm4oZSk7IC8vZ2V0UmVzRnJvbVJldHVybuaVtOWQiOWSjOeugOWMlnNlcnRSZXPkvpvliY3nq6/kvb/nlKjjgIJcclxuICB9XHJcbn0gLy/lh73mlbDlr7nosaHlj7fvvJogNCwg6LSm5Y+357G75pON5L2c5a+56LGhL2V4ZUFjY291bnRzXHJcbi8vZnVuY1R5cGU6IOWFt+S9k+S4muWKoeexu+Wei++8jGRhdGFMaXN0IOWPguaVsOa4heWNlVxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGV4ZUFjY291bnRzKGZ1bmNOYW1lLCBmdW5jUHJhKSB7XHJcbiAgLy/lip/og73liIbnsbvljLrln59cclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgLy/lip/og73vvJog5YWz5LqOZXhlQWNjb3VudHPnmoTliY3nq6/osIPnlKjlip/og73mjqXlj6MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuICAvL+WKn+iDvTE6IOe7keWumuaJi+acuuWPt++8jOWnk+WQjSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuICAvL+WPguaVsDHvvJogZnVuY05hbWU9IGJpbmRBY2NvdW5077yMZnVuY1ByYS5QTVVzZXJJRO+8jGZ1bmNQcmEuUE1Vc2VyTmFtZeS4jeiDveS4uuepuiAvL1xyXG4gIC8v6L+U5Zue77yaIGZ1bmNOYW1lPSBiaW5kQWNjb3VudO+8jGZ1bmNQcmEuUE1Vc2VySUTvvIxmdW5jUHJhLlBNVXNlck5hbWXkuI3og73kuLrnqbogIC8vXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgLy/lip/og70yOiDojrflj5botKblj7fkv6Hmga8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgLy/lj4LmlbAy77yaIGZ1bmNOYW1lPSBiaW5kQWNjb3VudO+8jGZ1bmNQcmEg5b+955WlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIC8v5Yqf6IO9Mzog6I635Y+W55+t5L+h6aqM6K+B56CBICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgLy/lj4LmlbAz77yaIGZ1bmNOYW1lPSBnZXRTTVNDb2RlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4gIC8vZnVuY1ByYS5XWExhc3RTTVNQaG9uZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4gIC8vZnVuY1ByYS5XWExhc3RTTVNOYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4gIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIHRyeSB7XHJcbiAgICB2YXIgc2VyUmVzID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uIC8vYXdhaXTosIPnlKjov5znqIvkupHlh73mlbBcclxuICAgICh7XHJcbiAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgIGVudjogdGFyZ2V0U2VydmVyRW52XHJcbiAgICAgIH0sXHJcbiAgICAgIG5hbWU6ICdleGVBY2NvdW50cycsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBmdW5jTmFtZSxcclxuICAgICAgICBmdW5jUHJhXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCLkupFleGVBY2NvdW50c+iwg+eUqOe7k+aenFwiKTtcclxuICAgIGNvbnNvbGUubG9nKHNlclJlcyk7XHJcbiAgICByZXR1cm4gZ2V0UmVzRnJvbVJldHVybihzZXJSZXMpOyAvL2dldFJlc0Zyb21SZXR1cm7mlbTlkIjlkoznroDljJZzZXJ0UmVz5L6b5YmN56uv5L2/55So44CCXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coXCLmnInplJnor69cIik7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIHJldHVybiBnZXRSZXNGcm9tUmV0dXJuKGUpOyAvL2dldFJlc0Zyb21SZXR1cm7mlbTlkIjlkoznroDljJZzZXJ0UmVz5L6b5YmN56uv5L2/55So44CCXHJcbiAgfVxyXG59IC8v5Ye95pWw5a+56LGh5Y+377yaIDXvvIzkuqTku5jorqLljZXnsbvmk43kvZxleGVQTUNPSVxyXG4vL+WKn+iDveWIhuexu+WMuuWfn1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8v5Yqf6IO9Me+8miDojrflj5ZQTUNPSeaVsOaNriAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuLy/lj4LmlbAx77yaIGZ1bmNOYW1lPSBnZXRQTUNPSSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4vL+i/lOWbnu+8miAgZnVuY05hbWU9IFBNQ09JICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL+WKn+iDvTI6IOWIm+W7ulBPICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbi8v5Y+C5pWwMu+8miBmdW5jTmFtZT0gY3JlYXRlUE/vvIxmdW5jUHJhLlBNQ09JSUTkuI3og73kuLrnqbrvvIwgIGZ1bmNQcmEuUE1QTyDkuI3og73kuLrnqbovL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL+WKn+iDvTPvvJog6I635Y+W5oiR5Y+R5biD55qEIFBNQ09JTGlzdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbi8v5Y+C5pWw77yaIGZ1bmNOYW1lPSBnZXRQTUNPSUxpc3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbi8v6L+U5Zue77yaICBmdW5jTmFtZT0gZnVuY1ByYS5QTVVzZXLkuI3og73kuLrnqbogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8v5Yqf6IO9NO+8miDliJvlu7pQTUNPSSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbi8v5Y+C5pWw77yaIGZ1bmNOYW1lPSBjcmVhdGVPbmVQTUNPSSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cclxuLy/ov5Tlm57vvJogIGZ1bmNOYW1lPSBmdW5jUHJhLlBNQ09J5LiN6IO95Li656m6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGV4ZVBNQ09JKGZ1bmNOYW1lLCBmdW5jUHJhKSB7XHJcbiAgdmFyIGJ0blNlbGVjdGVkU3R5bGUgPSBcIiBib3gtc2hhZG93OiAycHggMnB4IDVweCAjMDAwO1wiOyAvL+eUqOS6juWKqOaAgeihqOi+vuaMiemSrumAieS4reeahOeKtuaAgVxyXG5cclxuICB2YXIgYnRuVW5TZWxlY3RlZFN0eWxlID0gXCIgYm94LXNoYWRvdzogMHB4IDBweCAwcHggIzAwMDtcIjsgLy/nlKjkuo7liqjmgIHooajovr7mjInpkq7msqHmnInpgInkuK3nmoTnirbmgIFcclxuIGNvbnNvbGUubG9nKFwi6ZyA5omn6KGM55qE5pa55rOV5ZCN5Li677yaXCIrZnVuY05hbWUpO1xyXG4gIHZhciBzZXJSZXMgPSB7XHJcbiAgICBlcnJNc2c6IFwiXCIsXHJcbiAgICByZXN1bHQ6IFtdXHJcbiAgfTtcclxuXHJcbiAgdHJ5IHtcclxuXHR2YXIgc2VyUmVzID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uLy9hd2FpdOiwg+eUqOi/nOeoi+S6keWHveaVsFxyXG4gICAgKHtcclxuICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgZW52OiB0YXJnZXRTZXJ2ZXJFbnZcclxuICAgICAgfSxcclxuICAgICAgbmFtZTogJ2V4ZVBNQ09JJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGZ1bmNOYW1lLFxyXG4gICAgICAgIGZ1bmNQcmFcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKFwi5LqRZXhlUE1DT0nosIPnlKjnu5PmnpxcIik7XHJcbiAgICBjb25zb2xlLmxvZyhzZXJSZXMpO1xyXG4gICAvLyByZXR1cm4gZ2V0UmVzRnJvbVJldHVybihzZXJSZXMpOyAvL2dldFJlc0Zyb21SZXR1cm7mlbTlkIjlkoznroDljJZzZXJ0UmVz5L6b5YmN56uv5L2/55So44CCXHJcbiAgIHJldHVybiBzZXJSZXM7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coXCLmnInplJnor69cIik7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIHJldHVybiBnZXRSZXNGcm9tUmV0dXJuKGUpOyAvL2dldFJlc0Zyb21SZXR1cm7mlbTlkIjlkoznroDljJZzZXJ0UmVz5L6b5YmN56uv5L2/55So44CCXHJcbiAgfVxyXG59IFxyXG5cclxuLy/lh73mlbDlr7nosaHlj7fvvJo277yMIOaWh+S7tuS4iuS8oCDov5nkuKrlh73mlbDnu5/kuIDnrqHnkIbkuIrkvKDmlofku7bvvIzljbPkvb/mnKrmnaXmm7TmjaLmlofku7bmnI3liqHlmajkuZ/lj6/ku6XpgJrov4flh73mlbDot6/nlLHlrp7njrDjgIJcclxuLy/moLnmja5maWxlVHlwZe+8jOS7o+eggeehruiupOi/nOeoi+aWh+S7tuWkuVxyXG4vL2xvY2FsRmlsZVBhdGgg5pys5Zyw6Lev5b6EXHJcbmFzeW5jIGZ1bmN0aW9uIFVwbG9hZEZpbGUoZmlsZVR5cGUsIGxvY2FsRmlsZVBhdGgsIHJlbW90ZWZpbGVOYW1lKSB7XHJcbiAgdmFyIFJlc0RhdGEgPSB7XHJcbiAgICBlcnJNc2c6IFwi562J5b6F5omn6KGMXCIsXHJcbiAgICByZXN1bHQ6IFtdXHJcbiAgfTsgLy/ov5nmoLflgZrnmoTnm67nmoTvvIzlsLHmmK/kuLrkuobpmLLmraLnqIvluo/lkZjpmo/mhI/kuIrkvKDmlofku7bvvIzmkJ7kubHmnI3liqHlmajmlofku7blnLDlnYBcclxuIGNvbnNvbGUubG9nKFwi5Zu+54mH5a2Y5pS+55qE5L2N572u5Li6MVwiK1NlcnZlckZpbGVQYXRoKTtcclxuICB2YXIgU2VydmVyRmlsZVBhdGggPSBcIlwiO1xyXG5cclxuICBzd2l0Y2ggKGZpbGVUeXBlKSB7XHJcbiAgICAvL+S7u+WKoeS6p+WTgeWbvueJh+aWh+S7tuWkuVxyXG4gICAgY2FzZSBcIlBNQ09JUHJvZHVjdFBpY1wiOlxyXG4gICAgICB7XHJcbiAgICAgICAgU2VydmVyRmlsZVBhdGggPSBcIlBNQ09JUHJvZHVjdFBpY1wiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAvL+aMh+S7pOWNleS6p+WTgeWbvueJh+aWh+S7tuWkuVxyXG5cclxuICAgIGNhc2UgXCJQTVBJUHJvZHVjdFBpY1wiOlxyXG4gICAgICB7XHJcbiAgICAgICAgU2VydmVyRmlsZVBhdGggPSBcIlBNUElQcm9kdWN0UGljXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIC8v55Sf5Lqn5Y6f5paZ5Lqn5ZOB5Zu+54mH5paH5Lu25aS5XHJcblxyXG4gICAgY2FzZSBcIlpDVFJBV1Byb1BpY1wiOlxyXG4gICAgICB7XHJcbiAgICAgICAgU2VydmVyRmlsZVBhdGggPSBcIlpDVFJBV1Byb1BpY1wiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAvL+mHh+i0reWOn+aWmeS6p+WTgeWbvueJh+aWh+S7tuWkuVxyXG5cclxuICAgIGNhc2UgXCJaQ1RSQVdQdXJQaWNcIjpcclxuICAgICAge1xyXG4gICAgICAgIFNlcnZlckZpbGVQYXRoID0gXCJaQ1RSQVdQdXJQaWNcIjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgLy/nlKjmiLflpLTlg49cclxuXHJcbiAgICBjYXNlIFwidXNlcnBob3RvXCI6XHJcbiAgICAgIHtcclxuICAgICAgICBTZXJ2ZXJGaWxlUGF0aCA9IFwidXNlcnBob3RvXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIC8v6IGK5aSp5Y+R6YCB55qE5Zu+54mHXHJcblxyXG4gICAgY2FzZSBcIlpDVENoYXRJbWFnZXNcIjpcclxuICAgICAge1xyXG4gICAgICAgIFNlcnZlckZpbGVQYXRoID0gXCJaQ1RDaGF0SW1hZ2VzXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB7XHJcbiAgICAgICAgUmVzRGF0YS5lcnJNc2cgPSBcIue8lueoi+mUmeivr++8miDmlofku7bnsbvlnovpnIDopoHmo4Dmn6XjgIJcIjtcclxuICAgICAgICByZXR1cm4gUmVzRGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gIH1cclxuICAgIGNvbnNvbGUubG9nKFwi5Zu+54mH5a2Y5pS+55qE5L2N572u5Li6MlwiK1NlcnZlckZpbGVQYXRoKTtcclxuICBpZiAoIXBtSlNUb29scy5Jc051bGxPckVtcHR5KFwiU2VydmVyRmlsZVBhdGhcIikpIHtcclxuICAvLyB1bmkudW5pQ2xvdWQoe1xyXG4gIC8vICAgICByZXNvdXJjZUVudjogdGFyZ2V0U2VydmVyRW52XHJcbiAgLy8gICB9KTtcclxuICAvLyAgIGF3YWl0IFdYQy5pbml0KCk7XHJcbiAgICB2YXIgVGVtcFJlcyA9IGF3YWl0IHVuaUNsb3VkLnVwbG9hZEZpbGUoe1xyXG4gICAgICBjbG91ZFBhdGg6IFNlcnZlckZpbGVQYXRoICsgXCIvXCIgKyByZW1vdGVmaWxlTmFtZSxcclxuICAgICAgZmlsZVBhdGg6IGxvY2FsRmlsZVBhdGggLy/mnKzlnLDmlofku7bmlofku7bot6/lvoRcclxuICAgIH0pO1xyXG5cdFxyXG4gICAgUmVzRGF0YS5lcnJNc2cgPSBcIk9LXCI7XHJcbiAgICBSZXNEYXRhLnJlc3VsdCA9IFRlbXBSZXMuZmlsZUlEO1xyXG4gICAgcmV0dXJuIFJlc0RhdGE7XHJcbiAgfSBlbHNlIHtcclxuICAgIFJlc0RhdGEuZXJyTXNnID0gXCLnvJbnqIvpl67popjvvJrmlofku7bnsbvlnovlj4LmlbDplJnor6/jgILmuIXljZVwbVNlclRvb2xzLlVwbG9hZEZpbGXkuK3mt7vliqDjgIJcIjtcclxuICAgIHJldHVybiBSZXNEYXRhO1xyXG4gIH1cclxufSAvL+WHveaVsOWvueixoeWPt++8miA3LCDorqLpmIXmtojmga/nsbvmk43kvZzlr7nosaEvZXhlTWVzc2FnZSBcclxuLy9mdW5jTmFtZTog5YW35L2T5Lia5Yqh57G75Z6L77yMZnVuY1ByYTog5Y+C5pWw5riF5Y2VIFxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEV4ZU1lc3NhZ2UoZnVuY05hbWUsIGZ1bmNQcmEpIHtcclxuICAvL+WKn+iDveWIhuexu+WMuuWfnyBcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFxyXG4gIC8v5Yqf6IO977yaIOWFs+S6jkV4ZU1lc3NhZ2XnmoTliY3nq6/osIPnlKjlip/og73mjqXlj6MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFxyXG4gIC8v5Y+C5pWwMe+8miBmdW5jTmFtZT0gR2V0VGVtcGxhdGVfaWTvvIxmdW5jUHJhLmZ1bmN0aW9uTmFtZeS4jeiDveS4uuepuiAgICAgICAgICAgICAgLy8gXHJcbiAgLy/ov5Tlm57vvJogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gXHJcbiAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgdGl0bGU6ICfmlbDmja7kuqTkupLkuK0uLi4nXHJcbiAgfSk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICB2YXIgc2VyUmVzID0gYXdhaXQgdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uIC8vYXdhaXTosIPnlKjov5znqIvkupHlh73mlbAgXHJcbiAgICAoe1xyXG4gICAgICBjb25maWc6IHtcclxuICAgICAgICBlbnY6IHRhcmdldFNlcnZlckVudlxyXG4gICAgICB9LFxyXG4gICAgICBuYW1lOiAnRXhlTWVzc2FnZScsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBmdW5jTmFtZSxcclxuICAgICAgICBmdW5jUHJhXHJcbiAgICAgIH1cclxuICAgIH0pOyAvL3d4LmhpZGVMb2FkaW5nKCkgLy/ov5nnp43lhpnms5XnnJ/mnLrnjq/looPkuIvkvJrlh7rplJkgXHJcblxyXG4gICAgd3guaGlkZUxvYWRpbmcoe1xyXG4gICAgICBmYWlsOiByZXMgPT4ge31cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGdldFJlc0Zyb21SZXR1cm4oc2VyUmVzKTsgLy9nZXRSZXNGcm9tUmV0dXJu5pW05ZCI5ZKM566A5YyWc2VydFJlc+S+m+WJjeerr+S9v+eUqOOAgiBcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gZ2V0UmVzRnJvbVJldHVybihlKTsgLy9nZXRSZXNGcm9tUmV0dXJu5pW05ZCI5ZKM566A5YyWc2VydFJlc+S+m+WJjeerr+S9v+eUqOOAgiBcclxuICB9XHJcbn0gLy/lh73mlbDlr7nosaHlj7fvvJogOCwg5pSv5LuY57G75pON5L2c5a+56LGhL2V4ZVBheW1lbnQgXHJcbi8vZnVuY05hbWU6IOaUr+S7mOS4muWKoeexu+Wei++8jGZ1bmNQcmE6IOWPguaVsOa4heWNlSBcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBleGVQYXltZW50KGZ1bmNOYW1lLCBmdW5jUHJhKSB7XHJcbiAgdHJ5IHtcclxuICAgIHZhciBzZXJSZXMgPSBhd2FpdCB1bmlDbG91ZC5jYWxsRnVuY3Rpb24gLy9hd2FpdOiwg+eUqOi/nOeoi+S6keWHveaVsFxyXG4gICAgKHtcclxuICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgZW52OiB0YXJnZXRTZXJ2ZXJFbnZcclxuICAgICAgfSxcclxuICAgICAgbmFtZTogJ2V4ZVBheW1lbnQnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZnVuY05hbWUsXHJcbiAgICAgICAgZnVuY1ByYVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKFwi5LqRZXhlQWNjb3VudHPosIPnlKjnu5PmnpxcIik7XHJcbiAgICBjb25zb2xlLmxvZyhzZXJSZXMpO1xyXG4gICAgcmV0dXJuIGdldFJlc0Zyb21SZXR1cm4oc2VyUmVzKTsgLy9nZXRSZXNGcm9tUmV0dXJu5pW05ZCI5ZKM566A5YyWc2VydFJlc+S+m+WJjeerr+S9v+eUqOOAglxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKFwi5pyJ6ZSZ6K+vXCIpO1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICByZXR1cm4gZ2V0UmVzRnJvbVJldHVybihlKTsgLy9nZXRSZXNGcm9tUmV0dXJu5pW05ZCI5ZKM566A5YyWc2VydFJlc+S+m+WJjeerr+S9v+eUqOOAglxyXG4gIH1cclxufSAvL+WHveaVsOWvueixoeWPt++8miA5LCDojrflj5bnmbvlvZXlvq7kv6HmiYvmnLrlj7cgXHJcbi8vY2xvdWRJRDog55So5p2l5ZCR5LqR5Ye95pWw5o2i5Y+W5omL5py65Y+3IFxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFBob25lTnVtYmVyKGNsb3VkSUQpIHtcclxuICB0cnkge1xyXG4gICAgdmFyIHNlclJlcyA9IGF3YWl0IHd4LmNsb3VkLmNhbGxGdW5jdGlvbih7XHJcbiAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgIGVudjogdGFyZ2V0U2VydmVyRW52XHJcbiAgICAgIH0sXHJcbiAgICAgIG5hbWU6ICdleGVBY2NvdW50cycsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB3ZVJ1bkRhdGE6IHd4LmNsb3VkLkNsb3VkSUQoY2xvdWRJRCksXHJcbiAgICAgICAgLy8g6L+Z5LiqIENsb3VkSUQg5YC85Yiw5LqR5Ye95pWw56uv5Lya6KKr5pu/5o2iIFxyXG4gICAgICAgIG9iajoge1xyXG4gICAgICAgICAgc2hhcmVJbmZvOiB3eC5jbG91ZC5DbG91ZElEKGNsb3VkSUQpIC8vIOmdnumhtuWxguWtl+auteeahCBDbG91ZElEIOS4jeS8muiiq+abv+aNou+8jOS8muWOn+agt+Wtl+espuS4suWxleekuiBcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jTmFtZTogXCJnZXRQaG9uZU51bWJlclwiXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCLkupFleGVBY2NvdW50cy0tZ2V0UGhvbmVOdW1iZXLosIPnlKjnu5PmnpxcIik7XHJcbiAgICBjb25zb2xlLmxvZyhzZXJSZXMpO1xyXG4gICAgcmV0dXJuIHNlclJlcztcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIuaciemUmeivr1wiKTtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgcmV0dXJuIGU7XHJcbiAgfVxyXG59IC8v5Ye95pWw5a+56LGh5Y+377yaIDEwLCDojrflj5bkurrlkZjkv6Hmga9cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRBY2NvdW50KCkge1xyXG4gIC8v5a+55piv5ZCm6ZyA6KaB5ZCR5pyN5Yqh5Zmo6I635Y+W57O757uf55m75b2V6LSm5Y+377yM5aeT5ZCN6L+b6KGM5aSE55CGXHJcbiAgdHJ5IHtcclxuICAgIHZhciBmYW5jbmFtZSA9IFwiZ2V0QWNjb3VudFwiO1xyXG4gICAgdmFyIGZ1bmNQcmEgPSB7fTsgLy/ojrflj5bml7bkuI3pnIDopoHotYvlgLzlj4LmlbBcclxuXHJcbiAgICB2YXIgcmVzRGF0YSA9IGF3YWl0IHRoaXMuZXhlQWNjb3VudHMoZmFuY25hbWUsIGZ1bmNQcmEpO1xyXG4gICAgdmFyIFRlbXBSZXMgPSB0aGlzLmdldFJlc0Zyb21SZXR1cm4ocmVzRGF0YSk7IC8v6ISx5aOzXHJcblxyXG4gICAgdmFyIG15RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgbXlEYXRlWWVhciA9IG15RGF0ZS5nZXRGdWxsWWVhcigpOyAvL+iOt+WPluWujOaVtOeahOW5tOS7vSg05L2NLDE5NzAtPz8/PylcclxuXHJcbiAgICB2YXIgVGVtcFBNVXNlckFnZSA9IHBhcnNlRmxvYXQobXlEYXRlWWVhciAtIHBtSlNUb29scy5HZXRTdHIocG1KU1Rvb2xzLkdldFN1Yk9iaihbVGVtcFJlcywgXCJyZXN1bHRcIiwgMCwgMCwgXCJaQ1RCaXJ0aFllYXJcIl0pKSk7XHJcbiAgICB2YXIgVGVtRGF0YSA9IHtcclxuICAgICAgX2lkOiBwbUpTVG9vbHMuR2V0U3RyKHBtSlNUb29scy5HZXRTdWJPYmooW1RlbXBSZXMsIFwicmVzdWx0XCIsIDAsIDAsIFwiX2lkXCJdKSksXHJcbiAgICAgIFBNVXNlcklEOiBwbUpTVG9vbHMuR2V0U3RyKHBtSlNUb29scy5HZXRTdWJPYmooW1RlbXBSZXMsIFwicmVzdWx0XCIsIDAsIDAsIFwiUE1Vc2VySURcIl0pKSxcclxuICAgICAgUE1Vc2VyTmFtZTogcG1KU1Rvb2xzLkdldFN0cihwbUpTVG9vbHMuR2V0U3ViT2JqKFtUZW1wUmVzLCBcInJlc3VsdFwiLCAwLCAwLCBcIlBNVXNlck5hbWVcIl0pKSxcclxuICAgICAgV1hPcGVuSUQ6IHBtSlNUb29scy5HZXRTdHIocG1KU1Rvb2xzLkdldFN1Yk9iaihbVGVtcFJlcywgXCJyZXN1bHRcIiwgMCwgMCwgXCJXWE9wZW5JRFwiXSkpLFxyXG4gICAgICBaQ1RKb2JUeXBlOiBwbUpTVG9vbHMuR2V0U3RyKHBtSlNUb29scy5HZXRTdWJPYmooW1RlbXBSZXMsIFwicmVzdWx0XCIsIDAsIDAsIFwiWkNUSm9iVHlwZVwiXSkpLFxyXG4gICAgICBaQ1RKb2JQYXlUeXBlOiBwbUpTVG9vbHMuR2V0U3RyKHBtSlNUb29scy5HZXRTdWJPYmooW1RlbXBSZXMsIFwicmVzdWx0XCIsIDAsIDAsIFwiWkNUSm9iUGF5VHlwZVwiXSkpLFxyXG4gICAgICBaQ1RVc2VyU2V4OiBwbUpTVG9vbHMuR2V0U3RyKHBtSlNUb29scy5HZXRTdWJPYmooW1RlbXBSZXMsIFwicmVzdWx0XCIsIDAsIDAsIFwiWkNUVXNlclNleFwiXSkpLFxyXG4gICAgICBQTVBob25lTkI6IHBtSlNUb29scy5HZXRTdHIocG1KU1Rvb2xzLkdldFN1Yk9iaihbVGVtcFJlcywgXCJyZXN1bHRcIiwgMCwgMCwgXCJQTVBob25lTkJcIl0pKSxcclxuICAgICAgWkNUQmlydGhZZWFyOiBwbUpTVG9vbHMuR2V0U3RyKHBtSlNUb29scy5HZXRTdWJPYmooW1RlbXBSZXMsIFwicmVzdWx0XCIsIDAsIDAsIFwiWkNUQmlydGhZZWFyXCJdKSksXHJcbiAgICAgIFpDVFJlbGVhc2VOdW06IHBtSlNUb29scy5HZXRTdHIocG1KU1Rvb2xzLkdldFN1Yk9iaihbVGVtcFJlcywgXCJyZXN1bHRcIiwgMCwgMCwgXCJaQ1RSZWxlYXNlTnVtXCJdKSksXHJcbiAgICAgIFpDVFJlbGVhc2VBY2NlTnVtOiBwbUpTVG9vbHMuR2V0U3RyKHBtSlNUb29scy5HZXRTdWJPYmooW1RlbXBSZXMsIFwicmVzdWx0XCIsIDAsIDAsIFwiWkNUUmVsZWFzZUFjY2VOdW1cIl0pKSxcclxuICAgICAgWkNUUmVjZWl2ZU9yZGVyTnVtOiBwbUpTVG9vbHMuR2V0U3RyKHBtSlNUb29scy5HZXRTdWJPYmooW1RlbXBSZXMsIFwicmVzdWx0XCIsIDAsIDAsIFwiWkNUUmVjZWl2ZU9yZGVyTnVtXCJdKSksXHJcbiAgICAgIFpDVERlbGl2ZXJ5QWNjZU51bTogcG1KU1Rvb2xzLkdldFN0cihwbUpTVG9vbHMuR2V0U3ViT2JqKFtUZW1wUmVzLCBcInJlc3VsdFwiLCAwLCAwLCBcIlpDVERlbGl2ZXJ5QWNjZU51bVwiXSkpLFxyXG4gICAgICBQTVVzZXJBZ2U6IFRlbXBQTVVzZXJBZ2UsXHJcbiAgICAgIFpDVFVzZXJQaG90bzogcG1KU1Rvb2xzLkdldFN0cihwbUpTVG9vbHMuR2V0U3ViT2JqKFtUZW1wUmVzLCBcInJlc3VsdFwiLCAwLCAwLCBcIlpDVFVzZXJQaG90b1wiXSkpXHJcbiAgICB9O1xyXG4gICAgYXBwLmdsb2JhbERhdGEuUE1Vc2VySUQgPSBwbUpTVG9vbHMuR2V0U3RyKHBtSlNUb29scy5HZXRTdWJPYmooW1RlbXBSZXMsIFwicmVzdWx0XCIsIDAsIDAsIFwiUE1Vc2VySURcIl0pKTtcclxuICAgIGFwcC5nbG9iYWxEYXRhLlBNVXNlck5hbWUgPSBwbUpTVG9vbHMuR2V0U3RyKHBtSlNUb29scy5HZXRTdWJPYmooW1RlbXBSZXMsIFwicmVzdWx0XCIsIDAsIDAsIFwiUE1Vc2VyTmFtZVwiXSkpO1xyXG4gICAgYXBwLmdsb2JhbERhdGEuWkNUQmlydGhZZWFyID0gcG1KU1Rvb2xzLkdldFN0cihwbUpTVG9vbHMuR2V0U3ViT2JqKFtUZW1wUmVzLCBcInJlc3VsdFwiLCAwLCAwLCBcIlpDVEJpcnRoWWVhclwiXSkpO1xyXG4gICAgYXBwLmdsb2JhbERhdGEuV1hPcGVuSUQgPSBwbUpTVG9vbHMuR2V0U3RyKHBtSlNUb29scy5HZXRTdWJPYmooW1RlbXBSZXMsIFwicmVzdWx0XCIsIDAsIDAsIFwiV1hPcGVuSURcIl0pKTtcclxuICAgIGFwcC5nbG9iYWxEYXRhLlpDVEpvYlR5cGUgPSBwbUpTVG9vbHMuR2V0U3RyKHBtSlNUb29scy5HZXRTdWJPYmooW1RlbXBSZXMsIFwicmVzdWx0XCIsIDAsIDAsIFwiWkNUSm9iVHlwZVwiXSkpO1xyXG4gICAgYXBwLmdsb2JhbERhdGEuWkNUSm9iUGF5VHlwZSA9IHBtSlNUb29scy5HZXRTdHIocG1KU1Rvb2xzLkdldFN1Yk9iaihbVGVtcFJlcywgXCJyZXN1bHRcIiwgMCwgMCwgXCJaQ1RKb2JQYXlUeXBlXCJdKSk7XHJcbiAgICBhcHAuZ2xvYmFsRGF0YS5aQ1RVc2VyU2V4ID0gcG1KU1Rvb2xzLkdldFN0cihwbUpTVG9vbHMuR2V0U3ViT2JqKFtUZW1wUmVzLCBcInJlc3VsdFwiLCAwLCAwLCBcIlpDVFVzZXJTZXhcIl0pKTtcclxuICAgIGFwcC5nbG9iYWxEYXRhLlBNUGhvbmVOQiA9IHBtSlNUb29scy5HZXRTdHIocG1KU1Rvb2xzLkdldFN1Yk9iaihbVGVtcFJlcywgXCJyZXN1bHRcIiwgMCwgMCwgXCJQTVBob25lTkJcIl0pKTtcclxuICAgIGFwcC5nbG9iYWxEYXRhLlpDVFJlbGVhc2VOdW0gPSBwbUpTVG9vbHMuR2V0U3RyKHBtSlNUb29scy5HZXRTdWJPYmooW1RlbXBSZXMsIFwicmVzdWx0XCIsIDAsIDAsIFwiWkNUUmVsZWFzZU51bVwiXSkpO1xyXG4gICAgYXBwLmdsb2JhbERhdGEuWkNUUmVsZWFzZUFjY2VOdW0gPSBwbUpTVG9vbHMuR2V0U3RyKHBtSlNUb29scy5HZXRTdWJPYmooW1RlbXBSZXMsIFwicmVzdWx0XCIsIDAsIDAsIFwiWkNUUmVsZWFzZUFjY2VOdW1cIl0pKTtcclxuICAgIGFwcC5nbG9iYWxEYXRhLlpDVFJlY2VpdmVPcmRlck51bSA9IHBtSlNUb29scy5HZXRTdHIocG1KU1Rvb2xzLkdldFN1Yk9iaihbVGVtcFJlcywgXCJyZXN1bHRcIiwgMCwgMCwgXCJaQ1RSZWNlaXZlT3JkZXJOdW1cIl0pKTtcclxuICAgIGFwcC5nbG9iYWxEYXRhLlpDVERlbGl2ZXJ5QWNjZU51bSA9IHBtSlNUb29scy5HZXRTdHIocG1KU1Rvb2xzLkdldFN1Yk9iaihbVGVtcFJlcywgXCJyZXN1bHRcIiwgMCwgMCwgXCJaQ1REZWxpdmVyeUFjY2VOdW1cIl0pKTtcclxuICAgIGFwcC5nbG9iYWxEYXRhLlBNVXNlckFnZSA9IFRlbXBQTVVzZXJBZ2U7XHJcbiAgICBhcHAuZ2xvYmFsRGF0YS5faWQgPSBwbUpTVG9vbHMuR2V0U3RyKHBtSlNUb29scy5HZXRTdWJPYmooW1RlbXBSZXMsIFwicmVzdWx0XCIsIDAsIDAsIFwiX2lkXCJdKSk7XHJcbiAgICBhcHAuZ2xvYmFsRGF0YS5aQ1RVc2VyUGhvdG8gPSBwbUpTVG9vbHMuR2V0U3RyKHBtSlNUb29scy5HZXRTdWJPYmooW1RlbXBSZXMsIFwicmVzdWx0XCIsIDAsIDAsIFwiWkNUVXNlclBob3RvXCJdKSk7XHJcblxyXG4gICAgaWYgKFRlbXBSZXMuZXJyTXNnID09IFwiT0tcIiAmJiAhcG1KU1Rvb2xzLklzTnVsbE9yRW1wdHkoVGVtcFJlcy5yZXN1bHQpKSB7XHJcbiAgICAgIC8v5aaC5p6c55m75b2V5oiQ5Yqf5YWI5oqK6I635Y+W55qE5YC85L+d5a2Y5LiL5p2lXHJcbiAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgIGtleTogJ1BNVXNlckluZm8nLFxyXG4gICAgICAgIGRhdGE6IFRlbURhdGFcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBcIk9LXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL+WmguaenOeZu+W9leS4jeaIkOWKn+WFiOaKiuiOt+WPlueahOWAvOe9ruepulxyXG4gICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICBrZXk6ICdQTVVzZXJJbmZvJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBQTVVzZXJJRDogXCJcIixcclxuICAgICAgICAgIFBNVXNlck5hbWU6IFwiXCIsXHJcbiAgICAgICAgICBXWE9wZW5JRDogXCJcIixcclxuICAgICAgICAgIFpDVEpvYlR5cGU6IFwiXCIsXHJcbiAgICAgICAgICBaQ1RKb2JQYXlUeXBlOiBcIlwiLFxyXG4gICAgICAgICAgWkNUVXNlclNleDogXCJcIixcclxuICAgICAgICAgIFBNUGhvbmVOQjogXCJcIixcclxuICAgICAgICAgIFpDVEJpcnRoWWVhcjogXCJcIixcclxuICAgICAgICAgIFpDVFJlbGVhc2VOdW06IFwiXCIsXHJcbiAgICAgICAgICBaQ1RSZWxlYXNlQWNjZU51bTogXCJcIixcclxuICAgICAgICAgIFpDVFJlY2VpdmVPcmRlck51bTogXCJcIixcclxuICAgICAgICAgIFpDVERlbGl2ZXJ5QWNjZU51bTogXCJcIixcclxuICAgICAgICAgIFBNVXNlckFnZTogXCJcIixcclxuICAgICAgICAgIF9pZDogXCJcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGFwcC5nbG9iYWxEYXRhLlBNVXNlcklEID0gXCJcIjtcclxuICAgICAgYXBwLmdsb2JhbERhdGEuUE1Vc2VyTmFtZSA9IFwiXCI7XHJcbiAgICAgIGFwcC5nbG9iYWxEYXRhLldYT3BlbklEID0gXCJcIjtcclxuICAgICAgYXBwLmdsb2JhbERhdGEuWkNUSm9iVHlwZSA9IFwiXCI7XHJcbiAgICAgIGFwcC5nbG9iYWxEYXRhLlpDVEpvYlBheVR5cGUgPSBcIlwiO1xyXG4gICAgICBhcHAuZ2xvYmFsRGF0YS5aQ1RVc2VyU2V4ID0gXCJcIjtcclxuICAgICAgYXBwLmdsb2JhbERhdGEuUE1QaG9uZU5CID0gXCJcIjtcclxuICAgICAgYXBwLmdsb2JhbERhdGEuWkNUQmlydGhZZWFyID0gXCJcIjtcclxuICAgICAgYXBwLmdsb2JhbERhdGEuWkNUUmVsZWFzZU51bSA9IFwiXCI7XHJcbiAgICAgIGFwcC5nbG9iYWxEYXRhLlpDVFJlbGVhc2VBY2NlTnVtID0gXCJcIjtcclxuICAgICAgYXBwLmdsb2JhbERhdGEuWkNUUmVjZWl2ZU9yZGVyTnVtID0gXCJcIjtcclxuICAgICAgYXBwLmdsb2JhbERhdGEuWkNURGVsaXZlcnlBY2NlTnVtID0gXCJcIjtcclxuICAgICAgYXBwLmdsb2JhbERhdGEuUE1Vc2VyQWdlID0gXCJcIjtcclxuICAgICAgYXBwLmdsb2JhbERhdGEuX2lkID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gXCJOT0tcIjtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gZTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 17);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e26) {throw _e26;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e27) {didErr = true;err = _e27;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct;} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;function t(e) {return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;}function n(e, t, n) {return e(n = { path: t, exports: {}, require: function require(e, t) {return function () {throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");}(null == t && n.path);} }, n.exports), n.exports;}var s = n(function (e, t) {var n;e.exports = (n = n || function (e, t) {var n = Object.create || function () {function e() {}return function (t) {var n;return e.prototype = t, n = new e(), e.prototype = null, n;};}(),s = {},r = s.lib = {},o = r.Base = { extend: function extend(e) {var t = n(this);return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {t.$super.init.apply(this, arguments);}), t.init.prototype = t, t.$super = this, t;}, create: function create() {var e = this.extend();return e.init.apply(e, arguments), e;}, init: function init() {}, mixIn: function mixIn(e) {for (var t in e) {e.hasOwnProperty(t) && (this[t] = e[t]);}e.hasOwnProperty("toString") && (this.toString = e.toString);}, clone: function clone() {return this.init.prototype.extend(this);} },i = r.WordArray = o.extend({ init: function init(e, n) {e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length;}, toString: function toString(e) {return (e || c).stringify(this);}, concat: function concat(e) {var t = this.words,n = e.words,s = this.sigBytes,r = e.sigBytes;if (this.clamp(), s % 4) for (var o = 0; o < r; o++) {var i = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;t[s + o >>> 2] |= i << 24 - (s + o) % 4 * 8;} else for (o = 0; o < r; o += 4) {t[s + o >>> 2] = n[o >>> 2];}return this.sigBytes += r, this;}, clamp: function clamp() {var t = this.words,n = this.sigBytes;t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);}, clone: function clone() {var e = o.clone.call(this);return e.words = this.words.slice(0), e;}, random: function random(t) {for (var n, s = [], r = function r(t) {t = t;var n = 987654321,s = 4294967295;return function () {var r = ((n = 36969 * (65535 & n) + (n >> 16) & s) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s;return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);};}, o = 0; o < t; o += 4) {var a = r(4294967296 * (n || e.random()));n = 987654071 * a(), s.push(4294967296 * a() | 0);}return new i.init(s, t);} }),a = s.enc = {},c = a.Hex = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;s.push((o >>> 4).toString(16)), s.push((15 & o).toString(16));}return s.join("");}, parse: function parse(e) {for (var t = e.length, n = [], s = 0; s < t; s += 2) {n[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;}return new i.init(n, t / 2);} },u = a.Latin1 = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;s.push(String.fromCharCode(o));}return s.join("");}, parse: function parse(e) {for (var t = e.length, n = [], s = 0; s < t; s++) {n[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;}return new i.init(n, t);} },h = a.Utf8 = { stringify: function stringify(e) {try {return decodeURIComponent(escape(u.stringify(e)));} catch (e) {throw new Error("Malformed UTF-8 data");}}, parse: function parse(e) {return u.parse(unescape(encodeURIComponent(e)));} },l = r.BufferedBlockAlgorithm = o.extend({ reset: function reset() {this._data = new i.init(), this._nDataBytes = 0;}, _append: function _append(e) {"string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;}, _process: function _process(t) {var n = this._data,s = n.words,r = n.sigBytes,o = this.blockSize,a = r / (4 * o),c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * o,u = e.min(4 * c, r);if (c) {for (var h = 0; h < c; h += o) {this._doProcessBlock(s, h);}var l = s.splice(0, c);n.sigBytes -= u;}return new i.init(l, u);}, clone: function clone() {var e = o.clone.call(this);return e._data = this._data.clone(), e;}, _minBufferSize: 0 }),d = (r.Hasher = l.extend({ cfg: o.extend(), init: function init(e) {this.cfg = this.cfg.extend(e), this.reset();}, reset: function reset() {l.reset.call(this), this._doReset();}, update: function update(e) {return this._append(e), this._process(), this;}, finalize: function finalize(e) {return e && this._append(e), this._doFinalize();}, blockSize: 16, _createHelper: function _createHelper(e) {return function (t, n) {return new e.init(n).finalize(t);};}, _createHmacHelper: function _createHmacHelper(e) {return function (t, n) {return new d.HMAC.init(e, n).finalize(t);};} }), s.algo = {});return s;}(Math), n);}),r = (n(function (e, t) {var n;e.exports = (n = s, function (e) {var t = n,s = t.lib,r = s.WordArray,o = s.Hasher,i = t.algo,a = [];!function () {for (var t = 0; t < 64; t++) {a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;}}();var c = i.MD5 = o.extend({ _doReset: function _doReset() {this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);}, _doProcessBlock: function _doProcessBlock(e, t) {for (var n = 0; n < 16; n++) {var s = t + n,r = e[s];e[s] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);}var o = this._hash.words,i = e[t + 0],c = e[t + 1],f = e[t + 2],p = e[t + 3],g = e[t + 4],m = e[t + 5],y = e[t + 6],_ = e[t + 7],w = e[t + 8],v = e[t + 9],S = e[t + 10],k = e[t + 11],T = e[t + 12],P = e[t + 13],I = e[t + 14],A = e[t + 15],E = o[0],b = o[1],O = o[2],U = o[3];E = u(E, b, O, U, i, 7, a[0]), U = u(U, E, b, O, c, 12, a[1]), O = u(O, U, E, b, f, 17, a[2]), b = u(b, O, U, E, p, 22, a[3]), E = u(E, b, O, U, g, 7, a[4]), U = u(U, E, b, O, m, 12, a[5]), O = u(O, U, E, b, y, 17, a[6]), b = u(b, O, U, E, _, 22, a[7]), E = u(E, b, O, U, w, 7, a[8]), U = u(U, E, b, O, v, 12, a[9]), O = u(O, U, E, b, S, 17, a[10]), b = u(b, O, U, E, k, 22, a[11]), E = u(E, b, O, U, T, 7, a[12]), U = u(U, E, b, O, P, 12, a[13]), O = u(O, U, E, b, I, 17, a[14]), E = h(E, b = u(b, O, U, E, A, 22, a[15]), O, U, c, 5, a[16]), U = h(U, E, b, O, y, 9, a[17]), O = h(O, U, E, b, k, 14, a[18]), b = h(b, O, U, E, i, 20, a[19]), E = h(E, b, O, U, m, 5, a[20]), U = h(U, E, b, O, S, 9, a[21]), O = h(O, U, E, b, A, 14, a[22]), b = h(b, O, U, E, g, 20, a[23]), E = h(E, b, O, U, v, 5, a[24]), U = h(U, E, b, O, I, 9, a[25]), O = h(O, U, E, b, p, 14, a[26]), b = h(b, O, U, E, w, 20, a[27]), E = h(E, b, O, U, P, 5, a[28]), U = h(U, E, b, O, f, 9, a[29]), O = h(O, U, E, b, _, 14, a[30]), E = l(E, b = h(b, O, U, E, T, 20, a[31]), O, U, m, 4, a[32]), U = l(U, E, b, O, w, 11, a[33]), O = l(O, U, E, b, k, 16, a[34]), b = l(b, O, U, E, I, 23, a[35]), E = l(E, b, O, U, c, 4, a[36]), U = l(U, E, b, O, g, 11, a[37]), O = l(O, U, E, b, _, 16, a[38]), b = l(b, O, U, E, S, 23, a[39]), E = l(E, b, O, U, P, 4, a[40]), U = l(U, E, b, O, i, 11, a[41]), O = l(O, U, E, b, p, 16, a[42]), b = l(b, O, U, E, y, 23, a[43]), E = l(E, b, O, U, v, 4, a[44]), U = l(U, E, b, O, T, 11, a[45]), O = l(O, U, E, b, A, 16, a[46]), E = d(E, b = l(b, O, U, E, f, 23, a[47]), O, U, i, 6, a[48]), U = d(U, E, b, O, _, 10, a[49]), O = d(O, U, E, b, I, 15, a[50]), b = d(b, O, U, E, m, 21, a[51]), E = d(E, b, O, U, T, 6, a[52]), U = d(U, E, b, O, p, 10, a[53]), O = d(O, U, E, b, S, 15, a[54]), b = d(b, O, U, E, c, 21, a[55]), E = d(E, b, O, U, w, 6, a[56]), U = d(U, E, b, O, A, 10, a[57]), O = d(O, U, E, b, y, 15, a[58]), b = d(b, O, U, E, P, 21, a[59]), E = d(E, b, O, U, g, 6, a[60]), U = d(U, E, b, O, k, 10, a[61]), O = d(O, U, E, b, f, 15, a[62]), b = d(b, O, U, E, v, 21, a[63]), o[0] = o[0] + E | 0, o[1] = o[1] + b | 0, o[2] = o[2] + O | 0, o[3] = o[3] + U | 0;}, _doFinalize: function _doFinalize() {var t = this._data,n = t.words,s = 8 * this._nDataBytes,r = 8 * t.sigBytes;n[r >>> 5] |= 128 << 24 - r % 32;var o = e.floor(s / 4294967296),i = s;n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {var h = c[u];c[u] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);}return a;}, clone: function clone() {var e = o.clone.call(this);return e._hash = this._hash.clone(), e;} });function u(e, t, n, s, r, o, i) {var a = e + (t & n | ~t & s) + r + i;return (a << o | a >>> 32 - o) + t;}function h(e, t, n, s, r, o, i) {var a = e + (t & s | n & ~s) + r + i;return (a << o | a >>> 32 - o) + t;}function l(e, t, n, s, r, o, i) {var a = e + (t ^ n ^ s) + r + i;return (a << o | a >>> 32 - o) + t;}function d(e, t, n, s, r, o, i) {var a = e + (n ^ (t | ~s)) + r + i;return (a << o | a >>> 32 - o) + t;}t.MD5 = o._createHelper(c), t.HmacMD5 = o._createHmacHelper(c);}(Math), n.MD5);}), n(function (e, t) {var n, r, o;e.exports = (r = (n = s).lib.Base, o = n.enc.Utf8, void (n.algo.HMAC = r.extend({ init: function init(e, t) {e = this._hasher = new e.init(), "string" == typeof t && (t = o.parse(t));var n = e.blockSize,s = 4 * n;t.sigBytes > s && (t = e.finalize(t)), t.clamp();for (var r = this._oKey = t.clone(), i = this._iKey = t.clone(), a = r.words, c = i.words, u = 0; u < n; u++) {a[u] ^= 1549556828, c[u] ^= 909522486;}r.sigBytes = i.sigBytes = s, this.reset();}, reset: function reset() {var e = this._hasher;e.reset(), e.update(this._iKey);}, update: function update(e) {return this._hasher.update(e), this;}, finalize: function finalize(e) {var t = this._hasher,n = t.finalize(e);return t.reset(), t.finalize(this._oKey.clone().concat(n));} })));}), n(function (e, t) {e.exports = s.HmacMD5;}));function o(e) {return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();}function i(e) {return "object" === o(e);}var a = /*#__PURE__*/function (_Error) {_inherits(a, _Error);var _super = _createSuper(a);function a(e, t) {var _this;_classCallCheck(this, a);_this = _super.call(this, e), _this.code = t;return _this;}return a;}( /*#__PURE__*/_wrapNativeSuper(Error));function c(e) {return e && "string" == typeof e ? JSON.parse(e) : e;}var u = "development" === "development",h = "app-plus",l = c({
    "address": [
        "127.0.0.1",
        "192.168.137.1",
        "192.168.2.105"
    ],
    "debugPort": 55484,
    "initialLaunchType": "local",
    "servePort": 55485
}
),d = c([{"provider":"tencent","spaceName":"zctmes","spaceId":"tcb-ecxw1hs9f19080-6d00j26b1957e"}]),f = true;var p = "";try {{var _e2 = __webpack_require__(/*! uni-stat-config */ 18).default || __webpack_require__(/*! uni-stat-config */ 18);p = _e2.appid;}} catch (e) {}var g = {};function m(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var n, s;return n = g, s = e, Object.prototype.hasOwnProperty.call(n, s) || (g[e] = t), g[e];}"app-plus" === h && (g = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});var y = ["invoke", "success", "fail", "complete"],_ = m("_globalUniCloudInterceptor");function w(e, t) {_[e] || (_[e] = {}), i(t) && Object.keys(t).forEach(function (n) {y.indexOf(n) > -1 && function (e, t, n) {var s = _[e][t];s || (s = _[e][t] = []), -1 === s.indexOf(n) && "function" == typeof n && s.push(n);}(e, n, t[n]);});}function v(e, t) {_[e] || (_[e] = {}), i(t) ? Object.keys(t).forEach(function (n) {y.indexOf(n) > -1 && function (e, t, n) {var s = _[e][t];if (!s) return;var r = s.indexOf(n);r > -1 && s.splice(r, 1);}(e, n, t[n]);}) : delete _[e];}function S(e, t) {return e && 0 !== e.length ? e.reduce(function (e, n) {return e.then(function () {return n(t);});}, Promise.resolve()) : Promise.resolve();}function k(e, t) {return _[e] && _[e][t] || [];}function T(e, t) {return t ? function (n) {var _this2 = this;var s = "callFunction" === t && "DCloud-clientDB" === (n && n.name);var r;r = this.isReady ? Promise.resolve() : this.initUniCloud, n = n || {};var o = r.then(function () {return s ? Promise.resolve() : S(k(t, "invoke"), n);}).then(function () {return e.call(_this2, n);}).then(function (e) {return s ? Promise.resolve(e) : S(k(t, "success"), e).then(function () {return S(k(t, "complete"), e);}).then(function () {return Promise.resolve(e);});}, function (e) {return s ? Promise.reject(e) : S(k(t, "fail"), e).then(function () {return S(k(t, "complete"), e);}).then(function () {return Promise.reject(e);});});if (!(n.success || n.fail || n.complete)) return o;o.then(function (e) {n.success && n.success(e), n.complete && n.complete(e);}).catch(function (e) {n.fail && n.fail(e), n.complete && n.complete(e);});} : function (t) {if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);e.call(this, t).then(function (e) {t.success && t.success(e), t.complete && t.complete(e);}, function (e) {t.fail && t.fail(e), t.complete && t.complete(e);});};}var P = /*#__PURE__*/function (_Error2) {_inherits(P, _Error2);var _super2 = _createSuper(P);function P(e) {var _this3;_classCallCheck(this, P);_this3 = _super2.call(this, e.message), _this3.errMsg = e.message || "", Object.defineProperties(_assertThisInitialized(_this3), { code: { get: function get() {return e.code;} }, requestId: { get: function get() {return e.requestId;} }, message: { get: function get() {return this.errMsg;}, set: function set(e) {this.errMsg = e;} } });return _this3;}return P;}( /*#__PURE__*/_wrapNativeSuper(Error));var _e3 = (0, _uniI18n.initVueI18n)({ "zh-Hans": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, "zh-Hant": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, en: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" } }, "zh-Hans"),I = _e3.t,A = _e3.setLocale,E = _e3.getLocale;var b, O;function U() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;var t = "";for (; t.length < e;) {t += Math.random().toString(32).substring(2);}return t.substring(0, e);}function C() {var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),e = _uni$getSystemInfoSyn.deviceId;return { PLATFORM: h, OS: O, APPID: p, LOCALE: E(), DEVICEID: e, CLIENT_SDK_VERSION: "1.0.8" };}function D() {if ("n" === x()) {try {b = plus.runtime.getDCloudId();} catch (e) {b = "";}return b;}return b || (b = U(32), uni.setStorage({ key: "__DC_CLOUD_UUID", data: b })), b;}function x() {var _appPlus$h5$mpWeixi;return (_appPlus$h5$mpWeixi = { "app-plus": "n", h5: "h5", "mp-weixin": "wx" }, _defineProperty(_appPlus$h5$mpWeixi, ["y", "a", "p", "mp-ali"].reverse().join(""), "ali"), _defineProperty(_appPlus$h5$mpWeixi, "mp-baidu", "bd"), _defineProperty(_appPlus$h5$mpWeixi, "mp-toutiao", "tt"), _defineProperty(_appPlus$h5$mpWeixi, "mp-qq", "qq"), _defineProperty(_appPlus$h5$mpWeixi, "quickapp-native", "qn"), _appPlus$h5$mpWeixi)[h];}var R = { sign: function sign(e, t) {var n = "";return Object.keys(e).sort().forEach(function (t) {e[t] && (n = n + "&" + t + "=" + e[t]);}), n = n.slice(1), r(n, t).toString();}, wrappedRequest: function wrappedRequest(e, t) {return new Promise(function (n, s) {t(Object.assign(e, { complete: function complete(e) {e || (e = {}), u && "h5" === h && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];if (!e.statusCode || e.statusCode >= 400) return s(new P({ code: "SYS_ERR", message: e.errMsg || "request:fail", requestId: t }));var r = e.data;if (r.error) return s(new P({ code: r.error.code, message: r.error.message, requestId: t }));r.result = r.data, r.requestId = t, delete r.data, n(r);} }));});} };var q = { request: function request(e) {return uni.request(e);}, uploadFile: function uploadFile(e) {return uni.uploadFile(e);}, setStorageSync: function setStorageSync(e, t) {return uni.setStorageSync(e, t);}, getStorageSync: function getStorageSync(e) {return uni.getStorageSync(e);}, removeStorageSync: function removeStorageSync(e) {return uni.removeStorageSync(e);}, clearStorageSync: function clearStorageSync() {return uni.clearStorageSync();} };var F = /*#__PURE__*/function () {function F(e) {_classCallCheck(this, F);["spaceId", "clientSecret"].forEach(function (t) {if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error(I("uniCloud.init.paramRequired", { param: t }));}), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = q, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;}_createClass(F, [{ key: "setAccessToken", value: function setAccessToken(e) {this.accessToken = e;} }, { key: "requestWrapped", value: function requestWrapped(e) {return R.wrappedRequest(e, this.adapter.request);} }, { key: "requestAuth", value: function requestAuth(e) {return this.requestWrapped(e);} }, { key: "request", value: function request(e, t) {var _this4 = this;return Promise.resolve().then(function () {return _this4.hasAccessToken ? t ? _this4.requestWrapped(e) : _this4.requestWrapped(e).catch(function (t) {return new Promise(function (e, n) {!t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();}).then(function () {return _this4.getAccessToken();}).then(function () {var t = _this4.rebuildRequest(e);return _this4.request(t, !0);});}) : _this4.getAccessToken().then(function () {var t = _this4.rebuildRequest(e);return _this4.request(t, !0);});});} }, { key: "rebuildRequest", value: function rebuildRequest(e) {var t = Object.assign({}, e);return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = R.sign(t.data, this.config.clientSecret), t;} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),s = { "Content-Type": "application/json" };return "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = R.sign(n, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: s };} }, { key: "getAccessToken", value: function getAccessToken() {var _this5 = this;if ("pending" === this._getAccessTokenPromiseStatus) return this._getAccessTokenPromise;this._getAccessTokenPromiseStatus = "pending";return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then(function (e) {return new Promise(function (t, n) {e.result && e.result.accessToken ? (_this5.setAccessToken(e.result.accessToken), _this5._getAccessTokenPromiseStatus = "fulfilled", t(_this5.accessToken)) : (_this5._getAccessTokenPromiseStatus = "rejected", n(new P({ code: "AUTH_FAILED", message: "获取accessToken失败" })));});}, function (e) {return _this5._getAccessTokenPromiseStatus = "rejected", Promise.reject(e);}), this._getAccessTokenPromise;} }, { key: "authorize", value: function authorize() {this.getAccessToken();} }, { key: "callFunction", value: function callFunction(e) {var t = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };return this.request(this.setupRequest(t));} }, { key: "getOSSUploadOptionsFromPath", value: function getOSSUploadOptionsFromPath(e) {var t = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref) {var _this6 = this;var e = _ref.url,t = _ref.formData,n = _ref.name,s = _ref.filePath,r = _ref.fileType,o = _ref.onUploadProgress;return new Promise(function (i, a) {var c = _this6.adapter.uploadFile({ url: e, formData: t, name: n, filePath: s, fileType: r, header: { "X-OSS-server-side-encrpytion": "AES256" }, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new P({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {a(new P({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof o && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "reportOSSUpload", value: function reportOSSUpload(e) {var t = { method: "serverless.file.resource.report", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFile", value: function uploadFile(_ref2) {var _this7 = this;var e = _ref2.filePath,t = _ref2.cloudPath,_ref2$fileType = _ref2.fileType,n = _ref2$fileType === void 0 ? "image" : _ref2$fileType,s = _ref2.onUploadProgress,r = _ref2.config;if (!t) throw new P({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var o = r && r.envType || this.config.envType;var i, a;return this.getOSSUploadOptionsFromPath({ env: o, filename: t }).then(function (t) {var r = t.result;i = r.id, a = "https://" + r.cdnDomain + "/" + r.ossPath;var o = { url: "https://" + r.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: r.accessKeyId, Signature: r.signature, host: r.host, id: i, key: r.ossPath, policy: r.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: n };return _this7.uploadFileToOSS(Object.assign({}, o, { onUploadProgress: s }));}).then(function () {return _this7.reportOSSUpload({ id: i });}).then(function (t) {return new Promise(function (n, s) {t.success ? n({ success: !0, filePath: e, fileID: a }) : s(new P({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref3) {var e = _ref3.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };return this.request(this.setupRequest(t));} }, { key: "getTempFileURL", value: function getTempFileURL() {var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref4.fileList;return new Promise(function (t, n) {Array.isArray(e) && 0 !== e.length || n(new P({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t({ fileList: e.map(function (e) {return { fileID: e, tempFileURL: e };}) });});} }, { key: "hasAccessToken", get: function get() {return !!this.accessToken;} }]);return F;}();var L = { init: function init(e) {var t = new F(e),n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t.customAuth = t.auth, t;} },N = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";var M;!function (e) {e.local = "local", e.none = "none", e.session = "session";}(M || (M = {}));var $ = function $() {};var j = function j() {var e;if (!Promise) {e = function e() {}, e.promise = {};var _t = function _t() {throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');};return Object.defineProperty(e.promise, "then", { get: _t }), Object.defineProperty(e.promise, "catch", { get: _t }), e;}var t = new Promise(function (t, n) {e = function e(_e4, s) {return _e4 ? n(_e4) : t(s);};});return e.promise = t, e;};function K(e) {return void 0 === e;}function B(e) {return "[object Null]" === Object.prototype.toString.call(e);}var H;function W(e) {var t = (n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]);var n;var _iterator = _createForOfIteratorHelper(t),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _e5 = _step.value;var _t2 = _e5.isMatch,_n = _e5.genAdapter,_s = _e5.runtime;if (_t2()) return { adapter: _n(), runtime: _s };}} catch (err) {_iterator.e(err);} finally {_iterator.f();}}!function (e) {e.WEB = "web", e.WX_MP = "wx_mp";}(H || (H = {}));var z = { adapter: null, runtime: void 0 },V = ["anonymousUuidKey"];var J = /*#__PURE__*/function (_$) {_inherits(J, _$);var _super3 = _createSuper(J);function J() {var _this8;_classCallCheck(this, J);_this8 = _super3.call(this), z.adapter.root.tcbObject || (z.adapter.root.tcbObject = {});return _this8;}_createClass(J, [{ key: "setItem", value: function setItem(e, t) {z.adapter.root.tcbObject[e] = t;} }, { key: "getItem", value: function getItem(e) {return z.adapter.root.tcbObject[e];} }, { key: "removeItem", value: function removeItem(e) {delete z.adapter.root.tcbObject[e];} }, { key: "clear", value: function clear() {delete z.adapter.root.tcbObject;} }]);return J;}($);function Y(e, t) {switch (e) {case "local":return t.localStorage || new J();case "none":return new J();default:return t.sessionStorage || new J();}}var X = /*#__PURE__*/function () {function X(e) {_classCallCheck(this, X);if (!this._storage) {this._persistence = z.adapter.primaryStorage || e.persistence, this._storage = Y(this._persistence, z.adapter);var _t3 = "access_token_".concat(e.env),_n2 = "access_token_expire_".concat(e.env),_s2 = "refresh_token_".concat(e.env),_r = "anonymous_uuid_".concat(e.env),_o = "login_type_".concat(e.env),_i = "user_info_".concat(e.env);this.keys = { accessTokenKey: _t3, accessTokenExpireKey: _n2, refreshTokenKey: _s2, anonymousUuidKey: _r, loginTypeKey: _o, userInfoKey: _i };}}_createClass(X, [{ key: "updatePersistence", value: function updatePersistence(e) {if (e === this._persistence) return;var t = "local" === this._persistence;this._persistence = e;var n = Y(e, z.adapter);for (var _e6 in this.keys) {var _s3 = this.keys[_e6];if (t && V.includes(_e6)) continue;var _r2 = this._storage.getItem(_s3);K(_r2) || B(_r2) || (n.setItem(_s3, _r2), this._storage.removeItem(_s3));}this._storage = n;} }, { key: "setStore", value: function setStore(e, t, n) {if (!this._storage) return;var s = { version: n || "localCachev1", content: t },r = JSON.stringify(s);try {this._storage.setItem(e, r);} catch (e) {throw e;}} }, { key: "getStore", value: function getStore(e, t) {try {if (!this._storage) return;} catch (e) {return "";}t = t || "localCachev1";var n = this._storage.getItem(e);if (!n) return "";if (n.indexOf(t) >= 0) {return JSON.parse(n).content;}return "";} }, { key: "removeStore", value: function removeStore(e) {this._storage.removeItem(e);} }]);return X;}();var G = {},Q = {};function Z(e) {return G[e];}var ee = function ee(e, t) {_classCallCheck(this, ee);this.data = t || null, this.name = e;};var te = /*#__PURE__*/function (_ee) {_inherits(te, _ee);var _super4 = _createSuper(te);function te(e, t) {var _this9;_classCallCheck(this, te);_this9 = _super4.call(this, "error", { error: e, data: t }), _this9.error = e;return _this9;}return te;}(ee);var ne = new ( /*#__PURE__*/function () {function _class() {_classCallCheck(this, _class);this._listeners = {};}_createClass(_class, [{ key: "on", value: function on(e, t) {return function (e, t, n) {n[e] = n[e] || [], n[e].push(t);}(e, t, this._listeners), this;} }, { key: "off", value: function off(e, t) {return function (e, t, n) {if (n && n[e]) {var _s4 = n[e].indexOf(t);-1 !== _s4 && n[e].splice(_s4, 1);}}(e, t, this._listeners), this;} }, { key: "fire", value: function fire(e, t) {if (e instanceof te) return console.error(e.error), this;var n = "string" == typeof e ? new ee(e, t || {}) : e;var s = n.name;if (this._listens(s)) {n.target = this;var _e7 = this._listeners[s] ? _toConsumableArray(this._listeners[s]) : [];var _iterator2 = _createForOfIteratorHelper(_e7),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _t4 = _step2.value;_t4.call(this, n);}} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}}return this;} }, { key: "_listens", value: function _listens(e) {return this._listeners[e] && this._listeners[e].length > 0;} }]);return _class;}())();function se(e, t) {ne.on(e, t);}function re(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};ne.fire(e, t);}function oe(e, t) {ne.off(e, t);}var ie = "loginStateChanged",ae = "loginStateExpire",ce = "loginTypeChanged",ue = "anonymousConverted",he = "refreshAccessToken";var le;!function (e) {e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";}(le || (le = {}));var de = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],fe = { "X-SDK-Version": "1.3.5" };function pe(e, t, n) {var s = e[t];e[t] = function (t) {var r = {},o = {};n.forEach(function (n) {var _n$call = n.call(e, t),s = _n$call.data,i = _n$call.headers;Object.assign(r, s), Object.assign(o, i);});var i = t.data;return i && function () {var e;if (e = i, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, i), r);else for (var _e8 in r) {i.append(_e8, r[_e8]);}}(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), o), s.call(e, t);};}function ge() {var e = Math.random().toString(16).slice(2);return { data: { seqId: e }, headers: _objectSpread(_objectSpread({}, fe), {}, { "x-seqid": e }) };}var me = /*#__PURE__*/function () {function me() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, me);var t;this.config = e, this._reqClass = new z.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"), restrictedMethods: ["post"] }), this._cache = Z(this.config.env), this._localCache = (t = this.config.env, Q[t]), pe(this._reqClass, "post", [ge]), pe(this._reqClass, "upload", [ge]), pe(this._reqClass, "download", [ge]);}_createClass(me, [{ key: "post", value: function () {var _post = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this._reqClass.post(e);case 2:return _context.abrupt("return", _context.sent);case 3:case "end":return _context.stop();}}}, _callee, this);}));function post(_x) {return _post.apply(this, arguments);}return post;}() }, { key: "upload", value: function () {var _upload = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(e) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return this._reqClass.upload(e);case 2:return _context2.abrupt("return", _context2.sent);case 3:case "end":return _context2.stop();}}}, _callee2, this);}));function upload(_x2) {return _upload.apply(this, arguments);}return upload;}() }, { key: "download", value: function () {var _download = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(e) {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return this._reqClass.download(e);case 2:return _context3.abrupt("return", _context3.sent);case 3:case "end":return _context3.stop();}}}, _callee3, this);}));function download(_x3) {return _download.apply(this, arguments);}return download;}() }, { key: "refreshAccessToken", value: function () {var _refreshAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var e, t;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());_context4.prev = 1;_context4.next = 4;return this._refreshAccessTokenPromise;case 4:e = _context4.sent;_context4.next = 10;break;case 7:_context4.prev = 7;_context4.t0 = _context4["catch"](1);t = _context4.t0;case 10:if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {_context4.next = 12;break;}throw t;case 12:return _context4.abrupt("return", e);case 13:case "end":return _context4.stop();}}}, _callee4, this, [[1, 7]]);}));function refreshAccessToken() {return _refreshAccessToken2.apply(this, arguments);}return refreshAccessToken;}() }, { key: "_refreshAccessToken", value: function () {var _refreshAccessToken3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var _this$_cache$keys, e, t, n, s, r, o, i, a, _e9, _e10, _t5, _s5;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, n = _this$_cache$keys.refreshTokenKey, s = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;this._cache.removeStore(e), this._cache.removeStore(t);o = this._cache.getStore(n);if (o) {_context5.next = 5;break;}throw new Error("未登录CloudBase");case 5:i = { refresh_token: o };_context5.next = 8;return this.request("auth.fetchAccessTokenWithRefreshToken", i);case 8:a = _context5.sent;if (!a.data.code) {_context5.next = 21;break;}_e9 = a.data.code;if (!("SIGN_PARAM_INVALID" === _e9 || "REFRESH_TOKEN_EXPIRED" === _e9 || "INVALID_REFRESH_TOKEN" === _e9)) {_context5.next = 20;break;}if (!(this._cache.getStore(s) === le.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e9)) {_context5.next = 19;break;}_e10 = this._cache.getStore(r);_t5 = this._cache.getStore(n);_context5.next = 17;return this.send("auth.signInAnonymously", { anonymous_uuid: _e10, refresh_token: _t5 });case 17:_s5 = _context5.sent;return _context5.abrupt("return", (this.setRefreshToken(_s5.refresh_token), this._refreshAccessToken()));case 19:re(ae), this._cache.removeStore(n);case 20:throw new Error("\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code));case 21:if (!a.data.access_token) {_context5.next = 23;break;}return _context5.abrupt("return", (re(he), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), { accessToken: a.data.access_token, accessTokenExpire: a.data.access_token_expire }));case 23:a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken());case 24:case "end":return _context5.stop();}}}, _callee5, this);}));function _refreshAccessToken() {return _refreshAccessToken3.apply(this, arguments);}return _refreshAccessToken;}() }, { key: "getAccessToken", value: function () {var _getAccessToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var _this$_cache$keys2, e, t, n, s, r, o;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, n = _this$_cache$keys2.refreshTokenKey;if (this._cache.getStore(n)) {_context6.next = 3;break;}throw new Error("refresh token不存在，登录状态异常");case 3:s = this._cache.getStore(e), r = this._cache.getStore(t), o = !0;_context6.t0 = this._shouldRefreshAccessTokenHook;if (!_context6.t0) {_context6.next = 9;break;}_context6.next = 8;return this._shouldRefreshAccessTokenHook(s, r);case 8:_context6.t0 = !_context6.sent;case 9:_context6.t1 = _context6.t0;if (!_context6.t1) {_context6.next = 12;break;}o = !1;case 12:return _context6.abrupt("return", (!s || !r || r < Date.now()) && o ? this.refreshAccessToken() : { accessToken: s, accessTokenExpire: r });case 13:case "end":return _context6.stop();}}}, _callee6, this);}));function getAccessToken() {return _getAccessToken.apply(this, arguments);}return getAccessToken;}() }, { key: "request", value: function () {var _request = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(e, t, n) {var s, r, o, _e11, i, _e12, _e13, a, c, u, h, l, d, f, p, g;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:s = "x-tcb-trace_".concat(this.config.env);r = "application/x-www-form-urlencoded";o = _objectSpread({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t);if (!(-1 === de.indexOf(e))) {_context7.next = 10;break;}_e11 = this._cache.keys.refreshTokenKey;_context7.t0 = this._cache.getStore(_e11);if (!_context7.t0) {_context7.next = 10;break;}_context7.next = 9;return this.getAccessToken();case 9:o.access_token = _context7.sent.accessToken;case 10:if ("storage.uploadFile" === e) {i = new FormData();for (_e12 in i) {i.hasOwnProperty(_e12) && void 0 !== i[_e12] && i.append(_e12, o[_e12]);}r = "multipart/form-data";} else {r = "application/json;charset=UTF-8", i = {};for (_e13 in o) {void 0 !== o[_e13] && (i[_e13] = o[_e13]);}}a = { headers: { "content-type": r } };n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress);c = this._localCache.getStore(s);c && (a.headers["X-TCB-Trace"] = c);u = t.parse, h = t.inQuery, l = t.search;d = { env: this.config.env };u && (d.parse = !0), h && (d = _objectSpread(_objectSpread({}, h), d));f = function (e, t) {var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var s = /\?/.test(t);var r = "";for (var _e14 in n) {"" === r ? !s && (t += "?") : r += "&", r += "".concat(_e14, "=").concat(encodeURIComponent(n[_e14]));}return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);}(N, "//tcb-api.tencentcloudapi.com/web", d);l && (f += l);_context7.next = 22;return this.post(_objectSpread({ url: f, data: i }, a));case 22:p = _context7.sent;g = p.header && p.header["x-tcb-trace"];if (!(g && this._localCache.setStore(s, g), 200 !== Number(p.status) && 200 !== Number(p.statusCode) || !p.data)) {_context7.next = 26;break;}throw new Error("network request error");case 26:return _context7.abrupt("return", p);case 27:case "end":return _context7.stop();}}}, _callee7, this);}));function request(_x4, _x5, _x6) {return _request.apply(this, arguments);}return request;}() }, { key: "send", value: function () {var _send = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(e) {var t,n,_n3,_args8 = arguments;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:t = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};_context8.next = 3;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 3:n = _context8.sent;if (!("ACCESS_TOKEN_EXPIRED" === n.data.code && -1 === de.indexOf(e))) {_context8.next = 13;break;}_context8.next = 7;return this.refreshAccessToken();case 7:_context8.next = 9;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 9:_n3 = _context8.sent;if (!_n3.data.code) {_context8.next = 12;break;}throw new Error("[".concat(_n3.data.code, "] ").concat(_n3.data.message));case 12:return _context8.abrupt("return", _n3.data);case 13:if (!n.data.code) {_context8.next = 15;break;}throw new Error("[".concat(n.data.code, "] ").concat(n.data.message));case 15:return _context8.abrupt("return", n.data);case 16:case "end":return _context8.stop();}}}, _callee8, this);}));function send(_x7) {return _send.apply(this, arguments);}return send;}() }, { key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys3 = this._cache.keys,t = _this$_cache$keys3.accessTokenKey,n = _this$_cache$keys3.accessTokenExpireKey,s = _this$_cache$keys3.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);} }]);return me;}();var ye = {};function _e(e) {return ye[e];}var we = /*#__PURE__*/function () {function we(e) {_classCallCheck(this, we);this.config = e, this._cache = Z(e.env), this._request = _e(e.env);}_createClass(we, [{ key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys4 = this._cache.keys,t = _this$_cache$keys4.accessTokenKey,n = _this$_cache$keys4.accessTokenExpireKey,s = _this$_cache$keys4.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);} }, { key: "setAccessToken", value: function setAccessToken(e, t) {var _this$_cache$keys5 = this._cache.keys,n = _this$_cache$keys5.accessTokenKey,s = _this$_cache$keys5.accessTokenExpireKey;this._cache.setStore(n, e), this._cache.setStore(s, t);} }, { key: "refreshUserInfo", value: function () {var _refreshUserInfo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {var _yield$this$_request$, e;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$ = _context9.sent;e = _yield$this$_request$.data;return _context9.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context9.stop();}}}, _callee9, this);}));function refreshUserInfo() {return _refreshUserInfo.apply(this, arguments);}return refreshUserInfo;}() }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e);} }]);return we;}();var ve = /*#__PURE__*/function () {function ve(e) {_classCallCheck(this, ve);if (!e) throw new Error("envId is not defined");this._envId = e, this._cache = Z(this._envId), this._request = _e(this._envId), this.setUserInfo();}_createClass(ve, [{ key: "linkWithTicket", value: function linkWithTicket(e) {if ("string" != typeof e) throw new Error("ticket must be string");return this._request.send("auth.linkWithTicket", { ticket: e });} }, { key: "linkWithRedirect", value: function linkWithRedirect(e) {e.signInWithRedirect();} }, { key: "updatePassword", value: function updatePassword(e, t) {return this._request.send("auth.updatePassword", { oldPassword: t, newPassword: e });} }, { key: "updateEmail", value: function updateEmail(e) {return this._request.send("auth.updateEmail", { newEmail: e });} }, { key: "updateUsername", value: function updateUsername(e) {if ("string" != typeof e) throw new Error("username must be a string");return this._request.send("auth.updateUsername", { username: e });} }, { key: "getLinkedUidList", value: function () {var _getLinkedUidList = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var _yield$this$_request$2, e, t, n;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:_context10.next = 2;return this._request.send("auth.getLinkedUidList", {});case 2:_yield$this$_request$2 = _context10.sent;e = _yield$this$_request$2.data;t = !1;n = e.users;return _context10.abrupt("return", (n.forEach(function (e) {e.wxOpenId && e.wxPublicId && (t = !0);}), { users: n, hasPrimaryUid: t }));case 7:case "end":return _context10.stop();}}}, _callee10, this);}));function getLinkedUidList() {return _getLinkedUidList.apply(this, arguments);}return getLinkedUidList;}() }, { key: "setPrimaryUid", value: function setPrimaryUid(e) {return this._request.send("auth.setPrimaryUid", { uid: e });} }, { key: "unlink", value: function unlink(e) {return this._request.send("auth.unlink", { platform: e });} }, { key: "update", value: function () {var _update = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11(e) {var t, n, s, r, o, i, _yield$this$_request$3, a;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:t = e.nickName;n = e.gender;s = e.avatarUrl;r = e.province;o = e.country;i = e.city;_context11.next = 8;return this._request.send("auth.updateUserInfo", { nickName: t, gender: n, avatarUrl: s, province: r, country: o, city: i });case 8:_yield$this$_request$3 = _context11.sent;a = _yield$this$_request$3.data;this.setLocalUserInfo(a);case 11:case "end":return _context11.stop();}}}, _callee11, this);}));function update(_x8) {return _update.apply(this, arguments);}return update;}() }, { key: "refresh", value: function () {var _refresh = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {var _yield$this$_request$4, e;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:_context12.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$4 = _context12.sent;e = _yield$this$_request$4.data;return _context12.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context12.stop();}}}, _callee12, this);}));function refresh() {return _refresh.apply(this, arguments);}return refresh;}() }, { key: "setUserInfo", value: function setUserInfo() {var _this10 = this;var e = this._cache.keys.userInfoKey,t = this._cache.getStore(e);["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {_this10[e] = t[e];}), this.location = { country: t.country, province: t.province, city: t.city };} }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e), this.setUserInfo();} }]);return ve;}();var Se = /*#__PURE__*/function () {function Se(e) {_classCallCheck(this, Se);if (!e) throw new Error("envId is not defined");this._cache = Z(e);var _this$_cache$keys6 = this._cache.keys,t = _this$_cache$keys6.refreshTokenKey,n = _this$_cache$keys6.accessTokenKey,s = _this$_cache$keys6.accessTokenExpireKey,r = this._cache.getStore(t),o = this._cache.getStore(n),i = this._cache.getStore(s);this.credential = { refreshToken: r, accessToken: o, accessTokenExpire: i }, this.user = new ve(e);}_createClass(Se, [{ key: "isAnonymousAuth", get: function get() {return this.loginType === le.ANONYMOUS;} }, { key: "isCustomAuth", get: function get() {return this.loginType === le.CUSTOM;} }, { key: "isWeixinAuth", get: function get() {return this.loginType === le.WECHAT || this.loginType === le.WECHAT_OPEN || this.loginType === le.WECHAT_PUBLIC;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return Se;}();var ke = /*#__PURE__*/function (_we) {_inherits(ke, _we);var _super5 = _createSuper(ke);function ke() {_classCallCheck(this, ke);return _super5.apply(this, arguments);}_createClass(ke, [{ key: "signIn", value: function () {var _signIn = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {var _this$_cache$keys7, e, t, n, s, r, _e15;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:this._cache.updatePersistence("local");_this$_cache$keys7 = this._cache.keys;e = _this$_cache$keys7.anonymousUuidKey;t = _this$_cache$keys7.refreshTokenKey;n = this._cache.getStore(e) || void 0;s = this._cache.getStore(t) || void 0;_context13.next = 8;return this._request.send("auth.signInAnonymously", { anonymous_uuid: n, refresh_token: s });case 8:r = _context13.sent;if (!(r.uuid && r.refresh_token)) {_context13.next = 20;break;}this._setAnonymousUUID(r.uuid);this.setRefreshToken(r.refresh_token);_context13.next = 14;return this._request.refreshAccessToken();case 14:re(ie);re(ce, { env: this.config.env, loginType: le.ANONYMOUS, persistence: "local" });_e15 = new Se(this.config.env);_context13.next = 19;return _e15.user.refresh();case 19:return _context13.abrupt("return", _e15);case 20:throw new Error("匿名登录失败");case 21:case "end":return _context13.stop();}}}, _callee13, this);}));function signIn() {return _signIn.apply(this, arguments);}return signIn;}() }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14(e) {var _this$_cache$keys8, t, n, s, r, o;return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:_this$_cache$keys8 = this._cache.keys;t = _this$_cache$keys8.anonymousUuidKey;n = _this$_cache$keys8.refreshTokenKey;s = this._cache.getStore(t);r = this._cache.getStore(n);_context14.next = 7;return this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s, refresh_token: r, ticket: e });case 7:o = _context14.sent;if (!o.refresh_token) {_context14.next = 16;break;}this._clearAnonymousUUID();this.setRefreshToken(o.refresh_token);_context14.next = 13;return this._request.refreshAccessToken();case 13:re(ue, { env: this.config.env });re(ce, { loginType: le.CUSTOM, persistence: "local" });return _context14.abrupt("return", { credential: { refreshToken: o.refresh_token } });case 16:throw new Error("匿名转化失败");case 17:case "end":return _context14.stop();}}}, _callee14, this);}));function linkAndRetrieveDataWithTicket(_x9) {return _linkAndRetrieveDataWithTicket.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "_setAnonymousUUID", value: function _setAnonymousUUID(e) {var _this$_cache$keys9 = this._cache.keys,t = _this$_cache$keys9.anonymousUuidKey,n = _this$_cache$keys9.loginTypeKey;this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, le.ANONYMOUS);} }, { key: "_clearAnonymousUUID", value: function _clearAnonymousUUID() {this._cache.removeStore(this._cache.keys.anonymousUuidKey);} }]);return ke;}(we);var Te = /*#__PURE__*/function (_we2) {_inherits(Te, _we2);var _super6 = _createSuper(Te);function Te() {_classCallCheck(this, Te);return _super6.apply(this, arguments);}_createClass(Te, [{ key: "signIn", value: function () {var _signIn2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15(e) {var t, n;return _regenerator.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:if (!("string" != typeof e)) {_context15.next = 2;break;}throw new Error("ticket must be a string");case 2:t = this._cache.keys.refreshTokenKey;_context15.next = 5;return this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t) || "" });case 5:n = _context15.sent;if (!n.refresh_token) {_context15.next = 15;break;}this.setRefreshToken(n.refresh_token);_context15.next = 10;return this._request.refreshAccessToken();case 10:re(ie);re(ce, { env: this.config.env, loginType: le.CUSTOM, persistence: this.config.persistence });_context15.next = 14;return this.refreshUserInfo();case 14:return _context15.abrupt("return", new Se(this.config.env));case 15:throw new Error("自定义登录失败");case 16:case "end":return _context15.stop();}}}, _callee15, this);}));function signIn(_x10) {return _signIn2.apply(this, arguments);}return signIn;}() }]);return Te;}(we);var Pe = /*#__PURE__*/function (_we3) {_inherits(Pe, _we3);var _super7 = _createSuper(Pe);function Pe() {_classCallCheck(this, Pe);return _super7.apply(this, arguments);}_createClass(Pe, [{ key: "signIn", value: function () {var _signIn3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16(e, t) {var n, s, r, o, i;return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:if (!("string" != typeof e)) {_context16.next = 2;break;}throw new Error("email must be a string");case 2:n = this._cache.keys.refreshTokenKey;_context16.next = 5;return this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t, refresh_token: this._cache.getStore(n) || "" });case 5:s = _context16.sent;r = s.refresh_token;o = s.access_token;i = s.access_token_expire;if (!r) {_context16.next = 22;break;}this.setRefreshToken(r);if (!(o && i)) {_context16.next = 15;break;}this.setAccessToken(o, i);_context16.next = 17;break;case 15:_context16.next = 17;return this._request.refreshAccessToken();case 17:_context16.next = 19;return this.refreshUserInfo();case 19:re(ie);re(ce, { env: this.config.env, loginType: le.EMAIL, persistence: this.config.persistence });return _context16.abrupt("return", new Se(this.config.env));case 22:throw s.code ? new Error("\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: [".concat(s.code, "] ").concat(s.message)) : new Error("邮箱登录失败");case 23:case "end":return _context16.stop();}}}, _callee16, this);}));function signIn(_x11, _x12) {return _signIn3.apply(this, arguments);}return signIn;}() }, { key: "activate", value: function () {var _activate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee17(e) {return _regenerator.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:return _context17.abrupt("return", this._request.send("auth.activateEndUserMail", { token: e }));case 1:case "end":return _context17.stop();}}}, _callee17, this);}));function activate(_x13) {return _activate.apply(this, arguments);}return activate;}() }, { key: "resetPasswordWithToken", value: function () {var _resetPasswordWithToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee18(e, t) {return _regenerator.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:return _context18.abrupt("return", this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t }));case 1:case "end":return _context18.stop();}}}, _callee18, this);}));function resetPasswordWithToken(_x14, _x15) {return _resetPasswordWithToken.apply(this, arguments);}return resetPasswordWithToken;}() }]);return Pe;}(we);var Ie = /*#__PURE__*/function (_we4) {_inherits(Ie, _we4);var _super8 = _createSuper(Ie);function Ie() {_classCallCheck(this, Ie);return _super8.apply(this, arguments);}_createClass(Ie, [{ key: "signIn", value: function () {var _signIn4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee19(e, t) {var n, s, r, o, i;return _regenerator.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:if (!("string" != typeof e)) {_context19.next = 2;break;}throw new Error("username must be a string");case 2:"string" != typeof t && (t = "", console.warn("password is empty"));n = this._cache.keys.refreshTokenKey;_context19.next = 6;return this._request.send("auth.signIn", { loginType: le.USERNAME, username: e, password: t, refresh_token: this._cache.getStore(n) || "" });case 6:s = _context19.sent;r = s.refresh_token;o = s.access_token_expire;i = s.access_token;if (!r) {_context19.next = 23;break;}this.setRefreshToken(r);if (!(i && o)) {_context19.next = 16;break;}this.setAccessToken(i, o);_context19.next = 18;break;case 16:_context19.next = 18;return this._request.refreshAccessToken();case 18:_context19.next = 20;return this.refreshUserInfo();case 20:re(ie);re(ce, { env: this.config.env, loginType: le.USERNAME, persistence: this.config.persistence });return _context19.abrupt("return", new Se(this.config.env));case 23:throw s.code ? new Error("\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: [".concat(s.code, "] ").concat(s.message)) : new Error("用户名密码登录失败");case 24:case "end":return _context19.stop();}}}, _callee19, this);}));function signIn(_x16, _x17) {return _signIn4.apply(this, arguments);}return signIn;}() }]);return Ie;}(we);var Ae = /*#__PURE__*/function () {function Ae(e) {_classCallCheck(this, Ae);this.config = e, this._cache = Z(e.env), this._request = _e(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), se(ce, this._onLoginTypeChanged);}_createClass(Ae, [{ key: "anonymousAuthProvider", value: function anonymousAuthProvider() {return new ke(this.config);} }, { key: "customAuthProvider", value: function customAuthProvider() {return new Te(this.config);} }, { key: "emailAuthProvider", value: function emailAuthProvider() {return new Pe(this.config);} }, { key: "usernameAuthProvider", value: function usernameAuthProvider() {return new Ie(this.config);} }, { key: "signInAnonymously", value: function () {var _signInAnonymously = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee20() {return _regenerator.default.wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:return _context20.abrupt("return", new ke(this.config).signIn());case 1:case "end":return _context20.stop();}}}, _callee20, this);}));function signInAnonymously() {return _signInAnonymously.apply(this, arguments);}return signInAnonymously;}() }, { key: "signInWithEmailAndPassword", value: function () {var _signInWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee21(e, t) {return _regenerator.default.wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:return _context21.abrupt("return", new Pe(this.config).signIn(e, t));case 1:case "end":return _context21.stop();}}}, _callee21, this);}));function signInWithEmailAndPassword(_x18, _x19) {return _signInWithEmailAndPassword.apply(this, arguments);}return signInWithEmailAndPassword;}() }, { key: "signInWithUsernameAndPassword", value: function signInWithUsernameAndPassword(e, t) {return new Ie(this.config).signIn(e, t);} }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee22(e) {return _regenerator.default.wrap(function _callee22$(_context22) {while (1) {switch (_context22.prev = _context22.next) {case 0:this._anonymousAuthProvider || (this._anonymousAuthProvider = new ke(this.config)), se(ue, this._onAnonymousConverted);_context22.next = 3;return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);case 3:return _context22.abrupt("return", _context22.sent);case 4:case "end":return _context22.stop();}}}, _callee22, this);}));function linkAndRetrieveDataWithTicket(_x20) {return _linkAndRetrieveDataWithTicket2.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "signOut", value: function () {var _signOut = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee23() {var _this$_cache$keys10, e, t, n, s, r;return _regenerator.default.wrap(function _callee23$(_context23) {while (1) {switch (_context23.prev = _context23.next) {case 0:if (!(this.loginType === le.ANONYMOUS)) {_context23.next = 2;break;}throw new Error("匿名用户不支持登出操作");case 2:_this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, n = _this$_cache$keys10.accessTokenExpireKey, s = this._cache.getStore(e);if (s) {_context23.next = 5;break;}return _context23.abrupt("return");case 5:_context23.next = 7;return this._request.send("auth.logout", { refresh_token: s });case 7:r = _context23.sent;return _context23.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), re(ie), re(ce, { env: this.config.env, loginType: le.NULL, persistence: this.config.persistence }), r));case 9:case "end":return _context23.stop();}}}, _callee23, this);}));function signOut() {return _signOut.apply(this, arguments);}return signOut;}() }, { key: "signUpWithEmailAndPassword", value: function () {var _signUpWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee24(e, t) {return _regenerator.default.wrap(function _callee24$(_context24) {while (1) {switch (_context24.prev = _context24.next) {case 0:return _context24.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t }));case 1:case "end":return _context24.stop();}}}, _callee24, this);}));function signUpWithEmailAndPassword(_x21, _x22) {return _signUpWithEmailAndPassword.apply(this, arguments);}return signUpWithEmailAndPassword;}() }, { key: "sendPasswordResetEmail", value: function () {var _sendPasswordResetEmail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee25(e) {return _regenerator.default.wrap(function _callee25$(_context25) {while (1) {switch (_context25.prev = _context25.next) {case 0:return _context25.abrupt("return", this._request.send("auth.sendPasswordResetEmail", { email: e }));case 1:case "end":return _context25.stop();}}}, _callee25, this);}));function sendPasswordResetEmail(_x23) {return _sendPasswordResetEmail.apply(this, arguments);}return sendPasswordResetEmail;}() }, { key: "onLoginStateChanged", value: function onLoginStateChanged(e) {var _this11 = this;se(ie, function () {var t = _this11.hasLoginState();e.call(_this11, t);});var t = this.hasLoginState();e.call(this, t);} }, { key: "onLoginStateExpired", value: function onLoginStateExpired(e) {se(ae, e.bind(this));} }, { key: "onAccessTokenRefreshed", value: function onAccessTokenRefreshed(e) {se(he, e.bind(this));} }, { key: "onAnonymousConverted", value: function onAnonymousConverted(e) {se(ue, e.bind(this));} }, { key: "onLoginTypeChanged", value: function onLoginTypeChanged(e) {var _this12 = this;se(ce, function () {var t = _this12.hasLoginState();e.call(_this12, t);});} }, { key: "getAccessToken", value: function () {var _getAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee26() {return _regenerator.default.wrap(function _callee26$(_context26) {while (1) {switch (_context26.prev = _context26.next) {case 0:_context26.next = 2;return this._request.getAccessToken();case 2:_context26.t0 = _context26.sent.accessToken;_context26.t1 = this.config.env;return _context26.abrupt("return", { accessToken: _context26.t0, env: _context26.t1 });case 5:case "end":return _context26.stop();}}}, _callee26, this);}));function getAccessToken() {return _getAccessToken2.apply(this, arguments);}return getAccessToken;}() }, { key: "hasLoginState", value: function hasLoginState() {var e = this._cache.keys.refreshTokenKey;return this._cache.getStore(e) ? new Se(this.config.env) : null;} }, { key: "isUsernameRegistered", value: function () {var _isUsernameRegistered = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee27(e) {var _yield$this$_request$5, t;return _regenerator.default.wrap(function _callee27$(_context27) {while (1) {switch (_context27.prev = _context27.next) {case 0:if (!("string" != typeof e)) {_context27.next = 2;break;}throw new Error("username must be a string");case 2:_context27.next = 4;return this._request.send("auth.isUsernameRegistered", { username: e });case 4:_yield$this$_request$5 = _context27.sent;t = _yield$this$_request$5.data;return _context27.abrupt("return", t && t.isRegistered);case 7:case "end":return _context27.stop();}}}, _callee27, this);}));function isUsernameRegistered(_x24) {return _isUsernameRegistered.apply(this, arguments);}return isUsernameRegistered;}() }, { key: "getLoginState", value: function getLoginState() {return Promise.resolve(this.hasLoginState());} }, { key: "signInWithTicket", value: function () {var _signInWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee28(e) {return _regenerator.default.wrap(function _callee28$(_context28) {while (1) {switch (_context28.prev = _context28.next) {case 0:return _context28.abrupt("return", new Te(this.config).signIn(e));case 1:case "end":return _context28.stop();}}}, _callee28, this);}));function signInWithTicket(_x25) {return _signInWithTicket.apply(this, arguments);}return signInWithTicket;}() }, { key: "shouldRefreshAccessToken", value: function shouldRefreshAccessToken(e) {this._request._shouldRefreshAccessTokenHook = e.bind(this);} }, { key: "getUserInfo", value: function getUserInfo() {return this._request.send("auth.getUserInfo", {}).then(function (e) {return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, { requestId: e.seqId });});} }, { key: "getAuthHeader", value: function getAuthHeader() {var _this$_cache$keys11 = this._cache.keys,e = _this$_cache$keys11.refreshTokenKey,t = _this$_cache$keys11.accessTokenKey,n = this._cache.getStore(e);return { "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + n };} }, { key: "_onAnonymousConverted", value: function _onAnonymousConverted(e) {var t = e.data.env;t === this.config.env && this._cache.updatePersistence(this.config.persistence);} }, { key: "_onLoginTypeChanged", value: function _onLoginTypeChanged(e) {var _e$data = e.data,t = _e$data.loginType,n = _e$data.persistence,s = _e$data.env;s === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t));} }, { key: "currentUser", get: function get() {var e = this.hasLoginState();return e && e.user || null;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return Ae;}();var Ee = function Ee(e, t) {t = t || j();var n = _e(this.config.env),s = e.cloudPath,r = e.filePath,o = e.onUploadProgress,_e$fileType = e.fileType,i = _e$fileType === void 0 ? "image" : _e$fileType;return n.send("storage.getUploadMetadata", { path: s }).then(function (e) {var _e$data2 = e.data,a = _e$data2.url,c = _e$data2.authorization,u = _e$data2.token,h = _e$data2.fileId,l = _e$data2.cosFileId,d = e.requestId,f = { key: s, signature: c, "x-cos-meta-fileid": l, success_action_status: "201", "x-cos-security-token": u };n.upload({ url: a, data: f, file: r, name: s, fileType: i, onUploadProgress: o }).then(function (e) {201 === e.statusCode ? t(null, { fileID: h, requestId: d }) : t(new Error("STORAGE_REQUEST_FAIL: ".concat(e.data)));}).catch(function (e) {t(e);});}).catch(function (e) {t(e);}), t.promise;},be = function be(e, t) {t = t || j();var n = _e(this.config.env),s = e.cloudPath;return n.send("storage.getUploadMetadata", { path: s }).then(function (e) {t(null, e);}).catch(function (e) {t(e);}), t.promise;},Oe = function Oe(_ref5, t) {var e = _ref5.fileList;if (t = t || j(), !e || !Array.isArray(e)) return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };var _iterator3 = _createForOfIteratorHelper(e),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _t6 = _step3.value;if (!_t6 || "string" != typeof _t6) return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };}} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}var n = { fileid_list: e };return _e(this.config.env).send("storage.batchDeleteFile", n).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.delete_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},Ue = function Ue(_ref6, t) {var e = _ref6.fileList;t = t || j(), e && Array.isArray(e) || t(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });var n = [];var _iterator4 = _createForOfIteratorHelper(e),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var _s6 = _step4.value;"object" == typeof _s6 ? (_s6.hasOwnProperty("fileID") && _s6.hasOwnProperty("maxAge") || t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n.push({ fileid: _s6.fileID, max_age: _s6.maxAge })) : "string" == typeof _s6 ? n.push({ fileid: _s6 }) : t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });}} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}var s = { file_list: n };return _e(this.config.env).send("storage.batchGetDownloadUrl", s).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.download_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},Ce = /*#__PURE__*/function () {var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee29(_ref7, t) {var e, n, s, r;return _regenerator.default.wrap(function _callee29$(_context29) {while (1) {switch (_context29.prev = _context29.next) {case 0:e = _ref7.fileID;_context29.next = 3;return Ue.call(this, { fileList: [{ fileID: e, maxAge: 600 }] });case 3:n = _context29.sent.fileList[0];if (!("SUCCESS" !== n.code)) {_context29.next = 6;break;}return _context29.abrupt("return", t ? t(n) : new Promise(function (e) {e(n);}));case 6:s = _e(this.config.env);r = n.download_url;if (!(r = encodeURI(r), !t)) {_context29.next = 10;break;}return _context29.abrupt("return", s.download({ url: r }));case 10:_context29.t0 = t;_context29.next = 13;return s.download({ url: r });case 13:_context29.t1 = _context29.sent;(0, _context29.t0)(_context29.t1);case 15:case "end":return _context29.stop();}}}, _callee29, this);}));return function Ce(_x26, _x27) {return _ref8.apply(this, arguments);};}(),De = function De(_ref9, o) {var e = _ref9.name,t = _ref9.data,n = _ref9.query,s = _ref9.parse,r = _ref9.search;var i = o || j();var a;try {a = t ? JSON.stringify(t) : "";} catch (e) {return Promise.reject(e);}if (!e) return Promise.reject(new Error("函数名不能为空"));var c = { inQuery: n, parse: s, search: r, function_name: e, request_data: a };return _e(this.config.env).send("functions.invokeFunction", c).then(function (e) {if (e.code) i(null, e);else {var _t7 = e.data.response_data;if (s) i(null, { result: _t7, requestId: e.requestId });else try {_t7 = JSON.parse(e.data.response_data), i(null, { result: _t7, requestId: e.requestId });} catch (e) {i(new Error("response data must be json"));}}return i.promise;}).catch(function (e) {i(e);}), i.promise;},xe = { timeout: 15e3, persistence: "session" },Re = {};var qe = /*#__PURE__*/function () {function qe(e) {_classCallCheck(this, qe);this.config = e || this.config, this.authObj = void 0;}_createClass(qe, [{ key: "init", value: function init(e) {switch (z.adapter || (this.requestClient = new z.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD") })), this.config = _objectSpread(_objectSpread({}, xe), e), !0) {case this.config.timeout > 6e5:console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;break;case this.config.timeout < 100:console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;}return new qe(this.config);} }, { key: "auth", value: function auth() {var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref10.persistence;if (this.authObj) return this.authObj;var t = e || z.adapter.primaryStorage || xe.persistence;var n;return t !== this.config.persistence && (this.config.persistence = t), function (e) {var t = e.env;G[t] = new X(e), Q[t] = new X(_objectSpread(_objectSpread({}, e), {}, { persistence: "local" }));}(this.config), n = this.config, ye[n.env] = new me(n), this.authObj = new Ae(this.config), this.authObj;} }, { key: "on", value: function on(e, t) {return se.apply(this, [e, t]);} }, { key: "off", value: function off(e, t) {return oe.apply(this, [e, t]);} }, { key: "callFunction", value: function callFunction(e, t) {return De.apply(this, [e, t]);} }, { key: "deleteFile", value: function deleteFile(e, t) {return Oe.apply(this, [e, t]);} }, { key: "getTempFileURL", value: function getTempFileURL(e, t) {return Ue.apply(this, [e, t]);} }, { key: "downloadFile", value: function downloadFile(e, t) {return Ce.apply(this, [e, t]);} }, { key: "uploadFile", value: function uploadFile(e, t) {return Ee.apply(this, [e, t]);} }, { key: "getUploadMetadata", value: function getUploadMetadata(e, t) {return be.apply(this, [e, t]);} }, { key: "registerExtension", value: function registerExtension(e) {Re[e.name] = e;} }, { key: "invokeExtension", value: function () {var _invokeExtension = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee30(e, t) {var n;return _regenerator.default.wrap(function _callee30$(_context30) {while (1) {switch (_context30.prev = _context30.next) {case 0:n = Re[e];if (n) {_context30.next = 3;break;}throw Error("\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C"));case 3:_context30.next = 5;return n.invoke(t, this);case 5:return _context30.abrupt("return", _context30.sent);case 6:case "end":return _context30.stop();}}}, _callee30, this);}));function invokeExtension(_x28, _x29) {return _invokeExtension.apply(this, arguments);}return invokeExtension;}() }, { key: "useAdapters", value: function useAdapters(e) {var _ref11 = W(e) || {},t = _ref11.adapter,n = _ref11.runtime;t && (z.adapter = t), n && (z.runtime = n);} }]);return qe;}();var Fe = new qe();function Le(e, t, n) {void 0 === n && (n = {});var s = /\?/.test(t),r = "";for (var o in n) {"" === r ? !s && (t += "?") : r += "&", r += o + "=" + encodeURIComponent(n[o]);}return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;}var Ne = /*#__PURE__*/function () {function Ne() {_classCallCheck(this, Ne);}_createClass(Ne, [{ key: "post", value: function post(e) {var t = e.url,n = e.data,s = e.headers;return new Promise(function (e, r) {q.request({ url: Le("https:", t), data: n, method: "POST", header: s, success: function success(t) {e(t);}, fail: function fail(e) {r(e);} });});} }, { key: "upload", value: function upload(e) {return new Promise(function (t, n) {var s = e.url,r = e.file,o = e.data,i = e.headers,a = e.fileType,c = q.uploadFile({ url: Le("https:", s), name: "file", formData: Object.assign({}, o), filePath: r, fileType: a, header: i, success: function success(e) {var n = { statusCode: e.statusCode, data: e.data || {} };200 === e.statusCode && o.success_action_status && (n.statusCode = parseInt(o.success_action_status, 10)), t(n);}, fail: function fail(e) {u && "mp-alipay" === h && console.warn("支付宝小程序开发工具上传腾讯云时无法准确判断是否上传成功，请使用真机测试"), n(new Error(e.errMsg || "uploadFile:fail"));} });"function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {e.onUploadProgress({ loaded: t.totalBytesSent, total: t.totalBytesExpectedToSend });});});} }]);return Ne;}();var Me = { setItem: function setItem(e, t) {q.setStorageSync(e, t);}, getItem: function getItem(e) {return q.getStorageSync(e);}, removeItem: function removeItem(e) {q.removeStorageSync(e);}, clear: function clear() {q.clearStorageSync();} };var $e = { genAdapter: function genAdapter() {return { root: {}, reqClass: Ne, localStorage: Me, primaryStorage: "local" };}, isMatch: function isMatch() {return !0;}, runtime: "uni_app" };Fe.useAdapters($e);var je = Fe,Ke = je.init;je.init = function (e) {e.env = e.spaceId;var t = Ke.call(this, e);t.config.provider = "tencent", t.config.spaceId = e.spaceId;var n = t.auth;return t.auth = function (e) {var t = n.call(this, e);return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {t[e] = T(t[e]).bind(t);}), t;}, t.customAuth = t.auth, t;};var Be = /*#__PURE__*/function (_F) {_inherits(Be, _F);var _super9 = _createSuper(Be);function Be() {_classCallCheck(this, Be);return _super9.apply(this, arguments);}_createClass(Be, [{ key: "getAccessToken", value: function getAccessToken() {var _this13 = this;return new Promise(function (e, t) {var n = "Anonymous_Access_token";_this13.setAccessToken(n), e(n);});} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),s = { "Content-Type": "application/json" };"auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = R.sign(n, this.config.clientSecret);var r = C(),o = r.APPID,i = r.PLATFORM,a = r.DEVICEID,c = r.CLIENT_SDK_VERSION;return s["x-client-platform"] = i, s["x-client-appid"] = o, s["x-client-device-id"] = a, s["x-client-version"] = c, s["x-client-token"] = q.getStorageSync("uni_id_token"), { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: JSON.parse(JSON.stringify(s)) };} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref12) {var _this14 = this;var e = _ref12.url,t = _ref12.formData,n = _ref12.name,s = _ref12.filePath,r = _ref12.fileType,o = _ref12.onUploadProgress;return new Promise(function (i, a) {var c = _this14.adapter.uploadFile({ url: e, formData: t, name: n, filePath: s, fileType: r, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new P({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {a(new P({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof o && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "uploadFile", value: function uploadFile(_ref13) {var _this15 = this;var e = _ref13.filePath,t = _ref13.cloudPath,_ref13$fileType = _ref13.fileType,n = _ref13$fileType === void 0 ? "image" : _ref13$fileType,s = _ref13.onUploadProgress;if (!t) throw new P({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var r;return this.getOSSUploadOptionsFromPath({ cloudPath: t }).then(function (t) {var _t$result = t.result,o = _t$result.url,i = _t$result.formData,a = _t$result.name,c = _t$result.fileUrl;r = c;var u = { url: o, formData: i, name: a, filePath: e, fileType: n };return _this15.uploadFileToOSS(Object.assign({}, u, { onUploadProgress: s }));}).then(function () {return _this15.reportOSSUpload({ cloudPath: t });}).then(function (t) {return new Promise(function (n, s) {t.success ? n({ success: !0, filePath: e, fileID: r }) : s(new P({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }]);return Be;}(F);var He = { init: function init(e) {var t = new Be(e),n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t.customAuth = t.auth, t;} };var We, ze;function Ve(_ref14) {var e = _ref14.name,t = _ref14.data,n = _ref14.spaceId,s = _ref14.provider;We || (We = C(), ze = { ak: p, p: "android" === O ? "a" : "i", ut: x(), uuid: D() });var r = JSON.parse(JSON.stringify(t || {})),o = e,i = n,a = { tencent: "t", aliyun: "a" }[s];{var _e16 = Object.assign({}, ze, { fn: o, sid: i, pvd: a });Object.assign(r, { clientInfo: We, uniCloudClientInfo: encodeURIComponent(JSON.stringify(_e16)) });var _uni$getSystemInfoSyn2 = uni.getSystemInfoSync(),_t8 = _uni$getSystemInfoSyn2.deviceId;r.uniCloudDeviceId = _t8;}if (!r.uniIdToken) {var _e17 = q.getStorageSync("uni_id_token") || q.getStorageSync("uniIdToken");_e17 && (r.uniIdToken = _e17);}return r;}function Je(_ref15) {var _this16 = this;var e = _ref15.name,t = _ref15.data;var n = this.localAddress,s = this.localPort,r = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider],o = this.config.spaceId,i = "http://".concat(n, ":").concat(s, "/system/check-function"),a = "http://".concat(n, ":").concat(s, "/cloudfunctions/").concat(e);return new Promise(function (t, n) {q.request({ method: "POST", url: i, data: { name: e, platform: h, provider: r, spaceId: o }, timeout: 3e3, success: function success(e) {t(e);}, fail: function fail() {t({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });} });}).then(function () {var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref16.data;var _ref17 = e || {},t = _ref17.code,n = _ref17.message;return { code: 0 === t ? 0 : t || "SYS_ERR", message: n || "SYS_ERR" };}).then(function (_ref18) {var n = _ref18.code,s = _ref18.message;if (0 !== n) {switch (n) {case "MODULE_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "FUNCTION_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "ACTION_ENCRYPTED":console.error(s || "需要访问加密的uni-clientDB-action，自动切换为云端环境");break;case "NETWORK_ERROR":{var _e18 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";throw console.error(_e18), new Error(_e18);}case "SWITCH_TO_CLOUD":break;default:{var _e19 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(s, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");throw console.error(_e19), new Error(_e19);}}return _this16._originCallFunction({ name: e, data: t });}return new Promise(function (n, s) {var i = Ve({ name: e, data: t, provider: _this16.config.provider, spaceId: o });q.request({ method: "POST", url: a, data: { provider: r, platform: h, param: i }, success: function success() {var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref19.statusCode,t = _ref19.data;return !e || e >= 400 ? s(new P({ code: t.code || "SYS_ERR", message: t.message || "request:fail" })) : n({ result: t });}, fail: function fail(e) {s(new P({ code: e.code || e.errCode || "SYS_ERR", message: e.message || e.errMsg || "request:fail" }));} });});});}var Ye = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];var Xe = /[\\^$.*+?()[\]{}|]/g,Ge = RegExp(Xe.source);function Qe(e, t, n) {return e.replace(new RegExp((s = t) && Ge.test(s) ? s.replace(Xe, "\\$&") : s, "g"), n);var s;}function Ze(_ref20) {var e = _ref20.functionName,t = _ref20.result,n = _ref20.logPvd;if (this.config.useDebugFunction && t && t.requestId) {var _s7 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t.requestId });console.log("[".concat(n, "-request]").concat(_s7, "[/").concat(n, "-request]"));}}function et(e) {var t = e.callFunction,n = function n(e) {var _this17 = this;var n = e.name;e.data = Ve({ name: n, data: e.data, provider: this.config.provider, spaceId: this.config.spaceId });var s = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider];return t.call(this, e).then(function (e) {return Ze.call(_this17, { functionName: n, result: e, logPvd: s }), Promise.resolve(e);}, function (t) {return Ze.call(_this17, { functionName: n, result: t, logPvd: s }), t && t.message && (t.message = function () {var _ref21 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref21$message = _ref21.message,e = _ref21$message === void 0 ? "" : _ref21$message,_ref21$extraInfo = _ref21.extraInfo,t = _ref21$extraInfo === void 0 ? {} : _ref21$extraInfo,_ref21$formatter = _ref21.formatter,n = _ref21$formatter === void 0 ? [] : _ref21$formatter;for (var _s8 = 0; _s8 < n.length; _s8++) {var _n$_s = n[_s8],_r3 = _n$_s.rule,_o2 = _n$_s.content,i = _n$_s.mode,_a = e.match(_r3);if (!_a) continue;var _c = _o2;for (var _e20 = 1; _e20 < _a.length; _e20++) {_c = Qe(_c, "{$".concat(_e20, "}"), _a[_e20]);}for (var _e21 in t) {_c = Qe(_c, "{".concat(_e21, "}"), t[_e21]);}switch (i) {case "replace":return _c;case "append":default:return e + _c;}}return e;}({ message: "[".concat(e.name, "]: ").concat(t.message), formatter: Ye, extraInfo: { functionName: n } })), Promise.reject(t);});};e.callFunction = function (t) {var s;return u && e.debugInfo && !e.debugInfo.forceRemote && d ? (e._originCallFunction || (e._originCallFunction = n), s = Je.call(this, t)) : s = n.call(this, t), Object.defineProperty(s, "result", { get: function get() {return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};} }), s;};}var tt = Symbol("CLIENT_DB_INTERNAL");function nt(e, t) {return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = tt, e.__v_raw = void 0, new Proxy(e, { get: function get(e, n, s) {return n in e || "string" != typeof n ? e[n] : t.get(e, n, s);} });}function st(e) {return e && st(e.__v_raw) || e;}function rt(e) {switch (o(e = st(e))) {case "array":return e.map(function (e) {return rt(e);});case "object":return e._internalType === tt || Object.keys(e).forEach(function (t) {e[t] = rt(e[t]);}), e;case "regexp":return { $regexp: { source: e.source, flags: e.flags } };case "date":return { $date: e.toISOString() };default:return e;}}function ot() {var e = q.getStorageSync("uni_id_token") || "",t = e.split(".");if (!e || 3 !== t.length) return { uid: null, role: [], permission: [], tokenExpired: 0 };var n;try {n = JSON.parse((s = t[1], decodeURIComponent(atob(s).split("").map(function (e) {return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);}).join(""))));} catch (e) {throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);}var s;return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n;}var it = t(n(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 });var n = "chooseAndUploadFile:ok",s = "chooseAndUploadFile:fail";function r(e, t) {return e.tempFiles.forEach(function (e, n) {e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));}), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {return e.path;})), e;}function o(e, t, _ref22) {var s = _ref22.onChooseFile,r = _ref22.onUploadProgress;return t.then(function (e) {if (s) {var _t9 = s(e);if (void 0 !== _t9) return Promise.resolve(_t9).then(function (t) {return void 0 === t ? e : t;});}return e;}).then(function (t) {return !1 === t ? { errMsg: n, tempFilePaths: [], tempFiles: [] } : function (e, t) {var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;var r = arguments.length > 3 ? arguments[3] : undefined;(t = Object.assign({}, t)).errMsg = n;var o = t.tempFiles,i = o.length;var a = 0;return new Promise(function (n) {for (; a < s;) {c();}function c() {var s = a++;if (s >= i) return void (!o.find(function (e) {return !e.url && !e.errMsg;}) && n(t));var u = o[s];e.uploadFile({ filePath: u.path, cloudPath: u.cloudPath, fileType: u.fileType, onUploadProgress: function onUploadProgress(e) {e.index = s, e.tempFile = u, e.tempFilePath = u.path, r && r(e);} }).then(function (e) {u.url = e.fileID, s < i && c();}).catch(function (e) {u.errMsg = e.errMsg || e.message, s < i && c();});}});}(e, t, 5, r);});}t.initChooseAndUploadFile = function (e) {return function () {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { type: "all" };return "image" === t.type ? o(e, function (e) {var t = e.count,n = e.sizeType,_e$sourceType = e.sourceType,o = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,i = e.extension;return new Promise(function (e, a) {uni.chooseImage({ count: t, sizeType: n, sourceType: o, extension: i, success: function success(t) {e(r(t, "image"));}, fail: function fail(e) {a({ errMsg: e.errMsg.replace("chooseImage:fail", s) });} });});}(t), t) : "video" === t.type ? o(e, function (e) {var t = e.camera,n = e.compressed,o = e.maxDuration,_e$sourceType2 = e.sourceType,i = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,a = e.extension;return new Promise(function (e, c) {uni.chooseVideo({ camera: t, compressed: n, maxDuration: o, sourceType: i, extension: a, success: function success(t) {var n = t.tempFilePath,s = t.duration,o = t.size,i = t.height,a = t.width;e(r({ errMsg: "chooseVideo:ok", tempFilePaths: [n], tempFiles: [{ name: t.tempFile && t.tempFile.name || "", path: n, size: o, type: t.tempFile && t.tempFile.type || "", width: a, height: i, duration: s, fileType: "video", cloudPath: "" }] }, "video"));}, fail: function fail(e) {c({ errMsg: e.errMsg.replace("chooseVideo:fail", s) });} });});}(t), t) : o(e, function (e) {var t = e.count,n = e.extension;return new Promise(function (e, o) {var i = uni.chooseFile;if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (i = wx.chooseMessageFile), "function" != typeof i) return o({ errMsg: s + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });i({ type: "all", count: t, extension: n, success: function success(t) {e(r(t));}, fail: function fail(e) {o({ errMsg: e.errMsg.replace("chooseFile:fail", s) });} });});}(t), t);};};}));var at = "manual";function ct(e) {return { props: { localdata: { type: Array, default: function _default() {return [];} }, options: { type: [Object, Array], default: function _default() {return {};} }, collection: { type: String, default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: !1 }, gettree: { type: [Boolean, String], default: !1 }, gettreepath: { type: [Boolean, String], default: !1 }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: !1 }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: !1 } }, data: function data() {return { mixinDatacomLoading: !1, mixinDatacomHasMore: !1, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} };}, created: function created() {var _this18 = this;this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(function () {var e = [];return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {e.push(_this18[t]);}), e;}, function (e, t) {if (_this18.loadtime === at) return;var n = !1;var s = [];for (var _r4 = 2; _r4 < e.length; _r4++) {e[_r4] !== t[_r4] && (s.push(e[_r4]), n = !0);}e[0] !== t[0] && (_this18.mixinDatacomPage.current = _this18.pageCurrent), _this18.mixinDatacomPage.size = _this18.pageSize, _this18.onMixinDatacomPropsChange(n, s);});}, methods: { onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {}, mixinDatacomEasyGet: function mixinDatacomEasyGet() {var _this19 = this;var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref23$getone = _ref23.getone,e = _ref23$getone === void 0 ? !1 : _ref23$getone,t = _ref23.success,n = _ref23.fail;this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then(function (n) {_this19.mixinDatacomLoading = !1;var _n$result = n.result,s = _n$result.data,r = _n$result.count;_this19.getcount && (_this19.mixinDatacomPage.count = r), _this19.mixinDatacomHasMore = s.length < _this19.pageSize;var o = e ? s.length ? s[0] : void 0 : s;_this19.mixinDatacomResData = o, t && t(o);}).catch(function (e) {_this19.mixinDatacomLoading = !1, _this19.mixinDatacomErrorMessage = e, n && n(e);}));}, mixinDatacomGet: function mixinDatacomGet() {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var n = e.database();var s = t.action || this.action;s && (n = n.action(s));var r = t.collection || this.collection;n = n.collection(r);var o = t.where || this.where;o && Object.keys(o).length && (n = n.where(o));var i = t.field || this.field;i && (n = n.field(i));var a = t.foreignKey || this.foreignKey;a && (n = n.foreignKey(a));var c = t.groupby || this.groupby;c && (n = n.groupBy(c));var u = t.groupField || this.groupField;u && (n = n.groupField(u));!0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());var h = t.orderby || this.orderby;h && (n = n.orderBy(h));var l = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,f = void 0 !== t.getcount ? t.getcount : this.getcount,p = void 0 !== t.gettree ? t.gettree : this.gettree,g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,m = { getCount: f },y = { limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel, startWith: void 0 !== t.startwith ? t.startwith : this.startwith };return p && (m.getTree = y), g && (m.getTreePath = y), n = n.skip(d * (l - 1)).limit(d).get(m), n;} } };}function ut(_x30, _x31) {return _ut.apply(this, arguments);}function _ut() {_ut = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee32(e, t) {var n, _e28, s;return _regenerator.default.wrap(function _callee32$(_context32) {while (1) {switch (_context32.prev = _context32.next) {case 0:n = "http://".concat(e, ":").concat(t, "/system/ping");_context32.prev = 1;_context32.next = 4;return s = { url: n, timeout: 500 }, new Promise(function (e, t) {q.request(_objectSpread(_objectSpread({}, s), {}, { success: function success(t) {e(t);}, fail: function fail(e) {t(e);} }));});case 4:_e28 = _context32.sent;return _context32.abrupt("return", !(!_e28.data || 0 !== _e28.data.code));case 8:_context32.prev = 8;_context32.t0 = _context32["catch"](1);return _context32.abrupt("return", !1);case 11:case "end":return _context32.stop();}}}, _callee32, null, [[1, 8]]);}));return _ut.apply(this, arguments);}var ht = new ( /*#__PURE__*/function () {function _class2() {_classCallCheck(this, _class2);}_createClass(_class2, [{ key: "init", value: function init(e) {var t = {};var n = !1 !== e.debugFunction && u && ("h5" === h && navigator.userAgent.indexOf("HBuilderX") > 0 || "app-plus" === h);switch (e.provider) {case "tencent":t = je.init(Object.assign(e, { useDebugFunction: n }));break;case "aliyun":t = L.init(Object.assign(e, { useDebugFunction: n }));break;case "private":t = He.init(Object.assign(e, { useDebugFunction: n }));break;default:throw new Error("未提供正确的provider参数");}var s = l;u && s && !s.code && (t.debugInfo = s);var r = Promise.resolve();var o;o = 1, r = new Promise(function (e, t) {setTimeout(function () {e();}, o);}), t.isReady = !1, t.isDefault = !1;var i = t.auth();t.initUniCloud = r.then(function () {return i.getLoginState();}).then(function (e) {return e ? Promise.resolve() : i.signInAnonymously();}).then(function () {if (u && t.debugInfo) {var _t$debugInfo = t.debugInfo,_e22 = _t$debugInfo.address,_n4 = _t$debugInfo.servePort;return function () {var _ref24 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee31(e, t) {var n, _s9, _r5;return _regenerator.default.wrap(function _callee31$(_context31) {while (1) {switch (_context31.prev = _context31.next) {case 0:_s9 = 0;case 1:if (!(_s9 < e.length)) {_context31.next = 11;break;}_r5 = e[_s9];_context31.next = 5;return ut(_r5, t);case 5:if (!_context31.sent) {_context31.next = 8;break;}n = _r5;return _context31.abrupt("break", 11);case 8:_s9++;_context31.next = 1;break;case 11:return _context31.abrupt("return", { address: n, port: t });case 12:case "end":return _context31.stop();}}}, _callee31);}));return function (_x32, _x33) {return _ref24.apply(this, arguments);};}()(_e22, _n4);}return Promise.resolve();}).then(function () {var _ref25 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref25.address,n = _ref25.port;if (!u) return Promise.resolve();if (e) t.localAddress = e, t.localPort = n;else if (t.debugInfo) {var _e23 = console["app-plus" === h ? "error" : "warn"];"remote" === t.debugInfo.initialLaunchType ? (t.debugInfo.forceRemote = !0, _e23("当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs")) : _e23("无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs");}}).then(function () {return function () {if (!u || "h5" !== h) return;if (uni.getStorageSync("__LAST_DCLOUD_APPID") === p) return;uni.setStorageSync("__LAST_DCLOUD_APPID", p), uni.removeStorageSync("uni_id_token") && (console.warn("检测到当前项目与上次运行到此端口的项目不一致，自动清理uni-id保存的token信息（仅开发调试时生效）"), uni.removeStorageSync("uni_id_token"), uni.removeStorageSync("uni_id_token_expired"));}(), new Promise(function (e) {"quickapp-native" === h ? (O = "android", uni.getStorage({ key: "__DC_CLOUD_UUID", success: function success(t) {b = t.data ? t.data : U(32), e();} })) : setTimeout(function () {O = uni.getSystemInfoSync().platform, b = uni.getStorageSync("__DC_CLOUD_UUID") || U(32), e();}, 0);});}).then(function () {t.isReady = !0;}), et(t), function (e) {var t = e.uploadFile;e.uploadFile = function (e) {var _this20 = this;var n;return n = this.isReady ? Promise.resolve() : this.initUniCloud, n.then(function () {return t.call(_this20, e);});};}(t), function (e) {e.database = function () {if (this._database) return this._database;var t = {};var n = {};function s(_ref26) {var s = _ref26.action,r = _ref26.command,o = _ref26.multiCommand;return S(k("database", "invoke")).then(function () {return e.callFunction({ name: "DCloud-clientDB", data: { action: s, command: r, multiCommand: o } });}).then(function (e) {var _e$result = e.result,s = _e$result.code,r = _e$result.message,o = _e$result.token,i = _e$result.tokenExpired,_e$result$systemInfo = _e$result.systemInfo,c = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;if (c) for (var _e24 = 0; _e24 < c.length; _e24++) {var _c$_e = c[_e24],_t10 = _c$_e.level,_n5 = _c$_e.message,_s10 = _c$_e.detail,_r6 = console["app-plus" === h && "warn" === _t10 ? "error" : _t10] || console.log;var _o3 = "[System Info]" + _n5;_s10 && (_o3 = "".concat(_o3, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_s10)), _r6(_o3);}if (s) {var _e25 = new a(r, s);return n.error && n.error.forEach(function (t) {t(_e25);}), Promise.reject(_e25);}o && i && (t.refreshToken && t.refreshToken.forEach(function (e) {e({ token: o, tokenExpired: i });}), n.refreshToken && n.refreshToken.forEach(function (e) {e({ token: o, tokenExpired: i });}));var u = e.result.affectedDocs;return "number" == typeof u && Object.defineProperty(e.result, "affectedDocs", { get: function get() {return console.warn("affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"), u;} }), S(k("database", "success"), e).then(function () {return S(k("database", "complete"), e);}).then(function () {return Promise.resolve(e);});}, function (e) {var t = new a(e.message, e.code || "SYSTEM_ERROR");return n.error && n.error.forEach(function (e) {e(t);}), /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB"), S(k("database", "fail"), e).then(function () {return S(k("database", "complete"), e);}).then(function () {return Promise.reject(e);});});}this.isDefault && (n = m("_globalUniCloudDatabaseCallback"));var r = /*#__PURE__*/function () {function r(e, t) {_classCallCheck(this, r);this.content = e, this.prevStage = t, this.udb = null;}_createClass(r, [{ key: "toJSON", value: function toJSON() {var e = this;var t = [e.content];for (; e.prevStage;) {e = e.prevStage, t.push(e.content);}return { $db: t.reverse().map(function (e) {return { $method: e.$method, $param: rt(e.$param) };}) };} }, { key: "getAction", value: function getAction() {var e = this.toJSON().$db.find(function (e) {return "action" === e.$method;});return e && e.$param && e.$param[0];} }, { key: "getCommand", value: function getCommand() {return { $db: this.toJSON().$db.filter(function (e) {return "action" !== e.$method;}) };} }, { key: "get", value: function get() {return this._send("get", Array.from(arguments));} }, { key: "add", value: function add() {return this._send("add", Array.from(arguments));} }, { key: "remove", value: function remove() {return this._send("remove", Array.from(arguments));} }, { key: "update", value: function update() {return this._send("update", Array.from(arguments));} }, { key: "end", value: function end() {return this._send("end", Array.from(arguments));} }, { key: "set", value: function set() {throw new Error("clientDB禁止使用set方法");} }, { key: "_send", value: function _send(e, t) {var n = this.getAction(),r = this.getCommand();return r.$db.push({ $method: e, $param: rt(t) }), s({ action: n, command: r });} }, { key: "useAggregate", get: function get() {var e = this,t = !1;for (; e.prevStage;) {e = e.prevStage;var _n6 = e.content.$method;if ("aggregate" === _n6 || "pipeline" === _n6) {t = !0;break;}}return t;} }, { key: "count", get: function get() {if (!this.useAggregate) return function () {return this._send("count", Array.from(arguments));};var e = this;return function () {return c({ $method: "count", $param: rt(Array.from(arguments)) }, e);};} }, { key: "multiSend", get: function get() {} }]);return r;}();var o = ["db.Geo", "db.command", "command.aggregate"];function i(e, t) {return o.indexOf("".concat(e, ".").concat(t)) > -1;}function c(e, t) {return nt(new r(e, t), { get: function get(e, t) {var n = "db";return e && e.content && (n = e.content.$method), i(n, t) ? c({ $method: t }, e) : function () {return c({ $method: t, $param: rt(Array.from(arguments)) }, e);};}, set: function set(e, t, n) {e[t] = n;} });}function u(_ref27) {var e = _ref27.path,t = _ref27.method;return /*#__PURE__*/function () {function _class3() {_classCallCheck(this, _class3);this.param = Array.from(arguments);}_createClass(_class3, [{ key: "toJSON", value: function toJSON() {return { $newDb: [].concat(_toConsumableArray(e.map(function (e) {return { $method: e };})), [{ $method: t, $param: this.param }]) };} }]);return _class3;}();}var l = { auth: { on: function on(e, n) {t[e] = t[e] || [], t[e].indexOf(n) > -1 || t[e].push(n);}, off: function off(e, n) {t[e] = t[e] || [];var s = t[e].indexOf(n);-1 !== s && t[e].splice(s, 1);} }, on: function on(e, t) {n[e] = n[e] || [], n[e].indexOf(t) > -1 || n[e].push(t);}, off: function off(e, t) {n[e] = n[e] || [];var s = n[e].indexOf(t);-1 !== s && n[e].splice(s, 1);}, env: nt({}, { get: function get(e, t) {return { $env: t };} }), Geo: nt({}, { get: function get(e, t) {return u({ path: ["Geo"], method: t });} }), getCloudEnv: function getCloudEnv(e) {if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");return { $env: e.replace("$cloudEnv_", "") };}, multiSend: function multiSend() {var e = Array.from(arguments);return s({ multiCommand: e.map(function (e) {var t = e.getAction(),n = e.getCommand();if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");return { action: t, command: n };}) }).then(function (t) {for (var _n7 = 0; _n7 < e.length; _n7++) {var _s11 = e[_n7];_s11.udb && "function" == typeof _s11.udb.setResult && _s11.udb.setResult(t.result.dataList[_n7]);}return Promise.resolve(t);}, function (t) {for (var _n8 = 0; _n8 < e.length; _n8++) {var _s12 = e[_n8];_s12.udb && "function" == typeof _s12.udb.setResult && _s12.udb.setResult(t);}return Promise.reject(t);});}, get serverDate() {return u({ path: [], method: "serverDate" });}, get RegExp() {return u({ path: [], method: "RegExp" });} },d = nt(l, { get: function get(e, t) {return i("db", t) ? c({ $method: t }) : function () {return c({ $method: t, $param: rt(Array.from(arguments)) });};} });return this._database = d, d;};}(t), function (e) {e.getCurrentUserInfo = ot, e.chooseAndUploadFile = it.initChooseAndUploadFile(e), Object.assign(e, { get mixinDatacom() {return ct(e);} });}(t);return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {t[e] && (t[e] = T(t[e], e));}), t.init = this.init, t;} }]);return _class2;}())();(function () {{var e = d;var t = {};if (1 === e.length) t = e[0], ht = ht.init(t), ht.isDefault = !0;else {var _t11 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo"];var _n9;_n9 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : f ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", _t11.forEach(function (e) {ht[e] = function () {return console.error(_n9), Promise.reject(new P({ code: "SYS_ERR", message: _n9 }));};});}Object.assign(ht, { get mixinDatacom() {return ct(ht);} }), ht.addInterceptor = w, ht.removeInterceptor = v, u && "h5" === h && (window.uniCloud = ht);}})();var lt = ht;var _default2 = lt;exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 12), __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 11)["default"]))

/***/ }),
/* 17 */
/*!**************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.esm.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.initVueI18n = initVueI18n;exports.I18n = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isObject = function isObject(val) {return val !== null && typeof val === 'object';};var
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

/***/ }),
/* 18 */
/*!******************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages.json?{"type":"stat"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__EC766A8" };exports.default = _default;

/***/ }),
/* 19 */
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
/* 20 */
/*!***************************************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/propertyPage/propertyPage.vue?mpType=page ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _propertyPage_vue_vue_type_template_id_1dd0da54_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./propertyPage.vue?vue&type=template&id=1dd0da54&mpType=page */ 21);\n/* harmony import */ var _propertyPage_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./propertyPage.js?vue&type=script&lang=js&mpType=page */ 23);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _propertyPage_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _propertyPage_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _propertyPage_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _propertyPage_vue_vue_type_template_id_1dd0da54_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _propertyPage_vue_vue_type_template_id_1dd0da54_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _propertyPage_vue_vue_type_template_id_1dd0da54_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/propertyPage/propertyPage.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0k7QUFDcEk7QUFDMEU7QUFDTDs7O0FBR3JFO0FBQ3VLO0FBQ3ZLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxrR0FBTTtBQUNSLEVBQUUsMkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3Byb3BlcnR5UGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWRkMGRhNTQmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Byb3BlcnR5UGFnZS5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9wcm9wZXJ0eVBhZ2UuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvcHJvcGVydHlQYWdlL3Byb3BlcnR5UGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*********************************************************************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/propertyPage/propertyPage.vue?vue&type=template&id=1dd0da54&mpType=page ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_propertyPage_vue_vue_type_template_id_1dd0da54_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./propertyPage.vue?vue&type=template&id=1dd0da54&mpType=page */ 22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_propertyPage_vue_vue_type_template_id_1dd0da54_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_propertyPage_vue_vue_type_template_id_1dd0da54_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_propertyPage_vue_vue_type_template_id_1dd0da54_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_propertyPage_vue_vue_type_template_id_1dd0da54_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 22 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/propertyPage/propertyPage.vue?vue&type=template&id=1dd0da54&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", [
    _c(
      "view",
      {
        staticClass: _vm._$s(1, "sc", "page"),
        attrs: {
          "data-weui-theme": _vm._$s(1, "a-data-weui-theme", _vm.theme),
          _i: 1
        }
      },
      [
        _c(
          "view",
          { staticClass: _vm._$s(2, "sc", "weui-form"), attrs: { _i: 2 } },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s(3, "sc", "weui-form__text-area"),
                attrs: { _i: 3 }
              },
              [
                _c(
                  "h2",
                  {
                    staticClass: _vm._$s(4, "sc", "page__title"),
                    attrs: { _i: 4 }
                  },
                  [_vm._v(_vm._$s(4, "t0-0", _vm._s(_vm.mainTitle)))]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(5, "sc", "weui-form__desc"),
                    attrs: { _i: 5 }
                  },
                  [_vm._v(_vm._$s(5, "t0-0", _vm._s(_vm.subTips)))]
                )
              ]
            ),
            _vm._$s(6, "i", !_vm.ZCTProductURL)
              ? _c(
                  "view",
                  {
                    staticClass: _vm._$s(6, "sc", "pm-TC-new"),
                    attrs: { _i: 6 },
                    on: { click: _vm.onGetPic }
                  },
                  [
                    _c("view", {
                      staticClass: _vm._$s(7, "sc", "pm-TC-Txt"),
                      attrs: { _i: 7 }
                    }),
                    _c("view", {
                      staticClass: _vm._$s(8, "sc", "pm-TC-Txt"),
                      attrs: { _i: 8 }
                    })
                  ]
                )
              : _vm._e(),
            _vm._$s(9, "i", _vm.ZCTProductURL)
              ? _c("image", {
                  staticClass: _vm._$s(9, "sc", "pm-product-image"),
                  style: _vm._$s(9, "s", _vm.PicselectedStyle),
                  attrs: { src: _vm._$s(9, "a-src", _vm.ZCTProductURL), _i: 9 },
                  on: { click: _vm.onGetPic }
                })
              : _vm._e(),
            _c(
              "view",
              {
                staticClass: _vm._$s(10, "sc", "weui-form__control-area"),
                attrs: { _i: 10 }
              },
              [
                _vm._$s(11, "i", _vm.fillBlock)
                  ? [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(
                            12,
                            "sc",
                            "pm-cells__group pm-cells__group_form"
                          ),
                          attrs: { _i: 12 }
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(13, "sc", "pm-cells__title"),
                              attrs: { _i: 13 }
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  13,
                                  "t0-0",
                                  _vm._s(_vm.fillBlock.fillRemind)
                                )
                              )
                            ]
                          ),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                14,
                                "sc",
                                "pm-cells pm-cells_form"
                              ),
                              attrs: { _i: 14 }
                            },
                            [
                              _vm._$s(15, "i", _vm.IsFillHelp)
                                ? [
                                    _c(
                                      "view",
                                      {
                                        staticClass: _vm._$s(
                                          16,
                                          "sc",
                                          "pm-cell"
                                        ),
                                        attrs: { _i: 16 }
                                      },
                                      [
                                        _c("label", {
                                          staticClass: _vm._$s(
                                            17,
                                            "sc",
                                            "pm-inputlabel"
                                          ),
                                          attrs: { _i: 17 }
                                        }),
                                        _c("switch", {
                                          attrs: {
                                            checked: _vm._$s(
                                              18,
                                              "a-checked",
                                              _vm.IsFillHelpSwitch
                                            ),
                                            _i: 18
                                          },
                                          on: { change: _vm.onAtuoSwitchChange }
                                        }),
                                        _c("label", {
                                          staticClass: _vm._$s(
                                            19,
                                            "sc",
                                            "pm-inputlabel"
                                          ),
                                          attrs: { _i: 19 }
                                        }),
                                        _c("switch", {
                                          attrs: {
                                            checked: _vm._$s(
                                              20,
                                              "a-checked",
                                              _vm.IsFillHelpSwitchByPO
                                            ),
                                            _i: 20
                                          },
                                          on: {
                                            change: _vm.onAtuoSwitchChangeByPO
                                          }
                                        }),
                                        _c("label", {
                                          staticClass: _vm._$s(
                                            21,
                                            "sc",
                                            "pm-inputlabel"
                                          ),
                                          attrs: { _i: 21 }
                                        }),
                                        _c("switch", {
                                          attrs: {
                                            checked: _vm._$s(
                                              22,
                                              "a-checked",
                                              _vm.IsFillHelpSwitchByNum
                                            ),
                                            _i: 22
                                          },
                                          on: {
                                            change: _vm.onAtuoSwitchChangeByNum
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                : _vm._e(),
                              _vm._l(
                                _vm._$s(23, "f", {
                                  forItems: _vm.fillBlock.fillItemList
                                }),
                                function(fillItem, index, $20, $30) {
                                  return _vm._$s(
                                    "23-" + $30,
                                    "i",
                                    _vm.fillBlock.fillItemList
                                  )
                                    ? [
                                        _c(
                                          "view",
                                          {
                                            key: _vm._$s(23, "f", {
                                              forIndex: $20,
                                              keyIndex: 0,
                                              key: index + "_0"
                                            }),
                                            staticClass: _vm._$s(
                                              "24-" + $30,
                                              "sc",
                                              "pm-cells pm-cell_active"
                                            ),
                                            attrs: { _i: "24-" + $30 }
                                          },
                                          [
                                            _vm._$s(
                                              "25-" + $30,
                                              "i",
                                              !fillItem.fillHelpList &&
                                                fillItem.fillType != "DATE" &&
                                                fillItem.fillType != "TIME" &&
                                                fillItem.fillTitle ==
                                                  "费用及相关说明" &&
                                                fillItem.fillTitle !=
                                                  "生产环境及任务相关图片"
                                            )
                                              ? [
                                                  _c(
                                                    "view",
                                                    {
                                                      staticClass: _vm._$s(
                                                        "26-" + $30,
                                                        "sc",
                                                        "pm-cell"
                                                      ),
                                                      attrs: { _i: "26-" + $30 }
                                                    },
                                                    [
                                                      _c(
                                                        "view",
                                                        {
                                                          staticClass: _vm._$s(
                                                            "27-" + $30,
                                                            "sc",
                                                            "weui-cell__bd"
                                                          ),
                                                          attrs: {
                                                            _i: "27-" + $30
                                                          }
                                                        },
                                                        [
                                                          _c("textarea", {
                                                            staticClass: _vm._$s(
                                                              "28-" + $30,
                                                              "sc",
                                                              "weui-textarea"
                                                            ),
                                                            attrs: {
                                                              placeholder: _vm._$s(
                                                                "28-" + $30,
                                                                "a-placeholder",
                                                                fillItem.fillTip
                                                              ),
                                                              disabled: _vm._$s(
                                                                "28-" + $30,
                                                                "a-disabled",
                                                                fillItem.filldisabled
                                                              ),
                                                              type: _vm._$s(
                                                                "28-" + $30,
                                                                "a-type",
                                                                fillItem.fillType
                                                              ),
                                                              maxlength: _vm._$s(
                                                                "28-" + $30,
                                                                "a-maxlength",
                                                                fillItem.maxlength
                                                              ),
                                                              id: _vm._$s(
                                                                "28-" + $30,
                                                                "a-id",
                                                                fillItem._id
                                                              ),
                                                              value: _vm._$s(
                                                                "28-" + $30,
                                                                "a-value",
                                                                fillItem.fillValue
                                                              ),
                                                              _i: "28-" + $30
                                                            },
                                                            on: {
                                                              input:
                                                                _vm.bindTxtChange
                                                            }
                                                          }),
                                                          _c(
                                                            "view",
                                                            {
                                                              staticClass: _vm._$s(
                                                                "29-" + $30,
                                                                "sc",
                                                                "weui-textarea-counter"
                                                              ),
                                                              attrs: {
                                                                _i: "29-" + $30
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._$s(
                                                                  "29-" + $30,
                                                                  "t0-0",
                                                                  _vm._s(
                                                                    fillItem.inputNumWords
                                                                  )
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              : _vm._e(),
                                            _vm._$s(
                                              "30-" + $30,
                                              "i",
                                              !fillItem.fillHelpList &&
                                                fillItem.fillType != "DATE" &&
                                                fillItem.fillType != "TIME" &&
                                                fillItem.fillTitle !=
                                                  "费用及相关说明" &&
                                                fillItem.fillTitle !=
                                                  "生产环境及任务相关图片"
                                            )
                                              ? [
                                                  _c(
                                                    "view",
                                                    {
                                                      staticClass: _vm._$s(
                                                        "31-" + $30,
                                                        "sc",
                                                        "pm-cell"
                                                      ),
                                                      attrs: { _i: "31-" + $30 }
                                                    },
                                                    [
                                                      _c(
                                                        "view",
                                                        {
                                                          staticClass: _vm._$s(
                                                            "32-" + $30,
                                                            "sc",
                                                            "weui-cell__hd"
                                                          ),
                                                          attrs: {
                                                            _i: "32-" + $30
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              staticClass: _vm._$s(
                                                                "33-" + $30,
                                                                "sc",
                                                                "weui-label"
                                                              ),
                                                              attrs: {
                                                                _i: "33-" + $30
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._$s(
                                                                  "33-" + $30,
                                                                  "t0-0",
                                                                  _vm._s(
                                                                    fillItem.fillTitle
                                                                  )
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      ),
                                                      _c(
                                                        "view",
                                                        {
                                                          staticClass: _vm._$s(
                                                            "34-" + $30,
                                                            "sc",
                                                            "weui-cell__bd"
                                                          ),
                                                          attrs: {
                                                            _i: "34-" + $30
                                                          }
                                                        },
                                                        [
                                                          _c("input", {
                                                            staticClass: _vm._$s(
                                                              "35-" + $30,
                                                              "sc",
                                                              "weui-input"
                                                            ),
                                                            attrs: {
                                                              placeholder: _vm._$s(
                                                                "35-" + $30,
                                                                "a-placeholder",
                                                                fillItem.fillTip
                                                              ),
                                                              disabled: _vm._$s(
                                                                "35-" + $30,
                                                                "a-disabled",
                                                                fillItem.filldisabled
                                                              ),
                                                              type: _vm._$s(
                                                                "35-" + $30,
                                                                "a-type",
                                                                fillItem.fillType
                                                              ),
                                                              maxlength: _vm._$s(
                                                                "35-" + $30,
                                                                "a-maxlength",
                                                                fillItem.maxlength
                                                              ),
                                                              id: _vm._$s(
                                                                "35-" + $30,
                                                                "a-id",
                                                                fillItem._id
                                                              ),
                                                              value: _vm._$s(
                                                                "35-" + $30,
                                                                "a-value",
                                                                fillItem.fillValue
                                                              ),
                                                              _i: "35-" + $30
                                                            },
                                                            on: {
                                                              input:
                                                                _vm.bindTxtChange,
                                                              blur:
                                                                _vm.bindProductName
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              : _vm._e(),
                                            _vm._$s(
                                              "36-" + $30,
                                              "i",
                                              fillItem._id == "PMInnerProductID"
                                            )
                                              ? _c(
                                                  "scroll-view",
                                                  {
                                                    staticClass: _vm._$s(
                                                      "36-" + $30,
                                                      "sc",
                                                      "Association"
                                                    ),
                                                    style: _vm._$s(
                                                      "36-" + $30,
                                                      "s",
                                                      _vm.arrayHeight > 340
                                                        ? "height:340rpx"
                                                        : ""
                                                    ),
                                                    attrs: {
                                                      hidden: _vm._$s(
                                                        "36-" + $30,
                                                        "a-hidden",
                                                        _vm.hideScroll
                                                      ),
                                                      _i: "36-" + $30
                                                    }
                                                  },
                                                  _vm._l(
                                                    _vm._$s(
                                                      37 + "-" + $30,
                                                      "f",
                                                      {
                                                        forItems: _vm.bindSource
                                                      }
                                                    ),
                                                    function(
                                                      item,
                                                      index2,
                                                      $21,
                                                      $31
                                                    ) {
                                                      return _c(
                                                        "view",
                                                        {
                                                          key: _vm._$s(
                                                            37 + "-" + $30,
                                                            "f",
                                                            {
                                                              forIndex: $21,
                                                              key: index2
                                                            }
                                                          )
                                                        },
                                                        [
                                                          _c(
                                                            "view",
                                                            {
                                                              attrs: {
                                                                id: _vm._$s(
                                                                  "38-" +
                                                                    $30 +
                                                                    "-" +
                                                                    $31,
                                                                  "a-id",
                                                                  item
                                                                ),
                                                                _i:
                                                                  "38-" +
                                                                  $30 +
                                                                  "-" +
                                                                  $31
                                                              },
                                                              on: {
                                                                click:
                                                                  _vm.itemtap
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._$s(
                                                                  "38-" +
                                                                    $30 +
                                                                    "-" +
                                                                    $31,
                                                                  "t0-0",
                                                                  _vm._s(item)
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    }
                                                  ),
                                                  0
                                                )
                                              : _vm._e(),
                                            _vm._$s(
                                              "39-" + $30,
                                              "i",
                                              !fillItem.fillHelpList &&
                                                fillItem.fillType == "DATE"
                                            )
                                              ? [
                                                  _c(
                                                    "view",
                                                    {
                                                      staticClass: _vm._$s(
                                                        "40-" + $30,
                                                        "sc",
                                                        "pm-cell"
                                                      ),
                                                      attrs: { _i: "40-" + $30 }
                                                    },
                                                    [
                                                      _c(
                                                        "view",
                                                        {
                                                          staticClass: _vm._$s(
                                                            "41-" + $30,
                                                            "sc",
                                                            "weui-cell__hd"
                                                          ),
                                                          attrs: {
                                                            _i: "41-" + $30
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              staticClass: _vm._$s(
                                                                "42-" + $30,
                                                                "sc",
                                                                "weui-label"
                                                              ),
                                                              attrs: {
                                                                _i: "42-" + $30
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._$s(
                                                                  "42-" + $30,
                                                                  "t0-0",
                                                                  _vm._s(
                                                                    fillItem.fillTitle
                                                                  )
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      ),
                                                      _c(
                                                        "view",
                                                        {
                                                          staticClass: _vm._$s(
                                                            "43-" + $30,
                                                            "sc",
                                                            "weui-cell__bd"
                                                          ),
                                                          attrs: {
                                                            _i: "43-" + $30
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "picker",
                                                            {
                                                              staticClass: _vm._$s(
                                                                "44-" + $30,
                                                                "sc",
                                                                "weui-input"
                                                              ),
                                                              attrs: {
                                                                disabled: _vm._$s(
                                                                  "44-" + $30,
                                                                  "a-disabled",
                                                                  fillItem.filldisabled
                                                                ),
                                                                id: _vm._$s(
                                                                  "44-" + $30,
                                                                  "a-id",
                                                                  fillItem._id
                                                                ),
                                                                value: _vm._$s(
                                                                  "44-" + $30,
                                                                  "a-value",
                                                                  fillItem.fillValue
                                                                ),
                                                                start: _vm._$s(
                                                                  "44-" + $30,
                                                                  "a-start",
                                                                  fillItem.startDate
                                                                ),
                                                                end: _vm._$s(
                                                                  "44-" + $30,
                                                                  "a-end",
                                                                  fillItem.endDate
                                                                ),
                                                                _i: "44-" + $30
                                                              },
                                                              on: {
                                                                change:
                                                                  _vm.bindDateChange
                                                              }
                                                            },
                                                            [
                                                              _c("input", {
                                                                staticClass: _vm._$s(
                                                                  "45-" + $30,
                                                                  "sc",
                                                                  "weui-input"
                                                                ),
                                                                attrs: {
                                                                  placeholder: _vm._$s(
                                                                    "45-" + $30,
                                                                    "a-placeholder",
                                                                    fillItem.fillTip
                                                                  ),
                                                                  maxlength: _vm._$s(
                                                                    "45-" + $30,
                                                                    "a-maxlength",
                                                                    fillItem.maxlength
                                                                  ),
                                                                  value: _vm._$s(
                                                                    "45-" + $30,
                                                                    "a-value",
                                                                    fillItem.fillValue
                                                                  ),
                                                                  _i:
                                                                    "45-" + $30
                                                                }
                                                              })
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              : _vm._e(),
                                            _vm._$s(
                                              "46-" + $30,
                                              "i",
                                              !fillItem.fillHelpList &&
                                                fillItem.fillType == "TIME"
                                            )
                                              ? [
                                                  _c(
                                                    "view",
                                                    {
                                                      staticClass: _vm._$s(
                                                        "47-" + $30,
                                                        "sc",
                                                        "pm-cell"
                                                      ),
                                                      attrs: { _i: "47-" + $30 }
                                                    },
                                                    [
                                                      _c(
                                                        "view",
                                                        {
                                                          staticClass: _vm._$s(
                                                            "48-" + $30,
                                                            "sc",
                                                            "weui-cell__hd"
                                                          ),
                                                          attrs: {
                                                            _i: "48-" + $30
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              staticClass: _vm._$s(
                                                                "49-" + $30,
                                                                "sc",
                                                                "weui-label"
                                                              ),
                                                              attrs: {
                                                                _i: "49-" + $30
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._$s(
                                                                  "49-" + $30,
                                                                  "t0-0",
                                                                  _vm._s(
                                                                    fillItem.fillTitle
                                                                  )
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      ),
                                                      _c(
                                                        "view",
                                                        {
                                                          staticClass: _vm._$s(
                                                            "50-" + $30,
                                                            "sc",
                                                            "weui-cell__bd"
                                                          ),
                                                          attrs: {
                                                            _i: "50-" + $30
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "picker",
                                                            {
                                                              staticClass: _vm._$s(
                                                                "51-" + $30,
                                                                "sc",
                                                                "weui-input"
                                                              ),
                                                              attrs: {
                                                                disabled: _vm._$s(
                                                                  "51-" + $30,
                                                                  "a-disabled",
                                                                  fillItem.filldisabled
                                                                ),
                                                                id: _vm._$s(
                                                                  "51-" + $30,
                                                                  "a-id",
                                                                  fillItem._id
                                                                ),
                                                                value: _vm._$s(
                                                                  "51-" + $30,
                                                                  "a-value",
                                                                  fillItem.fillValue
                                                                ),
                                                                start: _vm._$s(
                                                                  "51-" + $30,
                                                                  "a-start",
                                                                  fillItem.startTime
                                                                ),
                                                                end: _vm._$s(
                                                                  "51-" + $30,
                                                                  "a-end",
                                                                  fillItem.endTime
                                                                ),
                                                                _i: "51-" + $30
                                                              },
                                                              on: {
                                                                change:
                                                                  _vm.bindTimeChange
                                                              }
                                                            },
                                                            [
                                                              _c("input", {
                                                                staticClass: _vm._$s(
                                                                  "52-" + $30,
                                                                  "sc",
                                                                  "weui-input"
                                                                ),
                                                                attrs: {
                                                                  placeholder: _vm._$s(
                                                                    "52-" + $30,
                                                                    "a-placeholder",
                                                                    fillItem.fillTip
                                                                  ),
                                                                  maxlength: _vm._$s(
                                                                    "52-" + $30,
                                                                    "a-maxlength",
                                                                    fillItem.maxlength
                                                                  ),
                                                                  value: _vm._$s(
                                                                    "52-" + $30,
                                                                    "a-value",
                                                                    fillItem.fillValue
                                                                  ),
                                                                  _i:
                                                                    "52-" + $30
                                                                }
                                                              })
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              : _vm._e(),
                                            _vm._$s(
                                              "53-" + $30,
                                              "i",
                                              fillItem.fillTitle ==
                                                "生产环境及任务相关图片"
                                            )
                                              ? [
                                                  _c(
                                                    "view",
                                                    {
                                                      staticClass: _vm._$s(
                                                        "54-" + $30,
                                                        "sc",
                                                        "weui-uploader__hd"
                                                      ),
                                                      attrs: { _i: "54-" + $30 }
                                                    },
                                                    [
                                                      _c(
                                                        "view",
                                                        {
                                                          staticClass: _vm._$s(
                                                            "55-" + $30,
                                                            "sc",
                                                            "weui-uploader__overview"
                                                          ),
                                                          attrs: {
                                                            _i: "55-" + $30
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "view",
                                                            {
                                                              staticClass: _vm._$s(
                                                                "56-" + $30,
                                                                "sc",
                                                                "weui-uploader__title"
                                                              ),
                                                              attrs: {
                                                                _i: "56-" + $30
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._$s(
                                                                  "56-" + $30,
                                                                  "t0-0",
                                                                  _vm._s(
                                                                    fillItem.fillTitle
                                                                  )
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _c(
                                                    "view",
                                                    {
                                                      staticClass: _vm._$s(
                                                        "57-" + $30,
                                                        "sc",
                                                        "weui-cell__bd"
                                                      ),
                                                      attrs: { _i: "57-" + $30 }
                                                    },
                                                    [
                                                      _c(
                                                        "view",
                                                        {
                                                          staticClass: _vm._$s(
                                                            "58-" + $30,
                                                            "sc",
                                                            "weui-uploader__files"
                                                          ),
                                                          attrs: {
                                                            id: "uploaderFiles",
                                                            _i: "58-" + $30
                                                          }
                                                        },
                                                        [
                                                          _vm._l(
                                                            _vm._$s(
                                                              59 + "-" + $30,
                                                              "f",
                                                              {
                                                                forItems:
                                                                  fillItem.fillImgLst
                                                              }
                                                            ),
                                                            function(
                                                              fillItemimg,
                                                              index2,
                                                              $22,
                                                              $32
                                                            ) {
                                                              return [
                                                                _c(
                                                                  "view",
                                                                  {
                                                                    key: _vm._$s(
                                                                      59 +
                                                                        "-" +
                                                                        $30,
                                                                      "f",
                                                                      {
                                                                        forIndex: $22,
                                                                        keyIndex: 0,
                                                                        key:
                                                                          index2 +
                                                                          "_0"
                                                                      }
                                                                    ),
                                                                    staticClass: _vm._$s(
                                                                      "60-" +
                                                                        $30 +
                                                                        "-" +
                                                                        $32,
                                                                      "sc",
                                                                      "weui-uploader__file"
                                                                    ),
                                                                    attrs: {
                                                                      id: _vm._$s(
                                                                        "60-" +
                                                                          $30 +
                                                                          "-" +
                                                                          $32,
                                                                        "a-id",
                                                                        fillItemimg
                                                                      ),
                                                                      _i:
                                                                        "60-" +
                                                                        $30 +
                                                                        "-" +
                                                                        $32
                                                                    },
                                                                    on: {
                                                                      longpress:
                                                                        _vm.deleteImage,
                                                                      click:
                                                                        _vm.previewImage
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "image",
                                                                      {
                                                                        staticClass: _vm._$s(
                                                                          "61-" +
                                                                            $30 +
                                                                            "-" +
                                                                            $32,
                                                                          "sc",
                                                                          "weui-uploader__img"
                                                                        ),
                                                                        attrs: {
                                                                          src: _vm._$s(
                                                                            "61-" +
                                                                              $30 +
                                                                              "-" +
                                                                              $32,
                                                                            "a-src",
                                                                            fillItemimg
                                                                          ),
                                                                          _i:
                                                                            "61-" +
                                                                            $30 +
                                                                            "-" +
                                                                            $32
                                                                        }
                                                                      }
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            }
                                                          )
                                                        ],
                                                        2
                                                      ),
                                                      _vm._$s(
                                                        "62-" + $30,
                                                        "i",
                                                        fillItem.AddPic
                                                      )
                                                        ? _c(
                                                            "view",
                                                            {
                                                              staticClass: _vm._$s(
                                                                "62-" + $30,
                                                                "sc",
                                                                "weui-uploader__input-box"
                                                              ),
                                                              attrs: {
                                                                _i: "62-" + $30
                                                              }
                                                            },
                                                            [
                                                              _c("view", {
                                                                staticClass: _vm._$s(
                                                                  "63-" + $30,
                                                                  "sc",
                                                                  "weui-uploader__input"
                                                                ),
                                                                attrs: {
                                                                  _i:
                                                                    "63-" + $30
                                                                },
                                                                on: {
                                                                  click:
                                                                    _vm.chooseImage
                                                                }
                                                              })
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    ]
                                                  )
                                                ]
                                              : _vm._e(),
                                            _vm._$s(
                                              "64-" + $30,
                                              "i",
                                              fillItem.fillHelpList &&
                                                fillItem.fillTitle !=
                                                  "生产环境及任务相关图片"
                                            )
                                              ? [
                                                  _c(
                                                    "view",
                                                    {
                                                      staticClass: _vm._$s(
                                                        "65-" + $30,
                                                        "sc",
                                                        "pm-cell"
                                                      ),
                                                      attrs: { _i: "65-" + $30 }
                                                    },
                                                    [
                                                      _c(
                                                        "view",
                                                        {
                                                          staticClass: _vm._$s(
                                                            "66-" + $30,
                                                            "sc",
                                                            "weui-cell__hd"
                                                          ),
                                                          attrs: {
                                                            _i: "66-" + $30
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              staticClass: _vm._$s(
                                                                "67-" + $30,
                                                                "sc",
                                                                "weui-label"
                                                              ),
                                                              attrs: {
                                                                _i: "67-" + $30
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._$s(
                                                                  "67-" + $30,
                                                                  "t0-0",
                                                                  _vm._s(
                                                                    fillItem.fillTitle
                                                                  )
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      ),
                                                      _c(
                                                        "view",
                                                        {
                                                          staticClass: _vm._$s(
                                                            "68-" + $30,
                                                            "sc",
                                                            "weui-cell__bd"
                                                          ),
                                                          attrs: {
                                                            _i: "68-" + $30
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "picker",
                                                            {
                                                              staticClass: _vm._$s(
                                                                "69-" + $30,
                                                                "sc",
                                                                "weui-input"
                                                              ),
                                                              attrs: {
                                                                id: _vm._$s(
                                                                  "69-" + $30,
                                                                  "a-id",
                                                                  fillItem._id
                                                                ),
                                                                disabled: _vm._$s(
                                                                  "69-" + $30,
                                                                  "a-disabled",
                                                                  fillItem.filldisabled
                                                                ),
                                                                value: _vm._$s(
                                                                  "69-" + $30,
                                                                  "a-value",
                                                                  fillItem.fillHelpIndex
                                                                ),
                                                                range: _vm._$s(
                                                                  "69-" + $30,
                                                                  "a-range",
                                                                  fillItem.fillHelpList
                                                                ),
                                                                _i: "69-" + $30
                                                              },
                                                              on: {
                                                                change:
                                                                  _vm.bindListChange
                                                              }
                                                            },
                                                            [
                                                              _c("input", {
                                                                staticClass: _vm._$s(
                                                                  "70-" + $30,
                                                                  "sc",
                                                                  "weui-input"
                                                                ),
                                                                attrs: {
                                                                  placeholder: _vm._$s(
                                                                    "70-" + $30,
                                                                    "a-placeholder",
                                                                    fillItem.fillTip
                                                                  ),
                                                                  type: _vm._$s(
                                                                    "70-" + $30,
                                                                    "a-type",
                                                                    fillItem.fillType
                                                                  ),
                                                                  maxlength: _vm._$s(
                                                                    "70-" + $30,
                                                                    "a-maxlength",
                                                                    fillItem.maxlength
                                                                  ),
                                                                  value: _vm._$s(
                                                                    "70-" + $30,
                                                                    "a-value",
                                                                    fillItem
                                                                      .fillHelpList[
                                                                      fillItem
                                                                        .fillHelpIndex
                                                                    ]
                                                                  ),
                                                                  _i:
                                                                    "70-" + $30
                                                                }
                                                              })
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              : _vm._e()
                                          ],
                                          2
                                        )
                                      ]
                                    : _vm._e()
                                }
                              )
                            ],
                            2
                          )
                        ]
                      ),
                      _vm._$s(71, "i", _vm.IsPIlength)
                        ? _c("view", [
                            _vm._$s(72, "i", _vm.dataType == "POAddNew")
                              ? _c("view", [
                                  _vm._$s(73, "i", _vm.PMPIList)
                                    ? _c(
                                        "scroll-view",
                                        {
                                          staticClass: _vm._$s(
                                            73,
                                            "sc",
                                            "pm-LeftRight_Show"
                                          ),
                                          attrs: { _i: 73 },
                                          on: { scroll: _vm.scroll }
                                        },
                                        [
                                          _c(
                                            "view",
                                            {
                                              style: _vm._$s(
                                                74,
                                                "s",
                                                "min-width: " +
                                                  _vm.calMWidth +
                                                  "px; width: " +
                                                  _vm.calMWidth +
                                                  "px;"
                                              ),
                                              attrs: {
                                                id: "animationPOChangeover",
                                                _i: 74
                                              }
                                            },
                                            [
                                              _c(
                                                "view",
                                                {
                                                  style: _vm._$s(
                                                    75,
                                                    "s",
                                                    "min-width: " +
                                                      _vm.calMWidth +
                                                      "px;width: " +
                                                      _vm.calMWidth +
                                                      "px;"
                                                  ),
                                                  attrs: {
                                                    id: "animationPIChangeover",
                                                    _i: 75
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "view",
                                                    {
                                                      staticClass: _vm._$s(
                                                        76,
                                                        "sc",
                                                        "pm-sectionDesc"
                                                      ),
                                                      attrs: { _i: 76 }
                                                    },
                                                    [
                                                      _c("switch", {
                                                        attrs: {
                                                          checked: _vm._$s(
                                                            77,
                                                            "a-checked",
                                                            _vm.IsLastPIFillHelpSwitch
                                                          ),
                                                          _i: 77
                                                        },
                                                        on: {
                                                          change:
                                                            _vm.onLastPIListSwitchChange
                                                        }
                                                      })
                                                    ]
                                                  ),
                                                  _c(
                                                    "view",
                                                    {
                                                      staticClass: _vm._$s(
                                                        78,
                                                        "sc",
                                                        "weui-panel__bd"
                                                      ),
                                                      attrs: { _i: 78 }
                                                    },
                                                    [
                                                      _vm._$s(
                                                        79,
                                                        "i",
                                                        _vm.PMPIList
                                                      )
                                                        ? _c(
                                                            "view",
                                                            {
                                                              staticClass: _vm._$s(
                                                                79,
                                                                "sc",
                                                                "pm-viewfor-scroll-view_V"
                                                              ),
                                                              attrs: { _i: 79 }
                                                            },
                                                            [
                                                              _c(
                                                                "scroll-view",
                                                                {
                                                                  staticClass: _vm._$s(
                                                                    80,
                                                                    "sc",
                                                                    "pm-scroll-view_V"
                                                                  ),
                                                                  attrs: {
                                                                    "scroll-into-view": _vm._$s(
                                                                      80,
                                                                      "a-scroll-into-view",
                                                                      _vm.toView
                                                                    ),
                                                                    "scroll-top": _vm._$s(
                                                                      80,
                                                                      "a-scroll-top",
                                                                      _vm.scrollTop
                                                                    ),
                                                                    _i: 80
                                                                  },
                                                                  on: {
                                                                    scrolltoupper:
                                                                      _vm.upper,
                                                                    scrolltolower:
                                                                      _vm.lower,
                                                                    scroll:
                                                                      _vm.scroll
                                                                  }
                                                                },
                                                                [
                                                                  _vm._l(
                                                                    _vm._$s(
                                                                      81,
                                                                      "f",
                                                                      {
                                                                        forItems:
                                                                          _vm.PMPIList
                                                                      }
                                                                    ),
                                                                    function(
                                                                      PMPI,
                                                                      i,
                                                                      $23,
                                                                      $33
                                                                    ) {
                                                                      return [
                                                                        _c(
                                                                          "view",
                                                                          {
                                                                            key: _vm._$s(
                                                                              81,
                                                                              "f",
                                                                              {
                                                                                forIndex: $23,
                                                                                keyIndex: 0,
                                                                                key:
                                                                                  i +
                                                                                  "_0"
                                                                              }
                                                                            ),
                                                                            staticClass: _vm._$s(
                                                                              "82-" +
                                                                                $33,
                                                                              "sc",
                                                                              "pm-TCGroup"
                                                                            ),
                                                                            attrs: {
                                                                              id: _vm._$s(
                                                                                "82-" +
                                                                                  $33,
                                                                                "a-id",
                                                                                PMPI._id +
                                                                                  "_TCGroup"
                                                                              ),
                                                                              _i:
                                                                                "82-" +
                                                                                $33
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._$s(
                                                                              "83-" +
                                                                                $33,
                                                                              "i",
                                                                              PMPI.ZCTRAWPurList
                                                                            )
                                                                              ? _c(
                                                                                  "view",
                                                                                  {
                                                                                    staticClass: _vm._$s(
                                                                                      "83-" +
                                                                                        $33,
                                                                                      "sc",
                                                                                      "pm-TC"
                                                                                    ),
                                                                                    style: _vm._$s(
                                                                                      "83-" +
                                                                                        $33,
                                                                                      "s",
                                                                                      PMPI.selectedStyle
                                                                                    ),
                                                                                    attrs: {
                                                                                      id: _vm._$s(
                                                                                        "83-" +
                                                                                          $33,
                                                                                        "a-id",
                                                                                        PMPI._id +
                                                                                          "_RAWPur"
                                                                                      ),
                                                                                      _i:
                                                                                        "83-" +
                                                                                        $33
                                                                                    },
                                                                                    on: {
                                                                                      longpress:
                                                                                        _vm.onPMPIPurLongTap,
                                                                                      click:
                                                                                        _vm.onPMPIPurTap
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "view",
                                                                                      {
                                                                                        staticClass: _vm._$s(
                                                                                          "84-" +
                                                                                            $33,
                                                                                          "sc",
                                                                                          "pm-TC-Txt"
                                                                                        ),
                                                                                        attrs: {
                                                                                          _i:
                                                                                            "84-" +
                                                                                            $33
                                                                                        }
                                                                                      },
                                                                                      [
                                                                                        _vm._v(
                                                                                          _vm._$s(
                                                                                            "84-" +
                                                                                              $33,
                                                                                            "t0-0",
                                                                                            _vm._s(
                                                                                              PMPI
                                                                                                .ZCTRAWPurList[0]
                                                                                                .ZCTMaterialName
                                                                                            )
                                                                                          )
                                                                                        )
                                                                                      ]
                                                                                    ),
                                                                                    _c(
                                                                                      "view",
                                                                                      {
                                                                                        staticClass: _vm._$s(
                                                                                          "85-" +
                                                                                            $33,
                                                                                          "sc",
                                                                                          "pm-TC-imagesBox"
                                                                                        ),
                                                                                        attrs: {
                                                                                          _i:
                                                                                            "85-" +
                                                                                            $33
                                                                                        }
                                                                                      },
                                                                                      [
                                                                                        _vm._l(
                                                                                          _vm._$s(
                                                                                            86 +
                                                                                              "-" +
                                                                                              $33,
                                                                                            "f",
                                                                                            {
                                                                                              forItems:
                                                                                                PMPI.ZCTRAWPurList
                                                                                            }
                                                                                          ),
                                                                                          function(
                                                                                            PMRAWPur,
                                                                                            j,
                                                                                            $24,
                                                                                            $34
                                                                                          ) {
                                                                                            return [
                                                                                              _vm._$s(
                                                                                                "87-" +
                                                                                                  $33 +
                                                                                                  "-" +
                                                                                                  $34,
                                                                                                "i",
                                                                                                j <
                                                                                                  4
                                                                                              )
                                                                                                ? _c(
                                                                                                    "image",
                                                                                                    {
                                                                                                      key: _vm._$s(
                                                                                                        86 +
                                                                                                          "-" +
                                                                                                          $33,
                                                                                                        "f",
                                                                                                        {
                                                                                                          forIndex: $24,
                                                                                                          keyIndex: 0,
                                                                                                          key:
                                                                                                            j +
                                                                                                            "_0"
                                                                                                        }
                                                                                                      ),
                                                                                                      staticClass: _vm._$s(
                                                                                                        "87-" +
                                                                                                          $33 +
                                                                                                          "-" +
                                                                                                          $34,
                                                                                                        "sc",
                                                                                                        "pm-TC-Subimage"
                                                                                                      ),
                                                                                                      attrs: {
                                                                                                        src: _vm._$s(
                                                                                                          "87-" +
                                                                                                            $33 +
                                                                                                            "-" +
                                                                                                            $34,
                                                                                                          "a-src",
                                                                                                          PMRAWPur.ZCTProductURL
                                                                                                        ),
                                                                                                        _i:
                                                                                                          "87-" +
                                                                                                          $33 +
                                                                                                          "-" +
                                                                                                          $34
                                                                                                      }
                                                                                                    }
                                                                                                  )
                                                                                                : _vm._e()
                                                                                            ]
                                                                                          }
                                                                                        )
                                                                                      ],
                                                                                      2
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              : _vm._e(),
                                                                            _c(
                                                                              "image",
                                                                              {
                                                                                staticClass: _vm._$s(
                                                                                  "88-" +
                                                                                    $33,
                                                                                  "sc",
                                                                                  "pm-TCGroup-Arrowimage"
                                                                                ),
                                                                                attrs: {
                                                                                  _i:
                                                                                    "88-" +
                                                                                    $33
                                                                                }
                                                                              }
                                                                            ),
                                                                            _c(
                                                                              "view",
                                                                              {
                                                                                staticClass: _vm._$s(
                                                                                  "89-" +
                                                                                    $33,
                                                                                  "sc",
                                                                                  "pm-TC"
                                                                                ),
                                                                                style: _vm._$s(
                                                                                  "89-" +
                                                                                    $33,
                                                                                  "s",
                                                                                  PMPI.selectedStyle
                                                                                ),
                                                                                attrs: {
                                                                                  id: _vm._$s(
                                                                                    "89-" +
                                                                                      $33,
                                                                                    "a-id",
                                                                                    PMPI._id
                                                                                  ),
                                                                                  _i:
                                                                                    "89-" +
                                                                                    $33
                                                                                }
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "view",
                                                                                  {
                                                                                    staticClass: _vm._$s(
                                                                                      "90-" +
                                                                                        $33,
                                                                                      "sc",
                                                                                      "pm-TC-Txt"
                                                                                    ),
                                                                                    attrs: {
                                                                                      _i:
                                                                                        "90-" +
                                                                                        $33
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      _vm._$s(
                                                                                        "90-" +
                                                                                          $33,
                                                                                        "t0-0",
                                                                                        _vm._s(
                                                                                          PMPI.PMStanardProcessName
                                                                                        )
                                                                                      )
                                                                                    )
                                                                                  ]
                                                                                ),
                                                                                _c(
                                                                                  "image",
                                                                                  {
                                                                                    staticClass: _vm._$s(
                                                                                      "91-" +
                                                                                        $33,
                                                                                      "sc",
                                                                                      "pm-TC-image"
                                                                                    ),
                                                                                    attrs: {
                                                                                      src: _vm._$s(
                                                                                        "91-" +
                                                                                          $33,
                                                                                        "a-src",
                                                                                        PMPI.ZCTProductURL
                                                                                      ),
                                                                                      _i:
                                                                                        "91-" +
                                                                                        $33
                                                                                    }
                                                                                  }
                                                                                )
                                                                              ]
                                                                            ),
                                                                            _c(
                                                                              "image",
                                                                              {
                                                                                staticClass: _vm._$s(
                                                                                  "92-" +
                                                                                    $33,
                                                                                  "sc",
                                                                                  "pm-TCGroup-Arrowimage"
                                                                                ),
                                                                                attrs: {
                                                                                  _i:
                                                                                    "92-" +
                                                                                    $33
                                                                                }
                                                                              }
                                                                            ),
                                                                            _vm._$s(
                                                                              "93-" +
                                                                                $33,
                                                                              "i",
                                                                              PMPI.ZCTRAWProList
                                                                            )
                                                                              ? _c(
                                                                                  "view",
                                                                                  {
                                                                                    staticClass: _vm._$s(
                                                                                      "93-" +
                                                                                        $33,
                                                                                      "sc",
                                                                                      "pm-TC"
                                                                                    ),
                                                                                    style: _vm._$s(
                                                                                      "93-" +
                                                                                        $33,
                                                                                      "s",
                                                                                      PMPI.selectedStyle
                                                                                    ),
                                                                                    attrs: {
                                                                                      id: _vm._$s(
                                                                                        "93-" +
                                                                                          $33,
                                                                                        "a-id",
                                                                                        PMPI._id +
                                                                                          "_RAWPro"
                                                                                      ),
                                                                                      _i:
                                                                                        "93-" +
                                                                                        $33
                                                                                    },
                                                                                    on: {
                                                                                      longpress:
                                                                                        _vm.onPMPIProLongTap,
                                                                                      click:
                                                                                        _vm.onPMPIProTap
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "view",
                                                                                      {
                                                                                        staticClass: _vm._$s(
                                                                                          "94-" +
                                                                                            $33,
                                                                                          "sc",
                                                                                          "pm-TC-Txt"
                                                                                        ),
                                                                                        attrs: {
                                                                                          _i:
                                                                                            "94-" +
                                                                                            $33
                                                                                        }
                                                                                      },
                                                                                      [
                                                                                        _vm._v(
                                                                                          _vm._$s(
                                                                                            "94-" +
                                                                                              $33,
                                                                                            "t0-0",
                                                                                            _vm._s(
                                                                                              PMPI
                                                                                                .ZCTRAWProList[0]
                                                                                                .ZCTMaterialName
                                                                                            )
                                                                                          )
                                                                                        )
                                                                                      ]
                                                                                    ),
                                                                                    _c(
                                                                                      "view",
                                                                                      {
                                                                                        staticClass: _vm._$s(
                                                                                          "95-" +
                                                                                            $33,
                                                                                          "sc",
                                                                                          "pm-TC-imagesBox"
                                                                                        ),
                                                                                        attrs: {
                                                                                          _i:
                                                                                            "95-" +
                                                                                            $33
                                                                                        }
                                                                                      },
                                                                                      [
                                                                                        _vm._l(
                                                                                          _vm._$s(
                                                                                            96 +
                                                                                              "-" +
                                                                                              $33,
                                                                                            "f",
                                                                                            {
                                                                                              forItems:
                                                                                                PMPI.ZCTRAWProList
                                                                                            }
                                                                                          ),
                                                                                          function(
                                                                                            PMRAWPro,
                                                                                            M,
                                                                                            $25,
                                                                                            $35
                                                                                          ) {
                                                                                            return [
                                                                                              _vm._$s(
                                                                                                "97-" +
                                                                                                  $33 +
                                                                                                  "-" +
                                                                                                  $35,
                                                                                                "i",
                                                                                                M <
                                                                                                  4
                                                                                              )
                                                                                                ? _c(
                                                                                                    "image",
                                                                                                    {
                                                                                                      key: _vm._$s(
                                                                                                        96 +
                                                                                                          "-" +
                                                                                                          $33,
                                                                                                        "f",
                                                                                                        {
                                                                                                          forIndex: $25,
                                                                                                          keyIndex: 0,
                                                                                                          key:
                                                                                                            M +
                                                                                                            "_0"
                                                                                                        }
                                                                                                      ),
                                                                                                      staticClass: _vm._$s(
                                                                                                        "97-" +
                                                                                                          $33 +
                                                                                                          "-" +
                                                                                                          $35,
                                                                                                        "sc",
                                                                                                        "pm-TC-Subimage"
                                                                                                      ),
                                                                                                      attrs: {
                                                                                                        src: _vm._$s(
                                                                                                          "97-" +
                                                                                                            $33 +
                                                                                                            "-" +
                                                                                                            $35,
                                                                                                          "a-src",
                                                                                                          PMRAWPro.ZCTProductURL
                                                                                                        ),
                                                                                                        _i:
                                                                                                          "97-" +
                                                                                                          $33 +
                                                                                                          "-" +
                                                                                                          $35
                                                                                                      }
                                                                                                    }
                                                                                                  )
                                                                                                : _vm._e()
                                                                                            ]
                                                                                          }
                                                                                        )
                                                                                      ],
                                                                                      2
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              : _vm._e()
                                                                          ]
                                                                        ),
                                                                        _c(
                                                                          "view",
                                                                          {
                                                                            key: _vm._$s(
                                                                              81,
                                                                              "f",
                                                                              {
                                                                                forIndex: $23,
                                                                                keyIndex: 1,
                                                                                key:
                                                                                  i +
                                                                                  "_1"
                                                                              }
                                                                            ),
                                                                            staticClass: _vm._$s(
                                                                              "98-" +
                                                                                $33,
                                                                              "sc",
                                                                              "pm-TC-Arrowimage"
                                                                            ),
                                                                            attrs: {
                                                                              _i:
                                                                                "98-" +
                                                                                $33
                                                                            }
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "image",
                                                                              {
                                                                                staticClass: _vm._$s(
                                                                                  "99-" +
                                                                                    $33,
                                                                                  "sc",
                                                                                  "pm-TC-Arrowimage"
                                                                                ),
                                                                                attrs: {
                                                                                  _i:
                                                                                    "99-" +
                                                                                    $33
                                                                                }
                                                                              }
                                                                            )
                                                                          ]
                                                                        )
                                                                      ]
                                                                    }
                                                                  )
                                                                ],
                                                                2
                                                              ),
                                                              _vm._$s(
                                                                100,
                                                                "i",
                                                                _vm.PMCOI
                                                                  .PMPOList[
                                                                  _vm.PMCOI
                                                                    .selectedPOKey
                                                                ].showRAWProList
                                                              )
                                                                ? [
                                                                    _c(
                                                                      "scroll-view",
                                                                      {
                                                                        staticClass: _vm._$s(
                                                                          101,
                                                                          "sc",
                                                                          "pm-scroll-view_V"
                                                                        ),
                                                                        attrs: {
                                                                          _i: 101
                                                                        }
                                                                      },
                                                                      [
                                                                        _vm._l(
                                                                          _vm._$s(
                                                                            102,
                                                                            "f",
                                                                            {
                                                                              forItems:
                                                                                _vm
                                                                                  .PMCOI
                                                                                  .PMPOList[
                                                                                  _vm
                                                                                    .PMCOI
                                                                                    .selectedPOKey
                                                                                ]
                                                                                  .showRAWProList
                                                                            }
                                                                          ),
                                                                          function(
                                                                            RAWPro,
                                                                            index,
                                                                            $26,
                                                                            $36
                                                                          ) {
                                                                            return [
                                                                              _c(
                                                                                "view",
                                                                                {
                                                                                  key: _vm._$s(
                                                                                    102,
                                                                                    "f",
                                                                                    {
                                                                                      forIndex: $26,
                                                                                      keyIndex: 0,
                                                                                      key:
                                                                                        index +
                                                                                        "_0"
                                                                                    }
                                                                                  ),
                                                                                  staticClass: _vm._$s(
                                                                                    "103-" +
                                                                                      $36,
                                                                                    "sc",
                                                                                    "pm-TC"
                                                                                  ),
                                                                                  style: _vm._$s(
                                                                                    "103-" +
                                                                                      $36,
                                                                                    "s",
                                                                                    "min-height:80px; " +
                                                                                      RAWPro.selectedStyle
                                                                                  ),
                                                                                  attrs: {
                                                                                    id: _vm._$s(
                                                                                      "103-" +
                                                                                        $36,
                                                                                      "a-id",
                                                                                      RAWPro.PMPRDInstructionID +
                                                                                        "_" +
                                                                                        RAWPro._id
                                                                                    ),
                                                                                    _i:
                                                                                      "103-" +
                                                                                      $36
                                                                                  },
                                                                                  on: {
                                                                                    longpress:
                                                                                      _vm.onPMRAWProLongTap,
                                                                                    click:
                                                                                      _vm.onPMRAWProTap
                                                                                  }
                                                                                },
                                                                                [
                                                                                  _c(
                                                                                    "view",
                                                                                    {
                                                                                      staticClass: _vm._$s(
                                                                                        "104-" +
                                                                                          $36,
                                                                                        "sc",
                                                                                        "pm-TC-Txt"
                                                                                      ),
                                                                                      attrs: {
                                                                                        _i:
                                                                                          "104-" +
                                                                                          $36
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      _vm._v(
                                                                                        _vm._$s(
                                                                                          "104-" +
                                                                                            $36,
                                                                                          "t0-0",
                                                                                          _vm._s(
                                                                                            RAWPro.ZCTMaterialName
                                                                                          )
                                                                                        )
                                                                                      )
                                                                                    ]
                                                                                  ),
                                                                                  _c(
                                                                                    "view",
                                                                                    {
                                                                                      staticClass: _vm._$s(
                                                                                        "105-" +
                                                                                          $36,
                                                                                        "sc",
                                                                                        "pm-TC-imagesBox"
                                                                                      ),
                                                                                      attrs: {
                                                                                        _i:
                                                                                          "105-" +
                                                                                          $36
                                                                                      }
                                                                                    },
                                                                                    [
                                                                                      _vm._l(
                                                                                        _vm._$s(
                                                                                          106 +
                                                                                            "-" +
                                                                                            $36,
                                                                                          "f",
                                                                                          {
                                                                                            forItems:
                                                                                              _vm
                                                                                                .PMPI
                                                                                                .ZCTRAWProList
                                                                                          }
                                                                                        ),
                                                                                        function(
                                                                                          RAWPro,
                                                                                          M,
                                                                                          $27,
                                                                                          $37
                                                                                        ) {
                                                                                          return [
                                                                                            _vm._$s(
                                                                                              "107-" +
                                                                                                $36 +
                                                                                                "-" +
                                                                                                $37,
                                                                                              "i",
                                                                                              M <
                                                                                                4
                                                                                            )
                                                                                              ? _c(
                                                                                                  "image",
                                                                                                  {
                                                                                                    key: _vm._$s(
                                                                                                      106 +
                                                                                                        "-" +
                                                                                                        $36,
                                                                                                      "f",
                                                                                                      {
                                                                                                        forIndex: $27,
                                                                                                        keyIndex: 0,
                                                                                                        key:
                                                                                                          M +
                                                                                                          "_0"
                                                                                                      }
                                                                                                    ),
                                                                                                    staticClass: _vm._$s(
                                                                                                      "107-" +
                                                                                                        $36 +
                                                                                                        "-" +
                                                                                                        $37,
                                                                                                      "sc",
                                                                                                      "pm-TC-Subimage"
                                                                                                    ),
                                                                                                    attrs: {
                                                                                                      src: _vm._$s(
                                                                                                        "107-" +
                                                                                                          $36 +
                                                                                                          "-" +
                                                                                                          $37,
                                                                                                        "a-src",
                                                                                                        RAWPro.ZCTProductURL
                                                                                                      ),
                                                                                                      _i:
                                                                                                        "107-" +
                                                                                                        $36 +
                                                                                                        "-" +
                                                                                                        $37
                                                                                                    }
                                                                                                  }
                                                                                                )
                                                                                              : _vm._e()
                                                                                          ]
                                                                                        }
                                                                                      )
                                                                                    ],
                                                                                    2
                                                                                  )
                                                                                ]
                                                                              )
                                                                            ]
                                                                          }
                                                                        )
                                                                      ],
                                                                      2
                                                                    )
                                                                  ]
                                                                : _vm._e()
                                                            ],
                                                            2
                                                          )
                                                        : _vm._e()
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ])
                              : _vm._e()
                          ])
                        : _vm._e(),
                      _vm._$s(
                        108,
                        "i",
                        !_vm.IsPIlength && _vm.dataType == "POAddNew"
                      )
                        ? _c("view", {
                            staticClass: _vm._$s(108, "sc", "pm-sectionDesc"),
                            attrs: { _i: 108 }
                          })
                        : _vm._e(),
                      _vm._$s(109, "i", _vm.autoFiller)
                        ? _c("a", {
                            staticClass: _vm._$s(
                              109,
                              "sc",
                              "weui-btn weui-btn_default"
                            ),
                            attrs: { _i: 109 },
                            on: { click: _vm.onAutoFill }
                          })
                        : _vm._e(),
                      _c("view", [
                        _c(
                          "button",
                          {
                            class: _vm._$s(111, "c", _vm.confirmBtnClass),
                            attrs: {
                              hidden: _vm._$s(111, "a-hidden", _vm.hiddenName),
                              disabled: _vm._$s(
                                111,
                                "a-disabled",
                                _vm.isConfButtonDisabled
                              ),
                              _i: 111
                            },
                            on: { click: _vm.bindButtonTap }
                          },
                          [
                            _c("i", {
                              class: _vm._$s(112, "c", _vm.loadingMark),
                              attrs: { _i: 112 }
                            }),
                            _vm._v(
                              _vm._$s(111, "t1-0", _vm._s(_vm.btnCommandName))
                            )
                          ]
                        )
                      ])
                    ]
                  : _vm._e()
              ],
              2
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s(113, "sc", "weui-form__tips-area"),
                attrs: { _i: 113 }
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(114, "sc", "weui-form__tips"),
                    attrs: { _i: 114 }
                  },
                  [_vm._v(_vm._$s(114, "t0-0", _vm._s(_vm.upBtnTips)))]
                )
              ]
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s(115, "sc", "weui-form__tips-area"),
                attrs: { _i: 115 }
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(116, "sc", "weui-form__tips"),
                    attrs: { _i: 116 }
                  },
                  [_vm._v(_vm._$s(116, "t0-0", _vm._s(_vm.downBtnTips)))]
                )
              ]
            )
          ]
        )
      ]
    ),
    _vm._$s(117, "i", _vm.topTips)
      ? _c(
          "view",
          {
            class: _vm._$s(
              117,
              "c",
              "weui-toptips weui-toptips_warn fadeIn " +
                (_vm.hide ? "fadeOut" : "")
            ),
            attrs: { _i: 117 }
          },
          [_vm._v(_vm._$s(117, "t0-0", _vm._s(_vm.topTipsStr)))]
        )
      : _vm._e(),
    _vm._$s(118, "i", _vm.pmDialog)
      ? _c("view", [
          _c("view", {
            staticClass: _vm._$s(119, "sc", "weui-mask"),
            attrs: { _i: 119 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(120, "sc", "weui-dialog"),
              attrs: { _i: 120 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(121, "sc", "weui-dialog__hd"),
                  attrs: { _i: 121 }
                },
                [
                  _c(
                    "strong",
                    {
                      staticClass: _vm._$s(122, "sc", "weui-dialog__title"),
                      attrs: { _i: 122 }
                    },
                    [_vm._v(_vm._$s(122, "t0-0", _vm._s(_vm.dialogMainTitle)))]
                  )
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(123, "sc", "weui-dialog__bd"),
                  attrs: { _i: 123 }
                },
                [_vm._v(_vm._$s(123, "t0-0", _vm._s(_vm.dialogMainContent)))]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(124, "sc", "weui-dialog__ft"),
                  attrs: { _i: 124 }
                },
                [
                  _vm._$s(125, "i", _vm.pmShowBtn)
                    ? _c(
                        "a",
                        {
                          staticClass: _vm._$s(
                            125,
                            "sc",
                            "weui-dialog__btn weui-dialog__btn_default"
                          ),
                          attrs: { _i: 125 },
                          on: { click: _vm.pmDialogClose }
                        },
                        [
                          _vm._v(
                            _vm._$s(125, "t0-0", _vm._s(_vm.dialogSubOperation))
                          )
                        ]
                      )
                    : _vm._e(),
                  _c(
                    "a",
                    {
                      staticClass: _vm._$s(
                        126,
                        "sc",
                        "weui-dialog__btn weui-dialog__btn_primary"
                      ),
                      attrs: {
                        id: _vm._$s(126, "a-id", _vm.btnCommandName_id),
                        _i: 126
                      },
                      on: { click: _vm.pmDialogClose }
                    },
                    [
                      _vm._v(
                        _vm._$s(126, "t0-0", _vm._s(_vm.dialogMainOperation))
                      )
                    ]
                  )
                ]
              )
            ]
          )
        ])
      : _vm._e()
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 23 */
/*!**************************************************************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/propertyPage/propertyPage.js?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_propertyPage_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./propertyPage.js?vue&type=script&lang=js&mpType=page */ 24);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_propertyPage_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_propertyPage_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_propertyPage_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_propertyPage_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_propertyPage_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNiLENBQWdCLGtkQUFHLEVBQUMiLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuL3Byb3BlcnR5UGFnZS5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuL3Byb3BlcnR5UGFnZS5qcz92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/propertyPage/propertyPage.js?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***/ }),
/* 25 */
/*!*****************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/utils/util.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var formatTime = function formatTime(date) {\n  var year = date.getFullYear();\n  var month = date.getMonth() + 1;\n  var day = date.getDate();\n  var hour = 0;\n  var minute = 0;\n  var second = 0;\n  return \"\".concat([year, month, day].map(formatNumber).join('/'), \" \").concat([hour, minute, second].map(formatNumber).join(':'));\n};\n\nvar formatDateTime = function formatDateTime(date) {\n  var year = date.getFullYear();\n  var month = date.getMonth() + 1;\n  var day = date.getDate();\n  var hour = date.getHours();\n  var minute = date.getMinutes();\n  var second = date.getSeconds();\n  return \"\".concat([year, month, day].map(formatNumber).join('/'), \" \").concat([hour, minute, second].map(formatNumber).join(':'));\n};\n\nvar formatNumber = function formatNumber(n) {\n  n = n.toString();\n  return n[1] ? n : \"0\".concat(n);\n};\n\nfunction getTimeShortStrFromTime(tempTimeStr) //只接受Date Str对象\n{\n  var tempnow = new Date();\n  var tempTime = new Date(tempTimeStr);\n  var tempnowDate = tempnow.getFullYear() + \"/\" + (tempnow.getMonth() + 1) + \"/\" + tempnow.getDate();\n  var tempTimeDate = tempTime.getFullYear() + \"/\" + (tempTime.getMonth() + 1) + \"/\" + tempTime.getDate();\n  var ResStr = \"\";\n\n  if (tempnowDate == tempTimeDate) {\n    ResStr = fillZero(tempTime.getHours()) + \":\" + fillZero(tempTime.getMinutes());\n  } else {\n    ResStr = fillZero(tempTime.getMonth() + 1) + \"/\" + fillZero(tempTime.getDate() + \"\");\n  }\n\n  return ResStr;\n\n  function fillZero(tempInt) //补全前导0\n  {\n    if (tempInt < 10) {\n      return \"0\" + tempInt.toString();\n    } else {\n      return tempInt.toString();\n    }\n  }\n}\n\nmodule.exports = {\n  formatTime: formatTime,\n  formatDateTime: formatDateTime,\n  getTimeShortStrFromTime: getTimeShortStrFromTime };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvdXRpbC5qcyJdLCJuYW1lcyI6WyJmb3JtYXRUaW1lIiwiZGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsIm1hcCIsImZvcm1hdE51bWJlciIsImpvaW4iLCJmb3JtYXREYXRlVGltZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJuIiwidG9TdHJpbmciLCJnZXRUaW1lU2hvcnRTdHJGcm9tVGltZSIsInRlbXBUaW1lU3RyIiwidGVtcG5vdyIsIkRhdGUiLCJ0ZW1wVGltZSIsInRlbXBub3dEYXRlIiwidGVtcFRpbWVEYXRlIiwiUmVzU3RyIiwiZmlsbFplcm8iLCJ0ZW1wSW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsSUFBSSxFQUFJO0FBQ3pCLE1BQU1DLElBQUksR0FBR0QsSUFBSSxDQUFDRSxXQUFMLEVBQWI7QUFDQSxNQUFNQyxLQUFLLEdBQUdILElBQUksQ0FBQ0ksUUFBTCxLQUFrQixDQUFoQztBQUNBLE1BQU1DLEdBQUcsR0FBR0wsSUFBSSxDQUFDTSxPQUFMLEVBQVo7QUFDQSxNQUFNQyxJQUFJLEdBQUcsQ0FBYjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxDQUFmO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLENBQWY7QUFDQSxtQkFBVSxDQUFDUixJQUFELEVBQU9FLEtBQVAsRUFBY0UsR0FBZCxFQUFtQkssR0FBbkIsQ0FBdUJDLFlBQXZCLEVBQXFDQyxJQUFyQyxDQUEwQyxHQUExQyxDQUFWLGNBQTRELENBQUNMLElBQUQsRUFBT0MsTUFBUCxFQUFlQyxNQUFmLEVBQXVCQyxHQUF2QixDQUEyQkMsWUFBM0IsRUFBeUNDLElBQXpDLENBQThDLEdBQTlDLENBQTVEO0FBQ0QsQ0FSRDs7QUFVQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFiLElBQUksRUFBSTtBQUM3QixNQUFNQyxJQUFJLEdBQUdELElBQUksQ0FBQ0UsV0FBTCxFQUFiO0FBQ0EsTUFBTUMsS0FBSyxHQUFHSCxJQUFJLENBQUNJLFFBQUwsS0FBa0IsQ0FBaEM7QUFDQSxNQUFNQyxHQUFHLEdBQUdMLElBQUksQ0FBQ00sT0FBTCxFQUFaO0FBQ0EsTUFBTUMsSUFBSSxHQUFHUCxJQUFJLENBQUNjLFFBQUwsRUFBYjtBQUNBLE1BQU1OLE1BQU0sR0FBR1IsSUFBSSxDQUFDZSxVQUFMLEVBQWY7QUFDQSxNQUFNTixNQUFNLEdBQUdULElBQUksQ0FBQ2dCLFVBQUwsRUFBZjtBQUNBLG1CQUFVLENBQUNmLElBQUQsRUFBT0UsS0FBUCxFQUFjRSxHQUFkLEVBQW1CSyxHQUFuQixDQUF1QkMsWUFBdkIsRUFBcUNDLElBQXJDLENBQTBDLEdBQTFDLENBQVYsY0FBNEQsQ0FBQ0wsSUFBRCxFQUFPQyxNQUFQLEVBQWVDLE1BQWYsRUFBdUJDLEdBQXZCLENBQTJCQyxZQUEzQixFQUF5Q0MsSUFBekMsQ0FBOEMsR0FBOUMsQ0FBNUQ7QUFDRCxDQVJEOztBQVVBLElBQU1ELFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFNLENBQUMsRUFBSTtBQUN4QkEsR0FBQyxHQUFHQSxDQUFDLENBQUNDLFFBQUYsRUFBSjtBQUNBLFNBQU9ELENBQUMsQ0FBQyxDQUFELENBQUQsR0FBT0EsQ0FBUCxjQUFlQSxDQUFmLENBQVA7QUFDRCxDQUhEOztBQUtBLFNBQVNFLHVCQUFULENBQWlDQyxXQUFqQyxFQUE4QztBQUM5QztBQUNFLE1BQUlDLE9BQU8sR0FBRyxJQUFJQyxJQUFKLEVBQWQ7QUFDQSxNQUFJQyxRQUFRLEdBQUcsSUFBSUQsSUFBSixDQUFTRixXQUFULENBQWY7QUFDQSxNQUFJSSxXQUFXLEdBQUdILE9BQU8sQ0FBQ25CLFdBQVIsS0FBd0IsR0FBeEIsSUFBK0JtQixPQUFPLENBQUNqQixRQUFSLEtBQXFCLENBQXBELElBQXlELEdBQXpELEdBQStEaUIsT0FBTyxDQUFDZixPQUFSLEVBQWpGO0FBQ0EsTUFBSW1CLFlBQVksR0FBR0YsUUFBUSxDQUFDckIsV0FBVCxLQUF5QixHQUF6QixJQUFnQ3FCLFFBQVEsQ0FBQ25CLFFBQVQsS0FBc0IsQ0FBdEQsSUFBMkQsR0FBM0QsR0FBaUVtQixRQUFRLENBQUNqQixPQUFULEVBQXBGO0FBQ0EsTUFBSW9CLE1BQU0sR0FBRyxFQUFiOztBQUVBLE1BQUlGLFdBQVcsSUFBSUMsWUFBbkIsRUFBaUM7QUFDL0JDLFVBQU0sR0FBR0MsUUFBUSxDQUFDSixRQUFRLENBQUNULFFBQVQsRUFBRCxDQUFSLEdBQWdDLEdBQWhDLEdBQXNDYSxRQUFRLENBQUNKLFFBQVEsQ0FBQ1IsVUFBVCxFQUFELENBQXZEO0FBQ0QsR0FGRCxNQUVPO0FBQ0xXLFVBQU0sR0FBR0MsUUFBUSxDQUFDSixRQUFRLENBQUNuQixRQUFULEtBQXNCLENBQXZCLENBQVIsR0FBb0MsR0FBcEMsR0FBMEN1QixRQUFRLENBQUNKLFFBQVEsQ0FBQ2pCLE9BQVQsS0FBcUIsRUFBdEIsQ0FBM0Q7QUFDRDs7QUFFRCxTQUFPb0IsTUFBUDs7QUFFQSxXQUFTQyxRQUFULENBQWtCQyxPQUFsQixFQUEyQjtBQUMzQjtBQUNFLFFBQUlBLE9BQU8sR0FBRyxFQUFkLEVBQWtCO0FBQ2hCLGFBQU8sTUFBTUEsT0FBTyxDQUFDVixRQUFSLEVBQWI7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPVSxPQUFPLENBQUNWLFFBQVIsRUFBUDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRFcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2YvQixZQUFVLEVBQVZBLFVBRGU7QUFFZmMsZ0JBQWMsRUFBZEEsY0FGZTtBQUdmTSx5QkFBdUIsRUFBdkJBLHVCQUhlLEVBQWpCIiwiZmlsZSI6IjI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybWF0VGltZSA9IGRhdGUgPT4ge1xuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICBjb25zdCBob3VyID0gMDtcbiAgY29uc3QgbWludXRlID0gMDtcbiAgY29uc3Qgc2Vjb25kID0gMDtcbiAgcmV0dXJuIGAke1t5ZWFyLCBtb250aCwgZGF5XS5tYXAoZm9ybWF0TnVtYmVyKS5qb2luKCcvJyl9ICR7W2hvdXIsIG1pbnV0ZSwgc2Vjb25kXS5tYXAoZm9ybWF0TnVtYmVyKS5qb2luKCc6Jyl9YDtcbn07XG5cbmNvbnN0IGZvcm1hdERhdGVUaW1lID0gZGF0ZSA9PiB7XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gIGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XG4gIGNvbnN0IG1pbnV0ZSA9IGRhdGUuZ2V0TWludXRlcygpO1xuICBjb25zdCBzZWNvbmQgPSBkYXRlLmdldFNlY29uZHMoKTtcbiAgcmV0dXJuIGAke1t5ZWFyLCBtb250aCwgZGF5XS5tYXAoZm9ybWF0TnVtYmVyKS5qb2luKCcvJyl9ICR7W2hvdXIsIG1pbnV0ZSwgc2Vjb25kXS5tYXAoZm9ybWF0TnVtYmVyKS5qb2luKCc6Jyl9YDtcbn07XG5cbmNvbnN0IGZvcm1hdE51bWJlciA9IG4gPT4ge1xuICBuID0gbi50b1N0cmluZygpO1xuICByZXR1cm4gblsxXSA/IG4gOiBgMCR7bn1gO1xufTtcblxuZnVuY3Rpb24gZ2V0VGltZVNob3J0U3RyRnJvbVRpbWUodGVtcFRpbWVTdHIpIC8v5Y+q5o6l5Y+XRGF0ZSBTdHLlr7nosaFcbntcbiAgdmFyIHRlbXBub3cgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGVtcFRpbWUgPSBuZXcgRGF0ZSh0ZW1wVGltZVN0cik7XG4gIHZhciB0ZW1wbm93RGF0ZSA9IHRlbXBub3cuZ2V0RnVsbFllYXIoKSArIFwiL1wiICsgKHRlbXBub3cuZ2V0TW9udGgoKSArIDEpICsgXCIvXCIgKyB0ZW1wbm93LmdldERhdGUoKTtcbiAgdmFyIHRlbXBUaW1lRGF0ZSA9IHRlbXBUaW1lLmdldEZ1bGxZZWFyKCkgKyBcIi9cIiArICh0ZW1wVGltZS5nZXRNb250aCgpICsgMSkgKyBcIi9cIiArIHRlbXBUaW1lLmdldERhdGUoKTtcbiAgdmFyIFJlc1N0ciA9IFwiXCI7XG5cbiAgaWYgKHRlbXBub3dEYXRlID09IHRlbXBUaW1lRGF0ZSkge1xuICAgIFJlc1N0ciA9IGZpbGxaZXJvKHRlbXBUaW1lLmdldEhvdXJzKCkpICsgXCI6XCIgKyBmaWxsWmVybyh0ZW1wVGltZS5nZXRNaW51dGVzKCkpO1xuICB9IGVsc2Uge1xuICAgIFJlc1N0ciA9IGZpbGxaZXJvKHRlbXBUaW1lLmdldE1vbnRoKCkgKyAxKSArIFwiL1wiICsgZmlsbFplcm8odGVtcFRpbWUuZ2V0RGF0ZSgpICsgXCJcIik7XG4gIH1cblxuICByZXR1cm4gUmVzU3RyO1xuXG4gIGZ1bmN0aW9uIGZpbGxaZXJvKHRlbXBJbnQpIC8v6KGl5YWo5YmN5a+8MFxuICB7XG4gICAgaWYgKHRlbXBJbnQgPCAxMCkge1xuICAgICAgcmV0dXJuIFwiMFwiICsgdGVtcEludC50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGVtcEludC50b1N0cmluZygpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZm9ybWF0VGltZSxcbiAgZm9ybWF0RGF0ZVRpbWUsXG4gIGdldFRpbWVTaG9ydFN0ckZyb21UaW1lXG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!*******************************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskList/taskList.vue?mpType=page ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _taskList_vue_vue_type_template_id_40a0d636_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskList.vue?vue&type=template&id=40a0d636&mpType=page */ 27);\n/* harmony import */ var _taskList_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskList.js?vue&type=script&lang=js&mpType=page */ 29);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _taskList_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _taskList_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _taskList_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _taskList_vue_vue_type_template_id_40a0d636_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _taskList_vue_vue_type_template_id_40a0d636_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _taskList_vue_vue_type_template_id_40a0d636_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/taskList/taskList.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDc0U7QUFDTDs7O0FBR2pFO0FBQ3VLO0FBQ3ZLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3Rhc2tMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MGEwZDYzNiZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGFza0xpc3QuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGFza0xpc3QuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdGFza0xpc3QvdGFza0xpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!*************************************************************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskList/taskList.vue?vue&type=template&id=40a0d636&mpType=page ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_taskList_vue_vue_type_template_id_40a0d636_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./taskList.vue?vue&type=template&id=40a0d636&mpType=page */ 28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_taskList_vue_vue_type_template_id_40a0d636_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_taskList_vue_vue_type_template_id_40a0d636_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_taskList_vue_vue_type_template_id_40a0d636_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_taskList_vue_vue_type_template_id_40a0d636_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 28 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskList/taskList.vue?vue&type=template&id=40a0d636&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", [
    _c(
      "view",
      {
        staticClass: _vm._$s(1, "sc", "page"),
        attrs: {
          "data-weui-theme": _vm._$s(1, "a-data-weui-theme", _vm.theme),
          _i: 1
        }
      },
      [
        _c(
          "Scroll-view",
          {
            staticClass: _vm._$s(2, "sc", "G_SC_V"),
            attrs: { "enable-flex": "true", "scroll-y": "true", _i: 2 }
          },
          [
            _c(
              "a",
              {
                staticClass: _vm._$s(
                  3,
                  "sc",
                  "weui-media-box weui-media-box_appmsg"
                ),
                attrs: { _i: 3 }
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(4, "sc", "page__hd"),
                    attrs: { _i: 4 }
                  },
                  [
                    _c("view", {
                      staticClass: _vm._$s(5, "sc", "page__title"),
                      attrs: { _i: 5 }
                    }),
                    _c("view", {
                      staticClass: _vm._$s(6, "sc", "page__desc"),
                      attrs: { _i: 6 }
                    })
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(7, "sc", "pm-TC-new"),
                    attrs: { id: "AddNewPO", _i: 7 },
                    on: { click: _vm.OnPMCOIAddNewTap }
                  },
                  [
                    _c("view", {
                      staticClass: _vm._$s(8, "sc", "pm-TC-Txt"),
                      attrs: { _i: 8 }
                    }),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(9, "sc", "pm-TC-progress__bar"),
                        attrs: { _i: 9 }
                      },
                      [
                        _c("view", {
                          staticClass: _vm._$s(
                            10,
                            "sc",
                            "pm-TC-progress__inner-bar js_progress"
                          ),
                          attrs: { _i: 10 }
                        })
                      ]
                    )
                  ]
                )
              ]
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s(11, "sc", "weui-panel weui-panel_access"),
                attrs: { _i: 11 }
              },
              [
                _c("view", {
                  staticClass: _vm._$s(12, "sc", "weui-panel__hd"),
                  attrs: { _i: 12 }
                }),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(
                      13,
                      "sc",
                      "weui-panel__hd stateselect_panel"
                    ),
                    attrs: { _i: 13 }
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(14, "sc", "stateselect_item"),
                        attrs: { _i: 14 },
                        on: { click: _vm.OnEditSelect }
                      },
                      [
                        _c("view", [
                          _vm._$s(16, "i", _vm.ICOImage.ICOImageEdit)
                            ? _c("image", {
                                attrs: {
                                  src: _vm._$s(
                                    16,
                                    "a-src",
                                    _vm.ICOImage.ICOImageEdit
                                  ),
                                  _i: 16
                                }
                              })
                            : _vm._e()
                        ]),
                        _c("view")
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(18, "sc", "stateselect_item"),
                        attrs: { _i: 18 },
                        on: { click: _vm.OnPublishSelect }
                      },
                      [
                        _c("view", [
                          _vm._$s(20, "i", _vm.ICOImage.ICOImagePublish)
                            ? _c("image", {
                                attrs: {
                                  src: _vm._$s(
                                    20,
                                    "a-src",
                                    _vm.ICOImage.ICOImagePublish
                                  ),
                                  _i: 20
                                }
                              })
                            : _vm._e()
                        ]),
                        _c("view")
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(22, "sc", "stateselect_item"),
                        attrs: { _i: 22 },
                        on: { click: _vm.OnWaitAuthorizeSelect }
                      },
                      [
                        _c("view", [
                          _vm._$s(24, "i", _vm.ICOImage.ICOImageWaitAuthorize)
                            ? _c("image", {
                                attrs: {
                                  src: _vm._$s(
                                    24,
                                    "a-src",
                                    _vm.ICOImage.ICOImageWaitAuthorize
                                  ),
                                  _i: 24
                                }
                              })
                            : _vm._e()
                        ]),
                        _c("view")
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(26, "sc", "stateselect_item"),
                        attrs: { _i: 26 },
                        on: { click: _vm.OnExecSelect }
                      },
                      [
                        _c("view", [
                          _vm._$s(28, "i", _vm.ICOImage.ICOImageEXEC)
                            ? _c("image", {
                                attrs: {
                                  src: _vm._$s(
                                    28,
                                    "a-src",
                                    _vm.ICOImage.ICOImageEXEC
                                  ),
                                  _i: 28
                                }
                              })
                            : _vm._e()
                        ]),
                        _c("view")
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(30, "sc", "stateselect_item"),
                        attrs: { _i: 30 },
                        on: { click: _vm.OnUnacceptedSelect }
                      },
                      [
                        _c("view", [
                          _vm._$s(32, "i", _vm.ICOImage.ICOImageUnaccepted)
                            ? _c("image", {
                                attrs: {
                                  src: _vm._$s(
                                    32,
                                    "a-src",
                                    _vm.ICOImage.ICOImageUnaccepted
                                  ),
                                  _i: 32
                                }
                              })
                            : _vm._e()
                        ]),
                        _c("view")
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(34, "sc", "stateselect_item"),
                        attrs: { _i: 34 },
                        on: { click: _vm.OnAcceptSelect }
                      },
                      [
                        _c("view", [
                          _vm._$s(36, "i", _vm.ICOImage.ICOImageAccept)
                            ? _c("image", {
                                attrs: {
                                  src: _vm._$s(
                                    36,
                                    "a-src",
                                    _vm.ICOImage.ICOImageAccept
                                  ),
                                  _i: 36
                                }
                              })
                            : _vm._e()
                        ]),
                        _c("view")
                      ]
                    )
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(38, "sc", "weui-panel__bd"),
                    attrs: { _i: 38 }
                  },
                  [
                    _vm._l(
                      _vm._$s(39, "f", { forItems: _vm.PMCOIList }),
                      function(PMCOI, index, $20, $30) {
                        return _vm._$s("39-" + $30, "i", _vm.PMCOIList)
                          ? [
                              _c(
                                "view",
                                {
                                  key: _vm._$s(39, "f", {
                                    forIndex: $20,
                                    keyIndex: 0,
                                    key: index + "_0"
                                  }),
                                  staticClass: _vm._$s(
                                    "40-" + $30,
                                    "sc",
                                    "ColumnBox"
                                  ),
                                  attrs: { _i: "40-" + $30 }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: _vm._$s(
                                        "41-" + $30,
                                        "sc",
                                        "weui-media-box weui-media-box_appmsg"
                                      ),
                                      attrs: { _i: "41-" + $30 }
                                    },
                                    [
                                      _c(
                                        "view",
                                        {
                                          staticClass: _vm._$s(
                                            "42-" + $30,
                                            "sc",
                                            "weui-media-box__hd"
                                          ),
                                          attrs: {
                                            id: _vm._$s(
                                              "42-" + $30,
                                              "a-id",
                                              PMCOI._id
                                            ),
                                            _i: "42-" + $30
                                          },
                                          on: {
                                            longpress: _vm.onPMCOIImageTap,
                                            click: _vm.onPMCOICommandSelect
                                          }
                                        },
                                        [
                                          _c("image", {
                                            staticClass: _vm._$s(
                                              "43-" + $30,
                                              "sc",
                                              "weui-media-box__thumb"
                                            ),
                                            attrs: {
                                              src: _vm._$s(
                                                "43-" + $30,
                                                "a-src",
                                                PMCOI.ZCTProductURL
                                              ),
                                              _i: "43-" + $30
                                            }
                                          })
                                        ]
                                      ),
                                      _c(
                                        "view",
                                        {
                                          staticClass: _vm._$s(
                                            "44-" + $30,
                                            "sc",
                                            "pm-task-box__bd"
                                          ),
                                          attrs: {
                                            id: _vm._$s(
                                              "44-" + $30,
                                              "a-id",
                                              PMCOI._id
                                            ),
                                            _i: "44-" + $30
                                          },
                                          on: {
                                            longpress: _vm.onPMCOITap,
                                            click: _vm.onPMCOICommandSelect
                                          }
                                        },
                                        [
                                          _c(
                                            "View",
                                            {
                                              staticClass: _vm._$s(
                                                "45-" + $30,
                                                "sc",
                                                "taskdetail_title"
                                              ),
                                              attrs: { _i: "45-" + $30 }
                                            },
                                            [
                                              _c(
                                                "view",
                                                {
                                                  staticClass: _vm._$s(
                                                    "46-" + $30,
                                                    "sc",
                                                    "taskName"
                                                  ),
                                                  attrs: { _i: "46-" + $30 }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._$s(
                                                      "46-" + $30,
                                                      "t0-0",
                                                      _vm._s(
                                                        PMCOI.PMInnerProductName
                                                      )
                                                    )
                                                  ),
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass: _vm._$s(
                                                        "47-" + $30,
                                                        "sc",
                                                        "taskNum"
                                                      ),
                                                      attrs: { _i: "47-" + $30 }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._$s(
                                                          "47-" + $30,
                                                          "t0-0",
                                                          _vm._s(
                                                            PMCOI.PMOrderNum
                                                          )
                                                        ) +
                                                          _vm._$s(
                                                            "47-" + $30,
                                                            "t0-1",
                                                            _vm._s(
                                                              PMCOI.PMOrderUnit
                                                            )
                                                          )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _c(
                                            "view",
                                            {
                                              staticClass: _vm._$s(
                                                "48-" + $30,
                                                "sc",
                                                "pm-taskdetail"
                                              ),
                                              attrs: { _i: "48-" + $30 }
                                            },
                                            [
                                              _c(
                                                "view",
                                                {
                                                  staticClass: _vm._$s(
                                                    "49-" + $30,
                                                    "sc",
                                                    "pm-taskdetail__desc"
                                                  ),
                                                  attrs: { _i: "49-" + $30 }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._$s(
                                                      "49-" + $30,
                                                      "t0-0",
                                                      _vm._s(
                                                        PMCOI.ZCTFinishedNum
                                                      )
                                                    ) +
                                                      _vm._$s(
                                                        "49-" + $30,
                                                        "t0-1",
                                                        _vm._s(
                                                          PMCOI.PMOrderUnit
                                                        )
                                                      ) +
                                                      _vm._$s(
                                                        "49-" + $30,
                                                        "t0-2",
                                                        _vm._s(
                                                          PMCOI.ZCTPlanDeliDateShort
                                                        )
                                                      )
                                                  )
                                                ]
                                              ),
                                              _c(
                                                "view",
                                                {
                                                  staticClass: _vm._$s(
                                                    "50-" + $30,
                                                    "sc",
                                                    "pm-taskstate"
                                                  ),
                                                  attrs: { _i: "50-" + $30 }
                                                },
                                                [
                                                  _c(
                                                    "view",
                                                    {
                                                      staticClass: _vm._$s(
                                                        "51-" + $30,
                                                        "sc",
                                                        "pm-taskstate-time"
                                                      ),
                                                      attrs: { _i: "51-" + $30 }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._$s(
                                                          "51-" + $30,
                                                          "t0-0",
                                                          _vm._s(
                                                            PMCOI.calChangeTimeStr
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _c(
                                                    "view",
                                                    {
                                                      staticClass: _vm._$s(
                                                        "52-" + $30,
                                                        "sc",
                                                        "pm-taskstate-state"
                                                      ),
                                                      attrs: { _i: "52-" + $30 }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._$s(
                                                          "52-" + $30,
                                                          "t0-0",
                                                          _vm._s(
                                                            PMCOI.calPMState
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  ),
                                  _c(
                                    "view",
                                    {
                                      staticClass: _vm._$s(
                                        "53-" + $30,
                                        "sc",
                                        "task_progressGroup"
                                      ),
                                      attrs: { _i: "53-" + $30 }
                                    },
                                    [
                                      _vm._l(
                                        _vm._$s(54 + "-" + $30, "f", {
                                          forItems: PMCOI.calTaskStates
                                        }),
                                        function(PMCOIStates, index, $21, $31) {
                                          return _vm._$s(
                                            "54-" + $30 + "-" + $31,
                                            "i",
                                            PMCOI.calTaskStates
                                          )
                                            ? [
                                                _c(
                                                  "view",
                                                  {
                                                    key: _vm._$s(
                                                      54 + "-" + $30,
                                                      "f",
                                                      {
                                                        forIndex: $21,
                                                        keyIndex: 0,
                                                        key: index + "_0"
                                                      }
                                                    ),
                                                    staticClass: _vm._$s(
                                                      "55-" + $30 + "-" + $31,
                                                      "sc",
                                                      "task_progress"
                                                    ),
                                                    attrs: {
                                                      _i:
                                                        "55-" + $30 + "-" + $31
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "view",
                                                      {
                                                        staticClass: _vm._$s(
                                                          "56-" +
                                                            $30 +
                                                            "-" +
                                                            $31,
                                                          "sc",
                                                          "task_progressSubTxt"
                                                        ),
                                                        attrs: {
                                                          _i:
                                                            "56-" +
                                                            $30 +
                                                            "-" +
                                                            $31
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._$s(
                                                            "56-" +
                                                              $30 +
                                                              "-" +
                                                              $31,
                                                            "t0-0",
                                                            _vm._s(
                                                              PMCOIStates.calStageName
                                                            )
                                                          )
                                                        )
                                                      ]
                                                    ),
                                                    _c("view", {
                                                      staticClass: _vm._$s(
                                                        "57-" + $30 + "-" + $31,
                                                        "sc",
                                                        "task_progressSub"
                                                      ),
                                                      style: _vm._$s(
                                                        "57-" + $30 + "-" + $31,
                                                        "s",
                                                        PMCOIStates.calStageStyle
                                                      ),
                                                      attrs: {
                                                        _i:
                                                          "57-" +
                                                          $30 +
                                                          "-" +
                                                          $31
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]
                                            : _vm._e()
                                        }
                                      )
                                    ],
                                    2
                                  )
                                ]
                              )
                            ]
                          : _vm._e()
                      }
                    ),
                    _c("view")
                  ],
                  2
                )
              ]
            ),
            _vm._$s(59, "i", _vm.isMoveToDown)
              ? _c("view", [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(60, "sc", "weui-loading__wrp"),
                      attrs: { _i: 60 }
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(
                          61,
                          "sc",
                          "loading wx_dot_loading"
                        ),
                        attrs: { _i: 61 }
                      })
                    ]
                  )
                ])
              : _vm._e()
          ]
        ),
        _vm._$s(62, "i", _vm.propertyDialog.isPropertyDialogOpen)
          ? _c(
              "view",
              { staticClass: _vm._$s(62, "sc", "fadeIn"), attrs: { _i: 62 } },
              [
                _c("view", {
                  staticClass: _vm._$s(63, "sc", "weui-mask"),
                  attrs: { _i: 63 },
                  on: { click: _vm.propertyDialogClose }
                }),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(64, "sc", "weui-half-screen-dialog"),
                    attrs: { _i: 64 }
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(
                          65,
                          "sc",
                          "weui-half-screen-dialog__hd"
                        ),
                        attrs: { _i: 65 }
                      },
                      [
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(
                              66,
                              "sc",
                              "weui-half-screen-dialog__hd__side"
                            ),
                            attrs: { _i: 66 },
                            on: { click: _vm.propertyDialogClose }
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass: _vm._$s(67, "sc", "weui-icon-btn"),
                                attrs: { _i: 67 }
                              },
                              [
                                _c("i", {
                                  staticClass: _vm._$s(
                                    68,
                                    "sc",
                                    "weui-icon-back-arrow-thin"
                                  ),
                                  attrs: { _i: 68 }
                                })
                              ]
                            )
                          ]
                        ),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(
                              69,
                              "sc",
                              "weui-half-screen-dialog__hd__main"
                            ),
                            attrs: { _i: 69 }
                          },
                          [
                            _c(
                              "strong",
                              {
                                staticClass: _vm._$s(
                                  70,
                                  "sc",
                                  "weui-half-screen-dialog__title"
                                ),
                                attrs: { _i: 70 }
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    70,
                                    "t0-0",
                                    _vm._s(_vm.propertyDialog.mainTitle)
                                  )
                                )
                              ]
                            ),
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  71,
                                  "sc",
                                  "weui-half-screen-dialog__subtitle"
                                ),
                                attrs: { _i: 71 }
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    71,
                                    "t0-0",
                                    _vm._s(_vm.propertyDialog.subTitle)
                                  )
                                )
                              ]
                            )
                          ]
                        ),
                        _c("view", {
                          staticClass: _vm._$s(
                            72,
                            "sc",
                            "weui-half-screen-dialog__hd__side"
                          ),
                          attrs: { _i: 72 }
                        })
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(
                          73,
                          "sc",
                          "weui-half-screen-dialog__bd"
                        ),
                        attrs: { _i: 73 }
                      },
                      [
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(
                              74,
                              "sc",
                              "weui-half-screen-dialog__desc"
                            ),
                            attrs: { _i: 74 }
                          },
                          [
                            _vm._v(
                              _vm._$s(
                                74,
                                "t0-0",
                                _vm._s(_vm.propertyDialog.mainTip)
                              )
                            )
                          ]
                        ),
                        _c(
                          "view",
                          {
                            staticClass: _vm._$s(75, "sc", "pm-picBox"),
                            attrs: { _i: 75 }
                          },
                          [
                            _vm._$s(76, "i", _vm.ZCTProductURL)
                              ? _c("image", {
                                  staticClass: _vm._$s(
                                    76,
                                    "sc",
                                    "pm-product-image"
                                  ),
                                  attrs: {
                                    src: _vm._$s(
                                      76,
                                      "a-src",
                                      _vm.ZCTProductURL
                                    ),
                                    _i: 76
                                  }
                                })
                              : _vm._e()
                          ]
                        ),
                        _vm._$s(77, "i", _vm.propertyDialog.subTip)
                          ? _c(
                              "view",
                              {
                                staticClass: _vm._$s(
                                  77,
                                  "sc",
                                  "pm-half-screen-dialog__tips"
                                ),
                                attrs: { _i: 77 }
                              },
                              [
                                _vm._v(
                                  _vm._$s(
                                    77,
                                    "t0-0",
                                    _vm._s(_vm.propertyDialog.subTip)
                                  )
                                )
                              ]
                            )
                          : _vm._e()
                      ]
                    ),
                    _vm._$s(78, "i", _vm.propertyDialog.subInfoList)
                      ? _c(
                          "scroll-view",
                          {
                            staticClass: _vm._$s(78, "sc", "pm-scroll-view_V"),
                            attrs: { _i: 78 }
                          },
                          [
                            _c(
                              "view",
                              {
                                staticClass: _vm._$s(79, "sc", "page__bd"),
                                attrs: { _i: 79 }
                              },
                              [
                                _c(
                                  "view",
                                  {
                                    staticClass: _vm._$s(
                                      80,
                                      "sc",
                                      "weui-cells"
                                    ),
                                    attrs: { _i: 80 }
                                  },
                                  [
                                    _vm._l(
                                      _vm._$s(81, "f", {
                                        forItems: _vm.propertyDialog.subInfoList
                                      }),
                                      function(subInfo, k, $22, $32) {
                                        return [
                                          _c(
                                            "view",
                                            {
                                              key: _vm._$s(81, "f", {
                                                forIndex: $22,
                                                keyIndex: 0,
                                                key: k + "_0"
                                              }),
                                              staticClass: _vm._$s(
                                                "82-" + $32,
                                                "sc",
                                                "weui-cell weui-cell_active"
                                              ),
                                              attrs: { _i: "82-" + $32 }
                                            },
                                            [
                                              _c(
                                                "view",
                                                {
                                                  staticClass: _vm._$s(
                                                    "83-" + $32,
                                                    "sc",
                                                    "weui-cell__hd"
                                                  ),
                                                  attrs: { _i: "83-" + $32 }
                                                },
                                                [
                                                  _vm._$s(
                                                    "84-" + $32,
                                                    "i",
                                                    subInfo.ZCTProductURL
                                                  )
                                                    ? _c("image", {
                                                        attrs: {
                                                          src: _vm._$s(
                                                            "84-" + $32,
                                                            "a-src",
                                                            subInfo.ZCTProductURL
                                                          ),
                                                          _i: "84-" + $32
                                                        }
                                                      })
                                                    : _vm._e()
                                                ]
                                              ),
                                              _c(
                                                "view",
                                                {
                                                  staticClass: _vm._$s(
                                                    "85-" + $32,
                                                    "sc",
                                                    "weui-cell__bd"
                                                  ),
                                                  attrs: { _i: "85-" + $32 }
                                                },
                                                [
                                                  _c("view", [
                                                    _vm._v(
                                                      _vm._$s(
                                                        "86-" + $32,
                                                        "t0-0",
                                                        _vm._s(subInfo.mainInfo)
                                                      )
                                                    )
                                                  ]),
                                                  _c("view", [
                                                    _vm._v(
                                                      _vm._$s(
                                                        "87-" + $32,
                                                        "t0-0",
                                                        _vm._s(subInfo.subInfo)
                                                      )
                                                    )
                                                  ])
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      }
                                    )
                                  ],
                                  2
                                )
                              ]
                            )
                          ]
                        )
                      : _vm._e(),
                    _c(
                      "view",
                      {
                        class: _vm._$s(
                          88,
                          "c",
                          _vm.pm - _vm.half - _vm.screen - _vm.dialog__ft
                        ),
                        attrs: { _i: 88 }
                      },
                      [
                        _c(
                          "button",
                          {
                            class: _vm._$s(
                              89,
                              "c",
                              _vm.propertyDialog.CancelBthClass
                            ),
                            attrs: { _i: 89 },
                            on: { click: _vm.propertyDialogClose }
                          },
                          [
                            _vm._v(
                              _vm._$s(
                                89,
                                "t0-0",
                                _vm._s(_vm.propertyDialog.subOperation)
                              )
                            )
                          ]
                        ),
                        _c(
                          "button",
                          {
                            class: _vm._$s(
                              90,
                              "c",
                              _vm.propertyDialog.EditBtnClass
                            ),
                            attrs: {
                              id: _vm._$s(90, "a-id", _vm.propertyDialog._id),
                              _i: 90
                            },
                            on: { click: _vm.onPMCOIEdit }
                          },
                          [
                            _vm._v(
                              _vm._$s(
                                90,
                                "t0-0",
                                _vm._s(_vm.propertyDialog.mainOperation)
                              )
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          : _vm._e(),
        _vm._$s(91, "i", _vm.topTips)
          ? _c(
              "view",
              {
                class: _vm._$s(
                  91,
                  "c",
                  "weui-toptips weui-toptips_warn fadeIn " +
                    (_vm.hide ? "fadeOut" : "")
                ),
                attrs: { _i: 91 }
              },
              [_vm._v(_vm._$s(91, "t0-0", _vm._s(_vm.topTipsStr)))]
            )
          : _vm._e(),
        _vm._$s(92, "i", _vm.showIOSDialog.isShowIOSDialog)
          ? _c(
              "view",
              {
                staticClass: _vm._$s(92, "sc", "fadeIn"),
                attrs: {
                  id: _vm._$s(92, "a-id", _vm.showIOSDialog._id),
                  _i: 92
                },
                on: { click: _vm.onPMCOICommandSelectClose }
              },
              [
                _c("view", {
                  staticClass: _vm._$s(93, "sc", "weui-mask"),
                  attrs: { _i: 93 }
                }),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(
                      94,
                      "sc",
                      "weui-actionsheet weui-actionsheet_toggle"
                    ),
                    attrs: { _i: 94 }
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(
                          95,
                          "sc",
                          "weui-actionsheet__title"
                        ),
                        attrs: { _i: 95 }
                      },
                      [
                        _c("view", {
                          staticClass: _vm._$s(
                            96,
                            "sc",
                            "weui-actionsheet__title-text"
                          ),
                          attrs: { _i: 96 }
                        })
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(
                          97,
                          "sc",
                          "weui-actionsheet__menu"
                        ),
                        attrs: { _i: 97 }
                      },
                      [
                        _c("view", {
                          staticClass: _vm._$s(
                            98,
                            "sc",
                            "weui-actionsheet__cell"
                          ),
                          attrs: {
                            id: _vm._$s(98, "a-id", _vm.showIOSDialog._id),
                            _i: 98
                          },
                          on: { click: _vm.onPMCOISHOW }
                        }),
                        _c("view", {
                          class: _vm._$s(99, "c", _vm.classView),
                          attrs: {
                            id: _vm._$s(99, "a-id", _vm.showIOSDialog._id),
                            _i: 99
                          },
                          on: { click: _vm.onPMCOIEdit }
                        }),
                        _c("view", {
                          class: _vm._$s(100, "c", _vm.classView),
                          attrs: {
                            id: _vm._$s(100, "a-id", _vm.showIOSDialog._id),
                            _i: 100
                          },
                          on: { click: _vm.deletePMCOI }
                        }),
                        _c("view", {
                          class: _vm._$s(101, "c", _vm.classView),
                          attrs: {
                            id: _vm._$s(101, "a-id", _vm.showIOSDialog._id),
                            _i: 101
                          },
                          on: { click: _vm.addPMCOI }
                        }),
                        _c("view", {
                          class: _vm._$s(
                            102,
                            "c",
                            _vm.weui - _vm.actionsheet__cell
                          ),
                          attrs: {
                            id: _vm._$s(102, "a-id", _vm.showIOSDialog._id),
                            _i: 102
                          },
                          on: { click: _vm.sharePMCOI }
                        }),
                        _c("view", {
                          class: _vm._$s(103, "c", _vm.classView),
                          attrs: {
                            id: _vm._$s(103, "a-id", _vm.showIOSDialog._id),
                            _i: 103
                          },
                          on: { click: _vm.publishPMCOI }
                        }),
                        _vm._$s(
                          104,
                          "i",
                          _vm.ClickItemData.ZCTApplicationCount > 0
                            ? true
                            : false
                        )
                          ? _c("view", {
                              staticClass: _vm._$s(
                                104,
                                "sc",
                                "weui-actionsheet__cell"
                              ),
                              attrs: {
                                id: _vm._$s(104, "a-id", _vm.showIOSDialog._id),
                                _i: 104
                              },
                              on: { click: _vm.onAuthorizeApply }
                            })
                          : _vm._e(),
                        _vm._$s(
                          105,
                          "i",
                          _vm.ClickItemData.PMOrderState == "UNACCEPTED"
                            ? true
                            : false
                        )
                          ? _c("view", {
                              staticClass: _vm._$s(
                                105,
                                "sc",
                                "weui-actionsheet__cell"
                              ),
                              attrs: {
                                id: _vm._$s(105, "a-id", _vm.showIOSDialog._id),
                                _i: 105
                              },
                              on: { click: _vm.onFinishedApply }
                            })
                          : _vm._e()
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(
                          106,
                          "sc",
                          "weui-actionsheet__action"
                        ),
                        attrs: { _i: 106 }
                      },
                      [
                        _c("view", {
                          staticClass: _vm._$s(
                            107,
                            "sc",
                            "weui-actionsheet__cell"
                          ),
                          attrs: { _i: 107 }
                        })
                      ]
                    )
                  ]
                )
              ]
            )
          : _vm._e()
      ],
      1
    ),
    _vm._$s(108, "i", _vm.pmDialog)
      ? _c("view", [
          _c("view", {
            staticClass: _vm._$s(109, "sc", "weui-mask"),
            attrs: { _i: 109 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(110, "sc", "weui-dialog"),
              attrs: { _i: 110 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(111, "sc", "weui-dialog__hd"),
                  attrs: { _i: 111 }
                },
                [
                  _c(
                    "strong",
                    {
                      staticClass: _vm._$s(112, "sc", "weui-dialog__title"),
                      attrs: { _i: 112 }
                    },
                    [_vm._v(_vm._$s(112, "t0-0", _vm._s(_vm.dialogMainTitle)))]
                  )
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(113, "sc", "weui-dialog__bd"),
                  attrs: { _i: 113 }
                },
                [_vm._v(_vm._$s(113, "t0-0", _vm._s(_vm.dialogMainContent)))]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(114, "sc", "weui-dialog__ft"),
                  attrs: { _i: 114 }
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: _vm._$s(
                        115,
                        "sc",
                        "weui-dialog__btn weui-dialog__btn_default"
                      ),
                      attrs: { _i: 115 },
                      on: { click: _vm.pmDialogClose }
                    },
                    [
                      _vm._v(
                        _vm._$s(115, "t0-0", _vm._s(_vm.dialogSubOperation))
                      )
                    ]
                  ),
                  _c(
                    "a",
                    {
                      staticClass: _vm._$s(
                        116,
                        "sc",
                        "weui-dialog__btn weui-dialog__btn_primary"
                      ),
                      attrs: {
                        id: _vm._$s(116, "a-id", _vm.btnCommandName_id),
                        _i: 116
                      },
                      on: { click: _vm.pmDialogClose }
                    },
                    [
                      _vm._v(
                        _vm._$s(116, "t0-0", _vm._s(_vm.dialogMainOperation))
                      )
                    ]
                  )
                ]
              )
            ]
          )
        ])
      : _vm._e(),
    _vm._$s(117, "i", _vm.topTips)
      ? _c(
          "view",
          {
            class: _vm._$s(
              117,
              "c",
              "weui-toptips weui-toptips_warn fadeIn " +
                (_vm.hide ? "fadeOut" : "")
            ),
            attrs: { _i: 117 }
          },
          [_vm._v(_vm._$s(117, "t0-0", _vm._s(_vm.topTipsStr)))]
        )
      : _vm._e(),
    _vm._$s(118, "i", _vm.pmDialogShouQuan)
      ? _c("view", [
          _c("view", {
            staticClass: _vm._$s(119, "sc", "weui-mask"),
            attrs: { _i: 119 }
          }),
          _c(
            "view",
            {
              staticClass: _vm._$s(120, "sc", "weui-dialog"),
              attrs: { _i: 120 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(121, "sc", "weui-dialog__hd"),
                  attrs: { _i: 121 }
                },
                [
                  _c("strong", {
                    staticClass: _vm._$s(122, "sc", "weui-dialog__title"),
                    attrs: { _i: 122 }
                  })
                ]
              ),
              _c("view", {
                staticClass: _vm._$s(123, "sc", "weui-dialog__bd"),
                attrs: { _i: 123 }
              }),
              _c(
                "view",
                {
                  staticClass: _vm._$s(124, "sc", "weui-dialog__ft"),
                  attrs: { _i: 124 }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: _vm._$s(
                        125,
                        "sc",
                        "weui-dialog__btn weui-dialog__btn_primary"
                      ),
                      attrs: { _i: 125 },
                      on: { click: _vm.getCancel }
                    },
                    [_c("text")]
                  ),
                  _c(
                    "button",
                    {
                      staticClass: _vm._$s(
                        127,
                        "sc",
                        "weui-dialog__btn weui-dialog__btn_primary"
                      ),
                      attrs: { _i: 127 },
                      on: { click: _vm.getUserProfile }
                    },
                    [_c("text")]
                  )
                ]
              )
            ]
          )
        ])
      : _vm._e()
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 29 */
/*!******************************************************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskList/taskList.js?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_taskList_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./taskList.js?vue&type=script&lang=js&mpType=page */ 30);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_taskList_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_taskList_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_taskList_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_taskList_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_taskList_js_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtiLENBQWdCLDhjQUFHLEVBQUMiLCJmaWxlIjoiMjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuL3Rhc2tMaXN0LmpzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4vdGFza0xpc3QuanM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/pages/taskList/taskList.js?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__, wx) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));\n\n\n\n\n\n\n\n\nvar _pmSerTools = _interopRequireDefault(__webpack_require__(/*! ../../utils/pmSerTools.js */ 15));\nvar _pmJSTools = _interopRequireDefault(__webpack_require__(/*! ../../utils/pmJSTools.js */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};} //var base64 = require(\"../images/base64\");\nvar app = getApp();var btnSelectedStyle = \" box-shadow: 2px 2px 5px #000;\"; //用于动态表达按钮选中的状态\n//用于动态表达按钮选中的状态\nvar btnUnSelectedStyle = \" box-shadow: 0px 0px 0px #000;\"; //用于动态表达按钮没有选中的状态\n//用于动态表达按钮没有选中的状态\n// const pmJSTools = require(\"../../utils/pmJSTools.js\").default;\n// const pmSerTools = require(\"../../utils/pmSerTools.js\").default;\nvar DataListSkip = 0; //页起始点 （分页显示，第一页） 当系统下拉刷新时恢复到默认值\n//页起始点 （分页显示，第一页） 当系统下拉刷新时恢复到默认值\nvar DataListLimit = 10; //页长 （一次从服务器获取数据项数） 当系统下拉刷新时恢复到默认值\nvar _default = { data: function data() {return { mainTitle: \"我发布的任务\", subTips: \"显示及操作\", topTips: false, topTipsStr: \"\",\n      pmDialog: false,\n      dialogMainTitle: \"\",\n      dialogMainContent: \"\",\n      dialogSubOperation: \"\",\n      dialogMainOperation: \"\",\n      dialogPMOrderProType: \"\",\n      PMCOIList: [],\n      //PMCOI清单\n      PMCOIListSkip: 0,\n      //页号 （分页显示，第一页） //下拉初始化， 上拉加页号\n      PMCOIListLimit: DataListLimit,\n      //页长 （一次从服务器获取数据项数） //下拉初始化， 上拉加页长不变\n      isMoveToDown: false,\n      //是否上滑到底部，滑到底部进行加载更多\n      isMoveToUp: false,\n      //是否下滑到顶部，滑到顶部进行加载更新(默认是true)\n      mHeight: 1000,\n      //设置一个默认屏高参数\n      showIOSDialog: {\n        //PMCOI命令对话框\n        isShowIOSDialog: false,\n        _id: \"\" //对象主键\n      },\n\n      propertyDialog: {\n        //属性框数据\n        isPropertyDialogOpen: false,\n        //是否打开半屏组件\n        mainTitle: \"主标题\",\n        //主标题\n        subTitle: \"子标题\",\n        //子标题\n        mainTip: \"主提示\",\n        //主提示\n        subTip: \"子提示\",\n        //子提示\n        subOperation: \"取消\",\n        //辅助操作按钮提示\n        mainOperation: \"确认\",\n        //主操作按钮提示\n        _id: \"\",\n        //对象主键\n        ZCTProductURL: \"\",\n        //主对象图片\n        subInfoList: [{\n          mainInfo: \"\",\n          //属性类型\n          subInfo: \"\"\n          //属性描述\n          //  ZCTProductURL: \"\" //产品图片\n        }] },\n\n\n      classView: \"weui-actionsheet__cell\",\n      //长按交付任务弹出编辑、删除按钮默认可以操作；授权后灰色不可操作\n      ClickItemData: {},\n      //任务清单点击项的数据源。用于控制操作按钮的显示\n      OptionSelectState: ['ALLOWED'],\n      //默认查询执行中的任务\n      OptionSelectStateName: \"执行中\",\n      // topTips: false,\n      // //顶部提示显示开关\n      // topTipsStr: \"\",\n      // //顶部提示内容\n      ICOImage: {\n        ICOImageEdit: \"/static/images/icon/ico_Edit_C.png\",\n        ICOImagePublish: \"/static/images/icon/ico_PUBLISH.png\",\n        ICOImageWaitAuthorize: \"/static/images/icon/ico_WaitAuthorize.png\",\n        ICOImageEXEC: \"/static/images/icon/ico_EXEC.png\",\n        ICOImageUnaccepted: \"/static/images/icon/ico_UNACCEPTED.png\",\n        ICOImageAccept: \"/static/images/icon/ico_ACCEPT.png\" },\n\n      pmDialogShouQuan: false,\n      COIAddState: true, //交付任务创建按钮操作状态,\n      // ZCTProductURL: \"\",\n      hide: false,\n      theme: \"\",\n      btnCommandName_id: \"\" };\n\n  },\n\n  components: {},\n  props: {},\n\n  /**\r\n              * 生命周期函数--监听页面加载\r\n              */\n  onLoad: function () {var _onLoad = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(options) {var that, WXLogoState, avatarUrl, gender, nickName, eventChannel;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n              //用来给scrollview设置固定高度\n              that = this;\n              uni.getSystemInfo({\n                success: function success(res) {\n                  that.mHeight = res.windowHeight;\n                } });\n\n\n              //获取登录页面赋值的微信昵称、头像等信息 \n\n              WXLogoState = app.globalData.WXLogoState; //状态 \n\n              avatarUrl = app.globalData.avatarUrl; //授权微信号的头像 \n\n              gender = app.globalData.gender; //授权微信号性别（女：2； 男：1 ） \n\n              nickName = app.globalData.nickName; //授权微信号昵称 \n              //根据当前登陆状态判断是否还需要进行微信登陆（推荐工友和微信公众号注册时，需要进行微信登陆） \n\n              //   if (pmJSTools.IsNullOrEmpty(app.globalData._id)) {\n              //     var serRes = await pmSerTools.getAccount();\n              //     if (serRes != \"OK\") {\n              //       //弹框出现\n              //       // that.setData({\n              //       //   pmDialogShouQuan: true\n              //       // });\n              // that.pmDialogShouQuan = true;\n              //     }\n              //   }\n              if (!\n              _pmJSTools.default.IsNullOrEmpty(_pmJSTools.default.GetSubObj([options, \"dataType\"]))) {_context.next = 11;break;}_context.next = 9;return (\n\n                that.FunRefreshByOperationStatus());case 9:_context.next = 21;break;case 11:_context.t0 =\n\n              options.dataType;_context.next = _context.t0 ===\n              \"COIAddNewDone\" ? 14 : _context.t0 ===\n\n\n\n\n\n\n\n\n\n\n\n\n\n              \"loadMyCOIList\" ? 18 : _context.t0 ===\n\n\n\n              \"loadMyCOIList\" ? 19 : 20;break;case 14:that = this;eventChannel = this.getOpenerEventChannel();eventChannel.on('PMCOIList', function (PMCOIList) {// that.setData({\n                //   PMCOIList: PMCOIList\n                // });\n                that.PMCOIList = PMCOIList;});return _context.abrupt(\"break\", 21);case 18:return _context.abrupt(\"break\", 21);case 19:return _context.abrupt(\"break\", 21);case 20:return _context.abrupt(\"break\", 21);case 21:case \"end\":return _context.stop();}}}, _callee, this);}));function onLoad(_x) {return _onLoad.apply(this, arguments);}return onLoad;}(),\n\n\n\n\n\n\n\n\n  /**\r\n                                                                                                                                                                                                                                                                                                                                                                        * 生命周期函数--监听页面初次渲染完成\r\n                                                                                                                                                                                                                                                                                                                                                                        */\n  onReady: function onReady() {},\n\n  /**\r\n                                   * 生命周期函数--监听页面隐藏\r\n                                   */\n  onHide: function onHide() {},\n\n  /**\r\n                                 * 生命周期函数--监听页面卸载\r\n                                 */\n  onUnload: function onUnload() {},\n\n  /**\r\n                                     * 页面相关事件处理函数--监听用户下拉动作\r\n                                     */\n  onPullDownRefresh: function onPullDownRefresh() {},\n\n  /**\r\n                                                       * 页面上拉触底事件的处理函数\r\n                                                       */\n  onReachBottom: function onReachBottom() {},\n\n  /**\r\n                                               * 用户点击右上角分享\r\n                                               */\n  onShareAppMessage: function onShareAppMessage(event) {\n    var that = this;\n    // 来自页面内转发按钮\n    __f__(\"log\", event.target, \" at pages/taskList/taskList.js:206\");\n    return {\n      title: '制程通分享链接',\n      path: '/miniprogram/pages/taskList/taskList',\n      imageUrl: that.ZCTProductURL };\n\n  },\n\n  onShow: function onShow() {\n    var that = this;\n    // that.setData({\n    //   COIAddState: true\n    // });\n    this.COIAddState = true;\n    that.FunRefreshByOperationStatus();\n  },\n\n  methods: {\n    OnPMCOIAddNewTap: function OnPMCOIAddNewTap(event) //新增客户订单按钮\n    {var _this = this;\n      var that = this;\n\n      if (that.COIAddState == false) {\n        return;\n      }\n\n      // that.setData({\n      //  COIAddState: false\n      // }); //获取登录页面赋值的微信昵称、头像等信息 \n      that.COIAddState = false;\n\n      var WXLogoState = app.globalData.WXLogoState; //状态 \n\n      var avatarUrl = app.globalData.avatarUrl; //授权微信号的头像 \n\n      var gender = app.globalData.gender; //授权微信号性别（女：2； 男：1 ） \n\n      var nickName = app.globalData.nickName; //授权微信号昵称 \n      //根据当前登陆状态判断是否还需要进行微信登陆（推荐工友和微信公众号注册时，需要进行微信登陆） \n      //  if(WXLogoState ==true ) \n      //  { \n      //    console.log(\"弹框不出现\") \n      //    this.setData({ \n      //      pmDialogShouQuan: false, \n      //    }) \n      //  } \n      //  else \n      //  { \n      //    console.log(\"弹框出现\") \n      //    this.setData({ \n      //      pmDialogShouQuan: true, \n      //    }) \n      //  } \n      /////////////////////////////////////////////////\n      /////////////////////////////////////////////////\n      /////////////////////////////////////////////////\n\n      // if (pmJSTools.IsNullOrEmpty(app.globalData.PMUserID)) {\n      // \tconsole.log(\"弹框出现\");\n      // \t// this.setData({\n      // \t//   pmDialogShouQuan: true\n      // \t// });\n      // \tthat.pmDialogShouQuan = true;\n      // \treturn;\n      // }\n\n      __f__(\"log\", event, \" at pages/taskList/taskList.js:272\");\n      var that = this;\n      var PMCOI = {};\n      // uni.navigateTo({\n      // url: '../propertyPage/propertyPage?dataType=PMCOIAddNew',\n      // \tsuccess: res => {},\n      // \tfail: () => {},\n      // \tcomplete: () => {}\n      // });\n      wx.navigateTo({\n        url: '../propertyPage/propertyPage?dataType=PMCOIAddNew',\n        success: function success(res) {\n          // 这里给要打开的页面传递数据.  第一个参数:方法key, 第二个参数:需要传递的数据\n          res.eventChannel.emit('PMCOIList', _this.\n          PMCOIList); //传递 this.data.PMCOIList过去式为了，添加成功后。\n          //PMCOI直接添加到this.data.PMCOIList中，再返回当前界面，以减少一次数据读取\n\n          that.FunRefreshByOperationStatus();\n        } });\n\n    },\n\n    onPMCOITap: function onPMCOITap(event) //PMCOI 按下\n    {\n      __f__(\"log\", event, \" at pages/taskList/taskList.js:296\");\n      var PMCOI = {};\n      var TempisOperation = true; //是否允许操作过程管控\n\n      var tempPMCOI = _pmJSTools.default.getOneControlFromList(event.currentTarget.id, this.PMCOIList);\n\n      if (tempPMCOI.PMOrderState != \"NORELEASE\" && tempPMCOI.PMOrderState != \"PUBLISH\") {\n        TempisOperation = false;\n      } // wx.navigateTo({\n      //   url: '../taskInterface/taskInterface?dataType=PMCOITap&isOperation='+TempisOperation+'&PMCOIID=' + event.currentTarget.id,\n      // })\n      //跳转到任务详情页 \n      uni.navigateTo({\n        url: '../taskDetail/taskDetail?dataType=PMCOITap&PMCOIID=' + event.currentTarget.id,\n        success: function success(res) {},\n        fail: function fail() {},\n        complete: function complete() {} });\n\n      // wx.navigateTo({\n      //   url: '../taskDetail/taskDetail?dataType=PMCOITap&PMCOIID=' + event.currentTarget.id\n      // });\n    },\n\n    onPMCOIImageTap: function onPMCOIImageTap(event) //PMCOI 图片按钮\n    {\n      var that = this;\n      __f__(\"log\", event, \" at pages/taskList/taskList.js:322\");\n      var TempData = _pmJSTools.default.getOneControlFromList(event.currentTarget.id, this.PMCOIList);\n\n      if (_pmJSTools.default.IsNullOrEmpty(TempData)) {\n        return; //没有弹框数据，不予显示\n      }\n\n      this.propertyDialog.mainTitle = \"计划交货日期：\" + TempData.ZCTPlanDeliDateShort, //主提示\n      this.propertyDialog.subTitle = TempData.PMInnerCustomerOrderItemID, //子标题\n      this.propertyDialog.mainTip = TempData.PMInnerProductName + \"  计划数量：\" + TempData.PMOrderNum + TempData.\n      PMOrderUnit, //主标题\n      this.propertyDialog.subTip = \"已完成：\" + TempData.ZCTFinishedNum + TempData.PMOrderUnit + \"  \" + \"完成率：\" +\n      TempData.ZCTFinishedRate + \"%\", //子提示\n      this.propertyDialog.subInfoList = null;\n      this.propertyDialog.subOperation = \"取消\", //辅助操作按钮提示\n      this.propertyDialog.mainOperation = \"修改\", //主操作按钮提示\n      this.propertyDialog.isPropertyDialogOpen = true;\n      this.propertyDialog._id = TempData._id;\n\n      if (TempData.PMOrderProType == \"劳务\") {\n        this.propertyDialog.mainTip = TempData.PMInnerProductName + \"  计划天数：\" + TempData.PMOrderNum + TempData.\n        PMOrderUnit; //主标题\n      }\n\n      // this.setData({\n      //   propertyDialog: this.propertyDialog,\n      //   ZCTProductURL: TempData.ZCTProductURL //设置主对象图片\n\n      // });\n      that.propertyDialog = this.propertyDialog;\n      that.ZCTProductURL = TempData.ZCTProductURL;\n    },\n\n    propertyDialogClose: function propertyDialogClose() {\n      this.propertyDialog.isPropertyDialogOpen = false;\n      // this.setData({\n      //   propertyDialog: this.propertyDialog\n      // });\n      that.propertyDialog = this.propertyDialog;\n    },\n\n    bindLoadingMore: function bindLoadingMore() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var that;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n                __f__(\"log\", '滑到底了，开始加载更多', \" at pages/taskList/taskList.js:364\");\n                that = _this2; //setTimeout里会用到，\n\n                // that.setData({\n                //   //MoveToDow触发\n                //   isMoveToDown: true\n                // });\n                that.isMoveToDown = true;\n                setTimeout(function () {\n                  //MoveToDow 时间限制\n                  // that.setData({\n                  //   isMoveToDown: false\n                  // });\n                  that.isMoveToDown = false;\n                }, 3000);_context2.next = 6;return (\n                  _this2.getPMCOIListByUserMore());case 6:case \"end\":return _context2.stop();}}}, _callee2);}))();\n    },\n\n    bindLoadingNew: function bindLoadingNew() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var that;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n                __f__(\"log\", '滑到顶了，开始加载更多', \" at pages/taskList/taskList.js:383\");\n                that = _this3; //setTimeout里会用到，\n\n                // that.setData({\n                //   //MoveToUp触发\n                //   isMoveToUp: true\n                // });\n                that.isMoveToUp = true;\n                setTimeout(function () {\n                  //时间限制\n                  // that.setData({\n                  //   isMoveToUp: false\n                  // });\n                  that.isMoveToUp = false;\n                }, 3000); //await this.getPMCOIListByUserNew()\n\n                that.FunRefreshByOperationStatus();case 5:case \"end\":return _context3.stop();}}}, _callee3);}))();\n    },\n\n    //加载更多\n    getPMCOIListByUserMore: function getPMCOIListByUserMore() {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var that, funcName, funcPra, serRes;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:\n                that = _this4;\n                funcName = \"getPMCOIListbyAllPMUser\";\n                funcPra = {};\n                funcPra.PMUSer = {}; //从app中获得，暂时置空\n\n                _this4.PMCOIListSkip = _this4.PMCOIListSkip + _this4.PMCOIListLimit, //页起始 （分页显示，第一页） //下拉初始化， 上拉加页号\n                // this.setData({\n                //   PMCOIListSkip: this.PMCOIListSkip //页起始\n\n                // });\n                that.PMCOIListSkip = _this4.PMCOIListSkip;\n                funcPra.skipAndLimit = [_this4.PMCOIListSkip, DataListLimit]; // \n\n                funcPra.SelectState = _this4.OptionSelectState;\n                funcPra.ZCTCreater = app.globalData.PMUserID; //创建人（当前自己的UserID）\n                _context4.next = 10;return (\n                  _pmSerTools.default.exePMCOI(funcName, funcPra));case 10:serRes = _context4.sent;\n                __f__(\"log\", serRes, \" at pages/taskList/taskList.js:421\");\n\n\n\n                if (serRes.errMsg != \"OK\") {\n                  _this4.topTipsStr = serRes.errMsg;\n                  //var that = this; //setTimeout里会用到，\n                  //因为查询没有成功,增加的起始点要回退\n\n                  _this4.PMCOIListSkip = _this4.PMCOIListSkip - _this4.PMCOIListLimit, //页起始 （分页显示，第一页） //下拉初始化， 上拉加页号\n                  // this.setData({\n                  //   PMCOIListSkip: this.PMCOIListSkip //页起始\n\n                  // });\n                  that.PMCOIListSkip = _this4.PMCOIListSkip;\n                  // that.setData({\n                  //   //MoveToUp触发\n                  //   topTips: true,\n                  //   topTipsStr: that.topTipsStr\n                  // });\n                  that.topTips = true;\n                  that.topTipsStr = that.topTipsStr;\n                  setTimeout(function () {\n                    //时间限制\n                    // that.setData({\n                    //   topTips: false,\n                    //   topTipsStr: \"\"\n                    // });\n                    that.topTips = false,\n                    that.topTipsStr = \"\";\n                  }, 3000);\n                } else\n\n                {\n                  if (serRes.result != null)\n                  {\n                    if (serRes.result.length > 0)\n                    {\n                      _this4.PMCOIList = _this4.PMCOIList.concat(serRes.result); //新查询到的直接加在后面\n                      //执行计算驱动函数（有些变量是计算获得的）\n\n                      _this4.calPMCOIList();\n                      // this.setData({\n                      //   PMCOIList: this.PMCOIList\n                      // });\n                      that.PMCOIList = _this4.PMCOIList;\n                    } else\n\n                    {\n                      //因为查询没有成功,增加的起始点要回退\n                      _this4.PMCOIListSkip = _this4.PMCOIListSkip - _this4.PMCOIListLimit, //页起始 （分页显示，第一页） //下拉初始化， 上拉加页号\n                      // this.setData({\n                      //   PMCOIListSkip: this.PMCOIListSkip //页起始\n\n                      // });\n                      that.PMCOIListSkip = _this4.PMCOIListSkip;\n                    }\n\n                  }\n\n\n                  //执行为OK,但结果为空的情形。\n                  if (_pmJSTools.default.IsNullOrEmpty(_pmJSTools.default.GetSubObj([serRes.result, 0]))) //数据结果放在了result第一个数据列中,所以需要脱壳\n                    {\n\n                    }\n                }case 13:case \"end\":return _context4.stop();}}}, _callee4);}))();\n    },\n\n    //刷新\n    getPMCOIListByUserNew: function getPMCOIListByUserNew() {var _this5 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var that, funcName, funcPra, serRes;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:\n                that = _this5;\n                funcName = \"getPMCOIListbyAllPMUser\";\n                funcPra = {};\n                funcPra.PMUSer = {}; //从app中获得，暂时置空\n\n                _this5.PMCOIListSkip = DataListSkip, //页号 （分页显示，第一页） //下拉初始化， 上拉加页号\n                _this5.PMCOIListLimit = DataListLimit, //页长 （一次从服务器获取数据项数） //下拉初始化， 上拉加页长不变\n\n                that.PMCOIListSkip = _this5.PMCOIListSkip,\n                that.PMCOIListLimit = _this5.PMCOIListLimit;\n                funcPra.skipAndLimit = [DataListSkip, DataListLimit]; //0，0 标识按系统默认 \n\n                funcPra.SelectState = _this5.OptionSelectState;\n                funcPra.ZCTCreater = app.globalData.PMUserID; //创建人（当前自己的UserID）\n                _context5.next = 10;return (\n                  _pmSerTools.default.exePMCOI(funcName, funcPra));case 10:serRes = _context5.sent;\n\n                __f__(\"log\", \"前端界面获取的值为：\" + serRes, \" at pages/taskList/taskList.js:509\");\n\n                if (serRes.result.errMsg != \"OK\")\n                {\n                  _this5.topTipsStr = serRes.errMsg;\n                  that = _this5; //setTimeout里会用到，\n                  that.topTips = true,\n                  that.topTipsStr = that.topTipsStr;\n                  setTimeout(function () {\n                    that.topTips = false,\n                    that.topTipsStr = \"\";\n                  }, 3000);\n                } else\n\n                {\n                  _this5.PMCOIList = serRes.result.result; //执行计算驱动函数（有些变量是计算获得的）\n                  _this5.calPMCOIList();\n                  that.pmcoilist = _this5.PMCOIList;\n                  __f__(\"log\", _this5.PMCOIList, \" at pages/taskList/taskList.js:527\");\n                }\n\n                // if (!pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([serRes.result, 0]))) //数据结果放在了result第一个数据列中,所以需要脱壳\n                // {\n                // \tthis.PMCOIList = serRes.result[0]; //执行计算驱动函数（有些变量是计算获得的）\n                // \tthis.calPMCOIList();\n                // \tthat.pmcoilist = this.PMCOIList;\n                //     \tconsole.log(this.PMCOIList);\n                // }\n\n                // if (serRes.errMsg == \"OK\" && pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([serRes.result, 0]))) {\n                // \tthat.PMCOIList = [];\n                // }\n\n                // if (serRes.errMsg != \"OK\") {\n                // \tthis.topTipsStr = serRes.errMsg;\n                // \tvar that = this; //setTimeout里会用到，\n                // \tthat.topTips = true,\n                // \t\tthat.topTipsStr = that.topTipsStr;\n                // \tsetTimeout(function() {\n                // \t\tthat.topTips = false,\n                // \t\t\tthat.topTipsStr = \"\";\n                // \t}, 3000);\n                // }\n              case 13:case \"end\":return _context5.stop();}}}, _callee5);}))();},\n\n    onPMCOIEdit: function onPMCOIEdit(event) {\n      //PMCOI编辑\n      var that = this;\n      var TempCOIData = that.PMCOIList.find(function (e) {\n        return e._id == event.currentTarget.id;\n      });\n\n      if (!_pmJSTools.default.IsNullOrEmpty(TempCOIData)) {\n        if (TempCOIData.PMOrderState == \"NORELEASE\" || TempCOIData.PMOrderState == \"PUBLISH\") {\n          wx.navigateTo({\n            url: '../propertyPage/propertyPage?dataType=PMCOIEdit&PMCOI_id=' + event.currentTarget.\n            id,\n            success: function success(res) {\n              // 这里给要打开的页面传递数据.  第一个参数:方法key, 第二个参数:需要传递的数据\n              res.eventChannel.emit('PMCOIList', that.PMCOIList); //that.OnEditSelect();\n              //传递 this.data.PMCOIList过去式为了，添加成功后。\n              //PMCOI直接添加到this.data.PMCOIList中，再返回当前界面，以减少一次数据读取\n            } });\n\n          that.propertyDialog.isPropertyDialogOpen = false;\n          // that.setData({\n          //   propertyDialog: that.propertyDialog\n          // });\n          that.propertyDialog = that.propertyDialog;\n        } else {\n          that.ShowErrorTips(\"交付任务非编辑状态或发布状态，不能进行编辑操作！\");\n        }\n      }\n    },\n\n    //PMCOI查看\n    onPMCOISHOW: function onPMCOISHOW(event) {\n      var that = this;\n      __f__(\"log\", event, \" at pages/taskList/taskList.js:587\"); //跳转到任务属性页\n      // wx.navigateTo({\n      //   url: '../propertyPage/propertyPage?dataType=PMCOIShow&PMCOI_id='+ event.currentTarget.id,\n      //   success: res => {\n      //     // 这里给要打开的页面传递数据.  第一个参数:方法key, 第二个参数:需要传递的数据\n      //     res.eventChannel.emit('PMCOIList', this.data.PMCOIList)\n      //     //传递 this.data.PMCOIList过去式为了，添加成功后。\n      //     //PMCOI直接添加到this.data.PMCOIList中，再返回当前界面，以减少一次数据读取\n      //   }\n      // })\n      //跳转到任务详情页 \n\n      wx.navigateTo({\n        url: '../taskDetail/taskDetail?dataType=PMCOITap&PMCOIID=' + event.currentTarget.id });\n\n      this.propertyDialog.isPropertyDialogOpen = false;\n      // this.setData({\n      //   propertyDialog: this.propertyDialog\n      // });\n      that.propertyDialog = this.propertyDialog;\n    },\n\n    calPMCOIList: function calPMCOIList() //有一些字段是通过遍历PMCOIList,计算获得的，通过此函数完成。\n    {\n      //calPMCOIList只是修改this.data，并没有执行setDate进行渲染\n      for (var tempKey in this.PMCOIList) {\n        //calChangeTimeStr用于现在在任务条上的时间简称，这是个计算值，所以需要临时计算获得\n        _pmJSTools.default.calPMCOI(this.PMCOIList[tempKey]);\n      }\n    },\n\n    onPMCOICommandSelect: function onPMCOICommandSelect(event) {\n      var that = this;\n      this.showIOSDialog._id = event.currentTarget.id;\n      this.showIOSDialog;\n      this.ClickItemData = this.PMCOIList.find(function (e) {\n        return e._id == event.currentTarget.id;\n      });\n      this.showIOSDialog.isShowIOSDialog = true;\n      // this.setData({\n      //   showIOSDialog: this.showIOSDialog,\n      //   ClickItemData: this.ClickItemData\n      // });\n      that.showIOSDialog = this.showIOSDialog;\n      that.ClickItemData = this.ClickItemData;\n      var tempPMCOI = _pmJSTools.default.getOneControlFromList(event.currentTarget.id, this.PMCOIList);\n      this.dialogPMOrderProType = tempPMCOI.PMOrderProType;\n\n      if (tempPMCOI.PMOrderState != \"NORELEASE\" && tempPMCOI.PMOrderState != \"PUBLISH\") {\n        // this.setData({\n        //   classView: \"weui-actionsheet__cellnone\"\n        // }); //已授权，不允许进行删除和编辑\n        that.classView = \"weui-actionsheet__cellnone\";\n      } else {\n        // this.setData({\n        //   classView: \"weui-actionsheet__cell\"\n        // });\n        this.classView = \"weui-actionsheet__cell\";\n      }\n\n      // this.setData({\n      //   dialogPMOrderProType: this.dialogPMOrderProType\n      // });\n      that.dialogPMOrderProType = this.dialogPMOrderProType;\n    },\n\n    onPMCOICommandSelectClose: function onPMCOICommandSelectClose() {\n      this.showIOSDialog.isShowIOSDialog = false;\n      // this.setData({\n      //   showIOSDialog: this.showIOSDialog\n      // });\n      this.showIOSDialog = this.showIOSDialog;\n    },\n\n    sharePMCOI: function sharePMCOI(event) {\n      __f__(\"log\", event, \" at pages/taskList/taskList.js:662\");\n      var tempPMCOI = _pmJSTools.default.getOneControlFromList(event.currentTarget.id, this.PMCOIList);\n      wx.navigateTo({\n        url: '../sharePage/sharePage?dataType=PMCOIOpen&PMCOI_id=' + event.currentTarget.id,\n        success: function success(res) {\n          // 这里给要打开的页面传递数据.  第一个参数:方法key, 第二个参数:需要传递的数据\n          res.eventChannel.emit('PMCOI', tempPMCOI); //传递 this.data.PMCOIList过去式为了，添加成功后。\n          //PMCOI直接添加到this.data.PMCOIList中，再返回当前界面，以减少一次数据读取\n        } });\n\n    },\n\n    //删除交付任务（二次确认弹框）\n    deletePMCOI: function deletePMCOI(event) {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var funcPra, tempPMCOI;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:\n                __f__(\"log\", event, \" at pages/taskList/taskList.js:676\");\n                funcPra = {};\n                funcPra.PMCOI = {}; //准备一个空的PMCOI\n\n                funcPra.PMCOI._id = event.currentTarget.id;\n                tempPMCOI = _pmJSTools.default.getOneControlFromList(event.currentTarget.id, _this6.PMCOIList);\n                funcPra.PMCOI = tempPMCOI;\n                wx.showModal({\n                  title: '提示',\n                  content: '确认要删除吗?',\n                  success: function success(res) {\n                    if (res.confirm) {\n                      __f__(\"log\", '用户点击确定', \" at pages/taskList/taskList.js:688\");\n                      _this6.deletePMCOIConfirm(funcPra);\n                    } else if (res.cancel) {\n                      __f__(\"log\", '用户点击取消', \" at pages/taskList/taskList.js:691\");\n                    }\n                  } });case 7:case \"end\":return _context6.stop();}}}, _callee6);}))();\n\n    },\n\n    //确认进行二次删除交付任务\n    deletePMCOIConfirm: function deletePMCOIConfirm(funcPra) {var _this7 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {var that, tempRes, TempPMCOIList;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:\n                that = _this7;_context7.next = 3;return (\n                  _pmSerTools.default.exePMCOI(\"PMCOIDelete\", funcPra));case 3:tempRes = _context7.sent;\n\n                if (tempRes.errMsg == \"OK\") {\n                  //错误处理\n                  wx.showToast({\n                    title: '删除交付任务成功！',\n                    icon: 'none',\n                    duration: 2000 });\n                  //调用通用方法----删除列表数据【数组】（this.data.PMCOIList）中_id值为“funcPra.PMCOI._id\"的数据\n\n                  TempPMCOIList = _pmJSTools.default.DeleteFromList(funcPra.PMCOI._id, _this7.\n                  PMCOIList); //执行计算驱动函数（有些变量是计算获得的）\n\n                  _this7.calPMCOIList(); //将删除后的列表数组TempPMCOIList，重新赋值\n\n                  // this.setData({\n                  //   PMCOIList: TempPMCOIList\n                  // });\n                  that.PMCOIList = TempPMCOIList;\n                } else {\n                  //错误处理\n                  that.ShowErrorTips('删除交付任务错误:' + tempRes.errMsg + '！');\n                }case 5:case \"end\":return _context7.stop();}}}, _callee7);}))();\n    },\n\n    //\n    pmDialogClose: function pmDialogClose(event) {\n      // this.setData({\n      //   pmDialog: false\n      // });\n      this.pmDialog = false;\n    },\n\n    //加到我的任务\n    addPMCOI: function addPMCOI(event) {var _this8 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {var that, funcPra, tempRes, TempPMCOIList;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:\n                that = _this8; //这里准备写一个标准的添加函数\n\n                funcPra = {};\n                funcPra.ZCTPMCOI_id = event.currentTarget.id;_context8.next = 5;return (\n                  _pmSerTools.default.exePMCOI(\"AddOneMyPMCOIbyPMUser\", funcPra));case 5:tempRes = _context8.sent;\n\n                if (tempRes.errMsg == \"OK\") {\n                  wx.showToast({\n                    title: '加到我的任务成功，请到我的任务中查看',\n                    icon: 'none',\n                    duration: 2000 });\n                  //加入到我的任务中后，需要将该数据从当前列表中移除 \n                  //调用通用方法----删除列表数据【数组】（this.data.PMCOIList）中_id值为“funcPra.PMCOI._id\"的数据 \n\n                  TempPMCOIList = _pmJSTools.default.DeleteFromList(funcPra.ZCTPMCOI_id, _this8.\n                  PMCOIList); //执行计算驱动函数（有些变量是计算获得的） \n\n                  _this8.calPMCOIList(); //将删除后的列表数组TempPMCOIList，重新赋值 \n\n                  // this.setData({\n                  //   PMCOIList: TempPMCOIList\n                  // });\n                  that.PMCOIList = TempPMCOIList;\n                } else {\n                  //错误处理\n                  that.ShowErrorTips(\"创建交付任务错误:\" + tempRes.errMsg);\n                }case 7:case \"end\":return _context8.stop();}}}, _callee8);}))();\n    },\n\n    //发布\n    publishPMCOI: function publishPMCOI(event) {var _this9 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var that, funcPra, PMCOIData, TempDN, TempNowMonth, TempNowDay, TempSD;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:\n                __f__(\"log\", \"发布事件监听\", event, \" at pages/taskList/taskList.js:766\");\n                that = _this9;\n                funcPra = {};\n                funcPra.PMCOI = {};\n                PMCOIData = _pmJSTools.default.getOneControlFromList(event.currentTarget.id, _this9.\n                PMCOIList); //根据本条数据的_id，找到本条数据COI数据\n                //判断当前日期是否超过超过计划交付日期，若超过则不允许发布，若已授权也不可发布\n\n                TempDN = new Date();\n                TempNowMonth = TempDN.getMonth() + 1 > 9 ? TempDN.getMonth() + 1 : \"0\" + (TempDN.getMonth() + 1);\n                TempNowDay = TempDN.getDate() > 9 ? TempDN.getDate() : \"0\" + TempDN.getDate();\n                TempSD = TempDN.getFullYear() + \"/\" + TempNowMonth + \"/\" + TempNowDay;\n\n                if (TempSD > PMCOIData.ZCTPlanDeliDateShort || PMCOIData.PMOrderState != \"NORELEASE\" && PMCOIData.\n                PMOrderState != \"PUBLISH\") {\n                  that.ShowErrorTips(\"任务发布失败:当前任务不支持发布，已超过计划交付日期或已进入授权执行状态！\");\n                } else {\n                  wx.showModal({\n                    title: '温馨提示',\n                    content: '制程微信小程序平台仅是提供给生产车间和工人使用的任务管理工具，并不用于招聘等行为。用户应对工友登记或账号绑定时所填写的资料的真实性、合法性、准确性和有效性承担责任。',\n                    confirmText: '发布',\n                    success: function () {var _success = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9(res) {return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:\n                                if (res.confirm) {\n                                  funcPra.PMCOI = PMCOIData; //将本条数据COI信息，赋值到funPra中\n\n                                  funcPra.PMCOI._id = event.currentTarget.id;\n                                  that.FunChooseLocation(funcPra);\n                                } else if (res.cancel) {}case 1:case \"end\":return _context9.stop();}}}, _callee9);}));function success(_x2) {return _success.apply(this, arguments);}return success;}() });\n\n\n                }case 10:case \"end\":return _context10.stop();}}}, _callee10);}))();\n    },\n\n    //发布位置选择并更新\n    FunChooseLocation: function FunChooseLocation(funcPra) {var _this10 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11() {var that;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:\n                that = _this10;\n                wx.getSetting({\n                  success: function success(res) {\n                    //是否开启授权\n                    if (!res.authSetting['scope.userLocation']) {\n                      that.fetchAgainLocation(funcPra);\n                    } else {\n                      that.FunWXChooseLocation(funcPra);\n                    }\n                  } });case 2:case \"end\":return _context11.stop();}}}, _callee11);}))();\n\n\n    },\n\n    //引导重新获取授权\n    fetchAgainLocation: function fetchAgainLocation(funcPra) {\n      var that = this;\n      wx.getSetting({\n        success: function success(res) {\n          var statu = res.authSetting;\n\n          if (!statu['scope.userLocation']) {\n            wx.showModal({\n              title: '是否授权当前位置',\n              content: '需要获取您的地理位置，请确认授权，否则发布功能将无法使用',\n              success: function success(tip) {\n                if (tip.confirm) {\n                  wx.openSetting({\n                    success: function success(data) {\n                      if (data.authSetting[\n                      \"scope.userLocation\"] ===\n                      true) {\n                        //授权成功\n                        that.FunWXChooseLocation(funcPra);\n                      } else {\n                        wx.showToast({\n                          title: '授权失败',\n                          icon: 'success',\n                          duration: 1000 });\n\n                      }\n                    },\n                    fail: function fail() {},\n                    complete: function complete() {} });\n\n                }\n              } });\n\n          }\n        },\n        fail: function fail() {},\n        complete: function complete() {} });\n\n    },\n\n    //选择位置 \n    FunWXChooseLocation: function FunWXChooseLocation(funcPra) {\n      var that = this;\n      wx.chooseLocation({\n        success: function success(res) {\n          __f__(\"log\", res, \" at pages/taskList/taskList.js:861\");\n\n          if (_pmJSTools.default.IsNullOrEmpty(res.address)) {\n            wx.showModal({\n              title: '提示',\n              content: '任务发布失败:获取位置失败，是否重新发布？',\n              showCancel: true,\n\n              success: function success(res) {\n                if (res.confirm) {\n                  that.FunWXChooseLocation(funcPra);\n                }\n              } });\n\n\n          } else {\n            funcPra.PMCOI.ZCTCOILatit = res.latitude;\n            funcPra.PMCOI.ZCTCOILongit = res.longitude;\n            funcPra.PMCOI.ZCTAddress = res.address;\n            funcPra.PMCOI.PMUSerID = app.globalData._id;\n            funcPra.PMCOI.ZCTNewlatitude = res.latitude;\n            funcPra.PMCOI.ZCTNewlongitude = res.longitude;\n            app.globalData.CurrentLatitude = res.latitude;\n            app.globalData.CurrentLongitude = res.longitude;\n            that.FunPMCOIPublish(funcPra);\n          }\n        },\n        fail: function fail(res) {\n          if (res.errMsg == \"chooseLocation:fail cancel\") {\n            that.ShowErrorTips(\"任务发布失败:您取消了获取位置的授权！\");\n          } else {\n            that.ShowErrorTips(\"任务发布失败:获取位置失败！\");\n          }\n        },\n        //接口调用结束的回调函数（调用成功、失败都会执行）\n        complete: function complete(res) {} });\n\n    },\n\n    //任务发布函数\n    FunPMCOIPublish: function FunPMCOIPublish(funcPra) {var _this11 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {var that, TempRes;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:\n                that = _this11;_context12.next = 3;return (\n                  _pmSerTools.default.exePMCOI(\"PMCOIPublish\", funcPra));case 3:TempRes = _context12.sent;\n\n                if (TempRes.errMsg == \"OK\") {\n                  //刷新状态为已发布\n                  funcPra.PMCOI.PMOrderState = \"PUBLISH\"; //执行动态变量计算函数\n\n                  _pmJSTools.default.calPMCOI(funcPra.PMCOI); //执行计算驱动函数（有些变量是计算获得的）\n\n                  _pmJSTools.default.replaceOneControlFromList(funcPra.PMCOI._id, funcPra.PMCOI, _this11.PMCOIList); //刷新页面显示\n\n                  // this.setData({\n                  //   PMCOIList: this.PMCOIList\n                  // });\n                  that.PMCOIList = _this11.PMCOIList;\n                  wx.navigateTo({\n                    url: '../taskMap/taskMap?dataType=PMCOIPublish&latitude=' + funcPra.PMCOI.ZCTCOILatit +\n                    '&longitude=' + funcPra.PMCOI.ZCTCOILongit + '',\n                    success: function success(res) {\n                      that.FunRefreshByOperationStatus();\n                    } });\n\n                } else {\n                  that.ShowErrorTips(\"交付任务发布错误:\" + TempRes.errMsg);\n                }case 5:case \"end\":return _context12.stop();}}}, _callee12);}))();\n    },\n\n\n    onAuthorizeApply: function onAuthorizeApply(event) {var _this12 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {var that, TempCOIData;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:\n                that = _this12;\n                TempCOIData = that.PMCOIList.find(function (e) {\n                  return e._id == event.currentTarget.id;\n                });\n                wx.navigateTo({\n                  url: '../ApplicationRecordPage/ApplicationRecordPage?ZCTTaskID=' + event.currentTarget.id +\n                  '&dataType=Authorize&OptionCOI=' + JSON.stringify(TempCOIData) + '' });case 3:case \"end\":return _context13.stop();}}}, _callee13);}))();\n\n    },\n\n\n    onFinishedApply: function onFinishedApply(event) {var _this13 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14() {var that, TempCOIData;return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:\n                that = _this13;\n                TempCOIData = that.PMCOIList.find(function (e) {\n                  return e._id == event.currentTarget.id;\n                });\n                wx.navigateTo({\n                  url: '../ApplicationRecordPage/ApplicationRecordPage?ZCTTaskID=' + event.currentTarget.id +\n                  '&dataType=Finished&OptionCOI=' + JSON.stringify(TempCOIData) + '' });case 3:case \"end\":return _context14.stop();}}}, _callee14);}))();\n\n    },\n\n\n    OnEditSelect: function OnEditSelect() {var _this14 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15() {var that, TempStateICO;return _regenerator.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:\n                that = _this14;\n                TempStateICO = {\n                  ICOImageEdit: \"/static/images/icon/ico_Edit_C.png\",\n                  ICOImagePublish: \"/static/images/icon/ico_PUBLISH.png\",\n                  ICOImageWaitAuthorize: \"/static/images/icon/ico_WaitAuthorize.png\",\n                  ICOImageEXEC: \"/static/images/icon/ico_EXEC.png\",\n                  ICOImageUnaccepted: \"/static/images/icon/ico_UNACCEPTED.png\",\n                  ICOImageAccept: \"/static/images/icon/ico_ACCEPT.png\" };\n\n                // that.setData({\n                //   ICOImage: TempStateICO,\n                //   PMCOIListSkip: 0,\n                //   OptionSelectState: ['NORELEASE'],\n                //   OptionSelectStateName: \"编辑中\"\n                // });\n                that.ICOImage = TempStateICO;\n                that.PMCOIListSkip = 0;\n                that.OptionSelectState = ['NORELEASE'];\n                that.OptionSelectStateName = \"编辑中\";\n                that.getPMCOIListByUserNew();case 7:case \"end\":return _context15.stop();}}}, _callee15);}))();\n    },\n\n\n    OnPublishSelect: function OnPublishSelect() {var _this15 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16() {var that, TempStateICO;return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:\n                that = _this15;\n                TempStateICO = {\n                  ICOImageEdit: \"/static/images/icon/ico_Edit.png\",\n                  ICOImagePublish: \"/static/images/icon/ico_PUBLISH_C.png\",\n                  ICOImageWaitAuthorize: \"/static/images/icon/ico_WaitAuthorize.png\",\n                  ICOImageEXEC: \"/static/images/icon/ico_EXEC.png\",\n                  ICOImageUnaccepted: \"/static/images/icon/ico_UNACCEPTED.png\",\n                  ICOImageAccept: \"/static/images/icon/ico_ACCEPT.png\" };\n\n                // that.setData({\n                //   ICOImage: TempStateICO,\n                //   PMCOIListSkip: 0,\n                //   OptionSelectState: ['PUBLISH'],\n                //   OptionSelectStateName: \"发布\"\n                // });\n                that.ICOImage = TempStateICO;\n                that.PMCOIListSkip = 0;\n                that.OptionSelectState = ['PUBLISH'];\n                that.OptionSelectStateName = \"发布\";\n                that.getPMCOIListByUserNew();case 7:case \"end\":return _context16.stop();}}}, _callee16);}))();\n    },\n\n\n    OnWaitAuthorizeSelect: function OnWaitAuthorizeSelect() {var _this16 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee17() {var that, TempStateICO;return _regenerator.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:\n                that = _this16;\n                TempStateICO = {\n                  ICOImageEdit: \"/static/images/icon/ico_Edit.png\",\n                  ICOImagePublish: \"/static/images/icon/ico_PUBLISH.png\",\n                  ICOImageWaitAuthorize: \"/static/images/icon/ico_WaitAuthorize_C.png\",\n                  ICOImageEXEC: \"/static/images/icon/ico_EXEC.png\",\n                  ICOImageUnaccepted: \"/static/images/icon/ico_UNACCEPTED.png\",\n                  ICOImageAccept: \"/static/images/icon/ico_ACCEPT.png\" };\n\n                // that.setData({\n                //   ICOImage: TempStateICO,\n                //   PMCOIListSkip: 0,\n                //   OptionSelectState: ['WaitAuthorize'],\n                //   OptionSelectStateName: \"待授权\"\n                // });\n                that.ICOImage = TempStateICO;\n                that.PMCOIListSkip = 0;\n                that.OptionSelectState = ['WaitAuthorize'];\n                that.OptionSelectStateName = \"待授权\";\n                that.getPMCOIListByUserNew();case 7:case \"end\":return _context17.stop();}}}, _callee17);}))();\n    },\n\n    OnExecSelect: function OnExecSelect() {var _this17 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee18() {var that, TempStateICO;return _regenerator.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:\n                that = _this17;\n                TempStateICO = {\n                  ICOImageEdit: \"/static/images/icon/ico_Edit.png\",\n                  ICOImagePublish: \"/static/images/icon/ico_PUBLISH.png\",\n                  ICOImageWaitAuthorize: \"/static/images/icon/ico_WaitAuthorize.png\",\n                  ICOImageEXEC: \"/static/images/icon/ico_EXEC_C.png\",\n                  ICOImageUnaccepted: \"/static/images/icon/ico_UNACCEPTED.png\",\n                  ICOImageAccept: \"/static/images/icon/ico_ACCEPT.png\" };\n\n                that.ICOImage = TempStateICO;\n                that.PMCOIListSkip = 0;\n                that.OptionSelectState = ['ALLOWED'];\n                that.OptionSelectStateName = \"执行中\";\n                that.getPMCOIListByUserNew();case 7:case \"end\":return _context18.stop();}}}, _callee18);}))();\n    },\n\n\n    OnUnacceptedSelect: function OnUnacceptedSelect() {var _this18 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee19() {var that, TempStateICO;return _regenerator.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:\n                that = _this18;\n                TempStateICO = {\n                  ICOImageEdit: \"/static/images/icon/ico_Edit.png\",\n                  ICOImagePublish: \"/static/images/icon/ico_PUBLISH.png\",\n                  ICOImageWaitAuthorize: \"/static/images/icon/ico_WaitAuthorize.png\",\n                  ICOImageEXEC: \"/static/images/icon/ico_EXEC.png\",\n                  ICOImageUnaccepted: \"/static/images/icon/ico_UNACCEPTED_C.png\",\n                  ICOImageAccept: \"/static/images/icon/ico_ACCEPT.png\" };\n\n                // that.setData({\n                //   ICOImage: TempStateICO,\n                //   PMCOIListSkip: 0,\n                //   OptionSelectState: ['UNACCEPTED'],\n                //   OptionSelectStateName: \"待验收\"\n                // });\n                that.ICOImage = TempStateICO;\n                that.PMCOIListSkip = 0;\n                that.OptionSelectState = ['UNACCEPTED'];\n                that.OptionSelectStateName = \"待验收\";\n                that.getPMCOIListByUserNew();case 7:case \"end\":return _context19.stop();}}}, _callee19);}))();\n    },\n\n\n    OnAcceptSelect: function OnAcceptSelect() {var _this19 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee20() {var that, TempStateICO;return _regenerator.default.wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:\n                that = _this19;\n                TempStateICO = {\n                  ICOImageEdit: \"/static/images/icon/ico_Edit.png\",\n                  ICOImagePublish: \"/static/images/icon/ico_PUBLISH.png\",\n                  ICOImageWaitAuthorize: \"/static/images/icon/ico_WaitAuthorize.png\",\n                  ICOImageEXEC: \"/static/images/icon/ico_EXEC.png\",\n                  ICOImageUnaccepted: \"/static/images/icon/ico_UNACCEPTED.png\",\n                  ICOImageAccept: \"/static/images/icon/ico_ACCEPT_C.png\" };\n\n                // that.setData({\n                //   ICOImage: TempStateICO,\n                //   PMCOIListSkip: 0,\n                //   OptionSelectState: ['ACCEPT'],\n                //   OptionSelectStateName: \"已验收\"\n                // });\n                that.ICOImage = TempStateICO;\n                that.PMCOIListSkip = 0;\n                that.OptionSelectState = ['ACCEPT'];\n                that.OptionSelectStateName = \"已验收\";\n                that.getPMCOIListByUserNew();case 7:case \"end\":return _context20.stop();}}}, _callee20);}))();\n    },\n\n\n    FunRefreshByOperationStatus: function FunRefreshByOperationStatus() {\n      var that = this;\n      var TempOptionSelectState = that.OptionSelectStateName;\n\n      switch (TempOptionSelectState) {\n        case \"编辑中\":\n          that.OnEditSelect();\n          break;\n\n        case \"发布\":\n          that.OnPublishSelect();\n          break;\n\n        case \"待授权\":\n          that.OnWaitAuthorizeSelect();\n          break;\n\n        case \"执行中\":\n          that.OnExecSelect();\n          break;\n\n        case \"待验收\":\n          that.OnUnacceptedSelect();\n          break;\n\n        case \"已验收\":\n          that.OnAcceptSelect();\n          break;\n\n        default:\n          that.OnExecSelect();\n          break;}\n\n    },\n\n\n    ShowErrorTips: function ShowErrorTips(TempErrorMsg) {\n      var that = this; //setTimeout里会用到，\n\n      that.topTipsStr = TempErrorMsg;\n      // that.setData({\n      //   //MoveToUp触发\n      //   topTips: true,\n      //   topTipsStr: that.topTipsStr\n      // });\n      that.topTips = true;\n      that.topTipsStr = that.topTipsStr;\n      setTimeout(function () {\n\n        // that.setData({\n        //   topTips: false,\n        //   topTipsStr: \"\"\n        // });\n        that.topTips = false;\n        that.topTipsStr = \"\";\n      }, 2000);\n    },\n\n\n    getUserProfile: function () {var _getUserProfile = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee21(e) {return _regenerator.default.wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:\n                wx.navigateTo({\n                  url: '../registPage/registPage',\n                  success: function success(res) {\n                    // this.setData({\n                    //   pmDialogShouQuan: false\n                    // });\n                    that.pmDialogShouQuan = false;\n                  } });case 1:case \"end\":return _context21.stop();}}}, _callee21);}));function getUserProfile(_x3) {return _getUserProfile.apply(this, arguments);}return getUserProfile;}(),\n\n\n\n    getCancel: function () {var _getCancel = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee22(e) {return _regenerator.default.wrap(function _callee22$(_context22) {while (1) {switch (_context22.prev = _context22.next) {case 0:\n                // this.setData({\n                //   pmDialogShouQuan: false\n                // });\n                that.pmDialogShouQuan = false;case 1:case \"end\":return _context22.stop();}}}, _callee22);}));function getCancel(_x4) {return _getCancel.apply(this, arguments);}return getCancel;}() } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 14)[\"default\"], __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 11)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGFza0xpc3QvdGFza0xpc3QuanMiXSwibmFtZXMiOlsiYXBwIiwiZ2V0QXBwIiwiYnRuU2VsZWN0ZWRTdHlsZSIsImJ0blVuU2VsZWN0ZWRTdHlsZSIsIkRhdGFMaXN0U2tpcCIsIkRhdGFMaXN0TGltaXQiLCJkYXRhIiwibWFpblRpdGxlIiwic3ViVGlwcyIsInRvcFRpcHMiLCJ0b3BUaXBzU3RyIiwicG1EaWFsb2ciLCJkaWFsb2dNYWluVGl0bGUiLCJkaWFsb2dNYWluQ29udGVudCIsImRpYWxvZ1N1Yk9wZXJhdGlvbiIsImRpYWxvZ01haW5PcGVyYXRpb24iLCJkaWFsb2dQTU9yZGVyUHJvVHlwZSIsIlBNQ09JTGlzdCIsIlBNQ09JTGlzdFNraXAiLCJQTUNPSUxpc3RMaW1pdCIsImlzTW92ZVRvRG93biIsImlzTW92ZVRvVXAiLCJtSGVpZ2h0Iiwic2hvd0lPU0RpYWxvZyIsImlzU2hvd0lPU0RpYWxvZyIsIl9pZCIsInByb3BlcnR5RGlhbG9nIiwiaXNQcm9wZXJ0eURpYWxvZ09wZW4iLCJzdWJUaXRsZSIsIm1haW5UaXAiLCJzdWJUaXAiLCJzdWJPcGVyYXRpb24iLCJtYWluT3BlcmF0aW9uIiwiWkNUUHJvZHVjdFVSTCIsInN1YkluZm9MaXN0IiwibWFpbkluZm8iLCJzdWJJbmZvIiwiY2xhc3NWaWV3IiwiQ2xpY2tJdGVtRGF0YSIsIk9wdGlvblNlbGVjdFN0YXRlIiwiT3B0aW9uU2VsZWN0U3RhdGVOYW1lIiwiSUNPSW1hZ2UiLCJJQ09JbWFnZUVkaXQiLCJJQ09JbWFnZVB1Ymxpc2giLCJJQ09JbWFnZVdhaXRBdXRob3JpemUiLCJJQ09JbWFnZUVYRUMiLCJJQ09JbWFnZVVuYWNjZXB0ZWQiLCJJQ09JbWFnZUFjY2VwdCIsInBtRGlhbG9nU2hvdVF1YW4iLCJDT0lBZGRTdGF0ZSIsImhpZGUiLCJ0aGVtZSIsImJ0bkNvbW1hbmROYW1lX2lkIiwiY29tcG9uZW50cyIsInByb3BzIiwib25Mb2FkIiwib3B0aW9ucyIsInRoYXQiLCJ1bmkiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIldYTG9nb1N0YXRlIiwiZ2xvYmFsRGF0YSIsImF2YXRhclVybCIsImdlbmRlciIsIm5pY2tOYW1lIiwicG1KU1Rvb2xzIiwiSXNOdWxsT3JFbXB0eSIsIkdldFN1Yk9iaiIsIkZ1blJlZnJlc2hCeU9wZXJhdGlvblN0YXR1cyIsImRhdGFUeXBlIiwiZXZlbnRDaGFubmVsIiwiZ2V0T3BlbmVyRXZlbnRDaGFubmVsIiwib24iLCJvblJlYWR5Iiwib25IaWRlIiwib25VbmxvYWQiLCJvblB1bGxEb3duUmVmcmVzaCIsIm9uUmVhY2hCb3R0b20iLCJvblNoYXJlQXBwTWVzc2FnZSIsImV2ZW50IiwidGFyZ2V0IiwidGl0bGUiLCJwYXRoIiwiaW1hZ2VVcmwiLCJvblNob3ciLCJtZXRob2RzIiwiT25QTUNPSUFkZE5ld1RhcCIsIlBNQ09JIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZW1pdCIsIm9uUE1DT0lUYXAiLCJUZW1waXNPcGVyYXRpb24iLCJ0ZW1wUE1DT0kiLCJnZXRPbmVDb250cm9sRnJvbUxpc3QiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJQTU9yZGVyU3RhdGUiLCJmYWlsIiwiY29tcGxldGUiLCJvblBNQ09JSW1hZ2VUYXAiLCJUZW1wRGF0YSIsIlpDVFBsYW5EZWxpRGF0ZVNob3J0IiwiUE1Jbm5lckN1c3RvbWVyT3JkZXJJdGVtSUQiLCJQTUlubmVyUHJvZHVjdE5hbWUiLCJQTU9yZGVyTnVtIiwiUE1PcmRlclVuaXQiLCJaQ1RGaW5pc2hlZE51bSIsIlpDVEZpbmlzaGVkUmF0ZSIsIlBNT3JkZXJQcm9UeXBlIiwicHJvcGVydHlEaWFsb2dDbG9zZSIsImJpbmRMb2FkaW5nTW9yZSIsInNldFRpbWVvdXQiLCJnZXRQTUNPSUxpc3RCeVVzZXJNb3JlIiwiYmluZExvYWRpbmdOZXciLCJmdW5jTmFtZSIsImZ1bmNQcmEiLCJQTVVTZXIiLCJza2lwQW5kTGltaXQiLCJTZWxlY3RTdGF0ZSIsIlpDVENyZWF0ZXIiLCJQTVVzZXJJRCIsInBtU2VyVG9vbHMiLCJleGVQTUNPSSIsInNlclJlcyIsImVyck1zZyIsInJlc3VsdCIsImxlbmd0aCIsImNvbmNhdCIsImNhbFBNQ09JTGlzdCIsImdldFBNQ09JTGlzdEJ5VXNlck5ldyIsInBtY29pbGlzdCIsIm9uUE1DT0lFZGl0IiwiVGVtcENPSURhdGEiLCJmaW5kIiwiZSIsIlNob3dFcnJvclRpcHMiLCJvblBNQ09JU0hPVyIsInRlbXBLZXkiLCJjYWxQTUNPSSIsIm9uUE1DT0lDb21tYW5kU2VsZWN0Iiwib25QTUNPSUNvbW1hbmRTZWxlY3RDbG9zZSIsInNoYXJlUE1DT0kiLCJkZWxldGVQTUNPSSIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJjb25maXJtIiwiZGVsZXRlUE1DT0lDb25maXJtIiwiY2FuY2VsIiwidGVtcFJlcyIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIlRlbXBQTUNPSUxpc3QiLCJEZWxldGVGcm9tTGlzdCIsInBtRGlhbG9nQ2xvc2UiLCJhZGRQTUNPSSIsIlpDVFBNQ09JX2lkIiwicHVibGlzaFBNQ09JIiwiUE1DT0lEYXRhIiwiVGVtcEROIiwiRGF0ZSIsIlRlbXBOb3dNb250aCIsImdldE1vbnRoIiwiVGVtcE5vd0RheSIsImdldERhdGUiLCJUZW1wU0QiLCJnZXRGdWxsWWVhciIsImNvbmZpcm1UZXh0IiwiRnVuQ2hvb3NlTG9jYXRpb24iLCJnZXRTZXR0aW5nIiwiYXV0aFNldHRpbmciLCJmZXRjaEFnYWluTG9jYXRpb24iLCJGdW5XWENob29zZUxvY2F0aW9uIiwic3RhdHUiLCJ0aXAiLCJvcGVuU2V0dGluZyIsImNob29zZUxvY2F0aW9uIiwiYWRkcmVzcyIsInNob3dDYW5jZWwiLCJaQ1RDT0lMYXRpdCIsImxhdGl0dWRlIiwiWkNUQ09JTG9uZ2l0IiwibG9uZ2l0dWRlIiwiWkNUQWRkcmVzcyIsIlBNVVNlcklEIiwiWkNUTmV3bGF0aXR1ZGUiLCJaQ1ROZXdsb25naXR1ZGUiLCJDdXJyZW50TGF0aXR1ZGUiLCJDdXJyZW50TG9uZ2l0dWRlIiwiRnVuUE1DT0lQdWJsaXNoIiwiVGVtcFJlcyIsInJlcGxhY2VPbmVDb250cm9sRnJvbUxpc3QiLCJvbkF1dGhvcml6ZUFwcGx5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9uRmluaXNoZWRBcHBseSIsIk9uRWRpdFNlbGVjdCIsIlRlbXBTdGF0ZUlDTyIsIk9uUHVibGlzaFNlbGVjdCIsIk9uV2FpdEF1dGhvcml6ZVNlbGVjdCIsIk9uRXhlY1NlbGVjdCIsIk9uVW5hY2NlcHRlZFNlbGVjdCIsIk9uQWNjZXB0U2VsZWN0IiwiVGVtcE9wdGlvblNlbGVjdFN0YXRlIiwiVGVtcEVycm9yTXNnIiwiZ2V0VXNlclByb2ZpbGUiLCJnZXRDYW5jZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVNDO0FBQ0EsaUcsZ3RCQVRBO0FBQ0EsSUFBTUEsR0FBRyxHQUFHQyxNQUFNLEVBQWxCLENBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsZ0NBQXpCLEMsQ0FBMkQ7QUFDM0Q7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxnQ0FBM0IsQyxDQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFHQSxJQUFNQyxZQUFZLEdBQUcsQ0FBckIsQyxDQUF3QjtBQUN4QjtBQUNBLElBQU1DLGFBQWEsR0FBRyxFQUF0QixDLENBQTBCO2VBQ1gsRUFDZEMsSUFEYyxrQkFDUCxDQUNOLE9BQU8sRUFDTkMsU0FBUyxFQUFFLFFBREwsRUFFTkMsT0FBTyxFQUFFLE9BRkgsRUFHTkMsT0FBTyxFQUFFLEtBSEgsRUFJTkMsVUFBVSxFQUFFLEVBSk47QUFLTkMsY0FBUSxFQUFFLEtBTEo7QUFNTkMscUJBQWUsRUFBRSxFQU5YO0FBT05DLHVCQUFpQixFQUFFLEVBUGI7QUFRTkMsd0JBQWtCLEVBQUUsRUFSZDtBQVNOQyx5QkFBbUIsRUFBRSxFQVRmO0FBVU5DLDBCQUFvQixFQUFFLEVBVmhCO0FBV05DLGVBQVMsRUFBRSxFQVhMO0FBWU47QUFDQUMsbUJBQWEsRUFBRSxDQWJUO0FBY047QUFDQUMsb0JB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QUFDL0MsVUFBdkI7QUFDQTBHLGdCQUFVLENBQUMsWUFBVzs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTNELFlBQUksQ0FBQ2hELE9BQUwsR0FBZSxLQUFmO0FBQ0FnRCxZQUFJLENBQUMvQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsT0FSUyxFQVFQLElBUk8sQ0FBVjtBQVNBLEtBNTVCTzs7O0FBKzVCUndNLGtCQUFjLCtGQUFFLG1CQUFldkUsQ0FBZjtBQUNmaEQsa0JBQUUsQ0FBQ0MsVUFBSCxDQUFjO0FBQ2JDLHFCQUFHLEVBQUUsMEJBRFE7QUFFYmpDLHlCQUFPLEVBQUUsaUJBQUFDLEdBQUcsRUFBSTtBQUNmO0FBQ0E7QUFDQTtBQUNBSix3QkFBSSxDQUFDVCxnQkFBTCxHQUF3QixLQUF4QjtBQUNBLG1CQVBZLEVBQWQsRUFEZSw0REFBRix5R0EvNUJOOzs7O0FBMjZCUm1LLGFBQVMsMEZBQUUsbUJBQWV4RSxDQUFmO0FBQ1Y7QUFDQTtBQUNBO0FBQ0FsRixvQkFBSSxDQUFDVCxnQkFBTCxHQUF3QixLQUF4QixDQUpVLDREQUFGLDBGQTM2QkQsRUFoTkssRSIsImZpbGUiOiIzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cdC8vdmFyIGJhc2U2NCA9IHJlcXVpcmUoXCIuLi9pbWFnZXMvYmFzZTY0XCIpO1xyXG5cdGNvbnN0IGFwcCA9IGdldEFwcCgpO1xyXG5cdGNvbnN0IGJ0blNlbGVjdGVkU3R5bGUgPSBcIiBib3gtc2hhZG93OiAycHggMnB4IDVweCAjMDAwO1wiOyAvL+eUqOS6juWKqOaAgeihqOi+vuaMiemSrumAieS4reeahOeKtuaAgVxyXG5cdC8v55So5LqO5Yqo5oCB6KGo6L6+5oyJ6ZKu6YCJ5Lit55qE54q25oCBXHJcblx0Y29uc3QgYnRuVW5TZWxlY3RlZFN0eWxlID0gXCIgYm94LXNoYWRvdzogMHB4IDBweCAwcHggIzAwMDtcIjsgLy/nlKjkuo7liqjmgIHooajovr7mjInpkq7msqHmnInpgInkuK3nmoTnirbmgIFcclxuXHQvL+eUqOS6juWKqOaAgeihqOi+vuaMiemSruayoeaciemAieS4reeahOeKtuaAgVxyXG5cdC8vIGNvbnN0IHBtSlNUb29scyA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy9wbUpTVG9vbHMuanNcIikuZGVmYXVsdDtcclxuXHQvLyBjb25zdCBwbVNlclRvb2xzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3BtU2VyVG9vbHMuanNcIikuZGVmYXVsdDtcclxuXHRpbXBvcnQgcG1TZXJUb29scyBmcm9tICcuLi8uLi91dGlscy9wbVNlclRvb2xzLmpzJztcclxuXHRpbXBvcnQgcG1KU1Rvb2xzIGZyb20gJy4uLy4uL3V0aWxzL3BtSlNUb29scy5qcyc7XHJcblx0Y29uc3QgRGF0YUxpc3RTa2lwID0gMDsgLy/pobXotbflp4vngrkg77yI5YiG6aG15pi+56S677yM56ys5LiA6aG177yJIOW9k+ezu+e7n+S4i+aLieWIt+aWsOaXtuaBouWkjeWIsOm7mOiupOWAvFxyXG5cdC8v6aG16LW35aeL54K5IO+8iOWIhumhteaYvuekuu+8jOesrOS4gOmhte+8iSDlvZPns7vnu5/kuIvmi4nliLfmlrDml7bmgaLlpI3liLDpu5jorqTlgLxcclxuXHRjb25zdCBEYXRhTGlzdExpbWl0ID0gMTA7IC8v6aG16ZW/IO+8iOS4gOasoeS7juacjeWKoeWZqOiOt+WPluaVsOaNrumhueaVsO+8iSDlvZPns7vnu5/kuIvmi4nliLfmlrDml7bmgaLlpI3liLDpu5jorqTlgLxcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdG1haW5UaXRsZTogXCLmiJHlj5HluIPnmoTku7vliqFcIixcclxuXHRcdFx0XHRzdWJUaXBzOiBcIuaYvuekuuWPiuaTjeS9nFwiLFxyXG5cdFx0XHRcdHRvcFRpcHM6IGZhbHNlLFxyXG5cdFx0XHRcdHRvcFRpcHNTdHI6IFwiXCIsXHJcblx0XHRcdFx0cG1EaWFsb2c6IGZhbHNlLFxyXG5cdFx0XHRcdGRpYWxvZ01haW5UaXRsZTogXCJcIixcclxuXHRcdFx0XHRkaWFsb2dNYWluQ29udGVudDogXCJcIixcclxuXHRcdFx0XHRkaWFsb2dTdWJPcGVyYXRpb246IFwiXCIsXHJcblx0XHRcdFx0ZGlhbG9nTWFpbk9wZXJhdGlvbjogXCJcIixcclxuXHRcdFx0XHRkaWFsb2dQTU9yZGVyUHJvVHlwZTogXCJcIixcclxuXHRcdFx0XHRQTUNPSUxpc3Q6IFtdLFxyXG5cdFx0XHRcdC8vUE1DT0nmuIXljZVcclxuXHRcdFx0XHRQTUNPSUxpc3RTa2lwOiAwLFxyXG5cdFx0XHRcdC8v6aG15Y+3IO+8iOWIhumhteaYvuekuu+8jOesrOS4gOmhte+8iSAvL+S4i+aLieWIneWni+WMlu+8jCDkuIrmi4nliqDpobXlj7dcclxuXHRcdFx0XHRQTUNPSUxpc3RMaW1pdDogRGF0YUxpc3RMaW1pdCxcclxuXHRcdFx0XHQvL+mhtemVvyDvvIjkuIDmrKHku47mnI3liqHlmajojrflj5bmlbDmja7pobnmlbDvvIkgLy/kuIvmi4nliJ3lp4vljJbvvIwg5LiK5ouJ5Yqg6aG16ZW/5LiN5Y+YXHJcblx0XHRcdFx0aXNNb3ZlVG9Eb3duOiBmYWxzZSxcclxuXHRcdFx0XHQvL+aYr+WQpuS4iua7keWIsOW6lemDqO+8jOa7keWIsOW6lemDqOi/m+ihjOWKoOi9veabtOWkmlxyXG5cdFx0XHRcdGlzTW92ZVRvVXA6IGZhbHNlLFxyXG5cdFx0XHRcdC8v5piv5ZCm5LiL5ruR5Yiw6aG26YOo77yM5ruR5Yiw6aG26YOo6L+b6KGM5Yqg6L295pu05pawKOm7mOiupOaYr3RydWUpXHJcblx0XHRcdFx0bUhlaWdodDogMTAwMCxcclxuXHRcdFx0XHQvL+iuvue9ruS4gOS4qum7mOiupOWxj+mrmOWPguaVsFxyXG5cdFx0XHRcdHNob3dJT1NEaWFsb2c6IHtcclxuXHRcdFx0XHRcdC8vUE1DT0nlkb3ku6Tlr7nor53moYZcclxuXHRcdFx0XHRcdGlzU2hvd0lPU0RpYWxvZzogZmFsc2UsXHJcblx0XHRcdFx0XHRfaWQ6IFwiXCIgLy/lr7nosaHkuLvplK5cclxuXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRwcm9wZXJ0eURpYWxvZzoge1xyXG5cdFx0XHRcdFx0Ly/lsZ7mgKfmoYbmlbDmja5cclxuXHRcdFx0XHRcdGlzUHJvcGVydHlEaWFsb2dPcGVuOiBmYWxzZSxcclxuXHRcdFx0XHRcdC8v5piv5ZCm5omT5byA5Y2K5bGP57uE5Lu2XHJcblx0XHRcdFx0XHRtYWluVGl0bGU6IFwi5Li75qCH6aKYXCIsXHJcblx0XHRcdFx0XHQvL+S4u+agh+mimFxyXG5cdFx0XHRcdFx0c3ViVGl0bGU6IFwi5a2Q5qCH6aKYXCIsXHJcblx0XHRcdFx0XHQvL+WtkOagh+mimFxyXG5cdFx0XHRcdFx0bWFpblRpcDogXCLkuLvmj5DnpLpcIixcclxuXHRcdFx0XHRcdC8v5Li75o+Q56S6XHJcblx0XHRcdFx0XHRzdWJUaXA6IFwi5a2Q5o+Q56S6XCIsXHJcblx0XHRcdFx0XHQvL+WtkOaPkOekulxyXG5cdFx0XHRcdFx0c3ViT3BlcmF0aW9uOiBcIuWPlua2iFwiLFxyXG5cdFx0XHRcdFx0Ly/ovoXliqnmk43kvZzmjInpkq7mj5DnpLpcclxuXHRcdFx0XHRcdG1haW5PcGVyYXRpb246IFwi56Gu6K6kXCIsXHJcblx0XHRcdFx0XHQvL+S4u+aTjeS9nOaMiemSruaPkOekulxyXG5cdFx0XHRcdFx0X2lkOiBcIlwiLFxyXG5cdFx0XHRcdFx0Ly/lr7nosaHkuLvplK5cclxuXHRcdFx0XHRcdFpDVFByb2R1Y3RVUkw6IFwiXCIsXHJcblx0XHRcdFx0XHQvL+S4u+WvueixoeWbvueJh1xyXG5cdFx0XHRcdFx0c3ViSW5mb0xpc3Q6IFt7XHJcblx0XHRcdFx0XHRcdG1haW5JbmZvOiBcIlwiLFxyXG5cdFx0XHRcdFx0XHQvL+WxnuaAp+exu+Wei1xyXG5cdFx0XHRcdFx0XHRzdWJJbmZvOiBcIlwiLFxyXG5cdFx0XHRcdFx0XHQvL+WxnuaAp+aPj+i/sFxyXG5cdFx0XHRcdFx0XHQvLyAgWkNUUHJvZHVjdFVSTDogXCJcIiAvL+S6p+WTgeWbvueJh1xyXG5cclxuXHRcdFx0XHRcdH1dXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRjbGFzc1ZpZXc6IFwid2V1aS1hY3Rpb25zaGVldF9fY2VsbFwiLFxyXG5cdFx0XHRcdC8v6ZW/5oyJ5Lqk5LuY5Lu75Yqh5by55Ye657yW6L6R44CB5Yig6Zmk5oyJ6ZKu6buY6K6k5Y+v5Lul5pON5L2c77yb5o6I5p2D5ZCO54Gw6Imy5LiN5Y+v5pON5L2cXHJcblx0XHRcdFx0Q2xpY2tJdGVtRGF0YToge30sXHJcblx0XHRcdFx0Ly/ku7vliqHmuIXljZXngrnlh7vpobnnmoTmlbDmja7mupDjgILnlKjkuo7mjqfliLbmk43kvZzmjInpkq7nmoTmmL7npLpcclxuXHRcdFx0XHRPcHRpb25TZWxlY3RTdGF0ZTogWydBTExPV0VEJ10sXHJcblx0XHRcdFx0Ly/pu5jorqTmn6Xor6LmiafooYzkuK3nmoTku7vliqFcclxuXHRcdFx0XHRPcHRpb25TZWxlY3RTdGF0ZU5hbWU6IFwi5omn6KGM5LitXCIsXHJcblx0XHRcdFx0Ly8gdG9wVGlwczogZmFsc2UsXHJcblx0XHRcdFx0Ly8gLy/pobbpg6jmj5DnpLrmmL7npLrlvIDlhbNcclxuXHRcdFx0XHQvLyB0b3BUaXBzU3RyOiBcIlwiLFxyXG5cdFx0XHRcdC8vIC8v6aG26YOo5o+Q56S65YaF5a65XHJcblx0XHRcdFx0SUNPSW1hZ2U6IHtcclxuXHRcdFx0XHRcdElDT0ltYWdlRWRpdDogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19FZGl0X0MucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZVB1Ymxpc2g6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fUFVCTElTSC5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlV2FpdEF1dGhvcml6ZTogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19XYWl0QXV0aG9yaXplLnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VFWEVDOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX0VYRUMucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZVVuYWNjZXB0ZWQ6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fVU5BQ0NFUFRFRC5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlQWNjZXB0OiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX0FDQ0VQVC5wbmdcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cG1EaWFsb2dTaG91UXVhbjogZmFsc2UsXHJcblx0XHRcdFx0Q09JQWRkU3RhdGU6IHRydWUsIC8v5Lqk5LuY5Lu75Yqh5Yib5bu65oyJ6ZKu5pON5L2c54q25oCBLFxyXG5cdFx0XHRcdC8vIFpDVFByb2R1Y3RVUkw6IFwiXCIsXHJcblx0XHRcdFx0aGlkZTogZmFsc2UsXHJcblx0XHRcdFx0dGhlbWU6IFwiXCIsXHJcblx0XHRcdFx0YnRuQ29tbWFuZE5hbWVfaWQ6IFwiXCJcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Y29tcG9uZW50czoge30sXHJcblx0XHRwcm9wczoge30sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG5cdFx0ICovXHJcblx0XHRvbkxvYWQ6IGFzeW5jIGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHRcdFx0Ly/nlKjmnaXnu5lzY3JvbGx2aWV36K6+572u5Zu65a6a6auY5bqmXHJcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0dGhhdC5tSGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHJcblx0XHRcdC8v6I635Y+W55m75b2V6aG16Z2i6LWL5YC855qE5b6u5L+h5pi156ew44CB5aS05YOP562J5L+h5oGvIFxyXG5cclxuXHRcdFx0dmFyIFdYTG9nb1N0YXRlID0gYXBwLmdsb2JhbERhdGEuV1hMb2dvU3RhdGU7IC8v54q25oCBIFxyXG5cclxuXHRcdFx0dmFyIGF2YXRhclVybCA9IGFwcC5nbG9iYWxEYXRhLmF2YXRhclVybDsgLy/mjojmnYPlvq7kv6Hlj7fnmoTlpLTlg48gXHJcblxyXG5cdFx0XHR2YXIgZ2VuZGVyID0gYXBwLmdsb2JhbERhdGEuZ2VuZGVyOyAvL+aOiOadg+W+ruS/oeWPt+aAp+WIq++8iOWls++8mjLvvJsg55S377yaMSDvvIkgXHJcblxyXG5cdFx0XHR2YXIgbmlja05hbWUgPSBhcHAuZ2xvYmFsRGF0YS5uaWNrTmFtZTsgLy/mjojmnYPlvq7kv6Hlj7fmmLXnp7AgXHJcblx0XHRcdC8v5qC55o2u5b2T5YmN55m76ZmG54q25oCB5Yik5pat5piv5ZCm6L+Y6ZyA6KaB6L+b6KGM5b6u5L+h55m76ZmG77yI5o6o6I2Q5bel5Y+L5ZKM5b6u5L+h5YWs5LyX5Y+35rOo5YaM5pe277yM6ZyA6KaB6L+b6KGM5b6u5L+h55m76ZmG77yJIFxyXG5cclxuXHRcdFx0Ly8gICBpZiAocG1KU1Rvb2xzLklzTnVsbE9yRW1wdHkoYXBwLmdsb2JhbERhdGEuX2lkKSkge1xyXG5cdFx0XHQvLyAgICAgdmFyIHNlclJlcyA9IGF3YWl0IHBtU2VyVG9vbHMuZ2V0QWNjb3VudCgpO1xyXG5cdFx0XHQvLyAgICAgaWYgKHNlclJlcyAhPSBcIk9LXCIpIHtcclxuXHRcdFx0Ly8gICAgICAgLy/lvLnmoYblh7rnjrBcclxuXHRcdFx0Ly8gICAgICAgLy8gdGhhdC5zZXREYXRhKHtcclxuXHRcdFx0Ly8gICAgICAgLy8gICBwbURpYWxvZ1Nob3VRdWFuOiB0cnVlXHJcblx0XHRcdC8vICAgICAgIC8vIH0pO1xyXG5cdFx0XHQvLyB0aGF0LnBtRGlhbG9nU2hvdVF1YW4gPSB0cnVlO1xyXG5cdFx0XHQvLyAgICAgfVxyXG5cdFx0XHQvLyAgIH1cclxuXHJcblx0XHRcdGlmIChwbUpTVG9vbHMuSXNOdWxsT3JFbXB0eShwbUpTVG9vbHMuR2V0U3ViT2JqKFtvcHRpb25zLCBcImRhdGFUeXBlXCJdKSkpIHtcclxuXHRcdFx0XHQvL+WIt+aWsOWKoOi9vVxyXG5cdFx0XHRcdGF3YWl0IHRoYXQuRnVuUmVmcmVzaEJ5T3BlcmF0aW9uU3RhdHVzKCk7IC8v6buY6K6k5Yqg6L295omn6KGM5Lit54q25oCBXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c3dpdGNoIChvcHRpb25zLmRhdGFUeXBlKSB7XHJcblx0XHRcdFx0XHRjYXNlIFwiQ09JQWRkTmV3RG9uZVwiOlxyXG5cdFx0XHRcdFx0Ly/mlrDlop7kuIDkuKpQTUNPSeeahOaDheW9olxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0XHRcdGxldCBldmVudENoYW5uZWwgPSB0aGlzLmdldE9wZW5lckV2ZW50Q2hhbm5lbCgpO1xyXG5cdFx0XHRcdFx0XHRldmVudENoYW5uZWwub24oJ1BNQ09JTGlzdCcsIFBNQ09JTGlzdCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gdGhhdC5zZXREYXRhKHtcclxuXHRcdFx0XHRcdFx0XHQvLyAgIFBNQ09JTGlzdDogUE1DT0lMaXN0XHJcblx0XHRcdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5QTUNPSUxpc3QgPSBQTUNPSUxpc3Q7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRjYXNlIFwibG9hZE15Q09JTGlzdFwiOiB7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGNhc2UgXCJsb2FkTXlDT0lMaXN0XCI6IHtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gLy9cclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcclxuXHRcdCAqL1xyXG5cdFx0b25SZWFkeTogZnVuY3Rpb24oKSB7fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcblx0XHQgKi9cclxuXHRcdG9uSGlkZTogZnVuY3Rpb24oKSB7fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcblx0XHQgKi9cclxuXHRcdG9uVW5sb2FkOiBmdW5jdGlvbigpIHt9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuXHRcdCAqL1xyXG5cdFx0b25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uKCkge30sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuXHRcdCAqL1xyXG5cdFx0b25SZWFjaEJvdHRvbTogZnVuY3Rpb24oKSB7fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xyXG5cdFx0ICovXHJcblx0XHRvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHQvLyDmnaXoh6rpobXpnaLlhoXovazlj5HmjInpkq5cclxuXHRcdFx0Y29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR0aXRsZTogJ+WItueoi+mAmuWIhuS6q+mTvuaOpScsXHJcblx0XHRcdFx0cGF0aDogJy9taW5pcHJvZ3JhbS9wYWdlcy90YXNrTGlzdC90YXNrTGlzdCcsXHJcblx0XHRcdFx0aW1hZ2VVcmw6IHRoYXQuWkNUUHJvZHVjdFVSTFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHJcblx0XHRvblNob3coKSB7XHJcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0Ly8gdGhhdC5zZXREYXRhKHtcclxuXHRcdFx0Ly8gICBDT0lBZGRTdGF0ZTogdHJ1ZVxyXG5cdFx0XHQvLyB9KTtcclxuXHRcdFx0dGhpcy5DT0lBZGRTdGF0ZSA9IHRydWU7XHJcblx0XHRcdHRoYXQuRnVuUmVmcmVzaEJ5T3BlcmF0aW9uU3RhdHVzKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0T25QTUNPSUFkZE5ld1RhcChldmVudCkgLy/mlrDlop7lrqLmiLforqLljZXmjInpkq5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHJcblx0XHRcdFx0aWYgKHRoYXQuQ09JQWRkU3RhdGUgPT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIHRoYXQuc2V0RGF0YSh7XHJcblx0XHRcdFx0Ly8gIENPSUFkZFN0YXRlOiBmYWxzZVxyXG5cdFx0XHRcdC8vIH0pOyAvL+iOt+WPlueZu+W9lemhtemdoui1i+WAvOeahOW+ruS/oeaYteensOOAgeWktOWDj+etieS/oeaBryBcclxuXHRcdFx0XHR0aGF0LkNPSUFkZFN0YXRlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdHZhciBXWExvZ29TdGF0ZSA9IGFwcC5nbG9iYWxEYXRhLldYTG9nb1N0YXRlOyAvL+eKtuaAgSBcclxuXHJcblx0XHRcdFx0dmFyIGF2YXRhclVybCA9IGFwcC5nbG9iYWxEYXRhLmF2YXRhclVybDsgLy/mjojmnYPlvq7kv6Hlj7fnmoTlpLTlg48gXHJcblxyXG5cdFx0XHRcdHZhciBnZW5kZXIgPSBhcHAuZ2xvYmFsRGF0YS5nZW5kZXI7IC8v5o6I5p2D5b6u5L+h5Y+35oCn5Yir77yI5aWz77yaMu+8myDnlLfvvJoxIO+8iSBcclxuXHJcblx0XHRcdFx0dmFyIG5pY2tOYW1lID0gYXBwLmdsb2JhbERhdGEubmlja05hbWU7IC8v5o6I5p2D5b6u5L+h5Y+35pi156ewIFxyXG5cdFx0XHRcdC8v5qC55o2u5b2T5YmN55m76ZmG54q25oCB5Yik5pat5piv5ZCm6L+Y6ZyA6KaB6L+b6KGM5b6u5L+h55m76ZmG77yI5o6o6I2Q5bel5Y+L5ZKM5b6u5L+h5YWs5LyX5Y+35rOo5YaM5pe277yM6ZyA6KaB6L+b6KGM5b6u5L+h55m76ZmG77yJIFxyXG5cdFx0XHRcdC8vICBpZihXWExvZ29TdGF0ZSA9PXRydWUgKSBcclxuXHRcdFx0XHQvLyAgeyBcclxuXHRcdFx0XHQvLyAgICBjb25zb2xlLmxvZyhcIuW8ueahhuS4jeWHuueOsFwiKSBcclxuXHRcdFx0XHQvLyAgICB0aGlzLnNldERhdGEoeyBcclxuXHRcdFx0XHQvLyAgICAgIHBtRGlhbG9nU2hvdVF1YW46IGZhbHNlLCBcclxuXHRcdFx0XHQvLyAgICB9KSBcclxuXHRcdFx0XHQvLyAgfSBcclxuXHRcdFx0XHQvLyAgZWxzZSBcclxuXHRcdFx0XHQvLyAgeyBcclxuXHRcdFx0XHQvLyAgICBjb25zb2xlLmxvZyhcIuW8ueahhuWHuueOsFwiKSBcclxuXHRcdFx0XHQvLyAgICB0aGlzLnNldERhdGEoeyBcclxuXHRcdFx0XHQvLyAgICAgIHBtRGlhbG9nU2hvdVF1YW46IHRydWUsIFxyXG5cdFx0XHRcdC8vICAgIH0pIFxyXG5cdFx0XHRcdC8vICB9IFxyXG5cdFx0XHRcdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdFx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdFx0XHQvLyBpZiAocG1KU1Rvb2xzLklzTnVsbE9yRW1wdHkoYXBwLmdsb2JhbERhdGEuUE1Vc2VySUQpKSB7XHJcblx0XHRcdFx0Ly8gXHRjb25zb2xlLmxvZyhcIuW8ueahhuWHuueOsFwiKTtcclxuXHRcdFx0XHQvLyBcdC8vIHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0Ly8gXHQvLyAgIHBtRGlhbG9nU2hvdVF1YW46IHRydWVcclxuXHRcdFx0XHQvLyBcdC8vIH0pO1xyXG5cdFx0XHRcdC8vIFx0dGhhdC5wbURpYWxvZ1Nob3VRdWFuID0gdHJ1ZTtcclxuXHRcdFx0XHQvLyBcdHJldHVybjtcclxuXHRcdFx0XHQvLyB9XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGV2ZW50KTtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIFBNQ09JID0ge307XHJcblx0XHRcdFx0Ly8gdW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdC8vIHVybDogJy4uL3Byb3BlcnR5UGFnZS9wcm9wZXJ0eVBhZ2U/ZGF0YVR5cGU9UE1DT0lBZGROZXcnLFxyXG5cdFx0XHRcdC8vIFx0c3VjY2VzczogcmVzID0+IHt9LFxyXG5cdFx0XHRcdC8vIFx0ZmFpbDogKCkgPT4ge30sXHJcblx0XHRcdFx0Ly8gXHRjb21wbGV0ZTogKCkgPT4ge31cclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJy4uL3Byb3BlcnR5UGFnZS9wcm9wZXJ0eVBhZ2U/ZGF0YVR5cGU9UE1DT0lBZGROZXcnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdFx0Ly8g6L+Z6YeM57uZ6KaB5omT5byA55qE6aG16Z2i5Lyg6YCS5pWw5o2uLiAg56ys5LiA5Liq5Y+C5pWwOuaWueazlWtleSwg56ys5LqM5Liq5Y+C5pWwOumcgOimgeS8oOmAkueahOaVsOaNrlxyXG5cdFx0XHRcdFx0XHRyZXMuZXZlbnRDaGFubmVsLmVtaXQoJ1BNQ09JTGlzdCcsIHRoaXNcclxuXHRcdFx0XHRcdFx0LlBNQ09JTGlzdCk7IC8v5Lyg6YCSIHRoaXMuZGF0YS5QTUNPSUxpc3Tov4fljrvlvI/kuLrkuobvvIzmt7vliqDmiJDlip/lkI7jgIJcclxuXHRcdFx0XHRcdFx0Ly9QTUNPSeebtOaOpea3u+WKoOWIsHRoaXMuZGF0YS5QTUNPSUxpc3TkuK3vvIzlho3ov5Tlm57lvZPliY3nlYzpnaLvvIzku6Xlh4/lsJHkuIDmrKHmlbDmja7or7vlj5ZcclxuXHJcblx0XHRcdFx0XHRcdHRoYXQuRnVuUmVmcmVzaEJ5T3BlcmF0aW9uU3RhdHVzKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRvblBNQ09JVGFwKGV2ZW50KSAvL1BNQ09JIOaMieS4i1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXZlbnQpO1xyXG5cdFx0XHRcdHZhciBQTUNPSSA9IHt9O1xyXG5cdFx0XHRcdHZhciBUZW1waXNPcGVyYXRpb24gPSB0cnVlOyAvL+aYr+WQpuWFgeiuuOaTjeS9nOi/h+eoi+euoeaOp1xyXG5cclxuXHRcdFx0XHR2YXIgdGVtcFBNQ09JID0gcG1KU1Rvb2xzLmdldE9uZUNvbnRyb2xGcm9tTGlzdChldmVudC5jdXJyZW50VGFyZ2V0LmlkLCB0aGlzLlBNQ09JTGlzdCk7XHJcblxyXG5cdFx0XHRcdGlmICh0ZW1wUE1DT0kuUE1PcmRlclN0YXRlICE9IFwiTk9SRUxFQVNFXCIgJiYgdGVtcFBNQ09JLlBNT3JkZXJTdGF0ZSAhPSBcIlBVQkxJU0hcIikge1xyXG5cdFx0XHRcdFx0VGVtcGlzT3BlcmF0aW9uID0gZmFsc2U7XHJcblx0XHRcdFx0fSAvLyB3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHQvLyAgIHVybDogJy4uL3Rhc2tJbnRlcmZhY2UvdGFza0ludGVyZmFjZT9kYXRhVHlwZT1QTUNPSVRhcCZpc09wZXJhdGlvbj0nK1RlbXBpc09wZXJhdGlvbisnJlBNQ09JSUQ9JyArIGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQsXHJcblx0XHRcdFx0Ly8gfSlcclxuXHRcdFx0XHQvL+i3s+i9rOWIsOS7u+WKoeivpuaDhemhtSBcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcuLi90YXNrRGV0YWlsL3Rhc2tEZXRhaWw/ZGF0YVR5cGU9UE1DT0lUYXAmUE1DT0lJRD0nICsgZXZlbnQuY3VycmVudFRhcmdldC5pZCxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7fSxcclxuXHRcdFx0XHRcdGZhaWw6ICgpID0+IHt9LFxyXG5cdFx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHt9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8gd3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0Ly8gICB1cmw6ICcuLi90YXNrRGV0YWlsL3Rhc2tEZXRhaWw/ZGF0YVR5cGU9UE1DT0lUYXAmUE1DT0lJRD0nICsgZXZlbnQuY3VycmVudFRhcmdldC5pZFxyXG5cdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0b25QTUNPSUltYWdlVGFwKGV2ZW50KSAvL1BNQ09JIOWbvueJh+aMiemSrlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGV2ZW50KTtcclxuXHRcdFx0XHR2YXIgVGVtcERhdGEgPSBwbUpTVG9vbHMuZ2V0T25lQ29udHJvbEZyb21MaXN0KGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQsIHRoaXMuUE1DT0lMaXN0KTtcclxuXHJcblx0XHRcdFx0aWYgKHBtSlNUb29scy5Jc051bGxPckVtcHR5KFRlbXBEYXRhKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuOyAvL+ayoeacieW8ueahhuaVsOaNru+8jOS4jeS6iOaYvuekulxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy5wcm9wZXJ0eURpYWxvZy5tYWluVGl0bGUgPSBcIuiuoeWIkuS6pOi0p+aXpeacn++8mlwiICsgVGVtcERhdGEuWkNUUGxhbkRlbGlEYXRlU2hvcnQsIC8v5Li75o+Q56S6XHJcblx0XHRcdFx0XHR0aGlzLnByb3BlcnR5RGlhbG9nLnN1YlRpdGxlID0gVGVtcERhdGEuUE1Jbm5lckN1c3RvbWVyT3JkZXJJdGVtSUQsIC8v5a2Q5qCH6aKYXHJcblx0XHRcdFx0XHR0aGlzLnByb3BlcnR5RGlhbG9nLm1haW5UaXAgPSBUZW1wRGF0YS5QTUlubmVyUHJvZHVjdE5hbWUgKyBcIiAg6K6h5YiS5pWw6YeP77yaXCIgKyBUZW1wRGF0YS5QTU9yZGVyTnVtICsgVGVtcERhdGFcclxuXHRcdFx0XHRcdC5QTU9yZGVyVW5pdCwgLy/kuLvmoIfpophcclxuXHRcdFx0XHRcdHRoaXMucHJvcGVydHlEaWFsb2cuc3ViVGlwID0gXCLlt7LlrozmiJDvvJpcIiArIFRlbXBEYXRhLlpDVEZpbmlzaGVkTnVtICsgVGVtcERhdGEuUE1PcmRlclVuaXQgKyBcIiAgXCIgKyBcIuWujOaIkOeOh++8mlwiICtcclxuXHRcdFx0XHRcdFRlbXBEYXRhLlpDVEZpbmlzaGVkUmF0ZSArIFwiJVwiLCAvL+WtkOaPkOekulxyXG5cdFx0XHRcdFx0dGhpcy5wcm9wZXJ0eURpYWxvZy5zdWJJbmZvTGlzdCA9IG51bGw7XHJcblx0XHRcdFx0dGhpcy5wcm9wZXJ0eURpYWxvZy5zdWJPcGVyYXRpb24gPSBcIuWPlua2iFwiLCAvL+i+heWKqeaTjeS9nOaMiemSruaPkOekulxyXG5cdFx0XHRcdFx0dGhpcy5wcm9wZXJ0eURpYWxvZy5tYWluT3BlcmF0aW9uID0gXCLkv67mlLlcIiwgLy/kuLvmk43kvZzmjInpkq7mj5DnpLpcclxuXHRcdFx0XHRcdHRoaXMucHJvcGVydHlEaWFsb2cuaXNQcm9wZXJ0eURpYWxvZ09wZW4gPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMucHJvcGVydHlEaWFsb2cuX2lkID0gVGVtcERhdGEuX2lkO1xyXG5cclxuXHRcdFx0XHRpZiAoVGVtcERhdGEuUE1PcmRlclByb1R5cGUgPT0gXCLlirPliqFcIikge1xyXG5cdFx0XHRcdFx0dGhpcy5wcm9wZXJ0eURpYWxvZy5tYWluVGlwID0gVGVtcERhdGEuUE1Jbm5lclByb2R1Y3ROYW1lICsgXCIgIOiuoeWIkuWkqeaVsO+8mlwiICsgVGVtcERhdGEuUE1PcmRlck51bSArIFRlbXBEYXRhXHJcblx0XHRcdFx0XHRcdC5QTU9yZGVyVW5pdDsgLy/kuLvmoIfpophcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0Ly8gICBwcm9wZXJ0eURpYWxvZzogdGhpcy5wcm9wZXJ0eURpYWxvZyxcclxuXHRcdFx0XHQvLyAgIFpDVFByb2R1Y3RVUkw6IFRlbXBEYXRhLlpDVFByb2R1Y3RVUkwgLy/orr7nva7kuLvlr7nosaHlm77niYdcclxuXHJcblx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0dGhhdC5wcm9wZXJ0eURpYWxvZyA9IHRoaXMucHJvcGVydHlEaWFsb2c7XHJcblx0XHRcdFx0dGhhdC5aQ1RQcm9kdWN0VVJMID0gVGVtcERhdGEuWkNUUHJvZHVjdFVSTDtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHByb3BlcnR5RGlhbG9nQ2xvc2UoKSB7XHJcblx0XHRcdFx0dGhpcy5wcm9wZXJ0eURpYWxvZy5pc1Byb3BlcnR5RGlhbG9nT3BlbiA9IGZhbHNlO1xyXG5cdFx0XHRcdC8vIHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0Ly8gICBwcm9wZXJ0eURpYWxvZzogdGhpcy5wcm9wZXJ0eURpYWxvZ1xyXG5cdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdHRoYXQucHJvcGVydHlEaWFsb2cgPSB0aGlzLnByb3BlcnR5RGlhbG9nO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0YXN5bmMgYmluZExvYWRpbmdNb3JlKCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCfmu5HliLDlupXkuobvvIzlvIDlp4vliqDovb3mm7TlpJonKTtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7IC8vc2V0VGltZW91dOmHjOS8mueUqOWIsO+8jFxyXG5cclxuXHRcdFx0XHQvLyB0aGF0LnNldERhdGEoe1xyXG5cdFx0XHRcdC8vICAgLy9Nb3ZlVG9Eb3fop6blj5FcclxuXHRcdFx0XHQvLyAgIGlzTW92ZVRvRG93bjogdHJ1ZVxyXG5cdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdHRoYXQuaXNNb3ZlVG9Eb3duID0gdHJ1ZTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0Ly9Nb3ZlVG9Eb3cg5pe26Ze06ZmQ5Yi2XHJcblx0XHRcdFx0XHQvLyB0aGF0LnNldERhdGEoe1xyXG5cdFx0XHRcdFx0Ly8gICBpc01vdmVUb0Rvd246IGZhbHNlXHJcblx0XHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHRcdHRoYXQuaXNNb3ZlVG9Eb3duID0gZmFsc2U7XHJcblx0XHRcdFx0fSwgMzAwMCk7XHJcblx0XHRcdFx0YXdhaXQgdGhpcy5nZXRQTUNPSUxpc3RCeVVzZXJNb3JlKCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRhc3luYyBiaW5kTG9hZGluZ05ldygpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn5ruR5Yiw6aG25LqG77yM5byA5aeL5Yqg6L295pu05aSaJyk7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzOyAvL3NldFRpbWVvdXTph4zkvJrnlKjliLDvvIxcclxuXHJcblx0XHRcdFx0Ly8gdGhhdC5zZXREYXRhKHtcclxuXHRcdFx0XHQvLyAgIC8vTW92ZVRvVXDop6blj5FcclxuXHRcdFx0XHQvLyAgIGlzTW92ZVRvVXA6IHRydWVcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHR0aGF0LmlzTW92ZVRvVXAgPSB0cnVlO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQvL+aXtumXtOmZkOWItlxyXG5cdFx0XHRcdFx0Ly8gdGhhdC5zZXREYXRhKHtcclxuXHRcdFx0XHRcdC8vICAgaXNNb3ZlVG9VcDogZmFsc2VcclxuXHRcdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdFx0dGhhdC5pc01vdmVUb1VwID0gZmFsc2U7XHJcblx0XHRcdFx0fSwgMzAwMCk7IC8vYXdhaXQgdGhpcy5nZXRQTUNPSUxpc3RCeVVzZXJOZXcoKVxyXG5cclxuXHRcdFx0XHR0aGF0LkZ1blJlZnJlc2hCeU9wZXJhdGlvblN0YXR1cygpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly/liqDovb3mm7TlpJpcclxuXHRcdFx0YXN5bmMgZ2V0UE1DT0lMaXN0QnlVc2VyTW9yZSgpIHtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIGZ1bmNOYW1lID0gXCJnZXRQTUNPSUxpc3RieUFsbFBNVXNlclwiO1xyXG5cdFx0XHRcdHZhciBmdW5jUHJhID0ge307XHJcblx0XHRcdFx0ZnVuY1ByYS5QTVVTZXIgPSB7fTsgLy/ku45hcHDkuK3ojrflvpfvvIzmmoLml7bnva7nqbpcclxuXHJcblx0XHRcdFx0dGhpcy5QTUNPSUxpc3RTa2lwID0gdGhpcy5QTUNPSUxpc3RTa2lwICsgdGhpcy5QTUNPSUxpc3RMaW1pdCwgLy/pobXotbflp4sg77yI5YiG6aG15pi+56S677yM56ys5LiA6aG177yJIC8v5LiL5ouJ5Yid5aeL5YyW77yMIOS4iuaLieWKoOmhteWPt1xyXG5cdFx0XHRcdFx0Ly8gdGhpcy5zZXREYXRhKHtcclxuXHRcdFx0XHRcdC8vICAgUE1DT0lMaXN0U2tpcDogdGhpcy5QTUNPSUxpc3RTa2lwIC8v6aG16LW35aeLXHJcblxyXG5cdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHR0aGF0LlBNQ09JTGlzdFNraXAgPSB0aGlzLlBNQ09JTGlzdFNraXA7XHJcblx0XHRcdFx0ZnVuY1ByYS5za2lwQW5kTGltaXQgPSBbdGhpcy5QTUNPSUxpc3RTa2lwLCBEYXRhTGlzdExpbWl0XTsgLy8gXHJcblxyXG5cdFx0XHRcdGZ1bmNQcmEuU2VsZWN0U3RhdGUgPSB0aGlzLk9wdGlvblNlbGVjdFN0YXRlO1xyXG5cdFx0XHRcdGZ1bmNQcmEuWkNUQ3JlYXRlciA9IGFwcC5nbG9iYWxEYXRhLlBNVXNlcklEOyAvL+WIm+W7uuS6uu+8iOW9k+WJjeiHquW3seeahFVzZXJJRO+8iVxyXG5cclxuXHRcdFx0XHR2YXIgc2VyUmVzID0gYXdhaXQgcG1TZXJUb29scy5leGVQTUNPSShmdW5jTmFtZSwgZnVuY1ByYSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coc2VyUmVzKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHJcblx0XHRcdFx0aWYgKHNlclJlcy5lcnJNc2cgIT0gXCJPS1wiKSB7XHJcblx0XHRcdFx0XHR0aGlzLnRvcFRpcHNTdHIgPSBzZXJSZXMuZXJyTXNnO1xyXG5cdFx0XHRcdFx0Ly92YXIgdGhhdCA9IHRoaXM7IC8vc2V0VGltZW91dOmHjOS8mueUqOWIsO+8jFxyXG5cdFx0XHRcdFx0Ly/lm6DkuLrmn6Xor6LmsqHmnInmiJDlip8s5aKe5Yqg55qE6LW35aeL54K56KaB5Zue6YCAXHJcblxyXG5cdFx0XHRcdFx0dGhpcy5QTUNPSUxpc3RTa2lwID0gdGhpcy5QTUNPSUxpc3RTa2lwIC0gdGhpcy5QTUNPSUxpc3RMaW1pdCwgLy/pobXotbflp4sg77yI5YiG6aG15pi+56S677yM56ys5LiA6aG177yJIC8v5LiL5ouJ5Yid5aeL5YyW77yMIOS4iuaLieWKoOmhteWPt1xyXG5cdFx0XHRcdFx0XHQvLyB0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRcdFx0XHQvLyAgIFBNQ09JTGlzdFNraXA6IHRoaXMuUE1DT0lMaXN0U2tpcCAvL+mhtei1t+Wni1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHRcdHRoYXQuUE1DT0lMaXN0U2tpcCA9IHRoaXMuUE1DT0lMaXN0U2tpcDtcclxuXHRcdFx0XHRcdC8vIHRoYXQuc2V0RGF0YSh7XHJcblx0XHRcdFx0XHQvLyAgIC8vTW92ZVRvVXDop6blj5FcclxuXHRcdFx0XHRcdC8vICAgdG9wVGlwczogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vICAgdG9wVGlwc1N0cjogdGhhdC50b3BUaXBzU3RyXHJcblx0XHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHRcdHRoYXQudG9wVGlwcyA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGF0LnRvcFRpcHNTdHIgPSB0aGF0LnRvcFRpcHNTdHI7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQvL+aXtumXtOmZkOWItlxyXG5cdFx0XHRcdFx0XHQvLyB0aGF0LnNldERhdGEoe1xyXG5cdFx0XHRcdFx0XHQvLyAgIHRvcFRpcHM6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHQvLyAgIHRvcFRpcHNTdHI6IFwiXCJcclxuXHRcdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHRcdHRoYXQudG9wVGlwcyA9IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdHRoYXQudG9wVGlwc1N0ciA9IFwiXCI7XHJcblx0XHRcdFx0XHR9LCAzMDAwKTtcclxuXHRcdFx0XHR9IFxyXG5cdFx0XHRcdGVsc2UgXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYoc2VyUmVzLnJlc3VsdCE9bnVsbClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWYoc2VyUmVzLnJlc3VsdC5sZW5ndGg+MClcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuUE1DT0lMaXN0ID0gdGhpcy5QTUNPSUxpc3QuY29uY2F0KHNlclJlcy5yZXN1bHQpOyAvL+aWsOafpeivouWIsOeahOebtOaOpeWKoOWcqOWQjumdolxyXG5cdFx0XHRcdFx0XHRcdC8v5omn6KGM6K6h566X6amx5Yqo5Ye95pWw77yI5pyJ5Lqb5Y+Y6YeP5piv6K6h566X6I635b6X55qE77yJXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY2FsUE1DT0lMaXN0KCk7XHJcblx0XHRcdFx0XHRcdFx0Ly8gdGhpcy5zZXREYXRhKHtcclxuXHRcdFx0XHRcdFx0XHQvLyAgIFBNQ09JTGlzdDogdGhpcy5QTUNPSUxpc3RcclxuXHRcdFx0XHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LlBNQ09JTGlzdCA9IHRoaXMuUE1DT0lMaXN0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdC8v5Zug5Li65p+l6K+i5rKh5pyJ5oiQ5YqfLOWinuWKoOeahOi1t+Wni+eCueimgeWbnumAgFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuUE1DT0lMaXN0U2tpcCA9IHRoaXMuUE1DT0lMaXN0U2tpcCAtIHRoaXMuUE1DT0lMaXN0TGltaXQsIC8v6aG16LW35aeLIO+8iOWIhumhteaYvuekuu+8jOesrOS4gOmhte+8iSAvL+S4i+aLieWIneWni+WMlu+8jCDkuIrmi4nliqDpobXlj7dcclxuXHRcdFx0XHRcdFx0XHRcdC8vIHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyAgIFBNQ09JTGlzdFNraXA6IHRoaXMuUE1DT0lMaXN0U2tpcCAvL+mhtei1t+Wni1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LlBNQ09JTGlzdFNraXAgPSB0aGlzLlBNQ09JTGlzdFNraXA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly/miafooYzkuLpPSyzkvYbnu5PmnpzkuLrnqbrnmoTmg4XlvaLjgIJcclxuXHRcdFx0XHRcdGlmIChwbUpTVG9vbHMuSXNOdWxsT3JFbXB0eShwbUpTVG9vbHMuR2V0U3ViT2JqKFtzZXJSZXMucmVzdWx0LCAwXSkpKSAvL+aVsOaNrue7k+aenOaUvuWcqOS6hnJlc3VsdOesrOS4gOS4quaVsOaNruWIl+S4rSzmiYDku6XpnIDopoHohLHlo7NcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly/liLfmlrBcclxuXHRcdFx0YXN5bmMgZ2V0UE1DT0lMaXN0QnlVc2VyTmV3KCkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgZnVuY05hbWUgPSBcImdldFBNQ09JTGlzdGJ5QWxsUE1Vc2VyXCI7XHJcblx0XHRcdFx0dmFyIGZ1bmNQcmEgPSB7fTtcclxuXHRcdFx0XHRmdW5jUHJhLlBNVVNlciA9IHt9OyAvL+S7jmFwcOS4reiOt+W+l++8jOaaguaXtue9ruepulxyXG5cclxuXHRcdFx0XHR0aGlzLlBNQ09JTGlzdFNraXAgPSBEYXRhTGlzdFNraXAsIC8v6aG15Y+3IO+8iOWIhumhteaYvuekuu+8jOesrOS4gOmhte+8iSAvL+S4i+aLieWIneWni+WMlu+8jCDkuIrmi4nliqDpobXlj7dcclxuXHRcdFx0XHRcdHRoaXMuUE1DT0lMaXN0TGltaXQgPSBEYXRhTGlzdExpbWl0LCAvL+mhtemVvyDvvIjkuIDmrKHku47mnI3liqHlmajojrflj5bmlbDmja7pobnmlbDvvIkgLy/kuIvmi4nliJ3lp4vljJbvvIwg5LiK5ouJ5Yqg6aG16ZW/5LiN5Y+YXHJcblxyXG5cdFx0XHRcdFx0dGhhdC5QTUNPSUxpc3RTa2lwID0gdGhpcy5QTUNPSUxpc3RTa2lwLFxyXG5cdFx0XHRcdFx0dGhhdC5QTUNPSUxpc3RMaW1pdCA9IHRoaXMuUE1DT0lMaXN0TGltaXQ7XHJcblx0XHRcdFx0ZnVuY1ByYS5za2lwQW5kTGltaXQgPSBbRGF0YUxpc3RTa2lwLCBEYXRhTGlzdExpbWl0XTsgLy8w77yMMCDmoIfor4bmjInns7vnu5/pu5jorqQgXHJcblxyXG5cdFx0XHRcdGZ1bmNQcmEuU2VsZWN0U3RhdGUgPSB0aGlzLk9wdGlvblNlbGVjdFN0YXRlO1xyXG5cdFx0XHRcdGZ1bmNQcmEuWkNUQ3JlYXRlciA9IGFwcC5nbG9iYWxEYXRhLlBNVXNlcklEOyAvL+WIm+W7uuS6uu+8iOW9k+WJjeiHquW3seeahFVzZXJJRO+8iVxyXG5cclxuXHRcdFx0XHR2YXIgc2VyUmVzID0gYXdhaXQgcG1TZXJUb29scy5leGVQTUNPSShmdW5jTmFtZSwgZnVuY1ByYSk7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5YmN56uv55WM6Z2i6I635Y+W55qE5YC85Li677yaXCIrc2VyUmVzKVxyXG5cclxuICAgICAgICAgICAgICAgICBpZihzZXJSZXMucmVzdWx0LmVyck1zZyE9XCJPS1wiKVxyXG5cdFx0XHRcdCB7XHJcblx0XHRcdFx0XHQgdGhpcy50b3BUaXBzU3RyID0gc2VyUmVzLmVyck1zZztcclxuXHRcdFx0XHRcdCB2YXIgdGhhdCA9IHRoaXM7IC8vc2V0VGltZW91dOmHjOS8mueUqOWIsO+8jFxyXG5cdFx0XHRcdFx0IHRoYXQudG9wVGlwcyA9IHRydWUsXHJcblx0XHRcdFx0XHQgXHR0aGF0LnRvcFRpcHNTdHIgPSB0aGF0LnRvcFRpcHNTdHI7XHJcblx0XHRcdFx0XHQgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdCBcdHRoYXQudG9wVGlwcyA9IGZhbHNlLFxyXG5cdFx0XHRcdFx0IFx0XHR0aGF0LnRvcFRpcHNTdHIgPSBcIlwiO1xyXG5cdFx0XHRcdFx0IH0sIDMwMDApO1xyXG5cdFx0XHRcdCB9XHJcblx0XHRcdFx0IGVsc2VcclxuXHRcdFx0XHQge1xyXG5cdFx0XHRcdFx0IHRoaXMuUE1DT0lMaXN0ID0gc2VyUmVzLnJlc3VsdC5yZXN1bHQ7IC8v5omn6KGM6K6h566X6amx5Yqo5Ye95pWw77yI5pyJ5Lqb5Y+Y6YeP5piv6K6h566X6I635b6X55qE77yJXHJcblx0XHRcdFx0XHQgdGhpcy5jYWxQTUNPSUxpc3QoKTtcclxuXHRcdFx0XHRcdCB0aGF0LnBtY29pbGlzdCA9IHRoaXMuUE1DT0lMaXN0O1xyXG5cdFx0XHRcdFx0IGNvbnNvbGUubG9nKHRoaXMuUE1DT0lMaXN0KTtcclxuXHRcdFx0XHQgfVxyXG5cclxuXHRcdFx0XHQvLyBpZiAoIXBtSlNUb29scy5Jc051bGxPckVtcHR5KHBtSlNUb29scy5HZXRTdWJPYmooW3NlclJlcy5yZXN1bHQsIDBdKSkpIC8v5pWw5o2u57uT5p6c5pS+5Zyo5LqGcmVzdWx056ys5LiA5Liq5pWw5o2u5YiX5LitLOaJgOS7pemcgOimgeiEseWjs1xyXG5cdFx0XHRcdC8vIHtcclxuXHRcdFx0XHQvLyBcdHRoaXMuUE1DT0lMaXN0ID0gc2VyUmVzLnJlc3VsdFswXTsgLy/miafooYzorqHnrpfpqbHliqjlh73mlbDvvIjmnInkupvlj5jph4/mmK/orqHnrpfojrflvpfnmoTvvIlcclxuXHRcdFx0XHQvLyBcdHRoaXMuY2FsUE1DT0lMaXN0KCk7XHJcblx0XHRcdFx0Ly8gXHR0aGF0LnBtY29pbGlzdCA9IHRoaXMuUE1DT0lMaXN0O1xyXG5cdFx0XHQgLy8gICAgIFx0Y29uc29sZS5sb2codGhpcy5QTUNPSUxpc3QpO1xyXG5cdFx0XHRcdC8vIH1cclxuXHJcblx0XHRcdFx0Ly8gaWYgKHNlclJlcy5lcnJNc2cgPT0gXCJPS1wiICYmIHBtSlNUb29scy5Jc051bGxPckVtcHR5KHBtSlNUb29scy5HZXRTdWJPYmooW3NlclJlcy5yZXN1bHQsIDBdKSkpIHtcclxuXHRcdFx0XHQvLyBcdHRoYXQuUE1DT0lMaXN0ID0gW107XHJcblx0XHRcdFx0Ly8gfVxyXG5cclxuXHRcdFx0XHQvLyBpZiAoc2VyUmVzLmVyck1zZyAhPSBcIk9LXCIpIHtcclxuXHRcdFx0XHQvLyBcdHRoaXMudG9wVGlwc1N0ciA9IHNlclJlcy5lcnJNc2c7XHJcblx0XHRcdFx0Ly8gXHR2YXIgdGhhdCA9IHRoaXM7IC8vc2V0VGltZW91dOmHjOS8mueUqOWIsO+8jFxyXG5cdFx0XHRcdC8vIFx0dGhhdC50b3BUaXBzID0gdHJ1ZSxcclxuXHRcdFx0XHQvLyBcdFx0dGhhdC50b3BUaXBzU3RyID0gdGhhdC50b3BUaXBzU3RyO1xyXG5cdFx0XHRcdC8vIFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQvLyBcdFx0dGhhdC50b3BUaXBzID0gZmFsc2UsXHJcblx0XHRcdFx0Ly8gXHRcdFx0dGhhdC50b3BUaXBzU3RyID0gXCJcIjtcclxuXHRcdFx0XHQvLyBcdH0sIDMwMDApO1xyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdG9uUE1DT0lFZGl0KGV2ZW50KSB7XHJcblx0XHRcdFx0Ly9QTUNPSee8lui+kVxyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgVGVtcENPSURhdGEgPSB0aGF0LlBNQ09JTGlzdC5maW5kKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdHJldHVybiBlLl9pZCA9PSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpZiAoIXBtSlNUb29scy5Jc051bGxPckVtcHR5KFRlbXBDT0lEYXRhKSkge1xyXG5cdFx0XHRcdFx0aWYgKFRlbXBDT0lEYXRhLlBNT3JkZXJTdGF0ZSA9PSBcIk5PUkVMRUFTRVwiIHx8IFRlbXBDT0lEYXRhLlBNT3JkZXJTdGF0ZSA9PSBcIlBVQkxJU0hcIikge1xyXG5cdFx0XHRcdFx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHR1cmw6ICcuLi9wcm9wZXJ0eVBhZ2UvcHJvcGVydHlQYWdlP2RhdGFUeXBlPVBNQ09JRWRpdCZQTUNPSV9pZD0nICsgZXZlbnQuY3VycmVudFRhcmdldFxyXG5cdFx0XHRcdFx0XHRcdFx0LmlkLFxyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyDov5nph4znu5nopoHmiZPlvIDnmoTpobXpnaLkvKDpgJLmlbDmja4uICDnrKzkuIDkuKrlj4LmlbA65pa55rOVa2V5LCDnrKzkuozkuKrlj4LmlbA66ZyA6KaB5Lyg6YCS55qE5pWw5o2uXHJcblx0XHRcdFx0XHRcdFx0XHRyZXMuZXZlbnRDaGFubmVsLmVtaXQoJ1BNQ09JTGlzdCcsIHRoYXQuUE1DT0lMaXN0KTsgLy90aGF0Lk9uRWRpdFNlbGVjdCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly/kvKDpgJIgdGhpcy5kYXRhLlBNQ09JTGlzdOi/h+WOu+W8j+S4uuS6hu+8jOa3u+WKoOaIkOWKn+WQjuOAglxyXG5cdFx0XHRcdFx0XHRcdFx0Ly9QTUNPSeebtOaOpea3u+WKoOWIsHRoaXMuZGF0YS5QTUNPSUxpc3TkuK3vvIzlho3ov5Tlm57lvZPliY3nlYzpnaLvvIzku6Xlh4/lsJHkuIDmrKHmlbDmja7or7vlj5ZcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR0aGF0LnByb3BlcnR5RGlhbG9nLmlzUHJvcGVydHlEaWFsb2dPcGVuID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdC8vIHRoYXQuc2V0RGF0YSh7XHJcblx0XHRcdFx0XHRcdC8vICAgcHJvcGVydHlEaWFsb2c6IHRoYXQucHJvcGVydHlEaWFsb2dcclxuXHRcdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHRcdHRoYXQucHJvcGVydHlEaWFsb2cgPSB0aGF0LnByb3BlcnR5RGlhbG9nO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5TaG93RXJyb3JUaXBzKFwi5Lqk5LuY5Lu75Yqh6Z2e57yW6L6R54q25oCB5oiW5Y+R5biD54q25oCB77yM5LiN6IO96L+b6KGM57yW6L6R5pON5L2c77yBXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8vUE1DT0nmn6XnnItcclxuXHRcdFx0b25QTUNPSVNIT1coZXZlbnQpIHtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXZlbnQpOyAvL+i3s+i9rOWIsOS7u+WKoeWxnuaAp+mhtVxyXG5cdFx0XHRcdC8vIHd4Lm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdC8vICAgdXJsOiAnLi4vcHJvcGVydHlQYWdlL3Byb3BlcnR5UGFnZT9kYXRhVHlwZT1QTUNPSVNob3cmUE1DT0lfaWQ9JysgZXZlbnQuY3VycmVudFRhcmdldC5pZCxcclxuXHRcdFx0XHQvLyAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0Ly8gICAgIC8vIOi/memHjOe7meimgeaJk+W8gOeahOmhtemdouS8oOmAkuaVsOaNri4gIOesrOS4gOS4quWPguaVsDrmlrnms5VrZXksIOesrOS6jOS4quWPguaVsDrpnIDopoHkvKDpgJLnmoTmlbDmja5cclxuXHRcdFx0XHQvLyAgICAgcmVzLmV2ZW50Q2hhbm5lbC5lbWl0KCdQTUNPSUxpc3QnLCB0aGlzLmRhdGEuUE1DT0lMaXN0KVxyXG5cdFx0XHRcdC8vICAgICAvL+S8oOmAkiB0aGlzLmRhdGEuUE1DT0lMaXN06L+H5Y675byP5Li65LqG77yM5re75Yqg5oiQ5Yqf5ZCO44CCXHJcblx0XHRcdFx0Ly8gICAgIC8vUE1DT0nnm7TmjqXmt7vliqDliLB0aGlzLmRhdGEuUE1DT0lMaXN05Lit77yM5YaN6L+U5Zue5b2T5YmN55WM6Z2i77yM5Lul5YeP5bCR5LiA5qyh5pWw5o2u6K+75Y+WXHJcblx0XHRcdFx0Ly8gICB9XHJcblx0XHRcdFx0Ly8gfSlcclxuXHRcdFx0XHQvL+i3s+i9rOWIsOS7u+WKoeivpuaDhemhtSBcclxuXHJcblx0XHRcdFx0d3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcuLi90YXNrRGV0YWlsL3Rhc2tEZXRhaWw/ZGF0YVR5cGU9UE1DT0lUYXAmUE1DT0lJRD0nICsgZXZlbnQuY3VycmVudFRhcmdldC5pZFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMucHJvcGVydHlEaWFsb2cuaXNQcm9wZXJ0eURpYWxvZ09wZW4gPSBmYWxzZTtcclxuXHRcdFx0XHQvLyB0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRcdC8vICAgcHJvcGVydHlEaWFsb2c6IHRoaXMucHJvcGVydHlEaWFsb2dcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHR0aGF0LnByb3BlcnR5RGlhbG9nID0gdGhpcy5wcm9wZXJ0eURpYWxvZztcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGNhbFBNQ09JTGlzdCgpIC8v5pyJ5LiA5Lqb5a2X5q615piv6YCa6L+H6YGN5Y6GUE1DT0lMaXN0LOiuoeeul+iOt+W+l+eahO+8jOmAmui/h+atpOWHveaVsOWujOaIkOOAglxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly9jYWxQTUNPSUxpc3Tlj6rmmK/kv67mlLl0aGlzLmRhdGHvvIzlubbmsqHmnInmiafooYxzZXREYXRl6L+b6KGM5riy5p+TXHJcblx0XHRcdFx0Zm9yICh2YXIgdGVtcEtleSBpbiB0aGlzLlBNQ09JTGlzdCkge1xyXG5cdFx0XHRcdFx0Ly9jYWxDaGFuZ2VUaW1lU3Ry55So5LqO546w5Zyo5Zyo5Lu75Yqh5p2h5LiK55qE5pe26Ze0566A56ew77yM6L+Z5piv5Liq6K6h566X5YC877yM5omA5Lul6ZyA6KaB5Li05pe26K6h566X6I635b6XXHJcblx0XHRcdFx0XHRwbUpTVG9vbHMuY2FsUE1DT0kodGhpcy5QTUNPSUxpc3RbdGVtcEtleV0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdG9uUE1DT0lDb21tYW5kU2VsZWN0KGV2ZW50KSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHRoaXMuc2hvd0lPU0RpYWxvZy5faWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG5cdFx0XHRcdHRoaXMuc2hvd0lPU0RpYWxvZztcclxuXHRcdFx0XHR0aGlzLkNsaWNrSXRlbURhdGEgPSB0aGlzLlBNQ09JTGlzdC5maW5kKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdHJldHVybiBlLl9pZCA9PSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMuc2hvd0lPU0RpYWxvZy5pc1Nob3dJT1NEaWFsb2cgPSB0cnVlO1xyXG5cdFx0XHRcdC8vIHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0Ly8gICBzaG93SU9TRGlhbG9nOiB0aGlzLnNob3dJT1NEaWFsb2csXHJcblx0XHRcdFx0Ly8gICBDbGlja0l0ZW1EYXRhOiB0aGlzLkNsaWNrSXRlbURhdGFcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHR0aGF0LnNob3dJT1NEaWFsb2cgPSB0aGlzLnNob3dJT1NEaWFsb2c7XHJcblx0XHRcdFx0dGhhdC5DbGlja0l0ZW1EYXRhID0gdGhpcy5DbGlja0l0ZW1EYXRhO1xyXG5cdFx0XHRcdHZhciB0ZW1wUE1DT0kgPSBwbUpTVG9vbHMuZ2V0T25lQ29udHJvbEZyb21MaXN0KGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQsIHRoaXMuUE1DT0lMaXN0KTtcclxuXHRcdFx0XHR0aGlzLmRpYWxvZ1BNT3JkZXJQcm9UeXBlID0gdGVtcFBNQ09JLlBNT3JkZXJQcm9UeXBlO1xyXG5cclxuXHRcdFx0XHRpZiAodGVtcFBNQ09JLlBNT3JkZXJTdGF0ZSAhPSBcIk5PUkVMRUFTRVwiICYmIHRlbXBQTUNPSS5QTU9yZGVyU3RhdGUgIT0gXCJQVUJMSVNIXCIpIHtcclxuXHRcdFx0XHRcdC8vIHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0XHQvLyAgIGNsYXNzVmlldzogXCJ3ZXVpLWFjdGlvbnNoZWV0X19jZWxsbm9uZVwiXHJcblx0XHRcdFx0XHQvLyB9KTsgLy/lt7LmjojmnYPvvIzkuI3lhYHorrjov5vooYzliKDpmaTlkoznvJbovpFcclxuXHRcdFx0XHRcdHRoYXQuY2xhc3NWaWV3ID0gXCJ3ZXVpLWFjdGlvbnNoZWV0X19jZWxsbm9uZVwiO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyB0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRcdFx0Ly8gICBjbGFzc1ZpZXc6IFwid2V1aS1hY3Rpb25zaGVldF9fY2VsbFwiXHJcblx0XHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHRcdHRoaXMuY2xhc3NWaWV3ID0gXCJ3ZXVpLWFjdGlvbnNoZWV0X19jZWxsXCI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyB0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRcdC8vICAgZGlhbG9nUE1PcmRlclByb1R5cGU6IHRoaXMuZGlhbG9nUE1PcmRlclByb1R5cGVcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHR0aGF0LmRpYWxvZ1BNT3JkZXJQcm9UeXBlID0gdGhpcy5kaWFsb2dQTU9yZGVyUHJvVHlwZTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdG9uUE1DT0lDb21tYW5kU2VsZWN0Q2xvc2UoKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93SU9TRGlhbG9nLmlzU2hvd0lPU0RpYWxvZyA9IGZhbHNlO1xyXG5cdFx0XHRcdC8vIHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0Ly8gICBzaG93SU9TRGlhbG9nOiB0aGlzLnNob3dJT1NEaWFsb2dcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHR0aGlzLnNob3dJT1NEaWFsb2cgPSB0aGlzLnNob3dJT1NEaWFsb2c7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRzaGFyZVBNQ09JKGV2ZW50KSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXZlbnQpO1xyXG5cdFx0XHRcdHZhciB0ZW1wUE1DT0kgPSBwbUpTVG9vbHMuZ2V0T25lQ29udHJvbEZyb21MaXN0KGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQsIHRoaXMuUE1DT0lMaXN0KTtcclxuXHRcdFx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJy4uL3NoYXJlUGFnZS9zaGFyZVBhZ2U/ZGF0YVR5cGU9UE1DT0lPcGVuJlBNQ09JX2lkPScgKyBldmVudC5jdXJyZW50VGFyZ2V0LmlkLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdFx0Ly8g6L+Z6YeM57uZ6KaB5omT5byA55qE6aG16Z2i5Lyg6YCS5pWw5o2uLiAg56ys5LiA5Liq5Y+C5pWwOuaWueazlWtleSwg56ys5LqM5Liq5Y+C5pWwOumcgOimgeS8oOmAkueahOaVsOaNrlxyXG5cdFx0XHRcdFx0XHRyZXMuZXZlbnRDaGFubmVsLmVtaXQoJ1BNQ09JJywgdGVtcFBNQ09JKTsgLy/kvKDpgJIgdGhpcy5kYXRhLlBNQ09JTGlzdOi/h+WOu+W8j+S4uuS6hu+8jOa3u+WKoOaIkOWKn+WQjuOAglxyXG5cdFx0XHRcdFx0XHQvL1BNQ09J55u05o6l5re75Yqg5YiwdGhpcy5kYXRhLlBNQ09JTGlzdOS4re+8jOWGjei/lOWbnuW9k+WJjeeVjOmdou+8jOS7peWHj+WwkeS4gOasoeaVsOaNruivu+WPllxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly/liKDpmaTkuqTku5jku7vliqHvvIjkuozmrKHnoa7orqTlvLnmoYbvvIlcclxuXHRcdFx0YXN5bmMgZGVsZXRlUE1DT0koZXZlbnQpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhldmVudCk7XHJcblx0XHRcdFx0dmFyIGZ1bmNQcmEgPSB7fTtcclxuXHRcdFx0XHRmdW5jUHJhLlBNQ09JID0ge307IC8v5YeG5aSH5LiA5Liq56m655qEUE1DT0lcclxuXHJcblx0XHRcdFx0ZnVuY1ByYS5QTUNPSS5faWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG5cdFx0XHRcdHZhciB0ZW1wUE1DT0kgPSBwbUpTVG9vbHMuZ2V0T25lQ29udHJvbEZyb21MaXN0KGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQsIHRoaXMuUE1DT0lMaXN0KTtcclxuXHRcdFx0XHRmdW5jUHJhLlBNQ09JID0gdGVtcFBNQ09JO1xyXG5cdFx0XHRcdHd4LnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+aPkOekuicsXHJcblx0XHRcdFx0XHRjb250ZW50OiAn56Gu6K6k6KaB5Yig6Zmk5ZCXPycsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJyk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kZWxldGVQTUNPSUNvbmZpcm0oZnVuY1ByYSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly/noa7orqTov5vooYzkuozmrKHliKDpmaTkuqTku5jku7vliqFcclxuXHRcdFx0YXN5bmMgZGVsZXRlUE1DT0lDb25maXJtKGZ1bmNQcmEpIHtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIHRlbXBSZXMgPSBhd2FpdCBwbVNlclRvb2xzLmV4ZVBNQ09JKFwiUE1DT0lEZWxldGVcIiwgZnVuY1ByYSk7XHJcblxyXG5cdFx0XHRcdGlmICh0ZW1wUmVzLmVyck1zZyA9PSBcIk9LXCIpIHtcclxuXHRcdFx0XHRcdC8v6ZSZ6K+v5aSE55CGXHJcblx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+WIoOmZpOS6pOS7mOS7u+WKoeaIkOWKn++8gScsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDBcclxuXHRcdFx0XHRcdH0pOyAvL+iwg+eUqOmAmueUqOaWueazlS0tLS3liKDpmaTliJfooajmlbDmja7jgJDmlbDnu4TjgJHvvIh0aGlzLmRhdGEuUE1DT0lMaXN077yJ5LitX2lk5YC85Li64oCcZnVuY1ByYS5QTUNPSS5faWRcIueahOaVsOaNrlxyXG5cclxuXHRcdFx0XHRcdHZhciBUZW1wUE1DT0lMaXN0ID0gcG1KU1Rvb2xzLkRlbGV0ZUZyb21MaXN0KGZ1bmNQcmEuUE1DT0kuX2lkLCB0aGlzXHJcblx0XHRcdFx0XHQuUE1DT0lMaXN0KTsgLy/miafooYzorqHnrpfpqbHliqjlh73mlbDvvIjmnInkupvlj5jph4/mmK/orqHnrpfojrflvpfnmoTvvIlcclxuXHJcblx0XHRcdFx0XHR0aGlzLmNhbFBNQ09JTGlzdCgpOyAvL+WwhuWIoOmZpOWQjueahOWIl+ihqOaVsOe7hFRlbXBQTUNPSUxpc3TvvIzph43mlrDotYvlgLxcclxuXHJcblx0XHRcdFx0XHQvLyB0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRcdFx0Ly8gICBQTUNPSUxpc3Q6IFRlbXBQTUNPSUxpc3RcclxuXHRcdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdFx0dGhhdC5QTUNPSUxpc3QgPSBUZW1wUE1DT0lMaXN0O1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvL+mUmeivr+WkhOeQhlxyXG5cdFx0XHRcdFx0dGhhdC5TaG93RXJyb3JUaXBzKCfliKDpmaTkuqTku5jku7vliqHplJnor686JyArIHRlbXBSZXMuZXJyTXNnICsgJ++8gScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8vXHJcblx0XHRcdHBtRGlhbG9nQ2xvc2U6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0Ly8gdGhpcy5zZXREYXRhKHtcclxuXHRcdFx0XHQvLyAgIHBtRGlhbG9nOiBmYWxzZVxyXG5cdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdHRoaXMucG1EaWFsb2cgPSBmYWxzZTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8v5Yqg5Yiw5oiR55qE5Lu75YqhXHJcblx0XHRcdGFzeW5jIGFkZFBNQ09JKGV2ZW50KSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzOyAvL+i/memHjOWHhuWkh+WGmeS4gOS4quagh+WHhueahOa3u+WKoOWHveaVsFxyXG5cclxuXHRcdFx0XHR2YXIgZnVuY1ByYSA9IHt9O1xyXG5cdFx0XHRcdGZ1bmNQcmEuWkNUUE1DT0lfaWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG5cdFx0XHRcdHZhciB0ZW1wUmVzID0gYXdhaXQgcG1TZXJUb29scy5leGVQTUNPSShcIkFkZE9uZU15UE1DT0lieVBNVXNlclwiLCBmdW5jUHJhKTtcclxuXHJcblx0XHRcdFx0aWYgKHRlbXBSZXMuZXJyTXNnID09IFwiT0tcIikge1xyXG5cdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfliqDliLDmiJHnmoTku7vliqHmiJDlip/vvIzor7fliLDmiJHnmoTku7vliqHkuK3mn6XnnIsnLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXHJcblx0XHRcdFx0XHR9KTsgLy/liqDlhaXliLDmiJHnmoTku7vliqHkuK3lkI7vvIzpnIDopoHlsIbor6XmlbDmja7ku47lvZPliY3liJfooajkuK3np7vpmaQgXHJcblx0XHRcdFx0XHQvL+iwg+eUqOmAmueUqOaWueazlS0tLS3liKDpmaTliJfooajmlbDmja7jgJDmlbDnu4TjgJHvvIh0aGlzLmRhdGEuUE1DT0lMaXN077yJ5LitX2lk5YC85Li64oCcZnVuY1ByYS5QTUNPSS5faWRcIueahOaVsOaNriBcclxuXHJcblx0XHRcdFx0XHR2YXIgVGVtcFBNQ09JTGlzdCA9IHBtSlNUb29scy5EZWxldGVGcm9tTGlzdChmdW5jUHJhLlpDVFBNQ09JX2lkLCB0aGlzXHJcblx0XHRcdFx0XHQuUE1DT0lMaXN0KTsgLy/miafooYzorqHnrpfpqbHliqjlh73mlbDvvIjmnInkupvlj5jph4/mmK/orqHnrpfojrflvpfnmoTvvIkgXHJcblxyXG5cdFx0XHRcdFx0dGhpcy5jYWxQTUNPSUxpc3QoKTsgLy/lsIbliKDpmaTlkI7nmoTliJfooajmlbDnu4RUZW1wUE1DT0lMaXN077yM6YeN5paw6LWL5YC8IFxyXG5cclxuXHRcdFx0XHRcdC8vIHRoaXMuc2V0RGF0YSh7XHJcblx0XHRcdFx0XHQvLyAgIFBNQ09JTGlzdDogVGVtcFBNQ09JTGlzdFxyXG5cdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHR0aGF0LlBNQ09JTGlzdCA9IFRlbXBQTUNPSUxpc3Q7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8v6ZSZ6K+v5aSE55CGXHJcblx0XHRcdFx0XHR0aGF0LlNob3dFcnJvclRpcHMoXCLliJvlu7rkuqTku5jku7vliqHplJnor686XCIgKyB0ZW1wUmVzLmVyck1zZyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly/lj5HluINcclxuXHRcdFx0YXN5bmMgcHVibGlzaFBNQ09JKGV2ZW50KSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCLlj5HluIPkuovku7bnm5HlkKxcIiwgZXZlbnQpO1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgZnVuY1ByYSA9IHt9O1xyXG5cdFx0XHRcdGZ1bmNQcmEuUE1DT0kgPSB7fTtcclxuXHRcdFx0XHR2YXIgUE1DT0lEYXRhID0gcG1KU1Rvb2xzLmdldE9uZUNvbnRyb2xGcm9tTGlzdChldmVudC5jdXJyZW50VGFyZ2V0LmlkLCB0aGlzXHJcblx0XHRcdFx0LlBNQ09JTGlzdCk7IC8v5qC55o2u5pys5p2h5pWw5o2u55qEX2lk77yM5om+5Yiw5pys5p2h5pWw5o2uQ09J5pWw5o2uXHJcblx0XHRcdFx0Ly/liKTmlq3lvZPliY3ml6XmnJ/mmK/lkKbotoXov4fotoXov4forqHliJLkuqTku5jml6XmnJ/vvIzoi6XotoXov4fliJnkuI3lhYHorrjlj5HluIPvvIzoi6Xlt7LmjojmnYPkuZ/kuI3lj6/lj5HluINcclxuXHJcblx0XHRcdFx0dmFyIFRlbXBETiA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdFx0dmFyIFRlbXBOb3dNb250aCA9IFRlbXBETi5nZXRNb250aCgpICsgMSA+IDkgPyBUZW1wRE4uZ2V0TW9udGgoKSArIDEgOiBcIjBcIiArIChUZW1wRE4uZ2V0TW9udGgoKSArIDEpO1xyXG5cdFx0XHRcdHZhciBUZW1wTm93RGF5ID0gVGVtcEROLmdldERhdGUoKSA+IDkgPyBUZW1wRE4uZ2V0RGF0ZSgpIDogXCIwXCIgKyBUZW1wRE4uZ2V0RGF0ZSgpO1xyXG5cdFx0XHRcdHZhciBUZW1wU0QgPSBUZW1wRE4uZ2V0RnVsbFllYXIoKSArIFwiL1wiICsgVGVtcE5vd01vbnRoICsgXCIvXCIgKyBUZW1wTm93RGF5O1xyXG5cclxuXHRcdFx0XHRpZiAoVGVtcFNEID4gUE1DT0lEYXRhLlpDVFBsYW5EZWxpRGF0ZVNob3J0IHx8IFBNQ09JRGF0YS5QTU9yZGVyU3RhdGUgIT0gXCJOT1JFTEVBU0VcIiAmJiBQTUNPSURhdGFcclxuXHRcdFx0XHRcdC5QTU9yZGVyU3RhdGUgIT0gXCJQVUJMSVNIXCIpIHtcclxuXHRcdFx0XHRcdHRoYXQuU2hvd0Vycm9yVGlwcyhcIuS7u+WKoeWPkeW4g+Wksei0pTrlvZPliY3ku7vliqHkuI3mlK/mjIHlj5HluIPvvIzlt7LotoXov4forqHliJLkuqTku5jml6XmnJ/miJblt7Lov5vlhaXmjojmnYPmiafooYznirbmgIHvvIFcIik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHd4LnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5rip6aao5o+Q56S6JyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJ+WItueoi+W+ruS/oeWwj+eoi+W6j+W5s+WPsOS7heaYr+aPkOS+m+e7meeUn+S6p+i9pumXtOWSjOW3peS6uuS9v+eUqOeahOS7u+WKoeeuoeeQhuW3peWFt++8jOW5tuS4jeeUqOS6juaLm+iBmOetieihjOS4uuOAgueUqOaIt+W6lOWvueW3peWPi+eZu+iusOaIlui0puWPt+e7keWumuaXtuaJgOWhq+WGmeeahOi1hOaWmeeahOecn+WunuaAp+OAgeWQiOazleaAp+OAgeWHhuehruaAp+WSjOacieaViOaAp+aJv+aLhei0o+S7u+OAgicsXHJcblx0XHRcdFx0XHRcdGNvbmZpcm1UZXh0OiAn5Y+R5biDJyxcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogYXN5bmMgZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmdW5jUHJhLlBNQ09JID0gUE1DT0lEYXRhOyAvL+WwhuacrOadoeaVsOaNrkNPSeS/oeaBr++8jOi1i+WAvOWIsGZ1blByYeS4rVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGZ1bmNQcmEuUE1DT0kuX2lkID0gZXZlbnQuY3VycmVudFRhcmdldC5pZDtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuRnVuQ2hvb3NlTG9jYXRpb24oZnVuY1ByYSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvL+WPkeW4g+S9jee9rumAieaLqeW5tuabtOaWsFxyXG5cdFx0XHRhc3luYyBGdW5DaG9vc2VMb2NhdGlvbihmdW5jUHJhKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHd4LmdldFNldHRpbmcoe1xyXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0Ly/mmK/lkKblvIDlkK/mjojmnYNcclxuXHRcdFx0XHRcdFx0aWYgKCFyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJMb2NhdGlvbiddKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5mZXRjaEFnYWluTG9jYXRpb24oZnVuY1ByYSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5GdW5XWENob29zZUxvY2F0aW9uKGZ1bmNQcmEpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly/lvJXlr7zph43mlrDojrflj5bmjojmnYNcclxuXHRcdFx0ZmV0Y2hBZ2FpbkxvY2F0aW9uKGZ1bmNQcmEpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0d3guZ2V0U2V0dGluZyh7XHJcblx0XHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHR2YXIgc3RhdHUgPSByZXMuYXV0aFNldHRpbmc7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIXN0YXR1WydzY29wZS51c2VyTG9jYXRpb24nXSkge1xyXG5cdFx0XHRcdFx0XHRcdHd4LnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+aYr+WQpuaOiOadg+W9k+WJjeS9jee9ricsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAn6ZyA6KaB6I635Y+W5oKo55qE5Zyw55CG5L2N572u77yM6K+356Gu6K6k5o6I5p2D77yM5ZCm5YiZ5Y+R5biD5Yqf6IO95bCG5peg5rOV5L2/55SoJyxcclxuXHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IHRpcCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmICh0aXAuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHd4Lm9wZW5TZXR0aW5nKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoZGF0YS5hdXRoU2V0dGluZ1tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwic2NvcGUudXNlckxvY2F0aW9uXCJdID09PVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRydWUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvL+aOiOadg+aIkOWKn1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuRnVuV1hDaG9vc2VMb2NhdGlvbihmdW5jUHJhKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmjojmnYPlpLHotKUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ3N1Y2Nlc3MnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDEwMDBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZhaWw6ICgpID0+IHt9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHt9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6ICgpID0+IHt9LFxyXG5cdFx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHt9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvL+mAieaLqeS9jee9riBcclxuXHRcdFx0RnVuV1hDaG9vc2VMb2NhdGlvbihmdW5jUHJhKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHd4LmNob29zZUxvY2F0aW9uKHtcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKHBtSlNUb29scy5Jc051bGxPckVtcHR5KHJlcy5hZGRyZXNzKSkge1xyXG5cdFx0XHRcdFx0XHRcdHd4LnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+aPkOekuicsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAn5Lu75Yqh5Y+R5biD5aSx6LSlOuiOt+WPluS9jee9ruWksei0pe+8jOaYr+WQpumHjeaWsOWPkeW4g++8nycsXHJcblx0XHRcdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiB0cnVlLFxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuRnVuV1hDaG9vc2VMb2NhdGlvbihmdW5jUHJhKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRmdW5jUHJhLlBNQ09JLlpDVENPSUxhdGl0ID0gcmVzLmxhdGl0dWRlO1xyXG5cdFx0XHRcdFx0XHRcdGZ1bmNQcmEuUE1DT0kuWkNUQ09JTG9uZ2l0ID0gcmVzLmxvbmdpdHVkZTtcclxuXHRcdFx0XHRcdFx0XHRmdW5jUHJhLlBNQ09JLlpDVEFkZHJlc3MgPSByZXMuYWRkcmVzcztcclxuXHRcdFx0XHRcdFx0XHRmdW5jUHJhLlBNQ09JLlBNVVNlcklEID0gYXBwLmdsb2JhbERhdGEuX2lkO1xyXG5cdFx0XHRcdFx0XHRcdGZ1bmNQcmEuUE1DT0kuWkNUTmV3bGF0aXR1ZGUgPSByZXMubGF0aXR1ZGU7XHJcblx0XHRcdFx0XHRcdFx0ZnVuY1ByYS5QTUNPSS5aQ1ROZXdsb25naXR1ZGUgPSByZXMubG9uZ2l0dWRlO1xyXG5cdFx0XHRcdFx0XHRcdGFwcC5nbG9iYWxEYXRhLkN1cnJlbnRMYXRpdHVkZSA9IHJlcy5sYXRpdHVkZTtcclxuXHRcdFx0XHRcdFx0XHRhcHAuZ2xvYmFsRGF0YS5DdXJyZW50TG9uZ2l0dWRlID0gcmVzLmxvbmdpdHVkZTtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LkZ1blBNQ09JUHVibGlzaChmdW5jUHJhKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmVyck1zZyA9PSBcImNob29zZUxvY2F0aW9uOmZhaWwgY2FuY2VsXCIpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LlNob3dFcnJvclRpcHMoXCLku7vliqHlj5HluIPlpLHotKU65oKo5Y+W5raI5LqG6I635Y+W5L2N572u55qE5o6I5p2D77yBXCIpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuU2hvd0Vycm9yVGlwcyhcIuS7u+WKoeWPkeW4g+Wksei0pTrojrflj5bkvY3nva7lpLHotKXvvIFcIik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQvL+aOpeWPo+iwg+eUqOe7k+adn+eahOWbnuiwg+WHveaVsO+8iOiwg+eUqOaIkOWKn+OAgeWksei0pemDveS8muaJp+ihjO+8iVxyXG5cdFx0XHRcdFx0Y29tcGxldGU6IGZ1bmN0aW9uKHJlcykge31cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8v5Lu75Yqh5Y+R5biD5Ye95pWwXHJcblx0XHRcdGFzeW5jIEZ1blBNQ09JUHVibGlzaChmdW5jUHJhKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBUZW1wUmVzID0gYXdhaXQgcG1TZXJUb29scy5leGVQTUNPSShcIlBNQ09JUHVibGlzaFwiLCBmdW5jUHJhKTtcclxuXHJcblx0XHRcdFx0aWYgKFRlbXBSZXMuZXJyTXNnID09IFwiT0tcIikge1xyXG5cdFx0XHRcdFx0Ly/liLfmlrDnirbmgIHkuLrlt7Llj5HluINcclxuXHRcdFx0XHRcdGZ1bmNQcmEuUE1DT0kuUE1PcmRlclN0YXRlID0gXCJQVUJMSVNIXCI7IC8v5omn6KGM5Yqo5oCB5Y+Y6YeP6K6h566X5Ye95pWwXHJcblxyXG5cdFx0XHRcdFx0cG1KU1Rvb2xzLmNhbFBNQ09JKGZ1bmNQcmEuUE1DT0kpOyAvL+aJp+ihjOiuoeeul+mpseWKqOWHveaVsO+8iOacieS6m+WPmOmHj+aYr+iuoeeul+iOt+W+l+eahO+8iVxyXG5cclxuXHRcdFx0XHRcdHBtSlNUb29scy5yZXBsYWNlT25lQ29udHJvbEZyb21MaXN0KGZ1bmNQcmEuUE1DT0kuX2lkLCBmdW5jUHJhLlBNQ09JLCB0aGlzLlBNQ09JTGlzdCk7IC8v5Yi35paw6aG16Z2i5pi+56S6XHJcblxyXG5cdFx0XHRcdFx0Ly8gdGhpcy5zZXREYXRhKHtcclxuXHRcdFx0XHRcdC8vICAgUE1DT0lMaXN0OiB0aGlzLlBNQ09JTGlzdFxyXG5cdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHR0aGF0LlBNQ09JTGlzdCA9IHRoaXMuUE1DT0lMaXN0O1xyXG5cdFx0XHRcdFx0d3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDogJy4uL3Rhc2tNYXAvdGFza01hcD9kYXRhVHlwZT1QTUNPSVB1Ymxpc2gmbGF0aXR1ZGU9JyArIGZ1bmNQcmEuUE1DT0kuWkNUQ09JTGF0aXQgK1xyXG5cdFx0XHRcdFx0XHRcdCcmbG9uZ2l0dWRlPScgKyBmdW5jUHJhLlBNQ09JLlpDVENPSUxvbmdpdCArICcnLFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuRnVuUmVmcmVzaEJ5T3BlcmF0aW9uU3RhdHVzKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGF0LlNob3dFcnJvclRpcHMoXCLkuqTku5jku7vliqHlj5HluIPplJnor686XCIgKyBUZW1wUmVzLmVyck1zZyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFxyXG5cdFx0XHRhc3luYyBvbkF1dGhvcml6ZUFwcGx5KGV2ZW50KSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBUZW1wQ09JRGF0YSA9IHRoYXQuUE1DT0lMaXN0LmZpbmQoZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGUuX2lkID09IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQ7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0d3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcuLi9BcHBsaWNhdGlvblJlY29yZFBhZ2UvQXBwbGljYXRpb25SZWNvcmRQYWdlP1pDVFRhc2tJRD0nICsgZXZlbnQuY3VycmVudFRhcmdldC5pZCArXHJcblx0XHRcdFx0XHRcdCcmZGF0YVR5cGU9QXV0aG9yaXplJk9wdGlvbkNPST0nICsgSlNPTi5zdHJpbmdpZnkoVGVtcENPSURhdGEpICsgJydcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdFxyXG5cdFx0XHRhc3luYyBvbkZpbmlzaGVkQXBwbHkoZXZlbnQpIHtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIFRlbXBDT0lEYXRhID0gdGhhdC5QTUNPSUxpc3QuZmluZChmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZS5faWQgPT0gZXZlbnQuY3VycmVudFRhcmdldC5pZDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR3eC5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJy4uL0FwcGxpY2F0aW9uUmVjb3JkUGFnZS9BcHBsaWNhdGlvblJlY29yZFBhZ2U/WkNUVGFza0lEPScgKyBldmVudC5jdXJyZW50VGFyZ2V0LmlkICtcclxuXHRcdFx0XHRcdFx0JyZkYXRhVHlwZT1GaW5pc2hlZCZPcHRpb25DT0k9JyArIEpTT04uc3RyaW5naWZ5KFRlbXBDT0lEYXRhKSArICcnXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHJcblx0XHRcdGFzeW5jIE9uRWRpdFNlbGVjdCgpIHtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIFRlbXBTdGF0ZUlDTyA9IHtcclxuXHRcdFx0XHRcdElDT0ltYWdlRWRpdDogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19FZGl0X0MucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZVB1Ymxpc2g6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fUFVCTElTSC5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlV2FpdEF1dGhvcml6ZTogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19XYWl0QXV0aG9yaXplLnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VFWEVDOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX0VYRUMucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZVVuYWNjZXB0ZWQ6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fVU5BQ0NFUFRFRC5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlQWNjZXB0OiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX0FDQ0VQVC5wbmdcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0Ly8gdGhhdC5zZXREYXRhKHtcclxuXHRcdFx0XHQvLyAgIElDT0ltYWdlOiBUZW1wU3RhdGVJQ08sXHJcblx0XHRcdFx0Ly8gICBQTUNPSUxpc3RTa2lwOiAwLFxyXG5cdFx0XHRcdC8vICAgT3B0aW9uU2VsZWN0U3RhdGU6IFsnTk9SRUxFQVNFJ10sXHJcblx0XHRcdFx0Ly8gICBPcHRpb25TZWxlY3RTdGF0ZU5hbWU6IFwi57yW6L6R5LitXCJcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHR0aGF0LklDT0ltYWdlID0gVGVtcFN0YXRlSUNPO1xyXG5cdFx0XHRcdHRoYXQuUE1DT0lMaXN0U2tpcCA9IDA7XHJcblx0XHRcdFx0dGhhdC5PcHRpb25TZWxlY3RTdGF0ZSA9IFsnTk9SRUxFQVNFJ107XHJcblx0XHRcdFx0dGhhdC5PcHRpb25TZWxlY3RTdGF0ZU5hbWUgPSBcIue8lui+keS4rVwiO1xyXG5cdFx0XHRcdHRoYXQuZ2V0UE1DT0lMaXN0QnlVc2VyTmV3KCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRcclxuXHRcdFx0YXN5bmMgT25QdWJsaXNoU2VsZWN0KCkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgVGVtcFN0YXRlSUNPID0ge1xyXG5cdFx0XHRcdFx0SUNPSW1hZ2VFZGl0OiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX0VkaXQucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZVB1Ymxpc2g6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fUFVCTElTSF9DLnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VXYWl0QXV0aG9yaXplOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX1dhaXRBdXRob3JpemUucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZUVYRUM6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fRVhFQy5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlVW5hY2NlcHRlZDogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19VTkFDQ0VQVEVELnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VBY2NlcHQ6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fQUNDRVBULnBuZ1wiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHQvLyB0aGF0LnNldERhdGEoe1xyXG5cdFx0XHRcdC8vICAgSUNPSW1hZ2U6IFRlbXBTdGF0ZUlDTyxcclxuXHRcdFx0XHQvLyAgIFBNQ09JTGlzdFNraXA6IDAsXHJcblx0XHRcdFx0Ly8gICBPcHRpb25TZWxlY3RTdGF0ZTogWydQVUJMSVNIJ10sXHJcblx0XHRcdFx0Ly8gICBPcHRpb25TZWxlY3RTdGF0ZU5hbWU6IFwi5Y+R5biDXCJcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHR0aGF0LklDT0ltYWdlID0gVGVtcFN0YXRlSUNPO1xyXG5cdFx0XHRcdHRoYXQuUE1DT0lMaXN0U2tpcCA9IDA7XHJcblx0XHRcdFx0dGhhdC5PcHRpb25TZWxlY3RTdGF0ZSA9IFsnUFVCTElTSCddO1xyXG5cdFx0XHRcdHRoYXQuT3B0aW9uU2VsZWN0U3RhdGVOYW1lID0gXCLlj5HluINcIjtcclxuXHRcdFx0XHR0aGF0LmdldFBNQ09JTGlzdEJ5VXNlck5ldygpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFxyXG5cdFx0XHRhc3luYyBPbldhaXRBdXRob3JpemVTZWxlY3QoKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBUZW1wU3RhdGVJQ08gPSB7XHJcblx0XHRcdFx0XHRJQ09JbWFnZUVkaXQ6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fRWRpdC5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlUHVibGlzaDogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19QVUJMSVNILnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VXYWl0QXV0aG9yaXplOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX1dhaXRBdXRob3JpemVfQy5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlRVhFQzogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19FWEVDLnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VVbmFjY2VwdGVkOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX1VOQUNDRVBURUQucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZUFjY2VwdDogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19BQ0NFUFQucG5nXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdC8vIHRoYXQuc2V0RGF0YSh7XHJcblx0XHRcdFx0Ly8gICBJQ09JbWFnZTogVGVtcFN0YXRlSUNPLFxyXG5cdFx0XHRcdC8vICAgUE1DT0lMaXN0U2tpcDogMCxcclxuXHRcdFx0XHQvLyAgIE9wdGlvblNlbGVjdFN0YXRlOiBbJ1dhaXRBdXRob3JpemUnXSxcclxuXHRcdFx0XHQvLyAgIE9wdGlvblNlbGVjdFN0YXRlTmFtZTogXCLlvoXmjojmnYNcIlxyXG5cdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdHRoYXQuSUNPSW1hZ2UgPSBUZW1wU3RhdGVJQ087XHJcblx0XHRcdFx0dGhhdC5QTUNPSUxpc3RTa2lwID0gMDtcclxuXHRcdFx0XHR0aGF0Lk9wdGlvblNlbGVjdFN0YXRlID0gWydXYWl0QXV0aG9yaXplJ107XHJcblx0XHRcdFx0dGhhdC5PcHRpb25TZWxlY3RTdGF0ZU5hbWUgPSBcIuW+heaOiOadg1wiO1xyXG5cdFx0XHRcdHRoYXQuZ2V0UE1DT0lMaXN0QnlVc2VyTmV3KCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRhc3luYyBPbkV4ZWNTZWxlY3QoKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBUZW1wU3RhdGVJQ08gPSB7XHJcblx0XHRcdFx0XHRJQ09JbWFnZUVkaXQ6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fRWRpdC5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlUHVibGlzaDogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19QVUJMSVNILnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VXYWl0QXV0aG9yaXplOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX1dhaXRBdXRob3JpemUucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZUVYRUM6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fRVhFQ19DLnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VVbmFjY2VwdGVkOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX1VOQUNDRVBURUQucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZUFjY2VwdDogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19BQ0NFUFQucG5nXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoYXQuSUNPSW1hZ2UgPSBUZW1wU3RhdGVJQ087XHJcblx0XHRcdFx0dGhhdC5QTUNPSUxpc3RTa2lwID0gMDtcclxuXHRcdFx0XHR0aGF0Lk9wdGlvblNlbGVjdFN0YXRlID0gWydBTExPV0VEJ107XHJcblx0XHRcdFx0dGhhdC5PcHRpb25TZWxlY3RTdGF0ZU5hbWUgPSBcIuaJp+ihjOS4rVwiO1xyXG5cdFx0XHRcdHRoYXQuZ2V0UE1DT0lMaXN0QnlVc2VyTmV3KCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHJcblx0XHRcdGFzeW5jIE9uVW5hY2NlcHRlZFNlbGVjdCgpIHtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIFRlbXBTdGF0ZUlDTyA9IHtcclxuXHRcdFx0XHRcdElDT0ltYWdlRWRpdDogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19FZGl0LnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VQdWJsaXNoOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX1BVQkxJU0gucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZVdhaXRBdXRob3JpemU6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fV2FpdEF1dGhvcml6ZS5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlRVhFQzogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19FWEVDLnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VVbmFjY2VwdGVkOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX1VOQUNDRVBURURfQy5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlQWNjZXB0OiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX0FDQ0VQVC5wbmdcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0Ly8gdGhhdC5zZXREYXRhKHtcclxuXHRcdFx0XHQvLyAgIElDT0ltYWdlOiBUZW1wU3RhdGVJQ08sXHJcblx0XHRcdFx0Ly8gICBQTUNPSUxpc3RTa2lwOiAwLFxyXG5cdFx0XHRcdC8vICAgT3B0aW9uU2VsZWN0U3RhdGU6IFsnVU5BQ0NFUFRFRCddLFxyXG5cdFx0XHRcdC8vICAgT3B0aW9uU2VsZWN0U3RhdGVOYW1lOiBcIuW+hemqjOaUtlwiXHJcblx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0dGhhdC5JQ09JbWFnZSA9IFRlbXBTdGF0ZUlDTztcclxuXHRcdFx0XHR0aGF0LlBNQ09JTGlzdFNraXAgPSAwO1xyXG5cdFx0XHRcdHRoYXQuT3B0aW9uU2VsZWN0U3RhdGUgPSBbJ1VOQUNDRVBURUQnXTtcclxuXHRcdFx0XHR0aGF0Lk9wdGlvblNlbGVjdFN0YXRlTmFtZSA9IFwi5b6F6aqM5pS2XCI7XHJcblx0XHRcdFx0dGhhdC5nZXRQTUNPSUxpc3RCeVVzZXJOZXcoKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHJcblx0XHRcdGFzeW5jIE9uQWNjZXB0U2VsZWN0KCkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgVGVtcFN0YXRlSUNPID0ge1xyXG5cdFx0XHRcdFx0SUNPSW1hZ2VFZGl0OiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX0VkaXQucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZVB1Ymxpc2g6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fUFVCTElTSC5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlV2FpdEF1dGhvcml6ZTogXCIvc3RhdGljL2ltYWdlcy9pY29uL2ljb19XYWl0QXV0aG9yaXplLnBuZ1wiLFxyXG5cdFx0XHRcdFx0SUNPSW1hZ2VFWEVDOiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX0VYRUMucG5nXCIsXHJcblx0XHRcdFx0XHRJQ09JbWFnZVVuYWNjZXB0ZWQ6IFwiL3N0YXRpYy9pbWFnZXMvaWNvbi9pY29fVU5BQ0NFUFRFRC5wbmdcIixcclxuXHRcdFx0XHRcdElDT0ltYWdlQWNjZXB0OiBcIi9zdGF0aWMvaW1hZ2VzL2ljb24vaWNvX0FDQ0VQVF9DLnBuZ1wiXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHQvLyB0aGF0LnNldERhdGEoe1xyXG5cdFx0XHRcdC8vICAgSUNPSW1hZ2U6IFRlbXBTdGF0ZUlDTyxcclxuXHRcdFx0XHQvLyAgIFBNQ09JTGlzdFNraXA6IDAsXHJcblx0XHRcdFx0Ly8gICBPcHRpb25TZWxlY3RTdGF0ZTogWydBQ0NFUFQnXSxcclxuXHRcdFx0XHQvLyAgIE9wdGlvblNlbGVjdFN0YXRlTmFtZTogXCLlt7LpqozmlLZcIlxyXG5cdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdHRoYXQuSUNPSW1hZ2UgPSBUZW1wU3RhdGVJQ087XHJcblx0XHRcdFx0dGhhdC5QTUNPSUxpc3RTa2lwID0gMDtcclxuXHRcdFx0XHR0aGF0Lk9wdGlvblNlbGVjdFN0YXRlID0gWydBQ0NFUFQnXTtcclxuXHRcdFx0XHR0aGF0Lk9wdGlvblNlbGVjdFN0YXRlTmFtZSA9IFwi5bey6aqM5pS2XCI7XHJcblx0XHRcdFx0dGhhdC5nZXRQTUNPSUxpc3RCeVVzZXJOZXcoKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdFxyXG5cdFx0XHRGdW5SZWZyZXNoQnlPcGVyYXRpb25TdGF0dXMoKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBUZW1wT3B0aW9uU2VsZWN0U3RhdGUgPSB0aGF0Lk9wdGlvblNlbGVjdFN0YXRlTmFtZTtcclxuXHJcblx0XHRcdFx0c3dpdGNoIChUZW1wT3B0aW9uU2VsZWN0U3RhdGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgXCLnvJbovpHkuK1cIjpcclxuXHRcdFx0XHRcdFx0dGhhdC5PbkVkaXRTZWxlY3QoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSBcIuWPkeW4g1wiOlxyXG5cdFx0XHRcdFx0XHR0aGF0Lk9uUHVibGlzaFNlbGVjdCgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlIFwi5b6F5o6I5p2DXCI6XHJcblx0XHRcdFx0XHRcdHRoYXQuT25XYWl0QXV0aG9yaXplU2VsZWN0KCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGNhc2UgXCLmiafooYzkuK1cIjpcclxuXHRcdFx0XHRcdFx0dGhhdC5PbkV4ZWNTZWxlY3QoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSBcIuW+hemqjOaUtlwiOlxyXG5cdFx0XHRcdFx0XHR0aGF0Lk9uVW5hY2NlcHRlZFNlbGVjdCgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlIFwi5bey6aqM5pS2XCI6XHJcblx0XHRcdFx0XHRcdHRoYXQuT25BY2NlcHRTZWxlY3QoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0dGhhdC5PbkV4ZWNTZWxlY3QoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFxyXG5cdFx0XHRTaG93RXJyb3JUaXBzKFRlbXBFcnJvck1zZykge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpczsgLy9zZXRUaW1lb3V06YeM5Lya55So5Yiw77yMXHJcblxyXG5cdFx0XHRcdHRoYXQudG9wVGlwc1N0ciA9IFRlbXBFcnJvck1zZztcclxuXHRcdFx0XHQvLyB0aGF0LnNldERhdGEoe1xyXG5cdFx0XHRcdC8vICAgLy9Nb3ZlVG9VcOinpuWPkVxyXG5cdFx0XHRcdC8vICAgdG9wVGlwczogdHJ1ZSxcclxuXHRcdFx0XHQvLyAgIHRvcFRpcHNTdHI6IHRoYXQudG9wVGlwc1N0clxyXG5cdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdHRoYXQudG9wVGlwcyA9IHRydWU7XHJcblx0XHRcdFx0dGhhdC50b3BUaXBzU3RyID0gdGhhdC50b3BUaXBzU3RyO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHQvLyB0aGF0LnNldERhdGEoe1xyXG5cdFx0XHRcdFx0Ly8gICB0b3BUaXBzOiBmYWxzZSxcclxuXHRcdFx0XHRcdC8vICAgdG9wVGlwc1N0cjogXCJcIlxyXG5cdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHR0aGF0LnRvcFRpcHMgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoYXQudG9wVGlwc1N0ciA9IFwiXCI7XHJcblx0XHRcdFx0fSwgMjAwMCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHJcblx0XHRcdGdldFVzZXJQcm9maWxlOiBhc3luYyBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0d3gubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6ICcuLi9yZWdpc3RQYWdlL3JlZ2lzdFBhZ2UnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdFx0Ly8gdGhpcy5zZXREYXRhKHtcclxuXHRcdFx0XHRcdFx0Ly8gICBwbURpYWxvZ1Nob3VRdWFuOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHRcdFx0dGhhdC5wbURpYWxvZ1Nob3VRdWFuID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRnZXRDYW5jZWw6IGFzeW5jIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHQvLyB0aGlzLnNldERhdGEoe1xyXG5cdFx0XHRcdC8vICAgcG1EaWFsb2dTaG91UXVhbjogZmFsc2VcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHR0aGF0LnBtRGlhbG9nU2hvdVF1YW4gPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!***********************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/App.vue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 32);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDaUs7QUFDakssZ0JBQWdCLDZLQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!************************************************************************************!*\
  !*** E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../安装包/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 33);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVoQixDQUFnQix5akJBQUcsRUFBQyIsImZpbGUiOiIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4v5a6J6KOF5YyFL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uL+WuieijheWMhS9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi/lronoo4XljIUvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/00_工作/07_uniapp/ZCT_Project/MesCloudTest/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__, uniCloud, wx) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));var _globalData;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}\n\n//app.js\n\n//import util from './utils/util.js'\nvar util = __webpack_require__(/*! ./utils/util.js */ 25);\nvar themeListeners = [];var _default =\n\n{\n  globalData: (_globalData = {\n    preventActive: function preventActive(fn) {\n      var self = this;\n\n      if (this.globalData.PageActive) {\n        this.globalData.PageActive = false;\n        if (fn) fn();\n        setTimeout(function () {\n          self.PageActive = true;\n        }, 1000); //设置该时间内重复触发只执行第一次，单位ms，按实际设置\n      } else {\n        __f__(\"log\", '重复点击或触发', \" at App.vue:21\");\n      }\n    } }, _defineProperty(_globalData, \"preventActive\", function preventActive(\n\n  fn) {\n    var self = this;\n\n    if (this.globalData.PageActive) {\n      this.globalData.PageActive = false;\n      if (fn) fn();\n      setTimeout(function () {\n        self.PageActive = true;\n      }, 1500); //设置该时间内重复触发只执行第一次，单位ms，按实际设置\n    } else {\n      __f__(\"log\", '重复点击或触发', \" at App.vue:35\");\n    }\n  }), _defineProperty(_globalData, \"themeChanged\", function themeChanged(\n\n  theme) {\n    this.globalData.theme = theme;\n    themeListeners.forEach(function (listener) {\n      listener(theme);\n    });\n  }), _defineProperty(_globalData, \"watchThemeChange\", function watchThemeChange(\n\n\n  listener) {\n    if (themeListeners.indexOf(listener) < 0) {\n      themeListeners.push(listener);\n    }\n  }), _defineProperty(_globalData, \"unWatchThemeChange\", function unWatchThemeChange(\n\n  listener) {\n    var index = themeListeners.indexOf(listener);\n\n    if (index > -1) {\n      themeListeners.splice(index, 1);\n    }\n  }), _defineProperty(_globalData, \"initWatch\", function initWatch()\n\n  {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var that;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n              _this.db = uniCloud.database({\n                env: _this.globalData.ZCTEnvId //云环境ID \n              });\n\n              that = _this;\n              _this.try(function () {\n                _this.db = wx.cloud.database({\n                  env: _this.globalData.ZCTEnvId //云环境ID \n                });\n\n                var db = _this.db;\n                var _ = db.command;\n                var watcher = db.collection('ZCTChatGroup').where(_.or([{\n                  ZCTSponsorUserId: _.eq(_this.globalData._id) },\n                {\n                  ZCTCommunicatorsUserId: _.eq(_this.globalData._id) }])).\n                where({\n                  ZCTNewestTimeTS: _.gt(_this.globalData.ZCTNewestTimeTS) }).\n                orderBy('ZCTNewestTimeTS', 'desc').watch({\n                  onChange: function onChange(snapshot) {\n                    if (snapshot.type === 'init') {\n                      var TempWaitSumCoun = 0;\n\n                      for (var index = 0; index < that.chats.length; index++) {\n                        TempWaitSumCoun = TempWaitSumCoun + that.chats[index].UnreadNum;\n                      }\n\n                      that.WaitSumCoun = TempWaitSumCoun;\n                    } else {\n                      var chats = _toConsumableArray(that.chats);\n                      snapshot.docChanges.forEach(function (docChange) {\n                        switch (docChange.dataType) {\n                          case 'update':\n                          case 'add':\n                            {\n                              docChange.doc.ZCTNewestTime = util.getTimeShortStrFromTime(util.formatDateTime(docChange.doc.ZCTNewestTime));\n\n                              if (docChange.doc.ZCTSponsorUserId != that._id) {\n                                docChange.doc.UnreadNum = docChange.doc.ZCTCommunicatorUnreadNum;\n                              } else {\n                                docChange.doc.UnreadNum = docChange.doc.ZCTSponsorUnreadNum;\n                              }\n\n                              var ind = chats.findIndex(function (chat) {return chat._id === docChange.doc._id;});\n\n                              if (ind > -1) {\n                                chats.splice(ind, 1, docChange.doc);\n                              } else {\n                                chats.push(docChange.doc);\n                              }\n\n                              var TempWaitSumCoun = 0;\n\n                              for (var _index = 0; _index < chats.length; _index++) {\n                                TempWaitSumCoun = TempWaitSumCoun + chats[_index].UnreadNum;\n                              }\n\n                              that.WaitSumCoun = TempWaitSumCoun;\n                              that.chats = chats;\n\n                              if (that.chats.length > 0 && that.isShowTiTile == true) {\n                                that.isShowTiTile = false;\n                              }\n\n                              break;\n                            }\n\n                          case 'remove':\n                            {\n                              var _ind = chats.findIndex(function (chat) {return chat._id === docChange.doc._id;});\n\n                              if (_ind > -1) {\n                                that.DeleteFromList(chats[_ind]._id, chats);\n                                var TempWaitSumCoun = 0;\n\n                                if (chats.length > 0) {\n                                  for (var _index2 = 0; _index2 < chats.length; _index2++) {\n                                    TempWaitSumCoun = TempWaitSumCoun + chats[_index2].UnreadNum;\n                                  }\n                                }\n\n                                if (chats.length == 0) {\n                                  that.isShowTiTile = true;\n                                }\n\n                                that.WaitSumCoun = TempWaitSumCoun;\n                                that.chats = chats;\n                              }\n\n                              break;\n                            }}\n\n                      });\n                    }\n                  },\n                  onError: function onError(err) {\n                    __f__(\"error\", 'the watch closed because of error', err, \" at App.vue:158\");\n                  } });\n\n              }, '初始化监听失败');case 3:case \"end\":return _context.stop();}}}, _callee);}))();\n  }), _defineProperty(_globalData, \"try\", function _try(\n\n  fn, title) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.prev = 0;_context2.next = 3;return (\n\n                fn());case 3:_context2.next = 8;break;case 5:_context2.prev = 5;_context2.t0 = _context2[\"catch\"](0);\n\n              __f__(\"log\", _context2.t0, \" at App.vue:168\");case 8:case \"end\":return _context2.stop();}}}, _callee2, null, [[0, 5]]);}))();\n\n  }), _defineProperty(_globalData, \"watchchats\",\n\n  function watchchats(method) {\n    //监听函数\n    var that = this;\n    var obj = this.globalData;\n    Object.defineProperty(obj, 'chats', {\n      configurable: true,\n      enumerable: true,\n      set: function set(value) {\n        this._name = value;\n        method(value);\n      },\n      get: function get() {\n        return this._name;\n      } });\n\n  }), _defineProperty(_globalData, \"DeleteFromList\", function DeleteFromList(\n\n  selectedID, TempList) {\n    if (TempList.length) {\n      for (var i = 0; i < TempList.length; i++) {\n        if (TempList[i]._id == selectedID) //遍历出来一个数据\n          {\n            TempList.splice(i, 1);\n            return TempList;\n          }\n      }\n    }\n\n    return TempList; //返回接收到的数组内容\n  }), _globalData),\n\n\n  onLaunch: function onLaunch() {\n    //※切换云环境Id时只需切换这里，其他页面js引用globalData.ZCTEnvId\n    var TempEnvId = \"tcb-ecxw1hs9f19080-6d00j26b1957e\"; //测试云环境Id\n    //var TempEnvId =\"zctmes2021-4gbkpkah6976a0e1\";       //正式云环境Id\n\n    if (!wx.cloud) {\n      __f__(\"error\", '请使用 2.2.3 或以上的基础库以使用云能力', \" at App.vue:210\");\n    } else {\n      wx.cloud.init({\n        // env 参数说明：\n        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源\n        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看\n        //   如不填则使用默认环境（第一个创建的环境）\n        env: TempEnvId,\n        traceUser: true });\n\n    }\n\n    this.globalData = {\n      PMUserID: \"\",\n      PMUserName: \"\",\n      WXLogoState: false,\n      //微信登录状态 true为已登录\n      CurrentLatitude: 0,\n      //当前位置纬度\n      CurrentLongitude: 0,\n      //当前位置经度 \n      PageActive: true,\n      oldTime: \"\",\n      ZCTEnvId: TempEnvId,\n      //当前使用的云环境ID\n      isShowTiTile: true,\n      chats: [],\n      ZCTNewestTimeTS: 0,\n      WaitSumCoun: 0,\n      DataList: [],\n      PMCOIListSkip: 0,\n      //消息界面通知分页 页\n      DataListLimit: 20 //消息界面通知 每页显示数量\n    };\n\n    var that = this;\n    wx.getLocation({\n      success: function success(res) {\n        that.globalData.CurrentLatitude = res.latitude;\n        that.globalData.CurrentLongitude = res.longitude;\n      } });\n\n  },\n  methods: {\n\n    preventActive: function preventActive(fn) {\n      var self = this;\n      if (this.globalData.PageActive) {\n        this.globalData.PageActive = false;\n        if (fn) fn();\n        setTimeout(function () {\n          self.PageActive = true;\n        }, 1500); //设置该时间内重复触发只执行第一次，单位ms，按实际设置\n      } else {\n        __f__(\"log\", '重复点击或触发', \" at App.vue:264\");\n      }\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 14)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 16)[\"default\"], __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 11)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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blBBO0FBb1BBOztBQUVBLGlCQUZBLHlCQUVBLEVBRkEsRUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsRUFFQSxJQUZBLEVBSEEsQ0FLQTtBQUNBLE9BTkEsTUFNQTtBQUNBO0FBQ0E7QUFDQSxLQWJBLEVBcFBBLEUiLCJmaWxlIjoiMzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxyXG5cdFxyXG5cdC8vYXBwLmpzXHJcblx0XHJcblx0Ly9pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWxzL3V0aWwuanMnXHJcblx0Y29uc3QgdXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxzL3V0aWwuanNcIik7XHJcblx0Y29uc3QgdGhlbWVMaXN0ZW5lcnMgPSBbXTtcclxuXHRcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0ICBnbG9iYWxEYXRhOiB7XHJcblx0ICAgIHByZXZlbnRBY3RpdmUoZm4pIHtcclxuXHQgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHRcclxuXHQgICAgICBpZiAodGhpcy5nbG9iYWxEYXRhLlBhZ2VBY3RpdmUpIHtcclxuXHQgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS5QYWdlQWN0aXZlID0gZmFsc2U7XHJcblx0ICAgICAgICBpZiAoZm4pIGZuKCk7XHJcblx0ICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHQgICAgICAgICAgc2VsZi5QYWdlQWN0aXZlID0gdHJ1ZTtcclxuXHQgICAgICAgIH0sIDEwMDApOyAvL+iuvue9ruivpeaXtumXtOWGhemHjeWkjeinpuWPkeWPquaJp+ihjOesrOS4gOasoe+8jOWNleS9jW1z77yM5oyJ5a6e6ZmF6K6+572uXHJcblx0ICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgIGNvbnNvbGUubG9nKCfph43lpI3ngrnlh7vmiJbop6blj5EnKTtcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0XHJcblx0ICAgIHByZXZlbnRBY3RpdmUoZm4pIHtcclxuXHQgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHRcclxuXHQgICAgICBpZiAodGhpcy5nbG9iYWxEYXRhLlBhZ2VBY3RpdmUpIHtcclxuXHQgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS5QYWdlQWN0aXZlID0gZmFsc2U7XHJcblx0ICAgICAgICBpZiAoZm4pIGZuKCk7XHJcblx0ICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHQgICAgICAgICAgc2VsZi5QYWdlQWN0aXZlID0gdHJ1ZTtcclxuXHQgICAgICAgIH0sIDE1MDApOyAvL+iuvue9ruivpeaXtumXtOWGhemHjeWkjeinpuWPkeWPquaJp+ihjOesrOS4gOasoe+8jOWNleS9jW1z77yM5oyJ5a6e6ZmF6K6+572uXHJcblx0ICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgIGNvbnNvbGUubG9nKCfph43lpI3ngrnlh7vmiJbop6blj5EnKTtcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0XHJcblx0ICAgIHRoZW1lQ2hhbmdlZCh0aGVtZSkge1xyXG5cdCAgICAgIHRoaXMuZ2xvYmFsRGF0YS50aGVtZSA9IHRoZW1lO1xyXG5cdCAgICAgIHRoZW1lTGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xyXG5cdCAgICAgICAgbGlzdGVuZXIodGhlbWUpO1xyXG5cdCAgICAgIH0pO1xyXG5cdCAgICB9LFxyXG5cdFx0XHJcblx0XHJcblx0ICAgIHdhdGNoVGhlbWVDaGFuZ2UobGlzdGVuZXIpIHtcclxuXHQgICAgICBpZiAodGhlbWVMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcikgPCAwKSB7XHJcblx0ICAgICAgICB0aGVtZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0XHJcblx0ICAgIHVuV2F0Y2hUaGVtZUNoYW5nZShsaXN0ZW5lcikge1xyXG5cdCAgICAgIGNvbnN0IGluZGV4ID0gdGhlbWVMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XHJcblx0XHJcblx0ICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuXHQgICAgICAgIHRoZW1lTGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XHJcblx0ICAgICAgfVxyXG5cdCAgICB9LFxyXG5cdFxyXG5cdCAgICBhc3luYyBpbml0V2F0Y2goKSB7XHJcblx0ICAgICAgdGhpcy5kYiA9IHVuaUNsb3VkLmRhdGFiYXNlKHtcclxuXHQgICAgICAgIGVudjogdGhpcy5nbG9iYWxEYXRhLlpDVEVudklkIC8v5LqR546v5aKDSUQgXHJcblx0XHJcblx0ICAgICAgfSk7XHJcblx0ICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cdCAgICAgIHRoaXMudHJ5KCgpID0+IHtcclxuXHQgICAgICAgIHRoaXMuZGIgPSB3eC5jbG91ZC5kYXRhYmFzZSh7XHJcblx0ICAgICAgICAgIGVudjogdGhpcy5nbG9iYWxEYXRhLlpDVEVudklkIC8v5LqR546v5aKDSUQgXHJcblx0XHJcblx0ICAgICAgICB9KTtcclxuXHQgICAgICAgIGNvbnN0IGRiID0gdGhpcy5kYjtcclxuXHQgICAgICAgIGNvbnN0IF8gPSBkYi5jb21tYW5kO1xyXG5cdCAgICAgICAgY29uc3Qgd2F0Y2hlciA9IGRiLmNvbGxlY3Rpb24oJ1pDVENoYXRHcm91cCcpLndoZXJlKF8ub3IoW3tcclxuXHQgICAgICAgICAgWkNUU3BvbnNvclVzZXJJZDogXy5lcSh0aGlzLmdsb2JhbERhdGEuX2lkKVxyXG5cdCAgICAgICAgfSwge1xyXG5cdCAgICAgICAgICBaQ1RDb21tdW5pY2F0b3JzVXNlcklkOiBfLmVxKHRoaXMuZ2xvYmFsRGF0YS5faWQpXHJcblx0ICAgICAgICB9XSkpLndoZXJlKHtcclxuXHQgICAgICAgICAgWkNUTmV3ZXN0VGltZVRTOiBfLmd0KHRoaXMuZ2xvYmFsRGF0YS5aQ1ROZXdlc3RUaW1lVFMpXHJcblx0ICAgICAgICB9KS5vcmRlckJ5KCdaQ1ROZXdlc3RUaW1lVFMnLCAnZGVzYycpLndhdGNoKHtcclxuXHQgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChzbmFwc2hvdCkge1xyXG5cdCAgICAgICAgICAgIGlmIChzbmFwc2hvdC50eXBlID09PSAnaW5pdCcpIHtcclxuXHQgICAgICAgICAgICAgIHZhciBUZW1wV2FpdFN1bUNvdW4gPSAwO1xyXG5cdFxyXG5cdCAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoYXQuY2hhdHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0ICAgICAgICAgICAgICAgIFRlbXBXYWl0U3VtQ291biA9IFRlbXBXYWl0U3VtQ291biArIHRoYXQuY2hhdHNbaW5kZXhdLlVucmVhZE51bTtcclxuXHQgICAgICAgICAgICAgIH1cclxuXHRcclxuXHQgICAgICAgICAgICAgIHRoYXQuV2FpdFN1bUNvdW4gPSBUZW1wV2FpdFN1bUNvdW47XHJcblx0ICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgIGNvbnN0IGNoYXRzID0gWy4uLnRoYXQuY2hhdHNdO1xyXG5cdCAgICAgICAgICAgICAgc25hcHNob3QuZG9jQ2hhbmdlcy5mb3JFYWNoKGRvY0NoYW5nZSA9PiB7XHJcblx0ICAgICAgICAgICAgICAgIHN3aXRjaCAoZG9jQ2hhbmdlLmRhdGFUeXBlKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgY2FzZSAndXBkYXRlJzpcclxuXHQgICAgICAgICAgICAgICAgICBjYXNlICdhZGQnOlxyXG5cdCAgICAgICAgICAgICAgICAgICAge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICBkb2NDaGFuZ2UuZG9jLlpDVE5ld2VzdFRpbWUgPSB1dGlsLmdldFRpbWVTaG9ydFN0ckZyb21UaW1lKHV0aWwuZm9ybWF0RGF0ZVRpbWUoZG9jQ2hhbmdlLmRvYy5aQ1ROZXdlc3RUaW1lKSk7XHJcblx0XHJcblx0ICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2NDaGFuZ2UuZG9jLlpDVFNwb25zb3JVc2VySWQgIT0gdGhhdC5faWQpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBkb2NDaGFuZ2UuZG9jLlVucmVhZE51bSA9IGRvY0NoYW5nZS5kb2MuWkNUQ29tbXVuaWNhdG9yVW5yZWFkTnVtO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGRvY0NoYW5nZS5kb2MuVW5yZWFkTnVtID0gZG9jQ2hhbmdlLmRvYy5aQ1RTcG9uc29yVW5yZWFkTnVtO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHJcblx0ICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZCA9IGNoYXRzLmZpbmRJbmRleChjaGF0ID0+IGNoYXQuX2lkID09PSBkb2NDaGFuZ2UuZG9jLl9pZCk7XHJcblx0XHJcblx0ICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmQgPiAtMSkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRzLnNwbGljZShpbmQsIDEsIGRvY0NoYW5nZS5kb2MpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRzLnB1c2goZG9jQ2hhbmdlLmRvYyk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHRcclxuXHQgICAgICAgICAgICAgICAgICAgICAgdmFyIFRlbXBXYWl0U3VtQ291biA9IDA7XHJcblx0XHJcblx0ICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaGF0cy5sZW5ndGg7IGluZGV4KyspIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBUZW1wV2FpdFN1bUNvdW4gPSBUZW1wV2FpdFN1bUNvdW4gKyBjaGF0c1tpbmRleF0uVW5yZWFkTnVtO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHJcblx0ICAgICAgICAgICAgICAgICAgICAgIHRoYXQuV2FpdFN1bUNvdW4gPSBUZW1wV2FpdFN1bUNvdW47XHJcblx0ICAgICAgICAgICAgICAgICAgICAgIHRoYXQuY2hhdHMgPSBjaGF0cztcclxuXHRcclxuXHQgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQuY2hhdHMubGVuZ3RoID4gMCAmJiB0aGF0LmlzU2hvd1RpVGlsZSA9PSB0cnVlKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pc1Nob3dUaVRpbGUgPSBmYWxzZTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHQgICAgICAgICAgICAgICAgICAgIH1cclxuXHRcclxuXHQgICAgICAgICAgICAgICAgICBjYXNlICdyZW1vdmUnOlxyXG5cdCAgICAgICAgICAgICAgICAgICAge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmQgPSBjaGF0cy5maW5kSW5kZXgoY2hhdCA9PiBjaGF0Ll9pZCA9PT0gZG9jQ2hhbmdlLmRvYy5faWQpO1xyXG5cdFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kID4gLTEpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LkRlbGV0ZUZyb21MaXN0KGNoYXRzW2luZF0uX2lkLCBjaGF0cyk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFRlbXBXYWl0U3VtQ291biA9IDA7XHJcblx0XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXRzLmxlbmd0aCA+IDApIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaGF0cy5sZW5ndGg7IGluZGV4KyspIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVtcFdhaXRTdW1Db3VuID0gVGVtcFdhaXRTdW1Db3VuICsgY2hhdHNbaW5kZXhdLlVucmVhZE51bTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXRzLmxlbmd0aCA9PSAwKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmlzU2hvd1RpVGlsZSA9IHRydWU7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuV2FpdFN1bUNvdW4gPSBUZW1wV2FpdFN1bUNvdW47XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5jaGF0cyA9IGNoYXRzO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICB9XHJcblx0XHJcblx0ICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICB9KTtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgIH0sXHJcblx0ICAgICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIChlcnIpIHtcclxuXHQgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd0aGUgd2F0Y2ggY2xvc2VkIGJlY2F1c2Ugb2YgZXJyb3InLCBlcnIpO1xyXG5cdCAgICAgICAgICB9XHJcblx0ICAgICAgICB9KTtcclxuXHQgICAgICB9LCAn5Yid5aeL5YyW55uR5ZCs5aSx6LSlJyk7XHJcblx0ICAgIH0sXHJcblx0XHJcblx0ICAgIGFzeW5jIHRyeShmbiwgdGl0bGUpIHtcclxuXHQgICAgICB0cnkge1xyXG5cdCAgICAgICAgYXdhaXQgZm4oKTtcclxuXHQgICAgICB9IGNhdGNoIChlKSB7XHJcblx0ICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuXHQgICAgICB9XHJcblx0ICAgIH0sXHJcblx0XHJcblx0ICAgIHdhdGNoY2hhdHM6IGZ1bmN0aW9uIChtZXRob2QpIHtcclxuXHQgICAgICAvL+ebkeWQrOWHveaVsFxyXG5cdCAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHQgICAgICB2YXIgb2JqID0gdGhpcy5nbG9iYWxEYXRhO1xyXG5cdCAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosICdjaGF0cycsIHtcclxuXHQgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuXHQgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblx0ICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdCAgICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XHJcblx0ICAgICAgICAgIG1ldGhvZCh2YWx1ZSk7XHJcblx0ICAgICAgICB9LFxyXG5cdCAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICAgIH0pO1xyXG5cdCAgICB9LFxyXG5cdFxyXG5cdCAgICBEZWxldGVGcm9tTGlzdChzZWxlY3RlZElELCBUZW1wTGlzdCkge1xyXG5cdCAgICAgIGlmIChUZW1wTGlzdC5sZW5ndGgpIHtcclxuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgVGVtcExpc3QubGVuZ3RoOyBpKyspIHtcclxuXHQgICAgICAgICAgaWYgKFRlbXBMaXN0W2ldLl9pZCA9PSBzZWxlY3RlZElEKSAvL+mBjeWOhuWHuuadpeS4gOS4quaVsOaNrlxyXG5cdCAgICAgICAgICAgIHtcclxuXHQgICAgICAgICAgICAgIFRlbXBMaXN0LnNwbGljZShpLCAxKTtcclxuXHQgICAgICAgICAgICAgIHJldHVybiBUZW1wTGlzdDtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgfVxyXG5cdFxyXG5cdCAgICAgIHJldHVybiBUZW1wTGlzdDsgLy/ov5Tlm57mjqXmlLbliLDnmoTmlbDnu4TlhoXlrrlcclxuXHQgICAgfVxyXG5cdFxyXG5cdCAgfSxcclxuXHQgIG9uTGF1bmNoOiBmdW5jdGlvbiAoKSB7XHJcblx0ICAgIC8v4oC75YiH5o2i5LqR546v5aKDSWTml7blj6rpnIDliIfmjaLov5nph4zvvIzlhbbku5bpobXpnaJqc+W8leeUqGdsb2JhbERhdGEuWkNURW52SWRcclxuXHQgICAgdmFyIFRlbXBFbnZJZCA9IFwidGNiLWVjeHcxaHM5ZjE5MDgwLTZkMDBqMjZiMTk1N2VcIjsgLy/mtYvor5XkupHnjq/looNJZFxyXG5cdCAgICAvL3ZhciBUZW1wRW52SWQgPVwiemN0bWVzMjAyMS00Z2JrcGthaDY5NzZhMGUxXCI7ICAgICAgIC8v5q2j5byP5LqR546v5aKDSWRcclxuXHRcclxuXHQgICAgaWYgKCF3eC5jbG91ZCkge1xyXG5cdCAgICAgIGNvbnNvbGUuZXJyb3IoJ+ivt+S9v+eUqCAyLjIuMyDmiJbku6XkuIrnmoTln7rnoYDlupPku6Xkvb/nlKjkupHog73lipsnKTtcclxuXHQgICAgfSBlbHNlIHtcclxuXHQgICAgICB3eC5jbG91ZC5pbml0KHtcclxuXHQgICAgICAgIC8vIGVudiDlj4LmlbDor7TmmI7vvJpcclxuXHQgICAgICAgIC8vICAgZW52IOWPguaVsOWGs+WumuaOpeS4i+adpeWwj+eoi+W6j+WPkei1t+eahOS6keW8gOWPkeiwg+eUqO+8iHd4LmNsb3VkLnh4eO+8ieS8mum7mOiupOivt+axguWIsOWTquS4quS6keeOr+Wig+eahOi1hOa6kFxyXG5cdCAgICAgICAgLy8gICDmraTlpITor7floavlhaXnjq/looMgSUQsIOeOr+WigyBJRCDlj6/miZPlvIDkupHmjqfliLblj7Dmn6XnnItcclxuXHQgICAgICAgIC8vICAg5aaC5LiN5aGr5YiZ5L2/55So6buY6K6k546v5aKD77yI56ys5LiA5Liq5Yib5bu655qE546v5aKD77yJXHJcblx0ICAgICAgICBlbnY6IFRlbXBFbnZJZCxcclxuXHQgICAgICAgIHRyYWNlVXNlcjogdHJ1ZVxyXG5cdCAgICAgIH0pO1xyXG5cdCAgICB9XHJcblx0XHJcblx0ICAgIHRoaXMuZ2xvYmFsRGF0YSA9IHtcclxuXHQgICAgICBQTVVzZXJJRDogXCJcIixcclxuXHQgICAgICBQTVVzZXJOYW1lOiBcIlwiLFxyXG5cdCAgICAgIFdYTG9nb1N0YXRlOiBmYWxzZSxcclxuXHQgICAgICAvL+W+ruS/oeeZu+W9leeKtuaAgSB0cnVl5Li65bey55m75b2VXHJcblx0ICAgICAgQ3VycmVudExhdGl0dWRlOiAwLFxyXG5cdCAgICAgIC8v5b2T5YmN5L2N572u57qs5bqmXHJcblx0ICAgICAgQ3VycmVudExvbmdpdHVkZTogMCxcclxuXHQgICAgICAvL+W9k+WJjeS9jee9rue7j+W6piBcclxuXHQgICAgICBQYWdlQWN0aXZlOiB0cnVlLFxyXG5cdCAgICAgIG9sZFRpbWU6IFwiXCIsXHJcblx0ICAgICAgWkNURW52SWQ6IFRlbXBFbnZJZCxcclxuXHQgICAgICAvL+W9k+WJjeS9v+eUqOeahOS6keeOr+Wig0lEXHJcblx0ICAgICAgaXNTaG93VGlUaWxlOiB0cnVlLFxyXG5cdCAgICAgIGNoYXRzOiBbXSxcclxuXHQgICAgICBaQ1ROZXdlc3RUaW1lVFM6IDAsXHJcblx0ICAgICAgV2FpdFN1bUNvdW46IDAsXHJcblx0ICAgICAgRGF0YUxpc3Q6IFtdLFxyXG5cdCAgICAgIFBNQ09JTGlzdFNraXA6IDAsXHJcblx0ICAgICAgLy/mtojmga/nlYzpnaLpgJrnn6XliIbpobUg6aG1XHJcblx0ICAgICAgRGF0YUxpc3RMaW1pdDogMjAgLy/mtojmga/nlYzpnaLpgJrnn6Ug5q+P6aG15pi+56S65pWw6YePXHJcblx0XHJcblx0ICAgIH07XHJcblx0ICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHQgICAgd3guZ2V0TG9jYXRpb24oe1xyXG5cdCAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuXHQgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS5DdXJyZW50TGF0aXR1ZGUgPSByZXMubGF0aXR1ZGU7XHJcblx0ICAgICAgICB0aGF0Lmdsb2JhbERhdGEuQ3VycmVudExvbmdpdHVkZSA9IHJlcy5sb25naXR1ZGU7XHJcblx0ICAgICAgfVxyXG5cdCAgICB9KTtcclxuXHQgIH0sXHJcblx0ICBtZXRob2RzOiB7XHJcblx0XHQgIFxyXG5cdFx0ICBwcmV2ZW50QWN0aXZlKGZuKSB7XHJcblx0XHQgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblx0XHQgICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS5QYWdlQWN0aXZlKSB7XHJcblx0XHQgICAgICB0aGlzLmdsb2JhbERhdGEuUGFnZUFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0ICAgICAgaWYgKGZuKSBmbigpO1xyXG5cdFx0ICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHQgICAgICAgIHNlbGYuUGFnZUFjdGl2ZSA9IHRydWU7XHJcblx0XHQgICAgICB9LCAxNTAwKTsgLy/orr7nva7or6Xml7bpl7TlhoXph43lpI3op6blj5Hlj6rmiafooYznrKzkuIDmrKHvvIzljZXkvY1tc++8jOaMieWunumZheiuvue9rlxyXG5cdFx0ICAgIH0gZWxzZSB7XHJcblx0XHQgICAgICBjb25zb2xlLmxvZygn6YeN5aSN54K55Ye75oiW6Kem5Y+RJyk7XHJcblx0XHQgICAgfVxyXG5cdFx0ICB9LFxyXG5cdFx0ICBcclxuXHQgIH1cclxuXHR9O1xyXG5cdFxyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNyYz1cIi4vYXBwLmNzc1wiPlxyXG5cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n");

/***/ })
],[[0,"app-config"]]]);