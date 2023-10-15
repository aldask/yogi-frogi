import React from "react";

const Services = () => {
  return (
    <section className="bg-gradient-to-br from-green-400 to-lime-600 py-16 px-8 md:px-14 flex flex-col justify-center items-center gap-16 text-white">
      <div className="flex flex-col items-center">
        <div className="font-bold text-4xl mb-8 md:text-5xl">Paslaugos</div>
        <p className="text-sm md:text-lg text-center text-white w-full md:w-4/5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas aliquid
          atque distinctio, perspiciatis recusandae aperiam. Earum blanditiis
          doloribus tempora corporis odio sit odit consectetur libero. Dolorem
          ducimus magnam nobis molestiae recusandae tempore impedit aperiam ea
          corrupti asperiores autem modi assumenda repudiandae, velit possimus,
          obcaecati, eos nemo eaque voluptatum.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <button className="bg-gradient-to-br from-green-500 to-lime-900 text-white font-bold py-2 px-6 md:py-4 md:px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform transition duration-300 ease-in-out hover:scale-105">
          Registracija
        </button>
        <button className="bg-gradient-to-br from-green-400 to-lime-500 text-white font-bold py-2 px-6 md:py-4 md:px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform transition duration-300 ease-in-out hover:scale-105">
          Tvarkaraštis
        </button>
      </div>
    </section>
  );
};

export default Services;
