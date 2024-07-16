import {
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
}

const MainCharacter = ({ character }: MainCharacter) => {
  if (character === undefined) {
    return null;
  }
  const { name, image, species, status, type } = character;
  return (
    <Card
      align={"center"}
      variant={"outline"}
      w={"fit-content"}
      m={"auto"}
      p={4}
    >
      <CardHeader p={2}>
        <Heading size={"md"} textAlign={"center"}>
          {name}
        </Heading>
      </CardHeader>
      <CardBody p={4}>
        <Image
          src={image}
          alt={name}
          alignSelf={"center"}
          borderRadius="full"
          objectFit={"cover"}
        />
      </CardBody>
      <CardFooter flexDirection={"column"} padding={1} alignSelf={"flex-start"}>
        <Text>Species: {species}</Text>
        <Text>Status: {status}</Text>
        {type ? <Text>Type: {type}</Text> : null}
      </CardFooter>
    </Card>
  );
};

export default MainCharacter;
