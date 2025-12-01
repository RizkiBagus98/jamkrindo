'use client'

import Image from 'next/image'
import Link from 'next/link'
import {usePathname, useRouter} from 'next/navigation'
import React, {useState, useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {Menu, X, ChevronDown, LogIn, LogOut} from 'lucide-react'
// --- Impor utilitas auth Anda ---
import { getAuthStatus, logoutUser } from '@/app/utils/api'

const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

const NavbarConfig = {
    HEADER_HEIGHT_PX: 72,
    navItems: [
        {title: 'Home', href: '/'},
        {
            title: 'Profil',
            submenu: [
                {title: 'Sambutan', href: '/profil/sambutan'},
                {title: 'Sejarah', href: '/profil/sejarah'},
                {title: 'Visi Misi', href: '/profil/visi-misi'},
                {title: 'Profil Karyawan', href: '/profil/karyawan'},
            ],
        },
        {
            title: 'Layanan',
            submenu: [
                {title: 'Surety Bond', href: '/layanan/surety-bond'},
            ],
        },
        {title: 'Berita', href: '/berita'},
    ]
};

// --- Type Definitions ---
type NavItem = typeof NavbarConfig.navItems[0];
// Definisikan tipe User sederhana
interface User {
    id: string;
    name: string;
    email: string;
    role: 'ADMIN' | 'USER';
}

// --- Sub-component for Mobile Accordion Menu Item ---
const MobileSubMenu = ({item, toggleMenu}: { item: NavItem, toggleMenu: () => void }) => {
    // (Kode MobileSubMenu tidak berubah, sama seperti sebelumnya)
    const pathname = usePathname();
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    useEffect(() => {
        if (item.submenu?.some(subItem => pathname === subItem.href)) {
            setIsSubMenuOpen(true);
        }
    }, [pathname, item.submenu]);

    return (
        <div className="border-b border-gray-200 w-full">
            <button
                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                className="flex items-center justify-between w-full px-6 py-4 text-lg font-medium text-gray-800"
            >
                <span>{item.title}</span>
                <motion.div
                    animate={{rotate: isSubMenuOpen ? 180 : 0}}
                    transition={{duration: 0.3}}
                >
                    <ChevronDown className="h-5 w-5"/>
                </motion.div>
            </button>
            <AnimatePresence>
                {isSubMenuOpen && (
                    <motion.div
                        initial={{height: 0, opacity: 0}}
                        animate={{height: 'auto', opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                        className="overflow-hidden bg-gray-50"
                    >
                        <div className="py-3 flex flex-col gap-2">
                            {item.submenu?.map((subItem) => {
                                const isActive = pathname === subItem.href;
                                return (
                                    <Link
                                        key={subItem.title}
                                        href={subItem.href}
                                        onClick={toggleMenu}
                                        className={cn(
                                            "block py-2 px-8 text-gray-600 hover:text-blue-600 transition-colors",
                                            isActive && "text-blue-600 font-semibold"
                                        )}
                                    >
                                        {subItem.title}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- Main Navbar Component ---
const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();

    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // --- State untuk Autentikasi ---
    const [user, setUser] = useState<User | null>(null);
    const [authLoading, setAuthLoading] = useState(true);

    // Cek status login saat komponen dimuat
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const data = await getAuthStatus();
                if (data && data.user) {
                    setUser(data.user);
                } else {
                    setUser(null); // User belum login
                }
            } catch (error) {
                // Error terjadi (network error, server error, dll)
                // Tapi tidak akan log 401 untuk /auth/status (sudah ditangani di interceptor)
                setUser(null);
            } finally {
                setAuthLoading(false);
            }
        };
        checkAuth();
    }, [pathname]); // Cek ulang saat navigasi (opsional, tapi bagus)

    useEffect(() => {
        if (isMenuOpen) setIsMenuOpen(false);
    }, [pathname]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    
    // --- Fungsi Logout ---
    const handleLogout = async () => {
        if (isMenuOpen) toggleMenu(); // Tutup menu mobile
        try {
            await logoutUser();
            setUser(null); // Update state lokal
            router.push('/login'); // Arahkan ke halaman login
        } catch (error) {
            console.error("Gagal logout:", error);
            // Anda bisa tambahkan notifikasi error di sini
        }
    };

    const dropdownVariants = {
        hidden: {opacity: 0, y: 10, scale: 0.98, transition: {duration: 0.2, ease: "easeInOut"}},
        visible: {opacity: 1, y: 0, scale: 1, transition: {duration: 0.2, ease: "easeInOut"}},
    };

    const mobileMenuVariants = {
        hidden: {opacity: 0, x: '100%'},
        visible: {opacity: 1, x: '0%'},
    };

    return (
        <header
            className='w-full fixed top-0 z-50 transition-all duration-300 bg-white'
            style={{height: `${NavbarConfig.HEADER_HEIGHT_PX}px`}}
        >
            <div className='container mx-auto px-4 sm:px-6 h-full flex justify-between items-center'>
                {/* Logo */}
                <Link href="/" className='flex-shrink-0'>
                    <Image
                        width={150}
                        height={50}
                        alt='Logo Perusahaan'
                        src={'/images/logoJamkrindo.jpeg'}
                        className='cursor-pointer object-contain'
                        priority
                    />
                </Link>

                {/* Wrapper untuk Navigasi Desktop & Tombol Auth */}
                <div className="hidden lg:flex items-center gap-x-6">
                    {/* Desktop Navigation */}
                    <nav className='flex items-center gap-x-2'>
                        {NavbarConfig.navItems.map((item) => {
                            const isParentActive = item.submenu?.some(sub => pathname.startsWith(sub.href));
                            return (
                                <div
                                    key={item.title}
                                    className='relative'
                                    onMouseEnter={() => item.submenu && setOpenDropdown(item.title)}
                                    onMouseLeave={() => item.submenu && setOpenDropdown(null)}
                                >
                                    {item.submenu ? (
                                        <button className={cn(
                                            'px-4 py-2 flex items-center gap-1.5 text-sm font-medium hover:text-blue-600 transition-colors rounded-lg',
                                            isParentActive ? 'text-blue-600' : 'text-gray-700'
                                        )}>
                                            {item.title}
                                            <motion.div animate={{rotate: openDropdown === item.title ? 180 : 0}}>
                                                <ChevronDown size={16}/>
                                            </motion.div>
                                        </button>
                                    ) : (
                                        <Link href={item.href!} className={cn(
                                            'px-4 py-2 block text-sm font-medium hover:text-blue-600 transition-colors rounded-lg',
                                            pathname === item.href ? 'text-blue-600' : 'text-gray-700'
                                        )}>
                                            {item.title}
                                        </Link>
                                    )}
                                    <AnimatePresence>
                                        {item.submenu && openDropdown === item.title && (
                                            <motion.div
                                                initial="hidden"
                                                animate="visible"
                                                exit="hidden"
                                                variants={dropdownVariants}
                                                className='absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100'
                                            >
                                                <div className='py-2'>
                                                    {item.submenu.map((subItem) => (
                                                        <Link
                                                            key={subItem.title}
                                                            href={subItem.href}
                                                            className='block w-full text-left px-5 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors duration-200'
                                                            onClick={() => setOpenDropdown(null)}
                                                        >
                                                            {subItem.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )
                        })}
                    </nav>

                    {/* --- Tombol Auth Desktop --- */}
                    <div className="flex items-center pl-4 border-l border-gray-200">
                        {authLoading ? (
                            <div className="h-9 w-24 bg-gray-200 rounded-lg animate-pulse"></div>
                        ) : user ? (
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-colors rounded-lg"
                            >
                                <LogOut size={16} />
                                Logout
                            </button>
                        ) : (
                            <Link
                                href="/login"
                                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg"
                            >
                                <LogIn size={16} />
                                Login
                            </Link>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu}
                            className="text-gray-800 p-2 rounded-md hover:bg-gray-100 transition-colors">
                        {isMenuOpen ? <X size={28}/> : <Menu size={28}/>}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Panel */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={mobileMenuVariants}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                        className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-xl z-40"
                        style={{top: `${NavbarConfig.HEADER_HEIGHT_PX}px`}}
                    >
                        <nav className="h-full flex flex-col items-center overflow-y-auto pb-24">
                            {NavbarConfig.navItems.map((item) =>
                                item.submenu ? (
                                    <MobileSubMenu key={item.title} item={item} toggleMenu={toggleMenu}/>
                                ) : (
                                    <div key={item.title} className="border-b border-gray-200 w-full text-center">
                                        <Link
                                            href={item.href!}
                                            onClick={toggleMenu}
                                            className={cn(
                                                "block py-4 text-lg font-medium hover:text-blue-600 transition-colors",
                                                pathname === item.href ? 'text-blue-600' : 'text-gray-800'
                                            )}
                                        >
                                            {item.title}
                                        </Link>
                                    </div>
                                )
                            )}

                            {/* --- Tombol Auth Mobile --- */}
                            <div className="border-b border-gray-200 w-full text-center">
                                {authLoading ? (
                                    <div className="block py-4 text-lg font-medium text-gray-400">
                                        Memuat...
                                    </div>
                                ) : user ? (
                                    <button
                                        onClick={handleLogout}
                                        className="block w-full py-4 text-lg font-medium text-red-600 hover:bg-red-50 transition-colors"
                                    >
                                        Logout
                                    </button>
                                ) : (
                                    <Link
                                        href="/login"
                                        onClick={toggleMenu}
                                        className="block py-4 text-lg font-medium text-blue-600 hover:bg-blue-50 transition-colors"
                                    >
                                        Login
                                    </Link>
                                )}
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;