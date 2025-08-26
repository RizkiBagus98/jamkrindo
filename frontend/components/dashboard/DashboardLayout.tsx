'use client';

import React, {useState, ReactNode} from 'react';
import Link from 'next/link';
import {
    HomeIcon,
    UsersIcon,
    ArchiveBoxIcon,
    ArrowLeftOnRectangleIcon,
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import {usePathname} from 'next/navigation';

// Definisikan tipe untuk props
interface LayoutProps {
    children: ReactNode;
}

// Data untuk link navigasi
const navLinks = [
    {name: 'Manajemen Berita', href: '/dashboard/berita', icon: ArchiveBoxIcon},
    {name: 'Manajemen Pesan', href: '/dashboard/pesan', icon: ArchiveBoxIcon},
    {name: 'Manajemen Galeri', href: '/dashboard/galeri', icon: ArchiveBoxIcon},
];

const AdminLayout: React.FC<LayoutProps> = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false); // State untuk sidebar di mobile
    const pathname = usePathname();

    return (
        <div className="flex h-[80%] bg-gray-100">
            {/* Sidebar untuk Desktop */}
            <aside className="hidden md:flex md:flex-shrink-0">
                <div className="flex w-64 flex-col bg-gray-800 text-white">
                    <div className="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4">
                        <h1 className="text-xl font-bold">Admin Panel</h1>
                    </div>
                    <div className="flex flex-1 flex-col overflow-y-auto">
                        <nav className="flex-1 space-y-1 px-2 py-4">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center rounded-md px-2 py-2 text-sm font-medium ${
                                        pathname.startsWith(item.href)
                                            ? 'bg-gray-900 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                                >
                                    <item.icon className="mr-3 h-6 w-6 flex-shrink-0"/>
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                        {/* Logout Button */}
                        <div className="mt-auto p-2">
                            <Link
                                href="/logout" // Ganti dengan rute logout Anda
                                className="flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                                <ArrowLeftOnRectangleIcon className="mr-3 h-6 w-6 flex-shrink-0"/>
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Konten Utama */}
            <div className="flex flex-1 flex-col md:pl-64">
                {/* Header untuk Mobile */}
                <div className="sticky top-0 z-10 bg-white pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
                    <button
                        type="button"
                        className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>
                <main className="flex-1 p-4 md:p-8">
                    {children}
                </main>
            </div>

            {/* Sidebar untuk Mobile (Overlay) */}
            {sidebarOpen && (
                <div className="relative z-40 md:hidden" role="dialog" aria-modal="true">
                    {/* Latar belakang gelap */}
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-75"
                         onClick={() => setSidebarOpen(false)}></div>
                    <div className="fixed inset-0 z-40 flex">
                        <div className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
                            {/* Tombol Close */}
                            <div className="absolute top-0 right-0 -mr-12 pt-2">
                                <button
                                    type="button"
                                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    <span className="sr-only">Close sidebar</span>
                                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                                </button>
                            </div>
                            {/* Konten Sidebar Mobile */}
                            <div className="flex flex-shrink-0 items-center px-4">
                                <h1 className="text-xl font-bold text-white">Admin Panel</h1>
                            </div>
                            <div className="mt-5 h-0 flex-1 flex-col overflow-y-auto">
                                <nav className="flex-1 space-y-1 px-2">
                                    {navLinks.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`flex items-center rounded-md px-2 py-2 text-base font-medium ${
                                                pathname.startsWith(item.href)
                                                    ? 'bg-gray-900 text-white'
                                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                            }`}
                                        >
                                            <item.icon className="mr-4 h-6 w-6 flex-shrink-0"/>
                                            {item.name}
                                        </Link>
                                    ))}
                                </nav>
                                <div className="mt-auto p-2">
                                    <Link
                                        href="/logout"
                                        className="flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        <ArrowLeftOnRectangleIcon className="mr-4 h-6 w-6 flex-shrink-0"/>
                                        Logout
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-14 flex-shrink-0"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminLayout;