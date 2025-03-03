import React from 'react'

const PeppermintFeatures = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-5xl text-2xl font-medium title-font text-white mb-4">
            Lets Get Fast, <i>Fast</i>.
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center ">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-blue-500 mb-5 flex-shrink-0">
              <svg
                fill="none"
                stroke="rgb(2,133,205,1)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3 text-white">
                Optimize Your Time
              </h2>
              <p className="leading-relaxed text-base text-white border border-gray-200 p-6 rounded-lg shadow-xl">
                PepperMint’s UI enables engineers to build tests with simple clicks, saving precious engineering time and recourses. With JEST built-in, PepperMint is optimized for speed and accuracy.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 mb-5 flex-shrink-0">
              <svg
                fill="none"
                stroke="rgb(2,133,205,1)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3 text-white">
                Easy Import/Export
              </h2>
              <p className="leading-relaxed text-base text-white border border-gray-200 p-6 rounded-lg shadow-xl">
                PepperMint allows you to import components fast, kicking off our robust parsing algorithm. You can finalize your test build, and add it right back into your file structure.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white mb-5 flex-shrink-0">
              <svg
                fill="none"
                stroke="rgb(2,133,205,1)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3 text-white">
                Open Source
              </h2>
              <p className="leading-relaxed text-base text-white border border-gray-200 p-6 rounded-lg shadow-xl">
                PepperMint is designed for the community, by the community. We are ready for contributions! Please reference our Github page for more information on the who, what, when.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PeppermintFeatures