import React from "react";

const MainTitle = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            React Testing, <i>streamlined.</i>
          </h1>
          <div className="flex justify-center">
            <button className="inline-flex text-blue-500 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 hover:text-white rounded text-lg">
              Github
            </button>
            <button className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-blue-500  rounded text-lg">
              Download Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainTitle;
