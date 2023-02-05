import { IGenericMethod, IGeneric, INotes, IGenericParam } from '@types';

export interface IUseNotes {
  mode: PageModeType;
  notes: INotes[];
  loading: boolean;
  createNote: IGenericMethod;
  updateNote: (name: string, value: string) => void;
  deleteNote: IGeneric<INotes, Promise<void>>;
  selectedNote: INotes | null;
  saveNote: IGenericMethod;
  onNoteSelect: IGenericParam<INotes>;
  onNoteEdit: IGenericMethod;
  onNoteCancel: IGenericMethod;
}
