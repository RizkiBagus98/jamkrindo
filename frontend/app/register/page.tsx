'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

interface FormState {
  name: string;
  email: string;
  password: string;
}

interface ErrorResponse {
  message: string;
}

const Register = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', password: ''});
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      alert('Registrasi berhasil, silakan login.');
      router.push('/login');
    } catch (err) {
      // Type assertion to AxiosError
      const axiosError = err as AxiosError<ErrorResponse>;
      alert(axiosError.response?.data?.message || 'Registrasi gagal');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input
        type="text"
        name="name"
        placeholder="Nama"
        onChange={handleChange}
        required
        className="mb-4 p-2 w-full border border-gray-300 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
        className="mb-4 p-2 w-full border border-gray-300 rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
        className="mb-4 p-2 w-full border border-gray-300 rounded"
      />
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
        Register
      </button>
    </form>
  );
};

export default Register;
