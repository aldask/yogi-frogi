import MenuLink from "./MenuLink";

const MenuBox = () => {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
        Meniu
      </h2>
      <MenuLink href="hero" text="Grįžti į viršų" />
      <MenuLink href="apie-mane" text="Apie Mane" />
      <MenuLink href="apie-joga" text="Apie Jogą" />
    </div>
  );
};

export default MenuBox;
