import React from 'react';
import { Shield, CheckCircle, Phone, Mail, MapPin, Car, Clock, TrendingUp, Users, Truck, Zap, Settings } from 'lucide-react';

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
                            <p className="text-indigo-600">Penjaminan Pembiayaan Otomotif</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-indigo-600 text-white py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Penjaminan Pembiayaan Kendaraan Terpercaya
                    </h2>
                    <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
                        Wujudkan impian memiliki kendaraan dengan pembiayaan yang mudah, aman, dan terjangkau
                    </p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                        Ajukan Pembiayaan
                    </button>
                </div>
            </section>

            {/* Jenis Kendaraan */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Jenis Kendaraan yang Dijamin
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="bg-white rounded-lg p-6 shadow-md border text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Car className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Mobil Penumpang</h3>
                            <p className="text-gray-600 text-sm mb-3">Sedan, hatchback, SUV, MPV</p>
                            <div className="text-indigo-600 font-semibold text-sm">
                                s/d Rp 2M
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md border text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Truck className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Kendaraan Komersial</h3>
                            <p className="text-gray-600 text-sm mb-3">Pick-up, truk, bus mini</p>
                            <div className="text-indigo-600 font-semibold text-sm">
                                s/d Rp 3M
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md border text-center">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Motor & Skuter</h3>
                            <p className="text-gray-600 text-sm mb-3">Motor bebek, sport, matic</p>
                            <div className="text-indigo-600 font-semibold text-sm">
                                s/d Rp 100 Jt
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md border text-center">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Settings className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Alat Berat</h3>
                            <p className="text-gray-600 text-sm mb-3">Excavator, bulldozer, crane</p>
                            <div className="text-indigo-600 font-semibold text-sm">
                                s/d Rp 5M
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pilihan Pembiayaan */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Pilihan Skema Pembiayaan
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Car className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Konvensional</h3>
                            <p className="text-gray-600 mb-4">
                                Pembiayaan kredit kendaraan dengan sistem bunga tetap atau mengambang
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Bunga kompetitif mulai 7.5%
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Tenor fleksibel 1-6 tahun
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    DP mulai 20%
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <TrendingUp className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Syariah</h3>
                            <p className="text-gray-600 mb-4">
                                Pembiayaan sesuai prinsip syariah dengan akad murabahah atau ijarah
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Margin bagi hasil yang adil
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Sesuai fatwa DSN-MUI
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Tanpa denda keterlambatan
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md border">
                            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Clock className="h-6 w-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Multiguna</h3>
                            <p className="text-gray-600 mb-4">
                                Pembiayaan dengan agunan kendaraan untuk berbagai kebutuhan
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    LTV hingga 85%
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Pencairan dana cepat
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Tetap dapat digunakan
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Keunggulan */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Keunggulan Penjaminan Otomotif
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="h-8 w-8 text-indigo-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Proses Express</h3>
                            <p className="text-gray-600 text-sm">Persetujuan dalam 24-48 jam dengan dokumen lengkap</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Coverage Optimal</h3>
                            <p className="text-gray-600 text-sm">Penjaminan hingga 85% nilai pembiayaan</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Bunga Kompetitif</h3>
                            <p className="text-gray-600 text-sm">Bunga lebih rendah dengan penjaminan</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-yellow-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Layanan Lengkap</h3>
                            <p className="text-gray-600 text-sm">Bantuan dari pemilihan hingga asuransi</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simulasi & Kondisi Khusus */}
            <section className="py-16 bg-indigo-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Kondisi Kendaraan & Simulasi
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Kondisi Kendaraan yang Diterima</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="border rounded-lg p-4">
                                    <h4 className="font-bold text-green-600 mb-2">Kendaraan Baru</h4>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>• Semua merek & tipe</li>
                                        <li>• DP mulai 15%</li>
                                        <li>• Tenor hingga 6 tahun</li>
                                        <li>• Bunga mulai 7.5%</li>
                                    </ul>
                                </div>
                                <div className="border rounded-lg p-4">
                                    <h4 className="font-bold text-blue-600 mb-2">Kendaraan Bekas</h4>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>• Maksimal 5 tahun</li>
                                        <li>• DP mulai 25%</li>
                                        <li>• Tenor hingga 4 tahun</li>
                                        <li>• Kondisi prima</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Simulasi Cicilan Mobil</h3>
                            <div className="space-y-4">
                                <div className="border rounded-lg p-4 bg-gray-50">
                                    <div className="font-bold text-indigo-600 mb-2">Honda Brio Rp 200 Juta</div>
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        <div>DP 20%: Rp 40 jt</div>
                                        <div>Plafon: Rp 160 jt</div>
                                        <div>3 tahun: Rp 4.9 jt/bln</div>
                                        <div>5 tahun: Rp 3.2 jt/bln</div>
                                    </div>
                                </div>
                                <div className="border rounded-lg p-4 bg-gray-50">
                                    <div className="font-bold text-indigo-600 mb-2">Toyota Avanza Rp 250 Juta</div>
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        <div>DP 20%: Rp 50 jt</div>
                                        <div>Plafon: Rp 200 jt</div>
                                        <div>3 tahun: Rp 6.1 jt/bln</div>
                                        <div>5 tahun: Rp 4.0 jt/bln</div>
                                    </div>
                                </div>
                                <div className="border rounded-lg p-4 bg-gray-50">
                                    <div className="font-bold text-indigo-600 mb-2">Motor Yamaha Rp 25 Juta</div>
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        <div>DP 20%: Rp 5 jt</div>
                                        <div>Plafon: Rp 20 jt</div>
                                        <div>2 tahun: Rp 940 rb/bln</div>
                                        <div>3 tahun: Rp 670 rb/bln</div>
                                    </div>
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
                            <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-600 mb-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Persyaratan Debitur</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        WNI berusia 21-60 tahun saat lunas
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Memiliki penghasilan tetap minimal 2x cicilan
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Riwayat kredit baik (BI Checking)
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                                        Memiliki SIM sesuai jenis kendaraan
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Dokumen yang Diperlukan</h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                        KTP & KK yang masih berlaku
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                        SIM sesuai jenis kendaraan
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                        Slip gaji/bukti penghasilan 3 bulan
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                        Rekening koran 3 bulan terakhir
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                        NPWP (untuk pembiayaan > Rp 50 juta)
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                        Surat nikah (jika sudah menikah)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-6 text-white">
                            <h3 className="text-xl font-bold mb-6">Ketentuan Penjaminan Otomotif</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span>Plafon Mobil</span>
                                    <span className="font-bold text-yellow-400">s/d Rp 3 Miliar</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Plafon Motor</span>
                                    <span className="font-bold text-yellow-400">s/d Rp 100 Juta</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Jangka Waktu</span>
                                    <span className="font-bold text-yellow-400">1 - 6 Tahun</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Bunga Efektif</span>
                                    <span className="font-bold text-yellow-400">7.5% - 14%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Coverage Ratio</span>
                                    <span className="font-bold text-yellow-400">70% - 85%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Uang Muka</span>
                                    <span className="font-bold text-yellow-400">15% - 30%</span>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-600">
                                <h4 className="text-lg font-bold mb-4 text-yellow-400">Biaya Tambahan</h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span>Administrasi:</span>
                                        <span>Rp 500rb - 2 juta</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Asuransi TLO:</span>
                                        <span>2.5% - 4% per tahun</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Asuransi Jiwa:</span>
                                        <span>0.5% - 1% dari plafon</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Provisi:</span>
                                        <span>1% - 2% dari plafon</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-600">
                                <div className="text-center">
                                    <div className="text-yellow-400 font-bold">Promo Special</div>
                                    <div className="text-sm mt-1">Bunga 0% untuk 3 bulan pertama*</div>
                                    <div className="text-xs text-gray-400 mt-1">*Syarat & ketentuan berlaku</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-indigo-600">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Wujudkan Kendaraan Impian Anda
                    </h2>
                    <p className="text-indigo-100 text-lg mb-8">
                        Dapatkan pembiayaan kendaraan dengan syarat mudah dan bunga kompetitif
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Simulasi Kredit
                        </button>
                        <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Konsultasi Gratis
                        </button>
                    </div>

                    <div className="mt-8 grid md:grid-cols-3 gap-4 text-indigo-100 text-sm">
                        <div>
                            <strong>📞 Hotline Otomotif:</strong><br />
                            1500-AUTO (2886)
                        </div>
                        <div>
                            <strong>📧 Email:</strong><br />
                            otomotif@jamkrindo.co.id
                        </div>
                        <div>
                            <strong>🏢 Visit Center:</strong><br />
                            200+ Kantor se-Indonesia
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;