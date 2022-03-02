import { graphql } from "gatsby"
import { PageData } from "models/page"
import React from "react"
import BodyClassName from "react-body-classname"
import about from "../../content/data/about.json"
import home from "../../content/data/home.json"
import config from "../../content/data/siteConfig.json"
import Bio from "../components/bio"
import HeroTyped from "../components/HeroTyped"
import Layout from "../components/Layout"
import Newsletter from "../components/Newsletter"
import Popular from "../components/Popular"
import Recent from "../components/Recent"
import SEO from "../components/Seo"

const IndexPage = ({ data = null, location = null }: PageData) => {
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
          image={
            data.fileName.childImageSharp.gatsbyImageData.images.fallback.src
          }
          social
          classes={heroClasses}
        />
        <div id="start" />
        <Recent />
        <Popular />
        <Bio info={about} />
        <Newsletter />
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
        gatsbyImageData(width: 1600)
      }
    }
  }
`
