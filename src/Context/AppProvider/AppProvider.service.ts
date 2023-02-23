import React from 'react';

import { IGenericMethod, IGenericReturn } from '@types';
import { NotImplemented } from '@utility';

import { IAppProvider, IUseCommonContext } from './AppProvider';
import { useCommonLocalStorage } from '../index';

export const initialValue: IAppProvider = {
  storage: {},
  theme: 'dark',
  profile: null,
  authorized: false,
  drawerOpen: false,
  authorizing: false,
  setTheme: NotImplemented,
  setProfile: NotImplemented,
  setStorage: NotImplemented,
  setDrawerOpen: NotImplemented,
  setAuthorized: NotImplemented,
  setAuthorizing: NotImplemented,
};

export const Context = React.createContext<IAppProvider>(initialValue);

export const useContext = (): IAppProvider => {
  return React.useContext<IAppProvider>(Context);
};

export const useCommonContext: IGenericReturn<IUseCommonContext> = () => {
  const {
    theme,
    profile,
    setTheme,
    storage,
    setStorage,
    drawerOpen,
    authorized,
    setProfile,
    authorizing,
    setDrawerOpen,
    setAuthorized,
    setAuthorizing,
  } = React.useContext<IAppProvider>(Context);
  const { saveStorage } = useCommonLocalStorage();
  const switchDrawer: IGenericMethod = () => {
    setDrawerOpen(!drawerOpen);
  };
  const switchTheme: IGenericMethod = () => {
    saveStorage('theme', theme === 'dark' ? 'light' : 'dark');
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return {
    theme,
    storage,
    profile,
    setStorage,
    drawerOpen,
    authorized,
    setProfile,
    switchTheme,
    authorizing,
    switchDrawer,
    setAuthorized,
    setAuthorizing,
  };
};
