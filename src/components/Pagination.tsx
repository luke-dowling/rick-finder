import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface PaginationProps {
  handleButtonClick: (link: string) => void;
  info: {
    prev?: string | null;
    next?: string | null;
  };
}

const Pagination = ({ handleButtonClick, info }: PaginationProps) => {
  return (
    <div className="flex justify-center items-center gap-5">
      <button
        className="rounded-full w-20 h-20 bg-sky-50 flex justify-center items-center text-2xl"
        aria-label="Button for previous page"
        disabled={info.prev === null}
        onClick={() => {
          if (info.prev) handleButtonClick(info.prev);
        }}
      >
        <FaArrowLeft />
      </button>
      <button
        className="rounded-full w-20 h-20 bg-sky-50 flex justify-center items-center text-2xl"
        aria-label="Button for next page"
        disabled={info.next === null}
        onClick={() => {
          if (info.next) handleButtonClick(info.next);
        }}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
