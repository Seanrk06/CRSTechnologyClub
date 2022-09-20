import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CustomEmail from '../components/joinEmailList/customEmail'
import Navbar from '../components/Navbar'


function JoinCanvasPage() {


  return (
    <div>
      <Navbar/>
      <Header
      heading="Join Our Canvas Page!"
      text="Please fill out the information below and click the button."
      />
      <CustomEmail/>
      <Footer/>
    </div>
  )
}

export default JoinCanvasPage