import React from 'react';

import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField';
import { Container } from '@style';

import { NoteListRoot, NoteItemsContainer } from './NoteList.style';
import { INoteListPage } from './Notes';

export const NoteList: React.FC<INoteListPage> = ({ notes, onNoteSelect }) => {
  return (
    <NoteListRoot>
      <Container component="div">
        <TextField
          label="Search"
          variant="standard"
          size="small"
          fullWidth
          name="search"
          disabled
        />
      </Container>
      <NoteItemsContainer dense>
        {notes.map((note) => {
          return (
            <React.Fragment key={note.id}>
              <ListItem onClick={() => onNoteSelect(note)}>
                <ListItemText primary={note.title} />
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          );
        })}
      </NoteItemsContainer>
    </NoteListRoot>
  );
};

export const NodeListLoading: React.FC = () => {
  return (
    <Skeleton variant="rounded" height="100%" sx={{ fontSize: '1rem', gridArea: 'note-list' }} />
  );
};
