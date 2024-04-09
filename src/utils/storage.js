export function addStudentToLocalStorage(student) {
  //  get the  existing students from local storage
  const existingStudentsData = localStorage.getItem("students");
  const studentsList = existingStudentsData
    ? JSON.parse(existingStudentsData)
    : [];
  // add new student
  studentsList.push(student);
  // save the updated student data back to the local storage
  localStorage.setItem("students", JSON.stringify(studentsList));
  //   return the updated student data
  return studentsList;
}
