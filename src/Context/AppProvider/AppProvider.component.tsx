import React from 'react';

import { IProfile, ReactChildren, ThemeType } from '@types';

import { Context, initialValue } from './AppProvider.service';
import { useCommonLocalStorage } from '../LocalStorageProvider';

export const AppProvider: React.FC<ReactChildren> = ({ children }) => {
  const { getStorage } = useCommonLocalStorage();
  const [theme, setTheme] = React.useState<ThemeType>(initialValue.theme);
  const [drawerOpen, setDrawerOpen] = React.useState(initialValue.drawerOpen);
  const [authorized, setAuthorized] = React.useState<boolean>(initialValue.authorized);
  const [authorizing, setAuthorizing] = React.useState<boolean>(initialValue.authorizing);
  const [profile, setProfile] = React.useState<IProfile | null>(initialValue.profile);
  const [storage, setStorage] = React.useState<Record<string, string>>(initialValue.storage);

  React.useEffect(() => {
    setTheme(getStorage<ThemeType>('theme') || 'dark');
  }, [getStorage<ThemeType>('theme')]);
  return (
    <Context.Provider
      value={{
        theme,
        storage,
        profile,
        setTheme,
        setStorage,
        setProfile,
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
