"use strict";
exports.id = 953;
exports.ids = [953];
exports.modules = {

/***/ 2953:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nextra_theme_docs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7065);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nextra_theme_docs__WEBPACK_IMPORTED_MODULE_2__]);
nextra_theme_docs__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



/* eslint sort-keys: error */ /**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    chat: {
        link: "https://discord.gg/Rcz5T6D9CV" // Next.js discord server,
    },
    darkMode: true,
    docsRepositoryBase: "https://github.com/easy-node-pro/guides.easynode.pro",
    editLink: {
        text: "Edit this page on GitHub →"
    },
    faviconGlyph: "⚡",
    footer: {
        text: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex w-full flex-col items-center sm:items-start",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        "⚡",
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://EasyNode.PRO",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "EasyNode.PRO"
                        }),
                        " ",
                        "⚡ Blockchain Guides - \xa9",
                        new Date().getFullYear()
                    ]
                })
            })
        })
    },
    head: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: "EasyNode.PRO ⚡ Blockchain Guides"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "og:description",
                content: "Our documents site. We help everyone crypto like a pro!"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:image",
                content: "https://guides.easynode.pro/twitter_card_800x418.jpg"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:site:domain",
                content: "guides.easynode.pro"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:url",
                content: "https://guides.easynode.pro"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "og:title",
                content: "EasyNode.PRO ⚡ Blockchain Guides"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "og:image",
                content: "https://guides.easynode.pro/twitter_card_800x418.jpg"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "apple-mobile-web-app-title",
                content: "EasyNode.PRO ⚡ Blockchain Guides"
            })
        ]
    }),
    logo: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "mr-2 hidden font-extrabold md:inline",
        children: "EasyNode.PRO ⚡ Blockchain Guides"
    }),
    navigation: {
        next: true,
        prev: true
    },
    primaryHue: 121,
    sidebar: {
        defaultMenuCollapseLevel: 1,
        titleComponent ({ title  }) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: title
            });
        }
    },
    useNextSeoProps () {
        const { frontMatter  } = (0,nextra_theme_docs__WEBPACK_IMPORTED_MODULE_2__/* .useConfig */ .ZR)();
        const { route  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
        if (route !== "/") {
            return {
                titleTemplate: "%s - ⚡ Guides.EasyNode.PRO ⚡"
            };
        }
        return {
            additionalLinkTags: [
                {
                    href: "/apple-icon-180x180.png",
                    rel: "apple-touch-icon",
                    sizes: "180x180"
                },
                {
                    href: "/android-icon-192x192.png",
                    rel: "icon",
                    sizes: "192x192",
                    type: "image/png"
                },
                {
                    href: "/favicon-96x96.png",
                    rel: "icon",
                    sizes: "96x96",
                    type: "image/png"
                },
                {
                    href: "/favicon-32x32.png",
                    rel: "icon",
                    sizes: "32x32",
                    type: "image/png"
                },
                {
                    href: "/favicon-16x16.png",
                    rel: "icon",
                    sizes: "16x16",
                    type: "image/png"
                }
            ],
            additionalMetaTags: [
                {
                    content: "en",
                    httpEquiv: "Content-Language"
                },
                {
                    content: "Nextra",
                    name: "apple-mobile-web-app-title"
                },
                {
                    content: "#fff",
                    name: "msapplication-TileColor"
                },
                {
                    content: "/ms-icon-144x144.png",
                    name: "msapplication-TileImage"
                }
            ],
            description: frontMatter.description || "Nextra: the Next.js site builder",
            openGraph: {
                images: [
                    {
                        url: frontMatter.image || "https://nextra.vercel.app/og.png"
                    }
                ]
            },
            titleTemplate: "%s – Nextra",
            twitter: {
                cardType: "summary_large_image",
                site: "https://nextra.vercel.app"
            }
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;