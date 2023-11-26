import { FaPhone, FaEnvelope } from "react-icons/fa";
import ContactLink from "./ContactLink";

const ContactBox = () => {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
        Kontaktai
      </h2>
      <ContactLink
        href="tel:+37068194588"
        text="+370 681 94588"
        icon={<FaPhone className="mr-3" />}
      />
      <ContactLink
        href="mailto:yogifrogi.lt@gmail.com"
        text="yogifrogi.lt@gmail.com"
        icon={<FaEnvelope className="mr-3" />}
      />
    </div>
  );
};

export default ContactBox;
