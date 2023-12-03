import Link from "next/link";

const MenuLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link href={href}>
      <button className="text-base md:text-lg font-medium text-gray-200 hover:text-yellow-500 transition duration-300 mb-4 block transform hover:scale-105">
        {text}
      </button>
    </Link>
  );
};

export default MenuLink;
