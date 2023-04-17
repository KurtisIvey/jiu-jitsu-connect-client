import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PendingFriendRequest from "../components/PendingFriendRequest";
//redux
import { useSelector } from "react-redux";
import type { RootState } from "../reduxStore/store";
import Loading from "../components/Loading";

interface FriendRequest {
  _id: string;
  username: string;
  profilePicUrl: string;
}

const FriendRequests = () => {
  const id = useSelector((state: RootState) => state.user.id);
  const [loaded, setLoaded] = useState(false);
  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([]);

  async function fetchFriendRequests() {
    const response = await fetch(`http://localhost:3001/api/users/${id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: window.localStorage.token,
      },
    });

    const friendRequestRes = await response.json();
    setFriendRequests(friendRequestRes.user.friendRequests);
    setLoaded(true);
  }

  useEffect(() => {
    fetchFriendRequests();
  }, []);

  return (
    <div>
      <Navbar />
      {loaded ? (
        <main className="container flex flex-col space-y-4 md:space-y-10 mx-auto mt-4 md:mt-10 max-w-3xl">
          <div className="mx-4 lg:mx-0 shadow-lg p-2 rounded-lg bg-white space-y-2">
            <h2 className="text-center font-semibold text-lg sm:text-2xl">
              Friend Requests{" "}
              <span className="text-blue-500">{friendRequests.length}</span>
            </h2>
            <section className="grid grid-cols-1 gap-[10px]">
              {friendRequests.map((friendRequest) => {
                return (
                  <div
                    key={friendRequest._id}
                    className=" rounded-md border border-grey-400 flex flex-row justify-between items-center p-1 "
                  >
                    <PendingFriendRequest
                      profileId={friendRequest._id}
                      username={friendRequest.username}
                      profilePicUrl={friendRequest.profilePicUrl}
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
};

export default FriendRequests;
