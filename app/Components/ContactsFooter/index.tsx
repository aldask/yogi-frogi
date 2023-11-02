import React from "react";
import Link from "next/link";
import {
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import "../animations.css";

const ContactsFooter = () => {
  return (
    <section className="bg-gradient-to-br from-lime-800 to-black py-16 px-8 md:px-14 flex flex-col justify-center items-center gap-16 text-white">
      <div className="w-full flex flex-row flex-wrap justify-evenly gap-2">
        <ul className="flex flex-col m-3">
          <li>
            <p className="mb-5 font-extrabold text-2xl">Navigacija</p>
          </li>
          <li className="font-semibold">
            <Link href="/">Viršus</Link>
          </li>
          <li className="font-semibold">
            <Link href="/">Apie Mane</Link>
          </li>
          <li className="font-semibold">
            <Link href="/">Apie Jogą</Link>
          </li>
          <li className="font-semibold">
            <Link href="/">Informacija</Link>
          </li>
        </ul>
        <ul className="flex flex-col m-3">
          <li>
            <p className="mb-5 font-extrabold text-2xl">Kontaktai</p>
          </li>
          <li className="flex flex-row gap-2 items-center font-semibold">
            <FaPhone /> <a href="tel:861111111">+370 611 11111</a>
          </li>
          <li className="flex flex-row gap-2 items-center font-semibold">
            <FaEnvelope />{" "}
            <a href="mailto:elpastas@gmail.com">elpastas@gmail.com</a>
          </li>{" "}
        </ul>
        <ul className="flex flex-col m-3">
          <li>
            <p className="mb-5 font-extrabold text-2xl">Socialiniai tinklai</p>
          </li>
          <li className="flex flex-row gap-2 items-center font-semibold">
            <FaFacebook />{" "}
            <a
              href="https://facebook.com/profile.php?id=100095017083224"
              target="_blank"
            >
              Facebook
            </a>
          </li>
          <li className="flex flex-row gap-2 items-center font-semibold">
            <FaInstagram />{" "}
            <a href="https://www.instagram.com " target="_blank">
              Instagram
            </a>
          </li>
          <li className="flex flex-row gap-2 items-center font-semibold">
            <FaYoutube />{" "}
            <a href="https://www.youtube.com/channel" target="_blank">
              YouTube
            </a>
          </li>
        </ul>
        <ul className="flex flex-col m-3"></ul>
      </div>
    </section>
  );
};

export default ContactsFooter;
