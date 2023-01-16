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
  projectName: "website", // Usually your repo name.
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
    // announcementBar: {
    //   content: `Check out my <a href="/blog/python-classes">new blog</a>!`,
    // },
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
          href: '/discord',
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
      links: [
        {
          title: "Development",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/b9GPHgJ6TK"
            },
            {
              label: 'Services',
              to: '/services'
            },
            {
              label: 'Reviews',
              to: '/reviews'
            },
            {
              label: 'Showcase',
              to: '/category/showcase'
            }
          ]
        },
      {
        title: "Other",
        items: [
          {
            label: "Community Forum",
            href: 'https://community.nziie.is-a.dev'
          },
          {
            label: "Terms of Use",
            to: "/terms"
          },
          {
            label: "Blog",
            to: "/blog"
          },
          {
            label: "FAQ",
            to: "/faq"
          },
        ]
      },
      ]
    },
    prism: {
      defaultLanguage: "python",
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
