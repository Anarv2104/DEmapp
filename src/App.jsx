// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Documentation from "./pages/Documentation"; // 👈 import Documentation page
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> {/* optional alias */}
        <Route path="/about" element={<About />} />
        <Route path="/documentation" element={<Documentation />} /> {/* 👈 new route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}