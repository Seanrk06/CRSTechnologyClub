import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import PastPresenterList from '../components/PastPresenterList'

function PastPresenters() {
  return (
    <div>
        <Navbar/>
        <Header
        heading="All of our past presenters"
        text="List of all presenters from 2022-present"
        />
        <PastPresenterList/>
        <Footer/>
    </div>
  )
}

export default PastPresenters