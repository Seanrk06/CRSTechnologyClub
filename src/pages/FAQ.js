import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Questions from '../components/Questions'

function FAQ() {
  return (
    <div>
        <Navbar/>
        <Header
        heading="Frequently asked questions"
        text="Click on each arrow to get more information"
        />
        <Questions/>
        <Footer/>
    </div>
  )
}

export default FAQ