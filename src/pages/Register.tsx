import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

type Props = {};

function Register({}: Props) {
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");

  const [loginInfo, setLoginInfo] = useState({
    password: "",
    confirmPassword: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(loginInfo);
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(loginInfo);
    setLoginInfo({ password: "", email: "", confirmPassword: "" });
    // send post req to api
    // if successful , useNav to go to login page
    // else, display error
  };

  useEffect(() => {
    if (loginInfo.confirmPassword !== loginInfo.password) {
      setConfirmPasswordError(true);
      setConfirmPasswordMessage("Passwords Do Not Match");
    }
    if (loginInfo.confirmPassword === loginInfo.password) {
      setConfirmPasswordError(false);
      setConfirmPasswordMessage("Passwords Match");
    }
    if (loginInfo.confirmPassword === "" && loginInfo.password === "") {
      setConfirmPasswordError(false);
      setConfirmPasswordMessage("");
    }
  }, [loginInfo]);

  return (
    <main className=" h-screen flex items-center lg:flex-none ">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 py-8 mx-auto  lg:h-screen lg:py-0 gap-6 lg:gap-24">
        <div className="flex flex-col max-w-md w-full gap-3 p-6">
          <h1 className=" text-5xl  font-semibold text-blue-500">Odin-book</h1>
          <p className="text-md ">
            Connect with friends and the world around you on Odin-book
          </p>
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border lg:mt-0 lg:w-[448px]  xl:p-0">
          <div className="p-8 space-y-4 lg:space-y-6 ">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 lg:text-2xl">
              Create and account
            </h1>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 lg:space-y-8"
              action="#"
            >
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={loginInfo.email}
                handleChange={handleChange}
              />
              <Input
                type="password"
                name="password"
                placeholder="Enter password"
                value={loginInfo.password}
                handleChange={handleChange}
                confirmPasswordError={confirmPasswordError}
                confirmPasswordMessage={confirmPasswordMessage}
              />
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={loginInfo.confirmPassword}
                handleChange={handleChange}
                confirmPasswordError={confirmPasswordError}
                confirmPasswordMessage={confirmPasswordMessage}
              />

              {/*Check box terms of service*/}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 text-md focus:ring-3 focus:ring-primary-300"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500">
                    I accept the Terms and Conditions of this fake website
                  </label>
                </div>
              </div>
              <SubmitButton width="full" text="Create Account" />
              <p className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/"
                  className="font-medium text-blue-600 hover:underline "
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
