"use client"
import React, { useState } from 'react';
import { User, Users, Building, Mail, Phone, ChevronDown, ChevronUp, Briefcase, Crown, Award, MapPin } from 'lucide-react';

const Page = () => {
    const [expandedNodes, setExpandedNodes] = useState({});
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const organizationData = {
        id: 'ceo',
        name: 'Dr. Bambang Wijaya',
        position: 'Chief Executive Officer',
        level: 1,
        department: 'Executive',
        email: 'bambang.wijaya@jamkrindo.co.id',
        phone: '+62 811-1000-0001',
        location: 'Jakarta, Indonesia',
        experience: '15 tahun',
        avatar: 'BW',
        achievements: ['Visionary Leader 2023', 'Business Excellence 2022', 'Industry Pioneer 2021'],
        children: [
            {
                id: 'cto',
                name: 'Ir. Sinta Maharani',
                position: 'Chief Technology Officer',
                level: 2,
                department: 'Technology',
                email: 'sinta.maharani@jamkrindo.co.id',
                phone: '+62 811-2000-0002',
                location: 'Jakarta, Indonesia',
                experience: '12 tahun',
                avatar: 'SM',
                achievements: ['Tech Innovation 2023', 'Digital Transformation 2022'],
                children: [
                    {
                        id: 'it-manager',
                        name: 'Rendra Pratama',
                        position: 'IT Development Manager',
                        level: 3,
                        department: 'IT Development',
                        email: 'rendra.pratama@jamkrindo.co.id',
                        phone: '+62 816-3333-4444',
                        location: 'Bandung, Indonesia',
                        experience: '10 tahun',
                        avatar: 'RP',
                        achievements: ['Project Excellence 2023', 'Leadership Award 2021'],
                        children: [
                            {
                                id: 'senior-dev',
                                name: 'Budi Santoso',
                                position: 'Senior Software Engineer',
                                level: 4,
                                department: 'IT Development',
                                email: 'budi.santoso@jamkrindo.co.id',
                                phone: '+62 812-3456-7890',
                                location: 'Jakarta, Indonesia',
                                experience: '8 tahun',
                                avatar: 'BS',
                                achievements: ['Employee of the Year 2023', 'Best Innovation Award 2022']
                            },
                            {
                                id: 'ui-designer',
                                name: 'Lisa Maharani',
                                position: 'UX/UI Designer',
                                level: 4,
                                department: 'Design',
                                email: 'lisa.maharani@jamkrindo.co.id',
                                phone: '+62 817-8888-2222',
                                location: 'Jakarta, Indonesia',
                                experience: '6 tahun',
                                avatar: 'LM',
                                achievements: ['Design Excellence 2023', 'User Experience Award 2022']
                            }
                        ]
                    }
                ]
            },
            {
                id: 'coo',
                name: 'Dra. Fitri Sari',
                position: 'Chief Operating Officer',
                level: 2,
                department: 'Operations',
                email: 'fitri.sari@jamkrindo.co.id',
                phone: '+62 811-3000-0003',
                location: 'Jakarta, Indonesia',
                experience: '14 tahun',
                avatar: 'FS',
                achievements: ['Operations Excellence 2023', 'Process Improvement 2022'],
                children: [
                    {
                        id: 'hr-manager',
                        name: 'Sari Dewi',
                        position: 'HR Manager',
                        level: 3,
                        department: 'Human Resources',
                        email: 'sari.dewi@jamkrindo.co.id',
                        phone: '+62 813-9876-5432',
                        location: 'Jakarta, Indonesia',
                        experience: '10 tahun',
                        avatar: 'SD',
                        achievements: ['Best HR Practice 2023', 'Team Building Excellence 2022']
                    },
                    {
                        id: 'marketing-manager',
                        name: 'Andi Kurniawan',
                        position: 'Marketing Manager',
                        level: 3,
                        department: 'Marketing',
                        email: 'andi.kurniawan@jamkrindo.co.id',
                        phone: '+62 814-1111-2222',
                        location: 'Surabaya, Indonesia',
                        experience: '9 tahun',
                        avatar: 'AK',
                        achievements: ['Marketing Excellence 2023', 'Brand Development 2022'],
                        children: [
                            {
                                id: 'marketing-specialist',
                                name: 'Ahmad Rizki',
                                position: 'Marketing Specialist',
                                level: 4,
                                department: 'Marketing',
                                email: 'ahmad.rizki@jamkrindo.co.id',
                                phone: '+62 814-5555-1234',
                                location: 'Surabaya, Indonesia',
                                experience: '5 tahun',
                                avatar: 'AR',
                                achievements: ['Best Campaign 2023', 'Digital Marketing Excellence 2022']
                            }
                        ]
                    }
                ]
            },
            {
                id: 'cfo',
                name: 'Dr. Herman Setiawan',
                position: 'Chief Financial Officer',
                level: 2,
                department: 'Finance',
                email: 'herman.setiawan@jamkrindo.co.id',
                phone: '+62 811-4000-0004',
                location: 'Jakarta, Indonesia',
                experience: '16 tahun',
                avatar: 'HS',
                achievements: ['Financial Leadership 2023', 'Strategic Planning 2022', 'Cost Optimization 2021'],
                children: [
                    {
                        id: 'finance-manager',
                        name: 'Indira Sari',
                        position: 'Finance Manager',
                        level: 3,
                        department: 'Finance',
                        email: 'indira.sari@jamkrindo.co.id',
                        phone: '+62 815-2222-3333',
                        location: 'Jakarta, Indonesia',
                        experience: '8 tahun',
                        avatar: 'IS',
                        achievements: ['Financial Planning Excellence 2023'],
                        children: [
                            {
                                id: 'financial-analyst',
                                name: 'Maya Putri',
                                position: 'Financial Analyst',
                                level: 4,
                                department: 'Finance',
                                email: 'maya.putri@jamkrindo.co.id',
                                phone: '+62 815-7777-9999',
                                location: 'Jakarta, Indonesia',
                                experience: '4 tahun',
                                avatar: 'MP',
                                achievements: ['Financial Excellence 2023']
                            }
                        ]
                    }
                ]
            }
        ]
    };

    const toggleNode = (nodeId) => {
        setExpandedNodes(prev => ({
            ...prev,
            [nodeId]: !prev[nodeId]
        }));
    };

    const getAvatarColor = (name) => {
        const colors = [
            'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500',
            'bg-yellow-500', 'bg-indigo-500', 'bg-pink-500', 'bg-teal-500'
        ];
        const index = name.charCodeAt(0) % colors.length;
        return colors[index];
    };

    const getLevelColor = (level) => {
        const colors = {
            1: 'from-purple-500 to-purple-700 border-purple-300',
            2: 'from-blue-500 to-blue-700 border-blue-300',
            3: 'from-green-500 to-green-700 border-green-300',
            4: 'from-orange-500 to-orange-700 border-orange-300'
        };
        return colors[level] || 'from-gray-500 to-gray-700 border-gray-300';
    };

    const getLevelIcon = (level) => {
        if (level === 1) return <Crown className="w-5 h-5" />;
        if (level === 2) return <Building className="w-5 h-5" />;
        if (level === 3) return <Users className="w-5 h-5" />;
        return <User className="w-5 h-5" />;
    };

    const OrganizationNode = ({ node, isRoot = false }) => {
        const isExpanded = expandedNodes[node.id] || isRoot;
        const hasChildren = node.children && node.children.length > 0;

        return (
            <div className="flex flex-col items-center">
                {/* Employee Card */}
                <div
                    className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border-2 ${getLevelColor(node.level).split(' ')[2]} min-w-[280px] max-w-[320px]`}
                    onClick={() => setSelectedEmployee(node)}
                >
                    <div className={`bg-gradient-to-r ${getLevelColor(node.level).split(' ').slice(0, 2).join(' ')} text-white p-6 rounded-t-2xl`}>
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-lg backdrop-blur-sm">
                                {node.avatar}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold">{node.name}</h3>
                                <p className="text-white/90 text-sm">{node.position}</p>
                                <div className="flex items-center mt-2">
                                    {getLevelIcon(node.level)}
                                    <span className="ml-2 text-xs text-white/80">Level {node.level}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4">
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center text-gray-600">
                                <Briefcase className="w-4 h-4 mr-2" />
                                {node.department}
                            </div>
                            <div className="flex items-center text-gray-600">
                                <MapPin className="w-4 h-4 mr-2" />
                                {node.location}
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500">Exp: {node.experience}</span>
                                <div className="flex items-center text-yellow-600">
                                    <Award className="w-4 h-4 mr-1" />
                                    {node.achievements?.length || 0}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Expand/Collapse Button */}
                {hasChildren && (
                    <button
                        onClick={() => toggleNode(node.id)}
                        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg transition-colors z-10"
                    >
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                )}

                {/* Children */}
                {hasChildren && isExpanded && (
                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        {node.children.map((child) => (
                            <div key={child.id}>
                                <OrganizationNode node={child} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    const EmployeeDetailModal = ({ employee, onClose }) => {
        if (!employee) return null;

        return (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                    <div className={`bg-gradient-to-r ${getLevelColor(employee.level)} px-8 py-6 text-white`}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-6">
                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-2xl backdrop-blur-sm">
                                    {employee.avatar}
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold">{employee.name}</h2>
                                    <p className="text-xl text-white/90">{employee.position}</p>
                                    <div className="flex items-center mt-2">
                                        {getLevelIcon(employee.level)}
                                        <span className="ml-2 text-white/80">{employee.department} • Level {employee.level}</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors text-2xl"
                            >
                                ×
                            </button>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                                    <Mail className="w-5 h-5 mr-2 text-blue-600" />
                                    Kontak
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                        <Mail className="w-4 h-4 text-blue-600 mr-3" />
                                        <span className="text-gray-800 text-sm">{employee.email}</span>
                                    </div>
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                        <Phone className="w-4 h-4 text-green-600 mr-3" />
                                        <span className="text-gray-800 text-sm">{employee.phone}</span>
                                    </div>
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                        <MapPin className="w-4 h-4 text-red-600 mr-3" />
                                        <span className="text-gray-800 text-sm">{employee.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                                    <Briefcase className="w-5 h-5 mr-2 text-indigo-600" />
                                    Profesional
                                </h3>
                                <div className="space-y-2">
                                    <div className="p-3 bg-indigo-50 rounded-lg">
                                        <p className="text-sm text-gray-500">Departemen</p>
                                        <p className="font-semibold text-gray-800">{employee.department}</p>
                                    </div>
                                    <div className="p-3 bg-indigo-50 rounded-lg">
                                        <p className="text-sm text-gray-500">Pengalaman</p>
                                        <p className="font-semibold text-gray-800">{employee.experience}</p>
                                    </div>
                                    <div className="p-3 bg-indigo-50 rounded-lg">
                                        <p className="text-sm text-gray-500">Level Organisasi</p>
                                        <p className="font-semibold text-gray-800">Level {employee.level}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {employee.achievements && employee.achievements.length > 0 && (
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                                    <Award className="w-5 h-5 mr-2 text-yellow-600" />
                                    Pencapaian ({employee.achievements.length})
                                </h3>
                                <div className="space-y-2">
                                    {employee.achievements.map((achievement, index) => (
                                        <div key={index} className="bg-gradient-to-r from-yellow-50 to-amber-50 p-3 rounded-lg border-l-4 border-yellow-400">
                                            <div className="flex items-center">
                                                <Award className="w-4 h-4 text-yellow-600 mr-2" />
                                                <span className="font-semibold text-gray-800">{achievement}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen pt-[7vw] bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800">Struktur Organisasi</h1>
                            <p className="text-gray-600 mt-2">PT Jamkrindo - Hierarki Perusahaan</p>
                        </div>
                        <img
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='50' viewBox='0 0 150 50'%3E%3Ctext x='10' y='30' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='%232563eb'%3EPT JAMKRINDO%3C/text%3E%3C/svg%3E"
                            alt="PT Jamkrindo Logo"
                            className="h-12"
                        />
                    </div>
                </div>

                {/* Legend */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Level Organisasi</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
                                <Crown className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm font-medium text-gray-700">Level 1 - Executive</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                                <Building className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm font-medium text-gray-700">Level 2 - C-Level</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center">
                                <Users className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm font-medium text-gray-700">Level 3 - Manager</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full flex items-center justify-center">
                                <User className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm font-medium text-gray-700">Level 4 - Staff</span>
                        </div>
                    </div>
                </div>

                {/* Organization Chart */}
                <div className="bg-white rounded-2xl shadow-xl p-8 overflow-x-auto">
                    <div className="flex justify-center min-w-full">
                        <OrganizationNode node={organizationData} isRoot={true} />
                    </div>
                </div>

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