import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import SocialLink from "./SocialLink";

const SocialBox = () => {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
        Socialiniai tinklai
      </h2>
      <SocialLink
        href="https://facebook.com/profile.php?id=100095017083224"
        text="Facebook"
        icon={<FaFacebook className="mr-3" />}
      />
      <SocialLink
        href="https://instagram.com/yogi.frogi"
        text="Instagram"
        icon={<FaInstagram className="mr-3" />}
      />
      {/* <SocialLink
        href="https://youtube.com/channel"
        text="YouTube"
        icon={<FaYoutube className="mr-3" />}
      /> */}
    </div>
  );
};

export default SocialBox;
