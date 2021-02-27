import React from 'react';
import { Link } from 'react-router-dom';
import { getTokenWithExpiry } from '../../api/helpers/HandleToken';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
            >
              War9a Platform
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i style={{ fontSize: 20 }} className="fas fa-bars" />
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none${
              navbarOpen ? ' block' : ' hidden'
            }`}
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {!getTokenWithExpiry() && (
              <li className="flex items-center">
                <a href="/signin">
                  <button
                    className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Login
                  </button>
                </a>
              </li>
              )}
              {getTokenWithExpiry() && (
              <li className="flex items-center">
                <a href="/admin/dashboard">
                  <button
                    className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Dashboard
                  </button>
                </a>
              </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
