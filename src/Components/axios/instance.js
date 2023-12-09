import axios from "axios";

const axiosInstance = axios.create({


    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "293a5f8dacbf752f3e1113e7af52ee9c",    
    }
})

export default axiosInstance;

