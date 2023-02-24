import { Icon } from '@common';
import Skeleton from '@mui/material/Skeleton';

import { INoteHeader } from './NoteHeader';
import { NoteHeaderRoot } from './NoteHeader.style';

export const NoteHeader: React.FC<INoteHeader> = ({
  mode,
  selectedNote,
  createNote,
  onDeleteConfirm,
  onNoteEdit,
  onNoteCancel,
  saveNote,
}) => {
  return (
    <NoteHeaderRoot>
      <div>
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
        {mode === 'VIEW' && selectedNote?.id && (
          <Icon
            Icon={Icon.icons.Delete}
            label="Delete"
            onClick={() => selectedNote && onDeleteConfirm(selectedNote)}
          />
        )}
      </div>
    </NoteHeaderRoot>
  );
};

export const NoteHeaderLoading: React.FC = () => {
  return <Skeleton variant="text" sx={{ fontSize: '1rem', gridArea: 'note-header' }} />;
};
