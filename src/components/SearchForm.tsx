import { FormLabel, Input, Button } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
const baseUrl = "https://rickandmortyapi.com/api/character/";

export const SearchForm = () => {
  const { updateSearchResults, setLoading, search, updateSearch, setError } =
    useAppContext()!;
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    updateSearch({ name: searchInputRef.current!.value });
    updateSearchResults(`${baseUrl}?name=${searchInputRef.current!.value}`);
    setLoading(false);
    navigate("/search");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormLabel>Search a character from Rick & Morty:</FormLabel>
      <Input type="text" ref={searchInputRef} defaultValue={search.name} />
      <Button type="submit">Search</Button>
    </form>
  );
};
