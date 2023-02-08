import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://0x057hq0se.execute-api.ap-northeast-2.amazonaws.com/api/v1/search",
});

export default axiosInstance;
