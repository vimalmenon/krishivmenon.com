import { PageModeType, INotes, IGenericMethod, IGenericParam } from '@types';

export interface INoteHeader {
  mode: PageModeType;
  selectedNote: INotes | null;
  createNote: IGenericMethod;
  onNoteEdit: IGenericMethod;
  onNoteCancel: IGenericMethod;
  saveNote: IGenericMethod;
  onDeleteConfirm: IGenericParam<INotes>;
}
