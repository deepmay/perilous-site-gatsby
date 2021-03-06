const path = require('path')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const result = await graphql(`
        query {
            allWordpressPost {
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
        }
    `)

    result.data.allWordpressPost.edges.forEach(({node}) => {
        createPage({
            path: node.slug,
            component: path.resolve('./src/templates/post.js'),
            context: {
                slug: node.slug,
            },
        })
    })
}
