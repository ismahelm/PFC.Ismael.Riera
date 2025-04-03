import { create } from 'zustand';

const useAuthStore = create((set) => ({
  username: '',
  password: '',
  role: 'trainer',
  isLogged: true,
  
  login: (user, pass) => set({ username: user, password: pass, isLogged: true }),
  logout: () => set({ username: '', password: '', rol: '', isLogged: false }),
}));

export default useAuthStore;
