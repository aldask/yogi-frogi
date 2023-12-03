"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import NavItem from "./NavItem";
import MobileButton from "./MobileButton";
import MobileMenu from "./MobileMenu";

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

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [showMenu]);

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
      </div>
      {/* Desktop nav */}
      <div className="hidden md:flex items-center">
        <NavItem href="/" onClick={() => scroll("hero")} text="Pagrindinis" />
        <NavItem
          href="/registracija"
          onClick={() => scroll("registracija")}
          text="Registruotis"
        />
      </div>
      {/* Grey out */}
      <div
        className={`fixed inset-0 bg-black opacity-50 ${
          showMenu ? "flex" : "hidden"
        }`}
      ></div>
      {/* Mobile nav */}
      <MobileButton onClick={toggleMenu} />
      <MobileMenu showMenu={showMenu} toggleMenu={toggleMenu} scroll={scroll} />
    </motion.nav>
  );
};

export default Navbar;
