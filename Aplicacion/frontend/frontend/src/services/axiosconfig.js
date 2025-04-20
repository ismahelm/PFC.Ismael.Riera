import axios from "axios";

export const getBaseUrl = () => {
  const host = import.meta.env.VITE_SERVER_HOST;

  return `${host}`;
};

const instance = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
  },
});
//REQUEST
instance.interceptors.request.use(async (config) => {
    const isPublicRoute = config.url.includes("/auth/login")

    if (!isPublicRoute) {
        const token = sessionStorage.getItem("authToken");
    
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        } else {
          console.warn("No token found");
        }
      }
  return config;
});
// RESPONSE
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    //TODO:   recoje error del servidor

    return Promise.reject(error);
  }
);

export default instance;
