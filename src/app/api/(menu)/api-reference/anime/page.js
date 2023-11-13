import ApiTestComponent from "@/components/api/ApiTestComponent";
import Link from "next/link";

const AnimeReference = () => {
  return (
    <div className="pr-8">
      <h2 className="text-apiPrimary font-bold">Random Image</h2>
      <h2 className="font-bold text-4xl my-2">Anime</h2>
      <p className="font-medium">Lorem ipsum</p>
      <div className="mt-10">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200 dark:bg-dark">
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
              <th className="py-2 px-4 border-b text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b text-left">Nijika</td>
              <td className="py-2 px-4 border-b text-left">jpg/png</td>
              <td className="py-2 px-4 border-b text-left">
                <ApiTestComponent apiUrl="/api/anime/nijika" />
              </td>
              <td className="py-2 px-4 border-b text-left">
                <Link href="/api/anime/nijika" className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                  GET
                </Link>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b text-left">Ikuyo</td>
              <td className="py-2 px-4 border-b text-left">jpg/png</td>
              <td className="py-2 px-4 border-b text-left">
                <ApiTestComponent apiUrl="/api/anime/ikuyo" />
              </td>
              <td className="py-2 px-4 border-b text-left">
              <Link href="/api/anime/ikuyo" className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                  GET
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnimeReference;
