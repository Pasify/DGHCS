import getStudents from "../api/getStudents";

export function formatAndSortStudentInfo(studentData) {
  const studentsBasicInfo = studentData.map(
    ({ studentID, email, grade, name, department, id }) => ({
      studentDepartment: department,
      studentEmail: email,
      studentName: name,
      studentGrade: grade,
      studentID,
      id,
    }),
  );
  const sortedStudent = studentsBasicInfo.sort(
    (student1, student2) => student1.id - student2.id,
  );
  return { studentsBasicInfo, sortedStudent };
}
export async function getExistingStudentRecord() {
  const existingStudentsData = sessionStorage.getItem("students");
  if (existingStudentsData) {
    return JSON.parse(existingStudentsData);
  } else {
    try {
      const { data: allStudents } = await getStudents();
      const { studentsBasicInfo, sortedStudent } =
        formatAndSortStudentInfo(allStudents);
      sessionStorage.setItem("students", JSON.stringify(sortedStudent));
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

// export function resetAllStudent(students) {
//   sessionStorage.setItem("students", JSON.stringify(students));
// }
export function getTotalNumberOfStudent() {
  const existingNumberOfStudents = sessionStorage.getItem("students");
  const totalNumberOfStudent = existingNumberOfStudents
    ? JSON.parse(existingNumberOfStudents).length
    : 0;

  return totalNumberOfStudent;
}

export function setCurrentUser(user) {
  sessionStorage.setItem("userType", JSON.stringify(user));
}
export function getCurrentUser() {
  const currentUser = sessionStorage.getItem("userType");
  return currentUser ? JSON.parse(currentUser) : {};
}

export function removeCurrentUser() {
  sessionStorage.removeItem("userType");
}
