import React from 'react';

import { ReactChildren, ThemeType } from '@types';

import { Context, initialValue } from './AppProvider.service';

export const AppProvider: React.FC<ReactChildren> = ({ children }) => {
  const [theme, setTheme] = React.useState<ThemeType>(initialValue.theme);
  const [drawerOpen, setDrawerOpen] = React.useState(initialValue.drawerOpen);
  return (
    <Context.Provider value={{ theme, setTheme, drawerOpen, setDrawerOpen }}>
      {children}
    </Context.Provider>
  );
};
