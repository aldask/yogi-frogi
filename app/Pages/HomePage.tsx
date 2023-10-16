import React from "react";
import Main from "../Components/Hero/index";
import Serivces from "../Components/Services";
import AboutYoga from "../Components/AboutYoga";
import AboutMe from "../Components/AboutMe";
import ContactsFooter from "../Components/ContactsFooter";

const HomePage = () => {
  return (
    <div>
      <Main />
      <div className="bg-gradient-to-br from-green-400 to-lime-600">
        <AboutYoga />
        <AboutMe />
        <Serivces />
      </div>
      <ContactsFooter />
    </div>
  );
};

export default HomePage;
