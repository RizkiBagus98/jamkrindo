'use client';

const LayananMultiPaymentPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-32 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900">Layanan Multi Payment</h1>
        <p className="mt-2 text-gray-600 text-lg">
          Kemudahan transaksi berbagai pembayaran dalam satu layanan terintegrasi melalui mitra Jamkrindo
        </p>
      </div>

      {/* Gambar Hero */}
      <div className="rounded-xl overflow-hidden mb-10">
        <img
          src="/images/jamkrindo-2.jpeg" // ganti dengan ilustrasi transaksi digital
          alt="Multi Payment Illustration"
          className="w-full h-64 object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Penjelasan Layanan */}
      <div className="prose lg:prose-lg prose-slate max-w-none mb-16">
        <p>
          Layanan Multi Payment merupakan solusi dari Jamkrindo dalam memfasilitasi pelaku usaha, koperasi, maupun masyarakat umum untuk melakukan berbagai pembayaran rutin secara praktis dan efisien. Layanan ini tersedia melalui kerja sama Jamkrindo dengan mitra penyedia sistem pembayaran digital.
        </p>
        <p>
          Dengan sistem multi payment ini, pengguna cukup menggunakan satu platform untuk membayar berbagai jenis tagihan, sehingga menghemat waktu, biaya, dan mengurangi risiko keterlambatan pembayaran.
        </p>
      </div>

      {/* Jenis Pembayaran yang Didukung */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Jenis Pembayaran yang Didukung</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Pembayaran listrik (PLN)",
            "Pembayaran air (PDAM)",
            "Top-up pulsa dan paket data",
            "Pembayaran BPJS Kesehatan dan Ketenagakerjaan",
            "Cicilan koperasi dan UMKM",
            "Tagihan sekolah atau kampus mitra"
          ].map((item, index) => (
            <li key={index} className="flex gap-3 items-start bg-white shadow-sm rounded-xl p-4 border hover:shadow-md transition">
              <div className="text-blue-600 text-xl font-bold">{index + 1}.</div>
              <p className="text-gray-700">{item}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Keunggulan */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Keunggulan Layanan Multi Payment</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Akses pembayaran berbagai layanan dalam satu sistem</li>
          <li>Terintegrasi dengan mitra koperasi, BPR, atau aplikasi digital</li>
          <li>Transaksi cepat, aman, dan realtime</li>
          <li>Meningkatkan efisiensi operasional koperasi atau UMKM</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="bg-blue-50 p-8 rounded-xl text-center">
        <h3 className="text-2xl font-semibold text-blue-800 mb-2">
          Ingin terhubung dengan sistem pembayaran modern?
        </h3>
        <p className="text-gray-700 mb-4">Jamkrindo siap mendukung kebutuhan multi payment mitra usaha melalui platform yang terpercaya.</p>
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

export default LayananMultiPaymentPage;
