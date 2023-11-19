import Link from 'next/link';

const GetStarted = () => {
  return (
    <div id="mulai" className="container mx-auto h-screen md:h-[70vh] pb-36">
      <header className="text-center my-10">
        <h1 className="text-4xl font-bold">Get Started</h1>
        <p className="mt-4 text-lg">Mau kemana nih...</p>
      </header>

      <section  className="flex flex-col justify-center items-center my-20 sm:flex-row sm:justify-around">
        <div className="w-full max-w-sm p-6 bg-gray-200 dark:bg-gray-800 rounded shadow-lg mb-8 sm:mb-0">
          <h2 className="text-xl font-bold mb-2">Blog</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Baca artikel terbaru kami di blog.
          </p>
          <Link href="/blog" className="text-blue-500 hover:underline mx-2">
            Lihat Blog
          </Link>
        </div>

        <div className="max-w-sm p-6 bg-gray-200 dark:bg-gray-800 rounded shadow-lg mb-8 sm:mb-0">
          <h2 className="text-xl font-bold mb-2">Documentation</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Dapatkan informasi detail di dokumentasi kami.
          </p>
          <Link href="/docs" className="text-blue-500 hover:underline mx-2">
            Lihat Dokumentasi
          </Link>
        </div>

        <div className="max-w-sm p-6 bg-gray-200 dark:bg-gray-800 rounded shadow-lg">
          <h2 className="text-xl font-bold mb-2">API</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Jelajahi API kami untuk integrasi lebih lanjut.
          </p>
          <Link href="/api" className="text-blue-500 hover:underline mx-2">
            Lihat API
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;

