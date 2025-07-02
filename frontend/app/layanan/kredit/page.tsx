'use client';

const LayananKreditPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-32 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900">Layanan Penjaminan Kredit</h1>
        <p className="mt-2 text-gray-600 text-lg">
          Solusi akses pembiayaan yang lebih mudah dan terpercaya bagi UMKM melalui penjaminan kredit dari Jamkrindo
        </p>
      </div>

      {/* Gambar Hero Opsional */}
      <div className="rounded-xl overflow-hidden mb-10">
        <img
          src="/images/jamkrindo-2.jpeg" // ganti dengan ilustrasi atau foto yang relevan
          alt="Ilustrasi Kredit"
          className="w-full h-64 object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Penjelasan Umum */}
      <div className="prose lg:prose-lg prose-slate max-w-none mb-16">
        <p>
          Jamkrindo menyediakan layanan penjaminan kredit sebagai solusi bagi pelaku usaha, khususnya UMKM, agar lebih mudah mendapatkan akses pembiayaan dari lembaga keuangan. Dengan adanya penjaminan, risiko pihak pemberi kredit dapat diminimalkan sehingga memperkuat kepercayaan terhadap calon debitur.
        </p>
        <p>
          Penjaminan kredit mencakup kredit modal kerja, kredit investasi, hingga kredit program pemerintah, dengan berbagai skema dan jangka waktu yang disesuaikan dengan kebutuhan usaha.
        </p>
      </div>

      {/* Jenis Penjaminan */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Jenis Layanan Penjaminan</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Penjaminan Kredit Modal Kerja (KMK)",
            "Penjaminan Kredit Investasi",
            "Penjaminan Kredit Program/KUR",
            "Penjaminan Pembiayaan Syariah",
            "Penjaminan Kredit Multiguna"
          ].map((item, index) => (
            <li key={index} className="flex gap-3 items-start bg-white shadow-sm rounded-xl p-4 border hover:shadow-md transition">
              <div className="text-blue-600 text-xl font-bold">{index + 1}.</div>
              <p className="text-gray-700">{item}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Prosedur / Alur */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Alur Pengajuan Penjaminan Kredit</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>Calon debitur mengajukan kredit ke lembaga keuangan mitra (bank, BPR, koperasi, dll).</li>
          <li>Lembaga keuangan mengusulkan penjaminan kepada Jamkrindo.</li>
          <li>Jamkrindo melakukan analisis dan menerbitkan surat penjaminan.</li>
          <li>Kredit dicairkan oleh lembaga keuangan kepada debitur.</li>
        </ol>
      </section>

      {/* CTA */}
      <div className="bg-blue-50 p-8 rounded-xl text-center">
        <h3 className="text-2xl font-semibold text-blue-800 mb-2">
          Butuh dukungan penjaminan kredit?
        </h3>
        <p className="text-gray-700 mb-4">Jamkrindo siap membantu usaha Anda tumbuh lebih cepat dengan solusi penjaminan yang tepat.</p>
        <a
          href="/kontak"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
        >
          Hubungi Kami
        </a>
      </div>
    </div>
  );
};

export default LayananKreditPage;
