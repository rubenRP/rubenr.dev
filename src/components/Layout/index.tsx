import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import MobileNav from "../MobileNav"

import "font-awesome/css/font-awesome.min.css"
import "../../styles/theme.scss"

interface Props {
  children?: any
}

const Layout = ({ children }: Props) => {
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
