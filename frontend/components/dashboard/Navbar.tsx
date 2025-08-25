import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full'>
            <div className='flex gap-10 px-10 py-5'>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/dashboard/berita">Berita</Link>
                <Link href="/dashboard/galeri">Galeri</Link>
                <button className="bg-red-500 px-5 py-2 rounded-xl text-white ml-10">Logout</button>
            </div>
        </div>
    )
}

export default Navbar