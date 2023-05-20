import axios from "axios";

const httpClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});
httpClient.interceptors.request.use((config) => {
    config.headers.Authorization = localStorage.getItem('access_token');
    return config;
}, (error) => {
    return Promise.reject(error);
});
export default httpClient;