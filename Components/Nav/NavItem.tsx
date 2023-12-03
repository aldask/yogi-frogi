import Link from "next/link";

const NavItem: React.FC<{
  href: string;
  onClick: () => void;
  text: string;
}> = ({ href, onClick, text }) => {
  return (
    <Link href={href}>
      <button
        onClick={onClick}
        className="mx-3 bg-yellow-500 hover:bg-yellow-600 text-green-800 font-semibold py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-300 ease-in-out cursor-pointer transform hover:scale-105"
      >
        {text}
      </button>
    </Link>
  );
};

export default NavItem;
