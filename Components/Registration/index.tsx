"use client";
import React from "react";
import Form from "./Form";
import RegContent from "./RegContent";

const Reg: React.FC = () => {
  return (
    <div className="py-32 md:py-18 px-8 md:px-14 flex flex-col md:flex-row items-center justify-around gap-16 bg-gradient-to-r from-gray-100 to-gray-400 text-white">
      <RegContent />
      <Form />
    </div>
  );
};

export default Reg;
