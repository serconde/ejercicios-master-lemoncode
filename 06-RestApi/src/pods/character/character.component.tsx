import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextFieldComponent } from 'common/components';
import { Button, Grid } from '@material-ui/core';
import * as classes from './character.styles';
import { Character } from './character.vm';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Grid container direction="column">
      <Grid container direction="row" spacing={3}>
        <Grid item>
          <img src={character.image} alt={character.name} />
        </Grid>
        <Grid item style={{ fontSize: '24px' }}>
          <div>
            <strong>Name:</strong>&nbsp;{character.name}
          </div>
          <div>
            <strong>Species:</strong>&nbsp;
            {!!character.species ? character.species : 'Unknown'}
          </div>
          <div>
            <strong>Type:</strong>&nbsp;
            {!!character.type ? character.type : 'Unknown'}
          </div>
        </Grid>
      </Grid>
      <Grid container direction="column">
        <Grid item>
          <Formik
            onSubmit={onSave}
            initialValues={character}
            enableReinitialize={true}
          >
            {() => (
              <Form className={classes.root}>
                <Field type="hidden" name="id" />
                <TextFieldComponent
                  name="description"
                  label="Description"
                  multiline={true}
                  rows={3}
                  rowsMax={5}
                />
                <Button type="submit" variant="contained" color="primary" style={{maxWidth: "140px"}}>
                  Save
                </Button>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Grid>
  );
};
