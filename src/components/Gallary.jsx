import React from 'react'

const files = [
    {
      name: 'Mr. Horanzy (Electrical Engineer)',
      size: 'April 28, 2022',
      source:
        './assets/Horanzy1.jpg',
    },
    {
      name: 'Mr. Horanzy (Electrical Engineer)',
      size: 'April 28, 2022',
      source:
        './assets/Horanzy3.jpg',
    },
    {
      name: 'Mr. Chen (Systems engineer)',
      size: 'May 26, 2022',
      source:
        './assets/Chen1.jpg',
    },
    {
      name: 'Mr. Chen (Systems engineer)',
      size: 'May 26, 2022',
      source:
        './assets/Chen2.jpg',
    },
    {
      name: 'Mr. Brand (Aerospace engineer)',
      size: 'September 22, 2022',
      source:
        './assets/Brand1.jpg',
    },
    {
      name: 'Mr. Brand (Aerospace engineer)',
      size: 'September 22, 2022',
      source:
        './assets/Brand2.jpg',
    },
    {
      name: 'Mr. Jose (Chemical engineer)',
      size: 'October 13, 2022',
      source:
        './assets/Jose1.jpg',
    },
    {
      name: 'Mrs. Alex (Aeronautics/Electical engineer)',
      size: 'November 11, 2022',
      source:
        './assets/Alex1.jpg',
    },

    // More files...
  ]

function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}

function Gallary() {
  return (
    <div>
        {/* Feature section with grid */}
        <div className="relative bg-white py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              {/* <h2 className="text-lg font-semibold text-cyan-600"></h2> */}
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Past Events
              </p>
              <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                Each picture was taken at one of the meetings we had throughout the time our club has run.
              </p>
              <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
                  <h2 id="gallery-heading" className="sr-only">
                    Recently viewed
                  </h2>
                  <ul
                    className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
                  >
                    {files.map((file) => (
                      <li key={file.name} className="relative">
                        <div
                          className={classNames(
                            file.current
                              ? 'ring-2 ring-offset-2 ring-gray-900'
                              : 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-black',
                            'group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden'
                          )}
                        >
                          <img
                            src={file.source}
                            alt=""
                            className={classNames(
                              file.current ? '' : 'group-hover:opacity-75',
                              'object-cover pointer-events-none'
                            )}
                          />
                          <form action={file.source}>
                            <button type="submit" className="absolute inset-0 focus:outline-none">
                              <span className="sr-only">View details for {file.name}</span>
                            </button>
                          </form>
                        </div>
                        <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                          {file.name}
                        </p>
                        <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p>
                      </li>
                    ))}
                  </ul>
                </section>
            </div>
          </div>
    </div>
  )
}

export default Gallary