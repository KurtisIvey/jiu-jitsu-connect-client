import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";

type Props = {};

const CreatePost = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [postContent, setPostContent] = useState("");

  const handlePostContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
  };

  return (
    <div className="relative mx-auto ">
      <div>Create Post</div>
      <BsPlusCircle
        className="h-8 w-8 text-gray-600/90 cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-label="open create post"
      />
      <form
        className={`flex flex-col text-gray-800 border border-gray-300 rounded p-4 shadow-md max-w-2xl absolute w-[350px] lg:w-[500px] -translate-x-1/2 left-1/2 top-10 ${
          !open && "hidden"
        } `}
      >
        <textarea
          onChange={(e) => handlePostContent(e)}
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          placeholder="Describe everything about this post here"
        ></textarea>
        {/* <!-- icons --> */}
        <div className="icons flex text-gray-500 m-2">
          <div className="count ml-auto text-gray-400 text-xs font-semibold">
            {postContent.length}/600
          </div>
        </div>
        {/*     <!-- buttons -->
         */}{" "}
        <div className="buttons flex">
          <div
            className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
            onClick={() => setOpen(!open)}
          >
            Cancel
          </div>
          <button
            type="submit"
            className="btn border border-blue-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-blue-500"
            aria-label="create post"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
