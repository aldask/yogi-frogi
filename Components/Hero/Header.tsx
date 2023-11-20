import React from "react";
import Image from "next/image";
import "../animations.css";

interface HeaderProps {
  showElement: boolean;
}

const Header: React.FC<HeaderProps> = ({ showElement }) => {
  return (
    <div className={`mb-10 ${showElement ? "invisible" : "pulse-animation"}`}>
      <Image
        src="/Images/Logo/logo.png"
        alt="Yogi.Frogi.Logo"
        width={650}
        height={650}
        className={
          showElement
            ? "invisible"
            : "animate-fade-down animate-duration-1000 ease-in-out"
        }
      />
    </div>
  );
};

export default Header;
