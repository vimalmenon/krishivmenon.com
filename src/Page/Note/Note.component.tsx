import React from 'react';

import { TextField } from '@mui/material';
import { Container } from '@style';

import { INote } from './Note';

export const Note: React.FC<INote> = ({ id }) => {
  return (
    <Container component={'section'}>
      {id} is the id e
      <Container component="div" sx={{ my: 2 }}>
        <TextField label="Search" variant="standard" size="small" fullWidth name="search" />
      </Container>
      <Container component="div">This is note</Container>
    </Container>
  );
};
