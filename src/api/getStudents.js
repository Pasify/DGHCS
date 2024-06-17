import axios from "axios";
import { getToken } from "../utils/token";
async function getStudents() {
  try {
    const response = axios.get("https://dghcs.onrender.com/api/auth/users", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw new Error(error.message);
  }
}
export default getStudents;
