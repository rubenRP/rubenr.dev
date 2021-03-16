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
              fields {
                slug
              }
              fileAbsolutePath
              frontmatter {
                title
                hero_title
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
              fields {
                slug
              }
              fileAbsolutePath
              frontmatter {
                title
                hero_title
                slug
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
  const regex = "blog/"

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
    const language = "es"

    let pathUrl = post.node.fields.slug

    if (path.match(regex)) {
      pathUrl = "blog" + pathUrl
      createPage({
        path: pathUrl,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
          language: language,
        },
      })
    } else {
      createPage({
        path: pathUrl,
        component: defaultPage,
        context: {
          slug: post.node.fields.slug,
          language: language,
        },
      })
    }
    // return null
  })

  const enPosts = result.data.enPagesGroup.edges

  enPosts.forEach((post, index) => {
    // eslint-disable-next-line no-shadow
    const language = "en"

    let pathUrl = post.node.frontmatter.slug
      ? post.node.frontmatter.slug
      : post.node.fields.slug

    pathUrl = "blog" + pathUrls
    pathUrl = pathUrl.replace("index.en/", "")
    pathUrl = "en/" + pathUrl

    createPage({
      path: pathUrl,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        language: language,
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
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
