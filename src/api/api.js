import axios from "axios";

async function loginUser(data) {
  try {
    console.log(`fetching data`);
    // toast.loading(`logging in `);
    const response = await axios.post(
      "https://dghcs.onrender.com/api/auth/login",
      data,
    );

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
