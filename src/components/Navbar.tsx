import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsFillGearFill } from "react-icons/bs";
import { FaUser, FaUsers, FaUserPlus } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

//redux
import type { RootState } from "../reduxStore/store";
import { useSelector } from "react-redux";

type Props = {};

const Navbar = (props: Props) => {
  const username = useSelector((state: RootState) => state.user.username);
  const id = useSelector((state: RootState) => state.user.id);

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleSignOut = () => {
    // clears both jwt token and redux persist on logout
    localStorage.clear();
    alert("Sign out Successful");
    navigate("/");
  };

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/home" className="flex items-center">
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
              className="w-9 h-9 rounded-full hover:border hover:border-grey-500 hover:scale-125 transition-all duration-100 ease-in-out"
              src="https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg"
              alt="user photo"
            />
            {/*<!-- Dropdown menu -->*/}
            <div
              className={`z-50 ${
                !open && "hidden"
              } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-md absolute top-[23px] right-[0px] w-[180px] cursor-default `}
              id="user-dropdown"
            >
              <div className="px-4 py-3 flex flex-col space-y-1 items-start">
                <span className="block text-sm text-gray-900 ">{username}</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link
                    to={`/profile/${id}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-150 ease-in-out"
                  >
                    <FaUser className="inline mb-[.3px] mr-2" />
                    View User Profile
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-150 ease-in-out"
                  >
                    <BsFillGearFill className="inline mb-[.3px] mr-2" />
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/friends"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-150 ease-in-out"
                  >
                    <FaUsers className="inline mb-[.3px] mr-2" />
                    Friends
                  </Link>
                </li>
                <li>
                  <Link
                    to="/friend-requests"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-150 ease-in-out"
                  >
                    <FaUserPlus className="inline mb-[.3px] mr-2" />
                    Friend Requests
                  </Link>
                </li>
                <li>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={handleSignOut}
                  >
                    <FiLogOut className="inline mb-[.3px] mr-2" />
                    Sign out
                  </button>
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
