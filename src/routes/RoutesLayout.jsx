import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "../auth/Login";
import Dashboard from "../layout/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import HomePage from "../pages/Home/HomePage";
import About from "../pages/about/About";
import Layout from "../layout/Layout";
import Programmes from "../pages/programmes/Programmes";
import BlogContent from "../pages/blog/BlogContent";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/Contact/Contact";
import Portal from "../pages/portal/Portal";
import ErrorPage from "../pages/Home/ErrorPage";

const routes = [
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <HomePage />,
        path: "/",
      },

      {
        path: "about",
        element: <About />,
      },
      {
        path: "programmes",
        element: <Programmes />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // {
      //   path: "portal",
      //   element: <Portal />,
      // },

      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
];
const router = createBrowserRouter(routes);

function RoutesLayout() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default RoutesLayout;
