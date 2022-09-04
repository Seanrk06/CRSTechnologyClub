import React from 'react'
import Calender from '../../components/calenders/Calender5'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'

function CalenderPage5() {
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

export default CalenderPage5