import React from "react"
import propTypes from "prop-types"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import BodyClassName from "react-body-classname"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Hero from "../components/Hero"

const PageTemplate = ({ data, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title

  return (
    <BodyClassName className="header-fixed header-animated">
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
            image={post.frontmatter.hero_image.childImageSharp.fluid.src}
            classes={
              post.frontmatter.hero_classes
                ? post.frontmatter.hero_classes
                : undefined
            }
          />
        ) : (
          ""
        )}
        <section id="start" />
        <section id="body-wrapper" className="section blog-listing">
          <div className="container grid-md">
            <div className="columns">
              <div id="item" className="column col-12">
                <div className="content-item h-entry">
                  {!post.frontmatter.hero_image ? (
                    <div className="content-title text-center">
                      <h2 className="p-name mt-1">{post.frontmatter.title}</h2>
                      {post.frontmatter.subtitle ? (
                        <h3>{post.frontmatter.subtitle}</h3>
                      ) : (
                        ""
                      )}
                      <span className="blog-date">
                        <time
                          className="dt-published"
                          dateTime={post.frontmatter.date}
                        >
                          <i className="fa fa-calendar" />{" "}
                          {post.frontmatter.date}
                        </time>
                      </span>
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
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
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
            fluid(maxWidth: 1400) {
              src
            }
          }
        }
        hero_classes
      }
    }
  }
`

PageTemplate.defaultProps = {
  data: {
    mdx: null,
    site: null,
  },
  location: null,
}

PageTemplate.propTypes = {
  data: propTypes.shape({
    mdx: propTypes.any,
    site: propTypes.any,
  }),
  // eslint-disable-next-line react/forbid-prop-types
  location: propTypes.any,
}
