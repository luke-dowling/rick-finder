import {
  Flex,
  Heading,
  Spacer,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";

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
      <Heading
        as="h1"
        size={"2xl"}
        margin={["auto", "4"]}
        textAlign={["center", "left"]}
      >
        Rick & Morty Characters
      </Heading>
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
