import axios from "axios";
// import { isAuthenticated } from "../auth";
// const { token } = isAuthenticated();

const axiosClient = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
    // "Authorization": `Bearer ${token}`
  }
});
export default axiosClient;