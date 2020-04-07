import React, { Component } from "react"

class Footer extends Component {
  render() {
    return (
      <section id="footer" className="section">
        <section className="container grid-lg">
          <ul className="social-links d-inline-flex list-unstyled">
            <li>
              <a href="http://twitter.com/@_rubenr" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="http://linkedin.com/in/rubenrodriguezpaz"
                target="_blank"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="http://github.com/rubenRP" target="_blank">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="http://instagram.com/_rubenr" target="_blank">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </section>
        <section className="container grid-lg">
          <ul className="hero-certifications d-inline-flex list-unstyled">
            <li>
              <img
                src="/user/themes/rubenr/images/middle_frontend_developer_m2.png"
                alt="Magento 2 Certified Professional Front End Developer"
              />
            </li>
            <li>
              <img
                src="/user/themes/rubenr/images/middle_frontend_developer.png"
                alt="Magento Certified Front End Developer"
              />
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
