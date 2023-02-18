import { INotes, IGenericParam } from '@types';

export interface INoteListPage {
  notes: INotes[];
  onNoteSelect: IGenericParam<INotes>;
}
