import { RepeatIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

interface MainCharacter {
  character:
    | {
        name: string | undefined;
        image: string | undefined;
        species: string | undefined;
        status: string | undefined;
        type: string | undefined;
      }
    | undefined;
  generateRandomCharacter: () => void;
}

const MainCharacter = ({
  character,
  generateRandomCharacter,
}: MainCharacter) => {
  if (character === undefined) {
    return null;
  }
  const { name, image, species, status, type } = character;
  return (
    <Card
      align={"center"}
      variant={"outline"}
      w={"fit-content"}
      maxW={325}
      my={4}
      mx={["auto"]}
      p={4}
    >
      <Box position={"absolute"} top={2} right={2}>
        <Button
          size={["xs"]}
          type="button"
          onClick={() => generateRandomCharacter()}
        >
          <RepeatIcon />
        </Button>
      </Box>
      <CardHeader py={[4]}>
        <Heading
          size={"xl"}
          textAlign={"center"}
          overflow={"hidden"}
          textOverflow={"ellipsis"}
          whiteSpace={"nowrap"}
          w={225}
        >
          {name}
        </Heading>
      </CardHeader>
      <CardBody p={[2]}>
        <Image
          src={image}
          alt={name}
          alignSelf={"center"}
          borderRadius="full"
          objectFit={"cover"}
          w={[60]}
          h={[60]}
        />
      </CardBody>
      <CardFooter flexDirection={"column"} padding={1} alignSelf={"flex-start"}>
        <Text>Full name: {name}</Text>
        <Text>Species: {species}</Text>
        <Text>Status: {status}</Text>
        {type ? <Text>Type: {type}</Text> : null}
      </CardFooter>
    </Card>
  );
};

export default MainCharacter;
