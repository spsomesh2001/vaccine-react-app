import axios from "axios";

// const api = axios.create({ baseURL: "http://localhost:5000" });
const api = axios.create({ baseURL: "https://vaccine-node-server.herokuapp.com/" });

api.interceptors.request.use((req) => {
  if(localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
  }
  else if(localStorage.getItem("adminProfile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("adminProfile")).token}`
  }

  return req;
})

export const adminLogIn = (formData) => api.post("/admin/login", formData);
export const adminVAdd = (formData) => api.post("/admin/vadd", formData);

export const logIn = (formData) => api.post("/user/login", formData);
export const signUp = (formData) => api.post("/user/signup", formData);

export const getProfile = () => api.get("/profile");
export const formFill = (formFill) => api.post("/profile/formFill", formFill);
export const locInfo = (pinInfo) => api.post("profile/locInfo", pinInfo);