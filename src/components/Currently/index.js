import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

class Currently extends Component {
  render() {
    return (
      <>
        <div id="working"></div>
        <section className="section modular-features modular-working offset-box">
          <section className="container grid-lg">
            <div className="frame-box bg-gray">
              <h3>Currently working at</h3>
              <div>
                <StaticQuery
                  query={currentlyQuery}
                  render={data => {
                    return (
                      <Image fixed={data.currently.childImageSharp.fixed} />
                    )
                  }}
                />
              </div>
              <div className="columns"></div>
            </div>
          </section>
        </section>
      </>
    )
  }
}

const currentlyQuery = graphql`
  query CurrentlyQuery {
    currently: file(absolutePath: { regex: "/interactiv4.png/" }) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Currently
