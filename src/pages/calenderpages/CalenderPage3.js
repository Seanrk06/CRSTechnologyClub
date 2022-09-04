import React from 'react'
import Calender from '../../components/calenders/Calender3'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'

function CalenderPage3() {
  return (
    <div>
        <Navbar/>
        <Header
        heading="All Events Currently Scheduled"
        text="Scroll to the bottom for more information"
        />
        <Calender/>
        <Footer/>
    </div>
  )
}

export default CalenderPage3