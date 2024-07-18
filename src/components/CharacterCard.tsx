import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { CharacterI } from "../types";

interface CharacterCardProps extends CharacterI {
  card: {
    h: number[];
  };
  cardHeader: {
    py: number[];
    heading: {
      size: string[];
      w: number[];
    };
  };
  cardBody: {
    image: {
      w: number[];
      h: number[];
    };
  };
}

export const CharacterCard = ({
  name,
  image,
  status,
  species,
  card,
  cardHeader,
  cardBody,
}: CharacterCardProps) => {
  return (
    <Card align={"center"} variant={"outline"} p={4} h={card.h}>
      <CardHeader py={cardHeader.py}>
        <Heading
          size={cardHeader.heading.size}
          textAlign={"center"}
          overflow={"hidden"}
          textOverflow={"ellipsis"}
          whiteSpace={"nowrap"}
          w={cardHeader.heading.w}
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
          w={cardBody.image.w}
          h={cardBody.image.w}
        />
      </CardBody>
      <CardFooter flexDirection={"column"} padding={1} alignSelf={"flex-start"}>
        <Text>
          <Text as={"b"}>Full name: </Text>
          {name}
        </Text>
        <Text>
          <Text as={"b"}>Status: </Text> {status}
        </Text>
        <Text>
          <Text as={"b"}>Species: </Text> {species}
        </Text>
      </CardFooter>
    </Card>
  );
};
