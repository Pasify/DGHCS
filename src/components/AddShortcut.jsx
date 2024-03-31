import { Button } from "@material-tailwind/react";

import { IoIosAdd } from "react-icons/io";

function AddShortcut() {
  return (
    <div>
      <Button size="sm" className="flex items-center bg-accent">
        <IoIosAdd size={25} />
        <span className="capitalize"> add new</span>
      </Button>
    </div>
  );
}

export default AddShortcut;
