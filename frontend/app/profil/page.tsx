'use client'
import Image from 'next/image';

const ProfilJamkrindo = () => {
  return (
    <div className="w-full h-full p-10 mt-20">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Profil PT Jamkrindo Cabang Madiun</h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Bagian Kiri - Deskripsi */}
        <div className="lg:w-2/3 flex flex-col justify-center gap-6">
          <p className="text-xl text-gray-700">
            PT Jamkrindo (Persero) merupakan perusahaan penjamin terbesar di Indonesia, yang memberikan layanan penjaminan kepada
            masyarakat untuk memudahkan akses terhadap pembiayaan. Sebagai perusahaan penjaminan kredit, Jamkrindo memiliki berbagai
            produk, baik produk penjaminan program maupun penjaminan nonprogram.
          </p>

          <p className="text-xl text-gray-700">
            Cabang Madiun adalah salah satu cabang yang memiliki peran penting dalam menjalankan misi dan visi PT Jamkrindo dalam
            memberikan solusi penjaminan kredit yang lebih inklusif dan mudah diakses oleh seluruh lapisan masyarakat, khususnya di
            wilayah Jawa Timur. Dengan tujuan untuk memberikan dampak positif dalam meningkatkan kesejahteraan masyarakat melalui
            akses permodalan.
          </p>

          <h2 className="text-2xl font-semibold text-blue-600">Visi</h2>
          <p className="text-xl text-gray-700">
            Menjadi perusahaan penjaminan terbaik dan terpercaya yang mendukung pertumbuhan ekonomi nasional dan daerah dengan
            meningkatkan akses permodalan.
          </p>

          <h2 className="text-2xl font-semibold text-blue-600">Misi</h2>
          <ul className="list-disc pl-6 text-xl text-gray-700">
            <li>Menyediakan layanan penjaminan yang mudah, cepat, dan aman.</li>
            <li>Mendukung pertumbuhan ekonomi dengan membantu pelaku usaha dalam mendapatkan akses permodalan.</li>
            <li>Menjadi mitra yang andal bagi para pelaku usaha di berbagai sektor.</li>
          </ul>
        </div>

        {/* Bagian Kanan - Gambar */}
        <div className="lg:w-1/3 flex justify-center">
          <Image 
            src="/images/logoJamkrindo-2.jpg" 
            alt="Logo Jamkrindo"
            width={400} 
            height={300} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Section Contact */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Hubungi Kami</h2>
        <p className="text-xl text-gray-700 mb-4">
          Untuk informasi lebih lanjut, Anda bisa menghubungi kami melalui:
        </p>
        <p className="text-xl text-gray-700">
          Telepon: (0351) 123456 <br />
          Email: madiun@jamkrindo.co.id
        </p>
      </div>
    </div>
  );
};

export default ProfilJamkrindo;
