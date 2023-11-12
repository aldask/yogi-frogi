"use client";
import React, { useRef, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import InputComp from "./InputComp";

const Reg: React.FC = () => {
  const EMAILJS_SERVICE_ID = process.env
    .NEXT_PUBLIC_REACT_APP_EMAILJS_SERVICE_ID as string;
  const EMAILJS_TEMPLATE_ID = process.env
    .NEXT_PUBLIC_REACT_APP_EMAILJS_TEMPLATE_ID as string;
  const EMAILJS_API_KEY = process.env
    .NEXT_PUBLIC_REACT_APP_EMAILJS_API_KEY as string;

  const form = useRef(null);
  const [userName, setUserName] = useState(true);
  const [userSurname, setUserSurname] = useState(true);
  const [userEmail, setUserEmail] = useState(true);
  const [userTel, setUserTel] = useState(true);
  const [userKid, setUserKid] = useState(true);
  const [userDate, setUserDate] = useState(true);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          form.current,
          EMAILJS_API_KEY
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
          },
          (error: EmailJSResponseStatus) => {
            console.log(error.text);
          }
        );
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    const regexPattern = /^[a-zA-Z]+$/;
    const isValidInput =
      userInput.trim() !== "" && regexPattern.test(userInput);

    setUserName(isValidInput);
  };

  const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    const regexPattern = /^[a-zA-Z]+$/;
    const isValidInput =
      userInput.trim() !== "" && regexPattern.test(userInput);

    setUserSurname(isValidInput);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    const regexPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isValidInput =
      userInput.trim() !== "" && regexPattern.test(userInput);

    setUserEmail(isValidInput);
  };

  const handleTelNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    const regexPattern = /^\+370\d{8,}$/;
    const isValidInput =
      userInput.trim() !== "" && regexPattern.test(userInput);

    setUserTel(isValidInput);
  };

  const handleKidNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    const regexPattern = /^[a-zA-Z]+$/;
    const isValidInput =
      userInput.trim() !== "" && regexPattern.test(userInput);

    setUserKid(isValidInput);
  };

  const handleKidDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    const regexPattern = /^\d{4}-\d{2}-\d{2}$/;
    const isValidInput =
      userInput.trim() !== "" && regexPattern.test(userInput);

    setUserDate(isValidInput);
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-gray-600 p-6 rounded-md shadow-lg max-w-md mx-auto"
    >
      <InputComp
        label="Vieno iš tėvų Vardas"
        type="text"
        name="user_name"
        className={`bg-green border-2 border-green-600 text-gray-800 rounded-md py-2 px-4 w-full mt-2 focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-500 ${
          userName ? "" : "border-red-600 border-4"
        }`}
        required={true}
        placeholder="Vardas"
        minLength={2}
        maxLength={40}
        onChange={handleNameChange}
      />
      <InputComp
        label="Pavardė"
        type="text"
        name="user_surname"
        className={`bg-green border-2 border-green-600 text-gray-800 rounded-md py-2 px-4 w-full mt-2 focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-500 ${
          userSurname ? "" : "border-red-600 border-4"
        }`}
        required={true}
        placeholder="Pavardė"
        minLength={2}
        maxLength={40}
        onChange={handleSurnameChange}
      />
      <InputComp
        label="Jūsų el. paštas"
        type="email"
        name="user_email"
        className={`bg-green border-2 border-green-600 text-gray-800 rounded-md py-2 px-4 w-full mt-2 focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-500 ${
          userEmail ? "" : "border-red-600 border-4"
        }`}
        required={true}
        placeholder="El. Paštas"
        minLength={2}
        maxLength={40}
        onChange={handleEmailChange}
      />
      <InputComp
        label="Jūsų telefono numeris"
        type="tel"
        name="user_phone"
        className={`bg-green border-2 border-green-600 text-gray-800 rounded-md py-2 px-4 w-full mt-2 focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-500 ${
          userTel ? "" : "border-red-600 border-4"
        }`}
        required={true}
        placeholder="+370..."
        minLength={2}
        maxLength={40}
        onChange={handleTelNumber}
      />
      <InputComp
        label="Jūsų vaiko vardas"
        type="text"
        name="user_kid_name"
        className={`bg-green border-2 border-green-600 text-gray-800 rounded-md py-2 px-4 w-full mt-2 focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-500 ${
          userKid ? "" : "border-red-600 border-4"
        }`}
        required={true}
        placeholder="Vaiko vardas"
        minLength={2}
        maxLength={40}
        onChange={handleKidNameChange}
      />
      <InputComp
        label="Jūsų vaiko amžius"
        type="date"
        name="user_kid_age"
        className={`bg-green border-2 border-green-600 text-gray-800 rounded-md py-2 px-4 w-full mt-2 focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-500 ${
          userDate ? "" : "border-red-600 border-4"
        }`}
        required={true}
        placeholder="Pasirinkite gimimo data"
        minLength={2}
        maxLength={40}
        onChange={handleKidDate}
      />

      <button
        type="submit"
        className="bg-gradient-to-br from-green-400 to-lime-500 text-white font-bold py-2 px-6 md:py-4 md:px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform transition duration-300 ease-in-out hover:scale-105"
      >
        Siųsti
      </button>
    </form>
  );
};

export default Reg;
