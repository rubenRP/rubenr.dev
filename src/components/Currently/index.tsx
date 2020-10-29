import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const currentlyQuery = graphql`
  query CurrentlyQuery {
    currently: file(absolutePath: { regex: "/scalefast-logo.jpg/" }) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Currently: React.FC = () => {
  return (
    <>
      <div id="working" />
      <section className="section modular-features offset-box">
        <div className="container grid-sm">
          <div className="frame-box without-offset-top">
            <h3>Currently working at</h3>
            <div>
              <StaticQuery
                query={currentlyQuery}
                render={data => {
                  return <Image fixed={data.currently.childImageSharp.fixed} />
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Currently
