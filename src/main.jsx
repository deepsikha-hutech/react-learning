import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import EmployeeRegForm from "./components/Hooks/EmployeeRegForm.jsx";
import EmployeeList from "./components/Hooks/EmployeeList.jsx";
import EmployeeFunctionComp from "./components/Hooks/EmployeeFunctionComp.jsx";
import App from "./App.jsx";
import "./index.css";
import Error from "./components/Error.jsx";

// const router = createBrowserRouter([
// {
//   path: "/signup",
//   element: <EmployeeRegForm />,
//   errorElement: <Error />,
// },
// {
//   path: "/signin",
//   element: <EmployeeList />,
//   errorElement: <Error />,
// },
// ]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <RouterProvider router={router} />
  // </StrictMode>
  <App />
);
