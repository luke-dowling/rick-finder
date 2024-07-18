import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { SearchIcon } from "@chakra-ui/icons";

export const SearchForm = () => {
  const { updateSearchResults, setLoading, search, updateSearch, setError } =
    useAppContext()!;
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchInputRef.current!.value === "") return;
    setLoading(true);
    setError("");

    updateSearch({ name: searchInputRef.current!.value });
    updateSearchResults(`?name=${searchInputRef.current!.value}`);
    setLoading(false);
    navigate("/search");
  };

  useEffect(() => {
    searchInputRef.current!.focus();
  });

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.400" />}
        />
        <Input
          borderRadius={20}
          type="text"
          ref={searchInputRef}
          defaultValue={search.name}
          placeholder="Search a character from Rick & Morty..."
        />
      </InputGroup>
    </form>
  );
};
