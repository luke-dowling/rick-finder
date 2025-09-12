import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { FaFilter } from "react-icons/fa";
import { type Search } from "../types";

const statusOptions = ["alive", "dead", "unknown"];
const speciesOptions = ["human", "alien", "robot"];
const genderOptions = ["male", "female", "genderless", "unknown"];

export const FilterBar = () => {
  const {
    search,
    updateSearch,
    updateSearchResults,
    setLoading,
    setError,
    paginationInfo,
  } = useAppContext()!;

  const [open, setOpen] = useState(false);

  const handleCheckboxChange = (key: keyof Search, value: string) => {
    setLoading(true);
    setError("");

    const currentValues = search[key] ? [...search[key]] : [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    updateSearch({ ...search, [key]: newValues });

    const query = new URLSearchParams({
      ...search,
      [key]: newValues,
    }).toString();
    updateSearchResults(`?${query}`);

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center mb-6 px-4">
      <button
        className="flex items-center gap-2 bg-black text-green-400 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.6)] hover:shadow-[0_0_25px_rgba(34,197,94,0.9)] transition transform hover:scale-105"
        onClick={() => setOpen(!open)}
      >
        <FaFilter />
        Filters
      </button>

      {open && (
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          <div>
            <p className="text-green-400 font-semibold mb-1">Status</p>
            {statusOptions.map((status) => (
              <label
                key={status}
                className="flex items-center gap-2 text-green-300"
              >
                <input
                  type="checkbox"
                  checked={search.status?.includes(status) || false}
                  onChange={() => handleCheckboxChange("status", status)}
                  className="accent-green-400"
                />
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </label>
            ))}
          </div>

          <div>
            <p className="text-green-400 font-semibold mb-1">Species</p>
            {speciesOptions.map((species) => (
              <label
                key={species}
                className="flex items-center gap-2 text-green-300"
              >
                <input
                  type="checkbox"
                  checked={search.species?.includes(species) || false}
                  onChange={() => handleCheckboxChange("species", species)}
                  className="accent-green-400"
                />
                {species.charAt(0).toUpperCase() + species.slice(1)}
              </label>
            ))}
          </div>

          <div>
            <p className="text-green-400 font-semibold mb-1">Gender</p>
            {genderOptions.map((gender) => (
              <label
                key={gender}
                className="flex items-center gap-2 text-green-300"
              >
                <input
                  type="checkbox"
                  checked={search.gender?.includes(gender) || false}
                  onChange={() => handleCheckboxChange("gender", gender)}
                  className="accent-green-400"
                />
                {gender.charAt(0).toUpperCase() + gender.slice(1)}
              </label>
            ))}
          </div>
        </div>
      )}

      {paginationInfo.count! > 0 && (
        <p className="mt-4 text-green-400 font-semibold">
          Found {paginationInfo.count} character
          {paginationInfo.count! > 1 ? "s" : ""}
        </p>
      )}
    </div>
  );
};
