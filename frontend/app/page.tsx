'use client'

import {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import CallCenter from "@/components/ui/CallCenter";

interface BeritaItem {
    _id: string;
    title: string;
    description: string;
    image: string;
}

interface GaleriItem {
    _id: string;
    title: string;
    imageUrl: string;
}

export default function Home() {
    const [berita, setBerita] = useState<BeritaItem[]>([]);
    const [galeri, setGaleri] = useState<GaleriItem[]>([]);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faq = [
        {
            question: "Apa itu PT Jamkrindo?",
            answer:
                "PT Jaminan Kredit Indonesia atau Jamkrindo adalah perusahaan penjaminan kredit milik negara (BUMN) yang berperan dalam mendukung UMKM untuk mengakses pembiayaan dari lembaga keuangan dengan memberikan jaminan atas kredit mereka.",
        },
        {
            question: "Apa saja produk penjaminan yang ditawarkan?",
            answer:
                "Jamkrindo menyediakan berbagai produk penjaminan, baik penjaminan program pemerintah seperti Kredit Usaha Rakyat (KUR), maupun penjaminan non-program seperti kredit umum, kredit mikro, surety bond, kontra bank garansi, dan penjaminan syariah.",
        },
        {
            question: "Bagaimana cara kerja penjaminan kredit?",
            answer:
                "Jamkrindo bertindak sebagai penjamin bagi UMKM yang feasible namun tidak bankable. Jika UMKM kesulitan membayar kreditnya, Jamkrindo akan membayarkan klaim kepada lembaga keuangan, sehingga risiko kreditur dapat diminimalisir.",
        },
        {
            question: "Siapa saja yang bisa mendapatkan penjaminan?",
            answer:
                "Target utama adalah pelaku UMKM dan koperasi. Selain itu, juga melayani penjaminan untuk kredit perorangan dan korporasi sesuai produk yang tersedia.",
        },
        {
            question: "Di mana lokasi Jamkrindo Cabang Madiun?",
            answer:
                "Kantor PT Jamkrindo Cabang Madiun berlokasi di Jl. Thamrin No. 38, Madiun. Silakan kunjungi untuk informasi dan layanan lebih lanjut.",
        },
    ];

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    useEffect(() => {
        const fetchBerita = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/berita/public`);
                setBerita(res.data);
            } catch (err) {
                console.error("Error fetching berita:", err);
            }
        };

        const fetchGaleri = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/galeri`);
                setGaleri(res.data);
            } catch (err) {
                console.error("Error fetching galeri:", err);
            }
        };

        fetchBerita();
        fetchGaleri();
    }, []);

    return (
        <div className="w-full h-full overflow-x-hidden">

            {/* === Hero Section === */}
            <section className="relative h-screen w-full overflow-hidden">
                <Image
                    src="/images/jamkrindo-1.webp"
                    alt="Jamkrindo Hero"
                    fill
                    priority
                    className="object-cover"
                />
            </section>

            {/* === Stats Section === */}
            <section className="relative -mt-20 px-6 lg:px-12">
                <div className="mx-auto">
                    <div
                        className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl shadow-black-500/10 flex justify-around gap-6">
                        {[
                            {number: "1000+", label: "UMKM Terlayani"},
                            {number: "50M+", label: "Total Penjaminan"},
                            {number: "15+", label: "Tahun Pengalaman"}
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className=" p-6 space-y-3 text-center"
                            >
                                <div className="text-5xl font-bold text-blue-500">{stat.number}</div>
                                <div className="text-lg text-gray-700">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === About Section === */}
            <section className="py-24 px-6 lg:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
                            Tentang Kami
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Mengenal <span className="text-blue-600">Jamkrindo</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            PT Jamkrindo Cabang Madiun hadir untuk mendukung pelaku UMKM
                            dan koperasi dalam mengakses pembiayaan. Dengan pengalaman lebih dari
                            15 tahun, kami berkomitmen memberikan layanan penjaminan kredit
                            yang transparan, profesional, dan berdaya guna bagi perekonomian Indonesia.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                            <h3 className="text-xl font-bold text-blue-600 mb-4">Visi</h3>
                            <p className="text-gray-600">
                                Menjadi perusahaan penjaminan terdepan yang mendukung pertumbuhan ekonomi inklusif.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                            <h3 className="text-xl font-bold text-blue-600 mb-4">Misi</h3>
                            <p className="text-gray-600">
                                Memberikan akses pembiayaan yang lebih luas bagi UMKM dan koperasi dengan layanan penjaminan yang cepat dan amanah.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                            <h3 className="text-xl font-bold text-blue-600 mb-4">Nilai</h3>
                            <p className="text-gray-600">
                                Integritas, Profesionalisme, Inovasi, dan Kepedulian menjadi dasar setiap langkah kami.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* === News Section === */}
            <section className="py-24 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
                          Informasi Terkini
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Berita & <span className="text-blue-600">Update</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Ikuti perkembangan terbaru dari Jamkrindo Madiun
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {berita.map((item) => (
                            <Link
                                key={item._id}
                                href={`/berita/${item._id}`}
                                className="group block"
                            >
                                <div
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 h-full group-hover:scale-105">
                                    {/* Thumbnail */}
                                    <div className="relative w-full h-64 overflow-hidden">
                                        <Image
                                            src={`http://localhost:5000${item.image}`}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <span
                                            className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">
                                          Berita
                                        </span>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                            {item.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span
                                                className="text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                                                Baca Selengkapnya
                                            </span>
                                            <div
                                                className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                                <svg
                                                    className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                          d="M9 5l7 7-7 7"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* === Gallery Section === */}
            <section className="py-24 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
                          Galeri Kegiatan
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Momen <span className="text-blue-600">Berharga</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {galeri.map((item) => (
                            <div
                                key={item._id}
                                className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer"
                            >
                                <Image
                                    src={`http://localhost:5000${item.imageUrl}`}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"/>
                                <div
                                    className="absolute bottom-6 left-6 right-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                                    <div
                                        className="w-12 h-1 bg-blue-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform"/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === FAQ Section === */}
            <section className="py-24 px-6 lg:px-12">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 block">
                          Pertanyaan Umum
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">FAQ</h2>
                        <p className="text-xl text-gray-600">
                            Temukan jawaban atas pertanyaan yang sering diajukan
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faq.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                >
                                    <span className="text-gray-900 text-lg pr-4">
                                      {item.question}
                                    </span>
                                    <div
                                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 
                                        ${openFaq === i ? "bg-blue-600 rotate-180" : "bg-blue-100"}`}
                                    >
                                        <svg
                                            className={`w-4 h-4 transition-colors ${openFaq === i ? "text-white" : "text-blue-600"}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M19 9l-7 7-7-7"/>
                                        </svg>
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out 
                                    ${openFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                                >
                                    <div className="px-6 pb-6">
                                        <div
                                            className="w-full h-px bg-gradient-to-r from-blue-200 to-transparent mb-4"/>
                                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === Call Center Section === */}
            <CallCenter/>
        </div>
    );
}
