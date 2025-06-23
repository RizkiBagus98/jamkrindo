"use client";

import React, { useState } from 'react';
import axios from 'axios';

const CallCenter = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!name || !email || !message) {
      alert('Mohon isi semua field');
      return;
    }

    try {
      setLoading(true);
      await axios.post('http://localhost:5000/api/pesan', {
        nama: name,
        email: email,
        isi: message
      });
      alert('Pesan berhasil dikirim!');
      setName('');
      setEmail('');
      setMessage('');
      setShowForm(false);
    } catch (err) {
      console.error('Gagal mengirim pesan:', err);
      alert('Gagal mengirim pesan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        className='fixed right-5 bottom-5 px-5 rounded-full py-2 bg-[#0725ae] text-white border shadow-lg hover:bg-[#041b83] transition duration-300'
      >
        Need Help?
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-end z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[20vw] border border-black absolute bottom-[5vw] right-5 max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-[#0725ae]">Hubungi Kami</h2>
            <input
              type="text"
              placeholder="Nama Anda"
              className="w-full border px-3 py-2 mb-3 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Anda"
              className="w-full border px-3 py-2 mb-3 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Tulis pesan..."
              className="w-full border px-3 py-2 mb-3 rounded h-32"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="flex justify-between">
              <button
                onClick={handleSend}
                disabled={loading}
                className="bg-[#0725ae] text-white px-4 py-2 rounded hover:bg-[#041b83]"
              >
                {loading ? 'Mengirim...' : 'Kirim'}
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="bg-red-500 text-white px-4 py-2 hover:underline"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CallCenter;
