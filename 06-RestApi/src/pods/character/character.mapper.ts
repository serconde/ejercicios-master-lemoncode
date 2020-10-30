import * as apiModel from 'pods/character-collection/api';
import * as viewModel from 'pods/character/character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  species: character.species,
  type: character.type,
  image: character.image,
  description: character.description,
  updated: character.updated,
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.CharacterEntityApi => (({
  ...character,
  id: character.id,
  name: character.name,
  species: character.species,
  type: character.type,
  image: character.image,
  description: character.description,
  updated: character.updated,
} as unknown) as apiModel.CharacterEntityApi);
