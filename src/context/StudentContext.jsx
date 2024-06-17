import { createContext, useContext, useEffect, useState } from "react";
import {
  addStudentToLocalStorage,
  getExistingStudentRecord,
} from "../utils/storage";
import getStudents from "../api/getStudents";
// import { storeData } from "../utils/storage";

const StudentContext = createContext();

function StudentProvider({ children }) {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getExistingStudentRecord();
        setStudentData(data);
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchData();
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
