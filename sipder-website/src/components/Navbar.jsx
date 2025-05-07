import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative flex justify-between items-center">
      <div className="container mx-auto px-6 py-4 relative flex justify-between items-center">
        {/* Logo */}
        <a href="/" class="avatar w-40 rounded">
          <img src="../imgs/SIPDERLogo_V1_transparent_body.png" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 flex justify-between items-center">
          <ul className="flex space-x-4">
            <li>
              <motion.div
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/" className="block py-2 px-6 border-b hover:text-blue-500">
                  Home
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.a
                href="#mission"
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname !== "/") {
                    navigate("/#mission"); // this triggers location change
                  } else {
                    const section = document.getElementById("mission");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }
                }}
                className="block py-2 px-6 border-b hover:text-blue-500"
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                Mission
              </motion.a>
            </li>
            <li>
              <motion.div
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/team" className="block py-2 px-6 border-b hover:text-blue-500">
                  Team
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/demo" className="block py-2 px-6 border-b hover:text-blue-500">
                  Demo Video
                </Link>
              </motion.div>
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
          className="top-full left-0 w-full md:hidden bg-black border-t shadow-md"
        >
          <Link to="/" className="block py-1 px-6 border-b" onClick={toggleMenu}>
            Home
          </Link>
          <motion.a
            href="#mission"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname !== "/") {
                navigate("/#mission"); // this triggers location change
              } else {
                const section = document.getElementById("mission");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }
            }}
            className="block py-2 px-6 border-b hover:text-blue-500"
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            Mission
          </motion.a>
          <Link to="/team" className="block py-1 px-6 border-b" onClick={toggleMenu}>
            Team
          </Link>
          <Link to="/demo" className="block py-1 px-6 border-b" onClick={toggleMenu}>
            Demo Video
          </Link>
          {/* <Link to="/contact" className="block py-1 px-6" onClick={toggleMenu}>
            Contact
          </Link> */}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
