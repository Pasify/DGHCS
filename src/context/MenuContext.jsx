import { createContext, useContext, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { CiViewList, CiViewTimeline } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";

const MenuContext = createContext();
const MenuItem = [
  {
    name: "admissions",
    icon: <MdDashboard />,
  },
  {
    name: "add student",
    icon: <IoPersonAdd />,
  },
  {
    name: "view student",
    icon: <CiViewList />,
  },
  {
    name: "add teacher",
    icon: <IoPersonAdd />,
  },
  {
    name: "view teacher",
    icon: <CiViewList />,
  },
  {
    name: "view student result",
    icon: <CiViewTimeline />,
  },
  {
    name: "enter student result",
    icon: <FaEdit />,
  },
];
function MenuProvider({ children }) {
  const [selectedMenuItem, setSelectedMenuItem] = useState([]);
  return (
    <MenuContext.Provider
      value={{ MenuItem, selectedMenuItem, setSelectedMenuItem }}
    >
      {children}
    </MenuContext.Provider>
  );
}
function useMenu() {
  let context = useContext(MenuContext);
  return context;
}
export { useMenu, MenuProvider };
