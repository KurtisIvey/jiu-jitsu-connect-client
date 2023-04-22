import React, { useState, FormEvent, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import Friend from "./Friend";
import { FaRegWindowClose } from "react-icons/fa";

type Props = {
  username?: string;
  friends?: {
    username: string;
    _id: string;
    profilePicUrl?: string;
  }[];
};

const FriendListModal = ({ username = "", friends = [] }: Props) => {
  const [open, setOpen] = useState(false);
  const friendListRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setOpen(false);
  };

  /* detects changing of profile and auto closes modal when navigating to dif profile */
  const location = useLocation();
  useEffect(() => {
    handleClose();
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        friendListRef.current &&
        !friendListRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section className="relative  mt-1" ref={friendListRef}>
      <div className="flex items-center">
        {/* header that also functions as way to open friendsList */}
        {friends.length === 0 ? (
          <h3 className="text-lg text-center mx-auto"> 0 friends</h3>
        ) : (
          <h3
            className="text-lg underline text-center text-blue-500 cursor-pointer 
          mx-auto hover:scale-[107%] transition-all duration-100 ease-in-out"
            onClick={() => setOpen(!open)}
            aria-label="open create post"
          >
            <span aria-label={`${username} has ${friends.length} friends`}>
              {friends.length} Friends
            </span>
          </h3>
        )}
      </div>
      {/* modal section */}
      <div
        className={`flex flex-col text-gray-800 border bg-white border-gray-300 rounded-lg
         p-4 shadow-md max-w-2xl absolute w-[250px]  -translate-x-1/2 
         left-1/2 top-[-50px] z-10 space-y-3 ${
           !open && "hidden"
         } h-fit max-h-[400px] ${friends.length > 3 && "overflow-y-scroll"}`}
      >
        {/* top row of modal with close button */}
        <div className="flex justify-between items-center">
          <div>{username}'s friends</div>

          <FaRegWindowClose
            onClick={handleClose}
            size={25}
            className="text-blue-500 hover:text-blue-600/85 hover:scale-110 cursor-pointer transition-all duration-150 ease-in-out"
          />
        </div>
        {/* populated current friends */}
        {friends.map((friend) => {
          return (
            <div
              key={friend._id}
              className=" rounded-md border border-grey-400 flex flex-row justify-between items-center p-1 "
            >
              {/* encase img and a tag in same Link */}
              <Friend
                profileId={friend._id}
                username={friend.username}
                profilePicUrl={friend.profilePicUrl}
                visiting={true}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FriendListModal;
