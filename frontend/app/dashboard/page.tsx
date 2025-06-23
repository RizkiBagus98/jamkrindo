"use client";

import { useEffect, useState } from "react";
import Navbar from '@/components/dashboard/Navbar';
import axios from 'axios';

const Page = () => {
  const [berita, setBerita] = useState<any[]>([]);
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [editData, setEditData] = useState<any | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null as File | null,
  });
  useEffect(() => {
    const t = localStorage.getItem('token');
    if (t) {
      setToken(t);
      const decoded = JSON.parse(atob(t.split('.')[1]));
      setUserId(decoded.id);
    }
  }, []);

  const fetchBerita = async () => {
    if (!token || !userId) return;
    try {
      const res = await axios.get('http://localhost:5000/api/berita', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBerita(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (token && userId) {
      fetchBerita();
    }
  }, [token, userId]);

  const handleDelete = async (id: string) => {
    if (!confirm('Yakin ingin menghapus berita ini?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/berita/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchBerita();
    } catch (err) {
      alert('Gagal menghapus berita');
    }
  };

  const handleSave = async () => {
    if (!token) return;

    const fd = new FormData();
    fd.append("title", formData.title);
    fd.append("description", formData.description);
    if (formData.image) {
      fd.append("image", formData.image);
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };

      if (editData) {
        await axios.put(`http://localhost:5000/api/berita/${editData._id}`, fd, config);
      } else {
        await axios.post('http://localhost:5000/api/berita', fd, config);
      }

      setFormData({ title: "", description: "", image: null });
      setEditData(null);
      fetchBerita();
    } catch (err) {
      console.error(err);
      alert('Gagal menyimpan berita');
    }
  };

  const handleEdit = (item: any) => {
    setEditData(item);
    setFormData({
      title: item.title,
      description: item.description,
      image: null,
    });
  };

  return (
    <div className="w-full h-full">
      <div className="p-6">
        <h1 className="text-xl font-bold mb-4">Kelola Berita</h1>

        {/*
        <div className="mb-6 bg-white shadow p-4 rounded space-y-4">
          <input
            type="text"
            placeholder="Judul"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Deskripsi"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full border p-2 rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.files ? e.target.files[0] : null })
            }
          />
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {editData ? "Update Berita" : "Tambah Berita"}
          </button>
        </div> */}

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded">
            <thead>
              <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                <th className="p-3">Judul</th>
                <th className="p-3">Deskripsi</th>
                <th className="p-3">Gambar</th>
                <th className="p-3">Tanggal</th>
                <th className="p-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {berita.map((item) => (
                <tr key={item._id} className="border-b text-sm">
                  <td className="p-3">{item.title}</td>
                  <td className="p-3">{item.description}</td>
                  <td className="p-3">
                    {item.image && (
                      <img
                        src={`http://localhost:5000${item.image}`}
                        alt={item.title}
                        className="w-24 h-16 object-cover rounded"
                      />
                    )}
                  </td>
                  <td className="p-3">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
              {berita.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-4 text-center text-gray-500">
                    Tidak ada data berita.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
