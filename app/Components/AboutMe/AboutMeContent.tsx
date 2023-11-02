import React from "react";
import Image from "next/image";

const AboutMeContent: React.FC = () => {
  return (
    <>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className="headerWrapper font-bold text-4xl mb-8 md:text-5xl">
          <h2 className="mb-2">Labas,</h2>
          <h2>Aš Karolina! 👋</h2>
        </div>
        <p className="textWrapper text-sm md:text-lg text-center md:text-left text-white mb-8 md:mb-0">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
          maxime vel magnam ipsa id perspiciatis velit facilis quas minus ea
          eos, adipisci sint repellendus corporis numquam consectetur dolores
          dolore quia provident ab beatae necessitatibus? Beatae veniam eveniet
          assumenda adipisci. Quod assumenda alias velit ad consequuntur iusto
          debitis itaque ducimus quia, repudiandae iste quo earum magni
          reiciendis, eum facere fugiat eos illum. Sapiente.
        </p>
      </div>
      <div className="imageWrapper relative rounded-lg overflow-hidden">
        <Image
          src="/Images/ContentImgs/test.jpg"
          alt="Apie-Joga"
          width={350}
          height={350}
        />
      </div>
    </>
  );
};

export default AboutMeContent;
