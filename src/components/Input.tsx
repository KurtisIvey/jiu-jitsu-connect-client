import React, { ChangeEvent, FormEvent } from "react";

type Props = {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorMessage?: string;
};

const Input = (props: Props) => {
  return (
    <div className="relative">
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        className={`bg-gray-50 border 
        ${
          props.error
            ? "outline-red-400"
            : props.errorMessage
            ? "outline-green-500"
            : "outline-blue-400"
        }
      ${
        props.error
          ? "border-red-300 border-2"
          : props.errorMessage
          ? "border-green-500"
          : "border-gray-300"
      }
      text-gray-900 text-md rounded-lg focus:ring-primary-600 
      focus:border-primary-600 block w-full p-2.5`}
        placeholder={props.placeholder}
        value={props.value}
        required
        aria-label={props.name}
        onChange={props.handleChange}
      />
      {props.errorMessage && (
        <p
          className={`${
            props.error ? "text-red-400" : "text-green-600"
          } text-xs absolute bottom-[-18px] left-1`}
        >
          {props.errorMessage}
        </p>
      )}
    </div>
  );
};

export default Input;
