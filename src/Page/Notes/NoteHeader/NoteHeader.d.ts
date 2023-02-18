import { PageModeType, INotes, IGenericMethod, IGenericParam } from '@types';

export interface INoteHeader {
  mode: PageModeType;
  selectedNote: INotes | null;
  createNote: IGenericMethod;
  onNoteEdit: IGenericMethod;
  updateNote: (name: string, value: string) => void;
  onNoteCancel: IGenericMethod;
  saveNote: IGenericMethod;
  onDeleteConfirm: IGenericParam<INotes>;
}
