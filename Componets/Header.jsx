import React from "react";
import { BoltIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="bg-gray-600 flex items-center justify-between">
      {/* Logo Sections */}
      <div>
        <BoltIcon className="h-6 w-6 text-blue-600" />
        <span className="text-blue-500">nextPage</span>
      </div>
      {/* Navbar Sections */}
    </div>
  );
};

export default Header;
