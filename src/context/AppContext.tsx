import { createContext, ReactNode, useContext, useState } from "react";
import { getFilteredCharacters } from "../api/apiRequests";

interface AppContextProps {
  children: ReactNode;
}

interface Character {
  id: number | undefined;
  name: string | undefined;
  image: string | undefined;
  species: string | undefined;
  status: string | undefined;
  type: string | undefined;
}

interface Search {
  name: string;
}

interface AppContext {
  search: Search;
  updateSearch: (newSearch: Search) => void;
  character: Character | undefined;
  updateChosenCharacter: (newCharacter: Character) => void;
  searchResults: Character[];
  updateSearchResults: (link: string) => void;
  paginationInfo: {
    next?: string | null;
    prev?: string | null;
  };
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContext | null>(null);

export const AppProvider = ({ children }: AppContextProps) => {
  const [search, setSearch] = useState<Search>({ name: "" });
  const [character, setCharacter] = useState<Character | undefined>(undefined);
  const [searchResults, setSearchResults] = useState<Character[]>([]);
  const [paginationInfo, setPaginationInfo] = useState<{
    next?: string | null;
    prev?: string | null;
  }>({});

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const updateSearch = (newSearch: Search) => {
    setSearch((prev) => {
      return { ...prev, ...newSearch };
    });
  };

  const updateChosenCharacter = (newCharacter: Character) => {
    setCharacter(() => newCharacter);
  };

  const updateSearchResults = async (filters: string) => {
    const res:
      | {
          results: Character[];
          info: { next: string | null; prev: string | null };
        }
      | string = await getFilteredCharacters(filters);
    if (typeof res === "string") {
      setError(res);
    } else {
      setSearchResults(res.results);
      setPaginationInfo({ next: res.info.next, prev: res.info.prev });
    }
  };

  return (
    <AppContext.Provider
      value={{
        search,
        updateSearch,
        character,
        updateChosenCharacter,
        searchResults,
        updateSearchResults,
        paginationInfo,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
