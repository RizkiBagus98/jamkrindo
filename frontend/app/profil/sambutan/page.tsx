// components/SambutanKetua.jsx (Versi Dinamis)
'use client';

import { useState, useEffect } from 'react';

const SambutanKetua = () => {
    const [nama, setNama] = useState('...');
    const [isiSambutan, setIsiSambutan] = useState('Memuat sambutan...');

    useEffect(() => {
        fetch('http://localhost:5001/api/sambutan')
            .then((res) => res.json())
            .then((data) => {
                setNama(data.content_title);
                // Kita perlu mengganti newline (\n) menjadi tag <p>
                // atau menggunakan styling `white-space: pre-wrap`
                setIsiSambutan(data.content_body);
            })
            .catch(err => {
                console.error("Gagal fetch data:", err);
                setIsiSambutan('Gagal memuat sambutan. Silakan coba lagi nanti.');
            });
    }, []);

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-screen-lg mx-auto px-6">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-8 md:p-12 bg-blue-50/30 border-b border-blue-100">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <img
                                src="/images/image-1.png"
                                alt="Kepala Cabang Jamkrindo Madiun"
                                className="w-40 h-40 rounded-full object-cover shadow-lg ring-4 ring-white"
                            />
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-bold text-blue-900">
                                    Kata Sambutan
                                </h1>
                                <p className="text-lg text-gray-600 mt-2">
                                    Kepala Cabang Jamkrindo Madiun
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        {/* Gunakan `whitespace-pre-wrap` agar format paragraf 
                          dari textarea (yang menggunakan \n) tetap tampil benar 
                        */}
                        <div className="prose lg:prose-lg prose-slate max-w-none">
                            <p className="whitespace-pre-wrap">
                                {isiSambutan}
                            </p>
                            
                            <div className="mt-12 pt-6 border-t border-slate-200">
                                <p className="text-lg font-semibold text-gray-800">
                                    {nama}
                                </p>
                                <p className="text-gray-600">
                                    Kepala Cabang Jamkrindo Madiun
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SambutanKetua;