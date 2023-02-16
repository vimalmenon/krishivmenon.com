import React from 'react';

import { ENV } from '@constant';
import { ReactChildren, ThemeType } from '@types';

import { Context, initialValue } from './AppProvider.service';
import { useCommonLocalStorage } from '../LocalStorageProvider';

export const AppProvider: React.FC<ReactChildren> = ({ children }) => {
  const { getStorage } = useCommonLocalStorage();
  const [theme, setTheme] = React.useState<ThemeType>(initialValue.theme);
  const [drawerOpen, setDrawerOpen] = React.useState(initialValue.drawerOpen);
  const [authorized, setAuthorized] = React.useState<boolean>(initialValue.authorized);
  const [authorizing, setAuthorizing] = React.useState<boolean>(initialValue.authorizing);
  React.useEffect(() => {
    setTheme(getStorage<ThemeType>('theme') || 'dark');
  }, [getStorage<ThemeType>('theme')]);
  React.useEffect(() => {
    for (const value of Object.values(ENV)) {
      if (!value) {
        throw new Error('All env values are not set');
      }
    }
  }, []);
  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
        drawerOpen,
        authorized,
        authorizing,
        setDrawerOpen,
        setAuthorized,
        setAuthorizing,
      }}
    >
      {children}
    </Context.Provider>
  );
};
