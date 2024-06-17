import { Button } from "@material-tailwind/react";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

function Pagination({
  studentPerPage,
  length,
  handlePagination,
  currentPage,
  moveToPreviousPage,
  moveToNextPage,
}) {
  const paginationNumbers = [];
  for (let index = 1; index <= Math.ceil(length / studentPerPage); index++) {
    paginationNumbers.push(index);
  }

  return (
    <div className="border-sm flex justify-center gap-4 border border-red-50 p-4">
      <Button size="sm" onClick={moveToPreviousPage}>
        <GrFormPrevious />
      </Button>
      {paginationNumbers.map((pageNumber) => (
        <Button
          size="md"
          className={`$ rounded px-[10px] py-[4px] `}
          key={pageNumber}
          variant={currentPage === pageNumber ? "outlined" : "text"}
          onClick={() => handlePagination(pageNumber)}
        >
          {pageNumber}
        </Button>
      ))}
      <Button size="sm" onClick={moveToNextPage}>
        <GrFormNext />
      </Button>
    </div>
  );
}

export default Pagination;
