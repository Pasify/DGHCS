import { useLogin } from "../context/LoginContext";
import { useMenu } from "../context/MenuContext";
import { StudentProvider } from "../context/StudentContext";
import CardContainer from "./CardContainer";
import AddStudentForm from "./Form/AddStudentForm";
import AddTeacherForm from "./Form/AddTeacherForm";
import ViewStudentResult from "./ViewStudentResult";
import ViewStudents from "./ViewStudents";
import {
  StudentHome,
  UpcomingEvents,
  TeachersInfo,
  StudentFees,
} from "./student";

function Main() {
  const { selectedMenuItem, filteredMenuItem, setSelectedMenuItem } = useMenu();
  const { loggedInUser } = useLogin();
  function getMenuOption(selected) {
    const menuOption = {
      overview: <CardContainer />,
      home: <StudentHome />,
      "upcoming events": <UpcomingEvents />,
      "outstanding fees": <StudentFees />,
      "teachers Info": <TeachersInfo />,
      "add student": <AddStudentForm />,
      "view students": <ViewStudents />,
      "add teacher": <AddTeacherForm />,
      "view teachers": "view teacher",
      "view student result": <ViewStudentResult />,
      "enter student result": "enter student result",
      default:
        loggedInUser?.role === "USER" ? <h1>welcome</h1> : <CardContainer />,
    };
    return menuOption[selected] ?? menuOption.default;
  }

  return (
    <StudentProvider>
      {" "}
      <div className=" p-4 ">{getMenuOption(selectedMenuItem?.name)}</div>
    </StudentProvider>
  );
}

export default Main;
