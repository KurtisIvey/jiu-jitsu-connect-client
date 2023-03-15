import React, { useState, FormEvent } from "react";
import { BsCheck, BsTrash3 } from "react-icons/bs";

type Props = {
  name: string;
  imgSrc: string;
};

const PendingFriendRequest = (props: Props) => {
  const handleDenyFriendship = (e: FormEvent) => {
    e.preventDefault();
    console.log("deny friendship");
    /* refresh page via useNavigate */
  };
  const handleApproveFriendship = (e: FormEvent) => {
    e.preventDefault();
    console.log("approve friendship");
    /* refresh page */
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center  w-full">
        <div className="flex flex-row items-center">
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
        <div className="flex flex-row space-x-9 mr-5 items-center justify-center">
          <form onSubmit={handleApproveFriendship}>
            <button type="submit">
              <BsCheck className="scale-[177%] sm:scale-[250%] hover:text-green-500 cursor-pointer" />
            </button>
          </form>
          <form onSubmit={handleDenyFriendship}>
            <button type="submit">
              <BsTrash3 className="scale-[100%] sm:scale-[140%] hover:text-red-500 cursor-pointer" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PendingFriendRequest;
