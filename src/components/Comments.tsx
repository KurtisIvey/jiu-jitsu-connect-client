import React from "react";

type Props = {};

const Comments = (props: Props) => {
  return (
    <section className="flex space-x-2 mx-4 border">
      <img
        className="rounded-full  h-6 w-6 border-white border-2 mt-1"
        src="https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg"
        alt="user photo"
      />
      <div className="rounded-lg bg-gray-100 w-full text-xs p-2 flex flex-col text-black">
        {/* name and date/time */}
        <p className="w-full flex justify-between">
          <span className="font-semibold mr-2">Kurtis Ivey</span>
          <span className="mr-1 font-semibold text-[.7rem]">
            01/02/2023 at 8:23 AM
          </span>
        </p>
        <p>
          Cotton candy biscuit liquorice tart brownie donut chocolate wafer
          cupcake. Carrot cake cheesecake shortbread lollipop marshmallow dragée
          pie. Toffee chocolate bar jelly-o gummies gummies.
        </p>
      </div>
    </section>
  );
};

export default Comments;
