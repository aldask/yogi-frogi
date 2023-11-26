import AboutMe from "../Components/AboutMe/index";
import AboutYoga from "../Components/AboutYoga/index";
import ContactsFooter from "../Components/ContactsFooter/index";
import Frog from "../Components/Frog/index";
import Main from "../Components/Hero/index";
import Navbar from "../Components/Nav/Nav";
import Services from "../Components/Services/index";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Main />
      <div className="bg-gradient-to-br from-green-700 to-lime-900 bg-blend-soft-light bg-opacity-80 shadow-lg transition-all duration-500">
        <AboutMe />
        <AboutYoga />
        <Services />
      </div>
      <ContactsFooter />
      <Frog />
    </main>
  );
}
