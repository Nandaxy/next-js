"use client";

import { useState } from "react";
import Link from "next/link";
import NavPage from "@/components/navPage";
import PlayIcon from "@/components/api/PlayIcon";
import apiData from "@/components/api/apiData";
import TabelHeadAll from "@/components/api/tabelHeadAll";

const AllReference = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  let rowNumber = (currentPage - 1) * rowsPerPage;

  const flattenedApiData = apiData.flatMap((category) =>
    category.endpoints.map((endpoint) => ({
      ...endpoint,
      category: category.category,
    }))
  );

  const filteredApiData = flattenedApiData.filter((endpoint) =>
    endpoint.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedAndFilteredApiData = [...filteredApiData].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  const totalPages = Math.ceil(sortedAndFilteredApiData.length / rowsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setCurrentPage(1);
  };
  const getPageNumbers = () => {
    const pageNumbers = [];
    const totalPagesToShow = Math.min(totalPages, 5);

    if (totalPages <= totalPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const halfRange = Math.floor(totalPagesToShow / 2);
      let startPage = Math.max(1, currentPage - halfRange);
      let endPage = Math.min(totalPages, currentPage + halfRange - 1);

      if (currentPage + halfRange > totalPages) {
        startPage -= currentPage + halfRange - totalPages;
      } else if (currentPage - halfRange < 1) {
        endPage += 1 - (currentPage - halfRange);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="pr-8 lg:w-[120%]">
      <h2 className="text-apiPrimary font-bold text-2xl">All Feature</h2>
      <div className="mt-10">
        {/* Search input */}
        <div className="w-full border-x-2 border-t-2 border-gray-100 dark:border-[#2c2c2c] p-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-80 h-6 focus:outline-none dark:bg-dark"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="w-full overflow-x-auto flex flex-wrap">
        {/* Table */}
        <table className="min-w-full bg-white dark:bg-dark border dark:border-[#2c2c2c] rounded-lg">
          {/* Table header */}
          <TabelHeadAll />
          <tbody>
            {sortedAndFilteredApiData
              .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
              .map((endpoint, index) => (
                <tr
                  key={`${endpoint.category}-${index}`}
                  className="hover:bg-gray-100 dark:hover:bg-[#161616] dark:border-[#2c2c2c]"
                >
                  <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-center">
                    {++rowNumber}
                  </td>
                  <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left whitespace-nowrap">
                    {endpoint.name}
                  </td>
                  <td className="py-2 px-4 border-b dark:border-[#2c2c2c] text-sm text-left">
                    {endpoint.category}
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
      {/* Pagination controls */}
      <div className=" flex items-center justify-center flex-col md:flex-row md:justify-between border-x-2 border-b-2 border-gray-100 dark:border-[#2c2c2c]">
        <div className="my-5 flex items-center space-x-2">
          <label htmlFor="rowsPerPage">Show:</label>
          <select
            id="rowsPerPage"
            value={rowsPerPage}
            onChange={(e) => handleRowsPerPageChange(Number(e.target.value))}
            className="bg-white dark:bg-dark border rounded-md px-2 py-1 focus:outline-none focus:border-blue-500 cursor-pointer"
          >
            <option value={5}>5 rows</option>
            <option value={10}>10 rows</option>
            <option value={25}>25 rows</option>
            <option value={50}>50 rows</option>
          </select>
        </div>

        <div className="mt-4 flex items-center justify-between pb-4">
          <div className="flex items-center ">
            <span className="mr-2 hidden md:block">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-l-md border-2 border-gray-200 dark:border-[#1b1b1b] dark:hover:bg-[#1d1d1d] focus:outline-none hover:bg-gray-100"
            >
              {"<"}
            </button>
            {getPageNumbers().map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-3 py-1 border-2 border-gray-200 transition-colors dark:border-[#1b1b1b] ${
                  currentPage === pageNumber
                    ? "bg-blue-500 dark:bg-blue-950 text-white"
                    : " text-gray-700 hover:bg-blue-300 hover:text-white dark:text-gray-300 dark:hover:bg-blue-700"
                } focus:outline-none`}
              >
                {pageNumber}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded-r-md border-2 border-gray-200 focus:outline-none hover:bg-gray-100 dark:border-[#1b1b1b] dark:hover:bg-[#1d1d1d] "
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
      <NavPage
        previousUrl="/api/quickstart"
        previousName="Quicstart"
        nextUrl="/api/api-reference/ai"
        nextName="OpenAI"
      />
    </div>
  );
};

export default AllReference;
