import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import HeroSection from "../components/HeroSection/HeroSection";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/herosection",
      element: <HeroSection />
    }
   
  ]);