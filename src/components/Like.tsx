import React, { FormEvent, useState, useEffect } from "react";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
//redux
import type { RootState } from "../reduxStore/store";
import { useSelector } from "react-redux";

type Props = {
  id: string;
  likes: string[];
};

function Like(props: Props) {
  const loggedInId = useSelector((state: RootState) => state.user.id);

  const [postLikes, setPostLikes] = useState<string[]>([]);

  const getPostInfo = async () => {
    const response = await fetch(
      `https://odinbook-backend.herokuapp.com/api/posts/${props.id}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.token}`,
        },
      }
    );
    const postRes = await response.json();

    setPostLikes(postRes.post.likes);
  };
  useEffect(() => {
    getPostInfo();
  }, []);
  const handleLike = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch(
      `https://odinbook-backend.herokuapp.com/api/posts/${props.id}/like`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.token}`,
        },
      }
    );
    getPostInfo();
  };
  return (
    <form onSubmit={(e) => handleLike(e)} className="">
      <div className="border-b mb-2 pb-1">
        {postLikes.length > 0 && (
          <div className="flex gap-2 text-blue-500 ">
            <AiOutlineLike className="h-5 w-5" />
            {postLikes.length}
          </div>
        )}
      </div>
      <button
        className={`flex items-center justify-start ${
          postLikes.includes(loggedInId) ? "text-blue-500 " : ""
        } hover:scale-110 w-fit transition-all duration-150 ease-in-out`}
      >
        <AiOutlineLike className="h-5 w-5" />
        <p className="text-sm ml-2 mt-[.5px]">
          {postLikes.includes(loggedInId) ? "Liked" : "Like"}
        </p>
      </button>
    </form>
  );
}

export default Like;
