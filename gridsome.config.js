// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Azizbek Jonibekov",
  templates: {
    ContentfulBlog: "/blog/:slug",
  },
  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: process.env.CTF_SPACE_ID, // required
        accessToken: process.env.CTF_ACCESS_TOKEN, // required
        host: "cdn.contentful.com",
        environment: "master",
        typeName: "Contentful",
      },
    },
    {
      use: "gridsome-plugin-windicss",
    },
    // {
    //   use: "gridsome-plugin-tailwindcss",
    // },
  ],
};
