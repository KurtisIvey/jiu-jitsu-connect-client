import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { TbPencilPlus } from "react-icons/tb";
import Comments from "./Comments";

type Props = {};

function Post({}: Props) {
  return (
    <section className="container  p-3 lg:p-0 lg:mx-0 flex flex-col">
      <div className="mx-2 lg:mx-0 shadow-lg p-2 rounded-lg bg-white space-y-2">
        {/*top row of post, image name, date*/}
        <div className="border border-blue-300 flex flex-row space-x-2">
          <img
            className="rounded-full  h-8 w-8 border-white border-2"
            src="https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg"
            alt="user photo"
          />
          {/* name and date */}
          <div className="text-xs tracking-wider">
            <p>Kurtis Ivey</p>
            <p>01 14 2023</p>
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
        <form className="flex space-x-2 mx-4">
          <img
            className="rounded-full  h-6 w-6 border-white border-2"
            src="https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg"
            alt="user photo"
          />
          <input
            className="rounded-full bg-gray-100 w-full pl-3 text-xs outline-blue-200"
            placeholder="Write a comment..."
            type="text"
            aria-label="write a comment"
          />
          <TbPencilPlus className="h-5 w-5  cursor-pointer " />
        </form>
        <Comments />
      </div>
    </section>
  );
}

export default Post;
