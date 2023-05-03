import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-white rounded-lg shadow mt-auto ">
      <div className="w-[70%] lg:w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://github.com/KurtisIvey" className="hover:underline">
            Kurtis Ivey Coding
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://github.com/KurtisIvey/jiu-jitsu-connect-client"
              className="mr-4 hover:underline md:mr-6 "
            >
              Github Repo
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kurtisivey/"
              className="mr-4 hover:underline md:mr-6"
            >
              Linkedin
            </a>
          </li>

          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
