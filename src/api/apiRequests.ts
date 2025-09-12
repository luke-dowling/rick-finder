import axios, { AxiosResponse } from "axios";
import type { Character } from "../types";

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
      info: {
        next: string | null;
        prev: string | null;
        pages: number | null;
        count: number | null;
      };
    }
  | string
> => {
  try {
    const res: AxiosResponse = await axios.get(filters);
    const data: {
      results: Character[];
      info: {
        next: string | null;
        prev: string | null;
        pages: number | null;
        count: number | null;
      };
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
