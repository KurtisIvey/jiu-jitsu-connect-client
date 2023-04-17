import React, { useState, FormEvent } from "react";
import { BsCheck, BsTrash3 } from "react-icons/bs";
import ProfileImageLink from "./ProfileImageLink";
import { Link } from "react-router-dom";

type Props = {
  profileId: string;
  username: string;
  profilePicUrl?: string;
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
          <ProfileImageLink
            widthHeight="10"
            profileUsername={props.username}
            profilePicUrl={props.profilePicUrl}
          />

          <Link
            to={`/profile/${props.profileId}`}
            className="ml-2 text-sm sm:text-base hover:underline cursor-pointer hover:text-blue-500 "
          >
            {props.username}
          </Link>
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
