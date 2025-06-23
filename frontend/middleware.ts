// File: middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 1. Fungsi middleware utama
export function middleware(request: NextRequest) {
  // 2. Mendapatkan cookie dari permintaan yang masuk
  //    Pastikan nama 'session-token' sama persis dengan yang Anda buat di /api/login
  const sessionCookie = request.cookies.get('session-token');

  // 3. Logika untuk memproteksi rute
  //    Jika cookie tidak ada DAN pengguna mencoba mengakses rute yang diproteksi
  if (!sessionCookie) {
    //    Alihkan (redirect) mereka ke halaman login
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 4. Jika cookie ada, izinkan permintaan untuk melanjutkan
  return NextResponse.next();
}

// 5. Konfigurasi Matcher
export const config = {
  /*
   * Cocokkan semua path permintaan KECUALI untuk yang dimulai dengan:
   * - api (rute API)
   * - _next/static (file statis)
   * - _next/image (permintaan optimisasi gambar)
   * - favicon.ico (file favicon)
   *
   * Ini adalah cara yang lebih modern untuk memproteksi semua halaman
   * kecuali beberapa halaman publik, bukan hanya '/dashboard'.
   * Jika Anda HANYA ingin memproteksi dashboard, gunakan matcher di bawah.
   */
  // matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',

  // --- ATAU ---
  // Matcher yang lebih spesifik jika HANYA dashboard yang ingin diproteksi
  matcher: ['/dashboard/:path*'],
};