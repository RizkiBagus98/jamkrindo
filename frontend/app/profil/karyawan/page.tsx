"use client"
import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, Award, Search, Filter, Grid, List, ChevronDown } from 'lucide-react';

const Page = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('all');
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const employees = [
        {
            id: 1,
            name: "Budi Santoso",
            position: "Senior Software Engineer",
            department: "IT Development",
            employeeId: "JKR-2024-001",
            email: "budi.santoso@jamkrindo.co.id",
            phone: "+62 812-3456-7890",
            location: "Jakarta, Indonesia",
            joinDate: "15 Januari 2020",
            education: "S1 Teknik Informatika - Universitas Indonesia",
            experience: "8 tahun",
            avatar: "BS",
            status: "active",
            achievements: ["Employee of the Year 2023", "Best Innovation Award 2022"]
        },
        {
            id: 2,
            name: "Sari Dewi",
            position: "HR Manager",
            department: "Human Resources",
            employeeId: "JKR-2024-002",
            email: "sari.dewi@jamkrindo.co.id",
            phone: "+62 813-9876-5432",
            location: "Jakarta, Indonesia",
            joinDate: "10 Maret 2019",
            education: "S1 Psikologi - Universitas Gadjah Mada",
            experience: "10 tahun",
            avatar: "SD",
            status: "active",
            achievements: ["Best HR Practice 2023", "Team Building Excellence 2022"]
        },
        {
            id: 3,
            name: "Ahmad Rizki",
            position: "Marketing Specialist",
            department: "Marketing",
            employeeId: "JKR-2024-003",
            email: "ahmad.rizki@jamkrindo.co.id",
            phone: "+62 814-5555-1234",
            location: "Surabaya, Indonesia",
            joinDate: "5 Juli 2021",
            education: "S1 Manajemen Pemasaran - ITS",
            experience: "5 tahun",
            avatar: "AR",
            status: "active",
            achievements: ["Best Campaign 2023", "Digital Marketing Excellence 2022"]
        },
        {
            id: 4,
            name: "Maya Putri",
            position: "Financial Analyst",
            department: "Finance",
            employeeId: "JKR-2024-004",
            email: "maya.putri@jamkrindo.co.id",
            phone: "+62 815-7777-9999",
            location: "Jakarta, Indonesia",
            joinDate: "12 September 2022",
            education: "S1 Akuntansi - Universitas Brawijaya",
            experience: "4 tahun",
            avatar: "MP",
            status: "active",
            achievements: ["Financial Excellence 2023"]
        },
        {
            id: 5,
            name: "Rendra Pratama",
            position: "Project Manager",
            department: "IT Development",
            employeeId: "JKR-2024-005",
            email: "rendra.pratama@jamkrindo.co.id",
            phone: "+62 816-3333-4444",
            location: "Bandung, Indonesia",
            joinDate: "20 Februari 2018",
            education: "S1 Sistem Informasi - ITB",
            experience: "12 tahun",
            avatar: "RP",
            status: "active",
            achievements: ["Project Excellence 2023", "Leadership Award 2021", "Innovation Award 2020"]
        },
        {
            id: 6,
            name: "Lisa Maharani",
            position: "UX/UI Designer",
            department: "Design",
            employeeId: "JKR-2024-006",
            email: "lisa.maharani@jamkrindo.co.id",
            phone: "+62 817-8888-2222",
            location: "Jakarta, Indonesia",
            joinDate: "8 November 2021",
            education: "S1 Desain Komunikasi Visual - Binus",
            experience: "6 tahun",
            avatar: "LM",
            status: "active",
            achievements: ["Design Excellence 2023", "User Experience Award 2022"]
        }
    ];

    const departments = ['all', 'IT Development', 'Human Resources', 'Marketing', 'Finance', 'Design'];

    const filteredEmployees = employees.filter(employee => {
        const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.department.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDepartment = selectedDepartment === 'all' || employee.department === selectedDepartment;
        return matchesSearch && matchesDepartment;
    });

    const getAvatarColor = (name) => {
        const colors = [
            'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500',
            'bg-yellow-500', 'bg-indigo-500', 'bg-pink-500', 'bg-teal-500'
        ];
        const index = name.charCodeAt(0) % colors.length;
        return colors[index];
    };

    const EmployeeCard = ({ employee }) => (
        <div
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            onClick={() => setSelectedEmployee(employee)}
        >
            <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-16 h-16 ${getAvatarColor(employee.name)} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                        {employee.avatar}
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800">{employee.name}</h3>
                        <p className="text-blue-600 font-semibold">{employee.position}</p>
                        <p className="text-gray-500 text-sm">{employee.department}</p>
                    </div>
                    <div className="text-right">
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Active
                        </span>
                    </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        {employee.email}
                    </div>
                    <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {employee.location}
                    </div>
                    <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Bergabung: {employee.joinDate}
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Pengalaman: {employee.experience}</span>
                        <div className="flex items-center text-yellow-600">
                            <Award className="w-4 h-4 mr-1" />
                            {employee.achievements.length} Award{employee.achievements.length > 1 ? 's' : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const EmployeeListItem = ({ employee }) => (
        <div
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            onClick={() => setSelectedEmployee(employee)}
        >
            <div className="p-6">
                <div className="flex items-center space-x-6">
                    <div className={`w-12 h-12 ${getAvatarColor(employee.name)} rounded-full flex items-center justify-center text-white font-bold`}>
                        {employee.avatar}
                    </div>

                    <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                            <h3 className="font-bold text-gray-800">{employee.name}</h3>
                            <p className="text-blue-600 text-sm">{employee.position}</p>
                        </div>

                        <div>
                            <p className="text-gray-600 text-sm">{employee.department}</p>
                            <p className="text-gray-500 text-xs">{employee.employeeId}</p>
                        </div>

                        <div>
                            <p className="text-gray-600 text-sm">{employee.location}</p>
                            <p className="text-gray-500 text-xs">Since {employee.joinDate}</p>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                Active
                            </span>
                            <div className="flex items-center text-yellow-600 text-sm">
                                <Award className="w-4 h-4 mr-1" />
                                {employee.achievements.length}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const EmployeeDetailModal = ({ employee, onClose }) => {
        if (!employee) return null;

        return (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-6 text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-6">
                                <div className={`w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-2xl backdrop-blur-sm`}>
                                    {employee.avatar}
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold">{employee.name}</h2>
                                    <p className="text-xl text-white/90">{employee.position}</p>
                                    <p className="text-white/80">{employee.department}</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
                            >
                                ×
                            </button>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                    <Mail className="w-5 h-5 mr-2 text-blue-600" />
                                    Informasi Kontak
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                        <Mail className="w-4 h-4 text-blue-600 mr-3" />
                                        <span className="text-gray-800">{employee.email}</span>
                                    </div>
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                        <Phone className="w-4 h-4 text-green-600 mr-3" />
                                        <span className="text-gray-800">{employee.phone}</span>
                                    </div>
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                        <MapPin className="w-4 h-4 text-red-600 mr-3" />
                                        <span className="text-gray-800">{employee.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                    <Briefcase className="w-5 h-5 mr-2 text-indigo-600" />
                                    Informasi Profesional
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center p-3 bg-indigo-50 rounded-lg">
                                        <Calendar className="w-4 h-4 text-indigo-600 mr-3" />
                                        <div>
                                            <p className="text-sm text-gray-500">Bergabung</p>
                                            <p className="font-semibold text-gray-800">{employee.joinDate}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center p-3 bg-indigo-50 rounded-lg">
                                        <GraduationCap className="w-4 h-4 text-purple-600 mr-3" />
                                        <div>
                                            <p className="text-sm text-gray-500">Pendidikan</p>
                                            <p className="font-semibold text-gray-800">{employee.education}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center p-3 bg-indigo-50 rounded-lg">
                                        <Award className="w-4 h-4 text-amber-600 mr-3" />
                                        <div>
                                            <p className="text-sm text-gray-500">Pengalaman</p>
                                            <p className="font-semibold text-gray-800">{employee.experience}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                <Award className="w-5 h-5 mr-2 text-yellow-600" />
                                Pencapaian & Penghargaan
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {employee.achievements.map((achievement, index) => (
                                    <div key={index} className="bg-gradient-to-br from-yellow-50 to-amber-50 p-4 rounded-xl border-l-4 border-yellow-400">
                                        <div className="flex items-center mb-1">
                                            <Award className="w-4 h-4 text-yellow-600 mr-2" />
                                            <span className="text-xs text-gray-500">#{index + 1}</span>
                                        </div>
                                        <p className="font-semibold text-gray-800">{achievement}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen pt-[7vw] bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">
            {/* Header */}
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800">Profil Karyawan</h1>
                            <p className="text-gray-600 mt-2">PT Jamkrindo - {filteredEmployees.length} karyawan aktif</p>
                        </div>
                        <img
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='50' viewBox='0 0 150 50'%3E%3Ctext x='10' y='30' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='%232563eb'%3EPT JAMKRINDO%3C/text%3E%3C/svg%3E"
                            alt="PT Jamkrindo Logo"
                            className="h-12"
                        />
                    </div>

                    {/* Filters and Search */}
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="flex items-center space-x-4 w-full md:w-auto">
                            <div className="relative flex-1 md:w-80">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Cari karyawan..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            <div className="relative">
                                <select
                                    value={selectedDepartment}
                                    onChange={(e) => setSelectedDepartment(e.target.value)}
                                    className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    {departments.map(dept => (
                                        <option key={dept} value={dept}>
                                            {dept === 'all' ? 'Semua Departemen' : dept}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-3 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            >
                                <Grid className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-3 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            >
                                <List className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Employees Grid/List */}
                <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                    {filteredEmployees.map(employee => (
                        viewMode === 'grid' ?
                            <EmployeeCard key={employee.id} employee={employee} /> :
                            <EmployeeListItem key={employee.id} employee={employee} />
                    ))}
                </div>

                {filteredEmployees.length === 0 && (
                    <div className="text-center py-12">
                        <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">Tidak ada karyawan ditemukan</h3>
                        <p className="text-gray-500">Coba ubah kriteria pencarian atau filter</p>
                    </div>
                )}

                {/* Employee Detail Modal */}
                <EmployeeDetailModal
                    employee={selectedEmployee}
                    onClose={() => setSelectedEmployee(null)}
                />
            </div>
        </div>
    );
};

export default Page;