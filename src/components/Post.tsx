import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import Like from "./Like";
import { convertDateTime } from "../helpers/ConvertDateTime";
import CommentContainer from "./CommentContainer";
import ProfileImageLink from "./ProfileImageLink";
import { FaRegTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../reduxStore/store";

type Props = {
  id: string;
  author: any;
  postContent: string;
  timestamp: string;
  likes: string[];
};

function Post(props: Props) {
  const loggedInUserId = useSelector((state: RootState) => state.user.id);

  return (
    <section className="container  p-3 lg:p-0 lg:mx-0 flex flex-col ">
      <div className="mx-2 lg:mx-0 shadow-lg p-2 rounded-lg bg-white space-y-2">
        {/*top row of post, image name, date*/}
        <div className="flex flex-row  relative ">
          {/* delete btn */}
          {loggedInUserId === props.author._id && (
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-600 hover:text-red-700"
              aria-label="delete post"
            >
              <FaRegTrashAlt />
            </button>
          )}
          <ProfileImageLink
            profilePicUrl={props.author.profilePicUrl}
            profileId={props.author._id}
            profileUsername={props.author.username}
          />

          {/* name and date */}
          <div className="text-xs tracking-wider font-semibold">
            <Link
              to={`/profile/${props.author._id}`}
              className="hover:text-blue-600 ml-[.3px] hover:underline"
              aria-label={`link to user ${props.author.username} profile`}
            >
              {props.author.username}
            </Link>
            <p>{convertDateTime(props.timestamp)}</p>
          </div>
        </div>
        {/* post content */}
        <p className="text-sm break-words">{props.postContent}</p>

        {/* like button number of likes */}
        <Like id={props.id} likes={props.likes} />
        <div className="border-b" />
        {/* write comment section and comments*/}
        <CommentContainer id={props.id} />
      </div>
    </section>
  );
}

export default Post;
