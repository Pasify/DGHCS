import axios from "axios";

async function addStudentData(StudentData) {
  try {
    const response = await axios.post(
      "https://dghcs.onrender.com/api/auth/signup",
      StudentData,
    );
    console.log(response);
    return response;
    // console.table(StudentData);
  } catch (err) {
    console.log(err.message);
    throw new Error(err.message);
  }
}

export default addStudentData;
