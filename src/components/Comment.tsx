import React from "react";
import { convertDateTime } from "../helpers/ConvertDateTime";

type Props = {
  id: string;
  author: {
    id: string;
    username: string;
    profilePicUrl: null | string;
  };
  commentContent: string;
  timestamp: string;
};

const Comment = (props: Props) => {
  return (
    <section className="flex space-x-2 mx-4">
      <img
        className="rounded-full  h-6 w-6 border-white border-2 mt-1"
        src={
          props.author.profilePicUrl
            ? props.author.profilePicUrl
            : "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2019/10/blank-person-icon-9.jpg"
        }
        alt="user photo"
      />
      <div className="rounded-lg bg-gray-100 w-full text-xs p-2 flex flex-col text-black">
        {/* name and date/time */}
        <p className="w-full flex justify-between">
          <span className="font-semibold mr-2">{props.author.username}</span>
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
