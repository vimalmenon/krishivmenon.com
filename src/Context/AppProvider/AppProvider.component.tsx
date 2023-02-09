import React from 'react';

import { ReactChildren, ThemeType } from '@types';

import { Context, initialValue } from './AppProvider.service';
import { useCommonLocalStorage } from '../LocalStorageProvider';

export const AppProvider: React.FC<ReactChildren> = ({ children }) => {
  const { getStorage } = useCommonLocalStorage();
  const [theme, setTheme] = React.useState<ThemeType>(initialValue.theme);
  const [drawerOpen, setDrawerOpen] = React.useState(initialValue.drawerOpen);
  const [authorized, setAuthorized] = React.useState<boolean | null>(initialValue.authorized);
  React.useEffect(() => {
    setTheme(getStorage<ThemeType>('theme') || 'dark');
  }, [getStorage<ThemeType>('theme')]);
  return (
    <Context.Provider
      value={{ theme, setTheme, drawerOpen, setDrawerOpen, authorized, setAuthorized }}
    >
      {children}
    </Context.Provider>
  );
};
