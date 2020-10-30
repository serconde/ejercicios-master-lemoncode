import Axios from 'axios';
import {
  ApiResponse,
  CharacterEntityApi,
} from './character-collection.api-model';

export const getCharacterCollection = async (
  page: number = 1,
  setTotalPages: (p: number) => void
): Promise<CharacterEntityApi[]> => {
  const apiUrl = process.env.RICKANDMORTI_API;
  const response = await Axios.get(`${apiUrl}?page=${page}`);

  if (response.status === 200) {
    const apiResponse: ApiResponse = response.data;
    setTotalPages(apiResponse.info.pages);
    const characters: CharacterEntityApi[] = apiResponse.results;

    return characters;
  }

  return [];
};
