const Footer = () => (
  <footer className="bg-white text-gray-600 py-8 border-t-2 border-black">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="mb-4 md:mb-0 text-sm">&copy; 2025 Sneha Bajpai. Always learning, always building.</p>
        <div className="flex items-center space-x-6 text-sm">
          <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

