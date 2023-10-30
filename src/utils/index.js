import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../components/pages/Home"; 
import Services from "../components/pages/Services";
import Products from "../components/pages/Products";
import SignUp from "../components/pages/SignUp";
import Error from "../components/pages/Error/Error"
import Adventure from "../components/pages/Adventure";
import Mystery from "../components/pages/Mystery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home  />,
    errorElement: <Error />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/sign-up",
    element: <SignUp />
  },
  {
    path: "/adventure",
    element: <Adventure />
  },
  {
    path: "/mystery",
    element: <Mystery />
  }
 
]);