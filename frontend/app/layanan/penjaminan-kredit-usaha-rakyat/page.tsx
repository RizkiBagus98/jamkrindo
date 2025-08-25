import React from 'react';
import { Shield, CheckCircle, Phone, Mail, MapPin, Store, Clock, TrendingUp, Users, Truck, Leaf, Factory } from 'lucide-react';

const Page = () => {
    return (
        <div className="min-h-screen pt-[7vw]">
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <div className="flex items-center space-x-4">
                        <div className="bg-red-600 p-3 rounded-lg">
                            <Shield className="h-8 w-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">PT Jamkrindo</h1>
                            <p className="text-red-600">Penjaminan Kredit Usaha Rakyat (KUR)</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-red-600 text-white py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Kredit Usaha Rakyat untuk Kemajuan UMKM Indonesia
                    </h2>
                    <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
                        Akses modal mudah tanpa agunan dengan bunga rendah untuk mengembangkan usaha rakyat
                    </p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-red-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                        Ajukan KUR Sekarang
                    </button>
                </div>
            </section>

            {/* Jenis KUR */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Jenis Kredit Usaha Rakyat
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Store className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">KUR Mikro</h3>
                            <p className="text-gray-600 mb-4">
                                Untuk usaha mikro dengan plafon hingga Rp 50 juta tanpa agunan
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Bunga 6% efektif per tahun
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Tenor maksimal 3 tahun
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Factory className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">KUR Kecil</h3>
                            <p className="text-gray-600 mb-4">
                                Untuk usaha kecil dengan plafon Rp 50 juta - Rp 500 juta
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Bunga 6% efektif per tahun
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Tenor maksimal 4 tahun
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Leaf className="h-6 w-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">KUR Khusus</h3>
                            <p className="text-gray-600 mb-4">
                                Program khusus untuk sektor prioritas seperti pertanian dan perikanan
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Bunga 3% untuk tertentu
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Sesuai siklus usaha
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sektor Usaha */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Sektor Usaha yang Didukung
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-lg p-6 shadow-md text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Leaf className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Pertanian & Perkebunan</h3>
                            <p className="text-gray-600 text-sm">Usaha tani, hortikultura, perkebunan</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Perikanan & Kelautan</h3>
                            <p className="text-gray-600 text-sm">Budidaya ikan, pengolahan hasil laut</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md text-center">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Factory className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Industri & Kerajinan</h3>
                            <p className="text-gray-600 text-sm">Industri kecil, kerajinan, manufaktur</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md text-center">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Store className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Perdagangan & Jasa</h3>
                            <p className="text-gray-600 text-sm">Retail, kuliner, jasa konsumen</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Keunggulan KUR */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Keunggulan Program KUR
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="flex items-start space-x-4">
                            <div className="bg-red-100 p-3 rounded-lg">
                                <TrendingUp className="h-6 w-6 text-red-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Bunga Rendah</h3>
                                <p className="text-gray-600">Bunga efektif hanya 6% per tahun, jauh lebih rendah dari kredit komersial</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <Shield className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Tanpa Agunan</h3>
                                <p className="text-gray-600">Tidak memerlukan agunan untuk plafon hingga Rp 500 juta</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-green-100 p-3 rounded-lg">
                                <Clock className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Proses Cepat</h3>
                                <p className="text-gray-600">Persetujuan kredit dalam 5-7 hari kerja dengan dokumen lengkap</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-yellow-100 p-3 rounded-lg">
                                <Users className="h-6 w-6 text-yellow-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Untuk Semua</h3>
                                <p className="text-gray-600">Dapat diakses oleh seluruh rakyat Indonesia yang memiliki usaha</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <Truck className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Fleksibel</h3>
                                <p className="text-gray-600">Dapat digunakan untuk modal kerja maupun investasi usaha</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-orange-100 p-3 rounded-lg">
                                <CheckCircle className="h-6 w-6 text-orange-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Dijamin Penuh</h3>
                                <p className="text-gray-600">100% dijamin oleh pemerintah melalui PT Jamkrindo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Syarat dan Ketentuan */}
            <section className="py-16 bg-red-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Syarat & Ketentuan KUR
                            </h2>
                            <div className="bg-white rounded-lg p-6 border-l-4 border-red-600 mb-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Persyaratan Debitur</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Warga Negara Indonesia (WNI)
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Memiliki usaha produktif minimal 6 bulan
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Tidak sedang menerima kredit dari perbankan
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Usaha bukan merupakan objek pembiayaan negatif
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Dokumen yang Diperlukan</h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                        Fotocopy KTP dan KK yang masih berlaku
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                        Surat izin usaha (jika ada)
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                        Laporan keuangan sederhana
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                        Foto tempat usaha dan aktivitas usaha
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                        Proposal usaha sederhana (untuk plafon > 25 juta)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-6 text-white">
                            <h3 className="text-xl font-bold mb-6">Ketentuan KUR 2025</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span>KUR Mikro</span>
                                    <span className="font-bold text-yellow-400">s/d Rp 50 Juta</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>KUR Kecil</span>
                                    <span className="font-bold text-yellow-400">s/d Rp 500 Juta</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Bunga Efektif</span>
                                    <span className="font-bold text-yellow-400">6% per tahun</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tenor Maksimal</span>
                                    <span className="font-bold text-yellow-400">3-4 Tahun</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Penjaminan</span>
                                    <span className="font-bold text-yellow-400">70% - 80%</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-600">
                                <h4 className="text-lg font-bold mb-4 text-yellow-400">Simulasi Cicilan KUR</h4>
                                <div className="space-y-3 text-sm">
                                    <div className="bg-gray-700 rounded p-3">
                                        <div className="text-center mb-2 font-bold text-yellow-400">KUR Mikro Rp 25 Juta</div>
                                        <div className="flex justify-between mb-1">
                                            <span>Tenor 2 tahun:</span>
                                            <span className="font-bold">Rp 1.1 juta/bulan</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Tenor 3 tahun:</span>
                                            <span className="font-bold">Rp 760 ribu/bulan</span>
                                        </div>
                                    </div>
                                    <div className="bg-gray-700 rounded p-3">
                                        <div className="text-center mb-2 font-bold text-yellow-400">KUR Kecil Rp 100 Juta</div>
                                        <div className="flex justify-between mb-1">
                                            <span>Tenor 3 tahun:</span>
                                            <span className="font-bold">Rp 3.0 juta/bulan</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Tenor 4 tahun:</span>
                                            <span className="font-bold">Rp 2.3 juta/bulan</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-red-600">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Kembangkan Usaha dengan KUR
                    </h2>
                    <p className="text-red-100 text-lg mb-8">
                        Raih kesempatan mendapat modal usaha dengan bunga rendah dan tanpa agunan
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-red-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Ajukan KUR Sekarang
                        </button>
                        <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Konsultasi Gratis
                        </button>
                    </div>

                    <div className="mt-8 grid md:grid-cols-3 gap-4 text-red-100 text-sm">
                        <div>
                            <strong>📞 Hotline KUR:</strong><br />
                            1500-KUR (587)
                        </div>
                        <div>
                            <strong>📧 Email:</strong><br />
                            kur@jamkrindo.co.id
                        </div>
                        <div>
                            <strong>🌐 Website:</strong><br />
                            www.jamkrindo.co.id/kur
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;