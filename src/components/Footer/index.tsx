import React from "react"

import SocialLinks from "../SocialLinks"

import M2 from "../../../content/assets/adobe-certified-expert.png"

const Footer: React.FC = () => {
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
              alt="Adobe Certified Expert - Magento Commerce Front-End Developer"
            />
          </li>
        </ul>
      </section>
      <section className="container grid-lg">
        <ul className="copyright d-inline-flex list-unstyled">
          <li>Copyright © Rubén Rodríguez {new Date().getFullYear()}</li>
          <li>
            With{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>
            {"  "}
            using <a href="https://www.gatsbyjs.org">Gatsby</a>.
          </li>
        </ul>
      </section>
    </section>
  )
}

export default Footer
