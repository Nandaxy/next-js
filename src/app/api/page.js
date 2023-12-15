import Link from "next/link";
import Navbar from "@/components/home/Navbar";
import Dashboard from "@/components/api/page/Dashboard";


const PageApi = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[url('/bannerApiLight.png')] dark:bg-[url('https://telegra.ph/file/d1d66b8cb4298708d687c.jpg')] bg-cover min-h-screen flex flex-col justify-center text-white">
        <div className="p-8 md:pl-16 mt-4">
          <h1 className="-z-10 text-[40px] md:text-[80px] max-w-2xl font-bold mb-4 dark:text-red-600 ">
            Selamat Datang Di Api Nanda
          </h1>
          <p className="dark:text-gray-200/50 max-w-4xl text-xs md:text-md stroke-slate-950">
            Nanda API adalah platform REST API yang handal dan mudah digunakan.
            Dengan antarmuka yang intuitif, pengguna dapat mengakses dan
            mengintegrasikan berbagai sumber daya data dengan mudah. Keamanan
            yang kuat dan skalabilitas membuat Nanda API menjadi pilihan yang
            tepat untuk mengembangkan aplikasi yang terhubung dengan sistem
            lain.
          </p>
          <div className="pt-8">
          <Link className="inline-block bg-[#007385] dark:bg-red-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-[#28656e] dark:hover:bg-red-600 hover:shadow-lg hover:translate-x-2" href="/api/mulai">Coba sekarang! ➨</Link>

          </div>
        </div>
      </div>
      <Dashboard/>
    </>
  );
};

export const metadata = {
  title: "API - Nanda",
  description: "Explore a world of free APIs for your projects.",
};

export default PageApi;
