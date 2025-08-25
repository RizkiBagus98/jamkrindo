import React from 'react';
import {
    Shield,
    CheckCircle,
    Building2,
    Factory,
    Truck,
    CreditCard,
    Receipt,
    ArrowRight,
    Users,
    Clock,
    TrendingUp,
    Banknote,
    Handshake,
    FileCheck2
} from 'lucide-react';

const Page = () => {
    return (
        <div className="min-h-screen pt-[7vw] bg-white">
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <div className="flex items-center space-x-4">
                        <div className="bg-indigo-600 p-3 rounded-lg">
                            <Shield className="h-8 w-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">PT Jamkrindo</h1>
                            <p className="text-indigo-600">Penjaminan Supply Chain Financing</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-indigo-600 text-white py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Penjaminan Supply Chain Financing (SCF)
                    </h2>
                    <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
                        Memberikan kepastian pembayaran dalam ekosistem rantai pasok—agar supplier tenang, buyer leluasa, dan lender merasa aman.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Ajukan Penjaminan
                        </button>
                        <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Konsultasi Gratis
                        </button>
                    </div>
                    <div className="mt-8 grid md:grid-cols-3 gap-4 text-indigo-100 text-sm">
                        <div>
                            <strong>🏢 Sektor:</strong><br /> FMCG, Manufaktur, Distribusi
                        </div>
                        <div>
                            <strong>💳 Skema:</strong><br /> PO, Invoice, Distributor Financing
                        </div>
                        <div>
                            <strong>🛡️ Coverage:</strong><br /> hingga 90% risiko kredit*
                        </div>
                    </div>
                    <div className="text-xs text-indigo-200 mt-2">*Bergantung profil risiko & hasil penilaian</div>
                </div>
            </section>

            {/* Mengapa Perlu Penjaminan */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Mengapa Penjaminan SCF Penting?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Shield className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Mitigasi Risiko</h3>
                            <p className="text-gray-600">
                                Mengurangi risiko gagal bayar dari buyer sehingga transaksi lebih kredibel.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <TrendingUp className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Akses Pembiayaan</h3>
                            <p className="text-gray-600">
                                Supplier memperoleh limit lebih besar dan tenor lebih fleksibel.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Clock className="h-6 w-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Proses Lebih Cepat</h3>
                            <p className="text-gray-600">
                                SLA persetujuan lebih singkat—cash flow rantai pasok makin lincah.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Produk/Skema SCF */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Skema Penjaminan SCF yang Didukung
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <FileCheck2 className="h-6 w-6 text-yellow-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">PO Financing</h3>
                            <p className="text-gray-600 mb-4">
                                Pembiayaan berbasis Purchase Order dari buyer yang kredibel—mempercepat produksi dan pengadaan.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Coverage hingga 80–90% nilai pembiayaan
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Tenor sesuai siklus PO (30–120 hari)
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Receipt className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Invoice Financing</h3>
                            <p className="text-gray-600 mb-4">
                                Pendanaan atas tagihan (invoice) yang belum jatuh tempo—cash flow supplier tetap sehat.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Advance hingga 80–90% nilai invoice
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Rekonsiliasi terhubung ke buyer onboarding
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <CreditCard className="h-6 w-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Distributor Financing</h3>
                            <p className="text-gray-600 mb-4">
                                Limit modal kerja bagi distributor/reseller yang memasok ke principal.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Limit bergulir sesuai performa penjualan
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Skema bayar saat jatuh tempo invoice
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alur Transaksi */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Alur Penjaminan Transaksi
                    </h2>
                    <div className="bg-white rounded-xl p-6 shadow-md border">
                        <div className="grid md:grid-cols-4 gap-6 items-start">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-indigo-50 flex items-center justify-center">
                                    <Factory className="h-8 w-8 text-indigo-600" />
                                </div>
                                <h4 className="font-semibold text-gray-900">Supplier</h4>
                                <p className="text-sm text-gray-600">Kirim barang/jasa sesuai PO</p>
                            </div>
                            <div className="hidden md:flex items-center justify-center">
                                <ArrowRight className="h-6 w-6 text-gray-400" />
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-indigo-50 flex items-center justify-center">
                                    <Building2 className="h-8 w-8 text-indigo-600" />
                                </div>
                                <h4 className="font-semibold text-gray-900">Buyer</h4>
                                <p className="text-sm text-gray-600">Terima barang, konfirmasi & jadwal bayar</p>
                            </div>
                            <div className="hidden md:flex items-center justify-center">
                                <ArrowRight className="h-6 w-6 text-gray-400" />
                            </div>
                            <div className="text-center md:col-span-2 md:col-start-2">
                                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-indigo-50 flex items-center justify-center">
                                    <Banknote className="h-8 w-8 text-indigo-600" />
                                </div>
                                <h4 className="font-semibold text-gray-900">Bank/Fintech</h4>
                                <p className="text-sm text-gray-600">Danai invoice/PO dengan penjaminan</p>
                            </div>
                        </div>
                        <div className="mt-6 rounded-lg bg-indigo-50 p-4 border border-indigo-100">
                            <div className="flex items-start">
                                <Shield className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                                <p className="text-sm text-indigo-900">
                                    <strong>Peran Penjamin:</strong> menanggung risiko pembayaran (sesuai porsi coverage) bila terjadi gagal bayar oleh buyer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Keunggulan */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Keunggulan Penjaminan SCF
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Handshake className="h-8 w-8 text-indigo-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Trust Meningkat</h3>
                            <p className="text-gray-600 text-sm">Relasi buyer–supplier makin solid.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Pertumbuhan Penjualan</h3>
                            <p className="text-gray-600 text-sm">Akses modal kerja yang scalable.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Truck className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Rantai Pasok Lancar</h3>
                            <p className="text-gray-600 text-sm">Pengiriman dan produksi tanpa jeda.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-yellow-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Dukungan End-to-End</h3>
                            <p className="text-gray-600 text-sm">Onboarding, legal, hingga monitoring.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kriteria & Dokumen */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Kriteria & Batasan Umum
                            </h2>
                            <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-600 mb-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Kelayakan</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Buyer & supplier telah onboarding dan lulus penilaian kredit
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Transaksi memiliki dokumen sah (PO/kontrak/GRN/faktur)
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Tenor 15–180 hari (mengikuti siklus bisnis)
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Parameter & Biaya</h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                        Coverage: 70% – 90% dari outstanding
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                        IJP/fee penjaminan: 0.8% – 2.5% p.a. (pro-rata tenor)
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                        Administrasi & provisi mengikuti kebijakan
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-900 rounded-lg p-6 text-white">
                            <h3 className="text-xl font-bold mb-6">Dokumen yang Diperlukan</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span><strong>Legal Perusahaan</strong></span>
                                    <span className="text-yellow-400">AKTA, NIB, NPWP</span>
                                </div>
                                <div className="flex justify-between">
                                    <span><strong>Keuangan</strong></span>
                                    <span className="text-yellow-400">Laporan 1–2 tahun</span>
                                </div>
                                <div className="flex justify-between">
                                    <span><strong>Dokumen Transaksi</strong></span>
                                    <span className="text-yellow-400">PO/Kontrak/Invoice</span>
                                </div>
                                <div className="flex justify-between">
                                    <span><strong>Operasional</strong></span>
                                    <span className="text-yellow-400">GRN/DO/Bukti pengiriman</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-700">
                                <h4 className="text-lg font-bold mb-4 text-yellow-400">Catatan</h4>
                                <p className="text-sm text-gray-200">
                                    Parameter dapat menyesuaikan profil risiko, sektor industri, dan hasil due diligence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contoh Simulasi Singkat */}
            <section className="py-16 bg-indigo-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Simulasi Ringkas
                    </h2>
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <div className="font-bold text-indigo-600 mb-2">Invoice Rp 2 M</div>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>Coverage 85%</div>
                                <div>Tenor 90 hari</div>
                                <div>IJP ~1.2% p.a.</div>
                                <div>Advance 90%</div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <div className="font-bold text-indigo-600 mb-2">PO Rp 5 M</div>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>Coverage 80%</div>
                                <div>Tenor 120 hari</div>
                                <div>IJP ~1.8% p.a.</div>
                                <div>Progress claim</div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <div className="font-bold text-indigo-600 mb-2">Distributor Limit Rp 1 M</div>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>Rolling limit</div>
                                <div>Tenor 60 hari</div>
                                <div>IJP ~1.0% p.a.</div>
                                <div>Auto-renew</div>
                            </div>
                        </div>
                    </div>
                    <div className="text-xs text-gray-600 mt-3 text-center">
                        Angka di atas ilustratif—bukan penawaran. Final mengikuti evaluasi kredit & kebijakan internal.
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-indigo-600">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Percepat Arus Kas Rantai Pasok Anda
                    </h2>
                    <p className="text-indigo-100 text-lg mb-8">
                        Dapatkan kepastian pembayaran, kurangi risiko, dan skala penjualan tanpa drama.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Ajukan Penjaminan
                        </button>
                        <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Hubungi Tim SCF
                        </button>
                    </div>

                    <div className="mt-8 grid md:grid-cols-3 gap-4 text-indigo-100 text-sm">
                        <div>
                            <strong>📞 Hotline SCF:</strong><br />
                            1500-SCF (723)
                        </div>
                        <div>
                            <strong>📧 Email:</strong><br />
                            scf@jamkrindo.co.id
                        </div>
                        <div>
                            <strong>🤝 Kemitraan:</strong><br />
                            Bank & Fintech Terkurasi
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
