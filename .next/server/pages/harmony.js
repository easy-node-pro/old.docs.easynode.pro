"use strict";
(() => {
var exports = {};
exports.id = 767;
exports.ids = [767];
exports.modules = {

/***/ 9993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/harmony_logo_white.97c06712.png","height":121,"width":418,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAElBMVEXk5efx8fLq6uzF8vDV9Pje3+Jq8D2kAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGklEQVR4nGNgYWZkYGBiYGRgYWZkZWBgZQQAARYAHwqRL2MAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ 9597:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stars": () => (/* binding */ Stars),
/* harmony export */   "default": () => (/* reexport safe */ nextra_layout__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nextra_setup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4261);
/* harmony import */ var nextra_theme_docs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7065);
/* harmony import */ var _home_serviceuser_git_guides_easynode_pro_examples_docs_src_theme_config_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2953);
/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5034);
/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nextra_theme_docs_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(587);
/* harmony import */ var nextra_theme_docs_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nextra_theme_docs_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nextra_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5053);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(787);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _home_serviceuser_git_guides_easynode_pro_examples_docs_public_harmony_logo_white_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9993);
/* harmony import */ var nextra_ssg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2208);
/* harmony import */ var nextra_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8229);
/* module decorator */ module = __webpack_require__.hmd(module);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nextra_setup_page__WEBPACK_IMPORTED_MODULE_1__, _home_serviceuser_git_guides_easynode_pro_examples_docs_src_theme_config_tsx__WEBPACK_IMPORTED_MODULE_2__, nextra_mdx__WEBPACK_IMPORTED_MODULE_5__, nextra_ssg__WEBPACK_IMPORTED_MODULE_8__, nextra_theme_docs__WEBPACK_IMPORTED_MODULE_9__, nextra_layout__WEBPACK_IMPORTED_MODULE_10__]);
([nextra_setup_page__WEBPACK_IMPORTED_MODULE_1__, _home_serviceuser_git_guides_easynode_pro_examples_docs_src_theme_config_tsx__WEBPACK_IMPORTED_MODULE_2__, nextra_mdx__WEBPACK_IMPORTED_MODULE_5__, nextra_ssg__WEBPACK_IMPORTED_MODULE_8__, nextra_theme_docs__WEBPACK_IMPORTED_MODULE_9__, nextra_layout__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






/*@jsxRuntime automatic @jsxImportSource react*/ // We add an `ssg` field to the page props,
// which will be provided to the Nextra `useSSG` hook.
// The page will be considered as stale and regenerated every 60 seconds.
// Get the data from SSG, and render it as a component.






const getStaticProps = ({ params  })=>{
    return fetch(`https://api.github.com/repos/easy-node-pro/guides`).then((res)=>res.json()).then((repo)=>({
            props: {
                // We add an `ssg` field to the page props,
                // which will be provided to the Nextra `useSSG` hook.
                ssg: {
                    stars: repo.stargazers_count
                }
            },
            // The page will be considered as stale and regenerated every 60 seconds.
            revalidate: 60
        }));
};
const Stars = ()=>{
    const _components = Object.assign({
        strong: "strong"
    }, (0,nextra_mdx__WEBPACK_IMPORTED_MODULE_5__.useMDXComponents)());
    // Get the data from SSG, and render it as a component.
    const { stars  } = (0,nextra_ssg__WEBPACK_IMPORTED_MODULE_8__.useSSG)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
        children: stars
    });
};
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        p: "p",
        h2: "h2",
        ul: "ul",
        li: "li",
        strong: "strong",
        a: "a",
        code: "code",
        br: "br"
    }, (0,nextra_mdx__WEBPACK_IMPORTED_MODULE_5__.useMDXComponents)(), props.components);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Harmony Validator Guides"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                    alt: "Harmony Logo",
                    placeholder: "blur",
                    src: _home_serviceuser_git_guides_easynode_pro_examples_docs_public_harmony_logo_white_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "what-is-a-harmony-validator",
                children: "What is a Harmony Validator?"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "You're probably already familiar at this point but Harmony Validators verify each block produced on chain with all of the current transactions. Beyond that there's two ways that people in the Harmony Ecosystem refer to a \"Harmony Validator\" item:"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "Validator Wallet"
                            }),
                            " - A wallet is simply upgraded to become a validator wallet. On the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                href: "https://staking.harmony.one",
                                children: "staking portal"
                            }),
                            " you see the validator wallet addresses that were registered at creation time."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "Validator Server Node"
                            }),
                            ' - The platform you use to create a wallet, create a validator, then later manage your "Harmony Validator Server Node" aka the computer running harmony using ',
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                href: "/harmony/companion/before#initial-wallet--funds",
                                children: "your wallet"
                            }),
                            " and your ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                href: "/harmony/companion/official/node#our-notes-on-bls-keys",
                                children: "bls keys"
                            }),
                            "."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "new-validator-guide",
                children: "New Validator Guide"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This section is our original Companion Guide that we created when we first set up our validators to help regular investors become validators."
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "In the ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "/harmony/companion",
                        children: "New Validators Companion"
                    }),
                    " section of this guide we focus on teaching prospective validators how to prepare, install/run the software, and what to do afterwards. While using our guide along side ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://docs.harmony.one/home/network/validators",
                        children: "the Official Harmony $ONE Validator guide"
                    }),
                    ". You'll want all of this knowledge to help you come election time as only you support yourself as a validator."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This site was created to help anyone become a Harmony Validator and also to help existing Harmony Validator's manage their nodes better and more securly. This guide contains the following main sections:"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                href: "/harmony/companion",
                                children: "New Validators"
                            }),
                            " will want to go through this guide to setup their first server. This will give you the base you need to succeed. Our guide matches up with the official guide to tell you page by page what info to look for."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                href: "/harmony/toolbox",
                                children: "Experienced Validators"
                            }),
                            " will want this guide for installing Harmony on a new server via the harmony-toolbox application."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                href: "/post",
                                children: "Post Install"
                            }),
                            " is where both guides converge to cover post installation, notes are added for items that can be run via the validator toolbox management menu and we also explain how to get the information manually or with a script."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "validator-toolbox-guide",
                children: "Validator Toolbox Guide"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "This section is our ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "/harmony/toolbox",
                        children: "Validator Toolbox"
                    }),
                    " Guide and has you covered to help you out with our Installer & Manage Menu application."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(nextra_theme_docs__WEBPACK_IMPORTED_MODULE_9__/* .Callout */ .UW, {
                type: "error",
                emoji: "️\uD83D\uDEAB",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                    children: "New Validators can take a look at our installer, but please, learn how to do it by hand first!"
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "the-easy-node-way",
                children: "The Easy Node Way"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: 'When using our guides or tips you can always assume the following things that aren\'t really specified in the Harmony Documents. We call this "The Easy Node Way" which helps with organization and security:'
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Setup a user account to run harmony"
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Don't use ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "root"
                            }),
                            " or ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "harmony"
                            }),
                            " as account names!!!"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "We suggest your username as something like ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "serviceharmony"
                            })
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Use a folder in your user home directory to store harmony"
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "We suggest /home/serviceharmony/harmony"
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "validator-support-communities",
                children: "Validator Support Communities"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "There is no setup help or support officially provided to validators by the blockchains you are your own help desk. It's always best to fully learn your system before going live on a blockchain. If you do get stuck you can always ask for help in:"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                href: "https://harmony.one/discord",
                                children: "Harmony's Official Discord Server"
                            }),
                            " is the best spot for all things Harmony first for fastest response."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                href: "https://t.me/PangaeaVolunteers",
                                children: "Harmony Official Mainnet Staking Telegram Channel"
                            }),
                            " is another great spot for Harmony questions."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                href: "https://discord.gg/Rcz5T6D9CV",
                                children: "EasyNode.PRO Discord"
                            }),
                            " - We do field questions in our Discord server but we may take our sweet time to respond. Other users may provide assistance if they're available so post in the proper channels!"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "subscribe-to-easy-node",
                children: "Subscribe to Easy Node"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Want to help us out for helping you out? Our subscriptons start as low as $3.75 a month!"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Have a lot of questions? Become an 'Easy Technical Supporter' and unlock a subscribers only priority support chat!"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Get more info here:",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.br, {}),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://mee6.gg/m/easynode",
                        children: "Easy Node Discord Subscriptions"
                    })
                ]
            })
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout  } = Object.assign({}, (0,nextra_mdx__WEBPACK_IMPORTED_MODULE_5__.useMDXComponents)(), props.components);
    return MDXLayout ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createMdxContent, {
            ...props
        })
    }) : _createMdxContent(props);
}

(0,nextra_setup_page__WEBPACK_IMPORTED_MODULE_1__.setupNextraPage)({
    Content: MDXContent,
    nextraLayout: nextra_theme_docs__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP,
    hot: module.hot,
    pageOpts: {
        "filePath": "src/pages/harmony/index.mdx",
        "route": "/harmony",
        "frontMatter": {},
        "pageMap": [
            {
                "kind": "MdxPage",
                "name": "404",
                "route": "/404"
            },
            {
                "kind": "MdxPage",
                "name": "500",
                "route": "/500"
            },
            {
                "kind": "Meta",
                "data": {
                    "404": "404",
                    "500": "500",
                    "-- Welcome --": {
                        "type": "separator",
                        "title": "Welcome"
                    },
                    "index": "Site Intro",
                    "-- Skills --": {
                        "type": "separator",
                        "title": "Skills"
                    },
                    "admin": "Server Admin Tools",
                    "power": "Power Users",
                    "-- Validators --": {
                        "type": "separator",
                        "title": "Validators"
                    },
                    "harmony": "Harmony Guides",
                    "findora": "Findora Guides",
                    "-- Developers --": {
                        "type": "separator",
                        "title": "Developers"
                    },
                    "api-docs": "API Guides",
                    "-- Space --": {
                        "type": "separator",
                        "title": ""
                    },
                    "-- Extras --": {
                        "type": "separator",
                        "title": "Extras"
                    },
                    "suggest": "Suggestions?",
                    "shoutout": "Shout Outs!",
                    "updates": "Updates Log",
                    "company": {
                        "title": "⚡ EasyNode.PRO ⚡",
                        "type": "menu",
                        "items": {
                            "easynode": {
                                "title": "Website",
                                "href": "https://easynode.pro",
                                "newWindow": true
                            },
                            "twitter": {
                                "title": "Twitter",
                                "href": "https://twitter.com/easynode",
                                "newWindow": true
                            },
                            "youtube": {
                                "title": "YouTube",
                                "href": "https://youtube.com/@easynode",
                                "newWindow": true
                            },
                            "blogs": {
                                "title": "Blogs",
                                "href": "https://blogs.easynode.pro",
                                "newWindow": true
                            },
                            "staking": {
                                "title": "Validators",
                                "href": "https://easynode.pro/ourvalidators",
                                "newWindow": true
                            }
                        }
                    },
                    "support": {
                        "title": "Support",
                        "type": "page"
                    },
                    "about": {
                        "title": "About",
                        "type": "page"
                    },
                    "contact": {
                        "title": "Links ↗",
                        "type": "page",
                        "href": "https://easynode.pro/links",
                        "newWindow": true
                    }
                }
            },
            {
                "kind": "MdxPage",
                "name": "about",
                "route": "/about"
            },
            {
                "kind": "MdxPage",
                "name": "admin",
                "route": "/admin"
            },
            {
                "kind": "MdxPage",
                "name": "api-docs",
                "route": "/api-docs"
            },
            {
                "kind": "Folder",
                "name": "findora",
                "route": "/findora",
                "children": [
                    {
                        "kind": "Meta",
                        "data": {
                            "index": "Start Here",
                            "new": "New Validators",
                            "toolbox": "Toolbox Install",
                            "post": "Post Installation",
                            "docs": "Toolbox Pro Tips",
                            "toolbox-web": "Toolbox Web UI",
                            "moving": "Moving Servers"
                        }
                    },
                    {
                        "kind": "MdxPage",
                        "name": "docs",
                        "route": "/findora/docs"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "index",
                        "route": "/findora"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "moving",
                        "route": "/findora/moving"
                    },
                    {
                        "kind": "Folder",
                        "name": "new",
                        "route": "/findora/new",
                        "children": [
                            {
                                "kind": "Meta",
                                "data": {
                                    "index": "Start Here",
                                    "script": "Script Install"
                                }
                            },
                            {
                                "kind": "MdxPage",
                                "name": "index",
                                "route": "/findora/new"
                            },
                            {
                                "kind": "MdxPage",
                                "name": "script",
                                "route": "/findora/new/script"
                            }
                        ]
                    },
                    {
                        "kind": "MdxPage",
                        "name": "post",
                        "route": "/findora/post"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "toolbox-web",
                        "route": "/findora/toolbox-web"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "toolbox",
                        "route": "/findora/toolbox"
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "harmony",
                "route": "/harmony",
                "children": [
                    {
                        "kind": "Meta",
                        "data": {
                            "index": "Start Here",
                            "companion": "New Validators",
                            "toolbox": "Validator Toolbox",
                            "post": "Post Installation",
                            "voting": "How to vote with hmy"
                        }
                    },
                    {
                        "kind": "Folder",
                        "name": "companion",
                        "route": "/harmony/companion",
                        "children": [
                            {
                                "kind": "Meta",
                                "data": {
                                    "index": "Start Here",
                                    "official": "Official Companion"
                                }
                            },
                            {
                                "kind": "MdxPage",
                                "name": "index",
                                "route": "/harmony/companion"
                            },
                            {
                                "kind": "Folder",
                                "name": "official",
                                "route": "/harmony/companion/official",
                                "children": [
                                    {
                                        "kind": "Meta",
                                        "data": {
                                            "index": "About",
                                            "setup": "Server Setup",
                                            "node": "Node Setup",
                                            "create": "Creating A Validator",
                                            "manage": "Managing A Validator",
                                            "post": "Post Installation"
                                        }
                                    },
                                    {
                                        "kind": "MdxPage",
                                        "name": "create",
                                        "route": "/harmony/companion/official/create"
                                    },
                                    {
                                        "kind": "MdxPage",
                                        "name": "index",
                                        "route": "/harmony/companion/official"
                                    },
                                    {
                                        "kind": "MdxPage",
                                        "name": "manage",
                                        "route": "/harmony/companion/official/manage"
                                    },
                                    {
                                        "kind": "MdxPage",
                                        "name": "node",
                                        "route": "/harmony/companion/official/node"
                                    },
                                    {
                                        "kind": "MdxPage",
                                        "name": "post",
                                        "route": "/harmony/companion/official/post"
                                    },
                                    {
                                        "kind": "Folder",
                                        "name": "setup",
                                        "route": "/harmony/companion/official/setup",
                                        "children": [
                                            {
                                                "kind": "Meta",
                                                "data": {
                                                    "index": "Hardware Requirements",
                                                    "cloud": "Cloud Guides",
                                                    "rasppi": "Raspberry Pi"
                                                }
                                            },
                                            {
                                                "kind": "MdxPage",
                                                "name": "cloud",
                                                "route": "/harmony/companion/official/setup/cloud"
                                            },
                                            {
                                                "kind": "MdxPage",
                                                "name": "index",
                                                "route": "/harmony/companion/official/setup"
                                            },
                                            {
                                                "kind": "MdxPage",
                                                "name": "rasppi",
                                                "route": "/harmony/companion/official/setup/rasppi"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "kind": "MdxPage",
                        "name": "index",
                        "route": "/harmony"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "post",
                        "route": "/harmony/post"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "toolbox",
                        "route": "/harmony/toolbox"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "voting",
                        "route": "/harmony/voting"
                    }
                ]
            },
            {
                "kind": "MdxPage",
                "name": "index",
                "route": "/"
            },
            {
                "kind": "MdxPage",
                "name": "power",
                "route": "/power"
            },
            {
                "kind": "MdxPage",
                "name": "shoutout",
                "route": "/shoutout"
            },
            {
                "kind": "MdxPage",
                "name": "suggest",
                "route": "/suggest"
            },
            {
                "kind": "MdxPage",
                "name": "support",
                "route": "/support"
            },
            {
                "kind": "MdxPage",
                "name": "updates",
                "route": "/updates"
            }
        ],
        "headings": [
            {
                "depth": 1,
                "value": "Harmony Validator Guides",
                "id": "harmony-validator-guides"
            },
            {
                "depth": 2,
                "value": "What is a Harmony Validator?",
                "id": "what-is-a-harmony-validator"
            },
            {
                "depth": 2,
                "value": "New Validator Guide",
                "id": "new-validator-guide"
            },
            {
                "depth": 2,
                "value": "Validator Toolbox Guide",
                "id": "validator-toolbox-guide"
            },
            {
                "depth": 2,
                "value": "The Easy Node Way",
                "id": "the-easy-node-way"
            },
            {
                "depth": 2,
                "value": "Validator Support Communities",
                "id": "validator-support-communities"
            },
            {
                "depth": 2,
                "value": "Subscribe to Easy Node",
                "id": "subscribe-to-easy-node"
            }
        ],
        "timestamp": 1675748058000,
        "flexsearch": {
            "codeblock": false
        },
        "title": "Harmony Validator Guides"
    },
    themeConfig: _home_serviceuser_git_guides_easynode_pro_examples_docs_src_theme_config_tsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    pageNextRoute: "/harmony",
    pageOptsChecksum: undefined,
    dynamicMetaModules:  true ? [] : 0
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

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

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

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

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9081:
/***/ ((module) => {

module.exports = import("nextra/components");;

/***/ }),

/***/ 6132:
/***/ ((module) => {

module.exports = import("nextra/hooks");;

/***/ }),

/***/ 1181:
/***/ ((module) => {

module.exports = import("nextra/icons");;

/***/ }),

/***/ 8229:
/***/ ((module) => {

module.exports = import("nextra/layout");;

/***/ }),

/***/ 5053:
/***/ ((module) => {

module.exports = import("nextra/mdx");;

/***/ }),

/***/ 4261:
/***/ ((module) => {

module.exports = import("nextra/setup-page");;

/***/ }),

/***/ 2208:
/***/ ((module) => {

module.exports = import("nextra/ssg");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [181,209,880,953], () => (__webpack_exec__(9597)));
module.exports = __webpack_exports__;

})();