import { IGenericMethod } from '@types';

export interface IIcon<T> {
  Icon: T;
  label?: string;
  onClick?: IGenericMethod;
}

export interface IIconStatic<T> {
  icons: Record<string, T>;
}
