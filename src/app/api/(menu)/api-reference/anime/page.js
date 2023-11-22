import TabelApi from "@/components/api/tabel";
import NavPage from "@/components/navPage";

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
            <TabelApi />
          </tbody>
        </table>
      </div>
      <NavPage
        previousUrl="/api/quickstart"
        previousName="Quicstart"
        nextUrl="/api/api-reference/game"
        nextName="Game"
      />
    </div>
  );
};
export const metadata = {
  title: "API - Anime",
  description: "Explore a world of free APIs for your projects.",
};
export default AnimeReference;
