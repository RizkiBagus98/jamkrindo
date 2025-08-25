"use client"
import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, Award, Users, Building, Crown, Target, TrendingUp, Star, Edit3, Save, X, MessageCircle, Video, FileText } from 'lucide-react';

const Page = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [isEditing, setIsEditing] = useState(false);

    const manager = {
        id: 'ceo',
        name: 'Dr. Bambang Wijaya',
        position: 'Chief Executive Officer',
        level: 'C-Level Executive',
        department: 'Executive Leadership',
        email: 'bambang.wijaya@jamkrindo.co.id',
        phone: '+62 811-1000-0001',
        location: 'Jakarta, Indonesia',
        joinDate: '1 Januari 2018',
        education: 'Doktor Manajemen Bisnis - Harvard Business School',
        experience: '15 tahun',
        avatar: 'BW',
        teamSize: '120+ karyawan',
        employeeId: 'JKR-2018-001',
        birthDate: '15 Agustus 1975',
        nationality: 'Indonesia',
        languages: ['Bahasa Indonesia', 'English', 'Mandarin'],
        certifications: ['PMP', 'Six Sigma Black Belt', 'MBA Harvard'],
        achievements: [
            { title: 'Visionary Leader of the Year 2023', organization: 'Indonesia Business Awards', year: 2023 },
            { title: 'Business Excellence Award 2022', organization: 'Asian Leadership Forum', year: 2022 },
            { title: 'Industry Pioneer Award 2021', organization: 'Tech Innovation Summit', year: 2021 },
            { title: 'Strategic Leadership Excellence 2020', organization: 'Management Excellence Institute', year: 2020 }
        ],
        skills: [
            { name: 'Strategic Planning', level: 95 },
            { name: 'Leadership', level: 98 },
            { name: 'Business Development', level: 92 },
            { name: 'Corporate Governance', level: 90 },
            { name: 'Financial Management', level: 88 },
            { name: 'Digital Transformation', level: 85 }
        ],
        bio: 'Pemimpin visioner dengan pengalaman lebih dari 15 tahun dalam industri teknologi dan keuangan. Dr. Bambang Wijaya memimpin transformasi digital PT Jamkrindo menjadi perusahaan yang inovatif dan berkelanjutan. Dengan latar belakang pendidikan dari Harvard Business School, beliau membawa perspektif global dalam mengembangkan strategi bisnis yang komprehensif.',
        vision: 'Menjadikan PT Jamkrindo sebagai perusahaan teknologi finansial terdepan di Asia Tenggara dengan fokus pada inovasi berkelanjutan dan dampak positif bagi masyarakat.',
        kpis: [
            { metric: 'Revenue Growth', value: '45%', trend: 'up', description: 'Pertumbuhan pendapatan tahunan' },
            { metric: 'Employee Satisfaction', value: '92%', trend: 'up', description: 'Tingkat kepuasan karyawan' },
            { metric: 'Market Share', value: '28%', trend: 'up', description: 'Pangsa pasar industri' },
            { metric: 'Innovation Index', value: '87%', trend: 'up', description: 'Indeks inovasi perusahaan' },
            { metric: 'Customer Retention', value: '94%', trend: 'up', description: 'Tingkat retensi pelanggan' },
            { metric: 'Digital Transformation', value: '89%', trend: 'up', description: 'Progress transformasi digital' }
        ],
        projects: [
            { name: 'Digital Transformation Initiative 2023', status: 'In Progress', completion: 75, description: 'Transformasi digital menyeluruh di seluruh divisi' },
            { name: 'Sustainability Program Launch', status: 'Completed', completion: 100, description: 'Program keberlanjutan dan tanggung jawab sosial' },
            { name: 'Market Expansion Strategy', status: 'Planning', completion: 25, description: 'Ekspansi ke pasar Asia Tenggara' },
            { name: 'AI Implementation Framework', status: 'In Progress', completion: 60, description: 'Implementasi AI dalam operasional bisnis' }
        ],
        workHistory: [
            { company: 'PT Jamkrindo', position: 'Chief Executive Officer', period: '2018 - Sekarang', description: 'Memimpin transformasi digital dan pertumbuhan perusahaan' },
            { company: 'Tech Innovations Ltd', position: 'Chief Operating Officer', period: '2015 - 2018', description: 'Mengembangkan operasional dan strategi bisnis' },
            { company: 'Global Finance Corp', position: 'VP Business Development', period: '2012 - 2015', description: 'Memimpin pengembangan bisnis dan ekspansi pasar' },
            { company: 'Strategic Consulting Inc', position: 'Senior Consultant', period: '2009 - 2012', description: 'Konsultan strategi untuk perusahaan multinasional' }
        ],
        recentActivities: [
            { date: '2024-01-15', activity: 'Keynote Speaker di Tech Summit Indonesia 2024', type: 'speaking' },
            { date: '2024-01-10', activity: 'Meeting dengan Board of Directors - Strategic Planning', type: 'meeting' },
            { date: '2024-01-08', activity: 'Launch Program Sustainability Initiative', type: 'project' },
            { date: '2024-01-05', activity: 'Interview dengan Forbes Indonesia', type: 'media' },
            { date: '2024-01-03', activity: 'Town Hall Meeting dengan seluruh karyawan', type: 'internal' }
        ]
    };

    const getSkillColor = (level) => {
        if (level >= 90) return 'bg-green-500';
        if (level >= 80) return 'bg-blue-500';
        if (level >= 70) return 'bg-yellow-500';
        return 'bg-gray-500';
    };

    const getProjectStatusColor = (status) => {
        if (status === 'Completed') return 'bg-green-500';
        if (status === 'In Progress') return 'bg-blue-500';
        if (status === 'Planning') return 'bg-yellow-500';
        return 'bg-gray-500';
    };

    const getTrendIcon = (trend) => {
        if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-500" />;
        if (trend === 'down') return <TrendingUp className="w-4 h-4 text-red-500 transform rotate-180" />;
        return <TrendingUp className="w-4 h-4 text-gray-500 transform rotate-90" />;
    };

    const getActivityIcon = (type) => {
        switch (type) {
            case 'speaking': return <MessageCircle className="w-4 h-4 text-blue-500" />;
            case 'meeting': return <Users className="w-4 h-4 text-green-500" />;
            case 'project': return <Target className="w-4 h-4 text-purple-500" />;
            case 'media': return <FileText className="w-4 h-4 text-orange-500" />;
            case 'internal': return <Building className="w-4 h-4 text-indigo-500" />;
            default: return <User className="w-4 h-4 text-gray-500" />;
        }
    };

    return (
        <div className="min-h-screen pt-[7vw] bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800">Profil Manager</h1>
                            <p className="text-gray-600 mt-2">PT Jamkrindo - Executive Leadership</p>
                        </div>
                        <img
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='50' viewBox='0 0 150 50'%3E%3Ctext x='10' y='30' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='%232563eb'%3EPT JAMKRINDO%3C/text%3E%3C/svg%3E"
                            alt="PT Jamkrindo Logo"
                            className="h-12"
                        />
                    </div>
                </div>

                {/* Manager Profile Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-700 px-8 py-12 text-white relative">
                        <div className="absolute top-6 right-6">
                            {isEditing ? (
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => setIsEditing(false)}
                                        className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-colors"
                                    >
                                        <Save className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => setIsEditing(false)}
                                        className="bg-red-500 hover:bg-red-600 p-3 rounded-full transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors backdrop-blur-sm"
                                >
                                    <Edit3 className="w-5 h-5" />
                                </button>
                            )}
                        </div>

                        <div className="flex items-center space-x-8">
                            <div className="relative">
                                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/30">
                                    <span className="text-4xl font-bold text-white">{manager.avatar}</span>
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-green-400 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                    <Crown className="w-6 h-6" />
                                    <span className="text-white/80">{manager.level}</span>
                                </div>
                                <h2 className="text-4xl font-bold mb-2">{manager.name}</h2>
                                <p className="text-xl text-white/90 mb-2">{manager.position}</p>
                                <p className="text-white/80 mb-4">{manager.department}</p>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white/80 text-sm">
                                    <span className="flex items-center">
                                        <Users className="w-4 h-4 mr-2" />
                                        {manager.teamSize}
                                    </span>
                                    <span className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {manager.experience} pengalaman
                                    </span>
                                    <span className="flex items-center">
                                        <Award className="w-4 h-4 mr-2" />
                                        {manager.achievements.length} penghargaan
                                    </span>
                                    <span className="flex items-center">
                                        <Briefcase className="w-4 h-4 mr-2" />
                                        ID: {manager.employeeId}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="bg-white rounded-t-2xl shadow-lg mb-0">
                    <div className="flex overflow-x-auto">
                        {[
                            { id: 'overview', label: 'Overview', icon: User },
                            { id: 'performance', label: 'Performance', icon: TrendingUp },
                            { id: 'skills', label: 'Skills & Experience', icon: Star },
                            { id: 'projects', label: 'Projects', icon: Target },
                            { id: 'achievements', label: 'Achievements', icon: Award },
                            { id: 'contact', label: 'Contact', icon: Mail }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap ${
                                    activeTab === tab.id
                                        ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                                <tab.icon className="w-4 h-4" />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="bg-white rounded-b-2xl shadow-lg p-8">
                    {activeTab === 'overview' && (
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Tentang</h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">{manager.bio}</p>

                                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                                    <h4 className="font-bold text-blue-800 mb-2">Visi Kepemimpinan</h4>
                                    <p className="text-blue-700 italic">"{manager.vision}"</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <h4 className="font-bold text-gray-800 mb-4">Informasi Personal</h4>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Tanggal Lahir:</span>
                                            <span className="font-medium">{manager.birthDate}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Kewarganegaraan:</span>
                                            <span className="font-medium">{manager.nationality}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Bahasa:</span>
                                            <span className="font-medium">{manager.languages.join(', ')}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <h4 className="font-bold text-gray-800 mb-4">Sertifikasi</h4>
                                    <div className="space-y-2">
                                        {manager.certifications.map((cert, index) => (
                                            <div key={index} className="bg-white p-3 rounded-lg border-l-3 border-green-400">
                                                <span className="font-medium text-gray-800">{cert}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <h4 className="font-bold text-gray-800 mb-4">Aktivitas Terkini</h4>
                                    <div className="space-y-3">
                                        {manager.recentActivities.slice(0, 3).map((activity, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                {getActivityIcon(activity.type)}
                                                <div className="flex-1">
                                                    <p className="text-sm font-medium text-gray-800">{activity.activity}</p>
                                                    <p className="text-xs text-gray-500">{activity.date}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'performance' && (
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Performance Indicators</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {manager.kpis.map((kpi, index) => (
                                    <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                                        <div className="flex items-center justify-between mb-4">
                                            <h4 className="font-semibold text-gray-800">{kpi.metric}</h4>
                                            {getTrendIcon(kpi.trend)}
                                        </div>
                                        <p className="text-3xl font-bold text-blue-600 mb-2">{kpi.value}</p>
                                        <p className="text-sm text-gray-600">{kpi.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'skills' && (
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Keahlian Utama</h3>
                                <div className="space-y-4">
                                    {manager.skills.map((skill, index) => (
                                        <div key={index} className="bg-gray-50 p-4 rounded-xl">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="font-semibold text-gray-800">{skill.name}</span>
                                                <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-3">
                                                <div
                                                    className={`h-3 rounded-full transition-all duration-500 ${getSkillColor(skill.level)}`}
                                                    style={{ width: `${skill.level}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Riwayat Pekerjaan</h3>
                                <div className="space-y-6">
                                    {manager.workHistory.map((work, index) => (
                                        <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-400">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="text-lg font-bold text-gray-800">{work.position}</h4>
                                                <span className="text-sm font-medium text-blue-600">{work.period}</span>
                                            </div>
                                            <p className="font-medium text-gray-700 mb-2">{work.company}</p>
                                            <p className="text-gray-600">{work.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}


                    {activeTab === 'projects' && (
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Proyek & Inisiatif</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {manager.projects.map((project, index) => (
                                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                        <div className="flex items-center justify-between mb-4">
                                            <h4 className="text-lg font-bold text-gray-800">{project.name}</h4>
                                            <span className={`px-3 py-1 rounded-full text-white text-xs font-medium ${getProjectStatusColor(project.status)}`}>
                                                {project.status}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 mb-4">{project.description}</p>
                                        <div className="mb-2">
                                            <div className="flex items-center justify-between text-sm mb-1">
                                                <span className="text-gray-500">Progress</span>
                                                <span className="font-medium">{project.completion}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                                                    style={{ width: `${project.completion}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'achievements' && (
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Pencapaian & Penghargaan</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {manager.achievements.map((achievement, index) => (
                                    <div key={index} className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border-l-4 border-yellow-400">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center">
                                                <Award className="w-6 h-6 text-yellow-600 mr-3" />
                                                <Star className="w-5 h-5 text-yellow-500" />
                                            </div>
                                            <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                                                {achievement.year}
                                            </span>
                                        </div>
                                        <h4 className="font-bold text-gray-800 text-lg mb-2">{achievement.title}</h4>
                                        <p className="text-gray-600 font-medium">{achievement.organization}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'contact' && (
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                                        <Mail className="w-6 h-6 text-blue-600 mr-4" />
                                        <div>
                                            <p className="text-sm text-gray-500">Email</p>
                                            <p className="font-semibold text-gray-800">{manager.email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                                        <Phone className="w-6 h-6 text-green-600 mr-4" />
                                        <div>
                                            <p className="text-sm text-gray-500">Telepon</p>
                                            <p className="font-semibold text-gray-800">{manager.phone}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                                        <MapPin className="w-6 h-6 text-red-600 mr-4" />
                                        <div>
                                            <p className="text-sm text-gray-500">Lokasi</p>
                                            <p className="font-semibold text-gray-800">{manager.location}</p>
                                        </div>
                                    </div>

                                    <div className="flex space-x-3 mt-6">
                                        <button className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors">
                                            <MessageCircle className="w-4 h-4" />
                                            <span>Send Message</span>
                                        </button>
                                        <button className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-colors">
                                            <Video className="w-4 h-4" />
                                            <span>Video Call</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Informasi Profesional</h3>
                                <div className="space-y-4">
                                    <div className="p-4 bg-indigo-50 rounded-xl">
                                        <div className="flex items-center mb-2">
                                            <Calendar className="w-5 h-5 text-indigo-600 mr-2" />
                                            <p className="text-sm text-gray-500">Tanggal Bergabung</p>
                                        </div>
                                        <p className="font-semibold text-gray-800">{manager.joinDate}</p>
                                    </div>

                                    <div className="p-4 bg-indigo-50 rounded-xl">
                                        <div className="flex items-center mb-2">
                                            <GraduationCap className="w-5 h-5 text-purple-600 mr-2" />
                                            <p className="text-sm text-gray-500">Pendidikan</p>
                                        </div>
                                        <p className="font-semibold text-gray-800">{manager.education}</p>
                                    </div>

                                    <div className="p-4 bg-indigo-50 rounded-xl">
                                        <div className="flex items-center mb-2">
                                            <Users className="w-5 h-5 text-teal-600 mr-2" />
                                            <p className="text-sm text-gray-500">Tim yang Dipimpin</p>
                                        </div>
                                        <p className="font-semibold text-gray-800">{manager.teamSize}</p>
                                    </div>

                                    <div className="p-4 bg-indigo-50 rounded-xl">
                                        <div className="flex items-center mb-2">
                                            <Briefcase className="w-5 h-5 text-orange-600 mr-2" />
                                            <p className="text-sm text-gray-500">Total Pengalaman</p>
                                        </div>
                                        <p className="font-semibold text-gray-800">{manager.experience}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Page;