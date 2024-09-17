import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className='bg-black min-h-screen'>
      <nav className="sticky top-0 bg-black border-gray-200 dark:bg-gray-900 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full "style={{ boxShadow: "rgba(80, 78, 78, 0.9) 5px 0px 10px 10px" }}>
            <span class="text-xl text-black font-bold ">K</span>
          </div>
          

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="bg-black hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="bg-black  font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black ">
              <li className="block py-2 px-5  rounded  text-gray-300 text-xl border-b-4 border-black rounded-full hover:border-yellow-500">
                <a
                  href="/#home"
                >
                  Home
                </a>
              </li>
              <li className="block py-2 px-5  rounded  text-gray-300 text-xl border-b-4 border-black rounded-full hover:border-yellow-500">
                <a
                  href="/#about"
                >
                  About
                </a>
              </li>
              <li className="block py-2 px-5  rounded  text-gray-300 text-xl border-b-4 border-black rounded-full hover:border-yellow-500">
                <a
                  href="/#experience"
                >
                  Experience
                </a>
              </li>
              <li className="block py-2 px-5  rounded  text-gray-300 text-xl border-b-4 border-black rounded-full hover:border-yellow-500">
                <a
                  href="/#skills"
                >
                  Skills
                </a>
              </li>
              <li className="block py-2 px-5  rounded  text-gray-300 text-xl border-b-4 border-black rounded-full hover:border-yellow-500">
                <a
                  href="/#project"
                >
                  Projects
                </a>
              </li>
              <li className="block py-2 px-5  rounded  text-gray-300 text-xl border-b-4 border-black rounded-full hover:border-yellow-500">
                <a
                  href="/#contact"
                >
                  Contact Us
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <div className="min-h-screen flex items-center justify-center">
        <Outlet />
      </div>

    </div>
  )
}

export default Navigation



