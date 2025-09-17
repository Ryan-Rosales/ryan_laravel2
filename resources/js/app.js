import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ContactManager from "./Pages/ContactManager";

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/manage-contacts" element={<ContactManager />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

// React 17 mounting
const container = document.getElementById("app");
if (container) {
  ReactDOM.render(<App />, container);
}
