import React from "react"
import { graphql } from "gatsby"
import BodyClassName from "react-body-classname"

import { PageData } from "models/page"
import PostList from "../components/PostList"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const BlogList: React.FC<PageData> = ({
  data = null,
  pageContext = null,
  location = null,
}: PageData) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  const heroTitle = "Blog - Dev Blog - Tech Blog"
  const heroText =
    "Articles and opinions of a frontend developer. Mostly in spanish."

  return (
    <BodyClassName className="header-dark header-transparent header-fixed header-animated">
      <Layout location={location} title={siteTitle}>
        <SEO title="Blog" />

        <PostList
          heroTitle={heroTitle}
          heroText={heroText}
          heroImage={data.fileName.childImageSharp.fluid.src}
          posts={posts}
          pageContext={pageContext}
        />
      </Layout>
    </BodyClassName>
  )
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
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
      filter: { parent: { id: {} }, fileAbsolutePath: { regex: "\\\\/blog/" } }
      limit: $limit
      skip: $skip
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
            description
            taxonomy {
              tag
            }
            thumbnail {
              childImageSharp {
                fluid(maxHeight: 600) {
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

export default BlogList
