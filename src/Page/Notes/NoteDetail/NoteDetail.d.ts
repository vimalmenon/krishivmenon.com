import { PageModeType, INotes } from '@types';

export interface INoteDetail {
  mode: PageModeType;
  selectedNote: INotes | null;
  updateNote: (name: string, value: string) => void;
}
