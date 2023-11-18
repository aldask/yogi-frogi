import React from "react";
import Link from "next/link";
import {
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

const ContactsFooter = () => {
  return (
    <section className="bg-gradient-to-br from-lime-800 to-black py-20 px-8 md:px-16 flex flex-col justify-center items-center gap-10 md:gap-16 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        <div className="flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
            Meniu
          </h2>
          <Link
            href="/"
            className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition duration-300 mb-4 block transform hover:scale-105"
          >
            Grįžti į viršų
          </Link>
          <Link
            href="/"
            className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition duration-300 mb-4 block transform hover:scale-105"
          >
            Apie Mane
          </Link>
          <Link
            href="/"
            className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition duration-300 mb-4 block transform hover:scale-105"
          >
            Apie Jogą
          </Link>
          <Link
            href="/"
            className="text-lg font-semibold text-gray-300 hover:text-blue-400 transition duration-300 mb-4 block transform hover:scale-105"
          >
            Informacija
          </Link>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
            Kontaktai
          </h2>
          <a
            href="tel:+37068194588"
            className="flex items-center text-lg font-semibold text-gray-300 hover:text-blue-400 transition duration-300 mb-4 transform hover:scale-105"
          >
            <FaPhone className="mr-3" />
            +370 681 94588
          </a>
          <a
            href="mailto:yogifrogi.lt@gmail.com"
            className="flex items-center text-lg font-semibold text-gray-300 hover:text-blue-400 transition duration-300 mb-4 transform hover:scale-105"
          >
            <FaEnvelope className="mr-3" /> yogifrogi.lt@gmail.com
          </a>
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
            Socialiniai tinklai
          </h2>
          <a
            href="https://facebook.com/profile.php?id=100095017083224"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg font-semibold text-gray-300 hover:text-blue-400 transition duration-300 mb-4 transform hover:scale-105"
          >
            <FaFacebook className="mr-3" /> Facebook
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg font-semibold text-gray-300 hover:text-blue-400 transition duration-300 mb-4 transform hover:scale-105"
          >
            <FaInstagram className="mr-3" /> Instagram
          </a>
          <a
            href="https://www.youtube.com/channel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg font-semibold text-gray-300 hover:text-blue-400 transition duration-300 mb-4 transform hover:scale-105"
          >
            <FaYoutube className="mr-3" /> YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactsFooter;
