import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import BodyClassName from "react-body-classname"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Hero from "../components/Hero"

class PageTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title

    const heroConfig = {
      parallax: true,
      arrow: true,
      gridSize: "grid-lg",
      classes: post.frontmatter.hero_classes,
      textAlign: "center",
    }

    const heroContent = `
      <h1>${post.frontmatter.title}</h1>
      `

    return (
      <BodyClassName className="header-fixed header-animated">
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title={post.frontmatter.title}
            description={post.excerpt}
          />
          {post.frontmatter.hero_image ? (
            <Hero
              config={heroConfig}
              content={heroContent}
              social={false}
              image={post.frontmatter.hero_image.childImageSharp.fluid.src}
            />
          ) : (
            ""
          )}
          <section id="start">
            <section id="body-wrapper" className="section blog-listing">
              <section className="container grid-lg">
                <div className="columns">
                  <div id="item" className="column col-12 extra-spacing">
                    <div className="content-item h-entry">
                      {!post.frontmatter.hero_image ? (
                        <div className="content-title text-center">
                          <h2 className="p-name mt-1">
                            {post.frontmatter.title}
                          </h2>
                          {post.frontmatter.subtitle ? (
                            <h3>{post.frontmatter.subtitle}</h3>
                          ) : (
                            ""
                          )}
                          <span class="blog-date">
                            <time
                              class="dt-published"
                              datetime={post.frontmatter.date}
                            >
                              <i class="fa fa-calendar"></i>{" "}
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
              </section>
            </section>
          </section>
        </Layout>
      </BodyClassName>
    )
  }
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
