import {
  createBrowserRouter,
} from "react-router-dom";
// eslint-disable-next-line
import Home from "../components/pages/Home"; 
import Services from "../components/pages/Services";
import Products from "../components/pages/Products";
import SignUp from "../components/pages/SignUp";
import Error from "../components/pages/Error/Error"

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
  }
 
]);