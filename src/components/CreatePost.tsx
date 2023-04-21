import React, { useState, FormEvent, useEffect, useRef } from "react";
import { BsPlusCircle } from "react-icons/bs";

type Props = {
  fetchPosts(): unknown;
};

const CreatePost = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [postContent, setPostContent] = useState("");
  const createPostRef = useRef<HTMLFormElement>(null);

  const handlePostContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
    setPostContent("");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        createPostRef.current &&
        !createPostRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSubmitPost = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch(
      `https://odinbook-backend.herokuapp.com/api/posts/`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.token}`,
        },

        body: JSON.stringify({
          postContent,
        }),
      }
    );
    props.fetchPosts();
    handleClose();
  };

  return (
    <section className="relative mx-auto mt-1" ref={createPostRef}>
      <div className="grid grid-cols-3 items-center">
        <h3 className="text-lg text-gray-600 ">Create</h3>
        <BsPlusCircle
          className="h-8 w-8 text-blue-400 cursor-pointer mx-auto hover:scale-110 transition-all duration-100 ease-in-out"
          onClick={() => setOpen(!open)}
          aria-label="open create post"
        />
        <h3 className="text-lg text-gray-600 ">Post</h3>
      </div>

      <form
        onSubmit={(e) => handleSubmitPost(e)}
        className={`flex flex-col text-gray-800 border bg-white border-gray-300 rounded-lg p-4 shadow-md max-w-2xl absolute w-[350px] lg:w-[500px] -translate-x-1/2 left-1/2 top-[-120px] z-10 ${
          !open && "hidden"
        } `}
      >
        <textarea
          onChange={(e) => handlePostContent(e)}
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          placeholder="Describe everything about this post here"
          maxLength={600}
          value={postContent}
          aria-label="write a post"
          required
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
            onClick={() => handleClose()}
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
    </section>
  );
};

export default CreatePost;
