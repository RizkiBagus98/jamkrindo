'use client'
import {useState, ChangeEvent, FormEvent} from 'react';
import {useRouter} from 'next/navigation';
import Image from 'next/image';

interface FormState {
    email: string;
    password: string;
}

const AdminLogin = () => {
    const [form, setForm] = useState<FormState>({email: '', password: ''});
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
                credentials: "include"
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Email atau password salah');
            }

            // --- LOGIKA UTAMA UNTUK ADMIN ---
            // Cek jika data respons memiliki info user dan rolenya
            if (data.user && data.user.role === 'ADMIN') {
                // Jika Admin, arahkan ke dashboard
                router.push('/dashboard/berita'); 
            } else {
                // Jika bukan Admin, tolak login
                throw new Error('Anda tidak memiliki hak akses admin.');
            }

        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='bg-gradient-to-br from-gray-900 via-red-900 to-gray-800 w-full min-h-screen flex p-6 justify-between items-center overflow-y-hidden'>
            <form onSubmit={handleSubmit} className="max-w-lg ml-20">
                {/* Header */}
                <div className='mb-8'>
                    <button
                        type="button"
                        onClick={() => router.push('/login')}
                        className='text-gray-300 hover:text-white font-semibold text-sm mb-6 flex items-center gap-2 transition'
                    >
                        ← Kembali ke Pilihan Login
                    </button>
                    <div className='inline-block bg-red-600 p-4 rounded-full mb-4 shadow-lg'>
                        <span className='text-3xl'>🔐</span>
                    </div>
                </div>

                {/* Judul */}
                <h1 className='text-5xl font-bold mb-2 text-white'>Login Administrator</h1>
                <p className='text-gray-300 mb-8'>Akses panel administrasi Jamkrindo Madiun</p>

                {/* Security Badge */}
                <div className='bg-red-600 bg-opacity-20 border border-red-500 rounded-lg p-3 mb-6'>
                    <p className='text-red-200 text-xs font-semibold'>⚠️ Area Terproteksi - Hanya untuk Administrator</p>
                </div>

                {/* Error Message */}
                {error && (
                    <div className='bg-red-50 border-l-4 border-red-600 p-4 mb-6 rounded'>
                        <p className="text-red-700 font-semibold text-sm">{error}</p>
                    </div>
                )}

                {/* Form Fields */}
                <div className='space-y-4 mb-6'>
                    <div>
                        <label className='block text-gray-200 font-semibold mb-2 text-sm'>Email Administrator</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="admin@jamkrindo.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border-2 border-gray-600 bg-gray-800 text-white rounded-lg focus:border-red-500 focus:outline-none transition text-sm placeholder-gray-500"
                        />
                    </div>
                    <div>
                        <label className='block text-gray-200 font-semibold mb-2 text-sm'>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border-2 border-gray-600 bg-gray-800 text-white rounded-lg focus:border-red-500 focus:outline-none transition text-sm placeholder-gray-500"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full cursor-pointer bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 rounded-lg hover:from-red-700 hover:to-red-800 transition font-semibold disabled:bg-gray-600 mb-4 shadow-lg"
                >
                    {isLoading ? 'Loading...' : 'Login Sebagai Admin'}
                </button>

                {/* Footer */}
                <p className='text-center text-gray-400 text-xs'>
                    Login Anda akan diverifikasi. Semua akitivitas dimonitor.
                </p>
            </form>

            {/* Image Section */}
            <div className='hidden lg:block relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-red-600 to-transparent opacity-40 rounded-2xl'></div>
                <Image 
                    src={'/images/jamkrindo-3.jpg'} 
                    className='rounded-2xl object-cover shadow-2xl' 
                    alt={'Jamkrindo Admin'} 
                    width={600}
                    height={500}
                />
            </div>
        </div>
    );
};

export default AdminLogin;