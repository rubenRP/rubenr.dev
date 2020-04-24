import React, { Component } from "react"
import { Link } from "gatsby"
import propTypes from "prop-types"
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
    const {
      title,
      subtitle,
      text,
      image,
      social,
      date,
      tags,
      parallax,
      arrow,
      classes,
      textAlign,
    } = this.props
    const { position } = this.state
    return (
      <>
        <section
          className={`section modular-hero hero ${
            subtitle ? "title-h1h2" : ""
          } ${classes} ${parallax ? "parallax" : ""}`}
          style={{
            backgroundPositionY: position,
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="image-overlay" />
          <div className="container grid-lg" style={{ textAlign }}>
            {title ? <h1>{title}</h1> : ""}
            {subtitle ? <h2>{subtitle}</h2> : ""}
            {text ? (
              <p>
                <span dangerouslySetInnerHTML={{ __html: text }} />
              </p>
            ) : (
              ""
            )}
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
          {arrow ? (
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

Hero.defaultProps = {
  title: null,
  subtitle: null,
  text: null,
  image: null,
  social: false,
  date: null,
  tags: null,
  parallax: true,
  arrow: true,
  classes: "text-light hero-tiny overlay-dark-gradient",
  textAlign: "center",
}

Hero.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  text: propTypes.string,
  image: propTypes.string,
  social: propTypes.bool,
  date: propTypes.string,
  tags: propTypes.arrayOf(propTypes.string),
  parallax: propTypes.bool,
  arrow: propTypes.bool,
  classes: propTypes.string,
  textAlign: propTypes.string,
}
