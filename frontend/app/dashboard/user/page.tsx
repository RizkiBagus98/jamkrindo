'use client';

import { useEffect, useState } from "react";
// DIUBAH: Impor 'api' kustom kita, BUKAN 'axios'
import api, { getAuthStatus } from "@/app/utils/api"; 
import { PencilIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline';
import { useRouter } from "next/navigation";

// Definisikan tipe untuk User
interface User {
    id: number;
    name: string;
    email: string;
    role: 'USER' | 'ADMIN';
    createdAt: string; 
}

export default function UserManagementPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [authLoading, setAuthLoading] = useState(true); // Loading untuk cek admin
    const router = useRouter();

    // State untuk form
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); // Hanya untuk create/update
    const [role, setRole] = useState<'USER' | 'ADMIN'>('USER');
    const [editingId, setEditingId] = useState<number | null>(null);

    // --- Cek Otorisasi Admin & Fetch Data ---
    useEffect(() => {
        const checkAdminAndFetchUsers = async () => {
            try {
                // 1. Cek status auth dulu (ini sudah benar, menggunakan getAuthStatus)
                const { user } = await getAuthStatus(); 
                console.log("STATUS USER SAAT INI:", user);
                if (!user || user.role !== 'ADMIN') {
                    console.warn("Akses ditolak: Bukan Admin");
                    router.push('/dashboard'); // Redirect jika bukan admin
                    return;
                }
                setAuthLoading(false); // Selesai cek auth

                // 2. Jika Admin, fetch data pengguna
                await fetchUsers();

            } catch (error) {
                console.error("Gagal memuat:", error);
                router.push('/login'); // Redirect jika error (cth: token tidak valid)
            }
        };

        checkAdminAndFetchUsers();
    }, [router]);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            // DIUBAH: Gunakan 'api' dan URL relatif (karena baseURL sudah di-set)
            const response = await api.get('/users');
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    };

    // --- Modal & Form Handling ---
    const openModalForCreate = () => {
        resetForm();
        setIsModalOpen(true);
    };

    const openModalForEdit = (user: User) => {
        setEditingId(user.id);
        setName(user.name);
        setEmail(user.email);
        setRole(user.role);
        // Password sengaja dikosongkan
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        resetForm();
    };

    const resetForm = () => {
        setName("");
        setEmail("");
        setPassword("");
        setRole('USER');
        setEditingId(null);
    };

    // --- CRUD Operations ---
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Data yang akan dikirim (bukan FormData)
        const userData: any = {
            name,
            email,
            role,
        };

        // Hanya tambahkan password jika diisi (untuk create atau update)
        if (password) {
            userData.password = password;
        }

        // DIUBAH: Hapus 'apiUrl' karena 'api' sudah tahu base URL-nya
        try {
            if (editingId) {
                // DIUBAH: Gunakan 'api' dan URL relatif
                await api.put(`/users/${editingId}`, userData);
            } else {
                // DIUBAH: Gunakan 'api' dan URL relatif
                await api.post('/users', userData);
            }
            fetchUsers();
            closeModal();
        } catch (error) {
            console.error("Error saving user:", error);
            // Tambahkan notifikasi error jika perlu
        }
    };

    const handleDelete = async (id: number) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus user ini?")) {
            try {
                // DIUBAH: Gunakan 'api' dan URL relatif
                await api.delete(`/users/${id}`);
                fetchUsers(); // Refresh daftar user
            } catch (error) {
                console.error("Error deleting user:", error);
            }
        }
    };

    // Tampilkan loading saat cek admin
    if (authLoading) {
        return <div className="p-8 text-center text-gray-500">Memverifikasi akses...</div>
    }

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Manajemen Pengguna</h1>
                <button
                    onClick={openModalForCreate}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                >
                    + Tambah User Baru
                </button>
            </div>

            {/* --- Tabel Data Pengguna --- */}
            <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="overflow-x-auto">
                    <table className="w-full table-auto text-sm">
                        <thead className="bg-gray-100 text-gray-600 text-left">
                        <tr>
                            <th className="p-4 font-semibold">Nama</th>
                            <th className="p-4 font-semibold">Email</th>
                            <th className="p-4 font-semibold">Role</th>
                            <th className="p-4 font-semibold">Tanggal Bergabung</th>
                            <th className="p-4 font-semibold text-center">Aksi</th>
                        </tr>
                        </thead>
                        <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={5} className="text-center py-10 text-gray-500">Memuat data...</td>
                            </tr>
                        ) : users.map((user) => (
                            <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="p-3 font-medium text-gray-800">{user.name}</td>
                                <td className="p-3 text-gray-600">{user.email}</td>
                                <td className="p-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                        user.role === 'ADMIN' 
                                        ? 'bg-red-100 text-red-700' 
                                        : 'bg-blue-100 text-blue-700'
                                    }`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="p-3 text-gray-600">{new Date(user.createdAt).toLocaleDateString('id-ID')}</td>
                                <td className="p-3">
                                    <div className="flex gap-2 justify-center">
                                        <button onClick={() => openModalForEdit(user)}
                                                className="p-2 rounded-full hover:bg-yellow-100 text-yellow-600"
                                                title="Edit">
                                            <PencilIcon className="w-5 h-5"/>
                                        </button>
                                        <button onClick={() => handleDelete(user.id)}
                                                className="p-2 rounded-full hover:bg-red-100 text-red-600"
                                                title="Hapus">
                                            <TrashIcon className="w-5 h-5"/>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                {!loading && users.length === 0 && (
                    <div className="text-center py-10 text-gray-500">
                        <UsersIcon className="w-12 h-12 mx-auto mb-2"/>
                        <p>Belum ada pengguna yang terdaftar.</p>
                    </div>
                )}
            </div>

            {/* --- Modal untuk Form --- */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
                        <h2 className="text-2xl font-bold mb-6">{editingId ? "Edit User" : "Tambah User Baru"}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Nama</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                                       className="w-full p-2 border rounded-md" required/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Email</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                       className="w-full p-2 border rounded-md" required/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                       className="w-full p-2 border rounded-md"
                                       placeholder={editingId ? "Kosongkan jika tidak ingin diubah" : "Wajib diisi"}
                                       required={!editingId} />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-bold mb-2">Role</label>
                                <select value={role} onChange={(e) => setRole(e.target.value as 'USER' | 'ADMIN')}
                                        className="w-full p-2 border rounded-md bg-white">
                                    <option value="USER">USER</option>
                                    <option value="ADMIN">ADMIN</option>
                                </select>
                            </div>
                            
                            <div className="flex justify-end gap-4">
                                <button type="button" onClick={closeModal}
                                        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">Batal
                                </button>
                                <button type="submit"
                                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">{editingId ? "Perbarui" : "Simpan"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}