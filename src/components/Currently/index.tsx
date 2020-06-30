import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const currentlyQuery = graphql`
  query CurrentlyQuery {
    currently: file(absolutePath: { regex: "/interactiv4.png/" }) {
      childImageSharp {
        fixed(width: 300) {
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
          <div className="frame-box">
            <h3>Currently working at</h3>
            <div>
              <StaticQuery
                query={currentlyQuery}
                render={data => {
                  return <Image fixed={data.currently.childImageSharp.fixed} />
                }}
              />
            </div>
            <p className="columns" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Currently