import { Linkedin, Instagram, Github } from "lucide-react";

const CTA = () => (
  <section id="contact" className="py-16 md:py-24 bg-[#F3F0FF]">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="bg-white rounded-2xl p-8 md:p-16 text-center border-2 border-black">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Let's work together
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          I'm open to full-time roles where I can contribute to building great
          products and grow as a developer. Let's talk!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="mailto:shivamgupta35967@gmail.com"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300"
          >
            shivamgupta35967@gmail.com
          </a>
          <div className="flex items-center space-x-2">
            <a
              href="https://www.linkedin.com/in/cse-shivam-gupta/"
              className="p-3 border border-gray-900/20 rounded-full hover:bg-gray-100 transition-colors"
            >
              {" "}
              <Linkedin size={18} />{" "}
            </a>
            <a
              href="https://www.instagram.com/shivamgupta35967/"
              className="p-3 border border-gray-900/20 rounded-full hover:bg-gray-100 transition-colors"
            >
              {" "}
              <Instagram size={18} />{" "}
            </a>
            <a
              href="https://github.com/Shivam-Gupta-Github"
              className="p-3 border border-gray-900/20 rounded-full hover:bg-gray-100 transition-colors"
            >
              {" "}
              <Github size={18} />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default CTA;
