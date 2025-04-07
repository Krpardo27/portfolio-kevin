// App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/About";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import MobileNavbar from "./components/MobileNavbar ";
import Education from "./pages/Education";
import { DarkModeToggle } from "./components/DarkModeToggle ";

function App() {
  const location = useLocation();

  return (
    <div className="lg:flex dark:lg:bg-darkMode bg-[#FBFBFB] lg:bg-cover lg:bg-no-repeat lg:bg-center lg:gap-20 overflow-hidden bg-fixed h-screen">
      <div className="lg:w-1/6 lg:h-screen">
        <Sidebar />
      </div>

      <main className="lg:w-5/6 lg:container mx-auto pb-10  scrollbar-custom lg:rounded-lg rounded-lg h-screen lg:m-5">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<About />} />
            <Route path="/educacion" element={<Education />} />
            <Route path="/experiencia" element={<Experience />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <div className="lg:hidden flex">
          <MobileNavbar />
          <DarkModeToggle />
        </div>
      </main>
    </div>
  );
}

export default App;
