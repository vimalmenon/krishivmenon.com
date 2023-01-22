import React from 'react';

import { Editor } from '@common';
import { CommonIcons } from '@constant';
import { TextField } from '@mui/material';
import { Container } from '@style';

import { INote } from './Note';
import { useNote } from './Note.hook';

export const Note: React.FC<INote> = ({ id }) => {
  const { mode, note, updateNote } = useNote(id);
  return (
    <Container component={'section'} direction="column">
      <Container component="div" sx={{ my: 2 }}>
        {mode === 'VIEW' && (
          <>
            <CommonIcons.Edit />
            <CommonIcons.Delete />
          </>
        )}
        {mode === 'EDIT' ||
          (mode === 'ADD' && (
            <>
              <CommonIcons.Save />
            </>
          ))}
      </Container>
      <Container component="div" sx={{ my: 2 }}>
        <TextField label="Title" variant="standard" size="small" fullWidth name="search" />
      </Container>
      <Container component="div">
        <Editor note={note?.content || ''} setNote={updateNote} />
      </Container>
    </Container>
  );
};
