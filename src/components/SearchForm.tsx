import { FormEvent, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { FaSearch } from "react-icons/fa";

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
    <form onSubmit={handleSubmit} className="px-2 py-7 sticky top-10">
      <div className="search flex">
        <input
          className="w-full border-1px border-gray-300 bg-sky-50 p-2 rounded-l-2xl"
          type="text"
          ref={searchInputRef}
          defaultValue={search.name}
          placeholder="Search character"
        />
        <button className="bg-sky-200 rounded-e-2xl text-sm px-2.5">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};
