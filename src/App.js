// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Pastikan menggunakan Switch

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./pages/About_us";
import Contact from "./pages/Contact";
import Home from "./pages/Home";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Home} /> 
      </Routes>
      <Hero />
      <Footer />
    </Router>
  );
};

export default App;
