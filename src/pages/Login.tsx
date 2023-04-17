import React, { FormEvent, useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

//redux
import { useDispatch } from "react-redux";
import { setUser } from "../reduxStore/slices/userSlice";

type Props = {};

function Login({}: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    password: "",
    email: "",
  });
  const [errMessage, setErrMessage] = useState({ email: "", password: "" });
  const [passwordErr, setPasswordErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrMessage({ email: "", password: "" });
    setEmailErr(false);
    setPasswordErr(false);
    try {
      const email = loginInfo.email;
      const password = loginInfo.password;
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);
      if (data.user) {
        localStorage.setItem("token", data.token);
        alert("Login successful");
        dispatch(setUser(data.user));
        navigate("/home");
        //console.log(data);
      } else {
        setErrMessage(data.errors);
        if (data.errors.password) {
          setLoginInfo({ ...loginInfo, password: "" });
          setPasswordErr(true);
        } else if (data.errors.email) {
          setLoginInfo({ email: "", password: "" });
          setEmailErr(true);
        }
      }
    } catch (err) {
      console.log(err);
    }
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

            <form
              onSubmit={handleSubmit}
              className="space-y-6 lg:space-y-8"
              action="#"
            >
              <Input
                type="email"
                name="email"
                value={loginInfo.email}
                placeholder="Email Address"
                handleChange={handleChange}
                error={emailErr}
                errorMessage={errMessage.email}
              />
              <Input
                type="password"
                name="password"
                value={loginInfo.password}
                placeholder="Enter password"
                handleChange={handleChange}
                error={passwordErr}
                errorMessage={errMessage.password}
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
