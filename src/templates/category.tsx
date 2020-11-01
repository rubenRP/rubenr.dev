import React from "react"
import { graphql } from "gatsby"
import BodyClassName from "react-body-classname"

import { PageData } from "models/page"
import PostList from "../components/PostList"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const CategoryList: React.FC<PageData> = ({
  data = null,
  pageContext = null,
  location = null,
}) => {
  const { category } = pageContext
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  const heroTitle = `Category: ${category}`

  return (
    <BodyClassName className="header-dark header-transparent header-fixed header-animated">
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts by category" />

        <PostList
          heroTitle={heroTitle}
          heroImage={data.fileName.childImageSharp.fluid.src}
          posts={posts}
          pageContext={pageContext}
        />
      </Layout>
    </BodyClassName>
  )
}

export const categoryQuery = graphql`
  query categoryQuery($category: String) {
    fileName: file(
      absolutePath: { regex: "/anas-alshanti-feXpdV001o4-unsplash.jpg/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        parent: { id: {} }
        fileAbsolutePath: { regex: "\\\\/blog/" }
        frontmatter: { taxonomy: { category: { in: [$category] } } }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 140)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            taxonomy {
              tag
            }
            published
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 600) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

export default CategoryList
