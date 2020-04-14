import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import BodyClassName from "react-body-classname"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Hero from "../components/Hero"
import Share from "../components/Share"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const tags = post.frontmatter.taxonomy ? post.frontmatter.taxonomy.tag : ""

    const heroConfig = {
      parallax: true,
      arrow: true,
      gridSize: "grid-lg",
      classes:
        "hero-tiny text-light title-h1h2 parallax overlay-dark-gradient" ||
        post.frontmatter.hero_classes,
      textAlign: "center",
    }

    const heroContent = `${
      post.frontmatter.hero_subtitle
        ? `<h1>${post.frontmatter.hero_title}</h1><h2>${post.frontmatter.hero_subtitle}</h2>`
        : `<h1>${post.frontmatter.title}</h1>`
    }`

    return (
      <BodyClassName className="header-fixed header-animated">
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title={post.frontmatter.title} description={post.excerpt} />
          {post.frontmatter.hero_image ? (
            <Hero
              config={heroConfig}
              content={heroContent}
              social={false}
              image={post.frontmatter.hero_image.childImageSharp.fluid.src}
              date={post.frontmatter.date}
              tags={tags}
            />
          ) : (
            ""
          )}
          <section id="start"></section>
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

                  <div className="prev-next text-center">
                    <div className="btn-group">
                      {previous && (
                        <Link
                          to={`blog${previous.fields.slug}`}
                          rel="prev"
                          className="btn"
                        >
                          <i className="fa fa-angle-left"></i>{" "}
                          {previous.frontmatter.title}
                        </Link>
                      )}

                      {next && (
                        <Link
                          to={`blog${next.fields.slug}`}
                          rel="next"
                          className="btn"
                        >
                          {next.frontmatter.title}{" "}
                          <i className="fa fa-angle-right"></i>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <Share
            url={`blog${post.fields.slug}`}
            title={`${post.frontmatter.title} ${this.props.data.site.siteMetadata.siteUrl}/blog${post.fields.slug}`}
          />
        </Layout>
      </BodyClassName>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        hero_title
        hero_subtitle
        date(formatString: "MMMM DD, YYYY")
        hero_image {
          childImageSharp {
            fluid(maxWidth: 1400) {
              src
            }
          }
        }
        hero_classes
        taxonomy {
          tag
        }
      }
      fields {
        slug
      }
    }
  }
`
