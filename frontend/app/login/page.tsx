'use client'
import {useState, ChangeEvent, FormEvent} from 'react';
import {useRouter} from 'next/navigation';
import Image from 'next/image';

interface FormState {
    email: string;
    password: string;
}

const Login = () => {
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
            });

            const data = await res.json();

            if (!res.ok) {
                // Server akan mengirim pesan error jika login gagal
                throw new Error(data.message || 'Terjadi kesalahan');
            }

            alert('Login berhasil!');
            router.push('/dashboard/berita');

        } catch (err: any) {
            setError(err.message);
            alert(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='bg-white w-full min-h-screen flex p-6 justify-between overflow-y-hidden'>
            <form onSubmit={handleSubmit} className="max-w-lg ml-20 translate-y-[6vw]">
                <h1 className='text-4xl font-bold mb-10'>Halo, Selamat Datang Kembali</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="mb-4 p-4 w-full border border-gray-300 rounded-xl text-sm"
                />
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
                        {isLoading ? 'Loading...' : 'Login'}
                    </button>
                </div>
            </form>
            <Image src={'/images/jamkrindo-3.jpg'} className='rounded-xl ' alt={'images'} width={600}
                   height={500}></Image>
        </div>
    );
};

export default Login;