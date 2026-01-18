import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",   
});

// Auth
export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);

// Courses
export const getCourses = () => API.get("/courses");

// Orders
export const getOrders = (token) =>
  API.get("/orders", {
    headers: { Authorization: token }
  });

export default API;
