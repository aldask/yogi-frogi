"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
  }, []);

  const scroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={controls}
      className="z-10 absolute inset-x-0 bg-gradient-to-r from-lime-600 via-lime-700 to-lime-800 py-1 px-6 flex justify-between items-center shadow-md"
    >
      <div className="w-full flex justify-between items-center">
        <Image
          src="/Images/Logo/logo.png"
          alt="Little froggy"
          width={100}
          height={30}
        />
        <button
          className="md:hidden text-white focus:outline-none ml-4"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
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
      <div className={`${showMenu ? "flex" : "hidden"} md:flex items-center`}>
        <Link href="/">
          <button
            onClick={() => scroll("hero")}
            className="mx-3 bg-yellow-500 hover:bg-yellow-600 text-green-800 font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Pagrindinis
          </button>
        </Link>
        <Link href="/registracija">
          <button
            onClick={() => scroll("registracija")}
            className="mx-3 bg-yellow-500 hover:bg-yellow-600 text-green-800 font-semibold py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-300 ease-in-out cursor-pointer transform hover:scale-105"
          >
            Registruotis
          </button>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
