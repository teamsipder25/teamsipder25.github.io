import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative flex justify-between items-center">
      <div className="container mx-auto px-6 py-4 relative flex justify-between items-center">
        {/* Logo */}
        <a href="/" class="avatar w-24 rounded">
          <img src="../public/imgs/SIPDERLogo_V1.png" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 flex justify-between items-center">
          <ul className="flex space-x-4">
            <li>
              {/* <Link to="/about" className="block py-2 px-6 border-b hover:text-blue-500">
                About
              </Link> */}
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("about");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="block py-2 px-6 border-b hover:text-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <Link to="/services" className="block py-2 px-6 border-b hover:text-blue-500">
                Services
              </Link>
            </li>
            <li>
              <Link to="/team" className="block py-2 px-6 border-b hover:text-blue-500">
                Team
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-6 border-b hover:text-blue-500">
                Contact
              </Link>
              {/* <a href="#contact" className="block py-2 px-6 border-b hover:text-blue-500">
                Contact
              </a> */}
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-full left-0 w-full md:hidden bg-gray-600 border-t shadow-md"
        >
          <Link tp="/" className="block py-2 px-6 border-b" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className="block py-2 px-6 border-b" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/team" className="block py-2 px-6 border-b" onClick={toggleMenu}>
            Team
          </Link>
          <Link to="/services" className="block py-2 px-6 border-b" onClick={toggleMenu}>
            Services
          </Link>
          <Link to="/contact" className="block py-2 px-6" onClick={toggleMenu}>
            Contact
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
