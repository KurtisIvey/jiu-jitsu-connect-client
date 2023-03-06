import React from "react";

type Props = {
  text: string;
};

const SubmitButton = (props: Props) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-600/70 hover:scale-[103%] text-white font-bold py-1.5 px-3 rounded-lg transition-all duration-200 ease-in-out">
      {props.text}
    </button>
  );
};

export default SubmitButton;
