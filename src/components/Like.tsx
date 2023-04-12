import React, { FormEvent } from "react";
import { AiOutlineLike } from "react-icons/ai";

type Props = {
  id: string;
};

function Like(props: Props) {
  const handleLike = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch(
      `https://odinbook-backend.herokuapp.com/api/posts/${props.id}/like`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: window.localStorage.token,
        },
      }
    );
  };
  return (
    <form onClick={(e) => handleLike(e)} className="">
      <button className="flex items-center justify-start hover:text-blue-500 hover:scale-110 w-fit transition-all duration-150 ease-in-out">
        <AiOutlineLike className="h-5 w-5" />
        <p className="text-sm ml-2 mt-[.5px]">Like</p>
      </button>
    </form>
  );
}

export default Like;
