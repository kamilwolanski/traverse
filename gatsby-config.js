module.exports = {
  siteMetadata: {
    title: `gamerhash`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png"
      }
    },
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          backgroundColor: `transparent`,
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    }
  ]
};
