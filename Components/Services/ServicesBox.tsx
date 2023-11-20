import React from "react";
import ServicesContent from "./ServicesContent";

const ServicesBox: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <div className={isVisible ? "flex flex-col" : "hidden"}>
      <ServicesContent />
    </div>
  );
};

export default ServicesBox;
