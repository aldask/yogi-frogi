"use client";
import React, { useRef, useState, useEffect } from "react";
import AboutYogaBox from "./AboutYogaBox";
import "../animations.css";

const AboutYoga: React.FC = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        root: null,
        threshold: 0,
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section
      id="apie-joga"
      ref={sectionRef}
      className="pt-16 md:py-16 px-8 md:px-14 flex flex-col justify-center items-center gap-16 text-white"
    >
      <AboutYogaBox isVisible={isVisible} />
    </section>
  );
};

export default AboutYoga;
