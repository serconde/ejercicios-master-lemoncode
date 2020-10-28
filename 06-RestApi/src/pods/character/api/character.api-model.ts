export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    link: string;
  };
  location: {
    name: string;
    link: string;
  };
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
  description: string;
  updated: string;
}

export const createEmptyCharacter = (): Character => ({
  created: '',
  description: '',
  episode: [],
  gender: '',
  id: 0,
  image: '',
  location: {
    link: '',
    name: '',
  },
  name: '',
  origin: {
    link: '',
    name: '',
  },
  species: '',
  status: '',
  type: '',
  url: '',
  updated: '',
});
