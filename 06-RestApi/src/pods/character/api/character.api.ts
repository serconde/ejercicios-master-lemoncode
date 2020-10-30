import Axios from 'axios';
import { CharacterEntityApi } from 'pods/character-collection/api';

const createEmptyCharacter = (): CharacterEntityApi => ({
  id: 0,
  created: '',
  updated: '',
  description: '',
  episode: [],
  gender: '',
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
});

const ricktAndMortyApi = process.env.RICKANDMORTI_API;
const jsonServerEndpoint = process.env.JSONSERVER_ENDPOINT;

export const getCharacter = async (id: number): Promise<CharacterEntityApi> => {
  let response = await Axios.get(`${ricktAndMortyApi}${id}`);

  if (response.status === 200) {
    const character: CharacterEntityApi = response.data;

    try {
      response = await Axios.get(`${jsonServerEndpoint}${id}`)
    } catch(err) {};

    if (response.status === 200){
      return {
        ...character,
        description: response.data.description,
        updated: response.data.updated,
      };
    }
    else {
      return character;
    }
  }

  return createEmptyCharacter();
};

export const saveCharacter = async (
  character: CharacterEntityApi
): Promise<boolean> =>
  !!character.updated
    ? await Axios.put(`${jsonServerEndpoint}${character.id}`, {
        id: character.id,
        description: character.description,
        updated: new Date().toUTCString(),
      })
    : await Axios.post(jsonServerEndpoint, {
        id: character.id,
        description: character.description,
        updated: new Date().toUTCString(),
      });
