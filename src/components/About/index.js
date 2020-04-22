/* eslint-disable react/no-danger */
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

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

const About = ({ info }) => {
  return (
    <>
      <div id="about" />
      <section className="section modular-about">
        <div className="container grid-lg">
          <div className="columns left">
            <div className="column col-8 col-md-12">
              <h2>{info.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: info.text }} />
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
        </div>
      </section>
    </>
  )
}

export default About

About.defaultProps = {
  info: {
    title: "",
    text: "",
    contact_name: "",
    contact_email: "",
    contact_link: "",
  },
}

About.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.any,
    contact_name: PropTypes.string,
    contact_email: PropTypes.string,
    contact_link: PropTypes.any,
  }),
}
