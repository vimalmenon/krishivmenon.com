import { Editor } from '@common';
import TextField from '@mui/material/TextField';
import { Container } from '@style';

import { INoteDetail } from './NoteDetail';
import { NoteDetailRoot } from './NoteDetail.style';

export const NoteDetail: React.FC<INoteDetail> = ({ mode, selectedNote, updateNote }) => {
  return (
    <NoteDetailRoot>
      <Container component="div" sx={{ flex: '2' }} direction="column">
        {!selectedNote && (
          <Container component="div" direction="column">
            No note selected.
          </Container>
        )}
        {selectedNote && (
          <Container component="div" direction="column">
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
        )}
      </Container>
    </NoteDetailRoot>
  );
};
