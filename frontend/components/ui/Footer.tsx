export default function Footer() {
    return (
        <footer className="bg-[#0725ac] text-white py-12 px-6 md:px-16 text-sm mt-30">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Tentang Kami */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Tentang Kami</h3>
                    <ul className="space-y-2">
                        <li>Profil Perusahaan</li>
                        <li>Produk</li>
                        <li>Media</li>
                        <li>Pengumuman</li>
                        <li>Karir</li>
                    </ul>
                </div>

                {/* Logo dan Info */}
                <div className="space-y-4">
                    <img src="/images/logoJamkrindo.jpeg" alt="Jamkrindo Logo" className="w-36"/>
                    <p>
                        PT Jamkrindo merupakan perusahaan penjamin terbesar di Indonesia
                    </p>
                    <div className="flex space-x-4 text-xl mt-4">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>

                {/* Hubungi Kami */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                            <span>
                  Gedung Jamkrindo. Jl. Angkasa B-9 Kavling 6 Kota Baru Bandar -
                  Kemayoran, Jakarta Pusat, 10610
                </span>
                        </li>
                        <li className="flex items-center">
                <span className="text-red-500 mr-2">
                  <i className="fas fa-phone-alt"></i>
                </span>
                            <span>(021) 6540335</span>
                        </li>
                        <li className="flex items-center">
                <span className="text-red-500 mr-2">
                  <i className="fas fa-envelope"></i>
                </span>
                            <span>contact@jamkrindo.co.id</span>
                        </li>
                        <li className="flex items-center">
                <span className="text-red-500 mr-2">
                  <i className="fas fa-headset"></i>
                </span>
                            <span>1500701</span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
  