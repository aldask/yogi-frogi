import React from "react";
import AboutMeContent from "./AboutMeContent";

const AboutMeBox: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <div className={isVisible ? "flex" : "hidden"}>
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <AboutMeContent />
        </div>
      </div>
    </div>
  );
};

export default AboutMeBox;
