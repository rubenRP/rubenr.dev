import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import BodyClassName from "react-body-classname"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import Hero from "../components/Hero"

export default class BlogList extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1 ? "/blog" : `/blog/page:${currentPage - 1}`
    const nextPage = `/blog/page:${currentPage + 1}`
    const heroConfig = {
      parallax: true,
      arrow: true,
      gridSize: "grid-lg",
      classes: "text-light title-h1h2 hero-tiny overlay-dark-gradient",
      textAlign: "center",
    }
    const content = `<h1>Blog - Dev Blog - Tech Blog</h1>
    <p><br>Articles and opinions of a frontend developer. Mostly in spanish.</p>`

    return (
      <BodyClassName className="header-fixed header-animated">
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="Blog" />

          <Hero
            config={heroConfig}
            content={content}
            image={data.fileName.childImageSharp.fluid.src}
          />

          <section id="start"></section>
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
                                ></Link>
                              </div>
                            ) : (
                              ""
                            )}
                            <div className="card-header">
                              <div className="card-subtitle text-gray">
                                <span className="blog-date">
                                  <i className="fa fa-calendar"></i>{" "}
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
                                dangerouslySetInnerHTML={{
                                  __html:
                                    node.frontmatter.description ||
                                    node.excerpt,
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
                  <div id="listing-footer">
                    <div className="pagination">
                      <div className="btn-group">
                        <li>
                          {!isFirst && (
                            <Link to={prevPage} rel="prev" className="btn">
                              «
                            </Link>
                          )}
                        </li>
                        {Array.from({ length: numPages }, (_, i) => (
                          <li key={`pagination-number${i + 1}`}>
                            <Link
                              to={`/${
                                i === 0
                                  ? "/blog"
                                  : "/blog/page:" + (i + 1).toString()
                              }`}
                              className={`btn ${
                                currentPage === i + 1 ? "active" : ""
                              }`}
                            >
                              {i + 1}
                            </Link>
                          </li>
                        ))}
                        {!isLast && (
                          <li>
                            <Link to={nextPage} rel="next" className="btn">
                              »
                            </Link>
                          </li>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </Layout>
      </BodyClassName>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
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
      filter: { parent: { id: {} }, fileAbsolutePath: { regex: "\\\\/blog/" } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            taxonomy {
              tag
            }
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
