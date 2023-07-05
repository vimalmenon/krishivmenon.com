import React from 'react';

import { IGenericReturn } from '@types';
import { NotImplemented } from '@utility';

import { IAppProvider } from './AppProvider';

export const initialValue: IAppProvider = {
  storage: {},
  apiCount: 0,
  theme: 'dark',
  profile: null,
  drawerOpen: false,
  setTheme: NotImplemented,
  setProfile: NotImplemented,
  setStorage: NotImplemented,
  setApiCount: NotImplemented,
  setDrawerOpen: NotImplemented,
};

export const Context = React.createContext<IAppProvider>(initialValue);

export const useContext = (): IAppProvider => {
  return React.useContext<IAppProvider>(Context);
};

export const useCommonContext: IGenericReturn<IAppProvider> = () => {
  const {
    theme,
    profile,
    storage,
    setTheme,
    apiCount,
    setStorage,
    drawerOpen,
    setProfile,
    setApiCount,
    setDrawerOpen,
  } = React.useContext<IAppProvider>(Context);
  return {
    theme,
    storage,
    profile,
    apiCount,
    setTheme,
    setStorage,
    drawerOpen,
    setProfile,
    setApiCount,
    setDrawerOpen,
  };
};
