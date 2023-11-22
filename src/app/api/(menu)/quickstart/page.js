import Link from "next/link";
import NavPage from "@/components/navPage";
import PlainText from "@/components/tools/plainText";

const Quickstart = () => {
  return (
    <div className="pr-8">
      <h2 className="text-apiPrimary font-bold">Get Started</h2>
      <h2 className="font-bold text-4xl my-2">Quickstart</h2>
      <p className="font-medium">Lorem ipsum</p>
      <div className="mt-10">
        <p className="text-m mb-4 text-gray-800 dark:text-gray-200">
          Selamat datang di QuickStar, tempat Anda menemukan akses cepat dan
          mudah ke berbagai fitur menarik melalui endpoint khusus kami. Berikut
          adalah panduan singkat tentang cara memanfaatkan layanan kami:
        </p>
        <h2 className="text-m mb-4 text-gray-800 dark:text-gray-200 font-bold">
          1. Get Image Anime Random:
        </h2>
        <p className="text-m mb-4 text-gray-800 dark:text-gray-200">
          Untuk mendapatkan gambar anime acak, Anda dapat menggunakan endpoint
          berikut:
        </p>
        <p className="text-m mb-4 text-gray-800 dark:text-gray-200">
          Cara Penggunaan:
        </p>
        <PlainText content="https://nandabuqori.xyz/api/anime?name=sasuke" />
        <div className="px-6 pt-4">
          <ul className="list-disc">
            <li>Kirim permintaan GET ke endpoint di atas.</li>
            <li>Dapatkan respons berupa gambar karakter anime acak setiap kali Anda melakukan panggilan</li>
            <li>parameter ?name=*** bisa dilihat di <Link href="/api/api-reference/anime" className="text-darkPrimary font-bold">Sini</Link></li>
          </ul> 
        </div>
      </div>
      <NavPage
        previousUrl="/api/mulai"
        previousName="Introduction"
        nextUrl="/api/api-reference/anime"
        nextName="Anime"
      />
    </div>
  );
};
export const metadata = {
  title: "API - Quickstart",
  description: "Explore a world of free APIs for your projects.",
};
export default Quickstart;
