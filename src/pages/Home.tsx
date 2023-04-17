import React, { useEffect, useState } from "react";
import CreatePostHome from "../components/CreatePostHome";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
//redux refresh
import Loading from "../components/Loading";

type Props = {};

interface PostsType {
  map(arg0: (post: any) => JSX.Element): React.ReactNode;
  posts: {
    _id: string;
    postContent: string;
    timestamp: string;
    author: string;
    likes: string[];
  }[];
}

const Home = (props: Props) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [posts, setPosts] = useState<null | PostsType>(null);

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
    setLoaded(true);
  }

  useEffect(() => {
    //fetch posts and populate Post components via map function
    fetchPosts();
  }, []);

  return (
    <div>
      <Navbar />
      <section className="container flex flex-col space-y-4 md:space-y-10 mx-auto  mt-4 md:mt-10 lg:px-[5vw] pb-10">
        {loaded ? (
          <>
            <CreatePostHome fetchPosts={fetchPosts} />
            {posts &&
              posts.map((post) => {
                return (
                  <div key={post._id}>
                    <Post
                      id={post._id}
                      postContent={post.postContent}
                      timestamp={post.timestamp}
                      likes={post.likes}
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
