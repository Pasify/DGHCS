import getStudents from "../api/getStudents";

export async function getExistingStudentRecord() {
  const existingStudentsData = sessionStorage.getItem("students");
  if (existingStudentsData) {
    return JSON.parse(existingStudentsData);
  } else {
    try {
      const { data: allStudents } = await getStudents();
      const studentsBasicInfo = allStudents.map(
        ({ studentID, email, grade, name, department }) => ({
          studentDepartment: department,
          studentEmail: email,
          studentName: name,
          studentGrade: grade,
          studentID,
        }),
      );
      sessionStorage.setItem("students", JSON.stringify(studentsBasicInfo));
      return studentsBasicInfo;
    } catch (error) {
      console.error("Error fetching and caching students:", error);
      throw new Error(error);
    }
  }
}

export function addStudentToLocalStorage(student) {
  //  get the  existing students from local storage
  // const existingStudentsData = localStorage.getItem("students");
  // const studentsList = existingStudentsData
  //   ? JSON.parse(existingStudentsData)
  //   : [];
  const listOfStudents = getExistingStudentRecord();
  // add new student
  listOfStudents.push(student);
  // save the updated student data back to the local storage
  // sessionStorage.setItem("students", JSON.stringify(listOfStudents));
  sessionStorage.setItem("students", listOfStudents);
  //   return the updated student data
  return listOfStudents;
}
