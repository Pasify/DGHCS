import axios from "axios";
import { setToken } from "../utils/token";

async function loginUser(data) {
  try {
    console.log(`fetching data`);

    const response = await axios.post(
      "https://dghcs.onrender.com/api/auth/login",
      data,
    );
    response && setToken(response.data.token);
    if (response.status !== 200) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    // console.log(response);
    const serverData = await response.data;
    console.log(`data fetched`);
    return serverData;
  } catch (error) {
    throw new Error(`Error occurred during login :${error.message}`);
  }
}
export default loginUser;
