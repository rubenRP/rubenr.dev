import React, { Component } from "react"

import SocialLinks from "../SocialLinks"

import M1 from "../../../content/assets/middle_frontend_developer.png"
import M2 from "../../../content/assets/middle_frontend_developer_m2.png"

class Footer extends Component {
  render() {
    return (
      <section id="footer" className="section">
        <section className="container grid-lg">
          <SocialLinks />
        </section>
        <section className="container grid-lg">
          <ul className="hero-certifications d-inline-flex list-unstyled">
            <li>
              <img
                src={M2}
                alt="Magento 2 Certified Professional Front End Developer"
              />
            </li>
            <li>
              <img src={M1} alt="Magento Certified Front End Developer" />
            </li>
          </ul>
        </section>
        <section className="container grid-lg">
          <ul className="copyright d-inline-flex list-unstyled">
            <li>Copyright © Rubén Rodríguez {new Date().getFullYear()}</li>
            <li>
              Using <a href="https://www.gatsbyjs.org">Gatsby</a>. Based on{" "}
              <a href="https://github.com/getgrav/grav-theme-quark">Quark</a>{" "}
              modified theme.
            </li>
          </ul>
        </section>
      </section>
    )
  }
}

export default Footer
