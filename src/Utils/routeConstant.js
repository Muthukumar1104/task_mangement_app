import React, { lazy } from "react";

const Signup = lazy(() => import("../Components/Website/Signup/Signup"));
const Login = lazy(() => import("../Components/Website/Login/Login"));
const Taskmanagement = lazy(() =>
  import("../Components/Website/Taskmanagement/Taskmanagement")
);

export const routeConstant = [
  { path: "/", name: "Login", element: <Login /> },
  { path: "/signup", name: "Signup", element: <Signup /> },
  {
    path: "/taskmanagement",
    name: "Task Management",
    element: <Taskmanagement />,
  },
];
