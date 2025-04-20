import { create } from 'zustand';
import AuthService from "../services/axiosService"
import { jwtDecode } from 'jwt-decode';
const useAuthStore = create((set) => ({
  user: null,
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
  logout: () => set({ user: null, token: null }),
  
}));

export default useAuthStore;
