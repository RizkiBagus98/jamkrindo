'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Items = [
  { title: 'Home', link: '/' },
  { title: 'Profil', link: '/profil' },
  { title: 'Berita', link: '/berita' },
  { title: 'Galeri', link: '/galeri' },
]

const Navbar = () => {
  const router = useRouter();
  const goToLogin = () => router.push('/login');

  return (
    <div className='w-full fixed top-0 bg-white shadow-md z-50'>
      <div className='px-10 py-3 flex justify-between items-center'>
        <Image width={200} height={100} alt='logo' src={'/images/logoJamkrindo.jpeg'}/>
        <nav className='flex gap-10'>
          {Items.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className='text-black hover:text-blue-600 transition-colors'
            >
              {item.title}
            </Link>
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
