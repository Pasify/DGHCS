import { createContext, useContext, useState } from "react";
import { GrOverview } from "react-icons/gr";
import { IoPersonAdd } from "react-icons/io5";
import { CiViewList, CiViewTimeline } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";

const MenuContext = createContext();
const MenuItem = [
  {
    name: "overview",
    icon: <GrOverview />,
  },
  {
    name: "add student",
    icon: <IoPersonAdd />,
  },
  {
    name: "view students",
    icon: <CiViewList />,
  },
  {
    name: "add teacher",
    icon: <IoPersonAdd />,
  },
  {
    name: "view teachers",
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
