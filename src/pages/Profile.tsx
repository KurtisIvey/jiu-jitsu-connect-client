import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreatePost from "../components/CreatePost";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Loading from "../components/Loading";

//redux
import type { RootState } from "../reduxStore/store";
import { useSelector } from "react-redux";

type Props = {
  //id: string;
};

interface UserState {
  friends: [];
  friendRequests: [];
  username: string;
  _id: string;
  profilePicUrl: string;
}

interface UserPostsState {
  map(arg0: (post: any) => JSX.Element): React.ReactNode;
  posts: {
    key: string;
    id: string;
    postContent: string;
    timestamp: string;
    author: string;
    likes: string[];
  }[];
}

const Profile = (props: Props) => {
  const loggedInId = useSelector((state: RootState) => state.user.id);

  const { id } = useParams();
  const [user, setUser] = useState<null | UserState>(null);
  const [userPosts, setUserPosts] = useState<null | UserPostsState>(null);
  const [loaded, setLoaded] = useState<boolean>(false);

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
    setTimeout(() => {
      setLoaded(true);
    }, 500);
    const postRes = await response.json();
    setUserPosts(postRes.posts);
  }
  useEffect(() => {
    fetchUser();
    fetchPostsByUser();
    // set to true so spinner display stops and displays proper profile view
  }, []);

  return (
    <main className="pb-10 ">
      <Navbar />
      {loaded ? (
        <div className="container flex flex-col space-y-4 lg:space-y-10 mx-auto">
          <div
            id="profilePhotoCol"
            className="flex flex-col items-center mx-auto mt-10 space-y-2"
          >
            <img
              className="rounded-full  w-auto max-h-[200px] border-white border-2"
              src={
                user?.profilePicUrl
                  ? user.profilePicUrl
                  : "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2019/10/blank-person-icon-9.jpg"
              }
              alt="user photo"
            />
            <div className="flex flex-col items-center space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">
                {user && user.username}
              </h2>
              <h3 className="text-gray-600/80">
                {user && user.friends.length} Friends
              </h3>
            </div>
          </div>
          <div className="mt-4 border-b-2 border-gray-300 mx-5 lg:mx-0" />
          <div className="flex flex-col">
            {loggedInId === id ? (
              <CreatePost fetchPosts={fetchPostsByUser} />
            ) : (
              ""
            )}
          </div>

          {userPosts &&
            userPosts.map((post) => {
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
        </div>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default Profile;
