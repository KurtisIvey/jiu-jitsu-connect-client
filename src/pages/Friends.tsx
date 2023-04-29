import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { HiDotsHorizontal } from "react-icons/hi";
import Friend from "../components/Friend";
//redux
import { useSelector } from "react-redux";
import type { RootState } from "../reduxStore/store";
import Loading from "../components/Loading";

interface Friends {
  _id: string;
  username: string;
  profilePicUrl: string;
}

type Props = {};
function Friends(props: Props) {
  const id = useSelector((state: RootState) => state.user.id);
  const [loaded, setLoaded] = useState(false);
  const [friends, setFriends] = useState<Friends[]>([]);

  async function fetchFriends() {
    const response = await fetch(`http://localhost:3001/api/users/${id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.token}`,
      },
    });

    const friendsRes = await response.json();
    //console.log(friendRequestRes);
    setFriends(friendsRes.user.friends);
    console.log(friendsRes.user.friends);
    setLoaded(true);
  }

  useEffect(() => {
    fetchFriends();
  }, []);

  return (
    <div>
      <Navbar />
      {loaded ? (
        <main className="container flex flex-col space-y-4 md:space-y-10 mx-auto mt-4 md:mt-10 max-w-4xl">
          <div className="mx-4 lg:mx-0 shadow-lg p-2 rounded-lg bg-white space-y-2">
            <h2 className="text-center font-semibold text-lg sm:text-2xl">
              Friends <span className="text-blue-500">({friends.length})</span>
            </h2>
            <section className="grid sm:grid-cols-2 gap-[10px]">
              {friends.map((friend) => {
                return (
                  <div
                    key={friend._id}
                    className=" rounded-md border border-grey-400 flex flex-row justify-between items-center p-1 "
                  >
                    {/* encase img and a tag in same Link */}
                    <Friend
                      fetchFriends={fetchFriends}
                      profileId={friend._id}
                      username={friend.username}
                      profilePicUrl={friend.profilePicUrl}
                    />
                  </div>
                );
              })}
            </section>
          </div>
        </main>
      ) : (
        <Loading />
      )}
    </div>
  );
}

{
  /* <main className="container border border-red-300 flex flex-col space-y-4 md:space-y-10 mx-auto mt-4 md:mt-10">
        {friendList.map((friend, index) => {
          return <div key={index}>{friend.name}</div>;
        })}
      </main> */
}

export default Friends;
