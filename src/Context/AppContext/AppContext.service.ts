import React from 'react';

import { IGenericMethod, IGenericReturn } from '@types';
import { NotImplemented } from '@utility';

import { IAppContext, IUseCommonContext } from './AppContext';

export const initialValue: IAppContext = {
  theme: 'dark',
  setTheme: NotImplemented,
  isAdmin: false,
  setAdmin: NotImplemented,
  drawerOpen: true,
  setDrawerOpen: NotImplemented,
};

export const Context = React.createContext<IAppContext>(initialValue);

export const useContext = (): IAppContext => {
  return React.useContext<IAppContext>(Context);
};

export const useCommonContext: IGenericReturn<IUseCommonContext> = () => {
  const { drawerOpen, setDrawerOpen, theme, setTheme } = React.useContext<IAppContext>(Context);
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
