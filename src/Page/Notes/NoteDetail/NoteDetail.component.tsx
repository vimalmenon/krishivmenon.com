import { Editor } from '@common';
import TextField from '@mui/material/TextField';
import { Container } from '@style';

import { INoteDetail } from './NoteDetail';
import { NoteDetailRoot, NoteDetailSelectedNote } from './NoteDetail.style';

export const NoteDetail: React.FC<INoteDetail> = ({ mode, selectedNote, updateNote }) => {
  return (
    <NoteDetailRoot>
      {!selectedNote && (
        <Container component="div" direction="column">
          No note selected.
        </Container>
      )}
      {selectedNote && (
        <NoteDetailSelectedNote>
          <TextField
            label="Title"
            variant="standard"
            size="small"
            fullWidth
            name="title"
            value={selectedNote.title || ''}
            disabled={mode === 'VIEW'}
            onChange={(e) => updateNote('title', e.target.value)}
          />
          <Editor
            note={selectedNote?.content || ''}
            setNote={(value) => updateNote('content', value)}
            mode={mode}
          />
        </NoteDetailSelectedNote>
      )}
    </NoteDetailRoot>
  );
};
