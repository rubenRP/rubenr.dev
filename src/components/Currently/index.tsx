import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Currently = () => {
  return (
    <>
      <div id="working" />
      <section className="section modular-features offset-box">
        <div className="container grid-sm">
          <div className="frame-box without-offset-top">
            <h3>Currently working at</h3>
            <div>
              <StaticImage
                src="../../../content/assets/scalefast-logo.jpg"
                alt="Scalefast"
                placeholder="blurred"
                layout="fixed"
                width={400}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Currently
