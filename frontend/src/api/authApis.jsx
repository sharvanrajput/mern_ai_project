import axios from "axios"
import getCurrentuser from "../customeHooks/getCurrentuser"


const authApi = axios.create({
    baseURL: "http://localhost:4000/api",
    withCredentials: true
})



// auth api 

export const authApis = {
    login: async (data) => await authApi.post("/auth/login", data),
    signup: async (data) => await authApi.post("/auth/signup", data),
    logout: async () => await authApi.post("/auth/logout"),
    forgetPassword: async (data) => await authApi.post("/auth/forget-password", data),
    verifyOtp: async (data) => await authApi.post("/auth/verify-otp", data),
    resetPasswrod: async (data) => await authApi.post("/auth/reset-password", data),
}

// current user api 

export const  currentuser = async () => await authApi.get("/user/current")
