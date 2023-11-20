"use client";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Button from "./Button";

const Main = () => {
  const [showElement, setShowElement] = useState(false);

  const changeClass = () => {
    const windowHeight = window.innerHeight;
    const scrollValue = document.documentElement.scrollTop;

    const scrollThreshold = windowHeight * 0.99;

    if (scrollValue > scrollThreshold) {
      setShowElement(true);
    } else {
      setShowElement(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeClass);

    return () => {
      window.removeEventListener("scroll", changeClass);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-400 text-white">
      <div className="flex flex-col items-center">
        <Header showElement={showElement} />
        <Button showElement={showElement} />
      </div>
    </section>
  );
};

export default Main;
