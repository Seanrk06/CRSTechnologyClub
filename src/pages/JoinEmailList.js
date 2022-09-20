import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CustomEmail from '../components/joinEmailList/customEmail'
import Navbar from '../components/Navbar'


function JoinEmailList() {


  return (
    <div>
      <Navbar/>
      <Header
      heading="Join Our Email List!"
      text="No obligations and you can unsubscribe anytime."
      />
      <CustomEmail/>
      <Footer/>
    </div>
  )
}

export default JoinEmailList