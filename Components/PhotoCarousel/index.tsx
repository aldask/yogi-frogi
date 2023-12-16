import React, { ReactNode, useEffect, useState } from "react";
import Image from "next/image";

interface PhotoCarouselProps {
  children?: ReactNode;
  images: { src: string; alt: string }[];
  slideInterval: number;
  effect?: string;
  animationDuration: number;
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({
  images,
  children,
  slideInterval,
  effect,
  animationDuration,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : currentSlide + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, slideInterval);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, slideInterval]);

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
          className={`relative w-full h-full duration-${animationDuration} ${
            index === currentSlide ? `opacity-100 ${effect}` : "opacity-0"
          }`}
          // className={`relative w-full h-full duration-${animationDuration} ${
          //   index === currentSlide ? `opacity-100 ${effect}` : "opacity-0"
          // }`}
        />
      ))}
      {children}
    </>
  );
};

export default PhotoCarousel;
