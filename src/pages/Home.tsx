import React, { useEffect, useState } from "react";
import CreatePostHome from "../components/CreatePostHome";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

interface PostType {
  _id: string;
  postContent: string;
  timestamp: string;
  author: string;
  likes: string[];
}

type Props = {};

const Home: React.FC<Props> = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [posts, setPosts] = useState<PostType[]>([]);

  async function fetchPosts() {
    const response = await fetch(
      `https://odinbook-backend.herokuapp.com/api/posts`,
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
    setPosts(postRes.posts);
    setLoaded(true);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const [visiblePosts, setVisiblePosts] = useState<number>(10);

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 10);
  };

  return (
    <div>
      <Navbar />
      <section className="container flex flex-col space-y-4 md:space-y-10 mx-auto mt-4 md:mt-10 lg:px-[5vw] pb-10">
        <CreatePostHome fetchPosts={fetchPosts} />
        {loaded ? (
          <>
            {posts.slice(0, visiblePosts).map((post) => {
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
            {visiblePosts < posts.length && (
              <div className="px-4 lg:p-0">
                <button
                  className="text-white font-medium bg-blue-600 py-2 w-full mx-auto lg:mx-0 max-w-screen-2xl px-4 rounded-lg mt-4 "
                  onClick={loadMorePosts}
                >
                  Load More
                </button>
              </div>
            )}
          </>
        ) : (
          <Loading />
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Home;
