"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/components/Menu/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Menu/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu.module.scss */ \"(app-pages-browser)/./src/components/Menu/Menu.module.scss\");\n/* harmony import */ var _Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Menu(param) {\n    let { children } = param;\n    _s();\n    const links = [\n        {\n            id: 1,\n            url: \"/organizacao\",\n            titulo: \"Organiza\\xe7\\xe3o\"\n        },\n        {\n            id: 2,\n            url: \"/eventos\",\n            titulo: \"Eventos\"\n        },\n        {\n            id: 3,\n            url: \"/historia\",\n            titulo: \"Hist\\xf3ria\"\n        }\n    ];\n    const [logado, setLogado] = useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default().menu),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: (_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default().menu_navegacao),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                            className: (_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default().menu_logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/principal\",\n                                className: (_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default().menu_logo_texto),\n                                children: \"Portas\"\n                            }, void 0, false, {\n                                fileName: \"/home/gusthavo/projetos/portas/src/components/Menu/index.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 20\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/gusthavo/projetos/portas/src/components/Menu/index.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: (_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default().menu_lista),\n                            children: links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    className: (_Menu_module_scss__WEBPACK_IMPORTED_MODULE_2___default().menu_lista_link),\n                                    href: link.url,\n                                    children: [\n                                        \" \",\n                                        link.titulo,\n                                        \" \"\n                                    ]\n                                }, link.id, true, {\n                                    fileName: \"/home/gusthavo/projetos/portas/src/components/Menu/index.tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 42\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/home/gusthavo/projetos/portas/src/components/Menu/index.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/gusthavo/projetos/portas/src/components/Menu/index.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/gusthavo/projetos/portas/src/components/Menu/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this),\n            children\n        ]\n    }, void 0, true);\n}\n_s(Menu, \"rNJSB6LGamK9nDZx3Nf5MMIGeGA=\");\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01lbnUvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRTRCO0FBQ1k7QUFFekIsU0FBU0UsS0FBSyxLQUFVO1FBQVYsRUFBQ0MsUUFBUSxFQUFDLEdBQVY7O0lBRXpCLE1BQU1DLFFBQVE7UUFDVjtZQUFDQyxJQUFHO1lBQUdDLEtBQUk7WUFBZ0JDLFFBQU87UUFBYTtRQUMvQztZQUFDRixJQUFHO1lBQUdDLEtBQUk7WUFBWUMsUUFBUTtRQUFTO1FBQ3hDO1lBQUNGLElBQUc7WUFBR0MsS0FBSTtZQUFhQyxRQUFPO1FBQVU7S0FDNUM7SUFDRCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0MsU0FBUztJQUNyQyxxQkFDSTs7MEJBQ0EsOERBQUNDO2dCQUFPQyxXQUFXWCwrREFBWTswQkFDM0IsNEVBQUNhO29CQUFJRixXQUFXWCx5RUFBc0I7O3NDQUNsQyw4REFBQ2U7NEJBQVFKLFdBQVdYLG9FQUFpQjtzQ0FDbEMsNEVBQUNELGtEQUFJQTtnQ0FBQ2tCLE1BQUs7Z0NBQWFOLFdBQVdYLDBFQUF1QjswQ0FBRTs7Ozs7Ozs7Ozs7c0NBRS9ELDhEQUFDbUI7NEJBQUdSLFdBQVdYLHFFQUFrQjtzQ0FDNUJHLE1BQU1rQixHQUFHLENBQUMsQ0FBQ0MscUJBQVMsOERBQUN2QixrREFBSUE7b0NBQUNZLFdBQVdYLDBFQUF1QjtvQ0FBQ2lCLE1BQU1LLEtBQUtqQixHQUFHOzt3Q0FBZ0I7d0NBQUVpQixLQUFLaEIsTUFBTTt3Q0FBQzs7bUNBQXZCZ0IsS0FBS2xCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlyR0Y7OztBQUdUO0dBdkJ3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudS9pbmRleC50c3g/MjU2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZXN0aWxvcyBmcm9tICcuL01lbnUubW9kdWxlLnNjc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoe2NoaWxkcmVufSkge1xuXG4gICAgY29uc3QgbGlua3MgPSBbXG4gICAgICAgIHtpZDoxLCB1cmw6Jy9vcmdhbml6YWNhbycsIHRpdHVsbzpcIk9yZ2FuaXphw6fDo29cIn0sXG4gICAgICAgIHtpZDoyLCB1cmw6XCIvZXZlbnRvc1wiLCB0aXR1bG86IFwiRXZlbnRvc1wifSwgXG4gICAgICAgIHtpZDozLCB1cmw6XCIvaGlzdG9yaWFcIiwgdGl0dWxvOlwiSGlzdMOzcmlhXCJ9ICAgIFxuICAgIF1cbiAgICBjb25zdCBbbG9nYWRvLCBzZXRMb2dhZG9dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtlc3RpbG9zLm1lbnV9PlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2VzdGlsb3MubWVudV9uYXZlZ2FjYW99PlxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17ZXN0aWxvcy5tZW51X2xvZ299PlxuICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wcmluY2lwYWwnIGNsYXNzTmFtZT17ZXN0aWxvcy5tZW51X2xvZ29fdGV4dG99PlBvcnRhczwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17ZXN0aWxvcy5tZW51X2xpc3RhfT5cbiAgICAgICAgICAgICAgICAgICAge2xpbmtzLm1hcCgobGluaykgPT4gPExpbmsgY2xhc3NOYW1lPXtlc3RpbG9zLm1lbnVfbGlzdGFfbGlua31ocmVmPXtsaW5rLnVybH0ga2V5PXtsaW5rLmlkfT4ge2xpbmsudGl0dWxvfSA8L0xpbms+KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJlc3RpbG9zIiwiTWVudSIsImNoaWxkcmVuIiwibGlua3MiLCJpZCIsInVybCIsInRpdHVsbyIsImxvZ2FkbyIsInNldExvZ2FkbyIsInVzZVN0YXRlIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwibWVudSIsIm5hdiIsIm1lbnVfbmF2ZWdhY2FvIiwiYXJ0aWNsZSIsIm1lbnVfbG9nbyIsImhyZWYiLCJtZW51X2xvZ29fdGV4dG8iLCJ1bCIsIm1lbnVfbGlzdGEiLCJtYXAiLCJsaW5rIiwibWVudV9saXN0YV9saW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Menu/index.tsx\n"));

/***/ })

});