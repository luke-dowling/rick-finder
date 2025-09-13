import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface PaginationProps {
  handleButtonClick: (link: string) => void;
  info: {
    prev?: string | null;
    next?: string | null;
  };
}

const Pagination = ({ handleButtonClick, info }: PaginationProps) => {
  const baseButtonClasses =
    "w-14 h-14 bg-black text-green-400 flex justify-center items-center text-2xl rounded-full transition transform disabled:opacity-50 disabled:cursor-not-allowed " +
    "shadow-[0_0_15px_rgba(34,197,94,0.6)] hover:shadow-[0_0_25px_rgba(34,197,94,0.9)] hover:scale-110";

  return (
    <div className="container px-4 md:px-0 flex justify-between mx-5 mb-4 items-center gap-5">
      <button
        className={baseButtonClasses}
        aria-label="Button for previous page"
        disabled={info.prev === null}
        onClick={() => {
          if (info.prev) handleButtonClick(info.prev);
        }}
      >
        <FaArrowLeft />
      </button>
      <button
        className={baseButtonClasses}
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
