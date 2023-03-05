import React, { useState, FormEvent } from "react";
import { TbPencilPlus } from "react-icons/tb";

type Props = {};

const CreatePostHome = (props: Props) => {
  const [postContent, setPostContent] = useState("");

  const handlePostContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(postContent);
    setPostContent("");
    // send post req to api
  };
  return (
    <section className="container  p-3 lg:p-0 lg:mx-0 flex flex-col">
      <div className="mx-2 lg:mx-0 shadow-lg p-2 rounded-lg bg-white space-y-2">
        <form className="flex space-x-2 " onSubmit={(e) => handleSubmit(e)}>
          <img
            className="rounded-full  h-8 w-8 border-white border-2"
            src="https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg"
            alt="user photo"
          />
          <textarea
            onChange={(e) => handlePostContent(e)}
            value={postContent}
            className="description rounded-lg h-20 p-3 text-xs md:text-base bg-gray-100 w-full pl-3  outline-blue-200"
            placeholder="Whats on your mind, Kurtis?"
            aria-label="write a post"
            maxLength={600}
          ></textarea>
          <div className="flex flex-col items-center justify-between">
            <button type="submit">
              <TbPencilPlus className="h-6 w-6 hover:text-blue-500 hover:scale-110 transition-all duration-150 ease-in-out" />
            </button>
            <div className="count ml-auto text-gray-400 text-xs font-semibold">
              {postContent.length}/600
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreatePostHome;
