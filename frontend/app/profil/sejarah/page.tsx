'use client';

// 1. Impor hook
import { useState, useEffect, FC } from 'react';

// 2. Definisikan tipe data
interface SejarahData {
    text: string;
}

const SejarahPage: FC = () => { // 3. Tambahkan :FC
    
    // 4. Buat state untuk menampung paragraf
    const [paragraf, setParagraf] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // 5. Fetch data
    useEffect(() => {
        fetch('http://localhost:5001/api/sejarah')
            .then(res => res.json())
            .then((data: SejarahData) => {
                // Pisahkan string tunggal menjadi array paragraf, 
                // filter(Boolean) untuk hapus baris kosong
                setParagraf(data.text.split('\n').filter(Boolean));
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Gagal fetch data:", err);
                setParagraf(["Gagal memuat sejarah perusahaan."]);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="max-w-screen-lg mx-auto mt-32 px-6">
            <div className="mb-10 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-900">Sejarah Jamkrindo Cabang Madiun</h1>
                <p className="mt-2 text-gray-600 text-lg">
                    Menelusuri perjalanan dan kontribusi Jamkrindo dalam mendukung UMKM di Madiun dan sekitarnya.
                </p>
            </div>

            {/* 6. Ganti konten statis menjadi dinamis */}
            <div className="prose lg:prose-lg prose-slate max-w-none">
                {isLoading ? (
                    <p>Memuat sejarah...</p>
                ) : (
                    // Render setiap item di array sebagai tag <p>
                    paragraf.map((p, index) => (
                        <p key={index}>{p}</p>
                    ))
                )}
            </div>
        </div>
    );
};

export default SejarahPage;