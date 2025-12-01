"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface Message {
    id: number;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

const ChatBot = () => {
    const [showChat, setShowChat] = useState(false);
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

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (showChat) {
            const token = Cookies.get("token");
            setIsLoggedIn(!!token);
        }
    }, [showChat]);

    useEffect(() => {
        if (!isLoggedIn && messages.length >= 11) { 
            alert("Anda telah mencapai batas percakapan. Silakan login untuk melanjutkan.");
            router.push("/login");
        }
    }, [messages, isLoggedIn, router]);

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
        if (!textToSend || isGenerating) return;

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
        <>
            {/* Floating Chat Button */}
            <div className="fixed right-6 bottom-6 z-40">
                <button
                    onClick={() => setShowChat(true)}
                    className="group relative w-16 h-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center transform hover:scale-110 active:scale-95 border border-blue-400/20"
                >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1 .2 0 .5-.1.7-.3L14.6 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
                    </svg>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white animate-pulse"></div>
                </button>
            </div>

            {/* Chat Window Modal */}
            {showChat && (
                <div className="fixed inset-0 flex items-end justify-end z-50 p-4 animate-fade-in-fast">
                    <div className="bg-gray-800 text-white rounded-3xl shadow-2xl w-96 max-w-full h-[700px] max-h-[90vh] flex flex-col overflow-hidden border border-gray-700 transform transition-all duration-300 scale-100">
                        {/* Header (Dark Theme) */}
                        <header className="bg-gray-900 p-4 border-b border-gray-700 flex-shrink-0">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-purple-600 rounded-lg"><Bot className="w-6 h-6" /></div>
                                    <div>
                                        <h1 className="text-lg font-semibold">Jamkrindo Assistant</h1>
                                        <p className="text-xs text-green-400">● Online</p>
                                    </div>
                                </div>
                                <button onClick={() => setShowChat(false)} className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-700 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </header>
                        
                        {/* Main Chat Area (Dark Theme) */}
                        <main className="flex-1 overflow-y-auto p-4">
                            <div className="space-y-8">
                                {messages.length === 1 && (
                                    <div className="text-center my-8 animate-fade-in">
                                        <div className="inline-block p-4 bg-gray-700 rounded-full"><MessageCircle size={40} className="text-purple-400" /></div>
                                        <h2 className="mt-6 text-2xl font-bold text-gray-200">Mulai Percakapan</h2>
                                        <p className="mt-2 text-sm text-gray-400">Tanyakan apa saja tentang Jamkrindo.</p>
                                        <div className="mt-6 grid grid-cols-2 gap-2 text-sm">
                                            {examplePrompts.map(prompt => (
                                                <button key={prompt} onClick={() => handleSendMessage(prompt)} className="bg-gray-700 hover:bg-gray-600 transition-colors text-gray-200 p-3 rounded-lg text-left">
                                                    {prompt}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {messages.map((message) => (
                                    <div key={message.id} className={`flex items-start gap-3 animate-fade-in-up ${message.sender === "user" ? "justify-end" : ""}`}>
                                        {message.sender === "bot" && (<div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center"><Bot className="w-5 h-5" /></div>)}
                                        <div className={`max-w-[85%] ${message.sender === 'user' ? 'order-2' : ''}`}>
                                            <div className={`px-4 py-3 rounded-2xl ${message.sender === "user" ? "bg-blue-600 text-white rounded-br-lg" : "bg-gray-700 text-gray-200 rounded-bl-lg"}`}>
                                                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                                            </div>
                                            <span className={`text-xs text-gray-500 mt-1.5 px-1 ${message.sender === 'user' ? 'text-right block' : ''}`}>{formatTime(message.timestamp)}</span>
                                        </div>
                                        {message.sender === "user" && (<div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center order-1"><User className="w-5 h-5" /></div>)}
                                    </div>
                                ))}
                                {isGenerating && (
                                    <div className="flex items-start gap-3 animate-fade-in-up">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center"><Bot className="w-5 h-5" /></div>
                                        <div className="bg-gray-700 rounded-2xl rounded-bl-lg px-4 py-4">
                                            <div className="flex space-x-1.5">
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </main>

                        {/* Footer/Input (Dark Theme) */}
                        <footer className="p-4 bg-gray-900 border-t border-gray-700 flex-shrink-0">
                            {!isLoggedIn && (
                                <div className="text-xs text-center text-yellow-400 bg-yellow-900/50 rounded p-2 mb-3">
                                    Batas percakapan untuk tamu: {Math.max(0, 10 - messages.length)} pesan lagi.
                                </div>
                            )}
                            <div className="flex items-center bg-gray-700 rounded-lg p-2 border border-gray-600 focus-within:border-purple-500 transition-colors">
                                <input
                                    type="text"
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ketik pesan Anda..."
                                    className="flex-1 bg-transparent focus:outline-none px-2 text-sm text-gray-200 placeholder-gray-400"
                                    disabled={isGenerating}
                                />
                                <button
                                    onClick={() => handleSendMessage()}
                                    disabled={isGenerating || !inputMessage.trim()}
                                    className="p-2 bg-blue-600 text-white rounded-md disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-blue-500 transition-colors"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </footer>
                    </div>
                </div>
            )}
            <style jsx global>{`
                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                @keyframes fade-in-up { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                .animate-fade-in-fast { animation: fade-in 0.2s ease-out forwards; }
                .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
                .animate-fade-in-up { animation: fade-in-up 0.4s ease-out forwards; }
            `}</style>
        </>
    );
};

export default ChatBot;