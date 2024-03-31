import { Input, Typography } from "@material-tailwind/react";
import { IoIosSearch } from "react-icons/io";

function Search() {
  return (
    <div>
      <Input
        type="text"
        label=" Search here"
        size="lg"
        className=" caret-primary"
        icon={<IoIosSearch />}
      />
    </div>
  );
}

export default Search;
