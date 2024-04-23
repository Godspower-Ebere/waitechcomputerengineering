import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiInfo, FiMail, FiTool } from "react-icons/fi"; // Importing react icons for the example
import { AiOutlineMenu } from "react-icons/ai"; // Importing react icons for the example
import logo from "../assets/waitech logo png.png";
const Navbar = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar">
                <AiOutlineMenu
                  className="btn btn-square btn-ghost"
                  size={80}
                ></AiOutlineMenu>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 text-lg font-bold ml-[40%]  sm:ml-[60%] lg:ml-0">
              <img
                src={logo}
                alt="waitech computer Engineering"
                className="w-[170px]"
              />
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal text-[18px]">
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
                    <FiTool className="inline-block mr-2" />
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
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu text-2xl p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li className="mb-6">
              <NavLink exact to="/" activeClassName="active">
                <FiHome className="inline-block mr-2" />
                Home
              </NavLink>
            </li>
            <li className="mb-6">
              <NavLink to="/about" activeClassName="active">
                <FiInfo className="inline-block mr-2" />
                About us
              </NavLink>
            </li>
            <li className="mb-6">
              <NavLink to="/services" activeClassName="active">
                <FiTool className="inline-block mr-2" />
                Services
              </NavLink>
            </li>
            <li className="mb-6">
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
