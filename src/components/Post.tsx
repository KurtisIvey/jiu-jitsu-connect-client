import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import Like from "./Like";
import { convertDateTime } from "../helpers/ConvertDateTime";
import CommentContainer from "./CommentContainer";

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
          <Link
            aria-label={`picture link to user ${props.author.username} profile`}
            to={`/profile/${props.author._id}`}
          >
            <img
              className="rounded-full  h-8 w-8 border-white border-2"
              src={
                props.author?.profilePicUrl
                  ? props.author.profilePicUrl
                  : "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2019/10/blank-person-icon-9.jpg"
              }
              alt="user photo"
            />
          </Link>

          {/* name and date */}
          <div className="text-xs tracking-wider font-semibold">
            <Link
              to={`/profile/${props.author._id}`}
              className="hover:text-blue-600"
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
