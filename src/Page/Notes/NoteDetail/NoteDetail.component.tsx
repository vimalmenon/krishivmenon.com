import { Editor, Icon } from '@common';
import TextField from '@mui/material/TextField';
import { Container } from '@style';

import { INoteDetail } from './NoteDetail';
import { NoteDetailRoot } from './NoteDetail.style';

export const NoteDetail: React.FC<INoteDetail> = ({
  mode,
  selectedNote,
  createNote,
  onNoteEdit,
  updateNote,
  onNoteCancel,
  saveNote,
}) => {
  return (
    <NoteDetailRoot>
      <Container component="div" sx={{ flex: '2' }} direction="column">
        <Container component="div" sx={{ justifyContent: 'end' }}>
          {mode === 'VIEW' && <Icon Icon={Icon.icons.Add} label="Add" onClick={createNote} />}
          {selectedNote?.id && mode === 'VIEW' && (
            <Icon Icon={Icon.icons.Edit} label="Edit" onClick={onNoteEdit} />
          )}
          {(mode === 'ADD' || mode === 'EDIT') && (
            <Icon Icon={Icon.icons.Cancel} label="Cancel" onClick={onNoteCancel} />
          )}
          {(mode === 'ADD' || mode === 'EDIT') && (
            <Icon Icon={Icon.icons.Save} label="Save" onClick={saveNote} />
          )}
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
    </NoteDetailRoot>
  );
};
