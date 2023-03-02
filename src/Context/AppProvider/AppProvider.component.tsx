import React from 'react';

import { AuthStatus, StorageKey } from '@constant';
import { IProfile, ReactChildren, ThemeType } from '@types';

import { Context, initialValue } from './AppProvider.service';

export const AppProvider: React.FC<ReactChildren> = ({ children }) => {
  const [theme, setTheme] = React.useState<ThemeType>(initialValue.theme);
  const [drawerOpen, setDrawerOpen] = React.useState(initialValue.drawerOpen);
  const [profile, setProfile] = React.useState<IProfile | null>(initialValue.profile);
  const [storage, setStorage] = React.useState<Record<string, string>>(initialValue.storage);
  const [authStatus, setAuthStatus] = React.useState<AuthStatus>(AuthStatus.NotAuthenticated);
  const [apiCount, setApiCount] = React.useState<number>(initialValue.apiCount);
  React.useEffect(() => {
    setStorage(JSON.parse(localStorage.getItem(StorageKey) || '{}'));
  }, []);
  React.useEffect(() => {
    setTheme((storage.theme as ThemeType) || 'dark');
  }, [storage]);
  return (
    <Context.Provider
      value={{
        theme,
        profile,
        storage,
        setTheme,
        apiCount,
        setStorage,
        setProfile,
        authStatus,
        drawerOpen,
        setApiCount,
        setDrawerOpen,
        setAuthStatus,
      }}
    >
      {children}
    </Context.Provider>
  );
};
