'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

// 1. Tambahkan data "Layanan" ke dalam array
const navItems = [
  { title: 'Home', link: '/' },
  {
    title: 'Profil',
    submenu: [
      { title: 'Sambutan', link: '/profil/sambutan' },
      { title: 'Sejarah', link: '/profil/sejarah' },
      { title: 'Visi Misi', link: '/profil/visi-misi' },
    ],
  },
  {
    title: 'Layanan', // Menu baru
    submenu: [
      { title: 'Kredit', link: '/layanan/kredit' },
      { title: 'Tabungan', link: '/layanan/tabungan' },
      { title: 'Deposito', link: '/layanan/deposito' },
      { title: 'Multipayment', link: '/layanan/multipayment' },
    ],
  },
  { title: 'Berita', link: '/berita' },
  { title: 'Pengumuman', link: '/pengumuman' },
];

const Navbar = () => {
  const router = useRouter();
  const goToLogin = () => router.push('/login');

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className='w-full fixed top-0 bg-white shadow-md z-50'>
      <div className='px-10 py-3 flex justify-between items-center'>
        <Image width={200} height={100} alt='logo' src={'/images/logoJamkrindo.jpeg'} />
        
        <nav className='flex gap-10' onMouseLeave={() => setOpenDropdown(null)}>
          {navItems.map((item) => (
            <div
              key={item.title}
              className='relative'
              onMouseEnter={() => item.submenu && setOpenDropdown(item.title)}
            >
              {item.submenu ? (
                <button className='flex items-center gap-2 text-black hover:text-blue-600 transition-colors cursor-pointer'>
                  {item.title}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
              ) : (
                <Link href={item.link!} className='text-black hover:text-blue-600 transition-colors'>
                  {item.title}
                </Link>
              )}

              {item.submenu && openDropdown === item.title && (
                <div 
                  className='absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2'
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.link}
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className='flex gap-4'>
          <button
            onClick={goToLogin}
            className='px-8 py-2 border z-30 cursor-pointer border-black rounded hover:bg-blue-50 transition'
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;