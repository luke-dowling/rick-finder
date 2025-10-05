import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";

export const SearchForm = () => {
  const { setLoading, updateSearch, setError } = useAppContext()!;
  const navigate = useNavigate();
  const location = useLocation();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const params = new URLSearchParams(location.search);
  const urlName = params.get("name") || "";

  const [inputValue, setInputValue] = useState(urlName);

  useEffect(() => {
    searchInputRef.current?.focus();
    setInputValue(urlName);
    updateSearch({ name: urlName });
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setLoading(true);
    setError("");
    updateSearch({ name: inputValue });
    setLoading(false);
    navigate(`/search?name=${encodeURIComponent(inputValue)}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container px-4 py-7 w-full md:px-0"
    >
      <div className="search flex justify-center">
        <input
          className="w-full px-4 py-2 rounded-l-2xl 
                     bg-black text-green-400 placeholder-green-600 
                     border border-green-500 
                     focus:outline-none focus:ring-2 focus:ring-green-400
                     lg:text-xl"
          type="text"
          ref={searchInputRef}
          value={inputValue}
          onChange={handleInputChange}
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
