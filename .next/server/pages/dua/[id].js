"use strict";
(() => {
var exports = {};
exports.id = 87;
exports.ids = [87];
exports.modules = {

/***/ 4281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




const getStaticPaths = async ()=>{
    const res = await fetch("http://localhost:8000/dua/");
    const data = await res.json();
    // map data to an array of path objects with params (id)
    const paths = data.map((ninja)=>{
        return {
            params: {
                id: ninja.id.toString()
            }
        };
    });
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async (context)=>{
    const id = context.params.id;
    const res = await fetch("http://localhost:8000/dua/" + id);
    const data = await res.json();
    return {
        props: {
            duaList: data.dua,
            duaName: data.title
        }
    };
};
const DuaList = ({ duaList , duaName  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        px: 4,
        py: 12,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                "aria-label": "back_button",
                variant: "ghost",
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__.ArrowBackIcon, {}),
                size: "lg",
                onClick: ()=>router.push("/chapters")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                as: "h2",
                size: "lg",
                textAlign: "center",
                my: 8,
                children: duaName
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
                maxW: [
                    "xl"
                ],
                mx: "auto",
                spacing: 6,
                children: duaList.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
                        py: 4,
                        px: 4,
                        spacing: 4,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                bg: "blackAlpha.500",
                                py: 6,
                                px: 4,
                                borderRadius: 10,
                                dir: "rtl",
                                textStyle: "arabia",
                                children: item.arabic
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                children: item.transliteration
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                                borderWidth: 1,
                                borderColor: "blackAlpha.600"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                children: item.translation
                            })
                        ]
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DuaList);


/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4281));
module.exports = __webpack_exports__;

})();