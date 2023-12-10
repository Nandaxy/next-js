import Link from "next/link";
import NavPage from "@/components/navPage";
import GetButton from "@/components/api/GetButton";
import Status from "@/components/api/Status";
import PlayIcon from "@/components/api/PlayIcon";

const AIReference = () => {
  return (
    <div className="pr-8">
      <h2 className="text-apiPrimary font-bold text-xl">OpenAI</h2>
      <div className="mt-10 w-full overflow-x-auto lg:overflow-x-hidden">
        <table className="min-w-full bg-white dark:bg-dark border dark:border-[#2c2c2c] rounded-lg">
          <thead className="text-sm border-b dark:border-[#2c2c2c]">
            <tr>
              <th className="py-4 px-4 text-center">No</th>
              <th className="py-4 px-4 text-left">Name</th>
              <th className="py-4 px-4 text-left">Request Method</th>
              <th className="py-4 px-4 text-left">Description</th>
              <th className="py-4 px-4 text-left">Query Parameter</th>
              <th className="py-4 px-4 text-left">Status</th>
              <th className="py-4 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100 dark:hover:bg-[#161616] dark:border-[#2c2c2c]">
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-center">
                1
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                AI
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <GetButton />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                Tanya apa aja ke AI
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                text
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <Status />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-center">
                <Link
                  href="/api/openai?text=halo"
                  className="w-full block p-2 rounded-lg"
                >
                  <div className=" rounded-lg">
                    <PlayIcon />
                  </div>
                </Link>
              </td>
            </tr>
            <tr className="hover:bg-gray-100 dark:hover:bg-[#161616] dark:border-[#2c2c2c]">
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-center">
                2
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                Dalle
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <GetButton />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
                Buat gambar dari Text dengan AI
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                text
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <Status />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-center">
                <Link
                  href="/api/dalle?text=cat"
                  className="w-full block p-2 rounded-lg"
                >
                  <div className=" rounded-lg">
                    <PlayIcon />
                  </div>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <NavPage
        previousUrl="/api/quickstart"
        previousName="Quicstart"
        nextUrl="/api/api-reference/downloader"
        nextName="Downloader"
      />
    </div>
  );
};

export const metadata = {
  title: "API - OpenAI",
  description: "Explore a world of free APIs for your projects.",
};
export default AIReference;
