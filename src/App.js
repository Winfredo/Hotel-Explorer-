
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React from 'react';
// eslint-disable-next-line
import * as ReactDOM from "react-dom/client";  
import HeroSection from "./components/HeroSection/HeroSection";



function App() {

  return (

   <div>
      <Navbar />
      <HeroSection />

   </div>
  );    

}

export default App;
