import { useState } from "react";
import { headerMenu } from "@/constants";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { themeHandler } from "@/utils/themeHandler";
import { cn } from "@/lib/utils";
import { useTheme } from "@/providers/theme-provider";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../images/cylezen-logo.png";

const Navbar = () => {
  const { theme } = useTheme();
  const { textColor } = themeHandler({ theme });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mx-auto h-16 flex items-center">
      {/* Logo */}
      <Link to="/">
        <img
          className={cn(
            "w-52 h-32",
            theme === "light" ? "bg-black rounded-[100%] w-20" : "bg-none -ml-6"
          )}
          src={Logo}
          alt="Logo"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 ml-10">
        {headerMenu?.map((menu) => (
          <Link to={`/${menu.value}`} key={menu.label}>
            <p className="font-inter">{menu.label}</p>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden ml-auto" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md p-4 flex flex-col gap-4 md:hidden">
          {headerMenu?.map((menu) => (
            <Link
              to={`/${menu.value}`}
              key={menu.label}
              className="block text-lg text-gray-800 dark:text-white"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {menu.label}
            </Link>
          ))}
        </div>
      )}

      {/* Right Section */}
      <div className="ml-auto hidden md:flex gap-6 items-center">
        <Button
          variant="outline"
          className={cn(`text-${textColor} font-outfit`)}
        >
          <Link to="/login">Login</Link>
        </Button>
        <Button className={cn(`text-${textColor} font-outfit`)}>
          <Link to="/register">Register</Link>
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
