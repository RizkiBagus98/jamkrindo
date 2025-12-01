// components/admin/DashboardSejarah.tsx
'use client';

import { useState, useEffect, FC, ChangeEvent, FormEvent } from 'react';

// Tipe data yang kita terima dari GET
interface SejarahData {
    text: string;
}

const DashboardSejarah: FC = () => {
    const [text, setText] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const API_URL = 'http://localhost:5001/api/sejarah';

    // 1. Fetch data
    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data: SejarahData) => {
                setText(data.text);
            })
            .catch(err => {
                console.error("Gagal fetch data:", err);
                setMessage("Gagal memuat data. Cek konsol.");
            });
    }, []);

    // 2. Handle saat form di-submit
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage('Menyimpan...');

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: text }),
            });

            const result = await response.json();

            if (response.ok) {
                setMessage(result.message);
            } else {
                setMessage(`Gagal menyimpan: ${result.message}`);
            }

        } catch (error) {
            if (error instanceof Error) {
                setMessage(`Error: ${error.message}`);
            }
        }
    };

    return (
        <div className="max-w-screen-md mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
            <h1 className="text-3xl font-bold text-blue-900 mb-6">
                Edit Halaman Sejarah
            </h1>

            {message && (
                <div className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg">
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                {/* Textarea untuk Sejarah */}
                <div className="mb-6">
                    <label htmlFor="sejarah" className="block mb-2 text-sm font-medium text-gray-900">
                        Isi Teks Sejarah
                    </label>
                    <textarea
                        id="sejarah"
                        rows={20} // Buat lebih besar karena teksnya panjang
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={text}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
                        required
                    />
                    <p className="mt-2 text-xs text-gray-500">
                        Pisahkan tiap paragraf dengan menekan Enter (baris baru).
                    </p>
                </div>

                {/* Tombol Submit */}
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Simpan Perubahan
                </button>
            </form>
        </div>
    );
};

export default DashboardSejarah;