import Link from "next/link";
import ApiTestComponent from "@/components/api/ApiTest";
import data from "data/anime.json";

const TabelApi = () => {
  return (
    <>
      {data.map((item, index) => (
        <tr key={index}>
          <td className="py-2 px-4 border-b text-left">{item.name}</td>
          <td className="py-2 px-4 border-b text-left">jpg/png</td>
          <td className="py-2 px-4 border-b text-left">
            <ApiTestComponent apiUrl={`/api/anime?name=${item.name}`} />
          </td>
          <td className="py-2 px-4 border-b text-left">
            <Link
              href={`/api/anime?name=${item.name}`}
              passHref
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            >
              GET
            </Link>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TabelApi;
