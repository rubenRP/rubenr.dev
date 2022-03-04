import { graphql, Link, StaticQuery } from "gatsby"
import React from "react"

const popularQuery = graphql`
  query PopularQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        parent: { id: {} }
        fileAbsolutePath: { regex: "\\\\/blog/" }
        frontmatter: { popular: { eq: true } }
      }
      limit: 4
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            hero_title
            hero_subtitle
          }
        }
      }
    }
  }
`

const Popular = () => {
  return (
    <>
      <div id="popular" />
      <section className="section modular-popular">
        <div className="container grid-md">
          <div className="columns">
            <div className="column col-3 col-md-12 header-col">
              <h4>
                <span>Popular posts</span>
              </h4>
            </div>
            <div className="column col-9 col-md-12 main-col">
              <div className="columns item">
                <StaticQuery
                  query={popularQuery}
                  render={(data) => {
                    return data.allMdx.edges.map(({ node }) => {
                      const title = node.frontmatter.title || node.fields.slug
                      return (
                        <div className="column col-12" key={node.fields.slug}>
                          {node.frontmatter.hero_subtitle ? (
                            <Link
                              to={node.fields.slug}
                              className="u-url text-dark"
                            >
                              <h4 className="p-name mb-1">
                                {node.frontmatter.hero_title}
                              </h4>
                              <div className="text-grey">
                                <h5 className="p-name mt-1 light">
                                  {node.frontmatter.hero_subtitle}
                                </h5>
                              </div>
                            </Link>
                          ) : (
                            <h4 className="p-name mt-1">
                              <Link
                                to={node.fields.slug}
                                className="u-url text-dark"
                              >
                                {title}
                              </Link>
                            </h4>
                          )}
                          <div className="text-gray">
                            <small className="blog-date">
                              <i className="fa fa-calendar" />{" "}
                              {node.frontmatter.date}
                            </small>
                          </div>
                        </div>
                      )
                    })
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Popular
