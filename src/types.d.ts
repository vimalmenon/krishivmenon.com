import { ReactNode } from 'react';

export interface ReactChildren {
  children: ReactNode;
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export type AnyType = any;

export type ThemeType = 'dark' | 'light';
