import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import CursorEffect from "./components/CursorEffect";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Extracurricular from "./components/Extracurricular";
import Hero from "./components/Hero";
import Academic from "./components/ProjectTypes/Academic";
import Mern from "./components/ProjectTypes/Mern";
import PSDtoHTML from "./components/ProjectTypes/PSDtoHTML";
import ReactProject from "./components/ProjectTypes/ReactProject";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import Tech from "./components/Tech";
import img from "./images/others/me.png";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <CursorEffect />
      <div className="flex min-h-screen overflow-x-hidden">
        {/* Sidebar - visible on large devices, toggle for small & medium */}
        <div
          className={`fixed top-0 left-0 z-40 h-screen w-72 bg-gray-900 transition-transform transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:fixed lg:top-0 lg:left-0`}
        >
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col min-h-screen bg-neutral-950  ">
          {/* Show toggle header always on non-large screens */}
          <div className="lg:hidden flex items-center justify-between bg-black p-3 text-white sticky top-0 z-30 shadow-md">
            <div className="flex items-center gap-2">
              <button onClick={() => setSidebarOpen(true)} className="text-2xl">
                &#9776;
              </button>
              <img
                src={img}
                alt="User"
                className="w-12 h-12 rounded-full border"
              />
              <span className="font-semibold whitespace-nowrap">
                Md. Abdur Rashid
              </span>
            </div>
          </div>

          {/* Main Content */}
          <main className="ml-0 lg:ml-72 flex-1 px-6 md:px-10 lg:px-16 xl:px-24 max-w-7xl mx-auto text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900">
            <Hero />
            <Tech />
            <Experience />
            <Routes>
              <Route path="/" element={<Projects />}>
                <Route index element={<Mern />} />
                <Route path="reactjs" element={<ReactProject />} />
                <Route path="psd" element={<PSDtoHTML />} />
                <Route path="academic" element={<Academic />} />
              </Route>
            </Routes>
            <Education />
            <Extracurricular />
            <Contact />
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
