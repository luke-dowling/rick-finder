import axios, { AxiosResponse } from "axios";

interface Character {
  id: number | undefined;
  name: string | undefined;
  image: string | undefined;
  species: string | undefined;
  status: string | undefined;
  type: string | undefined;
}

axios.defaults.baseURL = "https://rickandmortyapi.com/api/character";

export const getRandomCharacter = async (): Promise<Character | string> => {
  try {
    const res: AxiosResponse = await axios.get("/");
    const numberOfCharacters = res.data.info.count;
    const randomCharacterNumber =
      Math.floor(Math.random() * numberOfCharacters) + 1;
    const res2: AxiosResponse = await axios.get(`${randomCharacterNumber}`);
    const data: Character = res2.data;
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response!.data.error;
    } else {
      return "An unexpected error occurred";
    }
  }
};

export const getFilteredCharacters = async (
  filters: string
): Promise<
  | {
      results: Character[];
      info: { next: string | null; prev: string | null };
    }
  | string
> => {
  try {
    const res: AxiosResponse = await axios.get(filters);
    const data: {
      results: Character[];
      info: { next: string | null; prev: string | null };
    } = res.data;
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response!.data.error;
    } else {
      return "An unexpected error occurred";
    }
  }
};
