import { useState } from "react";
import { Link } from "react-scroll";
import { Transition } from "@headlessui/react";
import { logo } from "../constants/assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="fixed w-full bg-white text-gray-800 p-4 z-10 h-24">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:underline"
        >
          <img src={logo} alt="logo" className="h-20" />
        </Link>
        <div className="hidden md:flex space-x-4">
          {["home", "indigenous", "services", "faqs", "contact"].map((id) => (
            <Link
              key={id}
              to={id}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:underline"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <Transition
        show={menuOpen}
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 transform -translate-y-4"
        enterTo="opacity-100 transform translate-y-0"
        leave="transition duration-150 ease-in"
        leaveFrom="opacity-100 transform translate-y-0"
        leaveTo="opacity-0 transform -translate-y-4"
      >
        <div className="md:hidden bg-gray-800 text-white space-y-2 p-4">
          {["home", "indigenous", "services", "faqs", "contact"].map((id) => (
            <Link
              key={id}
              to={id}
              smooth={true}
              duration={500}
              className="block cursor-pointer hover:underline"
              onClick={toggleMenu}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
