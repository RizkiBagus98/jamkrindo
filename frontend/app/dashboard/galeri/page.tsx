'use client';

import {useEffect, useState} from "react";
import axios from "axios";
import Image from "next/image";
import {PencilIcon, TrashIcon, PhotoIcon} from '@heroicons/react/24/outline'; // Import ikon

// Definisikan tipe untuk item galeri
interface GalleryItem {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    createdAt: string; // Tambahkan createdAt untuk sorting jika perlu
}

export default function GalleryDashboard() {
    const [gallery, setGallery] = useState<GalleryItem[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true); // State untuk loading

    // State untuk form
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [editingId, setEditingId] = useState<number | null>(null);

    // --- Fetch Data ---
    useEffect(() => {
        fetchGallery();
    }, []);

    const fetchGallery = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/galeri`);
            setGallery(response.data);
        } catch (error) {
            console.error("Error fetching gallery:", error);
        } finally {
            setLoading(false);
        }
    };

    // --- Modal & Form Handling ---
    const openModalForCreate = () => {
        resetForm();
        setIsModalOpen(true);
    };

    const openModalForEdit = (item: GalleryItem) => {
        setEditingId(item.id);
        setTitle(item.title);
        setDescription(item.description);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        resetForm();
    };

    const resetForm = () => {
        setTitle("");
        setDescription("");
        setImage(null);
        setEditingId(null);
    };

    // --- CRUD Operations ---
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        if (image) {
            formData.append("image", image);
        }

        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        try {
            if (editingId) {
                await axios.put(`${apiUrl}/galeri/${editingId}`, formData);
            } else {
                await axios.post(`${apiUrl}/galeri`, formData);
            }
            fetchGallery();
            closeModal();
        } catch (error) {
            console.error("Error saving gallery item:", error);
        }
    };

    const handleDelete = async (id: number) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus item ini?")) {
            try {
                await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/galeri/${id}`);
                fetchGallery();
            } catch (error) {
                console.error("Error deleting gallery item:", error);
            }
        }
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Manajemen Galeri</h1>
                <button
                    onClick={openModalForCreate}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                >
                    + Tambah Item Baru
                </button>
            </div>

            {/* --- Tabel Data Galeri --- */}
            <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="overflow-x-auto">
                    <table className="w-full table-auto text-sm">
                        <thead className="bg-gray-100 text-gray-600 text-left">
                        <tr>
                            <th className="p-4 font-semibold">Gambar</th>
                            <th className="p-4 font-semibold">Judul</th>
                            <th className="p-4 font-semibold">Deskripsi</th>
                            <th className="p-4 font-semibold">Tanggal Dibuat</th>
                            <th className="p-4 font-semibold text-center">Aksi</th>
                        </tr>
                        </thead>
                        <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={5} className="text-center py-10 text-gray-500">Memuat data...</td>
                            </tr>
                        ) : gallery.map((item) => (
                            <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="p-3">
                                    <Image
                                        src={`http://localhost:5001${item.imageUrl}`}
                                        alt={item.title}
                                        width={96} // w-24
                                        height={64} // h-16
                                        className="object-cover rounded-md"
                                        unoptimized
                                    />
                                </td>
                                <td className="p-3 font-medium text-gray-800 align-top">{item.title}</td>
                                <td className="p-3 text-gray-600 max-w-xs align-top">{item.description}</td>
                                <td className="p-3 text-gray-600 align-top">{new Date(item.createdAt).toLocaleDateString('id-ID')}</td>
                                <td className="p-3 align-top">
                                    <div className="flex gap-2 justify-center">
                                        <button onClick={() => openModalForEdit(item)}
                                                className="p-2 rounded-full hover:bg-yellow-100 text-yellow-600"
                                                title="Edit">
                                            <PencilIcon className="w-5 h-5"/>
                                        </button>
                                        <button onClick={() => handleDelete(item.id)}
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
                {!loading && gallery.length === 0 && (
                    <div className="text-center py-10 text-gray-500">
                        <PhotoIcon className="w-12 h-12 mx-auto mb-2"/>
                        <p>Belum ada item galeri yang ditambahkan.</p>
                    </div>
                )}
            </div>

            {/* --- Modal untuk Form (Tidak ada perubahan di sini) --- */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
                        <h2 className="text-2xl font-bold mb-6">{editingId ? "Edit Item" : "Tambah Item Baru"}</h2>
                        <form onSubmit={handleSubmit}>
                            {/* Isi form (title, description, image) tetap sama */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Judul</label>
                                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                                       className="w-full p-2 border rounded-md" required/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Deskripsi</label>
                                <textarea value={description} onChange={(e) => setDescription(e.target.value)}
                                          className="w-full p-2 border rounded-md" rows={4}/>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-bold mb-2">Gambar</label>
                                <input type="file" onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                                       className="w-full p-2 border rounded-md" required={!editingId}/>
                                {editingId &&
                                    <p className="text-sm text-gray-500 mt-1">Kosongkan jika tidak ingin mengubah
                                        gambar.</p>}
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