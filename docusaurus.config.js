// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Brain",
  tagline: "Daim's Second Brain",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Daim-Nickel-Penny",
  projectName: "brain",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Daim-Nickel-Penny/brain",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/Daim-Nickel-Penny/brain",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Brain",
        logo: {
          alt: "Brain Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/Daim-Nickel-Penny/brain",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/i_am_daim",
              },
              {
                label: "Github",
                href: "https://github.com/Daim-Nickel-Penny/",
              },
              {
                label: "Dev.to",
                href: "https://dev.to/i_am_daim",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Edit on GitHub",
                href: "https://github.com/Daim-Nickel-Penny/brain",
              },
            ],
          },
        ],
        copyright: `Daim's Second Brain Data: Fetched - ${new Date().toDateString()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        { name: "keywords", content: "second brain,docs" },
        {
          name: "description",
          content:
            "My Second Brain is a place where you can keep track of your thoughts, ideas, and notes.",
        },
        { name: "author", content: "daim" },
      ],
    }),
};

module.exports = config;
