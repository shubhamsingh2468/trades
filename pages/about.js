/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
    return (
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">About us</h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            We provide trading facility for users.
          Trading is the buying and selling of securities, such as stocks, bonds, currencies and commodities, as opposed to investing, which suggests a buy-and-hold strategy. Trading success depends on a trader's ability to be profitable over time.
          </p>
        </div>
      </div>
    )
  }
  