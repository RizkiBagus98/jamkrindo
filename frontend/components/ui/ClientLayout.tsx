'use client'

import {usePathname} from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Providers } from "@/app/providers";

export default function ClientLayout({children}: { children: React.ReactNode }) {
    const pathname = usePathname();
    const hideLayoutRoutes = ['/dashboard', '/login', '/register', '/dashboard/berita', '/dashboard/visi-misi', '/dashboard/sejarah', '/dashboard/sambutan', '/chat', '/dashboard/pesan', '/dashboard/galeri', '/dashboard/karyawan', '/dashboard/user'];

    const shouldHideLayout = hideLayoutRoutes.includes(pathname);

    return (
        <Providers>
            {!shouldHideLayout && <Navbar/>}
            {children}
            {!shouldHideLayout && <Footer/>}
        </Providers>
    );
}
