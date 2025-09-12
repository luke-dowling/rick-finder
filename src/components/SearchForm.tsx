import { FormEvent, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";

export const SearchForm = () => {
  const { updateSearchResults, setLoading, search, updateSearch, setError } =
    useAppContext()!;

  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchInputRef.current!.value === "") return;
    setLoading(true);
    setError("");

    updateSearch({ name: searchInputRef.current!.value });
    updateSearchResults(`?name=${searchInputRef.current!.value}`);
    setLoading(false);
    navigate("/search");
  };

  useEffect(() => {
    searchInputRef.current!.focus();
  });

  return (
    <form onSubmit={handleSubmit} className="px-4 py-7 w-full">
      <div className="search flex justify-center">
        <input
          className="w-full max-w-[600px] px-4 py-2 rounded-l-2xl 
                     bg-black text-green-400 placeholder-green-600 
                     border border-green-500 
                     focus:outline-none focus:ring-2 focus:ring-green-400
                     lg:text-xl"
          type="text"
          ref={searchInputRef}
          defaultValue={search.name}
          placeholder="Search character"
        />
        <button
          className="bg-green-500 text-black px-6 rounded-r-2xl
          border border-green-500 
                     focus:outline-none focus:ring-2 focus:ring-green-400 
                     font-bold transition transform
                     hover:bg-green-400 hover:scale-105 
                     shadow-[0_0_15px_rgba(34,197,94,0.6)]
                     hover:shadow-[0_0_25px_rgba(34,197,94,0.9)]"
        >
          <IconContext.Provider value={{ color: "black", size: "1.2em" }}>
            <FaSearch />
          </IconContext.Provider>
        </button>
      </div>
    </form>
  );
};
