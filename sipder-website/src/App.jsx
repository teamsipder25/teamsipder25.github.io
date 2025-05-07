import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Imported pages
import Home from "./pages/Home";
import TeamPage from "./pages/TeamPage";
import Footer from "./components/Footer";
import FullDemoPage from "./pages/FullDemoPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/demo" element={<FullDemoPage />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;
