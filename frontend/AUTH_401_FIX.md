# Solusi Error 401 (Unauthorized) pada Auth Status Check

## Masalah
Ketika aplikasi frontend memulai, akan ada error 401 (Unauthorized) yang muncul di console:
```
Failed to load resource: the server responded with a status of 401 (Unauthorized)
Auth status check failed AxiosError
```

Ini terjadi karena:
1. Frontend mengecek status autentikasi user via endpoint `/api/auth/status`
2. Endpoint ini memerlukan token di cookie `session-token`
3. Ketika user belum login, cookie tidak ada, sehingga server mengembalikan 401
4. Frontend menangani error ini dengan baik (menampilkan tombol Login), tetapi error masih muncul di console

## Solusi

### 1. **Axios Interceptor** (`app/utils/axiosConfig.ts`)
- Membuat interceptor khusus untuk menangani error 401 pada endpoint `/auth/status`
- Ketika 401 terjadi pada endpoint ini, error tidak di-log ke console
- Untuk endpoint lain, error tetap di-log untuk debugging

### 2. **Providers Wrapper** (`app/providers.tsx`)
- Inisialisasi Axios config (interceptor) saat aplikasi pertama kali dimuat
- Memastikan interceptor aktif untuk semua API calls

### 3. **Updated API Utility** (`app/utils/api.ts`)
- Update `getAuthStatus()` function untuk return `null` jika 401
- Ini memudahkan frontend untuk membedakan antara "belum login" vs "error jaringan"

## Hasil
✅ Error 401 tidak lagi muncul di console saat user belum login
✅ Navbar tetap berfungsi normal (menampilkan tombol Login)
✅ Jika terjadi error jaringan lain, tetap akan di-log untuk debugging

## Alur Flow

```
User membuka aplikasi
    ↓
ClientLayout mount
    ↓
Providers inisialisasi axios config
    ↓
Navbar mount → useEffect checkAuth()
    ↓
getAuthStatus() dipanggil
    ↓
Request ke /api/auth/status (tanpa token)
    ↓
Server return 401
    ↓
Axios interceptor cek: apakah ini /auth/status? → YA
    ↓
Silent fail (tidak log error)
    ↓
Frontend return null → setUser(null)
    ↓
Navbar tampilkan tombol "Login" ✅
```

## Testing

Untuk memverifikasi solusi bekerja:

1. Buka aplikasi tanpa login
2. Lihat console (F12 → Console tab)
3. Error 401 tidak akan muncul
4. Navbar akan menampilkan tombol "Login"
5. Network tab akan menunjukkan request ke `/auth/status` dengan status 401 (ini normal)

## File yang Diubah

- `frontend/app/utils/api.ts` - Update getAuthStatus()
- `frontend/app/utils/axiosConfig.ts` - NEW: Axios interceptor config
- `frontend/app/providers.tsx` - NEW: Provider wrapper
- `frontend/components/ui/ClientLayout.tsx` - Tambah Providers wrapper
- `frontend/components/ui/Navbar.tsx` - Comment update untuk clarity
