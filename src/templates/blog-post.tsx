import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import BodyClassName from "react-body-classname"
import Layout from "../components/Layout"
import Newsletter from "../components/Newsletter"
import ReadingTime from "../components/ReadingTime"
import SEO from "../components/SEO"
import Tags from "../components/Tags"
import { PageData } from "../models/page"

const BlogPostTemplate = ({ data, pageContext }: PageData) => {
  const post = data.mdx
  const { previous, next, hrefLang } = pageContext
  const tags = post.frontmatter.taxonomy && post.frontmatter.taxonomy.tag
  const thumbnail =
    post.frontmatter.thumbnail &&
    post.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images.fallback
      .src
  const bodyClasses = "header-fixed header-animated"

  return (
    <BodyClassName className={bodyClasses}>
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          thumbnail={thumbnail}
          lang={pageContext.language}
          hrefLang={hrefLang}
        />
        <section id="start" />
        <section id="body-wrapper" className="section blog-listing">
          <div className="container grid-md">
            <div className="columns">
              <div id="item" className="column col-12">
                <div className="content-item h-entry">
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
                      <h2 className="p-name mt-1">{post.frontmatter.title}</h2>
                    )}
                  </div>

                  <div className="content-tags">
                    <span className="blog-date">
                      <i className="fa fa-calendar" /> {post.frontmatter.date}
                      <ReadingTime minutes={post.timeToRead} />
                    </span>

                    <span className="blog-tags">
                      {post.frontmatter.taxonomy && <Tags items={tags} />}
                    </span>
                  </div>

                  <div className="e-content">
                    {post.frontmatter.hero_image && (
                      <div className="mb-2">
                        <img
                          className="mb-2"
                          alt={post.frontmatter.hero_title}
                          src={
                            post.frontmatter.hero_image.childImageSharp
                              .gatsbyImageData.images.fallback.src
                          }
                        />
                      </div>
                    )}
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
                    to={previous.frontmatter.slug || previous.fields.slug}
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
                    to={next.frontmatter.slug || next.fields.slug}
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
        <Newsletter />
      </Layout>
    </BodyClassName>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      timeToRead
      frontmatter {
        title
        hero_title
        hero_subtitle
        date(formatString: "MMMM DD, YYYY")
        slug
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 1600)
          }
        }
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 600)
          }
        }
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
