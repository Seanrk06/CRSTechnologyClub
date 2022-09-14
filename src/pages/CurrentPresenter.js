import React from 'react'
import CurrentPresenterList from '../components/CurrentPresenterList'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

function CurrentPresenter() {
  return (
    <div>
        <Navbar/>
        <Header
        heading="Current Presenter"
        text="Check out our presenter for this month below."
        />
        <CurrentPresenterList/>
        <Footer/>
    </div>
  )
}

export default CurrentPresenter