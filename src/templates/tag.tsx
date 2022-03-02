import { graphql } from "gatsby"
import { PageData } from "models/page"
import React from "react"
import BodyClassName from "react-body-classname"
import Layout from "../components/Layout"
import PostList from "../components/PostList"
import SEO from "../components/SEO"

const TagList = ({
  data = null,
  pageContext = null,
  location = null,
}: PageData) => {
  const { tag } = pageContext
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  const heroTitle = `Tag: ${tag}`

  return (
    <BodyClassName className="header-dark header-transparent header-fixed header-animated">
      <Layout location={location} title={siteTitle}>
        <SEO title={`All posts by tag ${tag}`} />

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

export const tagsQuery = graphql`
  query tagsQuery($tag: String) {
    fileName: file(
      absolutePath: { regex: "/anas-alshanti-feXpdV001o4-unsplash.jpg/" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 1600)
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
        frontmatter: {
          taxonomy: { tag: { in: [$tag] } }
          language: { ne: "en" }
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

export default TagList
