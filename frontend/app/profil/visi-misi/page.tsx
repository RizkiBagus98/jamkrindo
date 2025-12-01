'use client';

// Tambahkan hook
import { useState, useEffect, FC } from 'react';

// Tipe data yang kita terima dari GET
interface VisiMisiData {
    visi: string;
    misi: string[];
}

const VisiMisiPage: FC = () => {
    // State untuk menyimpan data
    const [data, setData] = useState<VisiMisiData>({
        visi: 'Memuat visi...',
        misi: []
    });

    // Fetch data saat komponen dimuat
    useEffect(() => {
        fetch('http://localhost:5001/api/visimisi')
            .then((res) => res.json())
            .then((data: VisiMisiData) => {
                setData(data);
            })
            .catch(err => {
                console.error("Gagal fetch data:", err);
                setData({ visi: 'Gagal memuat visi.', misi: ['Gagal memuat misi.'] });
            });
    }, []);


    return (
        <div className="max-w-screen-lg mx-auto mt-32 px-6">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-blue-900">Visi & Misi</h1>
                <p className="mt-2 text-gray-600 text-lg">Landasan dan arah strategis Jamkrindo dalam mendukung UMKM
                    Indonesia</p>
            </div>

            {/* Visi */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-blue-800 mb-4">Visi</h2>
                <div className="bg-blue-50 p-6 rounded-xl shadow-sm border-l-4 border-blue-600">
                    {/* Tampilkan data 'visi' dari state */}
                    <p className="text-gray-700 text-lg italic">
                        “{data.visi}”
                    </p>
                </div>
            </section>

            {/* Misi */}
            <section>
                <h2 className="text-2xl font-semibold text-blue-800 mb-4">Misi</h2>
                <ul className="space-y-6">
                    {/* Ganti array statis dengan map dari data.misi */}
                    {data.misi.map((item, index) => (
                        <li key={index}
                            className="flex items-start gap-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition">
                            <div className="text-blue-600 font-bold text-xl">{index + 1}.</div>
                            <p className="text-gray-700 text-md">{item}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default VisiMisiPage;