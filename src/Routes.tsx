import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="search" element={<Search />} />
    </Routes>
  );
};
