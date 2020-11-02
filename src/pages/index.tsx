import React from "react"
import { graphql } from "gatsby"
import BodyClassName from "react-body-classname"

import { PageData } from "models/page"
import Popular from "../components/Popular"
import Layout from "../components/Layout"
import Bio from "../components/Bio"
import SEO from "../components/Seo"
import Currently from "../components/Currently"
import HeroTyped from "../components/HeroTyped"
import Recent from "../components/Recent"

import home from "../../content/data/home.json"
import about from "../../content/data/about.json"
import config from "../../content/data/siteConfig.json"

const IndexPage: React.FC<PageData> = ({
  data = null,
  location = null,
}: PageData) => {
  const { siteTitle, seoKeywords } = config
  const heroClasses = "text-light hero-tiny overlay-dark-gradient"

  return (
    <BodyClassName className="header-dark header-transparent header-fixed header-animated">
      <Layout location={location} title={siteTitle}>
        <SEO title="Home" keywords={seoKeywords} />

        <HeroTyped
          title={home.hero.title}
          subtitle={home.hero.subtitle}
          text={home.hero.text}
          image={data.fileName.childImageSharp.fluid.src}
          social
          classes={heroClasses}
        />
        <div id="start" />
        <Recent />
        <Popular />
        <Bio info={about} />
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
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
