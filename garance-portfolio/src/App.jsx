import React from "react";
import { Routes, Route } from "react-router-dom";
import { Button, Card, Footer, FormContact, Navbar, ProgressCircle, Tag } from "./components";
import { CTA, Hero, Intro, Skills } from "./section";
import { About, Error, Contact, Home, Portfolio, Projects } from "./pages";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/about"
          element={<About />}></Route>
        <Route
          path="/contact"
          element={<Contact />}></Route>
        <Route
          path="/error"
          element={<Error />}></Route>
        <Route
          path="/home"
          element={<Home />}></Route>
        <Route
          path="/portfolio"
          element={<Portfolio />}></Route>
        <Route
          path="/projects"
          element={<Projects />}></Route>
      </Routes>
    </div>
  );
}
