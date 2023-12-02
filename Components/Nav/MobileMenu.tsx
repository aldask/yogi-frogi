import NavItem from "./NavItem";

const MobileMenu: React.FC<{
  showMenu: boolean;
  toggleMenu: () => void;
  scroll: (id: string) => void;
}> = ({ showMenu, scroll }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 w-1/2 h-full md:hidden flex flex-col items-center justify-center gap-2 transition-transform duration-300 ease-in-out ${
        showMenu ? "transform translate-x-0" : "transform translate-x-full"
      } bg-white`}
    >
      <NavItem href="/" onClick={() => scroll("hero")} text="Pagrindinis" />
      <NavItem
        href="/registracija"
        onClick={() => scroll("registracija")}
        text="Registruotis"
      />
    </div>
  );
};

export default MobileMenu;
