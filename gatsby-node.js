const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const defaultPage = path.resolve(`./src/templates/page.tsx`)
  const tabPage = path.resolve(`./src/templates/tag.tsx`)
  const categoryPage = path.resolve(`./src/templates/category.tsx`)

  const result = await graphql(
    `
      {
        blogGroup: allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: {
            fileAbsolutePath: { regex: "\\\\/blog/" }
            frontmatter: { published: { ne: false } }
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
        pagesGroup: allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: {
            fileAbsolutePath: { regex: "\\\\/pages/" }
            frontmatter: { published: { ne: false } }
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
  const allPosts = result.data.blogGroup.edges

  const esPosts = allPosts.filter(({ node }) =>
    node.frontmatter.language ? node.frontmatter.language == "es" : true
  )

  const enPosts = allPosts.filter(({ node }) =>
    node.frontmatter.language ? node.frontmatter.language == "en" : false
  )

  esPosts.forEach((post, index) => {
    const previous =
      index === esPosts.length - 1 ? null : esPosts[index + 1].node
    const next = index === 0 ? null : esPosts[index - 1].node
    const pathUrl = post.node.frontmatter.slug || post.node.fields.slug
    const language = post.node.frontmatter.language || "es"
    const enPost = enPosts.find(
      ({ node }) => node.fields.slug === post.node.fields.slug
    )
    const hrefLang = enPost
      ? { lang: "en", url: enPost.node.frontmatter.slug }
      : null
    createPage({
      path: pathUrl,
      component: blogPost,
      context: {
        id: post.node.id,
        previous,
        next,
        language,
        hrefLang,
      },
    })
  })

  enPosts.forEach((post, index) => {
    const previous =
      index === enPosts.length - 1 ? null : enPosts[index + 1].node
    const next = index === 0 ? null : enPosts[index - 1].node
    const pathUrl = post.node.frontmatter.slug
      ? post.node.frontmatter.slug
      : `/en${post.node.fields.slug}`
    const language = post.node.frontmatter.language || "en"
    const esPost = esPosts.find(
      ({ node }) => node.fields.slug === post.node.fields.slug
    )
    const hrefLang = esPost
      ? { lang: "es", url: esPost.node.fields.slug }
      : null

    createPage({
      path: pathUrl,
      component: blogPost,
      context: {
        id: post.node.id,
        previous,
        next,
        language,
        hrefLang,
      },
    })
  })

  const pages = result.data.pagesGroup.edges

  pages.forEach((post) => {
    const pathUrl = post.node.frontmatter.slug || post.node.fields.slug
    const language = post.node.frontmatter.language || "en"
    createPage({
      path: pathUrl,
      component: defaultPage,
      context: {
        id: post.node.id,
        language: language,
      },
    })
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
      const newVal = `${value.replace(
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
