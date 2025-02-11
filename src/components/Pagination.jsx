/* eslint-disable react/prop-types */
import { GeneratePaginationRange } from "./ui/Pagination";
const Pagination = ({ currentPage, setCurrentPage, totalCount }) => {
  const totalPageCount = Math.ceil(599 / 10);

  const decreaseCurrentPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };
  const increaseCurrentPage = () => {
    setCurrentPage(Math.min(currentPage + 1, totalPageCount));
  };

  const paginationInfo = {
    totalCount,
    siblingCount: 2,
    currentPage: currentPage,
    pageSize: 10,
  };

  const paginationRange = GeneratePaginationRange(paginationInfo);

  return (
    <>
      <div className="mt-10 hidden h-auto w-auto justify-end p-10 md:flex lg:w-full">
        <div className="mx-auto flex w-auto gap-1">
          <button
            className="mr-2 block cursor-pointer hover:text-orange-500 lg:text-lg"
            onClick={decreaseCurrentPage}
          >
            Previous
          </button>

          {paginationRange.map((pagePill, index) =>
            pagePill !== "..." ? (
              <button
                key={pagePill}
                className={`flex cursor-pointer items-center rounded-sm border-[1px] px-3 hover:text-orange-500 md:text-xs ${
                  currentPage === pagePill ? "text-orange-500" : ""
                }`}
                onClick={() => setCurrentPage(pagePill)}
              >
                {pagePill}
              </button>
            ) : (
              <span key={`dots-${index}`} className="block px-2">
                {pagePill}
              </span>
            ),
          )}

          <button
            className="ml-2 block cursor-pointer hover:text-orange-500 lg:text-lg"
            onClick={increaseCurrentPage}
          >
            Next
          </button>
        </div>
      </div>

      <div className="bg-yellow mx-auto mt-16 flex h-20 w-auto items-center justify-center gap-16 p-2 font-bold md:hidden">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/30 text-orange-600"
          onClick={decreaseCurrentPage}
        >
          &lt;
        </button>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/30 text-orange-600"
          onClick={increaseCurrentPage}
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default Pagination;
