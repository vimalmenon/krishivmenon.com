import React from 'react';

import { ThemeType, IGenericMethod } from '@types';

export interface IAppContext {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IUseCommonContext {
  switchDrawer: IGenericMethod;
  switchTheme: IGenericMethod;
}
