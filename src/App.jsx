// App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/About";
import { AnimatePresence } from "framer-motion";
import Sidebar  from "./components/Sidebar";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import MobileNavbar from "./components/MobileNavbar ";

function App() {
  const location = useLocation();

  return (
    <div className="lg:flex lg:h-screen lg:bg-portfolio bg-black bg-cover bg-no-repeat bg-center lg:gap-10 overflow-hidden">
      <div className="lg:w-1/6">
        <Sidebar />
      </div>
      <main className="lg:w-5/6">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<About />} />
            <Route path="/experiencia" element={<Experience />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <MobileNavbar/>
      </main>
    </div>
  );
}

export default App;
