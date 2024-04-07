import { useMenu } from "../context/MenuContext";
import Card from "./Card";
import CardContainer from "./CardContainer";
import AddStudentForm from "./Form/AddStudentForm";

function Main() {
  const { selectedMenuItem } = useMenu();

  return (
    // <div className=" p-4 ">
    //   {selectedMenuItem?.name ? (
    //     <div>{selectedMenuItem?.name}</div>
    //   ) : (
    //     <CardContainer />
    //   )}
    // </div>
    <div className="p-4">
      <CardContainer />
      <AddStudentForm />
    </div>
  );
}

export default Main;
