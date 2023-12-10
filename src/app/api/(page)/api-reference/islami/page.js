import Link from "next/link";
import NavPage from "@/components/navPage";
import GetButton from "@/components/api/GetButton";
import Status from "@/components/api/Status";
import PlayIcon from "@/components/api/PlayIcon";

const AIReference = () => {
  return (
    <div className="pr-8">
      <h2 className="text-apiPrimary font-bold text-xl">Islami</h2>
      <div className="mt-10 w-full overflow-x-auto ">
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
                Audio Ayat
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <GetButton />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
                Get audio ayat from surah
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                id&ayat
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <Status />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-center">
                <Link
                  href="/api/islamic/ayat-audio?id=36&ayat="
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
                Audio Surah
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <GetButton />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
                Get audio surah from Al Quran
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                id/surah
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <Status />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-center">
                <Link
                  href="/api/islamic/surah-audio?id="
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
                Doa Doa
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <GetButton />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
              Get daily prayers
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                id/search/pics
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <Status />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-center">
                <Link
                  href="/api/islamic/doa?search=makan"
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
                Ayat
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <GetButton />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
              Get ayat from surah
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                -
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <Status />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-center">
                <Link
                  href="/api/islamic/quran/1/1"
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
                Ayat 2
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <GetButton />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
              Get ayat from surah
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                -
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <Status />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-center">
                <Link
                  href="/api/islamic/quran/2/190-192"
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
                5
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
                Jadwal Sholat
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <GetButton />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
              Get jadwal sholat by nama kota
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                kota
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <Status />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-center">
                <Link
                  href="/api/islamic/jadwal-sholat?kota=cirebon"
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
                6
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
                List Surah
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <GetButton />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
              Show all surah in Al Quran
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                -
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <Status />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-center">
                <Link
                  href="/api/islamic/quran"
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
                7
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
                Surah
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <GetButton />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
              Get surah from Al Quran
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                -
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <Status />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-center">
                <Link
                  href="/api/islamic/quran/36"
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
                8
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
               Tafsir Ayat
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <GetButton />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
              Get Tafsir from ayat
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                -
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                <Status />
              </td>
              <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-center">
                <Link
                  href="/api/islamic/tafsir-ayat/1/1"
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
        previousUrl="/api/api-reference/downloader"
        previousName="Downloader"
        nextUrl="/api/api-reference/random-image"
        nextName="Random Image"
      />
    </div>
  );
};

export const metadata = {
  title: "API - Islami",
  description: "Explore a world of free APIs for your projects.",
};
export default AIReference;
