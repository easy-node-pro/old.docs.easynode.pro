"use strict";
(() => {
var exports = {};
exports.id = 676;
exports.ids = [676];
exports.modules = {

/***/ 2089:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stars": () => (/* binding */ Stars),
/* harmony export */   "default": () => (/* reexport safe */ nextra_layout__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nextra_setup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4261);
/* harmony import */ var nextra_theme_docs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7065);
/* harmony import */ var _home_serviceuser_git_guides_easynode_pro_examples_docs_src_theme_config_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2953);
/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5034);
/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nextra_theme_docs_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(587);
/* harmony import */ var nextra_theme_docs_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nextra_theme_docs_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nextra_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5053);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(787);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nextra_ssg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2208);
/* harmony import */ var nextra_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8229);
/* module decorator */ module = __webpack_require__.hmd(module);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nextra_setup_page__WEBPACK_IMPORTED_MODULE_1__, _home_serviceuser_git_guides_easynode_pro_examples_docs_src_theme_config_tsx__WEBPACK_IMPORTED_MODULE_2__, nextra_mdx__WEBPACK_IMPORTED_MODULE_5__, nextra_ssg__WEBPACK_IMPORTED_MODULE_7__, nextra_theme_docs__WEBPACK_IMPORTED_MODULE_8__, nextra_layout__WEBPACK_IMPORTED_MODULE_9__]);
([nextra_setup_page__WEBPACK_IMPORTED_MODULE_1__, _home_serviceuser_git_guides_easynode_pro_examples_docs_src_theme_config_tsx__WEBPACK_IMPORTED_MODULE_2__, nextra_mdx__WEBPACK_IMPORTED_MODULE_5__, nextra_ssg__WEBPACK_IMPORTED_MODULE_7__, nextra_theme_docs__WEBPACK_IMPORTED_MODULE_8__, nextra_layout__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






/*@jsxRuntime automatic @jsxImportSource react*/ // We add an `ssg` field to the page props,
// which will be provided to the Nextra `useSSG` hook.
// The page will be considered as stale and regenerated every 60 seconds.
// Get the data from SSG, and render it as a component.





const getStaticProps = ({ params  })=>{
    return fetch(`https://api.github.com/repos/FindoraNetwork/findora-toolbox`).then((res)=>res.json()).then((repo)=>({
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
    const { stars  } = (0,nextra_ssg__WEBPACK_IMPORTED_MODULE_7__.useSSG)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
        children: stars
    });
};
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        p: "p",
        a: "a",
        h2: "h2",
        ul: "ul",
        li: "li",
        img: "img",
        h3: "h3",
        code: "code",
        pre: "pre",
        span: "span",
        blockquote: "blockquote"
    }, (0,nextra_mdx__WEBPACK_IMPORTED_MODULE_5__.useMDXComponents)(), props.components);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Findora Toolbox Setup"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "This guide is for installing the Validator Toolbox and then a Findora Validator Node onto a brand new validator server. After you finish this guide you'll use our ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "/findora/post",
                        children: "Post Install"
                    }),
                    " section to stake FRA and create your validator."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Here's a short video of us installing and using the toolbox!"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                width: "560",
                height: "315",
                src: "https://www.youtube.com/embed/AVGirvlA5ow",
                title: "YouTube video player",
                frameBorder: "0",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: true
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "existing-validators",
                children: "Existing Validators"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Toolbox will install on existing validators as well. Since you already have a user account and docker, you're good to skip ahead and run the ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "/findora/toolbox#run-installer",
                        children: "install string"
                    }),
                    " to setup the management menu. After that use the normal ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "/findora/toolbox#relaunch-toolbox",
                        children: "launch command"
                    }),
                    " to check for updates and run the menu each time."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "github-repository",
                children: "Github Repository"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "The Findora Validator Toolbox repository has ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Stars, {}),
                    " \uD83C\uDF1F on ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://github.com/FindoraNetwork/findora-toolbox",
                        children: "GitHub"
                    }),
                    ". If you enjoy our Validator Toolbox software can you head to our page and give us a \uD83C\uDF1F today? Thank you!"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "code-stats",
                children: "Code Stats"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://www.codacy.com/gh/FindoraNetwork/findora-toolbox/dashboard?utm_source=github.com&utm_medium=referral&utm_content=FindoraNetwork/findora-toolbox&utm_campaign=Badge_Grade",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.img, {
                                src: "https://app.codacy.com/project/badge/Grade/aa50cae790bd4319a9cca9c6500301f6",
                                alt: "Codacy Badge"
                            })
                        })
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://github.com/FindoraNetwork/findora-toolbox/actions/workflows/codacy.yml",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.img, {
                                src: "https://github.com/FindoraNetwork/findora-toolbox/actions/workflows/codacy.yml/badge.svg?branch=main",
                                alt: "Codacy Security Scan"
                            })
                        })
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://discord.gg/Rcz5T6D9CV",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.img, {
                                src: "https://img.shields.io/badge/chat-discord-purple?logo=discord",
                                alt: "Discord Badge"
                            })
                        })
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://bit.ly/easynodefra",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.img, {
                                src: "https://img.shields.io/badge/stake-findora-purple",
                                alt: "Stake Now Badge"
                            })
                        })
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "pre-install-tasks",
                children: "Pre-Install Tasks"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "server-selection",
                children: "Server Selection"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Grab a server. We suggest using a budget host with enough storage. Currently used providers (depending on location) are ovh.com / ovh.us, server4u, contabo. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://hetzner.cloud/?ref=uUlKM6mNXPli",
                        children: "Hetzner"
                    }),
                    " is no longer recommended for a host as crypto is against their policy but does work great for learning and testing a Findora server."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The Hardware Requirements:"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Recommended: 16GB RAM, 4 Core CPU, 300GB NVMe Hard Disk"
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "server-prep",
                children: "Server Prep"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "setup-a-user-account",
                children: "Setup A User Account"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "See our admin tools page on setting up a ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "/admin#user-account",
                        children: "user account"
                    }),
                    " & using ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "/admin#ssh-keys",
                        children: "ssh keys"
                    }),
                    " for passwordless secure login."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Once you're logged into your user account, you're ready to move on."
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "firewall-ports",
                children: "Firewall Ports"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "We covered setting up your firewall for ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "/findora/new#firewall",
                        children: "Findora right here"
                    }),
                    ". If you don't have a web firewall now is the time to configure UFW."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "docker-installation",
                children: "Docker Installation"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "At this point you need to ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "/admin#docker-installation",
                        children: "install docker using these instructions"
                    }),
                    " if you didn't already do so."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "run-installer",
                children: "Run Installer"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Once you've logged back in and your user is in the docker group, run the folloing code to install the toolbox and begin installation on either ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "mainnet"
                    }),
                    " or ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "testnet"
                    }),
                    ". Our menu will launch and ask you a few simple questions to get you fully loaded and online:"
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(nextra_theme_docs__WEBPACK_IMPORTED_MODULE_8__/* .Tabs */ .mQ, {
                items: [
                    "mainnet",
                    "testnet"
                ],
                defaultIndex: "0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(nextra_theme_docs__WEBPACK_IMPORTED_MODULE_8__/* .Tab */ .OK, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                            "data-language": "text",
                            "data-theme": "default",
                            hasCopyCode: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                "data-language": "text",
                                "data-theme": "default",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "line",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                        style: {
                                            color: "var(--shiki-color-text)"
                                        },
                                        children: "cd ~/ && sudo apt install python3-pip -y && git clone https://github.com/FindoraNetwork/findora-toolbox.git && cd findora-toolbox && pip3 install -r requirements.txt --quiet && cd ~/ && python3 ~/findora-toolbox/src/app.py --mainnet"
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(nextra_theme_docs__WEBPACK_IMPORTED_MODULE_8__/* .Tab */ .OK, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                            "data-language": "text",
                            "data-theme": "default",
                            hasCopyCode: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                "data-language": "text",
                                "data-theme": "default",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    className: "line",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                        style: {
                                            color: "var(--shiki-color-text)"
                                        },
                                        children: "cd ~/ && sudo apt install python3-pip -y && git clone https://github.com/FindoraNetwork/findora-toolbox.git && cd findora-toolbox && pip3 install -r requirements.txt --quiet && cd ~/ && python3 ~/findora-toolbox/src/app.py --testnet"
                                    })
                                })
                            })
                        })
                    })
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The installer will pull the installation script and get everything setup. At the end of the installer you'll have a fully working validator syncing up to the blockchain on a brand new tmp.gen.keypair and priv_validator_key.json file. These are usable as wallets but are also disposable still at this point. You can test out all the functions of a Findora server now as long as you don't run the staking and creation commands."
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "after-installation",
                children: "After Installation"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                        children: [
                            "At this point you'll have a system that begins syncing automatically on the blockchain after the database download and unpacking completes. Wait for your ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "sync_status"
                            }),
                            " to equal false before creating your validator or migrating to a new system."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "relaunch-toolbox",
                children: "Relaunch Toolbox"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "To re-start the toolbox with updates, run the following code:"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                hasCopyCode: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                        className: "line",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            style: {
                                color: "var(--shiki-color-text)"
                            },
                            children: "cd ~/findora-toolbox/ && git pull && pip3 install -r requirements.txt --quiet && cd ~/ && python3 ~/findora-toolbox/src/app.py"
                        })
                    })
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "post-installation",
                children: "Post Installation"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "If you're just installing your validator for the first time you still need to fund your wallet, stake your FRA, start your validator and backup your private key files. Head over to our ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "/findora/post",
                        children: "post install section"
                    }),
                    " for those commands!"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "toolbox-pro-tips",
                children: "Toolbox Pro Tips"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "If you're an experienced Validator you can find more info on what the toolbox is doing for you ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "/findora/docs",
                        children: "right here"
                    }),
                    "."
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
    nextraLayout: nextra_theme_docs__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,
    hot: module.hot,
    pageOpts: {
        "filePath": "src/pages/findora/toolbox.mdx",
        "route": "/findora/toolbox",
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
                "value": "Findora Toolbox Setup",
                "id": "findora-toolbox-setup"
            },
            {
                "depth": 2,
                "value": "Existing Validators",
                "id": "existing-validators"
            },
            {
                "depth": 2,
                "value": "Github Repository",
                "id": "github-repository"
            },
            {
                "depth": 2,
                "value": "Code Stats",
                "id": "code-stats"
            },
            {
                "depth": 2,
                "value": "Pre-Install Tasks",
                "id": "pre-install-tasks"
            },
            {
                "depth": 3,
                "value": "Server Selection",
                "id": "server-selection"
            },
            {
                "depth": 2,
                "value": "Server Prep",
                "id": "server-prep"
            },
            {
                "depth": 3,
                "value": "Setup A User Account",
                "id": "setup-a-user-account"
            },
            {
                "depth": 3,
                "value": "Firewall Ports",
                "id": "firewall-ports"
            },
            {
                "depth": 3,
                "value": "Docker Installation",
                "id": "docker-installation"
            },
            {
                "depth": 2,
                "value": "Run Installer",
                "id": "run-installer"
            },
            {
                "depth": 2,
                "value": "After Installation",
                "id": "after-installation"
            },
            {
                "depth": 2,
                "value": "Relaunch Toolbox",
                "id": "relaunch-toolbox"
            },
            {
                "depth": 2,
                "value": "Post Installation",
                "id": "post-installation"
            },
            {
                "depth": 2,
                "value": "Toolbox Pro Tips",
                "id": "toolbox-pro-tips"
            }
        ],
        "timestamp": 1675748058000,
        "flexsearch": {
            "codeblock": false
        },
        "title": "Findora Toolbox Setup"
    },
    themeConfig: _home_serviceuser_git_guides_easynode_pro_examples_docs_src_theme_config_tsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    pageNextRoute: "/findora/toolbox",
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [181,209,880,953], () => (__webpack_exec__(2089)));
module.exports = __webpack_exports__;

})();