import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex paddingY={8} alignItems={"center"} flexDirection={["row"]}>
      <Link to="/">
        <Heading as="h1" size={"2xl"} textAlign={["center", "left"]}>
          Rick Finder
        </Heading>
      </Link>
      <Spacer />
      <Box>
        <Button
          onClick={() => toggleColorMode()}
          colorScheme={colorMode === "light" ? "orange" : "teal"}
        >
          {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
