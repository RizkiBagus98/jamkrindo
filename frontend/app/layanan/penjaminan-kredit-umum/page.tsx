import React from 'react';
import { Shield, CheckCircle, Phone, Mail, MapPin, Building, Clock, TrendingUp, Users, Home, Car } from 'lucide-react';

const Page = () => {
    return (
        <div className="min-h-screen pt-[7vw]">
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <div className="flex items-center space-x-4">
                        <div className="bg-green-600 p-3 rounded-lg">
                            <Shield className="h-8 w-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">PT Jamkrindo</h1>
                            <p className="text-green-600">Penjaminan Kredit Umum</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-green-600 text-white py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Penjaminan Kredit Umum untuk Berbagai Kebutuhan
                    </h2>
                    <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
                        Solusi penjaminan kredit terpercaya untuk kebutuhan konsumtif, investasi, dan modal kerja perorangan
                    </p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-green-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                        Ajukan Penjaminan
                    </button>
                </div>
            </section>

            {/* Layanan */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Jenis Penjaminan Kredit Umum
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Home className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Kredit Perumahan</h3>
                            <p className="text-gray-600 mb-4">
                                Penjaminan untuk kredit pembelian, pembangunan, dan renovasi rumah
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Tenor hingga 20 tahun
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    DP mulai 10%
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Car className="h-6 w-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Kredit Kendaraan</h3>
                            <p className="text-gray-600 mb-4">
                                Penjaminan kredit kendaraan bermotor roda 2 dan 4 untuk kebutuhan pribadi
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Proses persetujuan cepat
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Bunga kompetitif
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Users className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Kredit Multiguna</h3>
                            <p className="text-gray-600 mb-4">
                                Penjaminan kredit untuk berbagai kebutuhan konsumtif dan investasi pribadi
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Penggunaan fleksibel
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Pencairan dana cepat
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
                        Keunggulan Penjaminan Kredit Umum
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Proses Cepat</h3>
                            <p className="text-gray-600 text-sm">Persetujuan penjaminan dalam 3-5 hari kerja</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Terpercaya</h3>
                            <p className="text-gray-600 text-sm">BUMN dengan pengalaman puluhan tahun</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Coverage Tinggi</h3>
                            <p className="text-gray-600 text-sm">Penjaminan hingga 80% dari nilai kredit</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Building className="h-8 w-8 text-yellow-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Jaringan Luas</h3>
                            <p className="text-gray-600 text-sm">Bekerjasama dengan bank di seluruh Indonesia</p>
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
                            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600 mb-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Persyaratan Umum</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Warga Negara Indonesia (WNI)
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Usia minimal 21 tahun
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Memiliki penghasilan tetap
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Tidak dalam daftar hitam BI/SLIK
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Dokumen yang Diperlukan</h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                        Fotocopy KTP dan KK
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                        Slip gaji/bukti penghasilan
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                        Rekening koran 3 bulan terakhir
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                        NPWP (jika ada)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-6 text-white">
                            <h3 className="text-xl font-bold mb-6">Ketentuan Penjaminan</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span>Plafon Maksimal</span>
                                    <span className="font-bold text-yellow-400">Rp 2 Miliar</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Jangka Waktu</span>
                                    <span className="font-bold text-yellow-400">1 - 20 Tahun</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Imbal Jasa</span>
                                    <span className="font-bold text-yellow-400">0.5% - 3%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Coverage Ratio</span>
                                    <span className="font-bold text-yellow-400">70% - 80%</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-600">
                                <h4 className="text-lg font-bold mb-4 text-yellow-400">Kategori Kredit</h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span>Kredit Perumahan</span>
                                        <span>s/d Rp 2M</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Kredit Kendaraan</span>
                                        <span>s/d Rp 500 Jt</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Kredit Multiguna</span>
                                        <span>s/d Rp 1M</span>
                                    </div>
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