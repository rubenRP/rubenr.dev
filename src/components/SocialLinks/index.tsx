import React from "react"

import config from "../../../content/data/siteConfig.json"

const SocialLinks: React.FC = () => {
  const { userLinks } = config
  return (
    <ul className="social-links d-inline-flex list-unstyled">
      {userLinks.map(link => {
        return (
          <li key={link.label}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <i className={link.iconClassName} />
              <span className="d-none">{link.label}</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialLinks
