import axios from "axios";
import { getToken } from "../utils/token";

export async function editStudent(infoToUpdate) {
  try {
    const response = await axios.put(
      "https://dghcs.onrender.com/api/auth/update",
      infoToUpdate,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    );
    return response;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data.message : error.message,
    );
  }
}
