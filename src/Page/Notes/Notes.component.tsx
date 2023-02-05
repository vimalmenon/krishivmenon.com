import React from 'react';

import { Icon, Editor } from '@common';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { Container } from '@style';

import { useNotes } from './Notes.service';

export const Notes: React.FC = () => {
  const {
    mode,
    notes,
    loading,
    saveNote,
    deleteNote,
    createNote,
    updateNote,
    selectedNote,
    onNoteSelect,
    onNoteEdit,
    onNoteCancel,
  } = useNotes();
  if (loading) {
    return <div>...loading</div>;
  }
  return (
    <Container component="div" direction="column" sx={{ flex: '1' }}>
      <Container component="div" sx={{ my: 2, flexWrap: 'wrap', gap: '10px' }}>
        <Container component="div" sx={{ flex: '1', gap: '10px' }} direction="column">
          <Container component="div">
            <TextField label="Search" variant="standard" size="small" fullWidth name="search" />
          </Container>
          <Divider />
          {notes.map((note) => {
            return (
              <Card sx={{ display: 'flex' }} key={note.id} onClick={() => onNoteSelect(note)}>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', flex: '1' }}>
                  {note.title} <Icon.icons.Delete onClick={() => deleteNote(note)} />
                </CardContent>
              </Card>
            );
          })}
        </Container>
        <Container component="div" sx={{ flex: '2' }} direction="column">
          <Container component="div" sx={{ justifyContent: 'end' }}>
            <Icon Icon={Icon.icons.Add} label="Add" onClick={createNote} />

            <Icon Icon={Icon.icons.Cancel} label="Cancel" onClick={onNoteCancel} />
            <Icon Icon={Icon.icons.Edit} label="Edit" onClick={onNoteEdit} />
            <Icon Icon={Icon.icons.Save} label="Save" onClick={saveNote} />
          </Container>
          <Container component="div" sx={{}} direction="column">
            <TextField
              label="Title"
              variant="standard"
              size="small"
              fullWidth
              name="title"
              value={selectedNote?.title || ''}
              onChange={(e) => updateNote('title', e.target.value)}
            />
            <Editor
              note={selectedNote?.content || ''}
              setNote={(value) => updateNote('content', value)}
              mode={mode}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
