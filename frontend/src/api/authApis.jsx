import axios from "axios"

const authApi = axios.create({
    baseURL: "http://localhost:4000/api/auth",
    withCredentials: true
})

export const authApis = {
    login: async (data) => await authApi.post("/login", data),
    signup: async (data) => await authApi.post("/signup", data),
    logout: async () => await authApi.post("/logout"),
}
