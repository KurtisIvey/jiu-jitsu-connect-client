import React, { useState, FormEvent } from "react";
import { BsCheck, BsTrash3 } from "react-icons/bs";
import ProfileImageLink from "./ProfileImageLink";
import { Link } from "react-router-dom";
//redux
import { useSelector } from "react-redux";
import type { RootState } from "../reduxStore/store";

type Props = {
  fetchFriendRequests: () => Promise<void>;
  profileId: string;
  username: string;
  profilePicUrl?: string;
};

const PendingFriendRequest = (props: Props) => {
  const id = useSelector((state: RootState) => state.user.id);

  const handleFriendshipRequestResponse = async (
    e: FormEvent,
    response: string
  ) => {
    e.preventDefault();

    try {
      const apiResponse = await fetch(
        `https://jiu-jitsu-connect-backend.herokuapp.com/api/users/${id}/friend-request-handler`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.token}`,
          },
          body: JSON.stringify({
            requesterId: props.profileId,
            response,
          }),
        }
      );
      // left in case I need to diagnose error code from frontEnd
      //const res = await apiResponse.json();

      if (!apiResponse.ok) {
        throw new Error("Failed to update friendship request");
      }

      // friendRequests refreshed via calling fetchFriendRequests
      props.fetchFriendRequests();
    } catch (error) {
      console.error(error);
      // display an error message to the user
    }
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center  w-full">
        <div className="flex flex-row items-center">
          <ProfileImageLink
            profileUsername={props.username}
            profileId={props.profileId}
            profilePicUrl={props.profilePicUrl}
          />
          <Link
            to={`/profile/${props.profileId}`}
            className="ml-2 text-sm sm:text-base hover:underline cursor-pointer text-green-500 "
          >
            {props.username}
          </Link>
        </div>
        <div className="flex flex-row space-x-9 mr-5 items-center justify-center">
          <form onSubmit={(e) => handleFriendshipRequestResponse(e, "accept")}>
            <button type="submit" aria-label="approve friend request button">
              <BsCheck className="scale-[177%] sm:scale-[250%] hover:text-green-500 cursor-pointer" />
            </button>
          </form>
          <form onSubmit={(e) => handleFriendshipRequestResponse(e, "deny")}>
            <button type="submit" aria-label="deny friend request button">
              <BsTrash3 className="scale-[100%] sm:scale-[140%] hover:text-red-500 cursor-pointer" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PendingFriendRequest;
