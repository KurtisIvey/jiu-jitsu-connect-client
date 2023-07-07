import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const isVisible = scrollTop > 0;
    setIsVisible(isVisible);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-[3.75rem] right-4 z-10 p-2.5 text-sm rounded-full bg-slate-500 text-white flex hover:scale-105 transition-all duration-150 ease-in-out ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <span>Back to Top </span>
      <span className="text-white flex items-center justify-center">
        <AiOutlineArrowUp size={20} />
      </span>
    </button>
  );
};

export default BackToTopButton;
