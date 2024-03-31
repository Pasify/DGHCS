import SideMenu from "../components/SideMenu";
import Main from "../components/Main";
import TopBar from "../components/TopBar";

function Layout() {
  return (
    <div className="flex gap-4">
      <div className="flex h-[100dvh]  p-4 w-[22%]">
        <SideMenu />
      </div>
      <div className="w-[75%] py-4 flex flex-col gap-4 ">
        <TopBar />
        <Main />
      </div>
    </div>
  );
}

export default Layout;
