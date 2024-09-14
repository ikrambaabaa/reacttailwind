import React from "react";
import { IoMdMenu } from "react-icons/io";

const NavbarMenu = [
  { id: 1, title: "Home", path: "#" },
  { id: 2, title: "About", path: "#" },
  { id: 3, title: "Services", path: "#" },
  { id: 4, title: "Contact", path: "#" },
  { id: 5, title: "Blog", path: "#" },
];

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-0">
        <h1 className="font-bold text-2xl">The Coding Journey</h1>
        <div className="hidden lg:block">
          <ul className="flex items-center space-x-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="relative group">
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-blue-500"
                >
                  {menu.title}
                  <div className="w-2 h-2 bg-blue-500 absolute left-1/2 transform -translate-x-1/2 -bottom-1 rounded-full group-hover:block hidden"></div>
                </a>
              </li>
            ))}
            <li>
              <button className="primary-btn" aria-label="Sign In">
                SIGN IN
              </button>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <IoMdMenu className="text-3xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
