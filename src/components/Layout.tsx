import "font-awesome/css/font-awesome.min.css"
import React from "react"
import "../styles/theme.scss"
import Footer from "./Footer"
import Header from "./Header"
import MobileNav from "./MobileNav"

interface Props {
  location: Location
  title: string
  children?: React.ReactNode
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
