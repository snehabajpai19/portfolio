import { Linkedin, Instagram, Github } from "lucide-react";
import { social } from "../data/links";

const CTA = () => (
  <section id="contact" className="py-16 md:py-24 bg-[#F3F0FF]">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="bg-white rounded-2xl p-8 md:p-16 text-center border-2 border-black">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Let’s work together
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          Open to internships and full‑time roles. I enjoy building
          production‑ready apps and learning new stacks. Let’s talk!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={social.email}
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300"
          >
            sneha.bajpai1903@gmail.com
          </a>
          <div className="flex items-center space-x-2">
            <a
              href={social.linkedin || "#"}
              target={social.linkedin ? "_blank" : undefined}
              rel={social.linkedin ? "noopener noreferrer" : undefined}
              className="p-3 border border-gray-900/20 rounded-full hover:bg-gray-100 transition-colors"
            >
              {" "}
              <Linkedin size={18} />{" "}
            </a>
            {social.instagram && (
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-900/20 rounded-full hover:bg-gray-100 transition-colors"
              >
                {" "}
                <Instagram size={18} />{" "}
              </a>
            )}
            <a
              href={social.github || "#"}
              target={social.github ? "_blank" : undefined}
              rel={social.github ? "noopener noreferrer" : undefined}
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
