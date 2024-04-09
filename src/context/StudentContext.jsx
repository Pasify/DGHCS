import { createContext, useContext, useState } from "react";
import { addStudentToLocalStorage } from "../utils/storage";
// import { storeData } from "../utils/storage";

const StudentContext = createContext();

function StudentProvider({ children }) {
  const [studentData, setStudentData] = useState(
    JSON.parse(localStorage.getItem("students")),
  );
  function addStudentData(student) {
    const studentsInformation = addStudentToLocalStorage(student);
    setStudentData(studentsInformation);
  }
  return (
    <StudentContext.Provider
      value={{
        studentData,
        addStudentData,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}
const useStudent = () => {
  const context = useContext(StudentContext);
  return context;
};
export { StudentProvider, useStudent };
