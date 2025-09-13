// interfaces and types

export interface Character {
  id: number | undefined;
  name: string | undefined;
  image: string | undefined;
  species: string | undefined;
  status: string | undefined;
  gender: string | undefined;
  type: string | undefined;
  origin: {
    name: string;
  };
}

export interface Search {
  name: string;
  status?: string;
  gender?: string;
  species?: string;
}
