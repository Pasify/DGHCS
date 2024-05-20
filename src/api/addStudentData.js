import axios from "axios";
import { getToken } from "../utils/token";

async function addStudentData(StudentData) {
  try {
    console.log("adding student");
    const response = await axios.post(
      "https://dghcs.onrender.com/api/auth/signup",
      StudentData,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    );
    console.log(response);
    if (!response) {
      throw new Error(`failed to register Student : ${response.status}`);
    }
    return response;
  } catch (err) {
    console.log(err.message);
    throw new Error(err.message);
  }
}

export default addStudentData;
