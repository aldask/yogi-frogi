import AboutMe from "@/Components/AboutMe";
import AboutYoga from "@/Components/AboutYoga";
import ContactsFooter from "@/Components/ContactsFooter";
import Frog from "@/Components/Frog";
import Main from "@/Components/Hero";
import Services from "@/Components/Services";

export default function Home() {
  return (
    <main>
      <Main />
      <div className="bg-gradient-to-br from-green-400 to-lime-600">
        <AboutMe />
        <AboutYoga />
        <Services />
      </div>
      <ContactsFooter />
      <Frog />
    </main>
  );
}
