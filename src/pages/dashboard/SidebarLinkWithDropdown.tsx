import React, { useState } from "react";

interface SidebarLinkWithDropdownProps {
  text: string;
  icon: string;
  subLinks: { text: string; onClick: () => void }[]; // Array of sub-links
  isActive: boolean;
  onClick: () => void; // Main link click handler
}

const SidebarLinkWithDropdown: React.FC<SidebarLinkWithDropdownProps> = ({
  text,
  icon,
  subLinks,
  isActive,
  onClick,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`flex items-center p-3 w-full text-left rounded-md transition-all duration-200 hover:bg-gray-700 ${
          isActive ? "bg-gray-800 text-white" : "text-gray-300"
        }`}
      >
        <span className="mr-3 text-xl">{icon}</span>
        <span className="font-semibold">{text}</span>
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute left-0 mt-2 w-full bg-gray-800 rounded-md shadow-md">
          {subLinks.map((subLink, index) => (
            <button
              key={index}
              onClick={subLink.onClick}
              className="w-full text-left text-gray-300 hover:bg-gray-700 p-3"
            >
              {subLink.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarLinkWithDropdown;
