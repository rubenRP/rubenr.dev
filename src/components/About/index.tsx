/* eslint-disable react/no-danger */
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { AboutData } from "models/about"

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

const About: React.FC<AboutData> = ({ info }: AboutData) => {
  return (
    <>
      <div id="about" />
      <section className="section modular-about">
        <div className="container grid-lg">
          <div className="columns left">
            <div className="column col-9 col-md-12">
              <p dangerouslySetInnerHTML={{ __html: info.text }} />
              <h4>Contact</h4>
              <div className="columns">
                <div className="column col-8 col-md-12">
                  <div>{info.contactEmail}</div>
                </div>
                <div
                  className="column col-4 col-md-12"
                  dangerouslySetInnerHTML={{ __html: info.contactLink }}
                />
              </div>
            </div>
            <div className="column col-3 col-md-12">
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
        </div>
      </section>
    </>
  )
}

export default About
