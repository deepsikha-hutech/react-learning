import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import EmployeeRegForm from "./components/Hooks/EmployeeRegForm.jsx";
import Login from "./components/Stocks/public/Login.jsx";
import Signup from "./components/Stocks/public/Signup.jsx";

import ForgotPassword from "./components/Stocks/public/ForgotPassword.jsx";
import ResetPassword from "./components/Stocks/public/ResetPassword.jsx";

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
    path: "/forgotPassword",
    element: <ForgotPassword />,
    errorElement: <Error />,
  },
  {
    path: "/resetPassword",
    element: <ResetPassword />,
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
