const SocialLink = ({
  href,
  text,
  icon,
}: {
  href: string;
  text: string;
  icon: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-base md:text-lg font-medium text-gray-200 hover:text-yellow-500 transition duration-300 mb-4 transform hover:scale-105"
    >
      {icon}
      {text}
    </a>
  );
};

export default SocialLink;
