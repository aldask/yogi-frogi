"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={controls}
      className="bg-green-600 py-2 px-4 flex flex-col md:flex-row md:justify-between md:items-center shadow-md"
    >
      <div className="flex items-center justify-between w-full md:w-auto">
        <Image
          src="/Images/Logo/logo.png"
          alt="Little froggy"
          width={80}
          height={20}
        />
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <ul
        className={`${
          showMenu ? "flex" : "hidden"
        } md:flex md:space-x-6 md:mt-0 mt-4 text-white text-lg`}
      >
        <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">
          Pagrindinis
        </li>
      </ul>
      <button className="bg-yellow-400 hover:bg-yellow-500 text-green-700 font-bold py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-300 ease-in-out cursor-pointer transform hover:scale-105 mt-4 md:mt-0">
        Registruotis
      </button>
    </motion.nav>
  );
};

export default Navbar;
