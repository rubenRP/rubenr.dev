import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import MobileNav from "../MobileNav"

import "font-awesome/css/font-awesome.min.css"
import "../../styles/theme.scss"

interface Props {
  location: Location
  title: string
  children?: unknown
}

const Layout: React.FC<Props> = ({ children }: Props) => {
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
