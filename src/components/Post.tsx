import React, { FormEvent, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { TbPencilPlus } from "react-icons/tb";
import Comments from "./Comments";

type Props = {};

function Post({}: Props) {
  const [commentContent, setCommentContent] = useState("");

  const handleCommentContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContent(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(commentContent);
    // send post req to api
    setCommentContent("");
  };

  return (
    <section className="container  p-3 lg:p-0 lg:mx-0 flex flex-col">
      <div className="mx-2 lg:mx-0 shadow-lg p-2 rounded-lg bg-white space-y-2">
        {/*top row of post, image name, date*/}
        <div className="flex flex-row space-x-2">
          <img
            className="rounded-full  h-8 w-8 border-white border-2"
            src="https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg"
            alt="user photo"
          />
          {/* name and date */}
          <div className="text-xs tracking-wider font-semibold">
            <p>Kurtis Ivey</p>
            <p>01/14/2023 at 3:23 AM</p>
          </div>
        </div>
        {/* post content */}
        <p className="text-sm">
          Apple pie soufflé dragée liquorice caramels tootsie roll toffee
          jelly-o gummi bears. Gummies toffee muffin marshmallow dessert.
          Pudding halvah jelly cupcake apple pie tootsie roll wafer. Tootsie
          roll cotton candy apple pie cake jelly beans tiramisu marzipan cotton
          candy.
        </p>
        {/* number of likes and comments */}

        {/* like button */}
        <div className="flex items-center justify-start">
          <AiOutlineLike className="h-5 w-5" />
          <p className="text-sm ml-2 mt-[.5px]">Like</p>
        </div>
        <div className="border-b" />
        {/* write comment section */}
        <form className="flex space-x-2 mx-4" onSubmit={(e) => handleSubmit(e)}>
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
            <TbPencilPlus className="h-5 w-5 hover:text-blue-500 hover:scale-110 transition-all duration-150 ease-in-out" />
          </button>
        </form>
        <Comments />
      </div>
    </section>
  );
}

export default Post;
