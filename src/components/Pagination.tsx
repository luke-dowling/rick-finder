import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

interface PaginationProps {
  info: {
    next?: string | null;
    prev?: string | null;
    pages?: number | null;
    count?: number | null;
  };
}

const Pagination = ({ info }: PaginationProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setLoading } = useAppContext()!;

  const handlePageChange = (link: string | null) => {
    if (!link) return;
    setLoading(true);
    // link is a full URL, extract only the query string
    const queryString = link.includes("?")
      ? link.substring(link.indexOf("?"))
      : "";
    navigate(`/search${queryString}`);
    setLoading(false);
  };

  return (
    <div className="container px-4 md:px-0 flex justify-between mx-5 mb-4 items-center gap-5">
      <button
        className="px-4 py-2 rounded bg-green-400 text-black font-bold disabled:opacity-50"
        disabled={!info.prev}
        onClick={() => handlePageChange(info.prev || null)}
        aria-label="Button for previous page"
      >
        <FaArrowLeft />
      </button>
      <span className="text-green-400 font-semibold">
        Page {location.search.match(/page=(\d+)/)?.[1] || 1} of{" "}
        {info.pages || 1}
      </span>
      <button
        className="px-4 py-2 rounded bg-green-400 text-black font-bold disabled:opacity-50"
        disabled={!info.next}
        onClick={() => handlePageChange(info.next || null)}
        aria-label="Button for next page"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
