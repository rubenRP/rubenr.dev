import React, { Component } from "react"
import Image from "gatsby-image"

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
  render() {
    const { config, content, image } = this.props
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
          {config.arrow ? (
            <i id="to-start" className="pulse fa fa-angle-down"></i>
          ) : (
            ""
          )}
        </section>
      </>
    )
  }
}

export default Hero
