import React, { ChangeEvent, FormEvent } from "react";

type Props = {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  confirmPasswordError?: boolean;
  confirmPasswordMessage?: string;
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
          props.confirmPasswordError
            ? "outline-red-400"
            : props.confirmPasswordMessage
            ? "outline-green-500"
            : "outline-blue-400"
        }
      ${
        props.confirmPasswordError
          ? "border-red-300 border-2"
          : props.confirmPasswordMessage
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
      {props.confirmPasswordMessage && (
        <p
          className={`${
            props.confirmPasswordError ? "text-red-400" : "text-green-600"
          } text-xs absolute bottom-[-18px] left-1`}
        >
          {props.confirmPasswordMessage}
        </p>
      )}
    </div>
  );
};

export default Input;
