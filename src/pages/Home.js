import React from 'react'
import Footer from '../components/Footer'
import CTA from '../components/CTA'
import Gallary from '../components/Gallary'
import Main from '../components/Main'
import Navbar from '../components/Navbar'

export default function Example() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <Navbar/>
        <main>
          <Main/>
          <Gallary/>
          <CTA/>
        </main>
        <Footer/>
      </div>
    </div>
  )
}