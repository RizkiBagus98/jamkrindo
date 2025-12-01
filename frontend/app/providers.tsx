// app/providers.tsx
'use client'

import React, { useEffect } from 'react'
import { ReactNode } from 'react'

/**
 * Providers Component
 * 
 * Komponen ini digunakan untuk:
 * 1. Inisialisasi Axios interceptor saat app startup
 * 2. Wrap providers lainnya (jika ada)
 */
export function Providers({ children }: { children: ReactNode }) {
    useEffect(() => {
        // Inisialisasi axios config (interceptor) saat app mount
        import('@/app/utils/axiosConfig')
    }, [])

    return <>{children}</>
}

export default Providers
