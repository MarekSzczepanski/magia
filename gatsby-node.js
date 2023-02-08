/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({graphql, actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

// query content for WordPress posts
const {
  data: {
    allWpPost: { nodes: allPosts },
  },
} = await graphql(`
  query {
    allWpPost {
      nodes {
        id
        uri
      }
    }
  }
`)

const postTemplate = path.resolve(`./src/templates/BlogPostTemplate.js`)

allPosts.forEach(post => {
  createPage({
    // will be the url for the page
    path: post.uri,
    // specify the component template of your choice
    component: slash(postTemplate),
    // In the ^template's GraphQL query, 'id' will be available
    // as a GraphQL variable to query for this post's data.
    context: {
      id: post.id,
    },
  })
})
}