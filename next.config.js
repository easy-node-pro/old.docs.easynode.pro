const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

module.exports = withNextra(
  withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  })
);
