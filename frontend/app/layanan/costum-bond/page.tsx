import React from 'react';
import {
    Shield, CheckCircle, Phone, Mail, MapPin, Building, Clock,
    Globe, Users, FileText, Anchor, Warehouse, Ship, Briefcase
} from 'lucide-react';

const CustomsBondPage = () => {
    return (
        <div className="min-h-screen pt-[7vw] bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <div className="flex items-center space-x-4">
                        <div className="bg-blue-800 p-3 rounded-lg">
                            <Shield className="h-8 w-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">PT Jamkrindo</h1>
                            <p className="text-blue-800">Customs Bond & Jaminan Kepabeanan</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-blue-800 text-white py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Customs Bond untuk Kelancaran Impor & Ekspor Anda
                    </h2>
                    <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                        Jaminan untuk memenuhi kewajiban pabean, cukai, dan pajak dalam rangka impor (PDRI) dengan cepat dan efisien.
                    </p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                        Ajukan Jaminan Pabean
                    </button>
                </div>
            </section>

            {/* Jenis Jaminan Pabean */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Jenis Jaminan Pabean (Customs Bond)
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-6 shadow-md border hover:shadow-xl transition-shadow">
                            <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Warehouse className="h-6 w-6 text-teal-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Jaminan Kawasan Berikat (KB)</h3>
                            <p className="text-gray-600 mb-4">
                                Menjamin kewajiban pabean atas barang yang masuk/keluar dari Kawasan Berikat.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Penangguhan Bea Masuk & PDRI
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Mendukung kelancaran produksi untuk ekspor
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md border hover:shadow-xl transition-shadow">
                            <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Globe className="h-6 w-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Jaminan KITE</h3>
                            <p className="text-gray-600 mb-4">
                                Jaminan untuk fasilitas Kemudahan Impor Tujuan Ekspor (KITE).
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Pembebasan Bea Masuk atas bahan baku impor
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Meningkatkan daya saing produk ekspor
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md border hover:shadow-xl transition-shadow">
                            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <FileText className="h-6 w-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Jaminan Penundaan Cukai (CK-1)</h3>
                            <p className="text-gray-600 mb-4">
                                Jaminan untuk penundaan pembayaran cukai atas barang kena cukai (BKC).
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Masa berlaku jaminan hingga 3 bulan
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Membantu manajemen arus kas perusahaan
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Manfaat Utama */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Manfaat Utama Customs Bond
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-lg p-6 shadow-md text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Percepat Proses Clearance</h3>
                            <p className="text-gray-600 text-sm">Mengurangi waktu tunggu barang di pelabuhan/bandara.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Briefcase className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Efisiensi Cash Flow</h3>
                            <p className="text-gray-600 text-sm">Alternatif jaminan tunai/bank garansi yang lebih fleksibel.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md text-center">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Kepatuhan Regulasi</h3>
                            <p className="text-gray-600 text-sm">Memastikan pemenuhan kewajiban kepada Ditjen Bea dan Cukai.</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md text-center">
                            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Globe className="h-8 w-8 text-indigo-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Dukung Perdagangan Global</h3>
                            <p className="text-gray-600 text-sm">Memperlancar arus barang untuk kegiatan impor dan ekspor.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sektor yang Dilayani */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Industri yang Kami Layani
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="flex items-start space-x-4">
                            <div className="bg-teal-100 p-3 rounded-lg">
                                <Building className="h-6 w-6 text-teal-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Manufaktur & Industri</h3>
                                <p className="text-gray-600">Importir bahan baku, mesin, dan suku cadang.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <Ship className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Perdagangan & Logistik</h3>
                                <p className="text-gray-600">Importir umum, forwarder, dan perusahaan logistik.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-green-100 p-3 rounded-lg">
                                <Users className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Otomotif</h3>
                                <p className="text-gray-600">Importir kendaraan (CBU), komponen, dan suku cadang.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-yellow-100 p-3 rounded-lg">
                                <Briefcase className="h-6 w-6 text-yellow-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Elektronik</h3>
                                <p className="text-gray-600">Importir barang elektronik konsumer dan industri.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <FileText className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Farmasi & Alat Kesehatan</h3>
                                <p className="text-gray-600">Importir bahan baku obat dan alat kesehatan.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-orange-100 p-3 rounded-lg">
                                <Anchor className="h-6 w-6 text-orange-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Makanan & Minuman</h3>
                                <p className="text-gray-600">Importir bahan baku dan produk jadi makanan & minuman.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Keunggulan */}
            <section className="py-16 bg-blue-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Keunggulan Customs Bond PT Jamkrindo
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="bg-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-8 w-8 text-blue-800" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">BUMN Terpercaya</h3>
                            <p className="text-gray-600 text-sm">Didukung oleh pemerintah, menjamin keamanan transaksi.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Diterima Bea Cukai</h3>
                            <p className="text-gray-600 text-sm">Terdaftar dan diakui oleh Ditjen Bea dan Cukai RI.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="h-8 w-8 text-yellow-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Proses Cepat & Online</h3>
                            <p className="text-gray-600 text-sm">Penerbitan jaminan dalam 1 hari kerja melalui sistem online.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MapPin className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Jaringan Luas</h3>
                            <p className="text-gray-600 text-sm">Layanan di seluruh kantor cabang, pelabuhan, & bandara.</p>
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
                                Syarat & Prosedur Pengajuan
                            </h2>
                            <div className="bg-teal-50 rounded-lg p-6 border-l-4 border-teal-600 mb-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Persyaratan Importir/Principal</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Perusahaan berbadan hukum (PT/CV).
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Memiliki Nomor Induk Berusaha (NIB) yang berlaku.
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Laporan keuangan 2 tahun terakhir.
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Track record kegiatan impor/ekspor yang baik.
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Dokumen yang Diperlukan</h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li className="flex items-start">
                                        <FileText className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                                        Legalitas Perusahaan (Akta, NIB, NPWP, dll).
                                    </li>
                                    <li className="flex items-start">
                                        <FileText className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                                        Angka Pengenal Impor (API-U/API-P).
                                    </li>
                                    <li className="flex items-start">
                                        <FileText className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                                        Dokumen Impor (PIB, Invoice, Packing List, B/L).
                                    </li>
                                    <li className="flex items-start">
                                        <FileText className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                                        Surat Tagihan/Penetapan dari Bea Cukai (jika ada).
                                    </li>
                                    <li className="flex items-start">
                                        <FileText className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                                        Laporan Keuangan 2 tahun terakhir.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-6 text-white">
                            <h3 className="text-xl font-bold mb-6">Ketentuan Customs Bond</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span>Plafon Jaminan</span>
                                    <span className="font-bold text-yellow-400">Sesuai Kebutuhan*</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Jangka Waktu</span>
                                    <span className="font-bold text-yellow-400">Sesuai Peraturan Bea Cukai</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Premi/Jasa</span>
                                    <span className="font-bold text-yellow-400">Kompetitif & Fleksibel</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Collateral</span>
                                    <span className="font-bold text-yellow-400">Sesuai Hasil Analisis</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Waktu Proses</span>
                                    <span className="font-bold text-yellow-400">1 Hari Kerja</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-600">
                                <h4 className="text-lg font-bold mb-4 text-yellow-400">Fasilitas yang Dijamin</h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                                        <span>Penangguhan Bea Masuk & PDRI</span>
                                    </div>
                                    <div className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                                        <span>Kawasan Berikat & Gudang Berikat</span>
                                    </div>
                                    <div className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                                        <span>Kemudahan Impor Tujuan Ekspor (KITE)</span>
                                    </div>
                                    <div className="flex items-center">
                                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                                        <span>Penundaan Pembayaran Cukai</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-600">
                                <div className="text-xs text-gray-400">
                                    *Plafon dan collateral ditentukan berdasarkan analisis risiko dan profil keuangan perusahaan.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-800">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Siap Memperlancar Proses Kepabeanan Anda?
                    </h2>
                    <p className="text-blue-100 text-lg mb-8">
                        Dapatkan Customs Bond dengan cepat untuk menghindari penundaan dan denda di pelabuhan.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Konsultasi Gratis
                        </button>
                        <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Download Brosur
                        </button>
                    </div>

                    <div className="mt-8 grid md:grid-cols-3 gap-4 text-blue-100 text-sm">
                        <div>
                            <strong>📞 Hotline Customs:</strong><br />
                            1500-CUSTOMS (287)
                        </div>
                        <div>
                            <strong>📧 Email:</strong><br />
                            customs@jamkrindo.co.id
                        </div>
                        <div>
                            <strong>🏢 Layanan Kepabeanan:</strong><br />
                            Seluruh Kantor Pelayanan Bea Cukai
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CustomsBondPage;