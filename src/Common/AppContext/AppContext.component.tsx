import React from 'react';

import { ReactChildren } from '@types';

import { Context, initialValue } from './AppContext.service';

export const AppContext: React.FC<ReactChildren> = ({ children }) => {
  const [theme, setTheme] = React.useState<'dark' | 'light'>(initialValue.theme);
  const [isAdmin, setAdmin] = React.useState<boolean>(initialValue.isAdmin);
  return (
    <Context.Provider value={{ theme, setTheme, isAdmin, setAdmin }}>{children}</Context.Provider>
  );
};
