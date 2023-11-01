/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";

const MeetTheTeam = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-white">
            Meet The Team
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
          </div>
        </div>
        <div className="flex -m-4">
          <div className="xl:w-1/2 md:w-1/2 p-12">
            <div className="border border-gray-200 p-6 rounded-lg shadow-xl">
              <Image
                className="rounded-full w-60 h-60 max-w-lg mx-auto object-cover"
                src="/Aliya.jpg" width={100}
                height={100}
                alt="image description">
              </Image>
              <br></br>
              <h2 className="text-lg text-white font-medium title-font">Aliya Salmanova</h2>
              <h3 className="text-md text-white font-light mb-2">Software Engineer</h3>
              <div className="sm:ml-auto sm:mt-0 mt-4 flex">
                <a href="https://www.linkedin.com/in/aliya-salmanova-4150711b6/">
                  <svg
                    fill="white"
                    className="w-5 h-5 mr-3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
                <a href="https://github.com/AliyaSalmanova1">
                  <svg
                    fill="white"
                    className="m1-3 w-5 h-5"
                    viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 md:w-1/2 p-12">
            <div className="border border-gray-200 p-6 rounded-l shadow-xl">
              <Image
                className="rounded-full w-60 h-60 max-w-lg mx-auto object-cover"
                src="/Edmund.png"
                width={100}
                height={100}
                alt="image description">
              </Image>
              <br></br>
              <h2 className="text-lg text-white font-medium title-font">Edmund Wong</h2>
              <h3 className="text-md text-white font-light mb-2">Software Engineer</h3>
              <div className="sm:ml-auto sm:mt-0 mt-4 flex">
                <a href="https://www.linkedin.com/in/edmund-wong-8a0201291/">
                  <svg
                    fill="white"
                    className="w-5 h-5 mr-3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
                <a href="https://github.com/EmunW">
                  <svg
                    fill="white"
                    className="m1-3 w-5 h-5"
                    viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 md:w-1/2 p-12">
            <div className="border border-gray-200 p-6 rounded-lg shadow-xl">
              <Image
                className="rounded-full w-60 h-60 max-w-lg mx-auto object-cover"
                src="/Nassim.jpg"
                width={100}
                height={100}
                alt="image description"></Image>
              <br></br>
              <h2 className="text-lg text-white font-medium title-font">Nassim Bahet</h2>
              <h3 className="text-md text-white font-light mb-2">Software Engineer</h3>
              <div className="sm:ml-auto sm:mt-0 mt-4 flex">
                <a href="https://www.linkedin.com/in/nassimbahet/">
                  <svg
                    fill="white"
                    className="w-5 h-5 mr-3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
                <a href="https://github.com/nassimBahet">
                  <svg
                    fill="white"
                    className="m1-3 w-5 h-5"
                    viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 md:w-1/2 p-12">
            <div className="border border-gray-200 p-6 rounded-lg shadow-xl">
              <Image
                className="rounded-full w-60 h-60 max-w-lg mx-auto object-cover"
                src="/Sohum.jpg"
                width={100}
                height={100}
                alt="image description">
              </Image>
              <br></br>
              <h2 className="text-lg text-white font-medium title-font">Sohum Dalal</h2>
              <h3 className="text-md text-white font-light mb-2">Software Engineer</h3>
              <div className="sm:ml-auto sm:mt-0 mt-4 flex">
                <a href="https://www.linkedin.com/in/sohum-dalal-985076a6/">
                  <svg
                    fill="white"
                    className="w-5 h-5 mr-3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
                <a href="https://github.com/sohumdalal">
                  <svg
                    fill="white"
                    className="m1-3 w-5 h-5"
                    viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
