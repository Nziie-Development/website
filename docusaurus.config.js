// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Nziie",
  tagline:
    "Imagine a cheap custom bot made to your liking",
  url: "https://nziie.is-a.dev/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,
  deploymentBranch:"main",
  organizationName: "Nzii3", // Usually your GitHub org/user name.
  projectName: "nzii3.github.io", // Usually your repo name.
  plugins: ["docusaurus-plugin-sass"],
  presets: [ 
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        theme: {
          customCss: require.resolve("./src/scss/main.scss"),
        },
      },
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
    },
    navbar: {
      title: "Nziie",
      hideOnScroll: true,
      items: [
        {
          href: 'https://discord.gg/b9GPHgJ6TK',
          position: 'right',
          label: 'Discord',
        },
        {
          href: '/services',
          position: 'right',
          label: 'Services',
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Nziie Development, All rights reserved.`,
    },
    prism: {
      defaultLanguage: "python",
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
