import axios from "axios";

//Instancja Axios
const axiosInstance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

//Request Interceptor
axios.interceptors.request.use(
  (config) => {
    console.log("Wysyłanie żądania: ");
    return config;
  },
  (error) => {
    console.error("Błąd żądania: ", error);
    return Promise.reject(error);
  }
);

//Response Interceptor
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Błąd odpowiedzi: ", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
