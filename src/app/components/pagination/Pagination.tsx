import React from "react";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mt-6 flex justify-center">
      <nav>
        <ul className="flex space-x-4">
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => onPageChange(number)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === number
                    ? "bg-yellow-600 text-white"
                    : "bg-gray-200 text-gray-800"
                } hover:bg-yellow-700 hover:text-white transition duration-300`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
