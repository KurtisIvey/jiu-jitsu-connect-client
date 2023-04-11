import React, { useEffect } from "react";
import Comments from "../components/Comments";
import CreatePost from "../components/CreatePost";
import CreatePostHome from "../components/CreatePostHome";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
//redux refresh
import type { RootState } from "../reduxStore/store";

import { useSelector, useDispatch } from "react-redux";

type Props = {};

const Home = (props: Props) => {
  const user = useSelector((state: RootState) => state.user.username);
  const dispatch = useDispatch();
  /* async function fetchPosts() {
    const response = await fetch(
      "http://localhost:3001/api/posts/"
    );
  }


  useEffect(() => {
    fetch posts and populate Post components via map function
  }) */

  return (
    <div>
      <Navbar />
      <section className="container flex flex-col space-y-4 md:space-y-10 mx-auto mt-4 md:mt-10">
        <CreatePostHome />
        <div>{user}</div>
        {/* <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post /> */}
      </section>
    </div>
  );
};

export default Home;
