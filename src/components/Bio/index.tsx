/* eslint-disable react/no-danger */
import { Link } from "gatsby"
import { AboutData } from "models/about"
import React from "react"

const Bio: React.FC<AboutData> = ({ info }: AboutData) => {
  return (
    <>
      <div id="about" />
      <section className="section modular-recent">
        <div className="container grid-lg">
          <div className="columns">
            <div className="column col-3 col-md-12 header-col">
              <h4>
                <span>About me</span>
              </h4>
            </div>
            <div className="column col-9 col-md-12 main-col">
              <div className="columns item">
                <p
                  dangerouslySetInnerHTML={{ __html: info.shortInfo }}
                  className="column col-12 padded"
                />
                <div className="column col-4 col-md-12">
                  <Link to="/about" className="btn btn-lg">
                    More things about me...
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Bio
