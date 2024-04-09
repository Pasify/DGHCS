import MenuList from "./MenuList";

function SideMenu() {
  return (
    <div className="size-full  rounded bg-background shadow-sm">
      <h1 className="mb-[2rem] p-4 text-center text-2xl font-semibold text-midBlack ">
        {" "}
        DGHCS
      </h1>
      <MenuList />
    </div>
  );
}

export default SideMenu;
