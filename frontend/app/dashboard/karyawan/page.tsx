"use client"

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Plus, Edit, Trash2 } from 'lucide-react';
import EmployeeModal from './components/EmployeeModal';
import ConfirmationModal from './components/ConfirmationModal';

// <-- Perbaikan 4: Gunakan environment variable untuk API URL
// Pastikan Anda membuat file .env.local di root proyek Anda
// dan tambahkan: NEXT_PUBLIC_API_URL=http://localhost:5001/api/karyawan
const API_URL = 'http://localhost:5001/api/karyawan';

interface Karyawan {
  _id: string;
  id: number;
  name: string;
  position: string;
  department: string;
  employeeId: string;
  email: string;
  phone: string;
  location: string;
  joinDate: string; // Ini akan menjadi string ISO (mis: "2023-10-28T00:00:00.000Z")
  education: string;
  experience: string;
  avatar: string;
  status: string;
  achievements: string[];
}

const ManageKaryawanPage = () => {
  const [employees, setEmployees] = useState<Karyawan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Karyawan | null>(null);
  
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [deletingEmployeeId, setDeletingEmployeeId] = useState<number | null>(null);

  // <-- Perbaikan 1 & 2: State untuk loading & error pada aksi (Simpan/Hapus)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const fetchEmployees = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setEmployees(response.data);
      setError(null);
    } catch (err) {
      setError("Gagal memuat data karyawan.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const handleOpenModal = (employee: Karyawan | null = null) => {
    setEditingEmployee(employee);
    setIsModalOpen(true);
    setSubmissionError(null); // <-- Perbaikan 2: Bersihkan error lama saat modal dibuka
  };

  const handleCloseModal = () => {
    setEditingEmployee(null);
    setIsModalOpen(false);
    setSubmissionError(null); // <-- Perbaikan 2: Bersihkan error saat modal ditutup
  };

  const handleSaveEmployee = async (employeeData: Omit<Karyawan, '_id' | 'id'>) => {
    setIsSubmitting(true); // <-- Perbaikan 1: Set loading
    setSubmissionError(null); // <-- Perbaikan 2: Bersihkan error sebelumnya
    
    try {
      // Ubah joinDate menjadi ISO string
      const payload = { ...employeeData, joinDate: new Date(employeeData.joinDate).toISOString() };

      if (editingEmployee) {
        await axios.put(`${API_URL}/${editingEmployee.id}`, payload);
      } else {
        await axios.post(API_URL, payload);
      }

      fetchEmployees();
      handleCloseModal();
    } catch (err) {
      // <-- Perbaikan 2: Ganti alert() dengan state error
      setSubmissionError("Gagal menyimpan data. Silakan periksa kembali isian Anda.");
      console.error(err);
      // Jangan tutup modal jika terjadi error
    } finally {
      setIsSubmitting(false); // <-- Perbaikan 1: Hentikan loading
    }
  };
  
  const openDeleteConfirm = (id: number) => {
    setDeletingEmployeeId(id);
    setIsConfirmOpen(true);
    setSubmissionError(null); // <-- Perbaikan 2: Bersihkan error lama
  };

  const closeDeleteConfirm = () => {
    setDeletingEmployeeId(null);
    setIsConfirmOpen(false);
    setSubmissionError(null); // <-- Perbaikan 2: Bersihkan error saat ditutup
  };

  const handleDelete = async () => {
    if (!deletingEmployeeId) return;
    
    setIsSubmitting(true); // <-- Perbaikan 1: Set loading
    setSubmissionError(null); // <-- Perbaikan 2: Bersihkan error

    try {
      await axios.delete(`${API_URL}/${deletingEmployeeId}`);
      fetchEmployees();
      closeDeleteConfirm();
    } catch (err) {
      // <-- Perbaikan 2: Ganti alert() dengan state error
      setSubmissionError("Gagal menghapus data. Coba lagi nanti.");
      console.error(err);
      // Jangan tutup modal jika error, agar user tahu
    } finally {
      setIsSubmitting(false); // <-- Perbaikan 1: Hentikan loading
    }
  };

  // <-- Perbaikan 3: Format data untuk modal
  // <input type="date"> memerlukan format 'YYYY-MM-DD', bukan string ISO
  const employeeForModal = editingEmployee ? {
    ...editingEmployee,
    joinDate: editingEmployee.joinDate.split('T')[0]
  } : null;

  return (
    <div className="container mx-auto p-8 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manajemen Karyawan</h1>
        <button
          onClick={() => handleOpenModal()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center transition-colors"
        >
          <Plus size={20} className="mr-2" />
          Tambah Karyawan
        </button>
      </div>

      {loading && <p>Memuat data...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Nama</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Posisi</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Departemen</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee._id || employee.id} className="hover:bg-gray-50">
                  <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">{employee.name}</td>
                  <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">{employee.position}</td>
                  <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">{employee.department}</td>
                  <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">{employee.email}</td>
                  <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center space-x-3">
                      <button onClick={() => handleOpenModal(employee)} className="text-yellow-600 hover:text-yellow-800 transition-colors"><Edit size={18} /></button>
                      <button onClick={() => openDeleteConfirm(employee._id)} className="text-red-600 hover:text-red-800 transition-colors"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <EmployeeModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveEmployee}
        employee={employeeForModal} // <-- Perbaikan 3: Gunakan data yang diformat
        isSubmitting={isSubmitting} // <-- Perbaikan 1: Lewatkan state loading
        error={submissionError}   // <-- Perbaikan 2: Lewatkan state error
      />

      <ConfirmationModal
        isOpen={isConfirmOpen}
        onClose={closeDeleteConfirm}
        onConfirm={handleDelete}
        title="Konfirmasi Hapus"
        message="Apakah Anda yakin ingin menghapus data karyawan ini? Tindakan ini tidak dapat dibatalkan."
        isSubmitting={isSubmitting} // <-- Perbaikan 1: Lewatkan state loading
        error={submissionError}     // <-- Perbaikan 2: Lewatkan state error
      />
    </div>
  );
};

export default ManageKaryawanPage;