import React, { useState, FormEvent } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { FiUserX } from "react-icons/fi";
import ProfileImageLink from "./ProfileImageLink";
import { Link } from "react-router-dom";
//redux
import type { RootState } from "../reduxStore/store";
import { useSelector } from "react-redux";
type Props = {
  fetchFriends?: Function;
  profileId: string;
  username: string;
  profilePicUrl?: string;
  visiting?: boolean;
};

const Friend = (props: Props) => {
  const userId = useSelector((state: RootState) => state.user.id);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleUnfriend = async (e: FormEvent) => {
    e.preventDefault();
    console.log("delete friend");
    try {
      const response = await fetch(
        `https://jiu-jitsu-connect-backend.herokuapp.com/api/users/${userId}/friends`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.token}`,
          },
          body: JSON.stringify({
            unfriendId: props.profileId,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to create post");
      }
      setModalOpen(false);
      props.fetchFriends && props.fetchFriends();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-row items-center  p-1">
        <ProfileImageLink
          profileId={props.profileId}
          profileUsername={props.username}
          profilePicUrl={props.profilePicUrl}
        />

        <Link
          to={`/profile/${props.profileId}`}
          className="ml-2 text-sm sm:text-base hover:underline cursor-pointer text-blue-500"
        >
          {props.username}
        </Link>
      </div>
      <div
        className={`mr-2 relative
          cursor-pointer`}
      >
        {props.visiting !== true && (
          <>
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
          </>
        )}
      </div>
    </>
  );
};

export default Friend;
