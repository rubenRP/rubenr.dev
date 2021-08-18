import React, { useState } from "react"
import { Link } from "gatsby"
import Hero from "../Hero"
import Tags from "../Tags"

const PostList: React.FC<any> = ({
  posts = null,
  heroImage = null,
  heroTitle = null,
  heroText = null,
}) => {
  const [filteredLanguage, setFilteredLanguage] = useState("es")

  const filteredPosts = posts.filter(({ node }) => {
    const lang = node.frontmatter.language || "es"
    return lang === filteredLanguage
  })

  let date = 2000

  return (
    <>
      <Hero title={heroTitle} text={heroText} image={heroImage} smallHeadings />
      <section id="start" />
      <section
        id="body-wrapper"
        className="section blog-listing modular-postlist"
      >
        <div className="container grid-md">
          <div className="columns">
            <div id="item" className="column col-12">
              <div className="language-filter">
                <a
                  className={filteredLanguage == "es" ? "chip active" : "chip"}
                  onClick={() => setFilteredLanguage("es")}
                >
                  <figure
                    className="avatar avatar-sm"
                    data-initial="ES"
                  ></figure>
                  Spanish
                </a>
                <a
                  className={filteredLanguage == "en" ? "chip active" : "chip"}
                  onClick={() => setFilteredLanguage("en")}
                >
                  <figure
                    className="avatar avatar-sm"
                    data-initial="EN"
                  ></figure>
                  English
                </a>
              </div>
              {filteredPosts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div className="columns" key={node.id}>
                    <div className="column col-3 col-md-12 header-col">
                      {date != new Date(node.frontmatter.date).getFullYear()
                        ? (date = new Date(
                            node.frontmatter.date
                          ).getFullYear()) && (
                            <h4>
                              <span>{date}</span>
                            </h4>
                          )
                        : null}
                    </div>
                    <div className="column col-9 col-md-12 main-col">
                      <div className="columns item">
                        <div className="column col-12">
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
                          <div className="body">
                            <p
                              className="text-small"
                              // eslint-disable-next-line react/no-danger
                              dangerouslySetInnerHTML={{
                                __html:
                                  node.frontmatter.description || node.excerpt,
                              }}
                            />
                          </div>
                          <div className="footer">
                            <div className="text-gray mb-2">
                              <small className="blog-date">
                                <i className="fa fa-calendar" />{" "}
                                {node.frontmatter.date}
                              </small>
                            </div>
                            {node.frontmatter.taxonomy ? (
                              <Tags items={node.frontmatter.taxonomy.tag} />
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PostList
