import axios from "axios";

const request = async (method, url, data) => {
  const storedUser = localStorage.getItem("persist:root");
  let TOKEN = null;

  if (storedUser) {
    const user = JSON.parse(JSON.parse(storedUser).user);
    if (user && user.currentUser) {
      TOKEN = user.currentUser.accessToken; 
    }
  }

  const headers = TOKEN ? { token: `Bearer ${TOKEN}` } : {}; 

  try {
    const res = await axios({
      method,
      url: `http://localhost:5000/api${url}`,
      data,
      headers, 
    });
    return res.data;
  } catch (err) {
    console.error("API request failed", err);
    throw err; 
  }
};

export default request;
