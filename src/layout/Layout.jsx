import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "./Header";

function Layout({ children }) {
  const location = useLocation();
  const isNotAtLoginOrDashboard =
    location.pathname !== "/login" && location.pathname !== "/dashboard";
  // console.log(location);
  return (
    <div>
      {isNotAtLoginOrDashboard && <Header />}
      <main>
        <Outlet />
      </main>
      {isNotAtLoginOrDashboard && <Footer />}
    </div>
  );
}

export default Layout;
