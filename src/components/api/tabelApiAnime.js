import Link from "next/link";
import data from "data/anime.json";
import GetButton from "@/components/api/GetButton";
import Status from "@/components/api/Status";
import PlayIcon from "@/components/api/PlayIcon";

// Import necessary components and styles

const TabelApiAnime = () => {
  return (
    <>
      {data.map((item, index) => (
        <tr
          key={index}
          className="hover:bg-gray-100 dark:hover:bg-[#161616] dark:border-[#2c2c2c]"
        >
          <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-center">
            {index + 1}
          </td>
          <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
            {item.name}
          </td>
          <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
            <GetButton />
          </td>
          <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
            Random {item.name} image
          </td>
          <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
            name
          </td>
          <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
            <Status />
          </td>
          <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
            <Link
              href={`/api/anime?name=${item.name}`}
              passHref
              className="w-full block p-2 rounded-lg"
            >
              <div className=" rounded-lg">
                <PlayIcon />
              </div>
            </Link>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TabelApiAnime;
