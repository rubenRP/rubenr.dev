import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import BodyClassName from "react-body-classname"

import { PageData } from "models/page"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Hero from "../components/Hero"
import Share from "../components/Share"
import Feedback from "../components/Feedback"

const BlogPostTemplate: React.FC<PageData> = ({
  data = null,
  pageContext = null,
  location = null,
}: PageData) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const tags = post.frontmatter.taxonomy ? post.frontmatter.taxonomy.tag : ""
  const thumbnail =
    post.frontmatter.thumbnail &&
    post.frontmatter.thumbnail.childImageSharp.fixed.src
  const bodyClasses = post.frontmatter.hero_image
    ? "header-dark header-transparent header-fixed header-animated"
    : "header-fixed header-animated"

  return (
    <BodyClassName className={bodyClasses}>
      <Layout location={location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          thumbnail={thumbnail}
          lang="es"
        />
        {post.frontmatter.hero_image ? (
          <Hero
            title={
              post.frontmatter.hero_title
                ? post.frontmatter.hero_title
                : post.frontmatter.title
            }
            subtitle={post.frontmatter.hero_subtitle}
            social={false}
            image={post.frontmatter.hero_image.childImageSharp.fluid.src}
            date={post.frontmatter.date}
            tags={tags}
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
          <div className="container grid-md">
            <div className="columns">
              <div id="item" className="column col-12">
                <div className="content-item h-entry">
                  {!post.frontmatter.hero_image ? (
                    <div className="content-title text-center">
                      <h2 className="p-name mt-1">{post.frontmatter.title}</h2>
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
          <Feedback />
          <section className="container grid-lg">
            <div className="prev-next text-center">
              <div className="btn-group">
                {previous && (
                  <Link
                    to={`/blog${previous.fields.slug}`}
                    rel="prev"
                    className="btn"
                  >
                    <i className="fa fa-angle-left" />{" "}
                    {previous.frontmatter.title.length > 30
                      ? `${previous.frontmatter.title.slice(0, 30)}...`
                      : previous.frontmatter.title}
                  </Link>
                )}

                {next && (
                  <Link
                    to={`/blog${next.fields.slug}`}
                    rel="next"
                    className="btn"
                  >
                    {next.frontmatter.title.length > 30
                      ? `${next.frontmatter.title.slice(0, 30)}...`
                      : next.frontmatter.title}{" "}
                    <i className="fa fa-angle-right" />
                  </Link>
                )}
              </div>
            </div>
          </section>
        </section>
        <Share
          url={`${data.site.siteMetadata.siteUrl}/blog${post.fields.slug}`}
          title={`${post.frontmatter.title}`}
        />
      </Layout>
    </BodyClassName>
  )
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
            fluid(maxWidth: 1600) {
              src
            }
          }
        }
        thumbnail {
          childImageSharp {
            fixed(width: 600) {
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
