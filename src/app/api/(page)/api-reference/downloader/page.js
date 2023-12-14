import Link from "next/link";

import NavPage from "@/components/navPage";
import PlayIcon from "@/components/api/PlayIcon";
import TabelHead from "@/components/api/tabelHead";
import apiData from "@/components/api/apiData";

const DownloadReference = () => {
  const downloaderEndpoints = apiData.filter(
    (category) => category.category === "downloader"
  )[0].endpoints;

  const sortedDownloaderEndpoints = [...downloaderEndpoints].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  return (
    <div className="pr-8">
      <h2 className="text-apiPrimary font-bold text-xl">Downloader</h2>
      <div className="mt-10 w-full overflow-x-auto lg:overflow-x-hidden">
        <table className="min-w-full bg-white dark:bg-dark border dark:border-[#2c2c2c] rounded-lg">
          <TabelHead />

          <tbody>
            {sortedDownloaderEndpoints.map((endpoint, index) => (
              <tr
                key={endpoint.id}
                className="hover:bg-gray-100 dark:hover:bg-[#161616] dark:border-[#2c2c2c]"
              >
                <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-center">
                  {index + 1}
                </td>
                <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
                  {endpoint.name}
                </td>
                <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                  {endpoint.method}
                </td>
                <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
                  {endpoint.description}
                </td>
                <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                  {endpoint.queryParameter}
                </td>
                <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                  {endpoint.status}
                </td>
                <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-center">
                  <Link
                    href={endpoint.link}
                    className="w-full block p-2 rounded-lg"
                  >
                    <div className=" rounded-lg">
                      <PlayIcon />
                    </div>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <NavPage
        previousUrl="/api/api-reference/ai"
        previousName="OpenAI"
        nextUrl="/api/api-reference/islami"
        nextName="Islami"
      />
    </div>
  );
};

export const metadata = {
  title: "API - Downloader",
  description: "Explore a world of free APIs for your projects.",
};
export default DownloadReference ;
