import React from "react";
import Navbar from "../components/Navbar";
import SubmitButton from "../components/SubmitButton";

type Props = {};

const Settings = (props: Props) => {
  return (
    <main>
      <Navbar />
      <section className="container flex flex-col space-y-10 mx-auto mt-[10%]">
        <img
          className="rounded-full  w-auto max-h-[200px] max-w-[200px] border-white border-2 mx-auto"
          src="https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg"
          alt="user photo"
        />
        <form className="space-y-4 flex flex-col items-center">
          <div className="mx-auto flex flex-col justify-center items-center space-y-2">
            <label htmlFor="profileName" className="mr-1">
              Profile Name:
            </label>
            <input
              id="profileName"
              placeholder="Kurtis Ivey"
              className="w-[300px] "
            />
          </div>
          <SubmitButton text="Update Profile" width="fit" />
        </form>
      </section>
    </main>
  );
};

export default Settings;
