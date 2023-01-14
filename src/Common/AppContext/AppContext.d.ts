import React from 'react';

import { ThemeType } from '@types';

export interface IAppContext {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  isAdmin: boolean;
  setAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
