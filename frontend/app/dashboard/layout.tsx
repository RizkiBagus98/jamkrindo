"use client"

import React, { ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import {
    UsersIcon,
    ArrowLeftOnRectangleIcon,
    NewspaperIcon,
    ChatBubbleLeftRightIcon,
    PhotoIcon,
} from '@heroicons/react/24/outline';
import axios from 'axios';
import { useRouter, usePathname } from 'next/navigation';

// Definisikan tipe untuk objek User
interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}

// Tipe untuk props komponen Layout
interface LayoutProps {
    children: ReactNode;
}

// Data untuk link navigasi
const navLinks = [
    { name: 'Berita', href: '/dashboard/berita', icon: NewspaperIcon },
    { name: 'Galeri', href: '/dashboard/galeri', icon: PhotoIcon },
    { name: 'Karyawan', href: '/dashboard/karyawan', icon: NewspaperIcon },
    { name: 'Sambutan', href: '/dashboard/sambutan', icon: NewspaperIcon},
    { name: 'Sejarah', href: '/dashboard/sejarah', icon: NewspaperIcon},
    { name: 'Visi Misi', href: '/dashboard/visi-misi', icon: NewspaperIcon },
    { name: 'Manajemen User', href: '/dashboard/user', icon: NewspaperIcon}
];

const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
    const pathname = usePathname();
    const router = useRouter();

    // State untuk loading otentikasi dan data pengguna
    const [isAuthLoading, setIsAuthLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    // useEffect untuk memeriksa status login saat komponen pertama kali dimuat
    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/auth/me', {
                    withCredentials: true
                });
                
                const fetchedUser: User = response.data;

                if (fetchedUser && fetchedUser.role === 'ADMIN') {
                    setUser(fetchedUser);
                } else if (fetchedUser) {
                    console.error("Akses ditolak: Pengguna bukan admin.");
                    router.push('/'); // Arahkan ke halaman non-admin
                } else {
                    throw new Error("Data pengguna tidak ditemukan.");
                }
            } catch (error) {
                console.error("Not authenticated, redirecting to login.", error);
                router.push('/login');
            } finally {
                setIsAuthLoading(false);
            }
        };

        checkAuthStatus();
    }, [router]);

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:5001/api/auth/logout', {}, {
                withCredentials: true
            });
            setUser(null); // Kosongkan data user di state
            router.push('/login');
        } catch (error) {
            console.error('Logout gagal:', error);
        }
    };

    // 1. Tampilkan loading indicator selama proses pengecekan otentikasi
    if (isAuthLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-50">
                <p className="text-gray-500">Memverifikasi sesi...</p>
            </div>
        );
    }

    // 2. Jika otentikasi selesai TAPI user tidak ada (gagal & proses redirect), jangan render apa-apa
    if (!user) {
        return null;
    }

    // 3. Jika otentikasi berhasil dan user ada, tampilkan layout dashboard
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar untuk Desktop */}
            <aside className="fixed flex h-screen w-64 flex-shrink-0 flex-col border-r border-gray-200 bg-white shadow-sm">
                <div className="flex flex-1 flex-col overflow-y-auto">
                    <nav className="flex-1 space-y-1 px-4 py-6">
                        <div className="mb-4">
                            <p className="px-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                Menu Utama
                            </p>
                        </div>
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`group flex items-center rounded-lg px-3 py-3 text-sm font-medium transition-all duration-200 ${
                                    pathname.startsWith(item.href)
                                        ? 'border-r-2 border-blue-700 bg-blue-50 text-blue-700'
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

                    {/* User Info & Logout -- SEKARANG DINAMIS */}
                    <div className="border-t border-gray-200 p-4">
                        <div className="mb-3 flex items-center">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300">
                                <UsersIcon className="h-4 w-4 text-gray-600" />
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                                <p className="text-xs text-gray-500">{user.email}</p>
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
            <div className="ml-64 flex flex-1 flex-col">
                <header className="border-b border-gray-200 bg-white shadow-sm">
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

                <main className="flex-1 bg-gray-50 p-8">
                    <div className="mx-auto max-w-7xl">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;