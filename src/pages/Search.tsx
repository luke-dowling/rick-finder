import { useEffect } from "react";
import { Grid, Text } from "@chakra-ui/react";

import { useAppContext } from "../context/AppContext";
import Character from "../components/Character";
import Pagination from "../components/Pagination";

export const Search = () => {
  const {
    searchResults,
    paginationInfo,
    updateSearchResults,
    loading,
    setLoading,
    search,
  } = useAppContext()!;

  useEffect(() => {
    if (search.name === "") {
      updateSearchResults("");
    }
  }, []);

  const handleButtonClick = (link: string) => {
    setLoading(true);
    updateSearchResults(link);
    setLoading(false);
  };

  return (
    <>
      <Grid
        templateColumns={"repeat(auto-fit, minmax(200px, 1fr))"}
        gap={3}
        marginX={"auto"}
        maxWidth={1200}
      >
        {!loading ? (
          searchResults.length > 0 &&
          searchResults.map(({ id, name, image, species, status, type }) => {
            return (
              <Character
                key={id}
                name={name}
                image={image}
                species={species}
                status={status}
                type={type}
              />
            );
          })
        ) : (
          <Text>Loading...</Text>
        )}
      </Grid>
      <Pagination handleButtonClick={handleButtonClick} info={paginationInfo} />
    </>
  );
};
