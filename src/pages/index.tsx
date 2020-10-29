import React from "react"
import { graphql } from "gatsby"
import BodyClassName from "react-body-classname"

import Popular from "../components/Popular"
import Layout from "../components/Layout"
import Bio from "../components/Bio"
import SEO from "../components/Seo"
import Currently from "../components/Currently"
import Hero from "../components/Hero"
import Recent from "../components/Recent"

import home from "../../data/home"
import about from "../../data/about"
import config from "../../data/siteConfig"

interface Props {
  data?: any
  location: Location
}

const IndexPage: React.FC<Props> = ({
  data = null,
  location = null,
}: Props) => {
  const { siteTitle, seoKeywords } = config
  const heroClasses = "text-light hero-tiny overlay-dark-gradient"

  return (
    <BodyClassName className="header-dark header-transparent header-fixed header-animated">
      <Layout location={location} title={siteTitle}>
        <SEO title="Home" keywords={seoKeywords} />
        <Hero
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
