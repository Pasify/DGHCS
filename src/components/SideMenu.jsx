import MenuList from "./MenuList";

function SideMenu() {
  return (
    <div className=" p-4 w-[18rem] h-[100dvh]">
      <div className="bg-background  size-full rounded">
        <h1 className="font-semibold text-2xl text-center p-4 text-midBlack mb-[2rem]">
          {" "}
          DGHCS
        </h1>
        <MenuList />
      </div>
    </div>
  );
}

export default SideMenu;
