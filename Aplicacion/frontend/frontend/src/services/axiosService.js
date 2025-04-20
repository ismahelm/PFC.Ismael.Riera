import axios from "./axiosconfig.js";

class AuthService {
  async login(data) {
    const response = await axios.post('http://localhost:5000/auth/login', {
        username: data.userName,  // Cambié 'userName' a 'username'
        password: data.password,
      });    console.log(response)
    return response
  }
/*
  register(data) {
    return axios.post("/auth/create", data);
  }
  me() {
    return axios.get("/auth/me");
  }

  seeProfile() {
    return axios.get("user/seeProfile");
  }
  updateProfile(data) {
    return axios.put("/user/updateProfile", data);
  }
    */
}

export default new AuthService();
