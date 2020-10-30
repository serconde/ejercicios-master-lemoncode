import * as React from 'react';
import { getCharacterCollection } from 'pods/character-collection/api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';
import { CharacterEntityVm } from './character-collection.vm';

export const useCharacterCollection = (initialTotalPages: number, initialCurrentPage: number) => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);
  const [totalPages, setTotalPages] = React.useState(initialTotalPages);
  const [currentPage, setCurrentPage] = React.useState(initialCurrentPage);

  const loadCharacterCollection = async (page) => {
    var result = await getCharacterCollection(page, setTotalPages);
    !!result && setCurrentPage(page);
    !!result && setCharacterCollection(mapToCollection(result, mapFromApiToVm));
  };

  return { characterCollection, loadCharacterCollection, totalPages,  currentPage, setCurrentPage};
};
