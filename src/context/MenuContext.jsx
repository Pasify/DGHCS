import { createContext, useContext } from "react";
import { MdDashboard } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { CiViewList, CiViewTimeline } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";

const MenuContext = createContext();
const MenuItem = [
  {
    name: "Admissions",
    icon: <MdDashboard />,
  },
  {
    name: "Add Student",
    icon: <IoPersonAdd />,
  },
  {
    name: "View Student",
    icon: <CiViewList />,
  },
  {
    name: "Add Teacher",
    icon: <IoPersonAdd />,
  },
  {
    name: "view Teacher",
    icon: <CiViewList />,
  },
  {
    name: "view student Result",
    icon: <CiViewTimeline />,
  },
  {
    name: "Enter Student Result",
    icon: <FaEdit />,
  },
];
function MenuProvider({ children }) {
  return (
    <MenuContext.Provider value={{ MenuItem }}>{children}</MenuContext.Provider>
  );
}
function useMenu() {
  let context = useContext(MenuContext);
  return context;
}
export { useMenu, MenuProvider };
