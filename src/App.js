import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/services" element={<Services />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
