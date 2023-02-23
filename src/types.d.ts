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
  url: string;
  method?: MethodType;
  data?: T;
  params?: Record<string, string>;
  headers?: Record<string, string>;
}

export type PageModeType = 'ADD' | 'EDIT' | 'VIEW';

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

export interface IBaseDB {
  appKey?: string;
  sortKey?: string;
  createdBy?: string;
  createdDate?: string;
  updatedDate?: string;
}

export interface IFolder extends IBaseDB {
  id: string;
  metadata?: Record<string, string>;
  label: string;
  parent: string;
  files: [];
}

export interface IFile extends IBaseDB {
  id: string;
  name: string;
  metadata?: Record<string, string>;
  label: string;
  path: string;
  type: string;
}

export interface IBaseResponse<T = unknown> {
  message: string;
  data: T;
  code: number;
}

export interface IAuthResponse {
  picture: string;
  email: string;
  given_name: string;
  exp: number;
  iat: number;
}

export interface IProfile extends IBaseDB {
  name: string;
  role: string;
  email: string;
  avatar: string;
  provider: string;
}
