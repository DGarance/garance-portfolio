import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar} from "./components";
import { Home, About, Projects, Error, Contact, Portfolio } from "./pages";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Routes>
        <Route
          path="/home"
          element={<Home darkMode={darkMode} />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/portfolio"
          element={<Portfolio />}
        />
        <Route
          path="/portfolio/:id"
          element={<Projects />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
