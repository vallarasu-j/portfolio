"use client";
import { useRoutes } from "react-router-dom";
import { Home } from "./home";
import LoginPage from "./pages/login";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      children: [
        { path: "", element: <Home /> },

        { path: "login", element: <LoginPage /> },
      ],
    },
  ]);
};

export default Routes;