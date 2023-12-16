import React from "react";
import PhotoCarousel from "../PhotoCarousel";

const AboutYogaContent: React.FC = () => {
  const images = [
    { src: "test.jpg", alt: "Image 1" },
    { src: "test3.jpg", alt: "Image 2" },
  ];

  return (
    <>
      <div className="w-full md:w-1/2 h-full">
        <div className="imageWrapper relative rounded-lg h-96">
          <PhotoCarousel
            images={images}
            slideInterval={7000}
            animationDuration={1000}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className="headerWrapper font-bold text-3xl mb-8 md:text-5xl">
          Apie Jogą 🧘
        </div>
        <p className="textWrapper text-sm md:text-lg text-center md:text-left text-white mb-8 md:mb-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed placeat
          rerum commodi ut. Rerum qui consequuntur ea provident repellendus nam
          tempore soluta rem distinctio, numquam, architecto maxime odio illo?
          Exercitationem, blanditiis? Natus dolorum odit vero autem velit
          excepturi, inventore, in, molestiae commodi reprehenderit hic
          similique.
        </p>
      </div>
    </>
  );
};

export default AboutYogaContent;
