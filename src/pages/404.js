export default function PageNotFound() {
  return (
    <>

      <div className="flex min-h-full flex-col  pt-16 pb-12 text-center">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center ">
            <a href="/" className="inline-flex">
              <span className="sr-only">Technology Club</span>
              <h1 className='font-Roboto text-white text-3xl mb-32'>Technology Club</h1>
            </a>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-base font-semibold text-white">404</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Page not found.</h1>
              <p className="mt-2 text-base text-white">Sorry, we couldn’t find the page you’re looking for.</p>
              <div className="mt-6">
                <a href="/" className="text-base font-medium text-white hover:text-blue-600">
                  Go back home
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </main>
        <footer className="relative -bottom-64 sm:-bottom-52 mx-auto w-full max-w-7xl flex-shrink-0 px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-4">
            <a href="mailto:technologyclub88@gmail.com" className="text-sm font-medium text-gray-500 hover:text-gray-600">
              Contact Support
            </a>
            <span className="inline-block border-l border-gray-300" aria-hidden="true" />
            <a href="https://technologyclub88.github.io/TechnologyClubStatus/" className="text-sm font-medium text-gray-500 hover:text-gray-600">
              Status
            </a>
            <span className="inline-block border-l border-gray-300" aria-hidden="true" />
            <a href="https://instagram.com/technology_clubcrs?igshid=YmMyMTA2M2Y=" className="text-sm font-medium text-gray-500 hover:text-gray-600">
              Instagram
            </a>
          </nav>
        </footer>
      </div>
    </>
  )
}
