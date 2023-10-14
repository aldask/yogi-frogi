import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <section className="min-h-screen mt-0 mb-auto pb-7 overflow-hidden flex flex-col bg-zinc-300 items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="mb-25 mb-10">
          <Image
            src="/Images/Logo/logo.png"
            alt="Yogi.Frogi.Logo"
            width={700}
            height={700}
          />
        </div>
        <div>
          <button className="bg-gradient-to-br from-green-500 to-lime-900 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform transition duration-300 ease-in-out hover:scale-105 shadow-md md:py-4 md:px-8 md:text-lg">
            Daugiau
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main;
