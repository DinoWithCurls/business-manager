import React from "react";

function Pagination({
  postsPerPage,
  totalPosts,
  paginateFront,
  paginateBack,
  currentPage,
}) {
  return (
    <div className="py-2">
      <div>
        <p className="text-sm text-gray-700">
          Showing
          <span className="ml-1 mr-1 font-medium">{currentPage * postsPerPage - 10}</span>
          to
          <span className="ml-1 mr-1 font-medium">{currentPage * postsPerPage}</span>
          of
          <span className="ml-1 mr-1 font-medium">{totalPosts}</span>
          results
        </p>
      </div>
      <nav className="block"></nav>
      <div>
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination">
          <button onClick={() => paginateBack()} href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span>Previous</span>
          </button>

          <button onClick={() => paginateFront()} className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span>Next</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
export default Pagination;
