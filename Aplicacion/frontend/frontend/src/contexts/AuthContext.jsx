import { create } from 'zustand';
import AuthService from "../services/axiosService"
import { jwtDecode } from 'jwt-decode';
const useAuthStore = create((set, get) => ({
  user: { id: null, role: null, username: null },
  token: null,
  //borrar password?
  login: async ({userName, password}) =>{ 
    try {
      const res = await AuthService.login({userName, password});
      const { token } = res.data;
      const decoded = jwtDecode(token);

      sessionStorage.setItem("authToken", token);

      set({
        token,
        
        user: { id: decoded.id, role: decoded.role, username: decoded.username },
      });
    } catch (err) {
      console.error("Login failed:", err);
      throw err; // Por si quieres capturarlo en el componente
    }
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
  
  addUser: async (data)=>
  {
    try {
      const res = await AuthService.addUser(
        
         data
      );
      return res.data
    } catch (error) {
      console.error("Fetching courses failed:", error);

      throw error;

    }
  },
  assignCourse: async (selectedUser, selectedCourse) =>{
    const selectedCourseId = await AuthService.getCourseByName(selectedCourse)

    const selectedUserId = await AuthService.getUserId(selectedUser)
    console.log(selectedUserId)
    const assignedCourse = await AuthService.assignCourse({
      userId: selectedUserId,
      courseId: selectedCourseId
    })
    console.log(assignedCourse)
  },
  logout: () => set({ user: null, token: null }),
  
}));

export default useAuthStore;
