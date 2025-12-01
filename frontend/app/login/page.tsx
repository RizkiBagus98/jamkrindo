'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const LoginChoice = () => {
    const router = useRouter();

    return (
        <div className='bg-white w-full min-h-screen flex p-6 justify-between items-center overflow-y-hidden'>
            <div className='flex flex-col gap-8 ml-20'>
                {/* Logo atau Judul */}
                <div>
                    <h1 className='text-5xl font-bold mb-4'>Jamkrindo Madiun</h1>
                    <p className='text-gray-600 text-lg'>Pilih jenis akun untuk melanjutkan login</p>
                </div>

                {/* Tombol Login Pilihan */}
                <div className='flex flex-col gap-6 max-w-md'>
                    {/* Login Pengguna */}
                    <button
                        onClick={() => router.push('/login/client')}
                        className='flex items-center gap-4 p-6 border-2 border-blue-500 rounded-xl hover:bg-blue-50 transition duration-300'
                    >
                        <div className='text-4xl'>👤</div>
                        <div className='text-left'>
                            <h2 className='text-xl font-bold text-blue-600'>Login Pengguna</h2>
                            <p className='text-gray-600 text-sm'>Login sebagai pengguna biasa</p>
                        </div>
                    </button>

                    {/* Login Admin */}
                    <button
                        onClick={() => router.push('/admin/login')}
                        className='flex items-center gap-4 p-6 border-2 border-green-500 rounded-xl hover:bg-green-50 transition duration-300'
                    >
                        <div className='text-4xl'>🔐</div>
                        <div className='text-left'>
                            <h2 className='text-xl font-bold text-green-600'>Login Administrator</h2>
                            <p className='text-gray-600 text-sm'>Login sebagai administrator</p>
                        </div>
                    </button>
                </div>

                {/* Link ke Home */}
                <p className='text-sm text-gray-600'>
                    Kembali ke <a href="/" className='text-blue-500 hover:underline font-semibold'>halaman utama</a>
                </p>
            </div>

            {/* Gambar */}
            <Image 
                src={'/images/jamkrindo-3.jpg'} 
                className='rounded-xl object-cover' 
                alt={'Jamkrindo'} 
                width={600}
                height={500}
            />
        </div>
    );
};

export default LoginChoice;