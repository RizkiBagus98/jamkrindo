import React from 'react';
import { Shield, CheckCircle, Phone, Mail, MapPin, Banknote, Clock, TrendingUp } from 'lucide-react';

const Page = () => {
    return (
        <div className="min-h-screen pt-[7vw]">
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <div className="flex items-center space-x-4">
                        <div className="bg-blue-600 p-3 rounded-lg">
                            <Shield className="h-8 w-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">PT Jamkrindo</h1>
                            <p className="text-blue-600">Penjaminan Kredit Mikro</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Penjaminan Kredit Mikro untuk UMKM
                    </h2>
                    <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                        Akses modal usaha lebih mudah dengan penjaminan terpercaya dari PT Jamkrindo
                    </p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                        Ajukan Sekarang
                    </button>
                </div>
            </section>

            {/* Layanan */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Layanan Kami
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Banknote className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Kredit Modal Kerja</h3>
                            <p className="text-gray-600 mb-4">
                                Penjaminan untuk kredit modal kerja dengan plafon hingga Rp 500 juta
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Bunga kompetitif
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Proses cepat
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <TrendingUp className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Kredit Investasi</h3>
                            <p className="text-gray-600 mb-4">
                                Penjaminan untuk kredit investasi pengembangan usaha
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Jangka waktu fleksibel
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Agunan ringan
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Clock className="h-6 w-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Kredit Multiguna</h3>
                            <p className="text-gray-600 mb-4">
                                Penjaminan kredit untuk berbagai kebutuhan usaha
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Penggunaan fleksibel
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Cicilan terjangkau
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Syarat dan Ketentuan */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Syarat & Ketentuan
                            </h2>
                            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600 mb-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Persyaratan Debitur</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Warga Negara Indonesia (WNI)
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Memiliki usaha minimal 1 tahun
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Tidak dalam kredit bermasalah
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-6 text-white">
                            <h3 className="text-xl font-bold mb-6">Ketentuan Penjaminan</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span>Plafon Maksimal</span>
                                    <span className="font-bold text-yellow-400">Rp 500 Juta</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Jangka Waktu</span>
                                    <span className="font-bold text-yellow-400">1 - 5 Tahun</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Imbal Jasa</span>
                                    <span className="font-bold text-yellow-400">1% - 2.5%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Coverage Ratio</span>
                                    <span className="font-bold text-yellow-400">80% - 85%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Page;