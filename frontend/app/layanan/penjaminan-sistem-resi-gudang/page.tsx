import React from 'react';
import { Shield, CheckCircle, Package, Wheat, Coffee, Leaf, TrendingUp, Users, Clock, Warehouse, Settings } from 'lucide-react';

const Page = () => {
    return (
        <div className="min-h-screen pt-[7vw]">
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <div className="flex items-center space-x-4">
                        <div className="bg-indigo-600 p-3 rounded-lg">
                            <Shield className="h-8 w-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">PT Jamkrindo</h1>
                            <p className="text-indigo-600">Penjaminan Sistem Resi Gudang</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-indigo-600 text-white py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Penjaminan Pembiayaan Sistem Resi Gudang
                    </h2>
                    <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
                        Mendukung petani dan pelaku usaha dengan jaminan pembiayaan berbasis komoditas unggulan
                    </p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                        Ajukan Penjaminan
                    </button>
                </div>
            </section>

            {/* Komoditas yang Dijamin */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Komoditas yang Dijamin
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="bg-white rounded-lg p-6 shadow-md border text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Wheat className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Beras & Jagung</h3>
                            <p className="text-gray-600 text-sm mb-3">Produk pertanian utama</p>
                            <div className="text-indigo-600 font-semibold text-sm">
                                s/d Rp 5 M
                            </div>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md border text-center">
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Coffee className="h-8 w-8 text-yellow-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Kopi & Kakao</h3>
                            <p className="text-gray-600 text-sm mb-3">Komoditas ekspor unggulan</p>
                            <div className="text-indigo-600 font-semibold text-sm">
                                s/d Rp 10 M
                            </div>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md border text-center">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Leaf className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Lada & Rumput Laut</h3>
                            <p className="text-gray-600 text-sm mb-3">Komoditas perikanan & rempah</p>
                            <div className="text-indigo-600 font-semibold text-sm">
                                s/d Rp 7 M
                            </div>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md border text-center">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Warehouse className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Komoditas Lain</h3>
                            <p className="text-gray-600 text-sm mb-3">Sesuai ketentuan Bappebti</p>
                            <div className="text-indigo-600 font-semibold text-sm">
                                s/d Rp 15 M
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skema Pembiayaan */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Skema Penjaminan SRG
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Package className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Pembiayaan Bank</h3>
                            <p className="text-gray-600 mb-4">
                                Penjaminan pembiayaan SRG yang diberikan perbankan.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <TrendingUp className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Lembaga Keuangan</h3>
                            <p className="text-gray-600 mb-4">
                                Penjaminan dari koperasi atau multifinance berbasis SRG.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Clock className="h-6 w-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Modal Kerja</h3>
                            <p className="text-gray-600 mb-4">
                                Pembiayaan modal kerja dengan jaminan resi gudang.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Keunggulan */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Keunggulan Penjaminan SRG
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-8 w-8 text-indigo-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Kepastian Jaminan</h3>
                            <p className="text-gray-600 text-sm">Melindungi pembiayaan berbasis SRG</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Proses Cepat</h3>
                            <p className="text-gray-600 text-sm">Pencairan dana lebih cepat dengan resi gudang</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Dukung Petani</h3>
                            <p className="text-gray-600 text-sm">Meningkatkan akses pembiayaan petani</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Settings className="h-8 w-8 text-yellow-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Fleksibel</h3>
                            <p className="text-gray-600 text-sm">Bisa untuk berbagai komoditas sesuai aturan</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-indigo-600">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Maksimalkan Potensi Hasil Panen Anda
                    </h2>
                    <p className="text-indigo-100 text-lg mb-8">
                        Dengan jaminan SRG, pembiayaan usaha tani jadi lebih mudah, cepat, dan aman.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Ajukan Sekarang
                        </button>
                        <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Konsultasi Gratis
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
