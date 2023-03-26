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

/*exports.createPages = async ({graphql, actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })*/

  exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
      {
        allWpPost {
          nodes {
            id
            uri
            title
            content
            excerpt
            featuredImage {
              node {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      quality: 95
                      placeholder: BLURRED
                      width: 2000
                    )
                  }
                }
              }
            }
          } 
        }
      }
    `)
  
    if (result.errors) {
      reporter.error("There was an error fetching posts", result.errors)
    }
  
    const { allWpPost } = result.data
  
    // Define the template to use
    const template = require.resolve(`./src/templates/BlogPostTemplate.js`)
  
    if (allWpPost.nodes.length) {
      allWpPost.nodes.map(post => {
        actions.createPage({
          path: post.uri,
          component: template,
          context: post,
        })
      })
    }

    
  }

// query content for WordPress posts
/*const {
  data: {
    allWpPost: { nodes: allPosts },
  },
} = await graphql(`
  query {
    allWpPost {
      nodes {
        id
        uri
        title
        content
        excerpt
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 95
                  placeholder: BLURRED
                  width: 2000
                )
              }
            }
          }
        }
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
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      image: post.featuredImage.node.localFile.childImageSharp.gatsbyImageData,
      alt: post.featuredImage.node.altText
    },
  })
})
}*/

