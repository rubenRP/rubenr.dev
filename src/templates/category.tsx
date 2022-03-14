import { graphql } from "gatsby"
import React from "react"
import BodyClassName from "react-body-classname"
import Layout from "../components/Layout"
import PostList from "../components/PostList"
import SEO from "../components/SEO"

const CategoryList = ({ data, pageContext }: any) => {
  const { category } = pageContext
  const posts = data.allMdx.edges
  const heroTitle = `Category: ${category}`

  return (
    <BodyClassName className="header-dark header-transparent header-fixed header-animated">
      <Layout>
        <SEO title="All posts by category" />
        <PostList
          heroTitle={heroTitle}
          heroImage={
            data.fileName.childImageSharp.gatsbyImageData.images.fallback.src
          }
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
        gatsbyImageData(width: 1600)
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        parent: { id: {} }
        fileAbsolutePath: { regex: "\\\\/blog/" }
        frontmatter: {
          taxonomy: { category: { in: [$category] } }
          published: { eq: true }
        }
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
            language
            published
            thumbnail {
              childImageSharp {
                gatsbyImageData(height: 600)
              }
            }
          }
        }
      }
    }
  }
`

export default CategoryList
