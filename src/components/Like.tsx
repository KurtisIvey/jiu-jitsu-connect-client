import React, { FormEvent, useState, useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
//redux
import type { RootState } from "../reduxStore/store";
import { useSelector } from "react-redux";

type Props = {
  id: string;
  likes: string[];
};

function Like(props: Props) {
  const [likedByCurrentUser, setLikedByCurrentUser] = useState<boolean>(false);
  const loggedInId = useSelector((state: RootState) => state.user.id);

  const [postLikes, setPostLikes] = useState<string[]>([]);

  const hasItBeenLiked = () => {
    if (postLikes.includes(loggedInId)) {
      console.log("isliked");
      setLikedByCurrentUser(true);
    }
  };

  const getPostInfo = async () => {
    const response = await fetch(
      `http://localhost:3001/api/posts/${props.id}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: window.localStorage.token,
        },
      }
    );
    const postRes = await response.json();
    //console.log("liking stuff");
    //console.log(postRes.post.likes);
    setPostLikes(postRes.post.likes);
  };
  useEffect(() => {
    getPostInfo();
    //hasItBeenLiked();
  }, []);
  const handleLike = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3001/api/posts/${props.id}/like`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: window.localStorage.token,
        },
      }
    );
    getPostInfo();
  };
  return (
    <form onClick={(e) => handleLike(e)} className="">
      <div className="border-b">
        {postLikes.length > 0 ? postLikes.length : ""}
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
