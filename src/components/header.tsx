"use client";
import React from "react";

import { useScrollPosition } from "@/hooks/useScrollPosition";

const Header = () => {
  const scrollPosition = useScrollPosition();
  return (

    <header
      className={`sticky top-0 z-50 transition-shadow ${scrollPosition > 0
        ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter"
        : "shadow-none"
        }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <a className="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0 ">


          {/* <svg
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 864 864"
            style={{ enableBackground: "new 0 0 864 864" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <style type="text/css">
              .st0{fill: #C1272D;}
              .st1{fill: #FFFFFF;}
            </style>
            <circle className="st0" cx="432.3" cy="432.9" r="377" style={{ fill: "rgb(2, 133, 205)" }} />
            <path
              className="st1"
              d="M686.1,154.8c-15.3,7.2-32.6,14.4-44.7,23C557.6,238.3,493.8,316,447,407.9c-0.8,1.7-3.6,3.9-4.7,3.6 c-2.1-0.7-4.9-2.9-5.2-4.8c-5.4-34.6-12.2-69.1-15.1-103.9c-4-47.8,6.4-94.5,16.9-140.8c-7.7-33.8,17.2-70.1,26.2-104.3 c-10.9-1-22-1.4-33.2-1.4c-74.3,0-143.5,21.5-201.9,58.6c37.3,114.5,101.2,216.6,189,302.6c-5.5,2-9.3,4.8-12.6,4.3 c-17-2.8-33.9-6.4-50.8-10c-68-14.2-131.6-40.2-191.7-74.5c-24.3-13.9-55.7-30-81.3-46.1C64.9,335,55,383,55,433.2 c0,35,4.8,68.9,13.7,101.1c39.3,5.7,85.2-1.1,123.3-8.9c-61.3-12.5,119.7-34.5,176.9-59.4c-18.7-8.1,37.3-16.4,58.1-25.5 c-4.5,9.9-7.9,17.2-11.3,24.5c-20.9,45.9-46.5,88.7-80.4,126.5c-36.6,40.7-79.1,74.6-121.9,108.2c-8.1,6.4-16.3,12.7-26.2,20.4 c60.5,51.7,137.5,84.5,222.1,89.5c20.4-50.8,33.4-103.4,38.5-158c5.3-57.3,13-114.4,3-172c-1.7-10-2.9-20.2-4.1-29.1 c15.5,13.9,31.6,26.9,45.9,41.6c37.3,38.4,62.9,85,87.1,131.9c-65.5-54.6-142-87.7-224-109.1c-32.2-8.4-65.9-11.2-98.8-17c-3.2-0.6-5.8-4-8.7-6.1 c2.4-2.1,4.5-5,7.3-6.3 c11.9-5.3,24.4-9.3,36-15.2c67.8-34.9,140.7-49,216-53.2c-28.1-1.6-56.2-1.9-84.2-3.8 c0.1,0,0.2,0,0.3,0 C782.2,273,741.8,205.6,686.1,154.8z"
              style={{ fill: "rgb(0, 204, 250)" }}
            />
          </svg> */}






          <h1 className="ml-3 text-4xl">PepperMint</h1>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        </nav>
        <a href="https://github.com/oslabs-beta/PepperMint">
          <button className="inline-flex items-center bg-white text-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 hover:text-white rounded text-base mt-4 md:mt-0">
            Github
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;


