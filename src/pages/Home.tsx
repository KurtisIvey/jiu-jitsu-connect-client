import React from "react";
import Comments from "../components/Comments";
import CreatePost from "../components/CreatePost";
import CreatePostHome from "../components/CreatePostHome";
import Navbar from "../components/Navbar";
import Post from "../components/Post";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Navbar />
      <section className="container flex flex-col space-y-4 md:space-y-10 mx-auto mt-4 md:mt-10">
        <CreatePostHome />
        <Post /> <Post />
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
      </section>
    </div>
  );
};

export default Home;
