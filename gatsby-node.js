const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const defaultPage = path.resolve(`./src/templates/page.tsx`)
  const blogPage = path.resolve(`./src/templates/blog-list.tsx`)
  const tabPage = path.resolve(`./src/templates/tag.tsx`)
  const categoryPage = path.resolve(`./src/templates/category.tsx`)

  const result = await graphql(
    `
      {
        pagesGroup: allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: { frontmatter: { published: { ne: false } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              fileAbsolutePath
              frontmatter {
                title
              }
            }
          }
        }
        tagsGroup: allMdx(limit: 2000) {
          group(field: frontmatter___taxonomy___tag) {
            fieldValue
          }
        }
        categoriesGroup: allMdx(limit: 2000) {
          group(field: frontmatter___taxonomy___category) {
            fieldValue
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(result.errors)
    return
  }

  // Create pages and blog posts.
  const posts = result.data.pagesGroup.edges
  const postsPerPage = 10
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/page:${i + 1}`,
      component: blogPage,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    // eslint-disable-next-line no-shadow
    const path = post.node.fileAbsolutePath
    const regex = "/blog/"

    if (path.match(regex)) {
      createPage({
        path: `blog${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    } else {
      createPage({
        path: `${post.node.fields.slug}`,
        component: defaultPage,
        context: {
          slug: post.node.fields.slug,
        },
      })
    }
    // return null
  })

  const tags = result.data.tagsGroup.group

  tags.forEach(tag => {
    createPage({
      path: `/blog/tag:${tag.fieldValue.toLowerCase()}`,
      component: tabPage,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  const categories = result.data.categoriesGroup.group

  categories.forEach(category => {
    createPage({
      path: `/blog/category:${category.fieldValue.toLowerCase()}`,
      component: categoryPage,
      context: {
        category: category.fieldValue,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
