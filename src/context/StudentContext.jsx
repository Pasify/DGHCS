import { createContext, useContext, useEffect, useState } from "react";
import {
  addStudentToLocalStorage,
  getExistingStudentRecord,
} from "../utils/storage";

const StudentContext = createContext();

function StudentProvider({ children }) {
  const [studentData, setStudentData] = useState([]);
  const [allStudentData, setAllStudentData] = useState(() => {
    const savedStudentData = sessionStorage.getItem("students");
    return savedStudentData ? JSON.parse(savedStudentData) : [];
  });

  // async function fetchData() {
  //   try {
  //     // const data = await getExistingStudentRecord();
  //     // setAllStudentsData(data);
  //     // console.log("mounted");
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }
  // fetchData();
  useEffect(() => {
    sessionStorage.setItem("students", JSON.stringify(allStudentData));
  }, [allStudentData]);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "students") {
        const updatedStudents = JSON.parse(event.newValue);
        setAllStudentData(updatedStudents);
      }
      console.log(event);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  function addStudentData(student) {
    const studentsInformation = addStudentToLocalStorage(student);
    setStudentData(studentsInformation);
  }
  return (
    <StudentContext.Provider
      value={{
        studentData,
        addStudentData,
        allStudentData,
        setAllStudentData,
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
