import React from "react";
import Mailer from "../components/Mailer";
import { Link } from "react-router-dom";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center relative">
      <Link
        className="absolute top-1 text-blue-500 hover:underline text-lg"
        to="/"
      >
        Return to Main Website
      </Link>
      <Mailer />
    </div>
  );
};

export default Contact;
