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
        path: `${__dirname}/src/cms/blog`,
        name: "blog",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/cms/projects`,
        name: "projects",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `site-icon`,
        short_name: `favicon`,
        start_url: `/`,
        icon: `static/images/favicon-32x32.png`,
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
