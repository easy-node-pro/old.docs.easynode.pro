import { useConfig } from 'nextra-theme-docs'
import { useRouter } from "next/router";

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  chat: {
    link: 'https://discord.gg/Rcz5T6D9CV' // Next.js discord server,
  },
  darkMode: true,
  docsRepositoryBase:
    'https://github.com/easy-node-pro/guides.easynode.pro',
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  faviconGlyph: '⚡',
  footer: {
    text: (
      <>
        <div className="flex w-full flex-col items-center sm:items-start">
          <div>
            ⚡{" "}
            <a href="https://EasyNode.PRO" target="_blank" rel="noreferrer">
              EasyNode.PRO
            </a>{" "}
            ⚡ Blockchain Guides - ©{new Date().getFullYear()}
          </div>
        </div>
      </>
    ),
  },
  head: (
    <>
      <meta name="description" content="EasyNode.PRO ⚡ Blockchain Guides" />
      <meta
        name="og:description"
        content="Our documents site. We help everyone crypto like a pro!"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://guides.easynode.pro/twitter_card_800x418.jpg"
      />
      <meta name="twitter:site:domain" content="guides.easynode.pro" />
      <meta name="twitter:url" content="https://guides.easynode.pro" />
      <meta name="og:title" content="EasyNode.PRO ⚡ Blockchain Guides" />
      <meta
        name="og:image"
        content="https://guides.easynode.pro/twitter_card_800x418.jpg"
      />
      <meta
        name="apple-mobile-web-app-title"
        content="EasyNode.PRO ⚡ Blockchain Guides"
      />
    </>
  ),
  logo: (
    <span className="mr-2 hidden font-extrabold md:inline">
      EasyNode.PRO ⚡ Blockchain Guides
    </span>
  ),
  navigation: {
    next: true,
    prev: true,
  },
  primaryHue: 121,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent({ title }) {
      return <>{title}</>;
    },
  },
  useNextSeoProps() {
    const { frontMatter } = useConfig()
    const { route } = useRouter()
    if (route !== "/") {
      return {
        titleTemplate: "%s - ⚡ Guides.EasyNode.PRO ⚡",
      };
    }
    return {
      additionalLinkTags: [
        {
          href: '/192x192_App_Icon.png',
          rel: 'apple-touch-icon',
          sizes: '192x192'
        },
        {
          href: '/192x192_App_Icon.png',
          rel: 'icon',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          href: '/favicon-96x96.png',
          rel: 'icon',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          href: '/favicon-32x32.png',
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          href: '/favicon-16x16.png',
          rel: 'icon',
          sizes: '16x16',
          type: 'image/png'
        }
      ],
      additionalMetaTags: [
        { content: 'en', httpEquiv: 'Content-Language' },
        { content: 'Guides.EasyNode.PRO', name: 'apple-mobile-web-app-title' },
        { content: '#fff', name: 'msapplication-TileColor' },
        { content: '/192x192_App_Icon.png', name: 'msapplication-TileImage' }
      ],
      description:
        frontMatter.description || '⚡ Guides.EasyNode.PRO ⚡',
      openGraph: {
        images: [
          { url: frontMatter.image || 'https://guides.easynode.pro/twitter_card_800x418.jpg' }
        ]
      },
      titleTemplate: "%s - ⚡ Guides.EasyNode.PRO ⚡",
      twitter: {
        cardType: 'summary_large_image',
        site: 'https://guides.easynode.pro'
      }
    }
  },
}