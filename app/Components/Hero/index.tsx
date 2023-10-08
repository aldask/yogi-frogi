import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <section className="h-screen mt-0 mb-auto pb-7 overflow-hidden flex flex-col bg-slate-500">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-10">
          <Image
            src="/Images/Logo/logo.png"
            alt="Yogi.Frogi.Logo"
            width={700}
            height={700}
          />
        </div>
        <div>
          <button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform transition duration-300 ease-in-out hover:scale-105">
            Apie
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main;
