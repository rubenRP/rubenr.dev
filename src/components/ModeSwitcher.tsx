import React, { useEffect, useState } from "react"

const ModeSwitcher = () => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

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
  }, [])

  useEffect(() => {
    const htmlEl = document.getElementsByTagName("html")[0]
    localStorage.setItem("theme", theme)
    htmlEl.dataset.theme = theme
  }, [theme])

  return (
    <>
      <section className="navbar-section toggle">
        <nav className="dropmenu animated">
          <ul className="navigation">
            <li>
              <button
                className="theme-toggle"
                type="button"
                onClick={toggleTheme}
              >
                <svg
                  id="theme-toggle-dark-icon"
                  className={`${theme != "dark" && "d-none"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg
                  id="theme-toggle-light-icon"
                  className={`${theme != "light" && "d-none"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </>
  )
}

export default ModeSwitcher
