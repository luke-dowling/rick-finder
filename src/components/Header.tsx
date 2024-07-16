import {
  Flex,
  Heading,
  Spacer,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      padding={8}
      maxWidth={1200}
      marginX={"auto"}
      alignItems={"center"}
      flexDirection={["column-reverse", "row"]}
    >
      <Link to="/">
        <Heading
          as="h1"
          size={"2xl"}
          margin={["auto", "4"]}
          textAlign={["center", "left"]}
        >
          Rick Finder
        </Heading>
      </Link>
      <Spacer />
      <Text display={["none", "block"]} paddingX={2}>
        {colorMode === "light" ? "Light" : "Dark"} Theme
      </Text>
      <Switch
        size={"lg"}
        colorScheme={"teal"}
        alignSelf={["flex-end", "center"]}
        marginBottom={[4, 0]}
        onChange={() => toggleColorMode()}
      />
    </Flex>
  );
};

export default Header;
