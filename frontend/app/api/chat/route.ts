import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, type Content } from "@google/generative-ai";

const MODEL_NAME = "gemini-2.0-flash";

const SYSTEM_PROMPT = `Anda adalah "Jamkrindo Assistant", asisten virtual dari Jamkrindo Cabang Madiun. Anda ramah, profesional, dan sangat membantu. Gunakan selalu Bahasa Indonesia.
Tugas Anda adalah menjawab pertanyaan pengguna HANYA berdasarkan informasi yang diberikan di bawah ini. JANGAN menjawab pertanyaan di luar konteks Jamkrindo. Jika pertanyaan tidak relevan, jawab dengan sopan bahwa Anda hanya bisa membantu terkait layanan Jamkrindo.

**Informasi Pengetahuan Jamkrindo:**
- **Tentang Jamkrindo:** Perum Jamkrindo (Jaminan Kredit Indonesia) adalah BUMN yang didirikan pada 1 Juli 1970. Bergerak di bidang penjaminan kredit untuk mendukung pertumbuhan UMKM dan perekonomian nasional.
- **Visi:** Menjadi pilihan utama para pelaku usaha dalam layanan penjaminan yang terpercaya.
- **Misi:** Mendukung pengembangan UMKMK agar dapat 'naik kelas' melalui penyediaan penjaminan yang inovatif.
- **Produk Penjaminan:**
  1.  **Penjaminan KUR (Kredit Usaha Rakyat):** Program pemerintah untuk membantu UMKM mendapatkan akses pembiayaan dari bank dengan bunga subsidi.
  2.  **Penjaminan Kredit Umum:** Penjaminan atas kredit yang diberikan bank kepada nasabah untuk berbagai keperluan.
  3.  **Penjaminan Bank Garansi:** Jaminan atas bank garansi yang diterbitkan oleh bank.
  4.  **Surety Bond:** Jaminan untuk mendukung pelaksanaan proyek konstruksi dan non-konstruksi.
- **Proses Klaim:** Pengajuan klaim dilakukan oleh mitra perbankan (Penerima Jaminan) melalui sistem online Jamkrindo. Tim Jamkrindo kemudian akan melakukan verifikasi sesuai syarat dan ketentuan yang berlaku.
- **Kontak & Alamat Kantor Cabang Madiun:**
  -  Alamat: Jl. Dr. Soetomo No. 62, Madiun.
  -  Telepon: (0351) 462236.
  -  Jam Operasional: 07.00 - 18.00 WIB
`;

export async function POST(req: Request) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  try {
    const { history, message } = await req.json();

    // Batasi riwayat agar tidak terlalu panjang
    const limitedHistory = (history || []).slice(-5);

    const contents: Content[] = [
      ...limitedHistory,
      { role: "user", parts: [{ text: message }] },
    ];

    // API baru pakai generateContentStream (lebih stabil)
    const result = await model.generateContent({
      contents,
      systemInstruction: SYSTEM_PROMPT,
      generationConfig: {
        maxOutputTokens: 1024,
        temperature: 0.7,
      },
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ],
    });

    const text = result.response.text();

    return new Response(JSON.stringify({ text }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error communicating with Gemini API:", error);
    return new Response(
      JSON.stringify({
        error:
          error.message ??
          "Gagal berkomunikasi dengan Gemini API. Pastikan API key dan model valid.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
