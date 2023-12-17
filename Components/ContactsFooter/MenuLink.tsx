"use client";

const MenuLink = ({ href, text }: { href: string; text: string }) => {
  const scroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={() => scroll(href)}
      className="text-base md:text-lg font-medium text-gray-200 hover:text-yellow-500 transition duration-300 mb-4 block transform hover:scale-105"
    >
      {text}
    </button>
  );
};

export default MenuLink;
