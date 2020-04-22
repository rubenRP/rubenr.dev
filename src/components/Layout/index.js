import React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import Footer from "../Footer"
import MobileNav from "../MobileNav"

import "font-awesome/css/font-awesome.min.css"
import "../../styles/theme.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div id="page-wrapper">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
      <MobileNav />
    </>
  )
}

export default Layout

Layout.defaultProps = {
  children: null,
}

Layout.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
}
