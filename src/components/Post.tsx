import React, { FormEvent, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { TbPencilPlus } from "react-icons/tb";
import { BiCommentAdd } from "react-icons/bi";
import Comments from "./Comments";
import { Link } from "react-router-dom";
import Like from "./Like";

type Props = {
  id: string;
  author: any;
  postContent: string;
  timestamp: string;
};

function Post(props: Props) {
  const [commentContent, setCommentContent] = useState("");

  const convertDateandTime = () => {
    //2023-04-11T15:28:44.981Z
    const formatted = new Date(props.timestamp).toString();
    const timeFormat = formatted.slice(16, 21);

    //Tue Apr 11 2023 10:28:44 GMT-0500 (Central Daylight Time)
    return `${formatted.slice(0, 16)} at ${timeFormat}`;
    //21
  };

  const handleCommentContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentContent(e.target.value);
  };

  const handleSubmitComment = async (e: FormEvent) => {
    e.preventDefault();
    console.log(commentContent);

    /* const response = await fetch(`http://localhost:3001/api/posts/${id}/like`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: window.localStorage.token,
      },
    }); */
    setCommentContent("");
  };

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
            <p>{convertDateandTime()}</p>
          </div>
        </div>
        {/* post content */}
        <p className="text-sm">{props.postContent}</p>
        {/* number of likes and comments */}

        {/* like button */}
        <Like id={props.id} />
        <div className="border-b" />
        {/* write comment section */}
        <form
          className="flex space-x-2 mx-4"
          onSubmit={(e) => handleSubmitComment(e)}
        >
          <img
            className="rounded-full  h-6 w-6 border-white border-2"
            src="https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg"
            alt="user photo"
          />
          <input
            onChange={(e) => handleCommentContent(e)}
            className="rounded-full bg-gray-100 w-full pl-3 text-xs outline-blue-200"
            placeholder="Write a comment..."
            type="text"
            aria-label="write a comment"
            value={commentContent}
          />
          <button type="submit">
            <BiCommentAdd className="h-5 w-5 hover:text-blue-500 hover:scale-110 transition-all duration-150 ease-in-out" />
          </button>
        </form>
        <Comments />
      </div>
    </section>
  );
}

export default Post;
