import React from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { Container } from '@style';

import { useNotes } from './Notes.service';

export const Notes: React.FC = () => {
  const { notes, deleteNote } = useNotes();
  return (
    <Container component="div" direction="column">
      <Container component="div" sx={{ my: 2 }}>
        <TextField label="Search" variant="standard" size="small" fullWidth name="search" />
      </Container>
      <Divider />
      <Container component="div" sx={{ my: 2 }}>
        {notes.map((note) => {
          return (
            <div key={note.id}>
              <Card sx={{ minWidth: 275, m: 2 }}>
                <CardContent>{note.title}</CardContent>
                <CardActions>
                  <Button>View</Button>
                  <Button onClick={() => deleteNote(note.id)}>Delete</Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </Container>
    </Container>
  );
};
