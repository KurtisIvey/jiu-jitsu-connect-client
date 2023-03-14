import React, { useState, FormEvent } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { FiUserX } from "react-icons/fi";

type Props = {
  name: string;
  imgSrc: string;
};

const Friend = (props: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleUnfriend = (e: FormEvent) => {
    e.preventDefault();
    console.log("delete friend");
    /*     after submitting form to delete friend to backend, useNavigate to refresh friends page
     */
  };

  return (
    <>
      <div className="flex flex-row items-center ">
        <a href="">
          <img
            className=" rounded-md h-10 w-10 sm:h-14 sm:w-14 border-white border-2 "
            alt={props.name}
            src={props.imgSrc}
          />
        </a>
        <a className="ml-2 text-sm sm:text-base hover:underline cursor-pointer ">
          Link to {props.name}
        </a>
      </div>
      <div
        className={`mr-2 relative
          cursor-pointer`}
      >
        <div
          onClick={handleModal}
          className="p-2 rounded-full  hover:bg-gray-200"
        >
          <HiDotsHorizontal />
        </div>
        <form
          onSubmit={handleUnfriend}
          className={`absolute rounded-lg ${
            modalOpen ? "block bg-white" : "hidden"
          } border p-2 right-7 top-[-5px] shadow-xl`}
        >
          <button
            type="submit"
            className="flex items-center justify-center space-x-3 hover:text-red-500"
          >
            <FiUserX className="scale-125" />{" "}
            <span className="text-sm sm:text-base">unfriend</span>
          </button>
        </form>{" "}
      </div>
    </>
  );
};

export default Friend;
