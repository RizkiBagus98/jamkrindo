'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link"; // Import Link dari Next.js
import CallCenter from "@/components/ui/CallCenter";
import Footer from "@/components/ui/Footer";
import Image from "next/image";

export default function Home() {
  const [berita, setBerita] = useState<any[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [galeri, setGaleri] = useState<any[]>([]);

  // Data untuk FAQ
  const faq = [
    {
      question: "Apa itu PT Jamkrindo?",
      answer: "PT Jaminan Kredit Indonesia atau Jamkrindo adalah perusahaan penjaminan kredit milik negara (BUMN) yang berperan dalam mendukung Usaha Mikro, Kecil, dan Menengah (UMKM) untuk mengakses pembiayaan dari lembaga keuangan dengan memberikan jaminan atas kredit mereka.",
    },
    {
      question: "Apa saja produk penjaminan yang ditawarkan?",
      answer: "Jamkrindo menyediakan berbagai produk penjaminan, baik penjaminan program pemerintah seperti Kredit Usaha Rakyat (KUR), maupun penjaminan non-program seperti kredit umum, kredit mikro, surety bond, kontra bank garansi, dan penjaminan syariah.",
    },
    {
      question: "Bagaimana cara kerja penjaminan kredit?",
      answer: "Jamkrindo bertindak sebagai penjamin bagi UMKM yang feasible namun tidak bankable (tidak memenuhi persyaratan agunan). Jika UMKM mengalami kesulitan dalam membayar kreditnya, Jamkrindo akan membayarkan klaim kepada lembaga keuangan, sehingga risiko kreditur dapat diminimalisir.",
    },
    {
      question: "Siapa saja yang bisa mendapatkan penjaminan dari Jamkrindo?",
      answer: "Target utama Jamkrindo adalah para pelaku UMKM dan koperasi. Selain itu, Jamkrindo juga melayani penjaminan untuk kredit perorangan dan korporasi sesuai dengan produk yang tersedia.",
    },
    {
      question: "Di mana saya bisa menemukan kantor Jamkrindo Cabang Madiun?",
      answer: "Kantor PT Jamkrindo Cabang Madiun berlokasi di Jl. Thamrin No. 38, Madiun. Anda dapat mengunjungi kantor cabang untuk informasi dan layanan lebih lanjut.",
    },
  ];

  // Fungsi untuk toggle FAQ
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

    // Fetch data galeri
  useEffect(() => {
    const fetchGaleri = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/galeri`);
        setGaleri(response.data);
      } catch (error) {
        console.error("Error fetching galeri:", error);
      }
    };

    fetchGaleri();
  }, []);

  // Fetch data berita
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/berita/public`); // Ganti dengan endpoint yang sesuai
        setBerita(response.data); // Simpan data berita ke state
      } catch (error) {
        console.error("Error fetching berita:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-full flex px-[5vw] mt-[10vw]">
        <div className="flex flex-col gap-10">
          <h1 className="w-[45vw] h-[16.7vw] mt-10 text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
            Jaminan Kredit Indonesia Cabang Madiun
          </h1>
          <p className="w-[30vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eaque doloribus? Esse quidem reprehenderit corrupti, pariatur voluptatum at ipsum cupiditate.
          </p>
        </div>
        <Image src="/images/logoJamkrindo-2.jpg" alt="logo" width={400} height={200} className="absolute top-40 right-30" />
      </div>

      {/* Tentang */}
      <div className="min-h-screen w-full mt-[5vw] flex flex-col relative">
        <div className="p-30 flex gap-[10vw] items-center">
          <Image src="/images/logoJamkrindo-2.jpg" alt="logo" width={400} height={400} />
          <div className="">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">Tentang Kami</h1>
            <p className="w-[40vw] mt-5 text-xl">
              PT Jamkrindo merupakan perusahaan penjamin terbesar di Indonesia. Sebagai perusahaan penjaminan kredit, Jamkrindo memiliki berbagai produk, baik produk penjaminan program maupun penjaminan nonprogram.
            </p>
          </div>
        </div>
      </div>

      {/* Berita */}
<div className="w-full bg-white text-[#0725ac] py-20">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-800">Berita & Informasi Terkini</h1>
      <p className="text-lg text-gray-600 mt-2">Ikuti perkembangan terbaru dari Jamkrindo Madiun.</p>
    </div>

    {/* Grid untuk daftar berita */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {berita.map((item) => (
        // Gunakan 'group' untuk efek hover pada elemen anak
        <Link key={item._id} href={`/berita/${item._id}`} className="group block">
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
            
            {/* Bagian Gambar */}
            <div className="relative w-full h-56">
              <Image
                // Gunakan Next.js Image untuk optimasi
                src={`http://localhost:5000${item.image}`}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Bagian Konten Teks */}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </h2>
              <p className="mt-3 text-gray-600 text-base line-clamp-3 flex-grow">
                {/* 'line-clamp-3' akan memotong deskripsi setelah 3 baris */}
                {item.description}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="font-semibold text-blue-600">
                  Baca Selengkapnya &rarr;
                </span>
              </div>
            </div>

          </div>
        </Link>
      ))}
    </div>
  </div>
</div>

      {/* Galeri */}
<div className="min-h-screen w-full text-[#0725ac] mt-20">
  <h1 className="text-center text-4xl font-bold mt-10">Galeri</h1>

  {/* Wrapper agar grid berada di tengah */}
  <div className="flex justify-center pt-10">
    <div className="grid grid-cols-2 gap-8">
      {galeri.map((item) => (
        <div
          key={item._id}
          className="relative w-[500px] h-[300px] bg-cover bg-center text-white"
          style={{ backgroundImage: `url('http://localhost:5000${item.imageUrl}')` }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute bottom-0 p-4 z-10">
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* FAQ */}
      <div className="w-full text-[#0725ac] mt-20 py-20 px-[5vw]">
        <h1 className="text-center text-4xl font-bold mb-12">Frequently Asked Questions</h1>
        <div className="max-w-4xl mx-auto">
          {faq.map((item, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left text-xl font-semibold text-gray-800"
              >
                <span>{item.question}</span>
                <span className="transform transition-transform duration-300">
                  {openFaq === index ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openFaq === index ? "max-h-96" : "max-h-0"
                  }`}
              >
                <p className="mt-4 text-gray-600 text-lg">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CallCenter />
    </div>
  );
}