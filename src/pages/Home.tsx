import { useState, useEffect, FormEvent, useRef } from "react";
import axios from "axios";

import Header from "../components/Header.tsx";
import MainCharacter from "../components/MainCharacter.tsx";

// import Pagination from "./components/Pagination.tsx";
import { FormLabel, Input, Button } from "@chakra-ui/react";

export const Home = () => {
  // const [results, setResults] = useState([]);
  const [character, setCharacter] = useState<{ name?: string; image?: string }>(
    {}
  );

  const searchInputRef = useRef<HTMLInputElement>(null);
  // const [info, setInfo] = useState<{
  //   next?: string | null;
  //   prev?: string | null;
  // }>({});

  const baseUrl = "https://rickandmortyapi.com/api/character/";

  const getData = async (url: string) => {
    const res = await axios.get(url);
    const numberOfCharacters = res.data.info.count;
    const randomCharacterNumber =
      Math.floor(Math.random() * numberOfCharacters) + 1;
    const { data: character } = await axios.get(
      `${url}/${randomCharacterNumber}`
    );
    // setResults(res.data.results);
    // setInfo(res.data.info);
    console.log(character);
    setCharacter(character);
  };

  useEffect(() => {
    getData(baseUrl);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  // const handleButtonClick = (url: string) => {
  //   getData(url);
  // };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <FormLabel>Search a character:</FormLabel>
        <Input type="text" ref={searchInputRef} />
        <Button type="submit">Search</Button>
      </form>

      <MainCharacter character={character} />

      <Button type="button" onClick={() => getData(baseUrl)}>
        Randomize
      </Button>
      {/* <Grid
        templateColumns={"repeat(auto-fit, minmax(200px, 1fr))"}
        gap={3}
        marginX={"auto"}
        maxWidth={1200}
      >
        {results.length > 0 ? (
          results.map(({ id, name, image }) => {
            return <Character key={id} name={name} image={image} />;
          })
        ) : (
          <Text>Loading...</Text>
        )}
      </Grid> 

      <Pagination handleButtonClick={handleButtonClick} info={info} />*/}
    </>
  );
};
