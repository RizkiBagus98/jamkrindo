'use client'

import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "next/navigation";

const DetailBerita = () => {
    const [berita, setBerita] = useState<any>(null);
    const {id} = useParams();

    useEffect(() => {
        const fetchDetailBerita = async () => {
            try {
                if (!id) return;
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/berita/detail/${id}`);
                setBerita(response.data);
            } catch (error) {
                console.error("Error fetching berita detail:", error);
            }
        };

        fetchDetailBerita();
    }, [id]);

    if (!berita) return (
        <div className="flex justify-center items-center min-h-screen">
            <p className="text-gray-500 text-lg animate-pulse">Loading berita...</p>
        </div>
    );

    return (
        <div className="max-w-screen mx-auto mt-32 px-10">
            <div className="rounded-xl overflow-hidden shadow-md">
                <img
                    src={`http://localhost:5001${berita.image}`}
                    alt={berita.title}
                    className="w-full h-72 object-cover rounded-xl transition-all duration-300 hover:scale-105"
                />
            </div>

            <h1 className="mt-6 text-3xl font-bold text-gray-900 leading-tight">
                {berita.title}
            </h1>

            <article className="prose lg:prose-lg prose-slate mt-4 max-w-none">
                <p>{berita.description}</p>
            </article>
        </div>
    );
};

export default DetailBerita;
