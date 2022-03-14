import "font-awesome/css/font-awesome.min.css"
import React from "react"
import "../styles/theme.scss"
import Footer from "./Footer"
import Header from "./Header"

interface Props {
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
    </>
  )
}

export default Layout
