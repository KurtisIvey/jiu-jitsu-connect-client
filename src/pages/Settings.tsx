import React, { useState, FormEvent, useRef } from "react";
import Navbar from "../components/Navbar";
import SubmitButton from "../components/SubmitButton";
import { useNavigate } from "react-router-dom";

const validFileTypes = ["image/jpg", "image/jpeg", "image/png"];

//redux
import type { RootState } from "../reduxStore/store";
import { useSelector, useDispatch } from "react-redux";
import ImageUpload from "../components/ImageUpload";
import { setUser } from "../reduxStore/slices/userSlice";

type Props = {};

const Settings = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image, setImage] = useState<File | undefined>(undefined);
  const [error, setError] = useState("");
  const usernameRef = useRef<HTMLInputElement>(null);
  const username = useSelector((state: RootState) => state.user.username);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!validFileTypes.find((type) => type === file?.type)) {
      setError(
        "File must be in JPG/PNG format or profile photo will not be updated"
      );
      return;
    }
    setImage(file);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    if (image) {
      if (!validFileTypes.find((type) => type === image.type)) {
        setError(
          "File must be in JPG/PNG format or profile photo will not be updated"
        );
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
        `https://jiu-jitsu-connect-backend.herokuapp.com/api/users/account-settings`,
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
      dispatch(setUser(data.currentUser));
      alert("Update Successful");
      navigate(0);

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
            <div className="text-xs text-red-500">{error}</div>
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
