import { useEffect, useRef } from "react";

import { useAppContext } from "../context/AppContext";
import Pagination from "../components/Pagination";
import { CharacterCard } from "../components/CharacterCard";
import { Layout } from "../components/Layout";

import Header from "../components/Header";
import { SearchForm } from "../components/SearchForm";
import { FilterBar } from "../components/FilterBar";

export const Search = () => {
  const {
    searchResults,
    paginationInfo,
    updateSearchResults,
    loading,
    setLoading,
    search,
    error,
  } = useAppContext()!;
  const searchResRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (search.name.trim() === "") {
      updateSearchResults("");
    }

    searchResRef.current?.scrollIntoView({
      block: "end",
    });
  }, [search]);

  const handleButtonClick = (link: string) => {
    setLoading(true);
    updateSearchResults(link);
    setLoading(false);
  };

  return (
    <Layout transparent={true}>
      <Header />
      <SearchForm />
      <FilterBar />
      {error && (
        <h2
          className="container py-4 my-12 relative text-3xl font-extrabold text-green-400 drop-shadow-[0_0_10px_#39ff14]
               animate-pulse before:content-[''] before:absolute before:-inset-1
               before:bg-gradient-to-r before:from-green-500 before:to-purple-600
               before:blur-xl before:opacity-70 before:-z-10"
        >
          <span
            className="relative glitch"
            data-text={`Big error Morttttyy: ${error}`}
          >
            Big error Morttttyy: {error}
          </span>
        </h2>
      )}
      <div className="grid mx-auto max-width-1200 m-2">
        {!loading ? (
          searchResults.length > 0 &&
          searchResults.map(
            ({ id, name, image, species, status, gender, type, origin }) => {
              return (
                <div key={id} className="my-2 mx-4">
                  <CharacterCard
                    name={name}
                    image={image}
                    species={species}
                    status={status}
                    id={id}
                    gender={gender}
                    type={type}
                    origin={origin}
                  />
                </div>
              );
            }
          )
        ) : (
          <div />
        )}
      </div>

      <Pagination handleButtonClick={handleButtonClick} info={paginationInfo} />
    </Layout>
  );
};
