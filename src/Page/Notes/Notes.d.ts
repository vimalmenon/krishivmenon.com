import { IGenericParam, INotes } from '@types';

export interface IUseNotes {
  notes: INotes[];
  loading: boolean;
  toNote: IGenericParam<string>;
  deleteNote: IGeneric<string, Promise<void>>;
}
