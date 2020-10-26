import React from "react"
import { graphql } from "gatsby"
import BodyClassName from "react-body-classname"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import Hero from "../components/Hero"
import About from "../components/About"
import Resume from "../components/Resume"
import Currently from "../components/Currently"

import about from "../../data/about"
import resume from "../../data/resume"
import config from "../../data/siteConfig"

interface Props {
  data?: any
  location: Location
}

const AboutPage: React.FC<Props> = ({
  data = null,
  location = null,
}: Props) => {
  const { siteTitle, seoKeywords } = config
  const heroClasses = "text-light hero-tiny overlay-dark-gradient"

  return (
    <BodyClassName className="header-dark header-transparent header-fixed header-animated">
      <Layout location={location} title={siteTitle}>
        <SEO title="About" keywords={seoKeywords} />
        <Hero
          title="About me"
          image={data.fileName.childImageSharp.fluid.src}
          classes={heroClasses}
        />
        <div id="start" />
        <About info={about} />
        <Resume info={resume} />
        <Currently />
      </Layout>
    </BodyClassName>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    fileName: file(
      absolutePath: { regex: "/ferdinand-stohr-NFs6dRTBgaM-unsplash.jpg/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
