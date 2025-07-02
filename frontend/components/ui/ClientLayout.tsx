'use client'

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavbarRoutes = ['/dashboard', '/login', '/register', '/dashboard/berita', '/dashboard/pesan', '/dashboard/galeri'];

  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      {children}
      <Footer />
    </>
  );
}
