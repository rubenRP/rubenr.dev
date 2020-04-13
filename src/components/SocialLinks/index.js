import React, { Component } from "react"

import config from "../../../data/siteConfig"

class SocialLinks extends Component {
  render() {
    const { userLinks } = config
    return (
      <ul className="social-links d-inline-flex list-unstyled">
        {userLinks.map(link => {
          return (
            <li key={link.label}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <i className={link.iconClassName}></i>
                <span className="d-none">{link.label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default SocialLinks
