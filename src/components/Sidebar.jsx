import { useEffect, useState } from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import img from "../images/others/me.png";

const sections = [
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "extra", label: "Extracurricular" },
  { id: "contact", label: "Contact" },
];

const Sidebar = ({ onClose }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="flex flex-col justify-between h-screen w-72 bg-black text-white space-y-10 overflow-y-auto">
      {/* Right vertical line */}
      <div className="absolute top-[21px] bottom-[2px] right-0 w-[1px] bg-[#232323]"></div>

      <div>
        {/* Close Button on Small & Medium Devices */}
        <div className="lg:hidden flex justify-end px-4">
          <button onClick={onClose} className="text-white text-2xl">
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4 mb-8">
          <img
            src={img}
            alt="User"
            className="w-28 h-28 rounded-full border-2 border-white"
          />
          <h2 className="text-lg font-bold text-center">Md. Abdur Rashid</h2>
        </div>
        {/* section navigate */}
        <nav className="flex flex-col space-y-4 px-6">
          {sections.map(({ id, label }) => (
            <ScrollLink
              key={id}
              smooth={true}
              duration={1000}
              to={id}
              className={`transition-colors cursor-pointer ${
                activeSection === id
                  ? " font-bold text-cyan-400 "
                  : " hover:text-gray-300"
              }`}
              style={activeSection === id ? { color: "text-cyan-400" } : {}}
            >
              {label}
            </ScrollLink>
          ))}
        </nav>
      </div>
      <div className="mt-10 text-center text-sm text-gray-400 px-4">
        <div className="flex justify-center space-x-4 my-4">
          <a
            href="https://www.facebook.com/share/1HzJCxPUS1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-white text-xl  transition" />
          </a>
          <a
            href="https://github.com/Sawom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white text-xl transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdur-rashid-sawom-3379a0262"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-white text-xl  transition" />
          </a>
        </div>

        <p>© 2025 Md. Abdur Rashid </p>
      </div>
    </div>
  );
};

export default Sidebar;
