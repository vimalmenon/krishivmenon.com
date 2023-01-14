import React from 'react';

import { NotImplemented } from '@utility';

import { IAppContext } from './AppContext';

export const initialValue: IAppContext = {
  theme: 'dark',
  setTheme: NotImplemented,
  isAdmin: true,
  setAdmin: NotImplemented,
  drawerOpen: true,
  setDrawerOpen: NotImplemented,
};

export const Context = React.createContext<IAppContext>(initialValue);

export const useContext = (): IAppContext => {
  return React.useContext<IAppContext>(Context);
};
export const useThemeSwitcher = () => {
  const { theme, setTheme } = React.useContext<IAppContext>(Context);
  const switchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return {
    switchTheme,
  };
};

export const context = { useThemeSwitcher, useContext };
