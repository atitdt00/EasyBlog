import React from 'react'
import TopNav from '../FrontEnd/TopNav'
import MainNav from '../FrontEnd/MainNav'
import Footer from '../FrontEnd/Footer'

function FronendLayout({children}) {
  return (
    <>
      <TopNav/>
      <MainNav/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default FronendLayout
