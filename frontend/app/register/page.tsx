'use client'
import {useState, ChangeEvent, FormEvent} from 'react';
import {useRouter} from 'next/navigation';
import Image from 'next/image';

// Tipe data untuk form
interface FormState {
    name: string;
    email: string;
    password: string;
}

const Register = () => {
    // State untuk form, error, dan loading
    const [form, setForm] = useState<FormState>({name: '', email: '', password: ''});
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();

    // Handler untuk perubahan input
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    // Handler untuk submit form
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            // Menggunakan fetch agar konsisten dengan komponen Login
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Registrasi gagal, silakan coba lagi.');
            }

            alert('Registrasi berhasil! Anda akan diarahkan ke halaman login.');
            router.push('/login');

        } catch (err: any) {
            setError(err.message);
            alert(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        // Container utama dengan layout dua kolom
        <div className='bg-white w-full min-h-screen flex p-6 justify-between overflow-y-hidden'>

            {/* Kolom Kiri: Form Registrasi */}
            <form onSubmit={handleSubmit} className="max-w-lg ml-20 translate-y-[6vw]">
                <h1 className='text-4xl font-bold mb-10'>Buat Akun Baru</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}

                {/* Input Nama */}
                <input
                    type="text"
                    name="name"
                    placeholder="Nama Lengkap"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="mb-4 p-4 w-full border border-gray-300 rounded-xl text-sm"
                />

                {/* Input Email */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="mb-4 p-4 w-full border border-gray-300 rounded-xl text-sm"
                />

                {/* Input Password */}
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="mb-4 p-4 w-full border border-gray-300 rounded-xl text-sm"
                />

                <div className='flex flex-col'>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="mt-5 w-[10vw] cursor-pointer bg-blue-500 text-white py-2 px-10 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400"
                    >
                        {isLoading ? 'Mendaftar...' : 'Register'}
                    </button>
                </div>
            </form>

            {/* Kolom Kanan: Gambar Ilustrasi */}
            <Image src={'/images/jamkrindo-3.jpg'} className='rounded-xl' alt='images' width={600} height={500}></Image>
        </div>
    );
};

export default Register;