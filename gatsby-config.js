module.exports = {
  siteMetadata: {
    title: `Manley Web Dev`,
    description: `Hi, my name is Andrew, and I'm a web developer!`,
    author: `Andrew Manley`,
    icon: `./public/favicon_io-1/favicon-32x32.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-171534604-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/blog/markdown-pages`,
        name: "blog-posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/project-files/markdown-pages`,
        name: "projects",
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "images",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },

    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-netlify",
  ],
};
