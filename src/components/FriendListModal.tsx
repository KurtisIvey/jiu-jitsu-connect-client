import React, { useState, FormEvent, useEffect, useRef } from "react";
import Friend from "./Friend";

type Props = {
  friends?: {
    username: string;
    _id: string;
    profilePicUrl: string | undefined;
  }[];
};

const FriendListModal = (props: Props) => {
  const [open, setOpen] = useState(false);
  const friendListRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="relative  mt-1" ref={friendListRef}>
      <div className="flex items-center border">
        <h3
          className="text-lg  text-center text-blue-400 cursor-pointer mx-auto hover:scale-110 transition-all duration-100 ease-in-out"
          onClick={() => setOpen(!open)}
          aria-label="open create post"
        >
          {props.friends?.length} Friends
        </h3>
      </div>

      <div
        className={`flex flex-col text-gray-800 border bg-white border-gray-300 rounded-lg p-4 shadow-md max-w-2xl absolute w-[350px] lg:w-[500px] -translate-x-1/2 left-1/2 top-[-120px] z-10 ${
          !open && "hidden"
        } `}
      >
        {props.friends?.map((friend) => {
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
