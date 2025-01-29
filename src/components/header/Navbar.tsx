import { useState } from "react";
import { headerMenu } from "@/constants";
import { ModeToggle } from "../mode-toggle";
import SubTitle from "../ui/subtitle";
import { Button } from "../ui/button";
import { themeHandler } from "@/utils/themeHandler";
import { cn } from "@/lib/utils";
import { useTheme } from "@/providers/theme-provider";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
            "w-16",
            theme === "light" ? "bg-black rounded-full" : "bg-none"
          )}
          src="https://s3-alpha-sig.figma.com/img/7b9f/86bd/ed49ac106692c8d48d005987f226611a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TfMdXZRU4s24QufjNUqVly1nwwmcZY~hDFsYgA8WVcEZ1R-tG84Op9NTI5KjmTKFcosrd-3lH4r07JE5KqhjtxL8QZLtJ0IfjgOjpNa5ggntzgs0-bvbEm3Uhar~ygi7j5cUKnw3H79D7mE61MsZKyTH8CsGDwJOGkoF61zgAe3HYtc04NrOofvSALeQ05t5edG0q5c~htypKet8Ay1DP~jvBIY9FDiY6iWcOyn1z9dFrmAO6XeaILhmHptiwnUFnMF~RmK6YPD4FmdZjo3rW05X2k~JlfWVsJTwZLKGZbqjxHQ87cHcWUMwbwPx2oGaniiM3WMTRgN1pmjvrcLDWg__"
          alt="Logo"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 ml-10">
        {headerMenu?.map((menu) => (
          <Link to={`/${menu.value}`} key={menu.label}>
            <SubTitle text={menu.label} fontSize="base" color={textColor} />
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
        <Button variant="outline" className={cn(`text-${textColor}`)}>
          <Link to="/login">Login</Link>
        </Button>
        <Button className="text-white">
          <Link to="/register">Register</Link>
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
