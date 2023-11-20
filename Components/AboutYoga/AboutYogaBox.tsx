import React from "react";
import AboutYogaContent from "./AboutYogaContent";

const AboutYogaBox: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <div className={isVisible ? "flex" : "hidden"}>
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <AboutYogaContent />
        </div>
      </div>
    </div>
  );
};

export default AboutYogaBox;
