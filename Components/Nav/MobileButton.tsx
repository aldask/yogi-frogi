import React from "react";

const MobileButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      className="md:hidden text-white focus:outline-none ml-4"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  );
};

export default MobileButton;
