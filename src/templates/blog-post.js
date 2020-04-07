import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Bio from "../components/Bio/Bio"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <section id="start">
          <section id="body-wrapper" className="section blog-listing">
            <section className="container grid-lg">
              <div className="columns">
                <div id="item" className="column col-12 extra-spacing">
                  <div className="content-item h-entry">
                    <div className="e-content">
                      <h1>{post.frontmatter.title}</h1>
                      {post.frontmatter.subtitle ? (
                        <h2>{post.frontmatter.subtitle}</h2>
                      ) : (
                        ""
                      )}
                      <p>{post.frontmatter.date}</p>
                      <MDXRenderer>{post.body}</MDXRenderer>
                    </div>
                  </div>
                  <div className="prev-next text-center">
                    <Bio />
                    <ul>
                      <li>
                        {previous && (
                          <Link to={`blog${previous.fields.slug}`} rel="prev">
                            ← {previous.frontmatter.title}
                          </Link>
                        )}
                      </li>
                      <li>
                        {next && (
                          <Link to={`blog${next.fields.slug}`} rel="next">
                            {next.frontmatter.title} →
                          </Link>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
      </Layout>
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
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
