// app/kontak/page.tsx
'use client'
import {FaWhatsapp, FaInstagram, FaFacebook, FaEnvelope} from 'react-icons/fa'

export default function KontakPage() {
    const kontakList = [
        {
            nama: 'WhatsApp',
            icon: <FaWhatsapp className="text-green-500" size={30}/>,
            link: 'https://wa.me/6281234567890',
            deskripsi: 'Hubungi kami via WhatsApp',
        },
        {
            nama: 'Instagram',
            icon: <FaInstagram className="text-pink-500" size={30}/>,
            link: 'https://instagram.com/akun_anda',
            deskripsi: 'Ikuti kami di Instagram',
        },
        {
            nama: 'Facebook',
            icon: <FaFacebook className="text-blue-600" size={30}/>,
            link: 'https://facebook.com/akun_anda',
            deskripsi: 'Temukan kami di Facebook',
        },
        {
            nama: 'Email',
            icon: <FaEnvelope className="text-gray-600" size={30}/>,
            link: 'mailto:kontak@domain.com',
            deskripsi: 'Kirim email ke kami',
        },
    ]

    return (
        <div className="min-h-screen mt-30 bg-white py-16 px-6 flex flex-col items-center">
            <h1
                className="text-4xl font-bold mb-10 text-center"
            >
                Hubungi Kami
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
                {kontakList.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all flex items-center gap-4"
                    >
                        <div>{item.icon}</div>
                        <div>
                            <h2 className="text-xl font-semibold">{item.nama}</h2>
                            <p className="text-gray-600 text-sm">{item.deskripsi}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
