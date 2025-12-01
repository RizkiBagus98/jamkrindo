// app/utils/axiosConfig.ts
import axios, { AxiosError } from 'axios';

const API_URL = 'http://localhost:5001/api';

// Buat instance Axios
export const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

// Response Interceptor
api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        // Untuk 401 pada /auth/status, jangan log error
        // karena ini adalah perilaku normal ketika user belum login
        const isAuthStatusEndpoint = error.config?.url?.includes('/auth/status');
        const isUnauthorized = error.response?.status === 401;

        if (isUnauthorized && isAuthStatusEndpoint) {
            // Silent fail untuk /auth/status saat user belum login
            return Promise.reject(error);
        }

        // Untuk error lainnya, tetap log di console jika perlu
        // Tapi error 401 di endpoint lain juga tidak perlu verbose
        if (isUnauthorized) {
            // Bisa tambahkan logic redirect ke login jika perlu
            console.warn('Session expired. Please login again.');
        }

        return Promise.reject(error);
    }
);

export default api;
