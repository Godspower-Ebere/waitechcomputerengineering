import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiInfo, FiLayers, FiMail } from "react-icons/fi"; // Importing react icons for the example

const Navbar = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 text-lg font-bold text-u">
              Waitech
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <NavLink exact to="/" activeClassName="active">
                    <FiHome className="inline-block mr-2" />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" activeClassName="active">
                    <FiInfo className="inline-block mr-2" />
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" activeClassName="active">
                    <FiLayers className="inline-block mr-2" />
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="active">
                    <FiMail className="inline-block mr-2" />
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li>
              <NavLink exact to="/" activeClassName="active">
                <FiHome className="inline-block mr-2" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                <FiInfo className="inline-block mr-2" />
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" activeClassName="active">
                <FiLayers className="inline-block mr-2" />
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                <FiMail className="inline-block mr-2" />
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
