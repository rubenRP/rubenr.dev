import React from "react"
import { graphql } from "gatsby"
import BodyClassName from "react-body-classname"

import { PageData } from "models/page"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

import Hero from "../components/Hero"
import About from "../components/About"
import Resume from "../components/Resume"

import about from "../../content/data/about.json"
import resume from "../../content/data/resume.json"
import config from "../../content/data/siteConfig.json"

const AboutPage: React.FC<PageData> = ({
  data = null,
  location = null,
}: PageData) => {
  const { siteTitle, seoKeywords } = config
  const heroClasses = "text-light hero-tiny overlay-dark-gradient"

  return (
    <BodyClassName className="header-dark header-transparent header-fixed header-animated">
      <Layout location={location} title={siteTitle}>
        <SEO title="About" keywords={seoKeywords} />
        <Hero
          title="About me"
          text="Who I am? What I did? What I know?"
          image={data.fileName.childImageSharp.fluid.src}
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
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
