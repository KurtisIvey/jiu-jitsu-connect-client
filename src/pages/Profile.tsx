import React from "react";
import Navbar from "../components/Navbar";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className=" h-screen">
      <Navbar />
      <main className="flex flex-col">
        <div
          id="profilePhotoCol"
          className="flex flex-col items-center mx-auto mt-10 space-y-2"
        >
          <img
            className="rounded-full  w-auto max-h-[200px] border-white border-2"
            src="https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg"
            alt="user photo"
          />
          <div className="flex flex-col items-center space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              Kurtis Ivey
            </h2>
            <h3 className="text-gray-600/80">124 Friends</h3>
          </div>
        </div>
        <div className="mx-5 mt-4 border-b-2 border-gray-300" />
      </main>
    </div>
  );
};

export default Profile;
