import React from "react"
import propTypes from "prop-types"
import { graphql } from "gatsby"
import BodyClassName from "react-body-classname"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import Hero from "../components/Hero"
import About from "../components/About"
import Recent from "../components/Recent"
import Resume from "../components/Resume"
import Currently from "../components/Currently"

import home from "../../data/home"
import about from "../../data/about"
import resume from "../../data/resume"
import config from "../../data/siteConfig"

const IndexPage = ({ data, location }) => {
  const { siteTitle } = config
  const heroClasses = "text-light hero-fullscreen overlay-dark-gradient"

  return (
    <BodyClassName className="header-dark header-transparent header-fixed header-animated">
      <Layout location={location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Hero
          title={home.hero.title}
          subtitle={home.hero.subtitle}
          text={home.hero.text}
          image={data.fileName.childImageSharp.fluid.src}
          social
          classes={heroClasses}
        />
        <div id="start" />
        <About info={about} />
        <Recent />
        <Resume info={resume} />
        <Currently />
      </Layout>
    </BodyClassName>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    fileName: file(
      absolutePath: { regex: "/ferdinand-stohr-NFs6dRTBgaM-unsplash.jpg/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

IndexPage.defaultProps = {
  data: {
    fileName: null,
  },
  location: null,
}

IndexPage.propTypes = {
  data: propTypes.shape({
    fileName: propTypes.any,
  }),
  // eslint-disable-next-line react/forbid-prop-types
  location: propTypes.any,
}
