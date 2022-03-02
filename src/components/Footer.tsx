import { Link } from "gatsby"
import React from "react"
import config from "../../content/data/siteConfig.json"
import SocialLinks from "./SocialLinks"

const Footer = () => {
  const { footerLinks } = config
  return (
    <section id="footer" className="section">
      <section className="container grid-lg">
        <SocialLinks />
      </section>
      <section className="container grid-lg">
        <ul className="copyright d-inline-flex list-unstyled">
          <li>© {new Date().getFullYear()} Rubén Rodríguez </li>
          <li>
            <ul className=" d-inline-flex list-unstyled">
              {footerLinks.map((link) => {
                return (
                  <li key={link.url}>
                    <Link to={link.url} className="external">
                      {link.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default Footer
