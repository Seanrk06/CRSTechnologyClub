import React from 'react'

function PastPresenterList() {
  return (
    <div className='bg-gray-50 pt-9'>
        <div className="text-center mb-24">
            <p className="mt-1 pt-5 text-2xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
                Mr. Joe Horanzy
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            On April 28, 2022 we had Mr. Horanzy an electrical engineer who is currently a Principal Field Application Engineer at Infineon Technologies come in.To Download His Presentation <a className="underline" download="./assets/intro to EE.pptx" href="./assets/intro to EE.pptx">Click Here</a>
            </p>
        </div>
        <div className="text-center">
            <p className="mt-1 pt-5 text-2xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
                Mr. Allen Chen
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            On May 26, 2022 we had Mr. Chen who was the mars 2020 entry, descent, and landing lead at NASA's Jet Propulsion Laboratory Pasedena, CA virtually present. He is currently a systems engineer in the Entry, Descent, and Landing Systems and Advanced Technologies group. You can find more information on him here, <a  className="underline" href="https://mars.nasa.gov/people/profile/index.cfm?id=9167">Bio</a>.
            </p>
        </div>

    </div>
  )
}

export default PastPresenterList