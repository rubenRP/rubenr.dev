import { graphql } from "gatsby"
import React from "react"
import BodyClassName from "react-body-classname"
import about from "../../content/data/about.json"
import resume from "../../content/data/resume.json"
import config from "../../content/data/siteConfig.json"
import About from "../components/About"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Resume from "../components/Resume"
import SEO from "../components/SEO"
import { PageData } from "../models/page"

const AboutPage = ({ data, location }: PageData) => {
  const { siteTitleShort, seoKeywords } = config
  const heroClasses = "text-light hero-tiny overlay-dark-gradient"

  return (
    <BodyClassName className="header-dark header-transparent header-fixed header-animated">
      <Layout location={location} title={siteTitleShort}>
        <SEO title="About" keywords={seoKeywords} />
        <Hero
          title="About me"
          text="Who I am? What I did? What I know?"
          image={
            data.fileName.childImageSharp.gatsbyImageData.images.fallback.src
          }
          classes={heroClasses}
          smallHeadings
        />
        <div id="start" />
        <About info={about} />
        <Resume info={resume} />
      </Layout>
    </BodyClassName>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    fileName: file(
      absolutePath: { regex: "/anas-alshanti-feXpdV001o4-unsplash.jpg/" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 1600)
      }
    }
  }
`
