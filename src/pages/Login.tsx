import React from "react";
import { Link } from "react-router-dom";

type Props = {};

function Login({}: Props) {
  return (
    <main className=" h-screen flex items-center lg:flex-none ">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 py-8 mx-auto  lg:h-screen lg:py-0 gap-6 lg:gap-24">
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
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:outline-blue-400
                       focus:border-primary-600 block w-full p-3.5
                      "
                placeholder="Email"
                aria-label="email"
                required
              />

              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 
                text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3.5 dark:bg-gray-700 focus:outline-blue-400
                      "
                required
                aria-label="password"
              />

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 
                  font-semibold rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Log in
              </button>
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
