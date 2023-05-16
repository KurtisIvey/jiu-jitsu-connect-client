import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillGearFill, BsCalendar3 } from "react-icons/bs";
import { FaUser, FaUsers, FaUserPlus, FaHome, FaVideo } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { FcCollapse } from "react-icons/fc";
//redux
import type { RootState } from "../reduxStore/store";
import { useSelector, useDispatch } from "react-redux";
import { resetUser } from "../reduxStore/slices/userSlice";

type Props = {};

const Navbar = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const username = useSelector((state: RootState) => state.user.username);
  const id = useSelector((state: RootState) => state.user.id);
  const profilePicUrl = useSelector(
    (state: RootState) => state.user.profilePicUrl
  );

  const [open, setOpen] = useState(false);

  const handleSignOut = () => {
    // clears both jwt token and redux persist on logout
    dispatch(resetUser());
    localStorage.clear();
    alert("Sign out Successful");
    navigate("/");
  };

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 lg:px-[15vw] shadow-md ">
      <div className="container grid grid-cols-2 sm:grid-cols-3 items-center  mx-auto">
        <Link to="/home" className="flex items-center">
          <h1 className=" text-xl sm:text-2xl lg:text-4xl font-semibold text-blue-500 tracking-wider justify-self-start">
            Jiu Jitsu Connect
          </h1>
        </Link>
        <div className="hidden sm:grid grid-cols-3 justify-center space-x-5 text-xs">
          <Link
            to={"/home"}
            className=" flex flex-col items-center justify-center hover:scale-110 transition-all duration-150 ease-in-out "
          >
            <FaHome size={25} className="text-blue-500 mb-[.5px]" />
            <p className="text-gray-700/80">Home</p>
          </Link>
          <Link
            to={"/calendar"}
            className="flex flex-col items-center justify-center hover:scale-110 transition-all duration-150 ease-in-out"
          >
            <BsCalendar3 size={24} className="text-blue-500 mb-[.5px]" />
            <p className="text-gray-700/80">Calendar</p>
          </Link>
          <Link
            to={"#"}
            onClick={() => alert("video page coming soon")}
            className="flex flex-col items-center justify-center hover:scale-110 transition-all duration-150 ease-in-out"
          >
            <FaVideo size={25} className="text-blue-500 mb-[.5px]" />
            <p className="text-gray-700/80">videos</p>
          </Link>
        </div>
        <div className="flex items-center justify-self-end ">
          {/* open close effect based on entering and exiting */}
          <div
            className="cursor-pointer flex relative mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 "
            id="user-menu-button"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            aria-expanded={open ? "true" : "false"}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-9 h-9 rounded-full border border-grey-500 hover:scale-125 transition-all duration-100 ease-in-out object-cover"
              src={
                profilePicUrl
                  ? profilePicUrl
                  : "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2019/10/blank-person-icon-9.jpg"
              }
              alt="user photo"
            />
            {/* arrow to indicate drop down exists and state of it */}
            <div className="absolute rounded-full bg-gray-200 bottom-[-2px] right-[-1px] border border-white">
              <FcCollapse
                className={`${
                  open ? "rotate-180 " : "rotate-0"
                } transition-all duration-200 ease-in-out`}
              />
            </div>
            {/*<!-- Dropdown menu -->*/}

            <div
              className={`z-50 ${
                !open && "hidden"
              } my-4 text-base list-none bg-[rgb(255,255,255)] border border-[rgb(238,238,238)] divide-y
               divide-gray-100 rounded-lg shadow-md absolute top-[23px] right-[0px] w-[180px] cursor-default `}
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
