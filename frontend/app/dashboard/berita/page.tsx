"use client";

import Navbar from "@/components/dashboard/Navbar";
import { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content || !image) {
      alert("Judul, deskripsi, dan gambar wajib diisi.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", content);
    formData.append("image", image); // createdAt tidak perlu jika default dari backend

    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/berita", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) throw new Error("Gagal menyimpan berita");

      const data = await res.json();
      alert("Berita berhasil disimpan!");
      console.log("Saved:", data);

      // Reset form
      setTitle("");
      setContent("");
      setImage(null);
      (document.getElementById("image") as HTMLInputElement).value = "";
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat menyimpan berita.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 mb-6">
      <Navbar />
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 mt-10">
        <h1 className="text-3xl font-bold text-[#0725ac] mb-6">Form Berita</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Judul */}
          <div>
            <label htmlFor="title" className="block font-semibold mb-1">
              Judul
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#0725ac]"
              placeholder="Masukkan judul berita..."
              required
            />
          </div>

          {/* Isi Konten */}
          <div>
            <label htmlFor="content" className="block font-semibold mb-1">
              Deskripsi
            </label>
            <textarea
              id="content"
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#0725ac]"
              placeholder="Tulis isi lengkap berita di sini..."
              required
            />
          </div>

          {/* Gambar */}
          <div>
            <label htmlFor="image" className="block font-semibold mb-1">
              Gambar
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-[#0725ac] file:text-white
                hover:file:bg-blue-800"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-center bg-[#0725ac] text-white px-6 py-3 rounded-md font-semibold transition ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-800"
            }`}
          >
            {loading ? "Menyimpan..." : "Simpan Berita"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
