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

export interface IBaseDB {
  createdDate?: string;
  updatedDate?: string;
  sortKey?: string;
  createdBy?: string;
}
export interface INotes extends IBaseDB {
  id?: string;
  title: string;
  content: string;
  metadata: Record<string, string>;
}

export type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface IApi<T = unknown> {
  baseURL: string;
  url: string;
  method?: MethodType;
  data?: T;
  params?: Record<string, string>;
  headers?: Record<string, string>;
}

export type StorageKeyType = 'theme' | 'refreshToken' | 'idToken';

export type PageModeType = 'ADD' | 'EDIT' | 'VIEW';

export type IGenericMethod = () => void;
export type IGenericReturn<T> = () => T;
export type IGenericParam<T> = (v: T) => void;
export type IGeneric<T, K> = (v: T) => K;

export interface IBaseDB {
  createdBy?: string;
  createdDate?: string;
  updatedDate?: string;
}

export interface IFolder extends IBaseDB {
  id: string;
  metadata: Record<string, string>;
  label: string;
  parent: string;
  canCreateFolder: boolean;
  canUploadFile: boolean;
  canDeleteFolder: boolean;
}

export interface IGalleryFolder extends IFolder {
  breadcrumbs: string[];
  folders: string[];
  loading: boolean;
  files: IFile[];
  isFolderFolded: boolean;
  isFileFolded: boolean;
  selectedPage: number;
}

export interface IFile extends IBaseDB {
  id: string;
  name: string;
  metadata: Record<string, string>;
  label: string;
  path: string;
  type: string;
}

export interface IBaseResponse<T = unknown> {
  message: string;
  data: T;
  code: number;
}

export interface IProfile extends IBaseDB {
  name: string;
  role: string;
  email: string;
  avatar: string;
  provider: string;
}

declare module '@mui/material/styles' {
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom: {
      background: string;
    };
  }
  interface Theme {
    custom: {
      background: string;
    };
  }
}
