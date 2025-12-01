'use client';

import { useState, useEffect, FC, ChangeEvent, FormEvent } from 'react';

interface SambutanData {
    content_title?: string | null;
    content_body?: string | null;
}

interface ApiResponse {
    message: string;
}

const DashboardSambutan: FC = () => {
    const [nama, setNama] = useState<string>('');
    const [isiSambutan, setIsiSambutan] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    const API_URL = 'http://localhost:5001/api/sambutan';

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data: SambutanData) => {
                setNama(data.content_title ?? '');
                setIsiSambutan(data.content_body ?? '');
            })
            .catch(err => console.error('Gagal fetch data:', err))
            .finally(() => setLoading(false));
    }, []);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage('Menyimpan...');

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content_title: nama,
                    content_body: isiSambutan,
                }),
            });

            const result: ApiResponse = await response.json();

            if (response.ok) {
                setMessage(result.message);
            } else {
                setMessage(`Gagal menyimpan: ${result.message}`);
            }
        } catch (error) {
            if (error instanceof Error) {
                setMessage(`Error: ${error.message}`);
            } else {
                setMessage('Terjadi error yang tidak diketahui');
            }
        }
    };

    if (loading) {
        return (
            <div className="text-center py-16 text-gray-700 text-lg">
                Memuat data sambutan...
            </div>
        );
    }

    return (
        <div className="max-w-screen-md mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
            <h1 className="text-3xl font-bold text-blue-900 mb-6">
                Edit Sambutan Kepala Cabang
            </h1>

            {message && (
                <div className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg">
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900">
                        Nama Kepala Cabang
                    </label>
                    <input
                        type="text"
                        id="nama"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={nama}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setNama(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="isiSambutan" className="block mb-2 text-sm font-medium text-gray-900">
                        Isi Sambutan
                    </label>
                    <textarea
                        id="isiSambutan"
                        rows={15}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={isiSambutan}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setIsiSambutan(e.target.value)}
                        required
                    />
                </div>

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

export default DashboardSambutan;
