import { List, ListItem } from "@material-tailwind/react";
import { useMenu } from "../context/MenuContext";

function MenuList() {
  const { MenuItem } = useMenu();
  return (
    <div>
      <List className="">
        {MenuItem.map((item) => (
          <ListItem
            key={item}
            className="capitalize  w-[90%] p-4 rounded text-sm gap-4  "
          >
            {item.icon}
            {item.name}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default MenuList;
