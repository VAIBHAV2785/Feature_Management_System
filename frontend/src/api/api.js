import axios from "axios";

const api = axios.create({
<<<<<<< HEAD
  baseURL: "http://127.0.0.1:8000",
=======
    baseURL: "http://127.0.0.1:8000",
    headers: {
        "Content-Type": "application/json",
    },
>>>>>>> bcd60838 (MILESTONE 2)
});

export default api;