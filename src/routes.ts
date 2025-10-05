import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { NotFound } from "./pages/NotFound";
import { getFilteredCharacters } from "./api/apiRequests";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "search",
    loader: async ({ request }) => {
      const url = new URL(request.url);
      const params = url.search;
      const res = await getFilteredCharacters(params);
      return res;
    },
    Component: Search,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
