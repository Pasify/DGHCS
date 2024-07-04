import axios from "axios";
import { getToken } from "../utils/token";
import { formatAndSortStudentInfo } from "../utils/storage";
// import { formatAndSortStudentInfo } from "../utils/storage";
async function getStudents() {
  try {
    const response = await axios.get(
      "https://dghcs.onrender.com/api/auth/users",
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    );

    return response;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw new Error(error.message);
  }
}

export async function refetchStudent() {
  try {
    // console.log(`i have mounted`);
    const response = await getStudents();

    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function HandleRefetchStudents() {
  try {
    const { data: newStudentsRecords } = await refetchStudent();
    const { sortedStudent } = formatAndSortStudentInfo(newStudentsRecords);

    return sortedStudent;
  } catch (error) {
    console.error("Error fetching students:", error);
  }
}

export default getStudents;
