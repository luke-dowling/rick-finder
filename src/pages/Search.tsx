import { useEffect, useRef } from "react";

import { useAppContext } from "../context/AppContext";
import Pagination from "../components/Pagination";
import { CharacterCard } from "../components/CharacterCard";
import { Layout } from "../components/Layout";

import Header from "../components/Header";

export const Search = () => {
  const {
    searchResults,
    paginationInfo,
    updateSearchResults,
    loading,
    setLoading,
    search,
  } = useAppContext()!;
  const searchResRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (search.name === "") {
      updateSearchResults("");
    }

    searchResRef.current?.scrollIntoView({
      block: "end",
    });
  }, [searchResults]);

  const handleButtonClick = (link: string) => {
    setLoading(true);
    updateSearchResults(link);
    setLoading(false);
  };

  return (
    <Layout transparent={true}>
      <Header />
      <div className="grid mx-auto max-width-1200 m-2">
        {!loading && <p ref={searchResRef}>{searchResults.length}</p>}
        {!loading ? (
          searchResults.length > 0 &&
          searchResults.map(({ id, name, image, species, status }) => {
            return (
              <div key={id} className="my-4">
                <CharacterCard
                  name={name}
                  image={image}
                  species={species}
                  status={status}
                />
              </div>
            );
          })
        ) : (
          <div />
        )}
      </div>

      <Pagination handleButtonClick={handleButtonClick} info={paginationInfo} />
    </Layout>
  );
};
