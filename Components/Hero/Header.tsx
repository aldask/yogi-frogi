import React from "react";
import Image from "next/image";
import "../animations.css";

interface HeaderProps {
  isVisible: boolean;
}

const Header: React.FC<HeaderProps> = ({ isVisible }) => {
  return (
    <div className={`mb-10 ${isVisible ? "flex fade-down" : "hidden"}`}>
      <Image
        src="/Images/Logo/logo.png"
        alt="Yogi.Frogi.Logo"
        width={650}
        height={650}
        className={isVisible ? "flex pulse-animation" : "hidden"}
      />
    </div>
  );
};

export default Header;
