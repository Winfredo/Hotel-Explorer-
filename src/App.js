<<<<<<< HEAD
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
=======
import './App.css';
import React from 'react';
import * as ReactDOM from "react-dom/client";
import Navbar from './components/Navbar/Navbar';

>>>>>>> third

function App() {

  return (
<<<<<<< HEAD
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
    </>
=======
    <div >
      <Navbar />
    </div>
>>>>>>> third
  );
}

export default App;
