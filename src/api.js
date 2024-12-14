import axios from "axios";

// API isteğini yapan fonksiyon
const request = async (method, url, data) => {
  const res = await axios({
    method,
    url: `http://localhost:5000/api${url}`,
    data,
  });
  return res.data;
};

export default request;