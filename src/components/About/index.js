import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

class About extends Component {
  render() {
    const { info } = this.props
    return (
      <>
        <div id="about"></div>
        <section className="section modular-text modular-about">
          <section className="container grid-lg">
            <div className="columns left">
              <div className="column col-8 col-md-12">
                <h2>{info.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: info.text }}></p>
                <h4>Contact</h4>
                <div className="columns">
                  <div className="column col-8 col-md-12">
                    <strong>{info.contact_name}</strong>
                    <div>{info.contact_email}</div>
                  </div>
                  <div
                    className="column col-4 col-md-12"
                    dangerouslySetInnerHTML={{ __html: info.contact_link }}
                  />
                </div>
              </div>
              <div className="column col-4 col-md-12">
                <div className="image">
                  <StaticQuery
                    query={aboutQuery}
                    render={data => {
                      return <Image fixed={data.avatar.childImageSharp.fixed} />
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
      </>
    )
  }
}

const aboutQuery = graphql`
  query AboutQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 170, height: 170) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default About
