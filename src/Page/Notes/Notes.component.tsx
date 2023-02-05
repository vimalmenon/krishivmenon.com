import React from 'react';

import { Icon } from '@common';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { Container } from '@style';

import { useNotes } from './Notes.service';

export const Notes: React.FC = () => {
  const { notes, deleteNote, createNote, onNoteSelect, selectedNote } = useNotes();
  return (
    <Container component="div" direction="column" sx={{ flex: '1' }}>
      <Container component="div" sx={{ my: 2, flexWrap: 'wrap', gap: '10px' }}>
        <Container component="div" sx={{ flex: '1', gap: '10px' }} direction="column">
          <Container component="div">
            <TextField label="Search" variant="standard" size="small" fullWidth name="search" />
            <Button onClick={createNote}>Add</Button>
          </Container>
          <Divider />
          {notes.map((note) => {
            return (
              <Card
                sx={{ display: 'flex', flex: '1' }}
                key={note.id}
                onClick={() => onNoteSelect(note)}
              >
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', flex: '1' }}>
                  {note.title} <Icon.icons.Delete onClick={() => deleteNote(note?.id || '')} />
                </CardContent>
              </Card>
            );
          })}
        </Container>
        <Container component="div" sx={{ flex: '2' }}>
          {selectedNote?.title}
        </Container>
      </Container>
    </Container>
  );
};
