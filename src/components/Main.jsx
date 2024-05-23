import { useMenu } from "../context/MenuContext";
import { StudentProvider } from "../context/StudentContext";
import CardContainer from "./CardContainer";
import AddStudentForm from "./Form/AddStudentForm";
import AddTeacherForm from "./Form/AddTeacherForm";
import ViewStudentResult from "./ViewStudentResult";
import ViewStudents from "./ViewStudents";

function Main() {
  const { selectedMenuItem } = useMenu();
  function getMenuOption(selected) {
    const menuOption = {
      overview: <CardContainer />,
      "add student": <AddStudentForm />,
      "view students": <ViewStudents />,
      "add teacher": <AddTeacherForm />,
      "view teachers": "view teacher",
      "view student result": <ViewStudentResult />,
      "enter student result": "enter student result",
      default: <CardContainer />,
    };
    return menuOption[selected] ?? menuOption.default;
  }

  return (
    <StudentProvider>
      {" "}
      <div className=" p-4 ">
        {selectedMenuItem?.name ? (
          <div>{getMenuOption(selectedMenuItem?.name)}</div>
        ) : (
          <CardContainer />
        )}
      </div>
    </StudentProvider>
  );
}

export default Main;
