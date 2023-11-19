"use client";
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import InputComp from "./InputComp";

interface Inputs {
  fatherName: string;
  fatherSurname: string;
  fatherEmail: string;
  fatherTel: string;
  kidName: string;
  kidBirthDate: string;
  message: string;
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
    fatherName: "",
    fatherSurname: "",
    fatherEmail: "",
    fatherTel: "",
    kidName: "",
    kidBirthDate: "",
    message: "",
  });
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const regexPatterns: Record<string, RegExp> = {
      fatherName: /^[a-zA-Z]+$/,
      fatherSurname: /^[a-zA-Z]+$/,
      fatherEmail: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      fatherTel: /^\+370\d{8,}$/,
      kidName: /^[a-zA-Z]+$/,
      kidBirthDate: /^\d{4}-\d{2}-\d{2}$/,
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
            setError(false);
            setSuccess(true);
            setInputs({
              fatherName: "",
              fatherSurname: "",
              fatherEmail: "",
              fatherTel: "",
              kidName: "",
              kidBirthDate: "",
              message: "",
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
    <div className="py-32 md:py-18 px-8 md:px-14 flex flex-col md:flex-row items-center justify-around gap-16 bg-gradient-to-r from-gray-100 to-gray-400 text-white">
      <div className="headerWrapper bg-gray-600 p-6 rounded-md shadow-lg flex flex-col w-full md:w-1/2">
        <h2 className="headerWrapper font-bold text-3xl mb-8 md:text-5xl">
          Grupinės treniruotės
        </h2>
        <p className="text-sm md:text-lg text-center md:text-left text-white mb-8 md:mb-0">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem,
          alias magni accusamus tempore molestiae unde totam et officiis
          delectus culpa optio!
        </p>
        <p className="text-sm md:text-lg text-center md:text-left text-white mb-8 md:mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facilis
          aliquid quisquam ipsam repellendus tenetur nulla nihil velit. Libero
          assumenda veritatis, itaque adipisci eveniet repellat fuga magnam
          quidem sunt deleniti eaque, voluptatum aliquid numquam praesentium
          error atque? Laboriosam dignissimos, aliquid aut suscipit, doloremque
          consectetur magnam facere quae doloribus enim debitis similique
          maiores atque? Aspernatur deserunt, commodi animi beatae itaque
          doloremque!
        </p>
      </div>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="imageWrapper bg-gray-600 p-6 rounded-md shadow-lg w-full md:w-1/2"
      >
        {error && (
          <p className="text-[#f54747] text-2xl mb-2 font-semibold">
            Visi laukai turi būti užpildyti!
          </p>
        )}
        {success && (
          <p className="text-green-500 text-2xl mb-2 font-semibold">
            Jūsų registracija sėkminga!
          </p>
        )}
        <InputComp
          label="Vieno iš tėvų Vardas"
          type="text"
          name="fatherName"
          className={`border-2 border-green-600 text-gray-800 rounded-md py-2 px-4 w-full my-2 focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-500 ${
            inputs.fatherName ? "" : "border-gray-400"
          }`}
          placeholder="Vardas"
          minLength={2}
          maxLength={40}
          value={inputs.fatherName}
          onChange={handleInputChange}
        />
        {error && inputs.fatherName === "" && (
          <p className="text-[#f54747] text-md mb-2 font-semibold">
            Klaida! Įrašykite savo vardą
          </p>
        )}
        <InputComp
          label="Pavardė"
          type="text"
          name="fatherSurname"
          className={`bg-green border-2 border-green-600 text-gray-800 rounded-md py-2 px-4 w-full my-2 focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-500 ${
            inputs.fatherSurname ? "" : "border-gray-400"
          }`}
          placeholder="Pavardė"
          minLength={2}
          maxLength={40}
          value={inputs.fatherSurname}
          onChange={handleInputChange}
        />
        {error && inputs.fatherSurname === "" && (
          <p className="text-[#f54747] text-md mb-2 font-semibold">
            Klaida! Įrašykite savo pavardę
          </p>
        )}
        <InputComp
          label="Jūsų el. paštas"
          type="email"
          name="fatherEmail"
          className={`bg-green border-2 border-green-600 text-gray-800 rounded-md py-2 px-4 w-full my-2 focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-500 ${
            inputs.fatherEmail ? "" : "border-gray-400"
          }`}
          placeholder="El. Paštas"
          minLength={2}
          maxLength={40}
          value={inputs.fatherEmail}
          onChange={handleInputChange}
        />
        {error && inputs.fatherEmail === "" && (
          <p className="text-[#f54747] text-md mb-2 font-semibold">
            Klaida! Įrašykite savo el. paštą
          </p>
        )}
        <InputComp
          label="Jūsų telefono numeris"
          type="tel"
          name="fatherTel"
          className={`bg-green border-2 border-green-600 text-gray-800 rounded-md py-2 px-4 w-full my-2 focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-500 ${
            inputs.fatherTel ? "" : "border-gray-400"
          }`}
          placeholder="+370..."
          minLength={12}
          maxLength={12}
          value={inputs.fatherTel}
          onChange={handleInputChange}
        />
        {error && inputs.fatherTel === "" && (
          <p className="text-[#f54747] text-md mb-2 font-semibold">
            Klaida! Įrašykite savo telefono numerį
          </p>
        )}
        <InputComp
          label="Jūsų vaiko vardas"
          type="text"
          name="kidName"
          className={`bg-green border-2 border-green-600 text-gray-800 rounded-md py-2 px-4 w-full my-2 focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-500 ${
            inputs.kidName ? "" : "border-gray-400"
          }`}
          placeholder="Vaiko vardas"
          minLength={2}
          maxLength={40}
          value={inputs.kidName}
          onChange={handleInputChange}
        />
        {error && inputs.kidName === "" && (
          <p className="text-[#f54747] text-md mb-2 font-semibold">
            Klaida! Įrašykite savo vaiko vardą
          </p>
        )}
        <InputComp
          label="Jūsų vaiko amžius"
          type="date"
          name="kidBirthDate"
          className={`bg-green border-2 border-green-600 text-gray-800 rounded-md py-2 px-4 w-full my-2 focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-500 ${
            inputs.kidBirthDate ? "" : "border-gray-400"
          }`}
          placeholder="Pasirinkite gimimo data"
          value={inputs.kidBirthDate}
          onChange={handleInputChange}
        />
        {error && inputs.kidBirthDate === "" && (
          <p className="text-[#f54747] text-md mb-2 font-semibold">
            Klaida! Pasirinkite savo vaiko gimimo datą
          </p>
        )}
        <label className="text-lg font-semibold">
          Papildoma informacija ar klausimai
        </label>
        <textarea
          name="message"
          value={inputs.message}
          onChange={handleInputChange}
          className="bg-green border-2 border-green-600 text-gray-800 rounded-md py-2 px-4 w-full my-2 focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-500"
        />
        <button
          type="submit"
          className="bg-gradient-to-br from-green-400 to-lime-500 text-white my-2 font-bold py-2 px-6 md:py-4 md:px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform transition duration-300 ease-in-out hover:scale-105"
        >
          Siųsti
        </button>
      </form>
    </div>
  );
};

export default Reg;
