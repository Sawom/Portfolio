import { NavLink } from "react-router-dom";
import img from "../images/others/me.png";

const Sidebar = ({ onClose }) => {
  return (
    <div className="flex flex-col justify-between h-screen w-72 bg-gray-900 text-white py-6 overflow-y-auto">
      <div>
        {/* Close Button on Small & Medium Devices */}
        <div className="lg:hidden flex justify-end px-4">
          <button onClick={onClose} className="text-white text-2xl">
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center space-y-2 mb-8">
          <img
            src={img}
            alt="User"
            className="w-24 h-24 rounded-full border-2 border-white"
          />
          <h2 className="text-lg font-bold text-center">Md. Abdur Rashid</h2>
        </div>
        <nav className="flex flex-col space-y-4 px-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "text-cyan-400 font-bold" : "hover:text-gray-300"
            }
          >
            MERN
          </NavLink>
          <NavLink
            to="/reactjs"
            className={({ isActive }) =>
              isActive ? "text-cyan-400 font-bold" : "hover:text-gray-300"
            }
          >
            React
          </NavLink>
          <NavLink
            to="/psd"
            className={({ isActive }) =>
              isActive ? "text-cyan-400 font-bold" : "hover:text-gray-300"
            }
          >
            PSD to HTML
          </NavLink>
          <NavLink
            to="/academic"
            className={({ isActive }) =>
              isActive ? "text-cyan-400 font-bold" : "hover:text-gray-300"
            }
          >
            Academic
          </NavLink>
        </nav>
      </div>
      <div className="mt-10 text-center text-sm text-gray-400 px-4">
        <div className="flex justify-center gap-4 mb-2">
          <a href="#" className="hover:text-white">
            📘
          </a>
          <a href="#" className="hover:text-white">
            🎯
          </a>
          <a href="#" className="hover:text-white">
            📺
          </a>
          <a href="#" className="hover:text-white">
            💼
          </a>
        </div>
        <p>© 2025 Md. Abdur Rashid </p>
      </div>
    </div>
  );
};

export default Sidebar;
