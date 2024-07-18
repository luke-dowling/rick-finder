import { useEffect } from "react";
import { Box, Button, Skeleton } from "@chakra-ui/react";
import { useAppContext } from "../context/AppContext.tsx";
import { getRandomCharacter } from "../api/apiRequests.ts";

import { CharacterCard } from "../components/CharacterCard.tsx";
import { RepeatIcon } from "@chakra-ui/icons";

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
        <Box maxW={325} mx={["auto"]} position={"relative"} p={0} w={"auto"}>
          <Box position={"absolute"} top={7} right={3} zIndex={10}>
            <Button
              size={["xs"]}
              type="button"
              onClick={() => generateRandomCharacter()}
            >
              <RepeatIcon />
            </Button>
          </Box>
          <CharacterCard
            name={character?.name}
            image={character?.image}
            species={character?.species}
            status={character?.status}
            card={{ h: [500] }}
            cardHeader={{ py: [4], heading: { size: ["xl"], w: [225] } }}
            cardBody={{ image: { w: [60], h: [60] } }}
          />
        </Box>
      ) : (
        <Skeleton mx={["auto"]} w={275} h={500}></Skeleton>
      )}
    </Box>
  );
};
