import React from 'react';

import { IGenericMethod, IGenericReturn } from '@types';
import { NotImplemented } from '@utility';

import { IAppProvider, IUseCommonContext } from './AppProvider';

export const initialValue: IAppProvider = {
  theme: 'dark',
  setTheme: NotImplemented,
  drawerOpen: true,
  setDrawerOpen: NotImplemented,
};

export const Context = React.createContext<IAppProvider>(initialValue);

export const useContext = (): IAppProvider => {
  return React.useContext<IAppProvider>(Context);
};

export const useCommonContext: IGenericReturn<IUseCommonContext> = () => {
  const { drawerOpen, setDrawerOpen, theme, setTheme } = React.useContext<IAppProvider>(Context);
  const switchDrawer: IGenericMethod = () => {
    setDrawerOpen(!drawerOpen);
  };
  const switchTheme: IGenericMethod = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return {
    switchDrawer,
    switchTheme,
  };
};

export const context = { useContext, useCommonContext };
