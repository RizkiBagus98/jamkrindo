import React from 'react';
import { Shield, CheckCircle, Phone, Mail, MapPin, Home, Clock, TrendingUp, Users, Heart, Award, FileText } from 'lucide-react';

const Page = () => {
    return (
        <div className="min-h-screen pt-[7vw]">
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <div className="flex items-center space-x-4">
                        <div className="bg-orange-600 p-3 rounded-lg">
                            <Shield className="h-8 w-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">PT Jamkrindo</h1>
                            <p className="text-orange-600">Penjaminan KPR Bersubsidi</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-orange-600 text-white py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Penjaminan KPR Bersubsidi untuk Rumah Impian
                    </h2>
                    <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
                        Wujudkan mimpi memiliki rumah dengan program KPR bersubsidi yang didukung penjaminan terpercaya
                    </p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-orange-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                        Daftar Sekarang
                    </button>
                </div>
            </section>

            {/* Program KPR */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Program KPR Bersubsidi
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Home className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">KPR FLPP</h3>
                            <p className="text-gray-600 mb-4">
                                Fasilitas Likuiditas Pembiayaan Perumahan untuk MBR dengan bunga subsidi
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Bunga 5% fixed 20 tahun
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    DP mulai 1%
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Heart className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">KPR Tapera</h3>
                            <p className="text-gray-600 mb-4">
                                Kredit pemilikan rumah melalui program Tabungan Perumahan Rakyat
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Bunga 3% - 5%
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Tenor hingga 20 tahun
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Award className="h-6 w-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">KPR Sejahtera</h3>
                            <p className="text-gray-600 mb-4">
                                Program khusus ASN dan pekerja formal dengan skema pembayaran terjangkau
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Cicilan maksimal 30% gaji
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Proses mudah dan cepat
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Keunggulan */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Keunggulan KPR Bersubsidi
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Bunga Rendah</h3>
                            <p className="text-gray-600 text-sm">Bunga subsidi dari pemerintah mulai 3%</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Home className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">DP Ringan</h3>
                            <p className="text-gray-600 text-sm">Uang muka mulai dari 1% saja</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Tenor Panjang</h3>
                            <p className="text-gray-600 text-sm">Cicilan hingga 20 tahun</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Dijamin Penuh</h3>
                            <p className="text-gray-600 text-sm">Penjaminan 100% dari PT Jamkrindo</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target dan Batasan */}
            <section className="py-16 bg-orange-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Kriteria dan Batasan
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Target Sasaran MBR</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Penghasilan per bulan</span>
                                    <span className="font-bold text-orange-600">≤ Rp 8 juta</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Belum memiliki rumah</span>
                                    <span className="font-bold text-green-600">✓ Wajib</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Usia maksimal</span>
                                    <span className="font-bold text-orange-600">≤ 65 tahun</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Masa kerja minimal</span>
                                    <span className="font-bold text-orange-600">≥ 1 tahun</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Batasan Rumah</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Harga rumah maksimal</span>
                                    <span className="font-bold text-orange-600">Rp 350 juta</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Luas bangunan</span>
                                    <span className="font-bold text-orange-600">≥ 36 m²</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Luas tanah</span>
                                    <span className="font-bold text-orange-600">60 - 200 m²</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Tipe rumah</span>
                                    <span className="font-bold text-green-600">RS / RSH</span>
                                </div>
                            </div>
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
                            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-600 mb-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Persyaratan Utama</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        WNI berusia 21-65 tahun saat lunas
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Belum pernah menerima subsidi perumahan
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Penghasilan sesuai ketentuan MBR
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Tidak sedang menerima kredit perumahan
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Dokumen Diperlukan</h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li className="flex items-start">
                                        <FileText className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                                        KTP suami istri (jika menikah)
                                    </li>
                                    <li className="flex items-start">
                                        <FileText className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                                        Kartu Keluarga
                                    </li>
                                    <li className="flex items-start">
                                        <FileText className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                                        Surat keterangan penghasilan
                                    </li>
                                    <li className="flex items-start">
                                        <FileText className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                                        Rekening koran 3 bulan
                                    </li>
                                    <li className="flex items-start">
                                        <FileText className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                                        NPWP (jika ada)
                                    </li>
                                    <li className="flex items-start">
                                        <FileText className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                                        Surat pernyataan belum memiliki rumah
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-6 text-white">
                            <h3 className="text-xl font-bold mb-6">Detail Penjaminan KPR Bersubsidi</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span>Plafon Maksimal</span>
                                    <span className="font-bold text-yellow-400">Rp 350 Juta</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Jangka Waktu</span>
                                    <span className="font-bold text-yellow-400">5 - 20 Tahun</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Bunga Efektif</span>
                                    <span className="font-bold text-yellow-400">3% - 5%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Coverage Ratio</span>
                                    <span className="font-bold text-yellow-400">100%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Uang Muka</span>
                                    <span className="font-bold text-yellow-400">1% - 5%</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-600">
                                <h4 className="text-lg font-bold mb-4 text-yellow-400">Simulasi Cicilan</h4>
                                <div className="space-y-3 text-sm">
                                    <div className="bg-gray-700 rounded p-3">
                                        <div className="flex justify-between mb-1">
                                            <span>Harga Rumah:</span>
                                            <span className="font-bold">Rp 300 juta</span>
                                        </div>
                                        <div className="flex justify-between mb-1">
                                            <span>DP 5%:</span>
                                            <span>Rp 15 juta</span>
                                        </div>
                                        <div className="flex justify-between mb-1">
                                            <span>KPR:</span>
                                            <span>Rp 285 juta</span>
                                        </div>
                                        <div className="flex justify-between text-yellow-400 font-bold border-t border-gray-600 pt-1">
                                            <span>Cicilan/bulan:</span>
                                            <span>~Rp 2.1 juta</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-orange-600">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Wujudkan Rumah Impian Anda
                    </h2>
                    <p className="text-orange-100 text-lg mb-8">
                        Dapatkan informasi lengkap dan konsultasi gratis untuk KPR bersubsidi
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-orange-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Konsultasi Gratis
                        </button>
                        <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Cek Kelayakan
                        </button>
                    </div>

                    <div className="mt-8 text-orange-100 text-sm">
                        <p>📞 Hotline 24 Jam: 1500-345 | 📧 info@jamkrindo.co.id</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;