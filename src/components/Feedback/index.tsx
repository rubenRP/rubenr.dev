import React from "react"

import config from "../../../content/data/siteConfig.json"

const Feedback: React.FC = () => {
  const { userLinks } = config
  const [twitter] = userLinks.filter(link => link.label === "Twitter")

  return (
    <section className="section modular-features offset-box">
      <section className="container grid-sm">
        <div className="frame-box bg-light">
          <h3>If you want to send me your feedback</h3>
          <div>
            <br />
            <a
              href={twitter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <i className={twitter.iconClassName} />
              <span> Tweet me</span>
            </a>
            <br />
            <br />
          </div>
          <p>
            Thank you, it means a lot!
            <span role="img" aria-label="Thank you">
              😎
            </span>
          </p>
        </div>
      </section>
    </section>
  )
}

export default Feedback
