import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from 'pods/character/api';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mapper';
import { Character } from './character.vm';
import { CharacterComponent } from './character.component';
import { createEmptyCharacter } from 'pods/character/api';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const { id } = useParams();
  const history = useHistory();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);


  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save character');
    }
  };


  return <CharacterComponent character={character} onSave={handleSave} />;
};
