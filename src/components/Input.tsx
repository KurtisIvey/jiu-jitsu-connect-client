import React, { ChangeEvent, FormEvent } from "react";

type Props = {
  type: string;
  name: string;
  placeholder: string;
  error?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: Props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      id={props.name}
      className={`bg-gray-50 border ${
        props.error ? "outline-red-400" : "outline-blue-400"
      } border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 
      focus:border-primary-600 block w-full p-2.5`}
      placeholder={props.placeholder}
      required
      aria-label={props.name}
      onChange={props.handleChange}
    />
  );
};

export default Input;
