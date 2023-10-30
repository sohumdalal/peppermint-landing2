"use client";
import React from "react";

import { useScrollPosition } from "@/hooks/useScrollPosition";

const Header = () => {
  const scrollPosition = useScrollPosition();
  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrollPosition > 0
          ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter"
          : "shadow-none"
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <a className="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0 ">
          <h1 className="ml-3 text-xl">PepperMint</h1>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        </nav>
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
      </div>
    </header>
  );
};

export default Header;
