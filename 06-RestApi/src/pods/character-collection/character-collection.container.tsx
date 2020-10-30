import { linkRoutes } from 'core/router';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { CharacterCollectionComponent } from './character-collection.component';
import { useCharacterCollection } from './character-collection.hook';

export const CharacterCollectionContainer = () => {
  const {
    characterCollection,
    loadCharacterCollection,
    currentPage,
    setCurrentPage,
    totalPages,
  } = useCharacterCollection(0, 1);
  const history = useHistory();

  React.useEffect(() => {
    (async () => await loadCharacterCollection(currentPage))();
  }, []);

  const handleEdit = (id: number) => history.push(linkRoutes.editCharacter(id));
  const handleChangePage = (page: number) => !!page && page <= totalPages  ? loadCharacterCollection(page) : loadCharacterCollection(1);

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onEdit={handleEdit}
      onChangePage={handleChangePage}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
};
