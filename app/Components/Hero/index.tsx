import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-400 text-white">
      <div className="flex flex-col items-center">
        <div className="mb-10">
          <Image
            src="/Images/Logo/logo.png"
            alt="Yogi.Frogi.Logo"
            width={550}
            height={550}
            className="animate-fade-down animate-duration-1000 ease-in-out"
          />
        </div>
        <div className="animate-jump-in animate-duration-500 animate-delay-1000">
          <button className="bg-gradient-to-br from-green-400 to-lime-600 text-white font-bold text-lg py-2 px-6 md:py-3 md:px-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform transition duration-300 ease-in-out hover:scale-105 shadow-xl">
            Daugiau
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main;
