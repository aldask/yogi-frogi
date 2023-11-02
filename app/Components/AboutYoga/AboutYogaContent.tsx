import React from "react";
import Image from "next/image";

const AboutYogaContent: React.FC = () => {
  return (
    <>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className="headerWrapper font-bold text-4xl mb-8 md:text-5xl">
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

export default AboutYogaContent;
