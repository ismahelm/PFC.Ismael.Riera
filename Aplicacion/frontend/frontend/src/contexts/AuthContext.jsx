import { create } from "zustand";
import AuthService from "../services/axiosService";
import { jwtDecode } from "jwt-decode";
const useAuthStore = create((set, get) => ({
  user: { id: null, role: null, username: null },
  token: null,
  mode: "light",
  toggleTheme: () =>
    set((state) => ({
      mode: state.mode === "light" ? "dark" : "light",
    })),

  //borrar password?
  login: async ({ userName, password }) => {
    try {
      const res = await AuthService.login({ userName, password });
      const { token } = res.data;
      const decoded = jwtDecode(token);

      sessionStorage.setItem("authToken", token);

      set({
        token,

        user: {
          id: decoded.id,
          role: decoded.role,
          username: decoded.username,
        },
      });
    } catch (err) {
      console.error("Login failed:", err);
      throw err; // Por si quieres capturarlo en el componente
    }
  },
  seeProfile: async (data) => {
    const myProfile = await AuthService.getProfile(data);
    console.log(myProfile);
    return myProfile;
  },
  getCertificate: async (data) => {
    const certificateLink = await AuthService.downloadCertificate(data);
    console.log(certificateLink);
    return certificateLink;
  },
  getTest: async (data) => {
    const test = await AuthService.getTest(data);
    console.log(test);
    return test;
  },
  correctTest: async (data) => {
    const correction = await AuthService.correctTest(data);
    console.log(correction);
    return correction;
  },
  getCourses: async () => {
    const { user } = get(); // 👈 así accedes al estado actual

    if (!user?.id) {
      throw new Error("No user ID found");
    }

    try {
      const res = await AuthService.getCourses(user.id);
      return res.data; // Asegúrate de devolver solo los datos que necesitas
    } catch (err) {
      console.error("Fetching courses failed:", err);
      throw err;
    }
  },
  createCourse: async (data) => {
    try {
      const res = await AuthService.addCourse(data);
      return res.data;
    } catch (error) {
      console.error("Fetching courses failed:", error);
      throw error;
    }
  },
  seeCourses: async () => {
    try {
      const res = await AuthService.seeCourses();
      return res.data;
    } catch (error) {
      console.error("addTest failed:", error);

      throw error;
    }
  },
  seeUsers: async () => {
    try {
      const res = await AuthService.getUsers();
      return res.data;
    } catch (error) {
      console.error("addTest failed:", error);

      throw error;
    }
  },
  seeAssignments: async () => {
    try {
      const res = await AuthService.seeAssignments();
      return res.data;
    } catch (error) {
      console.error("addTest failed:", error);

      throw error;
    }
  },
  addQuestion: async (data) => {
    try {
      const res = await AuthService.addTest(data);
      return res.data;
    } catch (error) {
      console.error( error);

      throw error;
    }
  },
  addUser: async (data) => {
    try {
      const res = await AuthService.addUser(data);
      return res.data;
    } catch (error) {
      console.error("Fetching courses failed:", error);

      throw error;
    }
  },
  seeCourseFile: async (courseId) => {
    const courseRoute = await AuthService.seeCourseFile(courseId);
    return courseRoute;
  },

  assignCourse: async (selectedUser, selectedCourse) => {
    const assignedCourse = await AuthService.assignCourse({
      userId: selectedUser,
      courseId: selectedCourse,
    });
    return assignedCourse;
  },
  
  logOut: () => set({ user: null, token: null }),
}));

export default useAuthStore;
