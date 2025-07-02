import React, { ReactNode } from 'react';
import Link from 'next/link';
import {
  UsersIcon,
  ArchiveBoxIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';

// Tipe untuk props
interface LayoutProps {
  children: ReactNode;
}

// Data untuk link navigasi
const navLinks = [
  { name: 'Manajemen Berita', href: '/dashboard/berita', icon: ArchiveBoxIcon },
  { name: 'Manajemen Pesan', href: '/dashboard/pesan', icon: ArchiveBoxIcon },
  { name: 'Manajemen Galeri', href: '/dashboard/galeri', icon: ArchiveBoxIcon },
];

const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
  // Dummy pathname untuk styling link aktif, karena usePathname dihapus.
  // Anda bisa menggantinya dengan logika routing dari framework Anda jika diperlukan.
  const pathname = '/dashboard/berita'; 

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar untuk Desktop */}
      <aside className="flex w-64 flex-shrink-0 flex-col bg-gray-800 text-white">
       
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
                <item.icon className="mr-3 h-6 w-6 flex-shrink-0" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Konten Utama */}
      <div className="flex flex-1 flex-col">
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;