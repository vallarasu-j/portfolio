"use client";
import { useRoutes } from "react-router-dom";
import { Home } from "./home";
import LoginPage from "./pages/login";
import { Content } from "../../components/home/content";
import { Layout } from "../../components/layout/layout";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      children: [
        { path: "", element: <Home /> },

        { path: "login", element: <LoginPage /> },
      ],
    },
    {
      path: "/admin",
      children: [
        {
          path: "",
          element: (
            <Layout>
              <Content />
            </Layout>
          ),
        },
      ],
    },
  ]);
};

export default Routes;
