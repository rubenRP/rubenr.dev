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

const Currently = () => {
  return (
    <>
      <div id="working" />
      <section className="section modular-features modular-working offset-box">
        <section className="container grid-lg">
          <div className="frame-box bg-gray">
            <h3>Currently working at</h3>
            <div>
              <StaticQuery
                query={currentlyQuery}
                render={data => {
                  return <Image fixed={data.currently.childImageSharp.fixed} />
                }}
              />
            </div>
            <div className="columns" />
          </div>
        </section>
      </section>
    </>
  )
}

export default Currently
