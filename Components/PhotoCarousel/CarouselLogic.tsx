import React, { ReactElement, useEffect, useState } from "react";

interface Photo {
    src: string;
    alt: string;
  }
  
  interface PhotoProps {
    photo: Photo;
  }
  
  interface CarouselProps {
    children: ReactElement<PhotoProps>[];
  }

const CarouselLogic: React.FC<CarouselProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === children.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide]);
  return (
    <div className="relative w-full h-full">
      {children.map((child, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${child.props.photo.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
    </div>
  )
};

export default CarouselLogic;
