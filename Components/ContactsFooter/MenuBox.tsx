import MenuLink from "./MenuLink";

const MenuBox = () => {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
        Meniu
      </h2>
      <MenuLink href="/" text="Grįžti į viršų" />
      <MenuLink href="/" text="Apie Mane" />
      <MenuLink href="/" text="Apie Jogą" />
      <MenuLink href="/" text="Informacija" />
    </div>
  );
};

export default MenuBox;
