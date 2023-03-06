import React from "react";

type Props = {
  text: string;
  width: string;
};

const SubmitButton = (props: Props) => {
  return (
    <button
      type="submit"
      className={` bg-blue-500 hover:bg-blue-600/70 w-${props.width}
     hover:scale-[103%] text-white font-bold py-1.5 px-3 rounded-lg transition-all duration-200 ease-in-out`}
    >
      {props.text}
    </button>
  );
};

export default SubmitButton;
