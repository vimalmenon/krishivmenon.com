import React from 'react';

import { ThemeType, IGenericMethod } from '@types';

export interface IAppProvider {
  theme: ThemeType;
  drawerOpen: boolean;
  authorized: boolean | null;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAuthorized: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export interface IUseCommonContext {
  theme: ThemeType;
  drawerOpen: boolean;
  authorized: boolean | null;
  switchTheme: IGenericMethod;
  switchDrawer: IGenericMethod;
  setAuthorized: React.Dispatch<React.SetStateAction<boolean | null>>;
}
