import React, { FormEvent, useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

type Props = {};

function Login({}: Props) {
  const [loginInfo, setLoginInfo] = useState({});
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(loginInfo);
    setLoginInfo({ ...loginInfo, [name]: value });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log();
    // send post req to api
  };

  return (
    <main className=" h-screen flex items-center lg:flex-none ">
      <div
        className="flex flex-col lg:flex-row items-center justify-center lg:justify-between 
      px-6 py-8 mx-auto  lg:h-screen lg:py-0 gap-6 lg:gap-24"
      >
        <div className="flex flex-col max-w-md w-auto gap-3 p-6 ">
          <h1 className=" text-5xl  font-semibold text-blue-500">Odin-book</h1>
          <p className="text-md ">
            Connect with friends and the world around you on Odin-book
          </p>
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border lg:mt-0 lg:w-[448px]  xl:p-0">
          <div className="p-8 space-y-4 lg:space-y-6 ">
            <h2 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 lg:text-2xl dark:text-white ml-2">
              Sign in to your account
            </h2>
            <form className="space-y-4 lg:space-y-7" action="#">
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                handleChange={handleChange}
              />
              <Input
                type="password"
                name="password"
                placeholder="Enter password"
                handleChange={handleChange}
              />
              <SubmitButton text="Log in" width="full" />
              <p className="text-sm font-light  text-gray-500">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-medium text-blue-600 hover:underline 
                      dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
