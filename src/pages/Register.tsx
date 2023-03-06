import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

type Props = {};

function Register({}: Props) {
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
            <form className="space-y-4 lg:space-y-7" action="#">
              <Input type="email" name="email" placeholder="Email Address" />
              <Input
                type="password"
                name="password"
                placeholder="Enter password"
              />
              <Input
                type="confirm-password"
                name="confirm-password"
                placeholder="Confirm Password"
              />
              {/*Check box terms of service*/}{" "}
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
