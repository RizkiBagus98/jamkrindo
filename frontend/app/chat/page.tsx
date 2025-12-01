"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";

interface Message {
    id: number;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

const ChatPage = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Halo! Selamat datang di Jamkrindo Madiun. Ada yang bisa saya bantu?",
            sender: "bot",
            timestamp: new Date(),
        },
    ]);
    const [inputMessage, setInputMessage] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const [showLoginModal, setShowLoginModal] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get("token");
        setIsLoggedIn(!!token);
    }, []);

    useEffect(() => {
        if (!isLoggedIn && messages.length >= 10) {
            setShowLoginModal(true); // Tampilkan modal, bukan redirect paksa
        }
    }, [messages, isLoggedIn]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [messages, isGenerating]);

    const addMessage = (text: string, sender: "user" | "bot") => {
        const newMessage: Message = {
            id: Date.now() + Math.random(),
            text,
            sender,
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, newMessage]);
    };

    const handleSendMessage = async (messageText?: string) => {
        const textToSend = (messageText || inputMessage).trim();
        // Jangan kirim pesan jika modal aktif
        if (!textToSend || isGenerating || showLoginModal) return;

        setInputMessage("");
        addMessage(textToSend, "user");
        setIsGenerating(true);

        const historyForApi = messages.slice(1).map((msg) => ({
            role: msg.sender === "user" ? "user" : "model",
            parts: [{ text: msg.text }],
        }));

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ history: historyForApi, message: textToSend }),
            });

            if (!response.ok) throw new Error("Gagal mendapatkan respon dari server.");

            const data = await response.json();
            addMessage(data.text, "bot");
        } catch (error) {
            console.error("Error:", error);
            addMessage("Maaf, terjadi kesalahan. Silakan coba lagi.", "bot");
        } finally {
            setIsGenerating(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const formatTime = (date: Date) =>
        date.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });

    const examplePrompts = [
        "Apa saja produk penjaminan?",
        "Bagaimana proses klaim?",
        "Di mana alamat kantor Madiun?",
    ];

    return (
        <div className="flex flex-col h-screen bg-gray-800 text-white">
            <header className="bg-gray-900 flex justify-between py-4 px-[100px] border-b border-gray-700">
                <div className="max-w-4xl flex items-center space-x-3">
                    <div className="p-2 bg-blue-600 rounded-lg"><Bot className="w-6 h-6" /></div>
                    <div>
                        <h1 className="text-lg font-semibold">Jamkrindo Assistant</h1>
                        <p className="text-xs text-green-400">● Online</p>
                    </div>
                </div>
                <Link href={"/login"} className="px-5 py-2 bg-blue-600 rounded-lg">Login</Link>
            </header>
            
            <main className="flex-1 overflow-y-auto">
                 <div className="max-w-3xl mx-auto px-4 py-8">
                    {messages.length === 1 && (
                         <div className="text-center my-16 animate-fade-in">
                            <div className="inline-block p-4 bg-gray-700 rounded-full"><MessageCircle size={40} className="text-blue-600" /></div>
                            <h2 className="mt-6 text-3xl font-bold text-gray-200">Mulai Percakapan</h2>
                            <p className="mt-2 text-gray-400">Tanyakan apa saja tentang layanan Jamkrindo Madiun.</p>
                            <div className="mt-8 flex flex-wrap justify-center gap-3">
                                {examplePrompts.map(prompt => (
                                    <button
                                        key={prompt}
                                        onClick={() => handleSendMessage(prompt)}
                                        className="bg-gray-700 hover:bg-gray-600 transition-colors text-sm text-gray-200 px-4 py-2 rounded-lg"
                                    >
                                        {prompt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                
                    <div className="space-y-8">
                         {messages.map((message) => (
                            <div key={message.id} className={`flex items-start gap-4 animate-fade-in-up ${message.sender === "user" ? "justify-end" : ""}`}>
                                {message.sender === "bot" && (<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center"><Bot className="w-5 h-5" /></div>)}
                                <div className={`max-w-md ${message.sender === 'user' ? 'order-2' : ''}`}>
                                    <div className={`px-4 py-3 rounded-lg ${message.sender === "user" ? "bg-blue-600" : "bg-gray-700 text-gray-200"}`}>
                                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                                    </div>
                                    <span className={`text-xs text-gray-500 mt-1 px-1 ${message.sender === 'user' ? 'text-right block' : ''}`}>{formatTime(message.timestamp)}</span>
                                </div>
                                {message.sender === "user" && (<div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center order-1"><User className="w-5 h-5" /></div>)}
                            </div>
                        ))}

                        {isGenerating && (
                            <div className="flex items-start gap-4 animate-fade-in-up">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center"><Bot className="w-5 h-5" /></div>
                                <div className="bg-gray-700 rounded-lg px-4 py-4">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div><div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>
            </main>

            <footer className="p-4 bg-gray-800 border-t border-gray-700">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center bg-gray-700 rounded-lg p-2 border border-gray-600 focus-within:border-purple-500 transition-colors">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder={showLoginModal ? "Silakan login untuk melanjutkan..." : "Ketik pesan Anda..."}
                            className="flex-1 bg-transparent focus:outline-none px-2 text-sm text-gray-200 placeholder-gray-400"
                            disabled={isGenerating || showLoginModal}
                        />
                        <button
                            onClick={() => handleSendMessage()}
                            disabled={isGenerating || !inputMessage.trim() || showLoginModal}
                            className="p-2 bg-blue-600 text-white rounded-md disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-blue-500 transition-colors"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </footer>

            {/* [BARU] Komponen Modal/Popup untuk Login */}
            {showLoginModal && (
                <div className="fixed inset-0 bg-black/50 bg-opacity-70 flex justify-center items-center z-50 animate-fade-in">
                    <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 max-w-sm w-full mx-4 shadow-2xl transform transition-all animate-fade-in-up">
                        <div className="text-center">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-600">
                                <MessageCircle className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="mt-4 text-lg leading-6 font-medium text-white">
                                Batas Percakapan Tercapai
                            </h3>
                            <div className="mt-2 px-4">
                                <p className="text-sm text-gray-400">
                                    Anda telah mencapai batas percakapan sebagai tamu. Silakan login untuk melanjutkan.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-center gap-4">
                            <button
                                type="button"
                                onClick={() => router.push("/login")}
                                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                            >
                                Login Sekarang
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatPage;