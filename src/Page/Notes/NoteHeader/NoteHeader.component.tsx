import { Icon } from '@common';

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
        {mode === 'VIEW' && selectedNote?.id && (
          <Icon
            Icon={Icon.icons.Delete}
            label="Delete"
            onClick={() => selectedNote && onDeleteConfirm(selectedNote)}
          />
        )}
        {selectedNote?.id && mode === 'VIEW' && (
          <Icon Icon={Icon.icons.Edit} label="Edit" onClick={onNoteEdit} />
        )}
        {(mode === 'ADD' || mode === 'EDIT') && (
          <Icon Icon={Icon.icons.Cancel} label="Cancel" onClick={onNoteCancel} />
        )}
        {(mode === 'ADD' || mode === 'EDIT') && (
          <Icon Icon={Icon.icons.Save} label="Save" onClick={saveNote} />
        )}
      </div>
    </NoteHeaderRoot>
  );
};
