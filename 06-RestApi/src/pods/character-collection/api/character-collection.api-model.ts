export interface CharacterEntityApi {
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

export interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Array<CharacterEntityApi>;
}
