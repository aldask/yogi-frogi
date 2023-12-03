import React, { ReactNode, useEffect, useState } from "react";
import Image from "next/image";

interface PhotoCarouselProps {
  children?: ReactNode;
  images: { src: string; alt: string }[];
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ images, children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : currentSlide + 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide]);

  return (
    <>
      {images.map((image, index) => (
        <Image
          src={`/Images/${image.src}`}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
          height={0}
          unoptimized={true}
          className={`absolute top-0 left-0 w-full h-full duration-1000 ${
            index === currentSlide
              ? "opacity-100 grayscale blur-sm"
              : "opacity-0"
          }`}
        />
      ))}
      {children}
    </>
  );
};

export default PhotoCarousel;
