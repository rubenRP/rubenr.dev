import React from "react"
import propTypes from "prop-types"
import { Link, graphql } from "gatsby"
import BodyClassName from "react-body-classname"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import Hero from "../components/Hero"

const TagList = ({ data, pageContext, location }) => {
  const { tag } = pageContext
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  const heroConfig = {
    parallax: true,
    arrow: true,
    gridSize: "grid-lg",
    classes: "text-light title-h1h2 hero-tiny overlay-dark-gradient",
    textAlign: "center",
  }
  const content = `<h1>Tag: ${tag}</h1>`

  return (
    <BodyClassName className="header-fixed header-animated">
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />

        <Hero
          config={heroConfig}
          content={content}
          image={data.fileName.childImageSharp.fluid.src}
        />

        <section id="start" />
        <section id="body-wrapper" className="section blog-listing">
          <section className="container grid-lg">
            <div className="columns">
              <div id="item" className="column col-12 extra-spacing">
                <div className="columns">
                  {posts.map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug
                    return (
                      <div className="column col-12" key={node.fields.slug}>
                        <div className="card">
                          {node.frontmatter.thumbnail ? (
                            <div className="card-image">
                              <Link
                                to={`blog${node.fields.slug}`}
                                style={{
                                  backgroundImage: `url(${node.frontmatter.thumbnail.childImageSharp.fluid.src})`,
                                }}
                              />
                            </div>
                          ) : (
                            ""
                          )}
                          <div className="card-header">
                            <div className="card-subtitle text-gray">
                              <span className="blog-date">
                                <i className="fa fa-calendar" />{" "}
                                {node.frontmatter.date}
                              </span>
                            </div>
                            <div className="card-title">
                              <h5 className="p-name mt-1">
                                <Link
                                  to={`blog${node.fields.slug}`}
                                  className="u-url"
                                >
                                  {title}
                                </Link>
                              </h5>
                            </div>
                          </div>
                          <div className="card-body">
                            <p
                              // eslint-disable-next-line react/no-danger
                              dangerouslySetInnerHTML={{
                                __html: node.excerpt,
                              }}
                            />
                          </div>
                          <div className="card-footer">
                            <span className="tags">
                              {node.frontmatter.taxonomy
                                ? node.frontmatter.taxonomy.tag.map(tag => {
                                    return (
                                      <Link
                                        to={`/blog/tag:${tag.toLowerCase()}`}
                                        key={tag}
                                        className="label label-rounded label-secondary p-category"
                                      >
                                        {tag}
                                      </Link>
                                    )
                                  })
                                : ""}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        </section>
      </Layout>
    </BodyClassName>
  )
}

export const tagsQuery = graphql`
  query tagsQuery($tag: String) {
    fileName: file(
      absolutePath: { regex: "/anas-alshanti-feXpdV001o4-unsplash.jpg/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1400) {
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
      filter: {
        parent: { id: {} }
        fileAbsolutePath: { regex: "\\\\/blog/" }
        frontmatter: { taxonomy: { tag: { in: [$tag] } } }
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            taxonomy {
              tag
            }
            published
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 600) {
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

export default TagList

TagList.defaultProps = {
  data: {
    fileName: null,

    site: null,
    allMdx: null,
  },
  location: null,
  pageContext: null,
}

TagList.propTypes = {
  data: propTypes.shape({
    fileName: propTypes.any,
    site: propTypes.any,
    allMdx: propTypes.any,
  }),
  pageContext: propTypes.shape({
    currentPage: propTypes.any,
    numPages: propTypes.any,
    tag: propTypes.any,
  }),
  // eslint-disable-next-line react/forbid-prop-types
  location: propTypes.any,
}