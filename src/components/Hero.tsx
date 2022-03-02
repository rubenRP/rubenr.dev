/* eslint-disable react/no-danger */
import { Link } from "gatsby"
import { HeroData } from "../models/hero"
import React, { useEffect, useState } from "react"
import SocialLinks from "./SocialLinks"

const Hero = ({
  title = null,
  subtitle,
  image,
  text,
  social = false,
  date,
  tags = [],
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
    const start = document.getElementById("start")!.offsetTop
    const offset = 45
    window.scroll({ top: start - offset, left: 0, behavior: "smooth" })
  }

  const handleKeyDown = (ev: any) => {
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

  return (
    <>
      <section
        className={`section modular-hero hero ${
          subtitle && "title-h1h2"
        } ${classes} ${isParallax && "parallax"} ${
          smallHeadings && "small-headings"
        }`}
        style={{
          backgroundPositionY: position,
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="image-overlay" />
        <div className="container grid-md" style={{ textAlign }}>
          {title && <h1>{title}</h1>}
          {subtitle && <h2>{subtitle}</h2>}
          {text && (
            <p>
              <span dangerouslySetInnerHTML={{ __html: text }} />
            </p>
          )}
          {date && (
            <span className="blog-date">
              <time className="dt-published">
                <i className="fa fa-calendar" /> {date}
              </time>
            </span>
          )}
          {tags && (
            <div className="taxonomy">
              <span className="tags">
                {tags.map((tag) => (
                  <Link
                    to={`/blog/tag:${tag.toLowerCase()}`}
                    className="label label-rounded"
                    key={tag}
                  >
                    {tag}
                  </Link>
                ))}
              </span>
            </div>
          )}
        </div>
        {social && <SocialLinks />}
        {arrow && (
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
        )}
      </section>
    </>
  )
}

export default Hero
