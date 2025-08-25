"use client";

import {useState, useEffect, ChangeEvent, FormEvent, ReactNode} from "react";
import {PlusIcon, PencilIcon, TrashIcon, PhotoIcon} from "@heroicons/react/24/outline";

// Definisikan tipe data untuk Berita
interface Berita {
    _id: string;
    title: string;
    description: string;
    image: string;
    createdAt: string;
}

// Komponen Modal yang reusable
const Modal = ({isOpen, onClose, title, children}: {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4">
                <div className="flex justify-between items-center p-5 border-b">
                    <h3 className="text-xl font-bold text-[#0725ac]">{title}</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">&times;</button>
                </div>
                <div className="p-5 max-h-[80vh] overflow-y-auto">{children}</div>
            </div>
        </div>
    );
};


const BeritaManagementPage = () => {
    // State untuk data dan UI
    const [beritaList, setBeritaList] = useState<Berita[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitLoading, setSubmitLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
    const [currentBerita, setCurrentBerita] = useState<Berita | null>(null);

    // State untuk form
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState<File | null>(null);

    // 1. Fungsi untuk mengambil semua data berita (READ)
    const fetchBerita = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/berita`, {
                credentials: "include",
            });
            if (!res.ok) throw new Error("Gagal memuat data berita");
            const data = await res.json();
            setBeritaList(data);
        } catch (err) {
            console.error(err);
            alert("Gagal memuat data.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBerita();
    }, []);

    // 2. Fungsi untuk menangani submit form (CREATE & UPDATE)
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!title || !content || (modalMode === 'add' && !image)) {
            alert("Judul, deskripsi, dan gambar wajib diisi.");
            return;
        }
        setSubmitLoading(true);

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", content);
        if (image) {
            formData.append("image", image);
        }

        const url = modalMode === 'add'
            ? `${process.env.NEXT_PUBLIC_API_URL}/berita`
            : `${process.env.NEXT_PUBLIC_API_URL}/berita/${currentBerita?._id}`;
        const method = modalMode === 'add' ? "POST" : "PUT";

        try {
            const res = await fetch(url, {
                method,
                credentials: 'include',
                body: formData,
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Operasi gagal');
            }

            alert(`Berita berhasil ${modalMode === 'add' ? 'disimpan' : 'diperbarui'}!`);
            closeModal();
            fetchBerita(); // Muat ulang data untuk menampilkan perubahan
        } catch (err: any) {
            console.error(err);
            alert(err.message);
        } finally {
            setSubmitLoading(false);
        }
    };

    // 3. Fungsi untuk menghapus berita (DELETE)
    const handleDelete = async (id: string) => {
        if (!confirm("Apakah Anda yakin ingin menghapus berita ini?")) return;

        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/berita/${id}`, {
                method: "DELETE",
                headers: {Authorization: `Bearer ${token}`}
            });

            if (!res.ok) throw new Error("Gagal menghapus berita.");

            alert("Berita berhasil dihapus.");
            // Optimasi: Hapus item dari state tanpa fetch ulang
            setBeritaList(beritaList.filter(item => item._id !== id));
        } catch (err) {
            console.error(err);
            alert("Terjadi kesalahan saat menghapus berita.");
        }
    };

    // Fungsi untuk membuka modal
    const openAddModal = () => {
        setModalMode('add');
        setCurrentBerita(null);
        setTitle('');
        setContent('');
        setImage(null);
        setIsModalOpen(true);
    };

    const openEditModal = (berita: Berita) => {
        setModalMode('edit');
        setCurrentBerita(berita);
        setTitle(berita.title);
        setContent(berita.description);
        setImage(null); // Kosongkan field gambar, hanya diisi jika ingin diganti
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="p-6 sm:p-8 bg-gray-100 min-h-screen w-full">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Manajemen Berita</h1>
                    <button
                        onClick={openAddModal}
                        className="flex items-center gap-2 bg-[#0725ac] text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-800 transition-all shadow"
                    >
                        <PlusIcon className="w-5 h-5"/>
                        <span>Tambah Berita</span>
                    </button>
                </header>

                {/* Tabel Data Berita */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto text-sm">
                            <thead className="bg-gray-100 text-gray-600 text-left">
                            <tr>
                                <th className="p-4 font-semibold">Gambar</th>
                                <th className="p-4 font-semibold">Judul</th>
                                <th className="p-4 font-semibold">Tanggal</th>
                                <th className="p-4 font-semibold text-center">Aksi</th>
                            </tr>
                            </thead>
                            <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={4} className="text-center py-10">Memuat data...</td>
                                </tr>
                            ) : beritaList.map((berita) => (
                                <tr key={berita._id} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="p-3">
                                        <img src={`http://localhost:5000${berita.image}`} alt={berita.title}
                                             className="w-24 h-16 object-cover rounded-md"/>
                                    </td>
                                    <td className="p-3 font-medium text-gray-800">{berita.title}</td>
                                    <td className="p-3 text-gray-600">{new Date(berita.createdAt).toLocaleDateString('id-ID')}</td>
                                    <td className="p-3">
                                        <div className="flex gap-2 justify-center">
                                            <button onClick={() => openEditModal(berita)}
                                                    className="p-2 rounded-full hover:bg-yellow-100 text-yellow-600"
                                                    title="Edit">
                                                <PencilIcon className="w-5 h-5"/>
                                            </button>
                                            <button onClick={() => handleDelete(berita._id)}
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
                    {!loading && beritaList.length === 0 && (
                        <div className="text-center py-10 text-gray-500">
                            <PhotoIcon className="w-12 h-12 mx-auto mb-2"/>
                            <p>Belum ada berita yang ditambahkan.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal Form */}
            <Modal isOpen={isModalOpen} onClose={closeModal}
                   title={modalMode === 'add' ? 'Tambah Berita Baru' : 'Edit Berita'}>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block font-semibold mb-1">Judul</label>
                        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}
                               className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#0725ac]"
                               required
                        />
                    </div>
                    <div>
                        <label htmlFor="content" className="block font-semibold mb-1">Deskripsi</label>
                        <textarea id="content" rows={6} value={content} onChange={(e) => setContent(e.target.value)}
                                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#0725ac]"
                                  required
                        />
                    </div>
                    <div>
                        <label htmlFor="image" className="block font-semibold mb-1">
                            Gambar {modalMode === 'edit' && '(Opsional, isi jika ingin ganti)'}
                        </label>
                        <input id="image" type="file" accept="image/*"
                               onChange={(e) => setImage(e.target.files?.[0] || null)}
                               className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0 file:text-sm file:font-semibold
                file:bg-[#0725ac] file:text-white hover:file:bg-blue-800"
                        />
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                        <button type="button" onClick={closeModal}
                                className="bg-gray-200 text-gray-800 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-300">
                            Batal
                        </button>
                        <button type="submit" disabled={submitLoading}
                                className={`inline-flex items-center justify-center bg-[#0725ac] text-white px-5 py-2.5 rounded-lg font-semibold transition ${
                                    submitLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-800"
                                }`}>
                            {submitLoading ? "Menyimpan..." : "Simpan"}
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default BeritaManagementPage;