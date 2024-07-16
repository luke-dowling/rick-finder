import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import Header from "./components/Header";

export const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </>
  );
};
