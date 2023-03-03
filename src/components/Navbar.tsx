import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const profileMenu = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded sticky">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <h1 className=" text-3xl lg:text-4xl font-semibold text-blue-500">
            Odin-book
          </h1>
        </Link>
        <div className="flex items-center  border ">
          <div
            className="cursor-pointer flex relative mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 border border-red-600"
            id="user-menu-button"
            onClick={() => {
              setOpen(!open);
            }}
            aria-expanded={open ? "true" : "false"}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="user photo"
            />
            {/*       <!-- Dropdown menu -->*/}
            <div
              ref={profileMenu}
              className={`z-50 ${
                !open && "hidden"
              } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-[19.5px] right-[0px] w-[180px] cursor-default`}
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
                    View User Profile
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Friends
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Friend Requests
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
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
