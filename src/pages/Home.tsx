import React, { useEffect, useState } from "react";
import Comments from "../components/Comments";
import CreatePost from "../components/CreatePost";
import CreatePostHome from "../components/CreatePostHome";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
//redux refresh
import type { RootState } from "../reduxStore/store";

import { useSelector, useDispatch } from "react-redux";
import Loading from "../components/Loading";

type Props = {};

interface PostsState {
  map(arg0: (post: any) => JSX.Element): React.ReactNode;
  posts: {
    key: string;
    id: string;
    postContent: string;
    timestamp: string;
    author: string;
  }[];
}

const Home = (props: Props) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [posts, setPosts] = useState<null | PostsState>(null);
  const user = useSelector((state: RootState) => state.user.username);

  async function fetchPosts() {
    const response = await fetch(
      `https://odinbook-backend.herokuapp.com/api/posts`,
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
    setPosts(postRes.posts);
  }

  useEffect(() => {
    //fetch posts and populate Post components via map function
    fetchPosts();
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  return (
    <div>
      <Navbar />
      <section className="container flex flex-col space-y-4 md:space-y-10 mx-auto mt-4 md:mt-10">
        {loaded ? (
          <>
            <CreatePostHome />
            {posts &&
              posts.map((post) => {
                return (
                  <div key={post._id}>
                    <Post
                      id={post._id}
                      postContent={post.postContent}
                      timestamp={post.timestamp}
                      author={post.author}
                    />
                  </div>
                );
              })}
          </>
        ) : (
          <Loading />
        )}
      </section>
    </div>
  );
};

export default Home;
