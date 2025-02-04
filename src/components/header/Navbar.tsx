import { useState } from "react";
import { headerMenu } from "@/constants";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { themeHandler } from "@/utils/themeHandler";
import { cn } from "@/lib/utils";
import { useTheme } from "@/providers/theme-provider";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import Logo from "../../images/cylezen-logo.png";
import { Badge } from "../ui/badge";
import { useAppSelector } from "@/redux/hooks/hooks";
import {
  selectCurrentUser,
  useCurrentToken,
} from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { AvatarMenu } from "./AvatarMenu";

const Navbar = () => {
  const cartData = useAppSelector((state) => state.cart);
  const { theme } = useTheme();
  const { textColor } = themeHandler({ theme });
  const [isOpen, setIsOpen] = useState(false);
  const cartCount = cartData?.items.length;
  const token = useAppSelector(useCurrentToken);
  let user;

  if (token) {
    user = verifyToken(token);
  }

  return (
    <nav className="mx-auto h-16 flex items-center relative z-10 py-2 md:py-10 px-5 md:px-10 lg:px-20">
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
        <Link to="/cart" className="relative flex items-center space-x-2">
          <ShoppingCart className="w-6 h-6" />
          {cartCount > 0 && (
            <Badge className="absolute -top-3 -right-2 bg-bright-royal-blue text-white rounded-full text-xs px-2 py-1">
              {cartCount}
            </Badge>
          )}
        </Link>
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
          <Link to="/cart" className="relative flex items-center space-x-2">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <Badge className="absolute -top-3 -right-2 bg-bright-royal-blue text-white rounded-full text-xs px-2 py-1">
                {cartCount}
              </Badge>
            )}
          </Link>
        </div>
      )}
      {/* Right Section */}
      {!user ? (
        <div className="ml-auto hidden md:flex gap-6 items-center">
          <Link to="/login">
            <Button
              variant="outline"
              className={cn(`text-${textColor} font-outfit`)}
            >
              Login
            </Button>
          </Link>
          <Button className={cn(`text-${textColor} font-outfit`)}>
            <Link to="/register">Register</Link>
          </Button>
          <ModeToggle />
        </div>
      ) : (
        <div className="ml-auto hidden md:flex gap-6 items-center">
          <AvatarMenu />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
