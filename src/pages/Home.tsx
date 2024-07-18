import { useEffect } from "react";
import { Box, Skeleton, SkeletonCircle } from "@chakra-ui/react";
import { useAppContext } from "../context/AppContext.tsx";
import { getRandomCharacter } from "../api/apiRequests.ts";

import MainCharacter from "../components/MainCharacter.tsx";

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
    <Box className="main">
      {!loading ? (
        <MainCharacter
          character={character}
          generateRandomCharacter={generateRandomCharacter}
        />
      ) : (
        <Skeleton mx={["auto"]} w={275} h={425}>
          <SkeletonCircle size={"lg"} />
        </Skeleton>
      )}
    </Box>
  );
};
