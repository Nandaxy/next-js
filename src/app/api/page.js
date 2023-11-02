import Link from "next/link";

const PageApi = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-2xl md:text-4xl  font-bold mb-4">Welcome to the Free API World</h1>
      <p className="md:text-lg text-sm mb-8">Explore a world of free APIs for your projects.</p>
      <Link
        href="/api/mulai"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
      >
        Get started
      </Link>
    </div>
  );
};

export default PageApi;
