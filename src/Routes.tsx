import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import Header from "./components/Header";
import { Box } from "@chakra-ui/react";

export const AppRoutes = () => {
  return (
    <Box mx={[4, 10, 20, "auto"]} maxW={980}>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </Box>
  );
};
