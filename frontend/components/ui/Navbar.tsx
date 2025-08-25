'use client'

import Image from 'next/image'
import Link from 'next/link'
import {usePathname, useRouter} from 'next/navigation'
import React, {useState, useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {Menu, X, ChevronDown} from 'lucide-react'

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
                {title: 'Profil Manager', href: '/profil/profil-manager'},
                {title: 'Struktur Organisasi', href: '/profil/struktur-organisasi'},
            ],
        },
        {
            title: 'Layanan',
            submenu: [
                {title: 'Penjaminan Kredit Umum', href: '/layanan/penjaminan-kredit-umum'},
                {title: 'Penjaminan Kredit Mikro', href: '/layanan/penjaminan-kredit-mikro'},
                {title: 'Penjaminan Kredit Usaha Rakyat', href: '/layanan/penjaminan-kredit-usaha-rakyat'},
                {title: 'Penjaminan KPR Bersubsidi', href: '/layanan/penjaminan-kpr-bersubsidi'},
                {title: 'Costum Bond', href: '/layanan/costum-bond'},
                {title: 'Surety Bond', href: '/layanan/surety-bond'},
                {title: 'Penjaminan Supply Chain Financing', href: '/layanan/penjaminan-supply-chain-financing'},
                {title: 'Penjaminan Sistem Resi Gudang', href: '/layanan/penjaminan-sistem-resi-gudang'},
                {title: 'Penjaminan Pembiayaan Otomotif', href: '/layanan/penjaminan-pembiayaan-otomotif'},
            ],
        },
        {title: 'Berita', href: '/berita'},
        {title: 'Pengumuman', href: '/pengumuman'},
    ]
};

// --- Type Definitions for Clarity ---
type NavItem = typeof NavbarConfig.navItems[0];

// --- Sub-component for Mobile Accordion Menu Item ---
const MobileSubMenu = ({item, toggleMenu}: { item: NavItem, toggleMenu: () => void }) => {
    const pathname = usePathname();
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    // Effect to auto-open the accordion if on a sub-page
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

    useEffect(() => {
        if (isMenuOpen) setIsMenuOpen(false);
    }, [pathname]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const goToLogin = () => router.push('/login');

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
                        src={'/images/logoJamkrindo.jpeg'} // Placeholder - update with your actual logo path
                        className='cursor-pointer object-contain'
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className='hidden lg:flex items-center gap-x-2'>
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

                {/* Desktop Login Button */}
                <div className='hidden lg:flex items-center'>
                    <button
                        onClick={goToLogin}
                        className='px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105'
                    >
                        Login
                    </button>
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
                            <div className="absolute bottom-0 p-6 w-full bg-white">
                                <button
                                    onClick={() => {
                                        goToLogin();
                                        toggleMenu();
                                    }}
                                    className='w-full px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300'
                                >
                                    Login
                                </button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;