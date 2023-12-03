import ContactBox from "./ContactBox";
import MenuBox from "./MenuBox";
import SocialBox from "./SocialBox";

const ContactsFooter = () => {
  return (
    <section className="border-t-2 bg-gradient-to-bl from-emerald-600 to-yellow-700 py-8 px-12 md:px-16 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <MenuBox />
        <ContactBox />
        <SocialBox />
      </div>
    </section>
  );
};

export default ContactsFooter;
