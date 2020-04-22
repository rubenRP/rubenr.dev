import React, { Component } from "react"
import { Link } from "gatsby"
import SocialLinks from "../SocialLinks"

class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = { position: 0 }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.parallax)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.parallax)
  }

  parallax = () => {
    this.setState({ position: window.scrollY * 0.3 })
  }

  toStart = () => {
    const start = document.getElementById("start").offsetTop
    const offset = 45
    window.scroll({ top: start - offset, left: 0, behavior: "smooth" })
  }

  handleKeyDown = ev => {
    // M key
    if (ev.keyCode === 67) {
      this.toStart()
    }
  }

  render() {
    const { config, content, image, social, date, tags } = this.props
    return (
      <>
        <section
          className={`section modular-hero hero ${config.classes} ${
            config.parallax ? "parallax" : ""
          }`}
          style={{
            backgroundPositionY: this.state.position,
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="image-overlay" />
          <div
            className={`container ${config.gridSize}`}
            style={{ textAlign: config.textAlign }}
          >
            <div dangerouslySetInnerHTML={{ __html: content }} />
            {date ? (
              <span className="blog-date">
                <time className="dt-published">
                  <i className="fa fa-calendar" /> {date}
                </time>
              </span>
            ) : (
              ""
            )}
            {tags ? (
              <div className="taxonomy">
                <span className="tags">
                  {tags.map(tag => (
                    <Link
                      to={`/blog/tag:${tag.toLowerCase()}`}
                      className="label label-rounded label-secondary"
                      key={tag}
                    >
                      {tag}
                    </Link>
                  ))}
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
          {social ? <SocialLinks /> : ""}
          {config.arrow ? (
            <i
              id="to-start"
              className="pulse fa fa-angle-down"
              onClick={this.toStart}
              onKeyDown={this.handleKeyDown}
              role="button"
              tabIndex={0}
            >
              <span className="d-none">Go to content</span>
            </i>
          ) : (
            ""
          )}
        </section>
      </>
    )
  }
}

export default Hero
