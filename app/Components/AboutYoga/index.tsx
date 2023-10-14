import React from "react";
import Image from "next/image";

const AboutYoga = () => {
  return (
    <section className="bg-gradient-to-br from-green-400 to-lime-600 py-16 px-8 md:px-14 flex flex-col justify-center items-center gap-16 text-white">
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="font-bold text-4xl mb-8 md:text-5xl">
              Apie Jogą 🧘
            </div>
            <p className="text-sm md:text-lg text-center md:text-left text-white mb-8 md:mb-0">
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
