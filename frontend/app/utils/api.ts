// app/utils/api.ts
import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

// 1. Buat instance Axios terpusat
const api = axios.create({
    baseURL: API_URL,
    withCredentials: true // <-- INI KUNCINYA!
});

// 2. Response Interceptor untuk menangani error dengan lebih baik
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Jika 401 pada endpoint /auth/status, jangan log error
        // karena ini normal ketika user belum login
        if (error.response?.status === 401 && error.config?.url === '/auth/status') {
            // Silent fail - user belum login, ini adalah perilaku normal
            return Promise.reject(error);
        }

        // Untuk error lainnya, log seperti biasa
        if (error.response?.status === 401) {
            console.warn("Session expired or unauthorized:", error.message);
        } else if (error.response) {
            console.error("API Error:", error.response.status, error.response.data);
        } else if (error.request) {
            console.error("Network Error:", error.message);
        } else {
            console.error("Error:", error.message);
        }

        return Promise.reject(error);
    }
);

// Fungsi untuk cek status auth dengan error handling yang lebih baik
export async function getAuthStatus() {
    try {
        const response = await api.get('/auth/status');
        return response.data; // Axios otomatis .json()
    } catch (error: any) {
        // Jika 401, ini berarti user belum login (normal)
        // Kita tidak perlu log error untuk kasus ini
        if (error.response?.status === 401) {
            return null; // Return null untuk menandakan belum login
        }

        // Untuk error lainnya, log dan re-throw
        console.error("Auth status check failed:", error.message);
        throw error;
    }
}

// Fungsi untuk logout
export async function logoutUser() {
    const response = await api.post('/auth/logout');
    return response.data;
}

// Export instance default-nya agar bisa dipakai di komponen lain
export default api;