import { useState } from "react";
import { Link } from "react-scroll";
import { Transition } from "@headlessui/react";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="font-Poppins">
      {/* Navbar */}
      <nav className="fixed w-full bg-gray-800 text-white p-4 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">Tech Contributions</h1>
          <div className="hidden md:flex space-x-4">
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:underline">
              Home
            </Link>
            <Link to="indigenous" smooth={true} duration={500} className="cursor-pointer hover:underline">
              About
            </Link>
            <Link to="services" smooth={true} duration={500} className="cursor-pointer hover:underline">
              Services
            </Link>
            <Link to="faqs" smooth={true} duration={500} className="cursor-pointer hover:underline">
              FAQs
            </Link>
            <Link to="footer" smooth={true} duration={500} className="cursor-pointer hover:underline">
              Contact
            </Link>
          </div>
          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <Transition
          show={menuOpen}
          enter="transition duration-200 ease-out"
          enterFrom="opacity-0 transform -translate-y-4"
          enterTo="opacity-100 transform translate-y-0"
          leave="transition duration-150 ease-in"
          leaveFrom="opacity-100 transform translate-y-0"
          leaveTo="opacity-0 transform -translate-y-4">
          <div className="md:hidden bg-gray-800 text-white space-y-2 p-4">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="block cursor-pointer hover:underline"
              onClick={toggleMenu}>
              Home
            </Link>
            <Link
              to="indigenous"
              smooth={true}
              duration={500}
              className="block cursor-pointer hover:underline"
              onClick={toggleMenu}>
              About
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="block cursor-pointer hover:underline"
              onClick={toggleMenu}>
              Services
            </Link>
            <Link
              to="faqs"
              smooth={true}
              duration={500}
              className="block cursor-pointer hover:underline"
              onClick={toggleMenu}>
              FAQs
            </Link>
            <Link
              to="footer"
              smooth={true}
              duration={500}
              className="block cursor-pointer hover:underline"
              onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </Transition>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="h-screen flex items-center justify-center bg-blue-600 text-white text-center px-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Our Technology Contributions Platform</h1>
          <p className="text-lg">Pioneering technology advancements in Nigeria</p>
        </div>
      </section>

      {/* Indigenous Technology Development */}
      <section id="indigenous" className="py-16 bg-gray-100 text-gray-700 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Indigenous Technology Development Contributions</h2>
          <p>
            We empower local talents to innovate in areas like hardware, firmware, and software,
            contributing to Nigeria's technological advancements.
          </p>
        </div>
      </section>

      {/* Chip Design Section */}
      <section className="py-16 bg-white text-gray-700 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Making Chip Design Accessible to Nigerians</h2>
          <p>
            We focus on creating opportunities for Nigerians to participate in chip design and
            hardware engineering fields.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100 text-gray-700 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Web Application Development",
              "Chip Design",
              "Firmware Development",
              "Hardware Repair",
              "Security Analysis",
              "Drone Technology",
              "Product Design",
              "Software System Architecture Design",
              "Hardware Analysis and Design",
              "Artificial Intelligence",
              "Edge Computing",
              "Robotics",
              "Capacity Development Trainings",
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-lg md:text-xl font-bold mb-2">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-16 bg-white text-gray-700 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">FAQs</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">What is Indigenous Technology Development?</h3>
              <p>
                It refers to efforts aimed at leveraging local talents to build technologies that meet
                specific community needs.
              </p>
            </div>
            <div>
              <h3 className="font-bold">How can I get involved in your programs?</h3>
              <p>
                Reach out through our contact section below to learn more about partnership or
                enrollment opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="py-10 bg-gray-800 text-white px-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Chukwunenye Moses. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;