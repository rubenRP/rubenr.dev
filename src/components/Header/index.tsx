import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import config from "../../../content/data/siteConfig.json"

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState("light")

  const navOnScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  const mobileNavOnClick = () => {
    document.getElementById("toggle").classList.toggle("active")
    document.getElementById("overlay").classList.toggle("open")
    document.body.classList.toggle("mobile-nav-open")
  }

  const handleKeyDown = ev => {
    // M key
    if (ev.keyCode === 77) {
      mobileNavOnClick()
    }
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  const { headerLinks } = config

  useEffect(() => {
    const htmlEl = document.getElementsByTagName("html")[0]
    const currentTheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : null
    if (currentTheme) {
      htmlEl.dataset.theme = currentTheme
      if (currentTheme !== theme) {
        setTheme(currentTheme)
      }
    }
    window.addEventListener("scroll", navOnScroll)
    return () => {
      window.removeEventListener("scroll", navOnScroll)
    }
  }, [])

  useEffect(() => {
    const htmlEl = document.getElementsByTagName("html")[0]
    localStorage.setItem("theme", theme)
    htmlEl.dataset.theme = theme
  }, [theme])

  return (
    <>
      <header id="header" className={scrolled ? "section scrolled" : "section"}>
        <section className="container grid-lg">
          <nav className="navbar">
            <section className="navbar-section logo">
              <Link to="/" className="navbar-brand mr-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 481.11 345"
                >
                  <title>logo-rr</title>
                  <path
                    d="M653.3,252.55a102.77,102.77,0,0,1-7.73,40.16,98.49,98.49,0,0,1-21.35,32A103.87,103.87,0,0,1,592,346.49,116.66,116.66,0,0,1,552,356l95.8,126.68H605.62L490.29,328.81c5.14,0,10.9.06,17.26.22s12.79.06,19.29-.22,12.87-.86,19.06-1.59a106,106,0,0,0,17-3.43q25.44-7.69,40.87-26.77t15.42-45.42a77.27,77.27,0,0,0-10-37.67A68.81,68.81,0,0,0,582,186.22a91.82,91.82,0,0,0-32-10.66,270.29,270.29,0,0,0-34.27-2H422.19V142.17h86.72a398.9,398.9,0,0,1,42.45,2.51q22.91,2.51,41.1,11.14,29,13.6,44.95,39.24T653.3,252.55Z"
                    transform="translate(-172.19 -137.72)"
                  />
                  <path
                    d="M302,351.56l96.23,126.68H354.72L239.82,324.31h17.27q9.55,0,19.29-.43t19.3-1.59a105.61,105.61,0,0,0,17.27-3.4q24.94-7.73,40.4-26.58t15.44-45.18A79.89,79.89,0,0,0,359,209.23q-9.76-18.38-27-27.47-16.35-9.11-32.44-10.9a313.86,313.86,0,0,0-34.3-1.83H205.79V478.24h-33.6V137.72h86.74c6.34,0,13.17.14,20.4.43s14.63.92,22,1.83a199.61,199.61,0,0,1,21.59,3.83A98.13,98.13,0,0,1,342,150.43q29.06,14,45.17,39.48t16.14,57.67a100.27,100.27,0,0,1-7.93,40.18A105.85,105.85,0,0,1,373.78,320a103.19,103.19,0,0,1-32,22A115.22,115.22,0,0,1,302,351.56Z"
                    transform="translate(-172.19 -137.72)"
                  />
                </svg>
              </Link>
            </section>
            <section className="navbar-section desktop-menu">
              <nav className="dropmenu animated">
                <ul className="navigation">
                  {headerLinks.map(link => {
                    return (
                      <li key={link.url}>
                        <Link to={link.url} className="external">
                          {link.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </section>
            <section className="navbar-section toggle">
              <nav className="dropmenu animated">
                <ul className="navigation">
                  <li>
                    <label
                      className="switch"
                      htmlFor="toggle-dark"
                      onClick={toggleTheme}
                    >
                      <input
                        id="toogle-dark"
                        type="checkbox"
                        className="checkbox"
                        readOnly
                        checked={theme === "light"}
                      />
                      <div>
                        <span />
                      </div>
                    </label>
                  </li>
                </ul>
              </nav>
            </section>
          </nav>
        </section>
      </header>
      <div className="mobile-menu">
        <div
          className="button_container"
          id="toggle"
          onClick={mobileNavOnClick}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
        >
          <span className="top" />
          <span className="middle" />
          <span className="bottom" />
        </div>
      </div>
    </>
  )
}

export default Header
