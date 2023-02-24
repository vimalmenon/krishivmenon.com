import React from 'react';

import { AuthStatus } from '@constant';
import { IGenericReturn } from '@types';
import { NotImplemented } from '@utility';

import { IAppProvider } from './AppProvider';

export const initialValue: IAppProvider = {
  storage: {},
  theme: 'dark',
  profile: null,
  drawerOpen: false,
  setTheme: NotImplemented,
  setProfile: NotImplemented,
  setStorage: NotImplemented,
  setAuthStatus: NotImplemented,
  setDrawerOpen: NotImplemented,
  authStatus: AuthStatus.NotAuthenticated,
};

export const Context = React.createContext<IAppProvider>(initialValue);

export const useContext = (): IAppProvider => {
  return React.useContext<IAppProvider>(Context);
};

export const useCommonContext: IGenericReturn<IAppProvider> = () => {
  const {
    theme,
    profile,
    setTheme,
    storage,
    setStorage,
    drawerOpen,
    setProfile,
    authStatus,
    setAuthStatus,
    setDrawerOpen,
  } = React.useContext<IAppProvider>(Context);
  return {
    theme,
    storage,
    profile,
    authStatus,
    setTheme,
    setStorage,
    drawerOpen,
    setProfile,
    setAuthStatus,
    setDrawerOpen,
  };
};
