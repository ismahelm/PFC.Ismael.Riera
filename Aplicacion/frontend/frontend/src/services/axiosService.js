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
  async addCourse(data){
    const response = await axios.post('http://localhost:5000/train/createCourse', 
      data,  // Cambié 'userName' a 'username'
    ); 
  return response
  }
 
  async getTest (data){
    console.log(data)
    const response = await axios.post("http://localhost:5000/user/getTest",
      {courseId: data},
    )
    console.log(response)
    return response
  }

  async correctTest (data){
    const response = await axios.post("http://localhost:5000/user/correctTest",
      data,
    )
    console.log(response)
    return response
  }

  async seeCourseFile(data)
  {
    const response = await axios.post("http://localhost:5000/user/seeCourseId",
        {
            courseId: data
        }
    )
    return response.data.courseFile
  }

  async getCourses(data) {
    const response = await axios.post('http://localhost:5000/user/myProgress', {
        userId: data,  // Cambié 'userName' a 'username'
      }); 
    return response
  }

async getCourseByName(data) {
    const response = await axios.post('http://localhost:5000/user/seeCourseName', {
        courseName: data,
      })
    return response.data.courseInfo.id
}
 async getUserId(data) {
    const response = await axios.post('http://localhost:5000/train/getId', 
       { userName: data}  // Cambié 'userName' a 'username'
      );
      return response.data.userid

 }
 async assignCourse (data){
    console.log(data)
    const response = await axios.post('http://localhost:5000/train/assignCourse', 
        data
       );
       console.log(response)
 }
  async addUser(data){
  const response = await axios.post('http://localhost:5000/train/signin', 
    data,  // Cambié 'userName' a 'username'
  ); 
return response

  }


}
export default new AuthService();
