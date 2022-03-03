import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import gif from "../images/404.gif"
import { PageData } from "../models/page"

const NotFoundPage = ({ data = {}, location }: PageData) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <section id="start" />
      <section id="body-wrapper" className="section blog-listing">
        <div className="container grid-md">
          <div className="columns">
            <div id="item" className="column col-12">
              <div className="content-item h-entry">
                <div className="content-title text-center">
                  <h2 className="p-name mt-1">Not Found</h2>
                </div>

                <div className="e-content text-center">
                  <p className="mb-5">
                    You just hit a route that doesn&#39;t exist... the sadness.
                  </p>
                  <img src={gif} alt="404" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
