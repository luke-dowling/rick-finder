import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

interface Character {
  name: string | undefined;
  image: string | undefined;
  species: string | undefined;
  status: string | undefined;
  type: string | undefined;
}

const Character = ({ name, image, species, status, type }: Character) => {
  return (
    <GridItem h={"max-content"}>
      <Card align={"center"} variant={"outline"} m={2}>
        <CardHeader p={2} h={50}>
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
        <CardFooter
          flexDirection={"column"}
          padding={2}
          alignSelf={"flex-start"}
          h={95}
        >
          <Text>Species: {species}</Text>
          <Text>Status: {status}</Text>
          {type ? (
            <Text
              whiteSpace={"nowrap"}
              overflow={"hidden"}
              textOverflow={"ellipsis"}
            >
              Type: {type}
            </Text>
          ) : null}
        </CardFooter>
      </Card>
    </GridItem>
  );
};

export default Character;
