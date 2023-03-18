import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField';

import { Editor } from '@common';
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

export const NoteDetailLoading: React.FC = () => {
  return (
    <Skeleton
      variant="rounded"
      height="100%"
      sx={{ fontSize: '1rem', gridArea: 'note-detail', height: '100%' }}
    />
  );
};
