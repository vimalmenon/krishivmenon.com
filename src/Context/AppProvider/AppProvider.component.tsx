import React from 'react';

import { ReactChildren, ThemeType } from '@types';

import { Context, initialValue } from './AppProvider.service';
import { useCommonLocalStorage } from '../LocalStorageProvider';

export const AppProvider: React.FC<ReactChildren> = ({ children }) => {
  const { storage } = useCommonLocalStorage();
  const [theme, setTheme] = React.useState<ThemeType>(initialValue.theme);
  const [drawerOpen, setDrawerOpen] = React.useState(initialValue.drawerOpen);
  React.useEffect(() => {
    setTheme((storage['theme'] as ThemeType) || 'dark');
  }, [storage.theme]);
  return (
    <Context.Provider value={{ theme, setTheme, drawerOpen, setDrawerOpen }}>
      {children}
    </Context.Provider>
  );
};
