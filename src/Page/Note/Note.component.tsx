import React from 'react';

import { Editor } from '@common';
import { TextField } from '@mui/material';
import { Container } from '@style';

import { INote } from './Note';
import { useNote } from './Note.hook';

export const Note: React.FC<INote> = ({ id }) => {
  useNote(id);
  return (
    <Container component={'section'} direction="column">
      <Container component="div" sx={{ my: 2 }}>
        <TextField label="Title" variant="standard" size="small" fullWidth name="search" />
      </Container>
      <Container component="div">
        <Editor />
      </Container>
    </Container>
  );
};
