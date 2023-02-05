import { IGenericMethod, IGeneric, INotes, IGenericParam } from '@types';

export interface IUseNotes {
  notes: INotes[];
  loading: boolean;
  createNote: IGenericMethod;
  deleteNote: IGeneric<string, Promise<void>>;
  selectedNote: INotes | null;
  onNoteSelect: IGenericParam<INotes>;
}
