import { createContext, useContext, useEffect, useState } from "react";
import { GrOverview } from "react-icons/gr";
import { IoPersonAdd } from "react-icons/io5";
import { CiViewList, CiViewTimeline } from "react-icons/ci";
import {
  FaEdit,
  FaHome,
  FaChalkboardTeacher,
  FaMoneyBill,
} from "react-icons/fa";
import { useLogin } from "./LoginContext";

import { MdEventNote } from "react-icons/md";

const MenuContext = createContext();
const MenuItem = [
  {
    name: "home",
    icon: <FaHome />,
    roles: ["USER"],
  },
  {
    name: "upcoming events",
    icon: <MdEventNote />,
    roles: ["USER"],
  },
  {
    name: "outstanding fees",
    icon: <FaMoneyBill />,
    roles: ["USER"],
  },
  {
    name: "teachers Info",
    icon: <FaChalkboardTeacher />,
    roles: ["USER"],
  },
  {
    name: "overview",
    icon: <GrOverview />,
    roles: ["ADMIN"],
  },
  {
    name: "add student",
    icon: <IoPersonAdd />,
    roles: ["ADMIN"],
  },
  {
    name: "view students",
    icon: <CiViewList />,
    roles: ["ADMIN"],
  },
  {
    name: "add teacher",
    icon: <IoPersonAdd />,
    roles: ["ADMIN"],
  },
  {
    name: "view teachers",
    icon: <CiViewList />,
    roles: ["ADMIN"],
  },
  {
    name: "view student result",
    icon: <CiViewTimeline />,
    roles: ["ADMIN", "USER"],
  },
  {
    name: "enter student result",
    icon: <FaEdit />,
    roles: ["ADMIN"],
  },
];
function MenuProvider({ children }) {
  const { loggedInUser } = useLogin();

  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [userRole, setUserRole] = useState(loggedInUser?.role);
  // useEffect(() => {
  //   const user = JSON.parse(sessionStorage.getItem("userType"));
  //   setUserRole(user.role);
  // }, [loggedInUser]);
  useEffect(() => {
    if (loggedInUser && loggedInUser.role) {
      setUserRole(loggedInUser.role);
    }
  }, [loggedInUser]);

  const filteredMenuItem = MenuItem.filter((menu) =>
    menu.roles.includes(userRole),
  );

  return (
    <MenuContext.Provider
      value={{
        MenuItem,
        selectedMenuItem,
        setSelectedMenuItem,
        userRole,
        setUserRole,
        filteredMenuItem,
      }}
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
