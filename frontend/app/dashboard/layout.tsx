"use client"
import React, {ReactNode} from 'react';
import Link from 'next/link';
import {
    UsersIcon,
    ArchiveBoxIcon,
    ArrowLeftOnRectangleIcon,
    NewspaperIcon,
    ChatBubbleLeftRightIcon,
    PhotoIcon,
    Cog6ToothIcon,
} from '@heroicons/react/24/outline';

// Tipe untuk props
interface LayoutProps {
    children: ReactNode;
}

// Data untuk link navigasi
const navLinks = [
    {name: 'Manajemen Berita', href: '/dashboard/berita', icon: NewspaperIcon},
    {name: 'Manajemen Pesan', href: '/dashboard/pesan', icon: ChatBubbleLeftRightIcon},
    {name: 'Manajemen Galeri', href: '/dashboard/galeri', icon: PhotoIcon},
];

const AdminLayout: React.FC<LayoutProps> = ({children}) => {
    // Dummy pathname untuk styling link aktif
    const pathname = '/dashboard/berita';

    const handleLogout = () => {
        // Implementasi logout di sini
        console.log('Logout clicked');
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar untuk Desktop */}
            <aside className="flex w-64 fixed h-screen flex-shrink-0 flex-col bg-white border-r border-gray-200 shadow-sm">

                {/* Navigation */}
                <div className="flex flex-1 flex-col overflow-y-auto">
                    <nav className="flex-1 space-y-1 px-4 py-6">
                        <div className="mb-4">
                            <p className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                Menu Utama
                            </p>
                        </div>
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`group flex items-center rounded-lg px-3 py-3 text-sm font-medium transition-all duration-200 ${
                                    pathname.startsWith(item.href)
                                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                            >
                                <item.icon
                                    className={`mr-3 h-5 w-5 flex-shrink-0 transition-colors ${
                                        pathname.startsWith(item.href)
                                            ? 'text-blue-700'
                                            : 'text-gray-400 group-hover:text-gray-600'
                                    }`}
                                />
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* User Info & Logout */}
                    <div className="border-t border-gray-200 p-4">
                        <div className="flex items-center mb-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300">
                                <UsersIcon className="h-4 w-4 text-gray-600" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">Admin User</p>
                                <p className="text-xs text-gray-500">admin@example.com</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="group flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-red-50 hover:text-red-700"
                        >
                            <ArrowLeftOnRectangleIcon className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-red-600" />
                            Keluar
                        </button>
                    </div>
                </div>
            </aside>

            {/* Konten Utama */}
            <div className="flex flex-1 flex-col ml-[250px]">
                {/* Top Bar */}
                <header className="bg-white border-b border-gray-200 shadow-sm">
                    <div className="flex h-16 items-center justify-between px-8">
                        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-500">
                                {new Date().toLocaleDateString('id-ID', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 p-8 bg-gray-50">
                    <div className="mx-auto max-w-7xl">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;