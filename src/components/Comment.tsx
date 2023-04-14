import React from "react";
import { convertDateTime } from "../helpers/ConvertDateTime";
import ProfileImageLink from "./ProfileImageLink";
import { Link } from "react-router-dom";

type Props = {
  id: string;
  author: {
    _id: string;
    username: string;
    profilePicUrl: null | string;
  };
  commentContent: string;
  timestamp: string;
};

const Comment = (props: Props) => {
  return (
    <section className="flex space-x-2 mx-4 items-center">
      <ProfileImageLink
        widthHeight="6"
        profilePicUrl={props.author.profilePicUrl}
        profileId={props.author._id}
        profileUsername={props.author.username}
      />

      <div className="rounded-lg bg-gray-100 w-full text-xs p-2 flex flex-col text-black">
        {/* name and date/time */}
        <p className="w-full flex justify-between">
          <Link
            to={`/profile/${props.author._id}`}
            className="hover:text-blue-600"
          >
            <span className="font-semibold mr-2">{props.author.username}</span>
          </Link>
          <span className="mr-1 font-semibold text-[.7rem]">
            {convertDateTime(props.timestamp)}
          </span>
        </p>
        <p>{props.commentContent}</p>
      </div>
    </section>
  );
};

export default Comment;
