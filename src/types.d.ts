import { ReactNode } from 'react';

export interface ReactChildren {
  children: ReactNode;
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export type AnyType = any;

export type ThemeType = 'dark' | 'light';

export interface IBaseLayout {
  title: string;
}

export interface INotes {
  uid: string;
  title: string;
  content: string;
  creator: string;
  metadata: Record<string, string>;
  createdDate: string;
  updatedDate: string;
}

export type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface IApi<T = unknown> {
  url: string;
  method?: MethodType;
  data?: T;
  params?: Record<string, string>;
  headers?: Record<string, string>;
}

export type StorageFileType = 'image' | 'file' | 'video';

export type IGenericMethod = () => void;
export type IGenericReturn<T> = () => T;
export type IGenericParam<T> = (v: T) => void;
export type IGeneric<T, K> = (v: T) => K;

export interface IBaseContent {
  uid: string;
  alias: string;
  type: string;
  private?: boolean;
  orphan: boolean;
}

export interface IFile extends IBaseContent {
  path: string;
}
