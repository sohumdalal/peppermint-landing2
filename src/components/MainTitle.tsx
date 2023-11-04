import React from "react";

const MainTitle = () => {
  return (
    <section className="text-gray-600 body-font">
      <br></br>
      <br></br>
      <br></br>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-8xl text-8xl mb-4 font-medium text-white">
            React Testing. <i>streamlined.</i>
          </h1>
          <div className="flex justify-center">
            <a href="https://github.com/oslabs-beta/PepperMint">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-blue-500  rounded text-lg">
                Download Now (Mac)
              </button>
            </a>
            <a href="https://www.dropbox.com/scl/fi/4pmu05oakpc8huk4cn2zk/peppermint-win32-x64-1.0.0.zip?rlkey=bcacegtysqgaw60ecl6j7tbie&dl=1" download>
              <button className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-blue-500 rounded text-lg">
                Download Now (Windows)
              </button>
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
};

export default MainTitle;
