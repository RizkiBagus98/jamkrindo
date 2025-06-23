'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface FormState {
  email: string;
  password: string;
}

const Login = () => {
  const [form, setForm] = useState<FormState>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Mengirim data ke API Route Next.js, bukan backend langsung
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      // Mengambil data respons
      const data = await res.json();

      if (!res.ok) {
        // Jika respons tidak OK (misal: status 401, 500), lempar error
        throw new Error(data.message || 'Terjadi kesalahan');
      }

      const { token } = data;
      if (token) {
        document.cookie = `session-token=${token}; path=/; max-age=25200`
        alert('Login berhasil!');
        router.push('/dashboard');
      } else {
        throw new Error('Token tidak diterima dari server')
      }
      
    } catch (err: any) {
      setError(err.message);
      alert(err.message); // Menampilkan pesan error
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
          <div className='flex justify-between'>
            <div className='flex'>
              <input type='checkbox' name='rememberMe'/>
              <label htmlFor="rememberMe" className='text-sm ml-2'>Ingat Saya</label>
            </div>
            <p className='text-sm'>Lupa Password?</p>
          </div>
          <button 
            type="submit" 
            disabled={isLoading}
            className="mt-5 w-[10vw] cursor-pointer bg-blue-500 text-white py-2 px-10 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400"
          >
            {isLoading ? 'Loading...' : 'Login'}
        </button>
        </div>
      </form>
      <Image src={'/images/jamkrindo-3.jpg'} className='rounded-xl ' alt={'images'} width={600} height={500}></Image>
    </div>
  );
};

export default Login;