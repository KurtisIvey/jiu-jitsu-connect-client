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
      <section className="container flex flex-col space-y-4 mx-auto mt-4">
        <CreatePostHome />
        <Post />
      </section>
    </div>
  );
};

export default Home;
