import React from "react"
import { Link } from "gatsby"
import Hero from "../Hero"
import Tags from "../Tags"

const PostList: React.FC<any> = ({
  posts = null,
  heroImage = null,
  heroTitle = null,
  heroText = null,
  pageContext = null,
}) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/blog" : `/blog/page:${currentPage - 1}`
  const nextPage = `/blog/page:${currentPage + 1}`

  return (
    <>
      <Hero title={heroTitle} text={heroText} image={heroImage} smallHeadings />
      <section id="start" />
      <section id="body-wrapper" className="section blog-listing">
        <div className="container grid-lg">
          <div className="columns">
            <div id="item" className="column col-12">
              <div className="columns">
                {posts.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  return (
                    <div className="column col-12" key={node.fields.slug}>
                      <div className="card">
                        {node.frontmatter.thumbnail ? (
                          <div className="card-image">
                            <Link
                              to={`/blog${node.fields.slug}`}
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
                                to={`/blog${node.fields.slug}`}
                                className="u-url text-dark"
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
                              __html:
                                node.frontmatter.description || node.excerpt,
                            }}
                          />
                        </div>
                        <div className="card-footer">
                          {node.frontmatter.taxonomy ? (
                            <Tags items={node.frontmatter.taxonomy.tag} />
                          ) : (
                            ""
                          )}
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
                          to={`${
                            i === 0
                              ? "/blog"
                              : `/blog/page:${(i + 1).toString()}`
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
        </div>
      </section>
    </>
  )
}

export default PostList
