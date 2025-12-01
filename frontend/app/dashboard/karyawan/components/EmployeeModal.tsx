// src/components/EmployeeModal.tsx

import React, { useState, useEffect } from 'react';

// DIPERBARUI: Interface disesuaikan dengan model data lengkap
interface Karyawan {
  _id?: string;
  id?: number;
  name: string;
  position: string;
  department: string;
  employeeId: string;
  email: string;
  phone: string;
  location: string;
  joinDate: string;
  education: string;
  experience: string;
  avatar: string;
  status: string;
  achievements: string[];
}

interface EmployeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (employeeData: Omit<Karyawan, '_id' | 'id'>) => void;
  employee: Karyawan | null;
}

const EmployeeModal: React.FC<EmployeeModalProps> = ({ isOpen, onClose, onSave, employee }) => {
    // DIPERBARUI: State form dengan semua field baru
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        department: '',
        employeeId: '',
        email: '',
        phone: '',
        location: '',
        joinDate: '',
        education: '',
        experience: '',
        avatar: '',
        status: 'active',
        achievements: '', // achievements akan dihandle sebagai string yang dipisahkan koma
    });

    useEffect(() => {
        if (employee) {
            // DIPERBARUI: Set semua data saat mode edit
            setFormData({
                name: employee.name || '',
                position: employee.position || '',
                department: employee.department || '',
                employeeId: employee.employeeId || '',
                email: employee.email || '',
                phone: employee.phone || '',
                location: employee.location || '',
                joinDate: employee.joinDate || '',
                education: employee.education || '',
                experience: employee.experience || '',
                avatar: employee.avatar || '',
                status: employee.status || 'active',
                // Gabungkan array menjadi string untuk ditampilkan di input
                achievements: employee.achievements?.join(', ') || '',
            });
        } else {
            // Reset form untuk karyawan baru
            setFormData({
                name: '', position: '', department: '', employeeId: '', email: '', 
                phone: '', location: '', joinDate: '', education: '', 
                experience: '', avatar: '', status: 'active', achievements: '',
            });
        }
    }, [employee, isOpen]);

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Ubah string achievements kembali menjadi array sebelum dikirim
        const achievementsArray = formData.achievements.split(',')
            .map(item => item.trim()) // Hapus spasi
            .filter(item => item);   // Hapus item kosong

        const dataToSave = {
            ...formData,
            achievements: achievementsArray,
        };
        onSave(dataToSave);
    };

    return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-6">{employee ? 'Edit Karyawan' : 'Tambah Karyawan Baru'}</h2>
                <form onSubmit={handleSubmit}>
                    {/* DIPERBARUI: Layout grid dengan semua field baru */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                        {/* Kolom 1 */}
                        <div><label className="label-style">Nama</label><input type="text" name="name" value={formData.name} onChange={handleChange} className="input-field" required /></div>
                        <div><label className="label-style">ID Karyawan</label><input type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} className="input-field" required /></div>
                        <div><label className="label-style">Posisi</label><input type="text" name="position" value={formData.position} onChange={handleChange} className="input-field" required /></div>
                        <div><label className="label-style">Departemen</label><input type="text" name="department" value={formData.department} onChange={handleChange} className="input-field" required/></div>
                        <div><label className="label-style">Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} className="input-field" required /></div>
                        <div><label className="label-style">Telepon</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="input-field" /></div>
                        
                        {/* Kolom 2 */}
                        <div><label className="label-style">Lokasi</label><input type="text" name="location" value={formData.location} onChange={handleChange} className="input-field" /></div>
                        <div>
                            <label className="label-style">Tanggal Bergabung</label>
                            <input 
                                type="date" 
                                name="joinDate" 
                                value={formData.joinDate} 
                                onChange={handleChange} 
                                className="input-field" 
                            />
                        </div>
                        <div><label className="label-style">Pendidikan</label><input type="text" name="education" value={formData.education} onChange={handleChange} className="input-field" /></div>
                        <div><label className="label-style">Pengalaman</label><input type="text" name="experience" value={formData.experience} onChange={handleChange} className="input-field" /></div>
                        <div><label className="label-style">Inisial Avatar (e.g. BS)</label><input type="text" name="avatar" value={formData.avatar} onChange={handleChange} className="input-field" /></div>
                        <div>
                            <label className="label-style">Status</label>
                            <select name="status" value={formData.status} onChange={handleChange} className="input-field">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>

                        {/* Field untuk Achievements */}
                        <div className="md:col-span-2">
                            <label className="label-style">Pencapaian (pisahkan dengan koma)</label>
                            <input type="text" name="achievements" value={formData.achievements} onChange={handleChange} className="input-field" />
                        </div>
                    </div>
                    
                    <div className="flex justify-end gap-4 mt-8">
                        <button type="button" onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Batal</button>
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Simpan</button>
                    </div>
                </form>
            </div>
            <style jsx global>{`
                .input-field { width: 100%; padding: 0.75rem; border: 1px solid #D1D5DB; border-radius: 0.375rem; transition: border-color 0.2s; }
                .input-field:focus { outline: none; border-color: #3B82F6; box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.4); }
                .label-style { display: block; color: #374151; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem; }
            `}</style>
        </div>
    );
};

export default EmployeeModal;