'use client';

const SambutanKetua = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-32 px-6">
      {/* Foto & Nama */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
        <img
          src="/images/image-1.png" // ganti dengan foto asli
          alt="Kepala Cabang Jamkrindo Madiun"
          className="w-40 h-40 rounded-full object-cover shadow-md border-4 border-blue-200"
        />
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Kata Sambutan</h1>
          <p className="text-lg text-gray-700 mt-2">Kepala Cabang Jamkrindo Madiun</p>
        </div>
      </div>

      {/* Isi Sambutan */}
      <div className="prose lg:prose-lg prose-slate max-w-none">
        <p>
          Assalamu’alaikum warahmatullahi wabarakatuh,
        </p>

        <p>
          Puji syukur ke hadirat Allah SWT karena atas rahmat dan karunia-Nya, PT Jamkrindo Cabang Madiun dapat terus berkontribusi dalam mendukung pertumbuhan ekonomi khususnya di wilayah Madiun dan sekitarnya.
        </p>

        <p>
          Sebagai bagian dari Badan Usaha Milik Negara (BUMN), kami berkomitmen untuk menjadi mitra strategis bagi pelaku UMKM dalam memperoleh akses pembiayaan yang lebih mudah melalui layanan penjaminan kredit. Kami percaya bahwa penguatan sektor UMKM adalah pondasi penting bagi kemajuan ekonomi bangsa.
        </p>

        <p>
          Website ini hadir sebagai media informasi, komunikasi, dan transparansi layanan kami kepada masyarakat luas. Kami berharap kehadiran website ini dapat memberikan manfaat, kemudahan akses, dan mempererat hubungan dengan para mitra, nasabah, dan stakeholder lainnya.
        </p>

        <p>
          Terima kasih atas kepercayaan dan dukungan yang telah diberikan. Kami senantiasa terbuka terhadap masukan demi peningkatan layanan yang lebih baik.
        </p>

        <p>
          Wassalamu’alaikum warahmatullahi wabarakatuh.
        </p>

        <p className="mt-10">
          <strong>Nama Kepala Cabang</strong><br />
          Kepala Cabang Jamkrindo Madiun
        </p>
      </div>
    </div>
  );
};

export default SambutanKetua;
