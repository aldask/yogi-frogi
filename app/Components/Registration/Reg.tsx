"use client";
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import InputComp from "./InputComp";

interface Inputs {
  userName: string;
  userSurname: string;
  userEmail: string;
  userTel: string;
  userKid: string;
  userDate: string;
}

const Reg: React.FC = () => {
  const EMAILJS_SERVICE_ID = process.env
    .NEXT_PUBLIC_REACT_APP_EMAILJS_SERVICE_ID as string;
  const EMAILJS_TEMPLATE_ID = process.env
    .NEXT_PUBLIC_REACT_APP_EMAILJS_TEMPLATE_ID as string;
  const EMAILJS_API_KEY = process.env
    .NEXT_PUBLIC_REACT_APP_EMAILJS_API_KEY as string;

  const formRef = useRef<HTMLFormElement>(null);
  const [inputs, setInputs] = useState<Inputs>({
    userName: "",
    userSurname: "",
    userEmail: "",
    userTel: "",
    userKid: "",
    userDate: "",
  });
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const regexPatterns: Record<string, RegExp> = {
      userName: /^[a-zA-Z]+$/,
      userSurname: /^[a-zA-Z]+$/,
      userEmail: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      userTel: /^\+370\d{8,}$/,
      userKid: /^[a-zA-Z]+$/,
      userDate: /^\d{4}-\d{2}-\d{2}$/,
    };

    const isInputsValid = Object.keys(inputs).every(
      (key) =>
        inputs[key as keyof Inputs].trim() !== "" &&
        regexPatterns[key].test(inputs[key as keyof Inputs])
    );

    if (formRef.current) {
      setSuccess(false);

      if (!isInputsValid) {
        setError(true);
        return;
      }

      emailjs
        .sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_API_KEY
        )
        .then(
          (result: EmailJSResponseStatus) => {
            setSuccess(true);
            setInputs({
              userName: "",
              userSurname: "",
              userEmail: "",
              userTel: "",
              userKid: "",
              userDate: "",
            });
          },
          (error: EmailJSResponseStatus) => {
            setError(true);
            setSuccess(false);
          }
        );
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="bg-gray-600 p-6 rounded-md shadow-lg max-w-md mx-auto"
    >
      {error && (
        <p className="text-red-500 text-lg mb-2">
          Visi laukai turi būti užpildyti!
        </p>
      )}
      {success && <p className="text-green-500 text-lg mb-2">Jūsų registracija sėkminga!</p>}
      <InputComp
        label="Vieno iš tėvų Vardas"
        type="text"
        name="userName"
        className={`border-2 border-green-600 text-gray-800 rounded-md py-2 px-4 w-full my-2 focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-500 ${
          inputs.userName ? "" : "border-gray-400"
        }`}
        placeholder="Vardas"
        minLength={2}
        maxLength={40}
        value={inputs.userName}
        onChange={handleInputChange}
      />
      {error && inputs.userName === "" && (
        <p className="text-red-500 text-sm mb-2">
          Klaida! Įrašykite savo vardą
        </p>
      )}
      <InputComp
        label="Pavardė"
        type="text"
        name="userSurname"
        className={`bg-green border-2 border-green-600 text-gray-800 rounded-md py-2 px-4 w-full my-2 focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-500 ${
          inputs.userSurname ? "" : "border-gray-400"
        }`}
        placeholder="Pavardė"
        minLength={2}
        maxLength={40}
        value={inputs.userSurname}
        onChange={handleInputChange}
      />
      {error && inputs.userSurname === "" && (
        <p className="text-red-500 text-sm mb-2">
          Klaida! Įrašykite savo pavardę
        </p>
      )}
      <InputComp
        label="Jūsų el. paštas"
        type="email"
        name="userEmail"
        className={`bg-green border-2 border-green-600 text-gray-800 rounded-md py-2 px-4 w-full my-2 focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-500 ${
          inputs.userEmail ? "" : "border-gray-400"
        }`}
        placeholder="El. Paštas"
        minLength={2}
        maxLength={40}
        value={inputs.userEmail}
        onChange={handleInputChange}
      />
      {error && inputs.userEmail === "" && (
        <p className="text-red-500 text-sm mb-2">
          Klaida! Įrašykite savo el. paštą
        </p>
      )}
      <InputComp
        label="Jūsų telefono numeris"
        type="tel"
        name="userTel"
        className={`bg-green border-2 border-green-600 text-gray-800 rounded-md py-2 px-4 w-full my-2 focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-500 ${
          inputs.userTel ? "" : "border-gray-400"
        }`}
        placeholder="+370..."
        minLength={2}
        maxLength={40}
        value={inputs.userTel}
        onChange={handleInputChange}
      />
      {error && inputs.userTel === "" && (
        <p className="text-red-500 text-sm mb-2">
          Klaida! Įrašykite savo telefono numerį
        </p>
      )}
      <InputComp
        label="Jūsų vaiko vardas"
        type="text"
        name="userKid"
        className={`bg-green border-2 border-green-600 text-gray-800 rounded-md py-2 px-4 w-full my-2 focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-500 ${
          inputs.userKid ? "" : "border-gray-400"
        }`}
        placeholder="Vaiko vardas"
        minLength={2}
        maxLength={40}
        value={inputs.userKid}
        onChange={handleInputChange}
      />
      {error && inputs.userKid === "" && (
        <p className="text-red-500 text-sm mb-2">
          Klaida! Įrašykite savo vaiko vardą
        </p>
      )}
      <InputComp
        label="Jūsų vaiko amžius"
        type="date"
        name="userDate"
        className={`bg-green border-2 border-green-600 text-gray-800 rounded-md py-2 px-4 w-full my-2 focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-500 ${
          inputs.userDate ? "" : "border-gray-400"
        }`}
        placeholder="Pasirinkite gimimo data"
        minLength={2}
        maxLength={40}
        value={inputs.userDate}
        onChange={handleInputChange}
      />
      {error && inputs.userDate === "" && (
        <p className="text-red-500 text-sm mb-2">
          Klaida! Pasirinkite savo vaiko gimimo datą
        </p>
      )}

      <button
        type="submit"
        className="bg-gradient-to-br from-green-400 to-lime-500 text-white my-2 font-bold py-2 px-6 md:py-4 md:px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform transition duration-300 ease-in-out hover:scale-105"
      >
        Siųsti
      </button>
    </form>
  );
};

export default Reg;