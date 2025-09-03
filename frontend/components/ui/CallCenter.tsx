"use client";

import React, { useState, useRef, useEffect } from "react";

const ChatBot = () => {
    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Halo! 👋 Selamat datang di Jamkrindo Madiun. Ada yang bisa saya bantu terkait layanan penjaminan?",
            sender: "bot",
            timestamp: new Date(),
        },
    ]);
    const [inputMessage, setInputMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const addMessage = (text, sender) => {
        const newMessage = {
            id: Date.now() + Math.random(),
            text,
            sender,
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, newMessage]);
    };

    const handleSendMessage = () => {
        if (!inputMessage.trim()) return;

        const userMessage = inputMessage.trim();
        setInputMessage("");
        addMessage(userMessage, "user");

        setLoading(true);
        setTimeout(() => {
            addMessage(getBotResponse(userMessage), "bot");
            setLoading(false);
        }, 1000);
    };

    const getBotResponse = (message) => {
        const msg = message.toLowerCase();

        if (msg.includes("halo") || msg.includes("hai") || msg.includes("hello")) {
            return "Halo! 👋 Selamat datang di Jamkrindo Madiun. Ada yang bisa saya bantu terkait layanan penjaminan?";
        }

        if (msg.includes("produk") || msg.includes("penjaminan")) {
            return "📌 Jamkrindo Madiun menyediakan produk penjaminan kredit, penjaminan KUR, penjaminan bank garansi, serta penjaminan surety bond.";
        }

        if (msg.includes("kur")) {
            return "💰 KUR (Kredit Usaha Rakyat) adalah produk yang dijamin Jamkrindo untuk membantu UMKM mendapatkan akses pembiayaan dengan bunga rendah.";
        }

        if (msg.includes("klaim")) {
            return "📝 Proses klaim penjaminan dapat diajukan melalui bank/lembaga mitra. Dokumen klaim diverifikasi oleh tim Jamkrindo sebelum diproses lebih lanjut.";
        }

        if (msg.includes("kontak") || msg.includes("alamat") || msg.includes("kantor")) {
            return "📍 Kantor Jamkrindo Cabang Madiun: Jl. Dr. Soetomo No. 62, Madiun. 📞 Telepon: (0351) 462236.";
        }

        if (msg.includes("sejarah")) {
            return "📖 Jamkrindo didirikan tahun 1970 sebagai Lembaga Penjamin Kredit Koperasi (LJKK), kemudian berkembang menjadi BUMN penjaminan nasional.";
        }

        if (msg.includes("visi") || msg.includes("misi")) {
            return "🎯 Visi Jamkrindo: menjadi perusahaan penjaminan terdepan yang mendukung UMKM naik kelas. Misi: memberikan layanan penjaminan yang profesional, modern, dan terpercaya.";
        }

        if (msg.includes("terima kasih") || msg.includes("thanks")) {
            return "🙏 Sama-sama! Senang bisa membantu. Jangan ragu untuk menghubungi Jamkrindo Madiun kapan saja.";
        }

        return "🤔 Terima kasih atas pertanyaannya. Untuk informasi lebih detail, silakan hubungi kantor Jamkrindo Madiun agar kami bisa membantu lebih lanjut.";
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const QuickActions = () => (
        <div className="p-4 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white">
            <p className="text-sm font-medium text-gray-700 mb-3">
                💡 Pertanyaan Populer:
            </p>
            <div className="grid grid-cols-2 gap-2">
                {[
                    { text: "🏦 Produk Penjaminan", value: "Produk Penjaminan" },
                    { text: "💰 Info KUR", value: "Info KUR" },
                    { text: "📄 Cara Klaim", value: "Cara Klaim" },
                    { text: "☎️ Kontak Kantor", value: "Kontak Kantor" },
                    { text: "📖 Sejarah Jamkrindo", value: "Sejarah Jamkrindo" },
                    { text: "🎯 Visi & Misi", value: "Visi dan Misi Jamkrindo" },
                ].map((action) => (
                    <button
                        key={action.value}
                        onClick={() => {
                            setInputMessage(action.value);
                            setTimeout(() => handleSendMessage(), 100);
                        }}
                        className="px-3 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-sm rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 border border-blue-100 text-blue-700 font-medium shadow-sm hover:shadow-md transform hover:scale-105"
                    >
                        {action.text}
                    </button>
                ))}
            </div>
        </div>
    );

    const TypingIndicator = () => (
        <div className="flex justify-start mb-4">
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 backdrop-blur-sm p-4 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-bounce"></div>
                    <div
                        className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                        className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                    ></div>
                    <span className="text-xs text-gray-500 ml-2">
            AI sedang mengetik...
          </span>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Floating Chat Button */}
            <div className="fixed right-6 bottom-6 z-40">
                <button
                    onClick={() => setShowChat(true)}
                    className="group relative w-16 h-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center transform hover:scale-110 active:scale-95 border border-blue-400/20"
                >
                    <svg
                        className="w-7 h-7 relative z-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1 .2 0 .5-.1.7-.3L14.6 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
                    </svg>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white animate-pulse"></div>
                </button>
            </div>

            {/* Chat Window */}
            {showChat && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-end justify-end z-50 p-4">
                    <div className="bg-white rounded-3xl shadow-2xl w-96 h-[600px] flex flex-col overflow-hidden border border-gray-200 transform transition-all duration-300 scale-100">
                        {/* Header */}
                        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white p-6 rounded-t-3xl">
                            <div className="relative z-10 flex justify-between items-center">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Jamkrindo Bot</h3>
                                        <div className="flex items-center space-x-1">
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                            <p className="text-sm text-blue-100">
                                                Online • Siap membantu
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowChat(false)}
                                    className="text-white/80 hover:text-white hover:bg-white/10 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/10"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50/50 to-white">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${
                                        message.sender === "user"
                                            ? "justify-end"
                                            : "justify-start"
                                    } animate-fadeIn`}
                                >
                                    <div
                                        className={`max-w-[85%] p-4 rounded-2xl ${
                                            message.sender === "user"
                                                ? "bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-br-md shadow-lg border border-blue-500/20"
                                                : "bg-gradient-to-br from-white to-gray-50 text-gray-800 rounded-bl-md shadow-sm border border-gray-200"
                                        }`}
                                    >
                                        <p className="text-sm leading-relaxed">{message.text}</p>
                                        <p
                                            className={`text-xs mt-2 ${
                                                message.sender === "user"
                                                    ? "text-blue-100"
                                                    : "text-gray-500"
                                            }`}
                                        >
                                            {message.timestamp.toLocaleTimeString("id-ID", {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {loading && <TypingIndicator />}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Actions */}
                        {messages.length <= 1 && <QuickActions />}

                        {/* Input Area */}
                        <div className="p-4 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
                            <div className="flex items-center space-x-3 bg-white rounded-2xl border border-gray-200 p-2 shadow-sm">
                                <input
                                    type="text"
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ketik pertanyaan tentang Jamkrindo..."
                                    className="flex-1 px-3 py-2 focus:outline-none text-gray-700 placeholder-gray-400"
                                    disabled={loading}
                                />
                                <button
                                    onClick={handleSendMessage}
                                    disabled={loading || !inputMessage.trim()}
                                    className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-2 rounded-xl hover:from-blue-700 hover:to-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                                >
                                    {loading ? (
                                        <svg
                                            className="w-5 h-5 animate-spin"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                    ) : (
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 text-center">
                                Powered by AI • Tekan Enter untuk kirim
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
        </>
    );
};

export default ChatBot;
