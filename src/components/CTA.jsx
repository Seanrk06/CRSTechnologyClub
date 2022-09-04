import React from 'react'


  import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'

function CTA() {
  return (
    <div>
        {/* CTA Section */}
        <div className="relative bg-gray-900">
            <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
              <img
                className="h-full w-full object-cover"
                src="./assets/CTA.jpg"
                alt=""
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
              />
            </div>
            <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
              <div className="md:ml-auto md:w-1/2 md:pl-10">
                {/* <h2 className="text-lg font-semibold text-gray-300">Award winning support</h2> */}
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">We’re here to help</p>
                <p className="mt-3 text-lg text-gray-300">
                  Email us with any questions and make sure to scroll down below to find links to our socials.
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="mailto:technologyclub88@gmail.com"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      Email Us
                      <ArrowTopRightOnSquareIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default CTA