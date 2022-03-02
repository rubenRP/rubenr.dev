import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { PageData } from "models/page"
import React from "react"
import BodyClassName from "react-body-classname"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const PageTemplate = ({ data = null, location = null }: PageData) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title
  const bodyClasses = post.frontmatter.hero_image
    ? "header-dark header-transparent header-fixed header-animated"
    : "header-fixed header-animated"

  return (
    <BodyClassName className={bodyClasses}>
      <Layout location={location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        {post.frontmatter.hero_image ? (
          <Hero
            title={
              post.frontmatter.hero_title
                ? post.frontmatter.hero_title
                : post.frontmatter.title
            }
            subtitle={post.frontmatter.hero_subtitle}
            text={post.frontmatter.hero_text}
            social={false}
            image={
              post.frontmatter.hero_image.childImageSharp.gatsbyImageData.images
                .fallback.src
            }
            classes={
              post.frontmatter.hero_classes
                ? post.frontmatter.hero_classes
                : undefined
            }
            smallHeadings
          />
        ) : (
          ""
        )}
        <section id="start" />
        <section id="body-wrapper" className="section blog-listing">
          <div className="container grid-sm">
            <div className="columns">
              <div id="item" className="column col-12">
                <div className="content-item h-entry">
                  {!post.frontmatter.hero_image ? (
                    <div className="content-title">
                      {post.frontmatter.hero_text ? (
                        <div>
                          <h1 className="p-name h2 mt-1">
                            {post.frontmatter.hero_title}
                          </h1>
                          <div className="text-grey">
                            <h2 className="p-name h3 mt-1 light">
                              {post.frontmatter.hero_text}
                            </h2>
                          </div>
                        </div>
                      ) : (
                        <h2 className="p-name mt-1">
                          {post.frontmatter.title}
                        </h2>
                      )}
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="e-content">
                    <MDXRenderer>{post.body}</MDXRenderer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </BodyClassName>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageById($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_title
        hero_subtitle
        hero_text
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 1600)
          }
        }
        hero_classes
      }
    }
  }
`
