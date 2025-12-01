'use client'
import {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";
import { PhotoIcon } from "@heroicons/react/24/outline"; // Icon untuk empty state

// Definisikan tipe data untuk Berita agar lebih aman
interface Berita {
    _id: string;
    title: string;
    description: string;
    image: string;
    createdAt: string; // Tambahkan createdAt jika ada di API
}

const BeritaPage = () => {
    const [berita, setBerita] = useState<Berita[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchBerita = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/berita/public`);
                setBerita(response.data);
            } catch (error) {
                console.error("Error fetching berita:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBerita();
    }, []);

    // Tampilan saat data sedang dimuat
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <p className="text-gray-500 text-lg">Memuat berita...</p>
            </div>
        );
    }

    return (
        <div className=" min-h-screen mt-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
                        Berita & Informasi <span className="text-blue-600">Terkini</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Ikuti perkembangan dan kegiatan terbaru dari kami melalui artikel di bawah ini.
                    </p>
                </div>

                {/* Tampilan jika tidak ada berita */}
                {!loading && berita.length === 0 && (
                    <div className="text-center py-16 text-gray-500">
                        <PhotoIcon className="w-16 h-16 mx-auto mb-4 text-gray-400"/>
                        <h3 className="text-xl font-semibold">Belum Ada Berita</h3>
                        <p>Saat ini belum ada berita yang dipublikasikan.</p>
                    </div>
                )}

                {/* Grid untuk daftar berita */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {berita.map((item) => (
                        <Link key={item._id} href={`/berita/${item._id}`} className="group block">
                            <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 h-full flex flex-col">
                                {/* Gambar Berita */}
                                <div className="relative w-full aspect-video overflow-hidden">
                                    <img
                                        src={`http://localhost:5001${item.image}`}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Konten Teks */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                                        {item.description}
                                    </p>

                                    {/* Footer Kartu */}
                                    <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                                       <p className="text-xs text-gray-500">
                                            {new Date(item.createdAt).toLocaleDateString('id-ID', {
                                                day: 'numeric', month: 'long', year: 'numeric'
                                            })}
                                       </p>
                                       <div className="text-blue-600 font-semibold text-sm flex items-center gap-1">
                                            <span>Selengkapnya</span>
                                            <span className="transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BeritaPage;