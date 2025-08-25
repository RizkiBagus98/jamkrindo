'use client'
import {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link"; // Import Link dari Next.js

const BeritaPage = () => {
    const [berita, setBerita] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Fetch data berita
    useEffect(() => {
        const fetchBerita = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/berita/public`); // Ambil data berita publik
                setBerita(response.data); // Simpan data berita ke state
            } catch (error) {
                console.error("Error fetching berita:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBerita();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="w-full h-full p-10">
            <h1 className="text-4xl font-bold mb-10">Daftar Berita</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {berita.map((item) => (
                    <Link key={item._id} href={`/berita/${item._id}`}>
                        <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 shadow-lg rounded-lg">
                            {/* Gambar Berita */}
                            <div className="relative w-[20vw] h-48 bg-cover bg-center rounded-lg"
                                 style={{backgroundImage: `url('http://localhost:5000${item.image}')`}}
                            >
                                <div className="absolute inset-0 bg-black/60"/>
                            </div>

                            {/* Informasi Berita */}
                            <div className="w-full sm:w-2/3">
                                <h2 className="font-bold text-2xl text-blue-600">{item.title}</h2>
                                <p className="mt-2 text-lg text-gray-700">{item.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BeritaPage;
