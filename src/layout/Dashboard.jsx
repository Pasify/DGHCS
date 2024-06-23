import SideMenu from "../components/SideMenu";
import Main from "../components/Main";
import TopBar from "../components/TopBar";
import { Toaster } from "react-hot-toast";
import { useLogin } from "../context/LoginContext";

function Dashboard() {
  const { loggedInUser } = useLogin();
  console.log(loggedInUser);

  return (
    <div className="flex gap-4">
      <div className="flex h-[100dvh]  w-[22%] p-4">
        <SideMenu />
      </div>
      <div className="flex w-[75%] flex-col gap-10 py-4 ">
        <TopBar />
        <Main />
        <Toaster />
      </div>
    </div>
  );
}

export default Dashboard;
