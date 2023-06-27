import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import CreatePost from "../components/CreatePostModal";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Loading from "../components/Loading";

//redux
import type { RootState } from "../reduxStore/store";
import { useSelector } from "react-redux";
import SubmitButton from "../components/SubmitButton";
import FriendListModal from "../components/FriendListModal";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

type Props = {
  //id: string;
};

interface UserState {
  friends: {
    username: string;
    _id: string;
    profilePicUrl: string;
  }[];
  friendRequests: {
    friends: string[];
    friendRequests: {};
    username: string;
    _id: string;
    profilePicUrl: string;
  }[];
  username: string;
  _id: string;
  profilePicUrl: string;
}

interface PostState {
  key: string;
  _id: string;
  postContent: string;
  timestamp: string;
  author: string;
  likes: string[];
}

const Profile = (props: Props) => {
  const loggedInId = useSelector((state: RootState) => state.user.id);
  const location = useLocation();

  const { id } = useParams();
  const [user, setUser] = useState<null | UserState>(null);
  const [userPosts, setUserPosts] = useState<null | PostState[]>(null);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [currentlyFriendRequested, setCurrentlyFriendRequested] =
    useState<boolean>(false);
  const [currentlyFriends, setCurrentlyFriends] = useState<boolean>(false);

  const isFriends = () => {
    if (!user) {
      return;
    }
    for (let i = 0; i < user.friends.length; i++) {
      if (user.friends[i]._id === loggedInId) {
        setCurrentlyFriends(true);
        return;
      }
    }
    setCurrentlyFriends(false);
  };

  const isFriendRequested = () => {
    if (!user) {
      return;
    }
    for (let i = 0; i < user.friendRequests.length; i++) {
      if (user.friendRequests[i]._id === loggedInId) {
        setCurrentlyFriendRequested(true);
        return;
      }
    }
    setCurrentlyFriendRequested(false);
  };

  /*
  only workable solution to getting isFriendRequest to call initially upon render
  
  */
  useEffect(() => {
    isFriends();
    isFriendRequested();
  }, [user]);

  // need useEffect to draw info from db on pertaining user
  // id in url acquired via use params, will then be used to fetch user info and posts by them

  async function addFriend(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://jiu-jitsu-connect-backend.herokuapp.com/api/users/${id}/friend-request`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.token}`,
          },
        }
      );
      // debugging use, friendRes = await response.json();
      fetchUser();
    } catch (error) {
      console.error("Failed to add friend: ", error);
    }
  }

  async function fetchUser() {
    try {
      const response = await fetch(
        `https://jiu-jitsu-connect-backend.herokuapp.com/api/users/${id}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.token}`,
          },
        }
      );

      const userRes = await response.json();
      setUser(userRes.user);
    } catch (error) {
      console.error("Failed to fetch user: ", error);
    }
  }

  async function fetchPostsByUser() {
    try {
      const response = await fetch(
        `https://jiu-jitsu-connect-backend.herokuapp.com/api/posts/byUserId/${id}`,
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
      setUserPosts(postRes.posts);
      setLoaded(true);
    } catch (error) {
      console.error("Failed to fetch posts: ", error);
    }
  }
  useEffect(() => {
    fetchUser();
    fetchPostsByUser();

    // set to true so spinner display stops and displays proper profile view
  }, [location]);

  return (
    <main className=" ">
      <Navbar />
      <section className="mb-10">
        {loaded ? (
          <div className="container flex flex-col space-y-4 lg:space-y-10 mx-auto">
            <div
              id="profilePhotoCol"
              className="flex flex-col items-center mx-auto mt-10 space-y-2"
            >
              {/* profile photo */}
              <img
                className="rounded-full object-cover w-[220px] h-[220px] border-white border-2"
                src={
                  user?.profilePicUrl
                    ? user.profilePicUrl
                    : "https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2019/10/blank-person-icon-9.jpg"
                }
                alt="user photo"
              />
              <div className="flex flex-col items-center space-y-2">
                {/* username of profile */}
                <h2 className="text-3xl font-semibold tracking-wide">
                  {user && user.username}
                </h2>

                <FriendListModal
                  friends={user?.friends}
                  username={user?.username}
                />

                {/* add friend button */}
                {loggedInId !== id && currentlyFriends === false ? (
                  currentlyFriendRequested ? (
                    <form onSubmit={(e) => addFriend(e)}>
                      <SubmitButton
                        width="fit"
                        text="Retract Friend Request"
                        retract={true}
                      />
                    </form>
                  ) : (
                    <form onSubmit={(e) => addFriend(e)}>
                      <SubmitButton width="fit" text="Add Friend" />
                    </form>
                  )
                ) : (
                  ""
                )}
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
      </section>
      <BackToTopButton />
      <Footer />
    </main>
  );
};

export default Profile;
