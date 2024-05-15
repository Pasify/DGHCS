export function getExistingStudentRecord() {
  const existingStudentsData = localStorage.getItem("students");
  const existingStudents = existingStudentsData
    ? JSON.parse(existingStudentsData)
    : [];
  return existingStudents;
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
  localStorage.setItem("students", JSON.stringify(listOfStudents));
  //   return the updated student data
  return listOfStudents;
}
