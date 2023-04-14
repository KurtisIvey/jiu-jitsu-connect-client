import React, { FormEvent, useEffect, useState } from "react";
import { BiCommentAdd } from "react-icons/bi";
import Comment from "./Comment";
//redux
import type { RootState } from "../reduxStore/store";
import { useSelector } from "react-redux";

type Props = {
  id: string;
};

interface commentsState {
  map(arg0: (post: any) => JSX.Element): React.ReactNode;
  comments: {
    id: string;
    author: { id: string; username: string; profilePicUrl: null | string };
    timestamp: string;
    commentContent: string;
  }[];
}

const CommentContainer = (props: Props) => {
  const currentProfilePic = useSelector(
    (state: RootState) => state.user.profilePicUrl
  );
  const [comments, setComments] = useState<null | commentsState>(null);
  const [commentContent, setCommentContent] = useState<string>("");

  const handleCommentContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentContent(e.target.value);
  };

  const getComments = async () => {
    const response = await fetch(
      `https://odinbook-backend.herokuapp.com/api/posts/${props.id}`,
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
    setComments(postRes.post.comments);
    console.log(postRes.post.comments);
  };

  const handleSubmitComment = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch(
      `https://odinbook-backend.herokuapp.com/api/posts/${props.id}/comment`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: window.localStorage.token,
        },

        body: JSON.stringify({
          commentContent,
        }),
      }
    );

    const commentRes = await response.json();
    //console.log(commentRes);
    getComments();
    setCommentContent("");
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <form
        className="flex space-x-2 mx-4"
        onSubmit={(e) => handleSubmitComment(e)}
      >
        <img
          className="rounded-full  h-6 w-6 border-white border-2"
          src={
            currentProfilePic
              ? currentProfilePic
              : "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2019/10/blank-person-icon-9.jpg"
          }
          alt="user photo"
        />
        <input
          onChange={(e) => handleCommentContent(e)}
          className="rounded-full bg-gray-100 w-full pl-3 text-xs outline-blue-200"
          placeholder="Write a comment..."
          type="text"
          aria-label="write a comment"
          value={commentContent}
          name="commentContent"
        />
        <button type="submit">
          <BiCommentAdd className="h-5 w-5 hover:text-blue-500 hover:scale-110 transition-all duration-150 ease-in-out" />
        </button>
      </form>
      {comments &&
        comments.map((comment) => {
          return (
            <div key={comment._id}>
              <Comment
                id={comment._id}
                author={comment.author}
                commentContent={comment.commentContent}
                timestamp={comment.timestamp}
              />
            </div>
          );
        })}
    </>
  );
};

export default CommentContainer;
