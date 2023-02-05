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
  | 'CloudUpload';

export interface IIcon<T> {
  Icon: T;
  label?: string;
  onClick?: IGenericMethod;
}

export interface IIconStatic<T> {
  icons: Record<IconTypes, T>;
}
