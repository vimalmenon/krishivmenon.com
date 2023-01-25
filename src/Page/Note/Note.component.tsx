import React from 'react';

import { Editor } from '@common';
import { CommonIcons } from '@constant';
import { TextField } from '@mui/material';
import { Container } from '@style';

import { INote } from './Note';
import { useNote } from './Note.hook';

export const Note: React.FC<INote> = ({ id }) => {
  const { mode, note, setMode, updateValue } = useNote(id);
  return (
    <Container component={'section'} direction="column">
      <Container component="div" sx={{ my: 2 }}>
        {mode === 'VIEW' && (
          <>
            <CommonIcons.Edit />
            <CommonIcons.Delete />
          </>
        )}
        {mode === 'EDIT' && (
          <>
            <CommonIcons.Save />
            <CommonIcons.Cancel onClick={() => setMode('VIEW')} />
          </>
        )}
        {mode === 'ADD' && (
          <>
            <CommonIcons.Save />
            <CommonIcons.Cancel onClick={() => setMode('VIEW')} />
          </>
        )}
      </Container>
      <Container component="div" sx={{ my: 2 }}>
        <TextField
          label="Title"
          variant="standard"
          size="small"
          fullWidth
          name="title"
          value={note.title}
          onChange={(e) => updateValue('title', e.target.value)}
        />
      </Container>
      <Container component="div">
        <Editor
          note={note?.content || ''}
          setNote={(content) => updateValue('content', content)}
          mode={mode}
        />
      </Container>
    </Container>
  );
};
