import React from 'react'
import CurrentEventList from '../components/CurrentEventList'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

function CurrentEvent() {
  return (
    <div>
        <Navbar/>
        <Header
        heading="Current Event"
        text="Check out our event for this month below."
        />
        <CurrentEventList/>
        <Footer/>
    </div>
  )
}

export default CurrentEvent