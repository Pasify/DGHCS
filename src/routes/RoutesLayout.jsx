import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "../auth/Login";
import Dashboard from "../layout/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";

const routes = [
  {
    element: <Login />,
    path: "/",
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
];
const router = createBrowserRouter(routes);

function RoutesLayout() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default RoutesLayout;
