import React from "react";

interface ButtonProps {
  showElement: boolean;
}

const Button: React.FC<ButtonProps> = ({ showElement }) => {
  return (
    <div
      className={
        showElement
          ? "invisible"
          : "animate-jump-in animate-duration-500 animate-delay-1000"
      }
    >
      <button className="bg-gradient-to-br from-green-400 to-lime-600 text-white font-bold text-lg py-2 px-6 md:py-3 md:px-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform transition duration-300 ease-in-out hover:scale-105 shadow-xl">
        Daugiau
      </button>
    </div>
  );
};

export default Button;
