import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://60fafd6a91156a0017b4c728.mockapi.io",
  headers: {
    "Content-Type": "application/json"
  }
});
export default axiosClient;