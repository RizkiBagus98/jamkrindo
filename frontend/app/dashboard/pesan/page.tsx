interface Pesan {
    _id: string;
    nama: string;
    email: string;
    isi: string;
    createdAt: string;
}

// Fungsi untuk mengambil data pesan dari API
async function getPesan() {
    // Ganti URL berikut dengan URL endpoint API Anda yang sebenarnya
    const res = await fetch('http://localhost:5000/api/pesan', {
        cache: 'no-store', // Opsi ini memastikan data selalu baru setiap kali halaman dimuat
    });

    // Jika respons tidak ok (misalnya, error 500), tampilkan pesan error
    if (!res.ok) {
        throw new Error('Gagal mengambil data pesan');
    }

    // Kembalikan data dalam format JSON
    return res.json();
}

// Komponen Halaman Dashboard Pesan
export default async function DashboardPesan() {
    // Ambil data pesan menggunakan fungsi getPesan
    const daftarPesan: Pesan[] = await getPesan();

    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Dashboard Pesan</h1>
                    <p className="text-gray-600 mt-1">Menampilkan semua pesan yang diterima.</p>
                </header>

                {/* Cek jika ada pesan, jika tidak tampilkan pesan kosong */}
                {daftarPesan.length > 0 ? (
                    <div className="space-y-6">
                        {/* Loop melalui setiap pesan dan tampilkan dalam bentuk kartu */}
                        {daftarPesan.map((pesan) => (
                            <div key={pesan._id}
                                 className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900">{pesan.nama}</h2>
                                        <p className="text-sm text-blue-600">{pesan.email}</p>
                                    </div>
                                    <span className="text-xs text-gray-500">
                    {/* Format tanggal agar lebih mudah dibaca */}
                                        {new Date(pesan.createdAt).toLocaleDateString('id-ID', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                        })}
                  </span>
                                </div>
                                <p className="text-gray-700 whitespace-pre-wrap">{pesan.isi}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    // Tampilan jika tidak ada pesan
                    <div className="text-center py-12">
                        <p className="text-gray-500">Belum ada pesan yang masuk.</p>
                    </div>
                )}
            </div>
        </div>
    );
}