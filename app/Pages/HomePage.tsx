import React from "react";
import Main from "../Components/Hero/index";
import AboutMe from "../Components/AboutMe";
import AboutYoga from "../Components/AboutYoga";
import Serivces from "../Components/Services";
import ContactsFooter from "../Components/ContactsFooter";
import Frog from "../Components/Frog";
import RegPage from "./RegPage";
import Reg from "../Components/Registration/Reg";

const HomePage = () => {
  return (
    <div>
      <Main />
      <div className="bg-gradient-to-br from-green-400 to-lime-600">
        <AboutMe />
        <AboutYoga />
        <Serivces />
      </div>
      <ContactsFooter />
      <Reg />
      <Frog />
    </div>
  );
};

export default HomePage;
