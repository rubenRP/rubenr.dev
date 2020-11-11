import React from "react"
import { Link } from "gatsby"

import SocialLinks from "../SocialLinks"
import config from "../../../content/data/siteConfig.json"

import M2 from "../../../content/assets/adobe-certified-expert.png"

const Footer: React.FC = () => {
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
              {footerLinks.map(link => {
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
