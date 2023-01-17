import React from 'react';

import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { Container } from '@style';
import { INotes } from '@types';

export const Notes: React.FC = () => {
  const [notes] = React.useState<INotes[]>([]);
  return (
    <Container component="div" direction="column">
      <Container component="div" sx={{ my: 2 }}>
        <TextField label="Search" variant="standard" size="small" fullWidth name="search" />
      </Container>
      <Divider />
      <Container component="div" sx={{ my: 2 }}>
        {notes.map((note) => {
          return <div key={note.title}>{note.title}</div>;
        })}
      </Container>
    </Container>
  );
};
