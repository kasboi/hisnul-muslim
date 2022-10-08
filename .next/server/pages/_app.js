"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./theme/theme.ts
var theme = __webpack_require__(3528);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Drawer.tsx



const Slides = ({ isOpen , onClose  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Drawer, {
        isOpen: isOpen,
        placement: "left",
        onClose: onClose,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerOverlay, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.DrawerContent, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerCloseButton, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerHeader, {
                        children: "Create your account"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerBody, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                            spacing: 4,
                            onClick: onClose,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            fontSize: "xl",
                                            children: "Home"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/chapters",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            fontSize: "xl",
                                            children: "Chapters"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "#",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            fontSize: "xl",
                                            children: "Contact"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.DrawerFooter, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                variant: "outline",
                                mr: 3,
                                onClick: onClose,
                                children: "Cancel"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                colorScheme: "blue",
                                children: "Save"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Drawer = (Slides);

;// CONCATENATED MODULE: ./components/Nav.tsx





const Navbar = ({ children  })=>{
    const { isOpen , onClose , onOpen  } = (0,react_.useDisclosure)();
    const btnRef = (0,external_react_.useRef)();
    const { colorMode , toggleColorMode  } = (0,react_.useColorMode)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                align: "center",
                px: 4,
                py: 2,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                        variant: "ghost",
                        "aria-label": "menu",
                        icon: colorMode === "light" ? /*#__PURE__*/ jsx_runtime_.jsx(icons_.MoonIcon, {}) : /*#__PURE__*/ jsx_runtime_.jsx(icons_.SunIcon, {}),
                        onClick: toggleColorMode
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                        "aria-label": "menu",
                        variant: "ghost",
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.HamburgerIcon, {}),
                        onClick: onOpen,
                        ref: btnRef
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {
                borderWidth: 1
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Drawer, {
                onClose: onClose,
                isOpen: isOpen
            }),
            children
        ]
    });
};
/* harmony default export */ const Nav = (Navbar);

;// CONCATENATED MODULE: ./pages/_app.tsx








function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        theme: theme/* default */.Z,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Nav, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
// 1. import `extendTheme` function

// 2. Add your color mode config
const config = {
    initialColorMode: "light",
    useSystemColorMode: false
};
// 3. extend the theme
const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
    fonts: {
        heading: `'Open Sans', sans-serif`,
        body: `'Quicksand', sans-serif`
    },
    textStyles: {
        arabia: {
            fontFamily: `"Noto Naskh Arabic", serif`,
            // you can also use responsive styles
            fontSize: [
                "22px",
                "28px"
            ],
            fontWeight: "400",
            lineHeight: "175%",
            letterSpacing: "2%"
        }
    },
    config: {
        initialColorMode: "light",
        useSystemColorMode: false
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664], () => (__webpack_exec__(5111)));
module.exports = __webpack_exports__;

})();