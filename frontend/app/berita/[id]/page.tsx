'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

const DetailBerita = () => {
  const [berita, setBerita] = useState<any>(null);
  const { id } = useParams(); // Mendapatkan ID dari URL

  useEffect(() => {
    const fetchDetailBerita = async () => {
      try {
        if (!id) return; // Menunggu ID tersedia
        const response = await axios.get(`http://localhost:5000/api/berita/detail/${id}`); // Ganti dengan endpoint yang sesuai
        setBerita(response.data);
      } catch (error) {
        console.error("Error fetching berita detail:", error);
      }
    };

    fetchDetailBerita();
  }, [id]);

  if (!berita) return <div>Loading...</div>;

  return (
    <div className="w-full h-full mt-[8rem] px-10">
      <div className="mt-5">
        <img src={`http://localhost:5000${berita.image}`} alt={berita.title} className="w-screen h-[40vw] object-cover" />
        <h1 className="text-4xl font-bold mt-5">{berita.title}</h1>
      </div>
      <p className="mt-5 text-xl">{berita.description}</p>
    </div>
  );
};

export default DetailBerita;
