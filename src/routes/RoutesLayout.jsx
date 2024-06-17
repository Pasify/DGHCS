import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { Login } from "../auth/Login";
import Dashboard from "../layout/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import HomePage from "../pages/Home/HomePage";
import About from "../pages/about/About";
import Layout from "../layout/Layout";
import Programmes from "../pages/programmes/Programmes";

import Blog from "../pages/blog/Blog";
import Contact from "../pages/Contact/Contact";

import ErrorPage from "../pages/Home/ErrorPage";

// const routes = [
//   {
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         element: <HomePage />,
//         index: true,
//       },

//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "programmes",
//         element: <Programmes />,
//       },
//       {
//         path: "blog",
//         element: <Blog />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       // {
//       //   path: "portal",
//       //   element: <Portal />,
//       // },

//       {
//         element: <Login />,
//         path: "/login",
//       },
//     ],
//   },
//   {
//     element: <ProtectedRoutes />,
//     children: [
//       {
//         path: "/dashboard",
//         element: <Dashboard />,
//       },
//     ],
//   },
// ];
// const router = createBrowserRouter(routes);

function RoutesLayout() {
  // return <RouterProvider router={router}></RouterProvider>;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="programmes" element={<Programmes />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesLayout;
