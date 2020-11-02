/* eslint-disable react/no-danger */
import React, { useRef, useState, useEffect } from "react"
import { HeroData } from "models/hero"
import Typed from "typed.js"
import SocialLinks from "../SocialLinks"

const HeroTyped: React.FC<HeroData> = ({
  title = null,
  subtitle = null,
  text = null,
  image = null,
  social = false,
  isParallax = true,
  arrow = true,
  classes = "text-light hero-tiny overlay-dark-gradient",
  textAlign = "center",
  smallHeadings = false,
}: HeroData) => {
  const [position, setPosition] = useState(0)

  const parallax = () => {
    setPosition(window.scrollY * 0.3)
  }

  const toStart = () => {
    const start = document.getElementById("start").offsetTop
    const offset = 45
    window.scroll({ top: start - offset, left: 0, behavior: "smooth" })
  }

  const handleKeyDown = ev => {
    // M key
    if (ev.keyCode === 67) {
      toStart()
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", parallax)
    return () => {
      window.removeEventListener("scroll", parallax)
    }
  }, [])

  const typeTarget = useRef(null)

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: title,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 7000,
      cursorChar: "_",
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <section
        className={`section modular-hero hero ${
          subtitle ? "title-h1h2" : ""
        } ${classes} ${isParallax ? "parallax" : ""} ${
          smallHeadings ? "small-headings" : ""
        }`}
        style={{
          backgroundPositionY: position,
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="image-overlay" />
        <div className="container grid-lg" style={{ textAlign }}>
          {title ? (
            <h1>
              <span ref={typeTarget} />
            </h1>
          ) : (
            ""
          )}
          {subtitle ? <h2>{subtitle}</h2> : ""}
          {text ? (
            <p>
              <span dangerouslySetInnerHTML={{ __html: text }} />
            </p>
          ) : (
            ""
          )}
        </div>
        {social ? <SocialLinks /> : ""}
        {arrow ? (
          <i
            id="to-start"
            className="pulse fa fa-angle-down"
            onClick={toStart}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Go to content"
          >
            <span className="d-none">Go to content</span>
          </i>
        ) : (
          ""
        )}
      </section>
    </>
  )
}

export default HeroTyped
