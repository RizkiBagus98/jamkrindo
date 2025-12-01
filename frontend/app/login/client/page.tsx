'use client'
import {useState, ChangeEvent, FormEvent} from 'react';
import {useRouter} from 'next/navigation';
import Image from 'next/image';

interface FormState {
    email: string;
    password: string;
}

const ClientLogin = () => {
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

            // --- LOGIKA UTAMA UNTUK USER ---
            // Cek jika data respons memiliki info user dan rolenya
            if (data.user && data.user.role === 'ADMIN') {
                // JIKA ADMIN, tolak login dari halaman ini
                throw new Error('Akun Admin harus login melalui halaman admin.');
            } else {
                // Jika bukan Admin (user biasa), arahkan ke home
                router.push('/');
            }

        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='bg-gradient-to-br from-blue-50 via-white to-blue-100 w-full min-h-screen flex p-6 justify-between items-center overflow-y-hidden'>
            <form onSubmit={handleSubmit} className="max-w-lg ml-20">
                {/* Header */}
                <div className='mb-8'>
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className='text-blue-600 hover:text-blue-800 font-semibold text-sm mb-6 flex items-center gap-2 transition'
                    >
                        ← Kembali ke Pilihan Login
                    </button>
                    <div className='inline-block bg-blue-100 p-4 rounded-full mb-4'>
                        <span className='text-3xl'>👤</span>
                    </div>
                </div>

                {/* Judul */}
                <h1 className='text-5xl font-bold mb-2 text-gray-900'>Login Pengguna</h1>
                <p className='text-gray-600 mb-8'>Masuk ke akun Anda untuk melanjutkan</p>

                {/* Error Message */}
                {error && (
                    <div className='bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded'>
                        <p className="text-red-700 font-semibold">{error}</p>
                    </div>
                )}

                {/* Form Fields */}
                <div className='space-y-4 mb-6'>
                    <div>
                        <label className='block text-gray-700 font-semibold mb-2 text-sm'>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="nama@email.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition text-sm"
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700 font-semibold mb-2 text-sm'>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition text-sm"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full cursor-pointer bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition font-semibold disabled:bg-gray-400 mb-4"
                >
                    {isLoading ? 'Loading...' : 'Login'}
                </button>

                {/* Footer Links */}
                <p className='text-center text-gray-600 text-sm'>
                    Belum punya akun? <a href="/register" className='text-blue-600 font-semibold hover:underline'>Register di sini</a>
                </p>
            </form>

            {/* Image Section */}
            <div className='hidden lg:block'>
                <Image 
                    src={'/images/jamkrindo-3.jpg'} 
                    className='rounded-2xl object-cover shadow-2xl' 
                    alt={'Jamkrindo Client'} 
                    width={600}
                    height={500}
                />
            </div>
        </div>
    );
};

export default ClientLogin;
