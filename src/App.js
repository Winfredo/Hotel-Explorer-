
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import React from 'react';
// eslint-disable-next-line
import * as ReactDOM from "react-dom/client";
import Navbar from './components/Navbar/Navbar';
// eslint-disable-next-line
import { router } from './utils';



function App() {

  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
  );
}

export default App;
