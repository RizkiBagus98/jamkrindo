'use client'

import {usePathname} from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({children}: { children: React.ReactNode }) {
    const pathname = usePathname();
    const hideLayoutRoutes = ['/dashboard', '/login', '/register', '/dashboard/berita', '/dashboard/pesan', '/dashboard/galeri'];

    const shouldHideLayout = hideLayoutRoutes.includes(pathname);

    return (
        <>
            {!shouldHideLayout && <Navbar/>}
            {children}
            {!shouldHideLayout && <Footer/>}
        </>
    );
}
