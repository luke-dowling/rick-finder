import { Input, Button } from "@chakra-ui/react";
import { FormEvent, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

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
      <Input
        borderRadius={20}
        my={[2, 5]}
        type="text"
        ref={searchInputRef}
        defaultValue={search.name}
        placeholder="Search a character from Rick & Morty..."
      />
      <Button type="submit" display={"none"}>
        Search
      </Button>
    </form>
  );
};
