import Link from "next/link";

const Docs = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Maaf...</h1>
        <p className="text-lg mb-6">Halaman ini sedang dalam pengembangan</p>
        <Link href="/" className="bg-cyan-600 py-2 px-4 rounded-md text-white hover:bg-cyan-900 hover:shadow-md hover:text-yellow-100">Kembali</Link>
      </div>
    </div>
  );
}

export default Docs;
