import React, { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

type Props = {};

const Mailer = (props: Props) => {
  const to_name = "Kurtis";
  const [params, setParams] = useState({
    to_name: to_name,
    user_email: "",
    user_name: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .send("service_dh4g8gf", "template_loa37xn", params, "IZvdiiarOHlVtgcBd")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }
  return (
    <div className=" max-w-screen-md ">
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 text-sm sm:text-xl xl:text-2xl">
        Noticed an issue with the Jiu-Jitsu Connect? Got a technical issue you
        need solved? Looking for a new employee to add to the team? Or if you
        just want to say hello. Feel free to reach out and I'll try my best to
        get back to you as soon as possible.
      </p>
      <form action="#" className="space-y-8" onSubmit={(e) => sendEmail(e)}>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-base xl:text-xl font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base xl:text-xl rounded-lg
               focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5
              "
            placeholder="yourEmail@gmail.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-base xl:text-xl sm:text-sm font-medium text-gray-900"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            onChange={handleChange}
            className="block p-3 w-full text-base xl:text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm 
              focus:ring-primary-500 focus:border-primary-500"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-base xl:text-xl font-medium text-gray-900"
          >
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            rows={6}
            className="block p-2.5 w-full text-base xl:text-xl text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 
              focus:ring-primary-500 focus:border-primary-500"
            placeholder="Let me know how I can help you"
          />
        </div>
        <button
          type="submit"
          className="py-1.5 sm:py-3 px-3.5 sm:px-5 text-base xl:text-xl font-medium text-center bg-green-500 hover:bg-green-500/80 text-white 
          rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 
          focus:outline-none focus:ring-primary-300 "
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default Mailer;
