module.exports = {
  title: "Actually Colab",
  tagline: "Real-time collaborative Jupyter notebooks",
  url: "https://docs.actuallycolab.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "actually-colab",
  projectName: "docs",
  themeConfig: {
    navbar: {
      title: "Actually Colab",
      logo: {
        alt: "Actually Colab Logo",
        src: "img/logo512.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/actually-colab/docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Actually Colab",
              href: "https://actuallycolab.org",
            },
            {
              label: "GitHub",
              href: "https://github.com/actually-colab",
            },
          ],
        },
        {
          title: "Creators",
          items: [
            {
              label: "Jeff",
              href: "https://jefftc.com/",
            },
            {
              label: "Bailey",
              href: "https://btin.io",
            },
          ],
        },
        {
          title: "Open Source Tools Used",
          items: [
            {
              label: "Docusaurus",
              href: "https://v2.docusaurus.io/",
            },
            {
              label: "Electron",
              href: "https://www.electronjs.org/",
            },
            {
              label: "Jupyter IPython Kernel",
              href: "https://ipython.org/",
            },
            {
              label: "Socket IO",
              href: "https://socket.io/",
            },
            {
              label: "Serverless Framework",
              href: "https://www.serverless.com/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Actually Colab.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        entryPoints: ["../editor/client/src/index.ts"],
        tsconfig: "../editor/client/tsconfig.json",
      },
    ],
  ],
};
