import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { NotFound } from "./components/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="search" element={<Search />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
