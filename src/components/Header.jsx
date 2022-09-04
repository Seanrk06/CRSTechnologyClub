export default function Header(props) {
    return (
      <div>
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {props.heading}
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              {props.text}
            </p>
          </div>
        </div>
      </div>
    )
  }
  