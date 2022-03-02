import { StaticImage } from "gatsby-plugin-image"
import { AboutData } from "models/about"
import React from "react"

const About = ({ info }: AboutData) => {
  return (
    <>
      <div id="about" />
      <section className="section modular-about">
        <div className="container grid-md">
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
                <StaticImage
                  src="../../../content/assets/profile-pic.jpg"
                  alt="Rubén Rodríguez"
                  placeholder="blurred"
                  layout="fixed"
                  width={170}
                  height={170}
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
