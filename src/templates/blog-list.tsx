import React from "react"
import { graphql } from "gatsby"
import BodyClassName from "react-body-classname"

import { PageData } from "models/page"
import PostList from "../components/PostList"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const BlogList: React.FC<PageData> = ({
  data = null,
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
          heroImage={
            data.fileName.childImageSharp.gatsbyImageData.images.fallback.src
          }
          posts={posts}
        />
      </Layout>
    </BodyClassName>
  )
}

export const blogListQuery = graphql`
  query blogListQuery {
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
      filter: { parent: { id: {} }, fileAbsolutePath: { regex: "\\\\/blog/" } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 140)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            hero_title
            hero_subtitle
            language
            taxonomy {
              tag
            }
          }
        }
      }
    }
  }
`

export default BlogList
