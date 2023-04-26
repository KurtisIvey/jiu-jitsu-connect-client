import React, { useState, FormEvent, useRef } from "react";
import Navbar from "../components/Navbar";
import SubmitButton from "../components/SubmitButton";

const validFileTypes = ["image/jpg", "image/jpeg", "image/png"];

type Props = {};

const Settings = (props: Props) => {
  const [image, setImage] = useState<File | undefined>(undefined);
  const [error, setError] = useState("");
  const usernameRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!validFileTypes.find((type) => type === file?.type)) {
      setError("File must be in JPG/PNG format");
      return;
    }

    setImage(file);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!image) {
      setError("Please select an image");
      return;
    }

    if (!validFileTypes.find((type) => type === image.type)) {
      setError("File must be in JPG/PNG format");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    const username = usernameRef.current?.value;
    if (username) {
      formData.append("username", username);
    }

    try {
      const response = await fetch(
        `http://localhost:3001/api/users/account-settings`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${window.localStorage.token}`,
          },
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <Navbar />
      <section className="container flex flex-col space-y-10 mx-auto mt-[10%]">
        <img
          className="rounded-full  w-auto max-h-[200px] max-w-[200px] border-white border-2 mx-auto"
          src="https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg"
          alt="user photo"
        />
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="space-y-4 flex flex-col items-center"
        >
          <div className="mx-auto flex flex-col justify-center items-center space-y-2">
            <label>Profile Picture</label>
            <input type="file" id="imageInput" onChange={handleUpload} />{" "}
            <label htmlFor="profileName" className="mr-1">
              Profile Name:
            </label>
            <input
              ref={usernameRef}
              id="username"
              name="username"
              placeholder="Kurtis Ivey"
              className="w-[300px] text-gray-900 text-md rounded-lg focus:ring-primary-600 
              focus:border-primary-600 block outline-blue-400 p-2.5 border border-gray-300"
            />
          </div>
          <SubmitButton text="Update Profile" width="fit" />
        </form>
      </section>
    </main>
  );
};

export default Settings;
