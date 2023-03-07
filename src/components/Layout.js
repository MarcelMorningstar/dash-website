import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div id='page-container'>
      <Navbar />

      <div id="content-wrap">
        { children }
      </div>

      <Footer />
    </div>
  )
}
