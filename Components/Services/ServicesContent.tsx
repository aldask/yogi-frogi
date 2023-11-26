import Link from "next/link";
import React from "react";

const ServicesContent: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="headerWrapper font-bold text-3xl mb-8 md:text-5xl">
          Paslaugos
        </div>
        <p className="textWrapper text-sm md:text-lg text-center text-white w-full md:w-4/5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas aliquid
          atque distinctio, perspiciatis recusandae aperiam. Earum blanditiis
          doloribus tempora corporis odio sit odit consectetur libero. Dolorem
          ducimus magnam nobis molestiae recusandae tempore impedit aperiam ea
          corrupti asperiores autem modi assumenda repudiandae, velit possimus,
          obcaecati, eos nemo eaque voluptatum.
        </p>
      </div>
      <div className="headerWrapper flex flex-col md:flex-row gap-4 justify-center items-center mt-5">
        <Link href="/registracija">
          <button className="bg-gradient-to-br from-green-400 to-lime-600 text-white font-bold py-2 px-6 md:py-4 md:px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform transition duration-300 ease-in-out hover:scale-105">
            Registracija
          </button>
        </Link>
        <a href="www.google.lt" target="_blank">
          <button className="bg-gradient-to-br from-green-400 to-lime-600 text-white font-bold py-2 px-6 md:py-4 md:px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform transition duration-300 ease-in-out hover:scale-105">
            Tvarkaraštis
          </button>
        </a>
      </div>
    </>
  );
};

export default ServicesContent;
