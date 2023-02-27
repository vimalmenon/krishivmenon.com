import { IGenericMethod } from '@types';

export type IconTypes =
  | 'Google'
  | 'Home'
  | 'Photo'
  | 'Admin'
  | 'Save'
  | 'Delete'
  | 'Edit'
  | 'Cancel'
  | 'Add'
  | 'Check'
  | 'Folder'
  | 'CloudUpload'
  | 'UpArrow'
  | 'DownArrow'
  | 'Process';

export interface IIcon<T> {
  Icon: T;
  label?: string;
  onClick?: IGenericMethod;
  edge?: false | 'end' | 'start' | undefined;
}

export interface IIconStatic<T> {
  icons: Record<IconTypes, T>;
}
