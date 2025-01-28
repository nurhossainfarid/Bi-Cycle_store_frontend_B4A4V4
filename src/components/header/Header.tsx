import Navbar from "./Navbar";
import NavbarContent from "./NavbarContent";

const Header = ({ theme }) => {
  return (
    <div>
      <Navbar theme={theme} />
      <NavbarContent theme={theme} />
      <hr />
    </div>
  );
};

export default Header;
