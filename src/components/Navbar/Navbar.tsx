import ColorMode from "./ColorMode";
import Hotel from "./Hotel";
import Language from "./Language";
import Logo from "./Logo";
import Profile from "./Profile";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="pt-6  px-11.5 flex items-center justify-between">
      <div className="flex  items-center gap-4">
        <Logo />

        <Profile />
      </div>
      <div className="max-w-[34.375rem] w-full">
        <Search />
      </div>
      <div className="flex items-center gap-4">
        <Language />
        <ColorMode />
        <Hotel />
      </div>
    </div>
  );
};

export default Navbar;
