import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
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
          path="/garance-portfolio"
          element={<Home darkMode={darkMode} />}
        />
        <Route
          path="/garance-portfolio/about"
          element={<About />}
        />
        <Route
          path="/garance-portfolio/portfolio"
          element={<Portfolio />}
        />
        <Route
          path="/garance-portfolio/portfolio/:id"
          element={<Projects />}
        />
        <Route
          path="/garance-portfolio/contact"
          element={<Contact />}
        />
        <Route
          path="/garance-portfolio/*"
          element={<Error />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
