import React, { Component } from "react"
import SocialLinks from "../SocialLinks"

class Hero extends Component {
  state = {
    position: 0,
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

  render() {
    const { config, content, image, social } = this.props
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
          <div className="image-overlay"></div>
          <section
            className={`container ${config.gridSize}`}
            dangerouslySetInnerHTML={{ __html: content }}
            style={{ textAlign: config.textAlign }}
          ></section>
          {social ? <SocialLinks /> : ""}
          {config.arrow ? (
            <i
              id="to-start"
              className="pulse fa fa-angle-down"
              onClick={this.toStart}
            ></i>
          ) : (
            ""
          )}
        </section>
      </>
    )
  }
}

export default Hero
