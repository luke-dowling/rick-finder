import {
  Card,
  CardBody,
  CardHeader,
  GridItem,
  Heading,
  Image,
} from "@chakra-ui/react";

interface Character {
  name: string | undefined;
  image: string | undefined;
}

const Character = ({ name, image }: Character) => {
  return (
    <GridItem>
      <Card align={"center"} variant={"outline"} h={280} m={2}>
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
      </Card>
    </GridItem>
  );
};

export default Character;
