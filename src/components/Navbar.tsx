import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillGearFill } from "react-icons/bs";
import { FaUser, FaUsers, FaUserPlus } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

type Props = {};

const Navbar = (props: Props) => {
  const profileMenu = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <h1 className=" text-3xl lg:text-4xl font-semibold text-blue-500 tracking-wider">
            Odin-book
          </h1>
        </Link>
        <div className="flex items-center ">
          <div
            className="cursor-pointer flex relative mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 "
            id="user-menu-button"
            onClick={() => setOpen(!open)}
            aria-expanded={open ? "true" : "false"}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-9 h-9 rounded-full hover:border hover:border-grey-500 hover:scale-125"
              src="https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg"
              alt="user photo"
            />
            {/*<!-- Dropdown menu -->*/}
            <div
              ref={profileMenu}
              className={`z-50 ${
                !open && "hidden"
              } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-[23px] right-[0px] w-[180px] cursor-default`}
              id="user-dropdown"
            >
              <div className="px-4 py-3 flex flex-col space-y-1 items-start">
                <span className="block text-sm text-gray-900 ">
                  Bonnie Green
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link
                    to=""
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FaUser className="inline mb-[.3px] mr-2" />
                    View User Profile
                  </Link>
                </li>
                <li className="">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <BsFillGearFill className="inline mb-[.3px] mr-2" />
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FaUsers className="inline mb-[.3px] mr-2" />
                    Friends
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FaUserPlus className="inline mb-[.3px] mr-2" />
                    Friend Requests
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FiLogOut className="inline mb-[.3px] mr-2" />
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
