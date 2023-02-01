import { INotes, PageModeType } from '@types';

export interface INote {
  id: string;
}

export interface IUseNote {
  id: string;
  mode: PageModeType;
  note: INotes;
  loading: boolean;
  updateValue: (key: string, value: string) => void;
  saveNote: IGenericReturn<Promise<void>>;
  setMode: React.Dispatch<React.SetStateAction<PageModeType>>;
}
