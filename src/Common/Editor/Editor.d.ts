import { IGenericParam, PageModeType } from '@types';

export interface IEditor {
  mode: PageModeType;
  note: string;
  setNote: IGenericParam<string>;
}
