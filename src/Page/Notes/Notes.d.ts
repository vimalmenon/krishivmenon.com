import { IGenericMethod, INotes, IGenericParam } from '@types';

export interface IUseNotes {
  mode: PageModeType;
  notes: INotes[];
  loading: boolean;
  createNote: IGenericMethod;
  updateNote: (name: string, value: string) => void;
  deleteNote: IGenericReturn<Promise<void>>;
  selectedNote: INotes | null;
  saveNote: IGenericMethod;
  onNoteSelect: IGenericParam<INotes>;
  onNoteEdit: IGenericMethod;
  onNoteCancel: IGenericMethod;
  confirmDelete: INotes | null;
  onDeleteCancel: IGenericMethod;
  onDeleteConfirm: IGenericParam<INotes>;
}
