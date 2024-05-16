import { List, ListItem } from "@material-tailwind/react";
import { useMenu } from "../context/MenuContext";
import Logout from "./Logout";

function MenuList() {
  const { MenuItem, selectedMenuItem, setSelectedMenuItem } = useMenu();
  function handleSelectMenu(item) {
    setSelectedMenuItem(item);
  }

  return (
    <div>
      <List className="">
        {MenuItem.map((item) => (
          <ListItem
            key={item.name}
            className={`w-[90%]  gap-4 rounded p-4 text-sm capitalize 
              `}
            onClick={() => handleSelectMenu(item)}
            selected={selectedMenuItem === item ? true : false}
          >
            {item.icon}
            {item.name}
          </ListItem>
        ))}
      </List>
      <div className="px-4">
        <Logout />
      </div>
    </div>
  );
}

export default MenuList;
