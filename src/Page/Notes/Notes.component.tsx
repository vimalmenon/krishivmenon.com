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
  const { notes, deleteNote, createNote, onNoteSelect } = useNotes();
  return (
    <Container component="div" direction="column">
      <Container component="div" sx={{ my: 2 }}>
        <TextField label="Search" variant="standard" size="small" fullWidth name="search" />
        <Button onClick={createNote}>Add</Button>
      </Container>
      <Divider />
      <Container component="div" sx={{ my: 2, flexWrap: 'wrap' }}>
        <Container component="div" sx={{ flex: '1' }}>
          {notes.map((note) => {
            return (
              <Card sx={{ minWidth: 275, m: 2 }} key={note.id} onClick={() => onNoteSelect(note)}>
                <CardContent>{note.title}</CardContent>
                <CardActions>
                  <Button onClick={() => deleteNote(note.id || '0')}>Delete</Button>
                </CardActions>
              </Card>
            );
          })}
        </Container>
        <Container component="div" sx={{ flex: '2' }}>
          $nbsp;
        </Container>
      </Container>
    </Container>
  );
};
