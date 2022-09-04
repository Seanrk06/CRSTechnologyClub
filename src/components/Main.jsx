import React, {useState} from 'react'
import {MailchimpForm} from './customForm';
import ErrorAlert from './errorAlert';
import LoadingAlert from './loadingAlert';
import SucessAlert from './sucessAlert';


function Main(props) {
  // For setting stae of alert (is passed to mailchimpform child then to customformchild)
  const [errorState, setErrorState] = useState(false)
  const [sucessState, setSucessState] = useState(false)
  const [loadingState, setLoadingState] = useState(false)



  console.log(errorState)
  return (
    <div>
        <div>{errorState ? <ErrorAlert/> : null}</div>
        <div>{sucessState ? <SucessAlert/> : null}</div>
        <div>{loadingState ? <LoadingAlert/> : null}</div>
        <div className="bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">Welcome To The CRS Technology Club Website!</span>
                    <span className="block bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5">
                      Picture
                    </span>
                  </h1>
                  <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                  The goal of this club is to increase student understanding of modern technology through discussion groups, demonstrations, and hands-on experiences.  Membership is open to all students in grades 9-12 who are interested in working on experiments and projects.  Student projects are often displayed in the school showcase. Meetings are held monthly.
                  </p>
                  <p className='mt-2 text-base text-gray-400 sm:text-xl lg:text-lg xl:text-xl'>To be updated on the latest news and events join our newsletter below!</p>
                  
                  {/* MailChimp Form */}
                  <MailchimpForm setSucessState={setSucessState} setErrorState={setErrorState} setLoadingState={setLoadingState}/>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main