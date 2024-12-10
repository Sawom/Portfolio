import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Extracurricular from "./components/Extracurricular";
import Academic from './components/ProjectTypes/Academic';
import ReactProject from './components/ProjectTypes/ReactProject';
import Mern from "./components/ProjectTypes/Mern";
import PSDtoHTML from "./components/ProjectTypes/PSDtoHTML";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-2">
        <Navbar />
        <Hero />
        <Tech />
        <Experience />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Projects />}>
              <Route path="" element={<Mern />}></Route>
              <Route path="reactjs" element={<ReactProject />}></Route>
              <Route path="psd" element={<PSDtoHTML />}></Route>
              <Route path="academic" element={<Academic />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
        <Education />
        <Extracurricular />
        <Contact />
      </div>
    </div>
  );
};

export default App;