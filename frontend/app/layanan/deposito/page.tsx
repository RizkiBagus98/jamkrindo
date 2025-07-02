'use client';

const LayananDepositoPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-32 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900">Layanan Deposito</h1>
        <p className="mt-2 text-gray-600 text-lg">
          Pilihan investasi yang aman dan menguntungkan bersama Jamkrindo
        </p>
      </div>

      {/* Hero Gambar Opsional */}
      <div className="rounded-xl overflow-hidden mb-10">
        <img
          src="/images/jamkrindo-2.jpeg" // ganti dengan gambar relevan
          alt="Ilustrasi Deposito"
          className="w-full h-64 object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Konten Penjelasan */}
      <div className="prose lg:prose-lg prose-slate max-w-none mb-16">
        <p>
          Deposito adalah produk investasi dengan risiko rendah yang ditawarkan oleh Jamkrindo kepada nasabah institusi maupun perorangan sebagai sarana penempatan dana yang aman dan menguntungkan.
        </p>
        <p>
          Dengan tingkat bunga yang kompetitif dan jangka waktu yang fleksibel, layanan deposito dari Jamkrindo memberikan alternatif investasi yang sesuai bagi mitra kami, termasuk lembaga keuangan, koperasi, dan pelaku usaha.
        </p>
      </div>

      {/* Fitur Unggulan */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Fitur Layanan Deposito</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Suku bunga kompetitif dan stabil",
            "Jangka waktu fleksibel (1 - 12 bulan)",
            "Penempatan mulai dari nominal tertentu (disesuaikan)",
            "Aman karena dijamin Jamkrindo",
            "Cocok untuk institusi & UMKM"
          ].map((fitur, i) => (
            <li key={i} className="flex gap-3 items-start bg-white shadow-sm rounded-xl p-4 border hover:shadow-md transition">
              <div className="text-blue-600 text-xl font-bold">{i + 1}.</div>
              <p className="text-gray-700">{fitur}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Syarat & Ketentuan */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Syarat & Ketentuan</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Melampirkan dokumen identitas atau legalitas usaha</li>
          <li>Mengisi formulir penempatan deposito</li>
          <li>Minimal nominal sesuai ketentuan yang berlaku</li>
          <li>Penarikan sebelum jatuh tempo mengikuti kebijakan penalti</li>
        </ul>
      </section>

      {/* Call To Action */}
      <div className="bg-blue-50 p-8 rounded-xl text-center">
        <h3 className="text-2xl font-semibold text-blue-800 mb-2">
          Tertarik dengan layanan deposito kami?
        </h3>
        <p className="text-gray-700 mb-4">Hubungi tim Jamkrindo Cabang Madiun untuk informasi penempatan deposito sesuai kebutuhan Anda.</p>
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

export default LayananDepositoPage;
