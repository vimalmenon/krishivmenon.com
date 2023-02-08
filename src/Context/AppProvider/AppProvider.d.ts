import React from 'react';

import { ThemeType, IGenericMethod } from '@types';

export interface IAppProvider {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  authorized: boolean | null;
  setAuthorized: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export interface IUseCommonContext {
  switchDrawer: IGenericMethod;
  switchTheme: IGenericMethod;
  authorized: boolean | null;
  setAuthorized: React.Dispatch<React.SetStateAction<boolean | null>>;
}
