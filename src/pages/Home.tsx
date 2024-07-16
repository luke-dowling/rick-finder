import { useEffect } from "react";
import { Button, Heading, Text } from "@chakra-ui/react";
import { useAppContext } from "../context/AppContext.tsx";
import { getRandomCharacter } from "../api/apiRequests.ts";

import MainCharacter from "../components/MainCharacter.tsx";
import { SearchForm } from "../components/SearchForm.tsx";

interface Character {
  id: number | undefined;
  name: string | undefined;
  image: string | undefined;
  species: string | undefined;
  status: string | undefined;
  type: string | undefined;
}

export const Home = () => {
  const { character, updateChosenCharacter, setError, loading, setLoading } =
    useAppContext()!;
  useAppContext();

  const generateRandomCharacter = async () => {
    setLoading(true);
    const res: Character | string = await getRandomCharacter();
    if (typeof res === "string") {
      setError(res);
    } else {
      updateChosenCharacter(res);
    }
    setLoading(false);
  };

  useEffect(() => {
    generateRandomCharacter();
  }, []);

  return (
    <>
      <SearchForm />

      <Heading>Randomly Generated Example:</Heading>
      {!loading ? (
        <MainCharacter character={character} />
      ) : (
        <Text>Loading...</Text>
      )}

      <Button type="button" onClick={() => generateRandomCharacter()}>
        Randomize
      </Button>
    </>
  );
};
