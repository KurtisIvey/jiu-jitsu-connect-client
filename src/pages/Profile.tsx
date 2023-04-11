import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CreatePost from "../components/CreatePost";
import Navbar from "../components/Navbar";
import { AiOutlineLike } from "react-icons/ai";
import Post from "../components/Post";
import Loading from "../components/Loading";

type Props = {
  //id: string;
};

interface UserState {
  friends: [];
  friendRequests: [];
  username: string;
  _id: string;
}

interface UserPostsState {
  posts: [];
}

const Profile = (props: Props) => {
  const { id } = useParams();
  const [user, setUser] = useState<null | UserState>(null);
  const [userPosts, setUserPosts] = useState<null | UserPostsState>(null);
  const [loaded, setLoaded] = useState(false);

  // need useEffect to draw info from db on pertaining user
  // id in url acquired via use params, will then be used to fetch user info and posts by them

  async function fetchUser() {
    const response = await fetch(
      `https://odinbook-backend.herokuapp.com/api/users/${id}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: window.localStorage.token,
        },
      }
    );

    const userRes = await response.json();
    setUser(userRes.user);
    console.log(user);
  }

  async function fetchPostsByUser() {
    //const response
    const response = await fetch(
      `https://odinbook-backend.herokuapp.com/api/posts/byUserId/${id}`,
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
    console.log(postRes.posts);
    //setLoaded(true);
    setUserPosts(postRes.posts);
    //console.log(user);
  }
  useEffect(() => {
    fetchUser();
    fetchPostsByUser();
    setLoaded(true);
  }, []);
  const posts = [
    {
      date: "january 1, 2023",
      postContent:
        "Apple pie soufflé dragée liquorice caramels tootsie roll toffee jelly-o gummi bears. Gummies toffee muffin marshmallow dessert. Pudding halvah jelly cupcake apple pie tootsie roll wafer. Tootsie roll cotton candy apple pie cake jelly beans tiramisu marzipan cotton candy.",
      likes: [{ user: "jeff" }, { user: "zoe" }],
      comments: [
        {
          user: "jeff",
          commentContent:
            " gummi bears. Gummies toffee muffin marshmallow dessert. Pudding halvah jelly cupcake apple pie tootsie ro",
        },
        {
          user: "zoe",
          commentContent:
            "essert. Pudding halvah jelly cupcake apple pie tootsie ro",
        },
      ],
    },
    {
      date: "january 2, 2023",
      postContent:
        "The Apple pie soufflé dragée liq jelly-o gummi bears. Gummies toffee muffin marshmallow dessert. Pudding halvah jelly cupcake apple pie tootsie roll wafer. Tootsie roll cotton candy apple pie cake jelly beans tiramisu marzipan cotton candy.",
      likes: [{ user: "jeff" }, { user: "zoe" }],
      comments: [
        {
          user: "jeff",
          commentContent:
            " gummi bears. Gummies toffee muffin marshmallow dessert. Pudding halvah jelly cupcake apple pie tootsie ro",
        },
        {
          user: "zoe",
          commentContent:
            "essert. Pudding halvah jelly cupcake apple pie tootsie ro",
        },
      ],
    },
  ];

  return (
    <main className=" ">
      <Navbar />
      {loaded ? (
        <div className="container flex flex-col space-y-4 lg:space-y-10 mx-auto">
          <div
            id="profilePhotoCol"
            className="flex flex-col items-center mx-auto mt-10 space-y-2"
          >
            <img
              className="rounded-full  w-auto max-h-[200px] border-white border-2"
              src="https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg"
              alt="user photo"
            />
            <div className="flex flex-col items-center space-y-2">
              <h2
                onClick={() => console.log(user)}
                className="text-3xl font-semibold tracking-wide"
              >
                {user && user.username}
              </h2>
              <h3 className="text-gray-600/80">124 Friends</h3>
            </div>
          </div>
          <div className="mt-4 border-b-2 border-gray-300 mx-5 lg:mx-0" />
          <div className="flex flex-col">
            <CreatePost />
          </div>
          <Post /> <Post />
        </div>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default Profile;
