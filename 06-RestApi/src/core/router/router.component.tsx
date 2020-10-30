import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { CharacterCollectionScene } from 'scenes';
import { CharacterScene } from 'scenes/character.scene';
import { switchRoutes } from './routes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.characterCollection]}
          component={CharacterCollectionScene}
        />
        <Route
          exact={true}
          path={[switchRoutes.editCharacter]}
          component={CharacterScene}
        />
      </Switch>
    </HashRouter>
  );
};
