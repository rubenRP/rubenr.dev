/* eslint-disable react/no-danger */
import { Link } from "gatsby"
import React from "react"

interface Props {
  info: {
    title: string
    text: string
    contactName: string
    contactEmail: string
    contactLink: string
    shortInfo: string
  }
}

const Bio: React.FC<Props> = ({ info }: Props) => {
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
                  className="padded"
                />
                <div className="col-4 col-md-12">
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
