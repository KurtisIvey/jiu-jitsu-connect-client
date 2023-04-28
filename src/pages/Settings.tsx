import React, { useState, FormEvent, useRef } from "react";
import Navbar from "../components/Navbar";
import SubmitButton from "../components/SubmitButton";

const validFileTypes = ["image/jpg", "image/jpeg", "image/png"];

//redux
import type { RootState } from "../reduxStore/store";
import { useSelector, useDispatch } from "react-redux";
import ImageUpload from "../components/ImageUpload";
import { setUser } from "../reduxStore/slices/userSlice";

type Props = {};

const Settings = (props: Props) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState<File | undefined>(undefined);
  const [error, setError] = useState("");
  const usernameRef = useRef<HTMLInputElement>(null);
  const username = useSelector((state: RootState) => state.user.username);
  const profilePicUrl = useSelector(
    (state: RootState) => state.user.profilePicUrl
  );

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
    const formData = new FormData();
    if (image) {
      if (!validFileTypes.find((type) => type === image.type)) {
        setError("File must be in JPG/PNG format");
        return;
      }
      formData.append("image", image);
    }
    const username = usernameRef.current?.value;
    if (username) {
      formData.append("username", username);
    }

    try {
      console.log("hi");
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

      const data = await response.json();
      console.log(data.currentUser);
      dispatch(setUser(data.currentUser));

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
      <section className="container flex flex-col space-y-10 mx-auto mt-[10%] justify-center items-center">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="space-y-4 flex flex-col items-center"
        >
          <div className="mx-auto flex flex-col justify-center items-center space-y-4">
            <ImageUpload onChange={handleUpload} />
            <label htmlFor="profileName" className="mr-1">
              Profile Name:
            </label>
            <input
              defaultValue={username}
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
