import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../Componets/Home.jsx";
import About from "../Componets/About.jsx";
import Book from "../Componets/Book.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element:<Home/> ,
      },
      {
        path: "books",
        element:<Book/> ,
      },
      {
        path: "about",
        element: <About/>,
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// <React.StrictMode>
//   <App />
// </React.StrictMode>,
