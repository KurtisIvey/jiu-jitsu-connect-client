import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import Like from "./Like";
import { convertDateTime } from "../helpers/ConvertDateTime";
import CommentContainer from "./CommentContainer";
import ProfileImageLink from "./ProfileImageLink";

type Props = {
  id: string;
  author: any;
  postContent: string;
  timestamp: string;
  likes: string[];
};

function Post(props: Props) {
  return (
    <section className="container  p-3 lg:p-0 lg:mx-0 flex flex-col">
      <div className="mx-2 lg:mx-0 shadow-lg p-2 rounded-lg bg-white space-y-2">
        {/*top row of post, image name, date*/}
        <div className="flex flex-row space-x-2">
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
        <p className="text-sm">{props.postContent}</p>

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
