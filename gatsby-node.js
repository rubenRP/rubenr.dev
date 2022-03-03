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
          filter: {
            frontmatter: { published: { ne: false }, language: { ne: "en" } }
          }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              fileAbsolutePath
              frontmatter {
                title
                slug
                language
              }
            }
          }
        }
        enPagesGroup: allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: {
            frontmatter: { published: { ne: false }, language: { eq: "en" } }
          }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              fileAbsolutePath
              frontmatter {
                title
                slug
                language
              }
            }
          }
        }
        tagsGroup: allMdx(limit: 500) {
          group(field: frontmatter___taxonomy___tag) {
            fieldValue
          }
        }
        categoriesGroup: allMdx(limit: 500) {
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
  const regex = "blog/"

  createPage({
    path: `/blog`,
    component: blogPage,
  })

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    const path = post.node.fileAbsolutePath
    const language = post.node.frontmatter.language
    let pathUrl = post.node.frontmatter.slug || post.node.fields.slug

    // Blog Posts
    if (path.match(regex)) {
      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          id: post.node.id,
          previous,
          next,
          language: language || "es",
        },
      })
      // Pages
    } else {
      createPage({
        path: pathUrl,
        component: defaultPage,
        context: {
          id: post.node.id,
          language: language || "en",
        },
      })
    }
    // return null
  })

  const enPosts = result.data.enPagesGroup.edges

  enPosts.forEach((post, index) => {
    const previous =
      index === enPosts.length - 1 ? null : enPosts[index + 1].node
    const next = index === 0 ? null : enPosts[index - 1].node
    const language = post.node.frontmatter.language
    const pathUrl = post.node.frontmatter.slug || post.node.fields.slug

    createPage({
      path: pathUrl,
      component: blogPost,
      context: {
        id: post.node.id,
        previous,
        next,
        language: language || "en",
      },
    })
    // return null
  })

  const tags = result.data.tagsGroup.group

  tags.forEach((tag) => {
    createPage({
      path: `/blog/tag:${tag.fieldValue.toLowerCase()}`,
      component: tabPage,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  const categories = result.data.categoriesGroup.group

  categories.forEach((category) => {
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
    if (node.frontmatter.language) {
      const newVal = `/${node.frontmatter.language}${value.replace(
        "index." + node.frontmatter.language + "/",
        ""
      )}`
      createNodeField({
        name: `slug`,
        node,
        value: newVal,
      })
    } else {
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  }
}
