import React, { useState } from "react"

const Newsletter = () => {
  const [message, setMessage] = useState("")
  const processForm = (form: HTMLFormElement | undefined) => {
    const data = new FormData(form)
    data.append("form-name", "newsletter")
    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => {
        setMessage(`Almost there! Check your inbox for a confirmation e-mail.`)
      })
      .catch((error) => {
        setMessage(`Error: ${error}`)
      })
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    processForm(e.target)
  }
  return (
    <>
      <div id="newsletter" />
      <section className="section modular-features offset-box">
        <div className="container grid-sm">
          <div className="frame-box without-offset-top columns justify-center">
            <h3 className="col-12">Devletter</h3>
            <div className="col-9 col-md-9 mb-2">
              <p>
                I send out an email when I create or post something new.{" "}
                <span role="img" aria-label="Newsletter">
                  🚀
                </span>
              </p>
              <form
                className="email-form form"
                name="newsletter"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <div hidden aria-hidden="true">
                  <label>
                    Don’t fill this out if you're human:
                    <input name="bot-field" />
                  </label>
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    id="email"
                    required
                    className="form-input input-lg mb-2"
                  />
                  <button type="submit" className="btn btn-primary btn-lg">
                    Subscribe
                  </button>
                </div>
                {message ?? (
                  <div>
                    <small>{message}</small>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Newsletter
