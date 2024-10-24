import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import EmployeeRegForm from "./components/Hooks/EmployeeRegForm.jsx";
import EmployeeFunctionComp from "./components/Hooks/EmployeeFunctionComp.jsx";
import Login from "./components/Stocks/public/Login.jsx";
import Signup from "./components/Stocks/public/Signup.jsx";
import App from "./App.jsx";
import "./index.css";
import Error from "./components/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <Error />,
  },
  {
    path: "/emp",
    element: <EmployeeRegForm />,
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  // <App />
);
