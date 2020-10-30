import { IconButton } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import * as React from 'react';
import * as classes from './character-collection.styles';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';

interface Props {
  characterCollection: CharacterEntityVm[];
  currentPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
  onEdit: (id: number) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const {
    characterCollection,
    currentPage,
    totalPages,
    onChangePage,
    onEdit,
  } = props;

  const handleMoveForward = () => {
    onChangePage(currentPage + 1);
  };
  const handleMoveBackward = () => {
    onChangePage(currentPage - 1);
  };

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onEdit={onEdit} />
          </li>
        ))}
      </ul>

      <div className={classes.pages}>
        <span>{`${currentPage}-${totalPages}`}&nbsp;</span>

        <IconButton
          size="small"
          disabled={currentPage === 1}
          onClick={handleMoveBackward}
        >
          <ArrowBackIos />
        </IconButton>
        <IconButton
          size="small"
          disabled={currentPage === totalPages}
          onClick={handleMoveForward}
        >
          <ArrowForwardIos />
        </IconButton>
      </div>
    </div>
  );
};
