import axios from "./axiosconfig.js";

class AuthService {
  // 🔐 /auth/
  async login(data) {
    console.log(data)
    const response = await axios.post("http://localhost:5000"+"/auth/login", {
      username: data.userName,
      password: data.password,
    });
    console.log(response);
    return response;
  }

  // 🎓 /cert/
  async downloadCertificate(data) {
    console.log(data);
    const response = await axios.post(
      "http://localhost:5000/cert/getCertifiCate",
      data
    );
    console.log(response);
    return response;
  }

  // 📚 /courses/
  async seeCourseFile(data) {
    const response = await axios.post(
      "http://localhost:5000/courses/seeCourseId",
      { courseId: data }
    );
    return response.data.courseFile;
  }

  async getCourseByName(data) {
    const response = await axios.post(
      "http://localhost:5000/courses/seeCourseName",
      { courseName: data }
    );
    return response.data.courseInfo.id;
  }

  async seeCourses() {
    const courses = await axios.get("http://localhost:5000/courses/seeCourses");
    return courses;
  }

  // 🧪 /test/
  async getTest(data) {
    console.log(data);
    const response = await axios.post("http://localhost:5000/test/getTest", {
      courseId: data,
    });
    console.log(response);
    return response;
  }

  async correctTest(data) {
    const response = await axios.post(
      "http://localhost:5000/test/correctTest",
      data
    );
    console.log(response);
    return response;
  }

  // 🧑 /user/ falta update y get profile
  async getCourses(data) {
    const response = await axios.post("http://localhost:5000/user/myProgress", {
      userId: data,
    });
    return response;
  }
  async getProfile(data) {
    const response = await axios.post(
      "http://localhost:5000/user/seeProfile",
      data
    );
    return response;
  }
  // 🛠️ /train/ - falta deletes y resultlist
  async addCourse(data) {
    const response = await axios.post(
      "http://localhost:5000/train/createCourse",
      data
    );
    console.log("yee")
    return response;
  }

  async addTest(data) {
    const response = await axios.post(
      "http://localhost:5000/train/addTest",
      data
    );
    return response;
  }

  async addUser(data) {
    console.log(data)
    const response = await axios.post(
      "http://localhost:5000/train/signin",
      data
    );
    return response;
  }

  async assignCourse(data) {
    const serverHost = import.meta.env.VITE_SERVER_HOST;

    const response = await axios.post(serverHost + "/train/assignCourse", data);
    return response;
  }

  async getUserId(data) {
    const response = await axios.post("http://localhost:5000/train/getId", {
      userName: data,
    });
    return response.data.userid;
  }

  async getUsers() {
    const response = await axios.get("http://localhost:5000/train/list");
    return response;
  }

  async seeAssignments() {
    const courses = await axios.get("http://localhost:5000/train/progressList");
    return courses;
  }
}

export default new AuthService();
