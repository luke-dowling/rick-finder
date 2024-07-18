import { useEffect } from "react";
import { Grid, GridItem, Skeleton } from "@chakra-ui/react";

import { useAppContext } from "../context/AppContext";
import Pagination from "../components/Pagination";
import { CharacterCard } from "../components/CharacterCard";

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
        templateColumns={"repeat(auto-fill, minmax(200px, 1fr))"}
        gap={[2, 2, 4]}
        marginX={"auto"}
        maxWidth={1200}
        mt={[2, 4, 6]}
      >
        {!loading ? (
          searchResults.length > 0 &&
          searchResults.map(({ id, name, image, species, status }) => {
            return (
              <GridItem key={id} h={"max-content"} py={[1, 0]}>
                <CharacterCard
                  name={name}
                  image={image}
                  species={species}
                  status={status}
                  card={{ h: [320] }}
                  cardHeader={{
                    py: [2],
                    heading: { size: ["lg"], w: [195] },
                  }}
                  cardBody={{ image: { w: [120], h: [120] } }}
                />
              </GridItem>
            );
          })
        ) : (
          <Skeleton />
        )}
      </Grid>
      <Pagination handleButtonClick={handleButtonClick} info={paginationInfo} />
    </>
  );
};
