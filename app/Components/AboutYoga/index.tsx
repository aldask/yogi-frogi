import React from "react";
import Image from "next/image";

const AboutYoga = () => {
  return (
    <section className="bg-gradient-to-b from-green-500 via-green-600 to-green-700 py-20 px-16 flex flex-col justify-center items-center text-white overflow-hidden">
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="md:w-1/2 md:text-left text-center">
            <div className="font-bold text-4xl md:text-5xl mb-10">
              Apie Jogą
            </div>
            <p className="text-lg text-center md:text-justify text-white w-full md:w-4/5 mb-10 md:mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              placeat rerum commodi ut. Rerum qui consequuntur ea provident
              repellendus nam tempore soluta rem distinctio, numquam, architecto
              maxime odio illo? Exercitationem, blanditiis? Natus dolorum odit
              vero autem velit excepturi, inventore, in, molestiae commodi
              reprehenderit hic similique.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/Images/ContentImgs/test.jpg"
              alt="Apie-Joga"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutYoga;
