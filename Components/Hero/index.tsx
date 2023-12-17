"use client";
import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Button from "./Button";
import PhotoCarousel from "../PhotoCarousel";

const Main = () => {
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

  const images = [
    { src: "test.jpg", alt: "Image 1" },
    { src: "test3.jpg", alt: "Image 2" },
  ];

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-400 text-white"
    >
      <PhotoCarousel
        images={images}
        slideInterval={7000}
        effect="grayscale blur-sm"
      >
        <Header isVisible={isVisible} />
        <Button isVisible={isVisible} />
      </PhotoCarousel>
    </section>
  );
};

export default Main;
