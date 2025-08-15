import { Menu, X, Github, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    "Home",
    "Skills",
    "About",
    "Projects",
    "Achievements",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="text-2xl font-bold text-gray-900 tracking-wider"
          >
            Shivam
          </a>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-0">
            <a
              href="https://github.com/Shivam-Gupta-Github"
              className="inline-flex items-center justify-center p-3 bg-white text-black rounded-xl border-2 border-black shadow-[5px_5px_0_0_#dadaff] transition-all duration-200 hover:translate-x-[5px] hover:translate-y-[5px] hover:shadow-none"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/cse-shivam-gupta/"
              className="inline-flex ml-3 items-center justify-center p-3 bg-white text-black rounded-xl border-2 border-black shadow-[5px_5px_0_0_#dadaff] transition-all duration-200 hover:translate-x-[5px] hover:translate-y-[5px] hover:shadow-none"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/shivamgupta35967/"
              className="inline-flex ml-3 items-center justify-center p-3 bg-white text-black rounded-xl border-2 border-black shadow-[5px_5px_0_0_#dadaff] transition-all duration-200 hover:translate-x-[5px] hover:translate-y-[5px] hover:shadow-none"
            >
              <Instagram size={18} />
            </a>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 focus:outline-none"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-white px-6 pb-4 border-t-2 border-black">
          <nav className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-left py-2 font-medium"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
