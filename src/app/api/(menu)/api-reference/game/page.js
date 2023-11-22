import Link from "next/link";
import ApiTestComponent from "@/components/api/ApiTest";
import NavPage from "@/components/navPage";

const AnimeReference = () => {
  return (
    <div className="pr-8">
      <h2 className="text-apiPrimary font-bold">Fun</h2>
      <h2 className="font-bold text-4xl my-2">Game</h2>
      <p className="font-medium">Lorem ipsum</p>
      <div className="mt-10">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200 dark:bg-dark">
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Params</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
              <th className="py-2 px-4 border-b text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b text-left">Tebak Gambar</td>
              <td className="py-2 px-4 border-b text-left">Json</td>
              <td className="py-2 px-4 border-b text-left">?pics / ?index=1</td>
              <td className="py-2 px-4 border-b text-left">
              <ApiTestComponent apiUrl="/api/game/tebak-gambar" />
              </td>
              <td className="py-2 px-4 border-b text-left">
                <Link href="/api/game/tebak-gambar" className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                  GET
                </Link>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b text-left">Siapakah Aku</td>
              <td className="py-2 px-4 border-b text-left">Json</td>
              <td className="py-2 px-4 border-b text-left">?pics / ?index=1</td>
              <td className="py-2 px-4 border-b text-left">
              <ApiTestComponent apiUrl="/api/game/siapakah-aku" />
              </td>
              <td className="py-2 px-4 border-b text-left">
                <Link href="/api/game/siapakah-aku" className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                  GET
                </Link>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b text-left">Tebak bendera</td>
              <td className="py-2 px-4 border-b text-left">Json</td>
              <td className="py-2 px-4 border-b text-left">?pics</td>
              <td className="py-2 px-4 border-b text-left">
              <ApiTestComponent apiUrl="/api/game/tebak-bendera" />
              </td>
              <td className="py-2 px-4 border-b text-left">
                <Link href="/api/game/tebak-bendera" className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                  GET
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <NavPage
        previousUrl="/api/api-reference/anime"
        previousName="Anime"
        nextUrl=""
        nextName=""
      />
    </div>
  );
};
export const metadata = {
  title: 'API - Game',
  description: 'Explore a world of free APIs for your projects.',
}
export default AnimeReference;
