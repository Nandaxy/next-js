import Link from "next/link";
import NavPage from "@/components/navPage";
import GetButton from "@/components/api/GetButton";
import Status from "@/components/api/Status";
import PlayIcon from "@/components/api/PlayIcon";

const AIReference = () => {
  return (
    <div className="pr-8">
      <h2 className="text-apiPrimary font-bold text-xl">Entertainment</h2>
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
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
              Siapakah Aku
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <GetButton />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
                Siapakah Aku
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                index/pics
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <Status />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-center">
                <Link
                  href="/api/game/siapakah-aku?pics"
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
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
              Tebak Bendera
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <GetButton />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
              Tebak Bendera
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                pics
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <Status />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-center">
                <Link
                  href="/api/game/tebak-bendera?pics"
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
                3
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
              Tebak Gambar
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <GetButton />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
              Tebak Gambar
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                index/pics
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <Status />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-center">
                <Link
                  href="/api/game/tebak-gambar?pics"
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
                4
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
              Tebak Lagu
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <GetButton />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
              Tebak Lagu
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                pics
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <Status />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-center">
                <Link
                  href="/api/game/tebak-lagu?pics"
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
        previousUrl="/api/api-reference/random-image"
        previousName="Random Image"
        nextUrl=""
        nextName=""
      />
    </div>
  );
};

export const metadata = {
  title: "API - Entertainment",
  description: "Explore a world of free APIs for your projects.",
};
export default AIReference;
