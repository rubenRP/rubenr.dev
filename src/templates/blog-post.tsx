import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import BodyClassName from "react-body-classname"

import { PageData } from "models/page"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Hero from "../components/Hero"
import Share from "../components/Share"
import Tags from "../components/Tags"
import ReadingTime from "../components/ReadingTime"

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
          lang={pageContext.language}
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
                    <div className="content-title">
                      {post.frontmatter.hero_subtitle ? (
                        <div>
                          <h1 className="p-name h2 mt-1">
                            {post.frontmatter.hero_title}
                          </h1>
                          <div className="text-grey">
                            <h2 className="p-name h3 mt-1 light">
                              {post.frontmatter.hero_subtitle}
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

                  <div className="content-tags">
                    <span className="blog-date">
                      <i className="fa fa-calendar" /> {post.frontmatter.date}
                      <ReadingTime
                        text={post.fields.readingTime.text}
                        minutes={post.fields.readingTime.minutes}
                      />
                    </span>

                    <span>
                      {post.frontmatter.taxonomy ? <Tags items={tags} /> : ""}
                    </span>
                  </div>

                  <div className="e-content">
                    <MDXRenderer>{post.body}</MDXRenderer>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="container grid-md">
            <div className="prev-next text-center">
              <div className="btn-group">
                {previous && (
                  <Link
                    to={`/blog${previous.fields.slug}`}
                    rel="prev"
                    className="btn btn-lg btn-detailed btn-detailed--left text-dark"
                  >
                    <div className="text-grey light">Previous</div>
                    {previous.frontmatter.hero_title
                      ? previous.frontmatter.hero_title
                      : `${previous.frontmatter.title.slice(0, 30)}...`}
                  </Link>
                )}

                {next && (
                  <Link
                    to={`/blog${next.fields.slug}`}
                    rel="next"
                    className="btn btn-lg btn-detailed btn-detailed--right text-dark"
                  >
                    <div className="text-grey light">Next</div>
                    {next.frontmatter.hero_title
                      ? next.frontmatter.hero_title
                      : `${next.frontmatter.title.slice(0, 30)}...`}
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
        readingTime {
          text
          minutes
        }
      }
    }
  }
`
