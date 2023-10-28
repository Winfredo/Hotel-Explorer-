import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
<<<<<<< HEAD
import App from './App';


=======
>>>>>>> third
=======


import App from './App';



>>>>>>> third
import reportWebVitals from './reportWebVitals';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './utils';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
<<<<<<< HEAD
=======

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode> 

>>>>>>> third
  <>   
  <App /> 
    </>

<<<<<<< HEAD
=======
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode> 
>>>>>>> third
=======

>>>>>>> third
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
