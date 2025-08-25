import React from 'react';
import { Shield, CheckCircle, Phone, Mail, MapPin, Building, Clock, TrendingUp, Users, FileText, Award, Briefcase } from 'lucide-react';

const Page = () => {
    return (
        <div className="min-h-screen pt-[7vw]">
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <div className="flex items-center space-x-4">
                        <div className="bg-teal-600 p-3 rounded-lg">
                            <Shield className="h-8 w-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">PT Jamkrindo</h1>
                            <p className="text-teal-600">Surety Bond & Jaminan Non-Kredit</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-teal-600 text-white py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Surety Bond untuk Mendukung Bisnis Anda
                    </h2>
                    <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
                        Jaminan pelaksanaan kontrak, tender, dan kewajiban bisnis dengan dukungan BUMN terpercaya
                    </p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-teal-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                        Konsultasi Surety Bond
                    </button>
                </div>
            </section>

            {/* Jenis Surety Bond */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Jenis Surety Bond
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Building className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Bond</h3>
                            <p className="text-gray-600 mb-4">
                                Jaminan pelaksanaan pekerjaan kontrak sesuai dengan syarat dan ketentuan
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Nilai kontrak s/d Rp 100 M
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Jaminan 5% - 10% nilai kontrak
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Award className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Bid Bond</h3>
                            <p className="text-gray-600 mb-4">
                                Jaminan penawaran dalam proses tender untuk memastikan kesungguhan peserta
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Tender pemerintah & swasta
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Jaminan 1% - 3% HPS
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <FileText className="h-6 w-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Advance Payment Bond</h3>
                            <p className="text-gray-600 mb-4">
                                Jaminan uang muka untuk melindungi pemberi kerja dari penyalahgunaan dana
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Sesuai nilai uang muka
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Berlaku hingga kontrak selesai
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jenis Tambahan */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Jaminan Khusus Lainnya
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-lg p-6 shadow-md text-center">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Briefcase className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Maintenance Bond</h3>
                            <p className="text-gray-600 text-sm">Jaminan pemeliharaan pasca pelaksanaan</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md text-center">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Warranty Bond</h3>
                            <p className="text-gray-600 text-sm">Jaminan kualitas hasil pekerjaan</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md text-center">
                            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="h-8 w-8 text-indigo-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Customs Bond</h3>
                            <p className="text-gray-600 text-sm">Jaminan pabean dan kepabeanan</p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Court Bond</h3>
                            <p className="text-gray-600 text-sm">Jaminan proses hukum dan peradilan</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sektor yang Dilayani */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Sektor yang Dilayani
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="flex items-start space-x-4">
                            <div className="bg-teal-100 p-3 rounded-lg">
                                <Building className="h-6 w-6 text-teal-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Konstruksi & Infrastruktur</h3>
                                <p className="text-gray-600">Jalan, jembatan, gedung, bandara, pelabuhan</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <TrendingUp className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Energi & Tambang</h3>
                                <p className="text-gray-600">Pembangkit listrik, kilang minyak, pertambangan</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-green-100 p-3 rounded-lg">
                                <Users className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Teknologi & Telekomunikasi</h3>
                                <p className="text-gray-600">Sistem IT, jaringan telekomunikasi, data center</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-yellow-100 p-3 rounded-lg">
                                <Award className="h-6 w-6 text-yellow-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Manufaktur & Industri</h3>
                                <p className="text-gray-600">Pabrik, mesin industri, peralatan produksi</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <FileText className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Perdagangan & Logistik</h3>
                                <p className="text-gray-600">Supply chain, distribusi, pergudangan</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-orange-100 p-3 rounded-lg">
                                <Briefcase className="h-6 w-6 text-orange-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Jasa Profesional</h3>
                                <p className="text-gray-600">Konsultan, kontraktor, developer properti</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Keunggulan */}
            <section className="py-16 bg-teal-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Keunggulan Surety Bond PT Jamkrindo
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-8 w-8 text-teal-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">BUMN Terpercaya</h3>
                            <p className="text-gray-600 text-sm">Backing pemerintah dengan pengalaman 40+ tahun</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Proses Cepat</h3>
                            <p className="text-gray-600 text-sm">Penerbitan surety bond 1-3 hari kerja</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Kapasitas Besar</h3>
                            <p className="text-gray-600 text-sm">Mampu menjamin proyek hingga triliunan rupiah</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Tim Ahli</h3>
                            <p className="text-gray-600 text-sm">Underwriter berpengalaman di berbagai sektor</p>
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
                            <div className="bg-teal-50 rounded-lg p-6 border-l-4 border-teal-600 mb-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Persyaratan Principal</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Perusahaan berbadan hukum yang sah
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Track record perusahaan minimal 2 tahun
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Laporan keuangan audited 2 tahun terakhir
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Tidak sedang dalam sengketa hukum
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Dokumen yang Diperlukan</h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li className="flex items-start">
                                        <FileText className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                                        Akta pendirian dan perubahan terakhir
                                    </li>
                                    <li className="flex items-start">
                                        <FileText className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                                        NPWP perusahaan dan pengurus
                                    </li>
                                    <li className="flex items-start">
                                        <FileText className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                                        Laporan keuangan audited 2 tahun
                                    </li>
                                    <li className="flex items-start">
                                        <FileText className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                                        Company profile dan portfolio
                                    </li>
                                    <li className="flex items-start">
                                        <FileText className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                                        Surat kontrak/tender yang akan dijamin
                                    </li>
                                    <li className="flex items-start">
                                        <FileText className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                                        Izin usaha dan sertifikasi relevan
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-6 text-white">
                            <h3 className="text-xl font-bold mb-6">Ketentuan Surety Bond</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span>Kapasitas Maksimal</span>
                                    <span className="font-bold text-yellow-400">No Limit*</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Jangka Waktu</span>
                                    <span className="font-bold text-yellow-400">Sesuai Kontrak</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Komisi/Premi</span>
                                    <span className="font-bold text-yellow-400">0.5% - 3%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Collateral</span>
                                    <span className="font-bold text-yellow-400">10% - 100%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Waktu Proses</span>
                                    <span className="font-bold text-yellow-400">1 - 3 Hari</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-600">
                                <h4 className="text-lg font-bold mb-4 text-yellow-400">Jenis Surety Bond</h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span>Bid Bond:</span>
                                        <span>1% - 3% HPS</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Performance Bond:</span>
                                        <span>5% - 10% kontrak</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Advance Payment:</span>
                                        <span>= Nilai uang muka</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Maintenance Bond:</span>
                                        <span>5% - 10% kontrak</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-600">
                                <div className="text-xs text-gray-400">
                                    *Berdasarkan kemampuan keuangan dan track record perusahaan
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-teal-600">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Butuh Surety Bond untuk Proyek Anda?
                    </h2>
                    <p className="text-teal-100 text-lg mb-8">
                        Konsultasikan kebutuhan jaminan proyek dengan tim underwriter ahli kami
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-teal-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Konsultasi Gratis
                        </button>
                        <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Download Proposal
                        </button>
                    </div>

                    <div className="mt-8 grid md:grid-cols-3 gap-4 text-teal-100 text-sm">
                        <div>
                            <strong>📞 Hotline Surety:</strong><br />
                            1500-BOND (2663)
                        </div>
                        <div>
                            <strong>📧 Email:</strong><br />
                            suretybon@jamkrindo.co.id
                        </div>
                        <div>
                            <strong>🏢 Corporate Center:</strong><br />
                            Jakarta & 33 Kantor Cabang
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;