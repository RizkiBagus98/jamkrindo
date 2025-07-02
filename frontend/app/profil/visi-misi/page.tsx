'use client';

const VisiMisiPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-32 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900">Visi & Misi</h1>
        <p className="mt-2 text-gray-600 text-lg">Landasan dan arah strategis Jamkrindo dalam mendukung UMKM Indonesia</p>
      </div>

      {/* Visi */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Visi</h2>
        <div className="bg-blue-50 p-6 rounded-xl shadow-sm border-l-4 border-blue-600">
          <p className="text-gray-700 text-lg italic">
            “Menjadi perusahaan penjaminan terdepan yang mendukung pertumbuhan ekonomi nasional melalui pemberdayaan UMKM.”
          </p>
        </div>
      </section>

      {/* Misi */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Misi</h2>
        <ul className="space-y-6">
          {[
            "Menyediakan layanan penjaminan yang profesional, terpercaya, dan berdaya saing tinggi.",
            "Mendukung penguatan kapasitas UMKM agar mampu tumbuh dan berkelanjutan.",
            "Menjalin kemitraan strategis dengan lembaga keuangan, pemerintah, dan swasta.",
            "Meningkatkan nilai perusahaan bagi pemegang saham, mitra, dan masyarakat.",
            "Mengembangkan sumber daya manusia dan teknologi untuk peningkatan layanan."
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition">
              <div className="text-blue-600 font-bold text-xl">{index + 1}.</div>
              <p className="text-gray-700 text-md">{item}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default VisiMisiPage;
