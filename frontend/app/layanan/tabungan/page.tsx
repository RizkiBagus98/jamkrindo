'use client';

const LayananTabunganPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-32 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900">Layanan Tabungan</h1>
        <p className="mt-2 text-gray-600 text-lg">
          Solusi simpanan yang aman dan terpercaya sebagai bagian dari penguatan keuangan usaha
        </p>
      </div>

      {/* Gambar Hero */}
      <div className="rounded-xl overflow-hidden mb-10">
        <img
          src="/images/jamkrindo-2.jpeg"
          alt="Ilustrasi Tabungan"
          className="w-full h-64 object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Penjelasan */}
      <div className="prose lg:prose-lg prose-slate max-w-none mb-16">
        <p>
          Layanan tabungan yang tersedia melalui kerja sama Jamkrindo dengan lembaga keuangan mitra atau koperasi binaan, memberikan kesempatan bagi pelaku usaha dan masyarakat untuk mengelola dana secara aman dan produktif.
        </p>
        <p>
          Tabungan ini dapat menjadi bagian dari strategi keuangan pelaku UMKM, khususnya dalam membangun cadangan modal, menabung untuk ekspansi usaha, atau memenuhi persyaratan administratif dalam pengajuan penjaminan kredit.
        </p>
      </div>

      {/* Keunggulan Layanan */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Keunggulan Tabungan Mitra Jamkrindo</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Proses mudah dan transparan",
            "Bunga kompetitif sesuai skema kerja sama",
            "Bebas biaya administrasi (khusus mitra tertentu)",
            "Cocok untuk koperasi atau UMKM",
            "Diawasi dan dijamin sesuai regulasi mitra"
          ].map((item, index) => (
            <li key={index} className="flex gap-3 items-start bg-white shadow-sm rounded-xl p-4 border hover:shadow-md transition">
              <div className="text-blue-600 text-xl font-bold">{index + 1}.</div>
              <p className="text-gray-700">{item}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Syarat */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Syarat Pembukaan Tabungan</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Memiliki usaha aktif dan legalitas yang sah</li>
          <li>Menjadi bagian dari koperasi/mitra binaan Jamkrindo (jika berlaku)</li>
          <li>Mengisi formulir pembukaan tabungan</li>
          <li>Setoran awal minimal sesuai ketentuan mitra</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="bg-blue-50 p-8 rounded-xl text-center">
        <h3 className="text-2xl font-semibold text-blue-800 mb-2">
          Ingin membuka tabungan produktif untuk usaha Anda?
        </h3>
        <p className="text-gray-700 mb-4">Hubungi kami untuk informasi lebih lanjut terkait program tabungan melalui mitra kerja sama Jamkrindo.</p>
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

export default LayananTabunganPage;