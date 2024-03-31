import AddShortcut from "./AddShortcut";
import BreadCrumbs from "./BreadCrumbs";
import Search from "./Search";
import UserMenu from "./UserMenu";

function TopBar() {
  return (
    <div className="bg-background backdrop-blur-sm border border-midBlack2 p-6 w-full rounded flex justify-between items-center">
      <BreadCrumbs />
      <div className="flex justify-center items-center gap-4">
        <AddShortcut />
        <Search />
        <UserMenu />
      </div>
    </div>
  );
}

export default TopBar;
